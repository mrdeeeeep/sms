import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

import uiLog1 from "./../../public/assets/20943482 1.png";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    employeeId: "",
    password: "",
    remember: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white from-indigo-50 via-white to-indigo-50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Left side - Illustration */}
          <div className="lg:w-1/2 p-8 lg:p-12 bg-indigo-50">
            <img
              src="/src/components/images/loginui2.png"
              alt="School Management Illustration"
              className="w-full h-auto object-contain animate-fade-in"
              style={{ transform: "scale(1.3)" }} // Adjust the scale value as needed
            />
          </div>

          {/* Right side - Login Form */}
          <div className="lg:w-1/2 p-8 lg:p-12 space-y-6">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4M7.835 4.697A11.95 11.95 0 0112 4c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 22.627 0 16"
                    />
                  </svg>
                </div>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Welcome Back! 👋
              </h1>
              <p className="text-gray-600">
                Sign in to manage your school effortlessly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="mail@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="employeeId">Employee Id</Label>
                <Input
                  id="employeeId"
                  name="employeeId"
                  type="text"
                  placeholder="Enter your unique ID"
                  value={formData.employeeId}
                  onChange={handleChange}
                  className="w-full"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={formData.remember}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({
                        ...prev,
                        remember: checked as boolean,
                      }))
                    }
                  />
                  <Label htmlFor="remember" className="text-sm cursor-pointer">
                    Remember Me
                  </Label>
                </div>
                <a
                  href="#"
                  className="text-sm text-indigo-600 hover:text-indigo-500 transition-colors"
                >
                  Forgot Password?
                </a>
              </div>

              <Button
                type="submit"
                className={cn(
                  "w-full bg-indigo-600 hover:bg-indigo-700 text-white",
                  isLoading && "opacity-70 cursor-not-allowed"
                )}
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Login"}
              </Button>

              <div className="text-center text-sm text-gray-600">
                Not Registered Yet?{" "}
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-500 transition-colors font-medium"
                >
                  Create an account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
