import { Inter, Cinzel, Great_Vibes, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import Header from '@/components/header'
import Footer from '@/components/footer'


const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cinzel = Cinzel({ 
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
})

const greatVibes = Great_Vibes({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
  display: 'swap',
})

const poppins = Poppins({ 
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata = {
  title: 'DEVAN MORRIS | Premium Wholesale Beauty & MedSpa Supplies',
  description:
    'Your trusted wholesale supplier for luxury cosmetics, beauty supplies, perfumes, and professional MedSpa equipment. Request your quote today.',
  keywords:
    'wholesale beauty, cosmetics supplier, MedSpa equipment, skin care wholesale, perfumes wholesale, beauty supplies',

  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}


export const viewport = {
  themeColor: '#d4a574',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable} ${greatVibes.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
              <Header />
        {children}
        <Toaster />
        <Footer/>
        <Analytics />
      </body>
    </html>
  )
}
