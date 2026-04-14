import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="relative">
        {children}
      </main>
      <Footer />
    </>
  );
}
