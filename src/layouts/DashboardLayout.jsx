import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
 
 // Adjust the import according to your folder structure
import { Outlet } from "react-router-dom"; // Import Outlet from react-router-dom

const DashboardLayout = () => {
  return (
    <SidebarProvider>
        <AppSidebar/>
        <main>
            <SidebarTrigger/>
            <Outlet/>
        </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
