"use client";

import { useState, useEffect } from "react";
import { hotelData } from "@/lib/hotel-data";
import { Phone, Mail, MapPin, Star, Wifi, Coffee, Car, Users, ArrowRight, Check, Sparkles, Building, Calendar, Clock, ChevronLeft, ChevronRight, Quote, Play, Bed, Shield, Award, Dumbbell, Bath, Utensils, Plane } from "lucide-react";
import { AIChatbot } from "@/components/ai-chatbot";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const testimonials = [
    {
      text: "The transparency pricing ensured there were no hidden fees, which greatly built trust. Additionally multi language support made accessible for international travellers like myself. The dynamic calendar feature that showed room availability in real-time was a huge bonus.",
      author: "Jessica Adams",
      position: "CEO at Finteck",
      rating: 5
    },
    {
      text: "The inclusion of filters to refines that's my search by price amenities, and room type saved me a great deal of time. When I encountered a question, the integrated live chat support was prompt and helpful, offering personalized assistance within moments.",
      author: "Steven Philips",
      position: "CEO at Taskbes",
      rating: 5
    },
    {
      text: "This platform does not just in serve as a booking tool but also creates a bridge of communication between guests and hotels, ensuring a personalized experiences. I would highly recommend luxury accommodations.",
      author: "Helena Smith",
      position: "CEO at Bezify",
      rating: 5
    },
  ];

  const galleryImages = [
    "/api/placeholder/800/600",
    "/api/placeholder/800/600",
    "/api/placeholder/800/600",
    "/api/placeholder/800/600",
    "/api/placeholder/800/600",
    "/api/placeholder/800/600"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with Video Background Effect */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/80 to-amber-950/90 z-10"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="relative z-20 text-center px-4 max-w-7xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-6 py-2 bg-amber-500/20 backdrop-blur-sm text-amber-200 rounded-full text-sm font-semibold tracking-wider uppercase">
              Welcome to Luxorefi
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
            Luxury Living,<br/>
            <span className="text-amber-400">One Booking Away</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-amber-100 max-w-3xl mx-auto leading-relaxed">
            Experience unparalleled elegance in the heart of {hotelData.location.city}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#rooms"
              className="group px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
            >
              Explore Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`tel:${hotelData.contact.phone}`}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full font-semibold text-lg transition-all border-2 border-white/30 hover:border-white/50 flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Book Direct
            </a>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-wider">Accommodation</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-gray-900 dark:text-white">
              Luxorefi Hotel in the<br/>
              Heart of {hotelData.location.city}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              Luxury hotel strategically located near major transit hubs like airports & railway stations offers 
              unparalleled convenience for travellers. Nestled just steps away from iconic tourist destinations, 
              including historic caves and bustling marketplaces, this luxury hotel serves as the perfect retreat 
              for both leisure and business guests.
            </p>
            <a
              href="#rooms"
              className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-600 font-semibold text-lg transition-colors"
            >
              More About
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <Building className="w-32 h-32 text-white/50" />
              </div>
            </div>
            {/* Stats Cards */}
            <div className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl">
              <div className="text-3xl font-bold text-amber-500">500+</div>
              <div className="text-gray-600 dark:text-gray-400">Happy Guests</div>
            </div>
            <div className="absolute -top-8 -right-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl">
              <div className="text-3xl font-bold text-amber-500">4.9★</div>
              <div className="text-gray-600 dark:text-gray-400">Guest Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-24 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-wider">Rooms & Suites</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
              Explore Rooms and Suites
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hotelData.rooms.map((room, index) => (
              <div
                key={room.id}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Image with gradient overlay */}
                <div className="relative h-64 bg-gradient-to-br from-amber-400 to-amber-600">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-3xl font-bold">${room.pricePerNightUSD}</div>
                    <div className="text-sm opacity-90">/Night</div>
                  </div>
                  <a
                    href={`https://wa.me/${hotelData.contact.whatsapp.replace(/[^0-9]/g, '')}?text=I'm interested in booking a ${room.name}`}
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-900 px-4 py-2 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    View
                  </a>
                </div>
                {/* Room Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {room.name}
                  </h3>
                  <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 text-sm">
                    <div className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      <span>{room.size}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      <span>{room.capacity} Sleeps</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-full font-semibold transition-all transform hover:scale-105"
            >
              View All Rooms
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Hotel Facilities Section */}
      <section className="py-24 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-wider">Hotel Facilities</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-gray-900 dark:text-white">
              Our Luxorefi Hotel Facilities
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
              This luxury hotel serves as the perfect retreat for both leisure and business guests.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                  <Home className="w-8 h-8 text-amber-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Exclusive Suites</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Spacious rooms are a hallmark of luxury hotels, designed to provide guests with ample space to relax.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <Wifi className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Free Wi-Fi</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Spacious rooms are a hallmark of luxury hotels, designed to provide guests with ample space to relax.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <Bath className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Infinity Pools</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Spacious rooms are a hallmark of luxury hotels, designed to provide guests with ample space to relax.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Spa & Wellness</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Spacious rooms are a hallmark of luxury hotels, designed to provide guests with ample space to relax.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                  <Car className="w-8 h-8 text-orange-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Luxury Transport</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Spacious rooms are a hallmark of luxury hotels, designed to provide guests with ample space to relax.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">24/7 Hotel Staff</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Spacious rooms are a hallmark of luxury hotels, designed to provide guests with ample space to relax.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot and WhatsApp */}
      <AIChatbot />
      <FloatingWhatsApp />
    </div>
  );
}
