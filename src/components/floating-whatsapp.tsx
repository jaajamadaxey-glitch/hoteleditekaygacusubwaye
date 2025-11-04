"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";

export function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "+251948831748";
  const message = encodeURIComponent("Hello! I'd like to inquire about your hotel.");

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${message}`;
    
    // Check if running in an iframe
    const isInIframe = window.self !== window.top;
    
    if (isInIframe) {
      // Send message to parent window to open URL
      window.parent.postMessage(
        { 
          type: "OPEN_EXTERNAL_URL", 
          data: { url: whatsappUrl } 
        }, 
        "*"
      );
    } else {
      // Normal browser environment
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      {isHovered && (
        <span className="absolute right-16 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white dark:bg-gray-100 dark:text-gray-900">
          Chat on WhatsApp
        </span>
      )}
    </button>
  );
}