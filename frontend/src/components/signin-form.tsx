import { cn } from "@/lib/utils";
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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "@/config";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  async function sendRequest(event: React.FormEvent) {
    event.preventDefault();
    try {
      const res = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, {
        email,
        password,
      });
      const token = res.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("name", res.data.name)
      navigate("/blogs")
    } catch (err) {
      console.error("Sign up failed:", err);
      alert("Sign up failed. Please try again.");
    }
  }
  
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={sendRequest}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full"
              >
                Login
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don't have an Account?{" "}
              <button
                onClick={() => {
                  navigate("/signup");
                }}
                className="underline underline-offset-4"
              >
                Sign up
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
