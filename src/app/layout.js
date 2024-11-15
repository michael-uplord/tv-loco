import { DM_Sans } from 'next/font/google'
import "../styles/style.scss";

const dmSans = DM_Sans({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
