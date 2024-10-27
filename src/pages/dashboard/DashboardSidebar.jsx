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
import { Link } from "react-router-dom";
import logo from "../../assets/logo.gif";

export function DashboardSidebar() {
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
                          to={"/sf2"}
                          icon={List}
                          label="List View"
                        />
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarNavLink
                          to={"/sf1"}
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
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
