"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";

interface LoginFormData {
    email: string;
    password: string;
}

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Keyboard, Mail, Lock, EyeOff, Eye } from "lucide-react";
import Link from "next/link";


const LoginPage: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (name: string, value: string) => {
        setFormData((prev) => ({
                ...prev,
                [name] : value,
        }))
        
    console.log(formData);
    };


    const [ formData, setFormData] = useState <LoginFormData>({ 
        email: "",
        password: "",
        });
    
    const handleSubmit = (e: FormEvent) => {
        try {
            
        } catch (error) {
            
        }
    }
    
  return (
            <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <Card className="w-full max-w-md shadow-md">
        <CardContent className="p-6 space-y-6">
          
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-500 text-white">
              <Keyboard size={22} />
            </div>
            <h1 className="text-xl font-semibold">JobDundo</h1>
            <p className="text-sm text-muted-foreground">
              Login to your account to get started
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>

            {/* Email */}
            <div className="space-y-1">
              <Label>Email Address *</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id= "email"
                  type="email"
                  className="pl-9"
                  placeholder="Enter your email"
                  required 
                  value={formData.email} 
                  onChange={(e: ChangeEvent<HTMLInputElement>) => 
                    handleInputChange("email", e.target.value)}
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <Label>Password *</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="password"
                  type= {showPassword ? "text" : "password"}
                  className="pl-9"
                  placeholder="Create a strong password"
                  required 
                  value={formData.password} 
                  onChange={(e: ChangeEvent<HTMLInputElement>) => 
                    handleInputChange("password", e.target.value)}
                />
                <Button type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? (
                        <EyeOff className="w-4 h-4 text-muted-foreground"/>
                    ) : (
                        <Eye className="w-4 h-4 text-muted-foreground"/>
                    )}
                </Button>
              </div>
            </div>

            
            {/* Submit */}
            <Button className="w-full bg-gray-600 hover:bg-gray-900"
            type="submit">
              Login
            </Button>

            {/* Footer */}
            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/register" className="text-gray-900 hover:underline">
                Please register here
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  
  )
}

export default LoginPage;