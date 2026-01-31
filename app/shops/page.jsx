// app/shop/page.jsx (Server Component )
import { Suspense } from 'react';
import ShopClient from './ShopClient';

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-[#D5CE95]/30 border-t-[#D5CE95] rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-charcoal font-medium">Loading premium products...</p>
          </div>
        </div>
      }
    >
      <ShopClient />
    </Suspense>
  );
}