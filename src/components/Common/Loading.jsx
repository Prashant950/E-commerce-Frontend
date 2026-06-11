import React from 'react';

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="inline-block">
          <div className="w-12 h-12 border-4 border-luxury-200 border-t-gold-500 rounded-full animate-spin"></div>
        </div>
        <p className="mt-4 text-luxury-600 font-serif">Loading...</p>
      </div>
    </div>
  );
}
