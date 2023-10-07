import Navbar from '@/components/Layouts/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Layouts/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Animasu',
  description: 'Animasu, Generate your favorite anime',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='bg-secondary'>
          <Navbar/>
          <div>{children}</div>
          <Footer/>
        </div>
        
      </body>
    </html>
  )
}
