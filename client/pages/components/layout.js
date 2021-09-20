// Import area 
import Navbar from './header/navbar'
import Footer from './footer/footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
        <main>{children}</main>
      <Footer />
    </>
  )
}