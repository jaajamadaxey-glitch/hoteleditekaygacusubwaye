// Hotel Data Configuration
// Update this file with your actual hotel information

export const hotelData = {
  name: "Grand Luxury Hotel",
  
  location: {
    address: "123 Main Street, Addis Ababa, Ethiopia",
    city: "Addis Ababa",
    country: "Ethiopia",
    coordinates: {
      latitude: 9.0320,
      longitude: 38.7469
    },
    nearbyAttractions: [
      "National Museum - 2km",
      "Holy Trinity Cathedral - 3km",
      "Mercato Market - 4km",
      "Bole International Airport - 8km"
    ],
    transportation: "Free airport shuttle service available. Taxi services readily accessible."
  },

  contact: {
    phone: "+251948831748",
    whatsapp: "+251948831748",
    email: "info@grandluxuryhotel.com",
    website: "www.grandluxuryhotel.com"
  },

  rooms: [
    {
      id: "standard",
      name: "Standard Room",
      description: "Comfortable and cozy room perfect for solo travelers or couples",
      pricePerNight: 1500, // Ethiopian Birr
      pricePerNightUSD: 50,
      capacity: 2,
      size: "25 sqm",
      beds: "1 Queen Bed",
      amenities: [
        "Air Conditioning",
        "Free Wi-Fi",
        "Flat-screen TV",
        "Private Bathroom",
        "Mini Fridge",
        "Safe",
        "Daily Housekeeping"
      ]
    },
    {
      id: "deluxe",
      name: "Deluxe Room",
      description: "Spacious room with modern amenities and city views",
      pricePerNight: 2500,
      pricePerNightUSD: 85,
      capacity: 2,
      size: "35 sqm",
      beds: "1 King Bed or 2 Twin Beds",
      amenities: [
        "Air Conditioning",
        "Free Wi-Fi",
        "Smart TV",
        "Premium Bathroom",
        "Mini Bar",
        "Work Desk",
        "Balcony",
        "Coffee Maker",
        "Safe"
      ]
    },
    {
      id: "suite",
      name: "Premium Suite",
      description: "Luxurious suite with separate living area and panoramic views",
      pricePerNight: 4500,
      pricePerNightUSD: 150,
      capacity: 4,
      size: "55 sqm",
      beds: "1 King Bed + Sofa Bed",
      amenities: [
        "Air Conditioning",
        "Free Wi-Fi",
        "Smart TV in bedroom and living room",
        "Luxury Bathroom with Bathtub",
        "Full Mini Bar",
        "Living Room",
        "Dining Area",
        "Kitchenette",
        "Private Balcony",
        "Coffee & Tea Station",
        "Safe",
        "Premium Toiletries"
      ]
    },
    {
      id: "family",
      name: "Family Room",
      description: "Spacious room designed for families with children",
      pricePerNight: 3200,
      pricePerNightUSD: 110,
      capacity: 5,
      size: "45 sqm",
      beds: "1 King Bed + 2 Twin Beds",
      amenities: [
        "Air Conditioning",
        "Free Wi-Fi",
        "2 Flat-screen TVs",
        "Large Bathroom",
        "Mini Fridge",
        "Extra Beds Available",
        "Safe",
        "Kids Welcome Pack"
      ]
    }
  ],

  amenities: {
    general: [
      "24-Hour Front Desk",
      "Free Wi-Fi Throughout",
      "Free Parking",
      "Airport Shuttle Service (Fee applies)",
      "Concierge Service",
      "Luggage Storage",
      "Currency Exchange",
      "Laundry & Dry Cleaning",
      "Business Center"
    ],
    facilities: [
      {
        name: "Swimming Pool",
        description: "Outdoor rooftop pool with city views",
        hours: "6:00 AM - 10:00 PM",
        cost: "Free for hotel guests"
      },
      {
        name: "Fitness Center",
        description: "Modern gym with cardio and weight training equipment",
        hours: "24 Hours",
        cost: "Free for hotel guests"
      },
      {
        name: "Spa & Wellness",
        description: "Full-service spa offering massages and treatments",
        hours: "9:00 AM - 9:00 PM",
        cost: "Paid services, starting from 800 ETB"
      },
      {
        name: "Restaurant",
        description: "On-site restaurant serving local and international cuisine",
        hours: "6:30 AM - 11:00 PM",
        cost: "Varied menu pricing"
      },
      {
        name: "Bar & Lounge",
        description: "Rooftop bar with cocktails and light bites",
        hours: "4:00 PM - 1:00 AM",
        cost: "Varied pricing"
      },
      {
        name: "Meeting Rooms",
        description: "3 conference rooms with AV equipment",
        capacity: "10-100 people per room",
        cost: "Hourly rental available"
      }
    ]
  },

  dining: {
    breakfast: {
      included: true,
      description: "Complimentary buffet breakfast with local and international options",
      hours: "6:30 AM - 10:30 AM",
      location: "Main Restaurant"
    },
    restaurant: {
      name: "The Grand Restaurant",
      cuisine: "Ethiopian & International",
      hours: {
        breakfast: "6:30 AM - 10:30 AM",
        lunch: "12:00 PM - 3:00 PM",
        dinner: "6:00 PM - 11:00 PM"
      },
      specialties: [
        "Traditional Ethiopian Dishes",
        "Grilled Meats",
        "Fresh Seafood",
        "Vegetarian Options"
      ]
    },
    roomService: {
      available: true,
      hours: "24/7",
      fee: "10% service charge applied"
    }
  },

  policies: {
    checkIn: "2:00 PM",
    checkOut: "12:00 PM (Noon)",
    earlyCheckIn: "Subject to availability, may incur additional charge",
    lateCheckOut: "Subject to availability, may incur additional charge",
    cancellation: "Free cancellation up to 48 hours before arrival. Late cancellations or no-shows are charged one night's stay.",
    payment: [
      "Cash (Ethiopian Birr)",
      "Credit Cards (Visa, Mastercard)",
      "Bank Transfer"
    ],
    petPolicy: "Pets not allowed",
    smokingPolicy: "Non-smoking property. Designated smoking areas available.",
    childPolicy: "Children of all ages welcome. Children under 6 stay free when using existing beds."
  },

  specialOffers: [
    {
      name: "Extended Stay Discount",
      description: "Stay 5 nights or more and get 15% off total booking",
      validUntil: "Ongoing"
    },
    {
      name: "Weekend Special",
      description: "Book Friday-Sunday and get complimentary spa voucher",
      validUntil: "Ongoing"
    }
  ],

  languages: ["English", "Amharic", "Arabic", "Italian"],

  services: {
    airportTransfer: {
      available: true,
      cost: "500 ETB one-way",
      description: "Private car service to/from Bole International Airport"
    },
    tourArrangement: {
      available: true,
      description: "Our concierge can arrange city tours and excursions"
    },
    carRental: {
      available: true,
      description: "Car rental service with driver available"
    }
  }
};

// Helper function to format prices
export function formatPrice(priceETB: number, priceUSD?: number): string {
  if (priceUSD) {
    return `${priceETB} ETB (≈$${priceUSD} USD) per night`;
  }
  return `${priceETB} ETB per night`;
}

// Helper function to get room by ID
export function getRoomById(roomId: string) {
  return hotelData.rooms.find(room => room.id === roomId);
}

// Helper function to get all room prices
export function getAllRoomPrices() {
  return hotelData.rooms.map(room => ({
    name: room.name,
    price: formatPrice(room.pricePerNight, room.pricePerNightUSD)
  }));
}
