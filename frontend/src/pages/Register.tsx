import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Mail, LockKeyhole, User, Home } from "lucide-react";
import { z } from "zod";
// import apiClient from '@/services/api'; // Uncomment when API is ready

// Create validation schema with Zod
const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof RegisterFormData, string>>
  >({});
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateField = (name: keyof RegisterFormData, value: string) => {
    try {
      if (name === "confirmPassword") {
        // For confirmPassword, we need to validate against the current password
        if (value !== formData.password) {
          setErrors((prev) => ({ ...prev, [name]: "Passwords don't match" }));
          return false;
        } else {
          setErrors((prev) => ({ ...prev, [name]: undefined }));
          return true;
        }
      } else {
        // For other fields, use the schema
        const fieldSchema = z.object({ [name]: registerSchema.shape[name] });
        fieldSchema.parse({ [name]: value });
        setErrors((prev) => ({ ...prev, [name]: undefined }));
        return true;
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessage =
          error.errors[0]?.message || `Invalid ${String(name)}`;
        setErrors((prev) => ({ ...prev, [name]: errorMessage }));
        return false;
      }
      return false;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Only validate if it's one of our form fields
    if (
      name === "name" ||
      name === "email" ||
      name === "password" ||
      name === "confirmPassword"
    ) {
      validateField(name as keyof RegisterFormData, value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError(null);

    // Validate all fields
    let isValid = true;
    Object.entries(formData).forEach(([name, value]) => {
      const fieldIsValid = validateField(name as keyof RegisterFormData, value);
      if (!fieldIsValid) isValid = false;
    });

    if (!isValid) return;

    setLoading(true);

    try {
      // Additional validation for password match
      if (formData.password !== formData.confirmPassword) {
        setErrors((prev) => ({
          ...prev,
          confirmPassword: "Passwords don't match",
        }));
        throw new Error("Passwords don't match");
      }

      // Validate using Zod
      registerSchema.parse(formData);

      // try {
      //   await apiClient.post('/auth/register', {
      //     name: formData.name,
      //     email: formData.email,
      //     password: formData.password
      //   });
      //   navigate('/login'); // Redirect to login after successful registration
      // } catch (err) {
      //   setGeneralError('Failed to register. Please try again.');
      //   console.error(err);
      // }

      console.log("Registration attempt with:", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      // Placeholder navigation
      navigate("/login"); // Redirect to login
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach((err) => {
          const path = err.path[0];
          if (path && typeof path === "string") {
            setErrors((prev) => ({
              ...prev,
              [path]: err.message,
            }));
          }
        });
      } else if (error instanceof Error) {
        setGeneralError(error.message);
      } else {
        setGeneralError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = () => {
    console.log("Google registration initiated");
    // Implement actual Google OAuth here
    // window.location.href = 'your-backend/auth/google' or similar approach
  };

  return (
    <div className="min-h-screen bg-white font-['Poppins'] relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, rgba(124, 58, 237, 0.5) 1px, transparent 1px),
              linear-gradient(to right, rgba(124, 58, 237, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
            maskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 50%, transparent 100%)",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-10 sm:py-16 relative z-10">
        <div className="flex flex-col items-center">
          {/* Header with return to home */}
          <div className="w-full max-w-md flex justify-center mb-6">
            <Link
              to="/"
              className="flex items-center text-indigo-700 hover:text-indigo-500 transition-colors gap-1 text-sm"
              aria-label="Back to home page"
            >
              <Home className="h-4 w-4" />
              <span className="font-['Rubik']">Home</span>
            </Link>
          </div>

          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="p-8 sm:p-10">
              <div className="text-center mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight mb-2">
                  Create an Account
                </h1>
                <p className="text-slate-600 text-sm font-light">
                  Join CVision and start screening CVs efficiently
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-slate-700"
                  >
                    Full Name
                  </Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User
                        className="h-5 w-5 text-slate-400"
                        aria-hidden="true"
                      />
                    </div>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className={`pl-10 py-2 border-slate-300 bg-slate-50 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      aria-required="true"
                      aria-invalid={errors.name ? "true" : "false"}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                  </div>
                  {errors.name && (
                    <p id="name-error" className="text-red-500 text-xs mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-700"
                  >
                    Email Address
                  </Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail
                        className="h-5 w-5 text-slate-400"
                        aria-hidden="true"
                      />
                    </div>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className={`pl-10 py-2 border-slate-300 bg-slate-50 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      aria-required="true"
                      aria-invalid={errors.email ? "true" : "false"}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                    />
                  </div>
                  {errors.email && (
                    <p id="email-error" className="text-red-500 text-xs mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="password"
                    className="text-sm font-medium text-slate-700"
                  >
                    Password
                  </Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <LockKeyhole
                        className="h-5 w-5 text-slate-400"
                        aria-hidden="true"
                      />
                    </div>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className={`pl-10 py-2 border-slate-300 bg-slate-50 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 ${
                        errors.password ? "border-red-500" : ""
                      }`}
                      aria-required="true"
                      aria-invalid={errors.password ? "true" : "false"}
                      aria-describedby={
                        errors.password ? "password-error" : undefined
                      }
                    />
                  </div>
                  {errors.password && (
                    <p
                      id="password-error"
                      className="text-red-500 text-xs mt-1"
                    >
                      {errors.password}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="confirmPassword"
                    className="text-sm font-medium text-slate-700"
                  >
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <LockKeyhole
                        className="h-5 w-5 text-slate-400"
                        aria-hidden="true"
                      />
                    </div>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className={`pl-10 py-2 border-slate-300 bg-slate-50 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 ${
                        errors.confirmPassword ? "border-red-500" : ""
                      }`}
                      aria-required="true"
                      aria-invalid={errors.confirmPassword ? "true" : "false"}
                      aria-describedby={
                        errors.confirmPassword
                          ? "confirmPassword-error"
                          : undefined
                      }
                    />
                  </div>
                  {errors.confirmPassword && (
                    <p
                      id="confirmPassword-error"
                      className="text-red-500 text-xs mt-1"
                    >
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                {generalError && (
                  <div
                    id="register-error"
                    className="bg-red-50 text-red-600 p-3 rounded-lg text-sm"
                    role="alert"
                  >
                    {generalError}
                  </div>
                )}

                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg py-2.5 font-['Rubik'] font-medium tracking-wide flex items-center justify-center"
                    aria-label={
                      loading ? "Creating account..." : "Create account"
                    }
                  >
                    {loading ? (
                      "Creating Account..."
                    ) : (
                      <>
                        Create Account
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-slate-500">
                      Or continue with
                    </span>
                  </div>
                </div>

                <Button
                  type="button"
                  onClick={handleGoogleRegister}
                  className="mt-4 w-full bg-white hover:bg-slate-50 text-slate-800 font-medium py-2 px-4 border border-slate-300 rounded-lg shadow-sm flex items-center justify-center"
                  aria-label="Sign up with Google"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 mr-2"
                    aria-hidden="true"
                  >
                    <path
                      d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C8.089 2 4.287 5.334 3.376 9.682a10.013 10.013 0 000 4.636C4.287 18.666 8.089 22 12.545 22c4.176 0 7.851-2.849 8.855-6.866a9.962 9.962 0 00.254-2.134 10.283 10.283 0 00-.143-1.761h-8.966z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Sign up with Google
                </Button>
              </div>
            </div>

            <div className="bg-slate-50 p-6 border-t border-slate-200 text-center">
              <p className="text-sm text-slate-600">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-['Rubik'] font-medium text-indigo-600 hover:text-indigo-800"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
