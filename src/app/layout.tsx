import './globals.css'

export const metadata = {
  title: 'Kurogami Hub',
  description: 'Cinematic cyberpunk command center experience'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#02040f] text-white min-h-screen">{children}</body>
    </html>
  )
}
