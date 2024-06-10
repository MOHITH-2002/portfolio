import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-providers'
import { Toaster } from 'sonner';
import Navbar from '@/components/Navbar/Navbar';
import { cn } from '@/lib/utils';
import Footer from '@/components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mohith B A',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={cn(inter.className, "bg-[#101111] flex flex-col justify-between")}>
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          > 


          <Navbar/>
            <Toaster/>
            {children}
          <Footer/>
          </ThemeProvider>
        </body>
    </html>
  )
}
