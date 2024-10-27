import { DashboardSidebar } from "@/pages/dashboard/DashboardSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
 
 // Adjust the import according to your folder structure
import { Outlet } from "react-router-dom"; // Import Outlet from react-router-dom

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex w-screen">
        <DashboardSidebar /> {/* Sidebar should have a fixed width */}
        <main className="flex-1 flex flex-col">
          <SidebarTrigger />
          <div className="w-full h-full flex-1 p-4">
            <Outlet /> {/* This div will take full width and height */}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
