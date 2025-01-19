import { cn } from "@/lib/utils"
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
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "@/config"

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {

  const [email, setEmail] = useState("")
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate()
  
  async function sendRequest(event: React.FormEvent) {
    event.preventDefault()
    const res = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
      email,
      name: username,
      password
    })
    const token = res.data.token
    localStorage.setItem("token", token)
    localStorage.setItem("name", res.data.name)
    navigate("/blogs")
  }
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Create an Account</CardTitle>
          <CardDescription>
            Enter your credentails
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={sendRequest}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input onChange={(e) => {
                  setEmail(e.target.value)
                }}
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="Name">Name</Label>
                <Input onChange={(e) => {
                  setUsername(e.target.value)
                }}
                  id="name"
                  type="name"
                  placeholder="Yuvan"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" onChange={(e) => {
                  setPassword(e.target.value)
                }} required />
              </div>
              <Button  type="submit" className="w-full">
               Sign up
              </Button>
              
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <button onClick={() => {
                navigate("/signin")
              }} className="underline underline-offset-4">
                Login
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
