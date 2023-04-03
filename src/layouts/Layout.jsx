import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex-col bg-background">
      <div className="mx-auto h-full w-full max-w-7xl flex-col">
        <div className="border-b border-accent-200">
          <Navbar />
        </div>
        {children}
        <Footer />
      </div>
    </div>
  );
}
