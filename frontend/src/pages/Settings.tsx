import NavBar from "@/components/NavBar"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BACKEND_URL } from "@/config"
import { Label } from "@radix-ui/react-label"
import axios from "axios"
import { AlertCircle, Key, User } from "lucide-react"
import { useState } from "react"

const Settings = () => {
  const [newusername, setNewUserName] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')


  function handleUsernameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewUserName(e.target.value)
  }

  function handleNewPasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewPassword(e.target.value)
  }

  function handleCurrentPasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCurrentPassword(e.target.value)
  }

  function handleConfirmPasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setConfirmPassword(e.target.value)
  }

  async function handleUsernameSubmit(e: React.FormEvent) {
    e.preventDefault()
    if(newusername.length < 3) {
      setError('Username must be at least 3 characters long')
      setSuccess('')
    } else {
      await axios.post(`${BACKEND_URL}/api/v1/user/settings`, {
        password: newPassword
      }, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      }).then(() => setSuccess('Username updated successfully'))
      setError('')
    }
  }

  async function handlePasswordSubmit(e: React.FormEvent) {
    e.preventDefault()
    if(newPassword !== confirmPassword) {
      setError('New passwords do not match')
      setSuccess('')
    } else if(newPassword.length < 5) {
      setError('New password must be at least 5 characters long')
    } else {
      setError('')
      await axios.post(`${BACKEND_URL}/api/v1/user/settings`, {
        password: newPassword
      }, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      }).then(() => setSuccess('Password updated successfully'))
    }
  }

  return (
    <div>
      <NavBar/>
      <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold mt-28">User Settings</h1>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      {success && (
        <Alert variant="default" className="bg-green-100 text-green-800 border-green-300">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>{success}</AlertDescription>
        </Alert>
      )}

        <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Change Username
          </CardTitle>
          <CardDescription>Update your username here. Choose a unique username.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleUsernameSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">New Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter new username"
                value={newusername}
                onChange={handleUsernameChange}
                required
              />
            </div>
            <Button type="submit">Update Username</Button>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="h-5 w-5" />
            Change Password
          </CardTitle>
          <CardDescription>Ensure your account is secure by updating your password regularly.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input
                id="current-password"
                type="password"
                placeholder="Enter current password"
                value={currentPassword}
                onChange={handleCurrentPasswordChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input
                id="new-password"
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={handleNewPasswordChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
            </div>
            <Button type="submit">Update Password</Button>
          </form>
        </CardContent>
      </Card>
    </div>
    </div>
  )
}

export default Settings