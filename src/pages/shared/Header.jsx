import { CircleUser, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Link, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "../../assets/logo.gif";
import { useContext, useState } from "react";
import { AuthContext } from "@/provider/AuthProvider";
import { Separator } from "@/components/ui/separator";

function Header() {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleDropdownClick = () => {
    setIsDropdownOpen(false);
  };

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
    <header className="border-b bg-background sticky top-0 z-20">
      <div className="grid place-content-center md:hidden">
        <Link to="/" className="flex items-center gap-1">
          <img className="w-12" src={logo} alt="logo" />
          <span className="cookie-regular font-bold text-nowrap">
            Product Plaza
          </span>
        </Link>
      </div>
      <Separator />
      <div className="mx-auto max-w-screen-xl flex h-12 md:h-16 items-center gap-4 px-4 sm:px-6 lg:px-8">
        <div className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link to="/" className="md:flex md:items-center md:gap-1">
            <img className="w-20" src={logo} alt="logo" />
            <span className="cookie-regular font-bold text-nowrap text-lg">
              Product Plaza
            </span>
          </Link>
        </div>

        <div className="hidden flex-1 md:flex justify-center">
          <div className="grid grid-cols-2 gap-3 place-content-center">
            <Link
              to="/"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-muted-foreground transition-colors hover:text-foreground">
                Products
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel className="font-medium">
                  Categories
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="my-1" />
                <DropdownMenuItem className="transition-colors hover:bg-blue-100 hover:text-blue-800">
                  Electronics
                </DropdownMenuItem>
                <DropdownMenuItem className="transition-colors hover:bg-blue-100 hover:text-blue-800">
                  Wearings
                </DropdownMenuItem>
                <DropdownMenuItem className="transition-colors hover:bg-blue-100 hover:text-blue-800">
                  Beauty & Personal Care
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
       {/* Mobile Menu Button */}
       <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <DropdownMenu>
                <DropdownMenuTrigger className="text-muted-foreground transition-colors hover:text-foreground">
                  Products
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel className="font-medium">Categories</DropdownMenuLabel>
                  <DropdownMenuSeparator className="my-1" />
                  <DropdownMenuItem className="transition-colors hover:bg-blue-100 hover:text-blue-800" onClick={handleLinkClick}>
                    Electronics
                  </DropdownMenuItem>
                  <DropdownMenuItem className="transition-colors hover:bg-blue-100 hover:text-blue-800" onClick={handleLinkClick}>
                    Wearings
                  </DropdownMenuItem>
                  <DropdownMenuItem className="transition-colors hover:bg-blue-100 hover:text-blue-800" onClick={handleLinkClick}>
                    Beauty & Personal Care
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex items-center gap-4 ml-auto md:gap-2 lg:gap-4">
          {user ? (
            <DropdownMenu
              open={isDropdownOpen}
              onOpenChange={setIsDropdownOpen}
            >
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/profile" onClick={handleDropdownClick}>
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/profile" onClick={handleDropdownClick}>
                    Cart
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <Link to="/signup">
                <Button>Sign Up</Button>
              </Link>
              <Link to="/signin">
                <Button>Sign In</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
