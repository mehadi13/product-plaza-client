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
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/provider/AuthProvider";
import { Separator } from "@/components/ui/separator";
import { API_URL } from "@/Constant";
import { getUserData } from "@/storage";

function Header() {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const dbUser = getUserData();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${API_URL}/api/categories`);
        if (!response.ok) throw new Error("Could not fetch categories.");
        const data = await response.json();
        setCategories(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

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
          <span className="font-bold text-nowrap hover:shadow-2xl hover:text-yellow-600">
            Product Plaza
          </span>
        </Link>
      </div>
      <Separator />
      <div className="mx-auto max-w-screen-xl flex h-12 md:h-16 items-center gap-4 px-4 sm:px-6 lg:px-8">
        <div className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link to="/" className="md:flex md:items-center md:gap-1">
            <img className="w-20" src={logo} alt="logo" />
            <span className="cookie-regular font-bold text-nowrap text-lg hover:text-yellow-600">
              Product Plaza
            </span>
          </Link>
        </div>

        <div className="hidden flex-1 md:flex justify-center">
          <div className="grid grid-cols-3 gap-3">
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
                {categories ? (
                  categories.map((category, index) => (
                    <DropdownMenuItem
                      key={index}
                      className="transition-colors hover:bg-blue-100 hover:text-blue-800"
                    >
                      <Link to={`/products/${category.name}`}>
                        {category.name}
                      </Link>
                    </DropdownMenuItem>
                  ))
                ) : (
                  <>No Categry Found</>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {/* Mobile Menu Button */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
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
                  <DropdownMenuLabel className="font-medium">
                    Categories
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="my-1" />

                  {categories ? (
                    categories.map((category, index) => (
                      <DropdownMenuItem
                        key={index}
                        onClick={handleLinkClick}
                        className="transition-colors hover:bg-blue-100 hover:text-blue-800"
                      >
                        <Link to={`/products/${category.name}`}>
                          {category.name}
                        </Link>
                      </DropdownMenuItem>
                    ))
                  ) : (
                    <>No Categry Found</>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </SheetContent>
        </Sheet>

        {dbUser && dbUser.role == "ADMIN" ? (
          <Link to="/dashboard">
            <Button>Dashboard</Button>
          </Link>
        ) : (
          <></>
        )}

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
