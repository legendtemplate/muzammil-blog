import dynamic from "next/dynamic";
const Header = dynamic(() => import("./header"));
const Footer = dynamic(() => import("./footer"));
const Navbar = dynamic(() => import("./navbar"));
const Fixed = dynamic(() => import("./fixed"));
const Newsletter = dynamic(() => import("./newsletter"));

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: DashboardLayoutProps) {
  return (
    <>
      {/* <Fixed /> */}
      <Header />
      <Navbar />
      {children}
      <Newsletter />
      <Footer />
    </>
  );
}
