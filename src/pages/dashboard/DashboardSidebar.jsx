import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Collapsible } from "@radix-ui/react-collapsible";
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../components/ui/collapsible";
import { List, Plus, Table, Type, User } from "lucide-react";
import SidebarNavLink from "../../components/SidebarNavLink";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.gif";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/provider/AuthProvider";
import { useContext } from "react";

export function DashboardSidebar() {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>

          <SidebarGroupContent>
            <Link to="/" className="flex items-center gap-1">
              <img className="w-12" src={logo} alt="logo" />
              <span className="font-bold text-nowrap hover:shadow-2xl hover:text-yellow-600">
                Product Plaza
              </span>
            </Link>
          </SidebarGroupContent>
          
          <SidebarGroupContent>
            <SidebarMenu>
              <Collapsible open className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <Type />
                      <span>Category</span>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarNavLink
                          to={"/dashboard/categories"}
                          icon={List}
                          label="List View"
                        />
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarNavLink
                          to={"/dashboard/categories/new"}
                          icon={Plus}
                          label="Add New"
                        />
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>

          <SidebarGroupContent>
            <SidebarMenu>
              <Collapsible open className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <Table />
                      <span>Product</span>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarNavLink
                          to={"/dashboard/products"}
                          icon={List}
                          label="List View"
                        />
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarNavLink
                          to={"/dashboard/products/new"}
                          icon={Plus}
                          label="Add New"
                        />
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>

          <SidebarGroupContent>
            <SidebarMenu>
              <Collapsible open className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <User />
                      <span>User</span>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarNavLink
                          to={"/dashboard/users"}
                          icon={List}
                          label="List View"
                        />
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarNavLink
                          to={"/dashboard/users"}
                          icon={Plus}
                          label="Add New"
                        />
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>

          <SidebarGroupContent>
            <Separator/>
            <div className="mt-2 grid justify-center">
            <Button onClick={handleSignOut} className="bg-yellow-600 text-blue-700 hover:bg-yellow-400">Log Out</Button>
            </div>
          </SidebarGroupContent>

        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
