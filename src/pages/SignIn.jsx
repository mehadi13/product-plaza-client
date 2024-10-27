import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { AuthContext } from "@/provider/AuthProvider";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { API_URL } from "@/Constant";
import { storeUserData } from "@/storage";

const SignIn = () => {
  // State to store email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, googleSignIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn(email, password);
      console.log("User signed in:", res.user);

      const dbUserResponse = await fetch(`${API_URL}/api/users/firebase/${res.user.uid}`);
      if (dbUserResponse.ok) {
        const dbUser = await dbUserResponse.json();
        storeUserData(dbUser)
      } else {
        console.error('Failed to fetch user data:', dbUserResponse.statusText);
      }
      

      navigate("/");
    } catch (err) {
      console.error(err);
      toast({
        variant: "destructive",
        title: "Signin error",
        description: err.message || "An error occurred during signup.",
      });
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await googleSignIn(googleProvider);
      console.log("User signed in:", res.user);
      navigate("/");
    } catch (err) {
      console.error(err);
      toast({
        variant: "destructive",
        title: "Signin error",
        description: err.message || "An error occurred during signin.",
      });
    }
  };

  return (
    <Card className="mx-auto max-w-sm  my-28">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <form onSubmit={handleSignIn} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/dev"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
          <Button variant="outline" className="w-full" onClick={handleGoogleSignIn}>
            Login with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignIn;
