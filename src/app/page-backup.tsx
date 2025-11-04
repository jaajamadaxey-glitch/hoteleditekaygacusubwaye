"use client";

import { hotelData } from "@/lib/hotel-data";
import { Phone, Mail, MapPin, Star, Wifi, Coffee, Car, Dumbbell, Clock, Users } from "lucide-react";
import { AIChatbot } from "@/components/ai-chatbot";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            {hotelData.name}
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-blue-100">
            Experience Luxury in {hotelData.location.city}
          </p>
          <p className="text-lg mb-12 text-blue-200 max-w-2xl mx-auto">
            {hotelData.location.address}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${hotelData.contact.phone}`}
              className="px-10 py-5 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6" />
              Book Now
            </a>
            <a
              href="#rooms"
              className="px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl font-bold text-lg transition-all border-2 border-white/30 hover:border-white/50"
            >
              View Rooms
            </a>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="bg-white dark:bg-slate-800 shadow-2xl -mt-20 relative z-20 mx-4 md:mx-12 rounded-2xl p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
              <Wifi className="w-8 h-8 text-blue-600" />
            </div>
            <p className="font-bold text-slate-900 dark:text-white">Free Wi-Fi</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">High Speed</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
              <Coffee className="w-8 h-8 text-green-600" />
            </div>
            <p className="font-bold text-slate-900 dark:text-white">Breakfast</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Included</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
              <Car className="w-8 h-8 text-purple-600" />
            </div>
            <p className="font-bold text-slate-900 dark:text-white">Parking</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Free</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-4">
              <Dumbbell className="w-8 h-8 text-orange-600" />
            </div>
            <p className="font-bold text-slate-900 dark:text-white">Gym</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">24/7 Access</p>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-24 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-white">
              Our Rooms
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Comfortable accommodations for every traveler
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hotelData.rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-56 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center relative">
                  <Star className="w-20 h-20 text-white opacity-80" />
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Users className="w-5 h-5 text-white inline mr-2" />
                    <span className="text-white font-bold">{room.capacity}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
                    {room.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                    {room.description}
                  </p>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-blue-600">
                      {room.pricePerNight} ETB
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">/night</span>
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    <p>💼 {room.size}</p>
                    <p>🛏️ {room.beds}</p>
                  </div>
                  <a
                    href={`https://wa.me/${hotelData.contact.whatsapp.replace(/[^0-9]/g, '')}?text=I'm interested in booking a ${room.name}`}
                    className="block w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-xl font-semibold transition-all"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-24 px-4 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              Hotel Amenities
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Everything you need for a perfect stay
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hotelData.amenities.facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                  {facility.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {facility.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <Clock className="w-4 h-4" />
                  <span>{facility.hours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <a
              href={`tel:${hotelData.contact.phone}`}
              className="flex flex-col items-center gap-3 p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all"
            >
              <Phone className="w-10 h-10" />
              <span className="font-semibold">{hotelData.contact.phone}</span>
            </a>
            <a
              href={`mailto:${hotelData.contact.email}`}
              className="flex flex-col items-center gap-3 p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all"
            >
              <Mail className="w-10 h-10" />
              <span className="font-semibold">{hotelData.contact.email}</span>
            </a>
            <div className="flex flex-col items-center gap-3 p-6 bg-white/10 rounded-xl">
              <MapPin className="w-10 h-10" />
              <span className="font-semibold">{hotelData.location.city}</span>
            </div>
          </div>
          <p className="text-lg text-slate-300 mb-8">
            {hotelData.location.address}
          </p>
        </div>
      </section>

      {/* Chatbot and WhatsApp */}
      <AIChatbot />
      <FloatingWhatsApp />
    </div>
  );
}
