import Footer from "../ui-components/Footer";
import Navbar from "../ui-components/Navbar";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar/>
      {children}
      <Footer/>
    </>
  );
}
