"use client";

import { siteConfig } from "@/config/nav";

export function WhatsAppButton() {
  return (
    <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Escríbenos por WhatsApp" className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center">
      <span aria-hidden="true" className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg ring-2 ring-gold transition-transform hover:scale-105">
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" aria-hidden="true">
          <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.653 4.62 1.789 6.53L4 29l7.65-1.744A11.93 11.93 0 0 0 16.001 27C22.63 27 28 21.627 28 15S22.63 3 16.001 3zm0 21.818a9.77 9.77 0 0 1-4.98-1.363l-.357-.212-3.65.833.87-3.556-.232-.366A9.77 9.77 0 0 1 6.182 15c0-5.42 4.4-9.818 9.819-9.818S25.818 9.58 25.818 15 21.42 24.818 16.001 24.818zm5.4-7.34c-.296-.148-1.75-.864-2.022-.963-.271-.1-.469-.148-.667.148-.198.296-.766.963-.939 1.161-.173.198-.346.222-.642.074-.296-.148-1.249-.46-2.38-1.469-.879-.784-1.473-1.752-1.646-2.048-.173-.296-.019-.456.13-.604.133-.132.296-.346.444-.518.148-.173.198-.296.296-.494.099-.198.05-.371-.025-.519-.074-.148-.667-1.607-.914-2.202-.24-.577-.485-.499-.667-.508-.173-.008-.371-.01-.568-.01-.198 0-.519.074-.79.371-.271.296-1.037 1.013-1.037 2.472s1.062 2.867 1.21 3.065c.148.198 2.09 3.19 5.062 4.474.708.306 1.26.489 1.69.626.71.226 1.356.194 1.867.118.57-.085 1.75-.716 1.997-1.407.247-.692.247-1.284.173-1.408-.074-.123-.271-.198-.568-.346z" />
        </svg>
      </span>
    </a>
  );
}