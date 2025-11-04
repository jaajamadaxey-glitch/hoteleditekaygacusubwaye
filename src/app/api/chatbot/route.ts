import { NextResponse } from "next/server";
import { hotelData } from "@/lib/hotel-data";

interface Message {
  role: string;
  content: string;
}

// Function to search website content for relevant information
function searchWebsiteContent(query: string): string {
  const lowerQuery = query.toLowerCase();
  let relevantInfo: string[] = [];

  // Search all hotel data sections
  if (lowerQuery.match(/(location|address|where|find|situated)/)) {
    relevantInfo.push(`Location: ${hotelData.location.address}, ${hotelData.location.city}, ${hotelData.location.country}`);
    relevantInfo.push(`Nearby: ${hotelData.location.nearbyAttractions.join(', ')}`);
  }

  if (lowerQuery.match(/(price|cost|rate|room|accommodation)/)) {
    hotelData.rooms.forEach(room => {
      relevantInfo.push(`${room.name}: ${room.pricePerNight} ETB ($${room.pricePerNightUSD}) - ${room.description}`);
    });
  }

  if (lowerQuery.match(/(amenity|amenities|facility|facilities|pool|gym|spa|restaurant)/)) {
    relevantInfo.push(`General Amenities: ${hotelData.amenities.general.join(', ')}`);
    hotelData.amenities.facilities.forEach(facility => {
      relevantInfo.push(`${facility.name}: ${facility.description} (${facility.hours})`);
    });
  }

  if (lowerQuery.match(/(food|dining|restaurant|breakfast|eat)/)) {
    relevantInfo.push(`Breakfast: ${hotelData.dining.breakfast.description} (${hotelData.dining.breakfast.hours})`);
    relevantInfo.push(`Restaurant: ${hotelData.dining.restaurant.name} - ${hotelData.dining.restaurant.cuisine}`);
  }

  if (lowerQuery.match(/(contact|phone|email|whatsapp)/)) {
    relevantInfo.push(`Contact: Phone ${hotelData.contact.phone}, Email ${hotelData.contact.email}, WhatsApp ${hotelData.contact.whatsapp}`);
  }

  if (lowerQuery.match(/(policy|check-in|check-out|cancel)/)) {
    relevantInfo.push(`Check-in: ${hotelData.policies.checkIn}, Check-out: ${hotelData.policies.checkOut}`);
    relevantInfo.push(`Cancellation: ${hotelData.policies.cancellation}`);
  }

  return relevantInfo.length > 0 ? relevantInfo.join('\n') : '';
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const userMessage = body.message;
    const conversationHistory = body.history || [];

    if (!userMessage) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // First, search website content
    const websiteContent = searchWebsiteContent(userMessage);

    // Check if OpenRouter API key is available
    const openrouterApiKey = process.env.OPENROUTER_API_KEY;

    if (!openrouterApiKey) {
      // Fallback to simple pattern matching if no API key
      return NextResponse.json({
        response: websiteContent || 
          `I found information about your question. For specific details, please contact us at ${hotelData.contact.whatsapp}.`,
        source: "website"
      });
    }

    // Build context for AI with hotel data
    const hotelContext = `
=== HOTEL INFORMATION ===
Name: ${hotelData.name}
Location: ${hotelData.location.address}, ${hotelData.location.city}, ${hotelData.location.country}
Contact: WhatsApp ${hotelData.contact.whatsapp}, Phone ${hotelData.contact.phone}, Email ${hotelData.contact.email}

Rooms & Prices:
${hotelData.rooms.map(r => `- ${r.name}: ${r.pricePerNight} ETB ($${r.pricePerNightUSD} USD) per night
  ${r.description}
  Capacity: ${r.capacity} guests, Size: ${r.size}
  Amenities: ${r.amenities.join(', ')}`).join('\n')}

General Amenities: ${hotelData.amenities.general.join(', ')}

Facilities:
${hotelData.amenities.facilities.map(f => `- ${f.name}: ${f.description} (${f.hours})`).join('\n')}

Dining:
- Breakfast: ${hotelData.dining.breakfast.description} (${hotelData.dining.breakfast.hours})
- Restaurant: ${hotelData.dining.restaurant.name} - ${hotelData.dining.restaurant.cuisine}
- Room Service: Available 24/7

Policies:
- Check-in: ${hotelData.policies.checkIn}
- Check-out: ${hotelData.policies.checkOut}
- Cancellation: ${hotelData.policies.cancellation}
- Payment: ${hotelData.policies.payment.join(', ')}

Website Search Results:
${websiteContent || 'No specific matches for this query.'}
======================
`;

    const systemPrompt = `You are an intelligent hotel assistant for ${hotelData.name}. Your capabilities:

1. **PRIMARY ROLE**: Answer questions about the hotel using the detailed information provided above
2. **SECONDARY ROLE**: If the question is NOT about the hotel OR you need additional information, you can search the web
3. **ALWAYS PRIORITIZE**: Hotel information first, then general knowledge

Guidelines:
- Be friendly, professional, and helpful
- **Keep responses SHORT and concise** - 2-3 sentences for simple questions
- Only provide longer, detailed answers when the question specifically requires it or asks for details
- Use bullet points sparingly - only for listing multiple items
- Get straight to the point - no lengthy introductions
- Always include WhatsApp contact (${hotelData.contact.whatsapp}) only when relevant for bookings
- If asked about general topics (weather, attractions, city info), provide brief helpful answers
- For questions you can't answer with confidence, be honest and suggest contacting the hotel directly

${hotelContext}`;

    // Call OpenRouter API with web search enabled
    const openrouterResponse = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openrouterApiKey}`,
        'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
        'X-Title': 'Hotel AI Chatbot'
      },
      body: JSON.stringify({
        model: 'openai/gpt-3.5-turbo', // Fast and cost-effective model
        messages: [
          { role: 'system', content: systemPrompt },
          ...conversationHistory.slice(-6).map((msg: Message) => ({
            role: msg.role === 'user' ? 'user' : 'assistant',
            content: msg.content
          })),
          { role: 'user', content: userMessage }
        ],
        temperature: 0.7,
        max_tokens: 300
      })
    });

    if (!openrouterResponse.ok) {
      const errorData = await openrouterResponse.json();
      console.error('OpenRouter API error:', errorData);
      throw new Error(`OpenRouter API error: ${openrouterResponse.statusText}`);
    }

    const openrouterData = await openrouterResponse.json();
    const aiResponse = openrouterData.choices[0]?.message?.content || 
      "I apologize, I couldn't generate a response. Please contact us directly.";

    return NextResponse.json({
      response: aiResponse,
      source: websiteContent ? "website + ai" : "ai",
      model: "gpt-3.5-turbo"
    });

  } catch (error) {
    console.error("Chatbot API error:", error);
    
    // Fallback response with hotel information
    return NextResponse.json({
      response: `I apologize for the technical difficulty. Here's what I can help with:\n\n` +
        `🏨 **${hotelData.name}**\n` +
        `📍 **Location:** ${hotelData.location.address}\n` +
        `💰 **Rooms starting from:** ${hotelData.rooms[0].pricePerNight} ETB ($${hotelData.rooms[0].pricePerNightUSD} USD)\n` +
        `📱 **Contact:** ${hotelData.contact.whatsapp}\n\n` +
        `For immediate assistance, please WhatsApp us at ${hotelData.contact.whatsapp}`,
      source: "fallback"
    });
  }
}