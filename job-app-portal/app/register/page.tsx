"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";

interface RegistrationFormData {
    name: string;
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: "applicant" | "recruiter";
}

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User,Keyboard, Mail, Lock, EyeOff, Eye } from "lucide-react";


const RegisterPage: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
    const handleInputChange = (name: string, value: string) => {
        setFormData((prev) => ({
                ...prev,
                [name] : value,
        }))
        
    console.log(formData);
    };


    const [ formData, setFormData] = useState <RegistrationFormData>({ 
        name: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "applicant",
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
              Create your account to get started
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            
            {/* Full Name */}
            <div className="space-y-1">
              <Label>Full Name *</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input  id= "name" type="text" className="pl-9" placeholder="Enter your full name"
                required 
                value={formData.name} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => 
                handleInputChange("name", e.target.value)} />
              </div>
            </div>

            {/* Username */}
            <div className="space-y-1">
              <Label>Username *</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id= "username" type="text" className="pl-9" placeholder="Choose a username"
                required 
                value={formData.userName} 
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                 handleInputChange("userName", e.target.value)} />
              </div>
            </div>

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

            {/* Role */}
            <div className="space-y-1">
              <Label>I am a *</Label>
              <Select value={formData.role} 
                  onValueChange={(value: "applicant" | "recruiter" ) =>
                   handleInputChange("role", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Job Applicant" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="applicant">Job Applicant</SelectItem>
                  <SelectItem value="recruiter">Recruiter</SelectItem>
                </SelectContent>
              </Select>
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

            {/* Confirm Password */}
            <div className="space-y-1">
              <Label>Confirm Password *</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="confirmPassword"
                  type= {showConfirmPassword ? "text" : "password"}
                  className="pl-9"
                  placeholder="Confirm your password"
                  required 
                  value={formData.confirmPassword} 
                  onChange={(e: ChangeEvent<HTMLInputElement>) => 
                    handleInputChange("confirmPassword", e.target.value)}
                />
                <Button type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                    {showConfirmPassword ? (
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
              Create Account
            </Button>

            {/* Footer */}
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <a href="/login" className="text-gray-900 hover:underline">
                Sign in here
              </a>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  
  )
}

export default RegisterPage;