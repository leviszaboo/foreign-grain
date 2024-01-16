import "@/app/styles/_global.css"
import "@/app/styles/mainpage.css"
import "@/app/styles/work.css"
import "@/app/styles/contact.css"
import "@/app/styles/aboutme.css"
import MenuButton from "./components/Menu/MenuButton/MenuButton"

export const metadata = {
  title: 'Luigi Simiani',
  description: 'Portfolio 2023',
}

export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <MenuButton />
        {children}
      </body>
    </html>
  )
}
