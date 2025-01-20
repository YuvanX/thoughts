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
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  async function sendRequest(event: React.FormEvent) {
    event.preventDefault();
    if (loader) return;

    setLoader(true);
    setError(null);
    try {
      const res = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, {
        email,
        password,
      });
      setLoader(false);
      const token = res.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("name", res.data.name);
      navigate("/blogs");
    } catch (e: any) {
      setError(
        e.response?.data?.message || "Something went wrong. Please try again."
      );
      
    } finally {
      setLoader(false);
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
              <Button type="submit" className="w-full">
                {loader ? <span className="loading loading-dots loading-md"></span> : "Login"}
              </Button>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
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
