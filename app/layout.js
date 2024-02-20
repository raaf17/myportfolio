import { Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/utils/theme-provider"
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin']
  , weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata = {
  title: 'Muhammad Rafi',
  description: 'I am a student at SMKN 1 Boyolangu Tulungagung. I am interested in learning programming because my dream is to become a programmer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
