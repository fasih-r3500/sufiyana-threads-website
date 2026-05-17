import { Poppins } from 'next/font/google'
import Navbar from './utlis/Navbar/Navbar'
import Footer from './components/footer/footer'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
