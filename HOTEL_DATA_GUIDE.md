# Hotel Data Configuration Guide

## Overview
Your AI chatbot now retrieves all hotel information from a centralized data file. This makes it easy to update your hotel details without touching any code.

## How to Update Hotel Information

### Location: `src/lib/hotel-data.ts`

This single file contains ALL your hotel information that the AI chatbot uses to answer questions.

## What You Can Update

### 1. **Basic Information**
```typescript
name: "Grand Luxury Hotel"  // Your hotel name
```

### 2. **Location Details**
- Address
- City & Country
- Nearby attractions
- Transportation information
- GPS coordinates

### 3. **Contact Information**
- Phone number
- WhatsApp number (currently: +251948831748)
- Email address
- Website

### 4. **Room Types & Prices**
Each room includes:
- Name and description
- Prices (in Ethiopian Birr and USD)
- Room size
- Bed configuration
- Guest capacity
- List of amenities

**Current Rooms:**
- Standard Room: 1,500 ETB ($50 USD)
- Deluxe Room: 2,500 ETB ($85 USD)
- Premium Suite: 4,500 ETB ($150 USD)
- Family Room: 3,200 ETB ($110 USD)

### 5. **Amenities & Facilities**
- General hotel amenities
- Specific facilities (pool, gym, spa, restaurant, etc.)
- Operating hours
- Costs

### 6. **Dining Information**
- Restaurant details
- Breakfast information
- Operating hours
- Cuisine types
- Room service availability

### 7. **Policies**
- Check-in/Check-out times
- Cancellation policy
- Payment methods
- Pet policy
- Smoking policy
- Child policy

### 8. **Services**
- Airport transfers
- Tour arrangements
- Car rental

### 9. **Special Offers**
- Current promotions
- Discounts
- Packages

## How the AI Chatbot Works

The chatbot intelligently responds to questions about:

✅ **Location** - "Where is the hotel?", "How do I get there?"
✅ **Prices** - "How much are rooms?", "What are your rates?"
✅ **Rooms** - "Tell me about deluxe rooms", "What rooms do you have?"
✅ **Amenities** - "Do you have a pool?", "What facilities?"
✅ **Dining** - "What about breakfast?", "Restaurant hours?"
✅ **Booking** - "How do I book?", "Check availability"
✅ **Policies** - "Check-in time?", "Cancellation policy?"
✅ **Contact** - "How can I reach you?"

## Example Updates

### To Update Room Prices:
```typescript
{
  id: "deluxe",
  name: "Deluxe Room",
  pricePerNight: 3000,  // Change this
  pricePerNightUSD: 100, // And this
  // ... rest stays the same
}
```

### To Add a New Room Type:
```typescript
{
  id: "executive",
  name: "Executive Room",
  description: "Premium business-class accommodation",
  pricePerNight: 3500,
  pricePerNightUSD: 120,
  capacity: 2,
  size: "40 sqm",
  beds: "1 King Bed",
  amenities: [
    "Air Conditioning",
    "Free Wi-Fi",
    // ... add amenities
  ]
}
```

### To Update Location:
```typescript
location: {
  address: "Your actual hotel address",
  city: "Your city",
  country: "Ethiopia",
  // ... update other fields
}
```

## Important Notes

1. **Prices**: Update both ETB and USD prices for accuracy
2. **Contact Info**: Make sure WhatsApp number is correct (+251948831748)
3. **Real Data**: Replace placeholder data with your actual hotel information
4. **Amenities**: Be specific and accurate about what you offer
5. **Hours**: Keep operating hours up to date

## Testing the Chatbot

After updating the data, test the chatbot by asking questions like:
- "What are your room prices?"
- "Where is the hotel located?"
- "Tell me about your amenities"
- "What time is check-in?"

The chatbot will automatically use your updated information!

## Need Help?

If you need to add more question types or modify how the chatbot responds, the logic is in:
`src/app/api/chatbot/route.ts`

---

**Last Updated:** November 2025
