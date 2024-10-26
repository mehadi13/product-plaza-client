import { Toaster } from "@/components/ui/toaster";
import Footer from "@/pages/shared/Footer";
import Header from "@/pages/shared/Header";

import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="">
      <Header />
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <Outlet />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
};

export default RootLayout;
