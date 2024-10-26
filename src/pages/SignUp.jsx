import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"
import { AuthContext } from "@/provider/AuthProvider"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"

const SignUp = () => {
  // State to store email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { createUser } = useContext(AuthContext);
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createUser(email, password);
      console.log("User signed up:", res.user);
      toast({
        variant: "success",
        title: "Signup successful!",
        description: "You have successfully created an account.",
      });
    } catch (err) {
      console.error(err);
      toast({
        variant: "destructive",
        title: "Signup error",
        description: err.message || "An error occurred during signup.",
      });
    }
  }

  return (
    <Card className="mx-auto max-w-sm my-24">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <form onSubmit={handleSignUpSubmit} className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="Max" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Robinson" required />
              </div>
            </div>
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
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Button type="submit" className="w-full">
              Create an account
            </Button>
          </form>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/signin" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export default SignUp
