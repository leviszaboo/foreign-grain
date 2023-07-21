import "/Users/leventeszabo/Desktop/website/website.html/website-next13/app/styles/_global.css"

export const metadata = {
  title: 'Luigi Simiani',
  description: 'Portfolio 2023',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
