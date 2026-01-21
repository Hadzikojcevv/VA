import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

export default function DesignLayout({children}: {children: React.ReactNode}) {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}

