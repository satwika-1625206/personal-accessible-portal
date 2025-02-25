
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { toast } from "sonner";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    year: "",
    section: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    toast.success("Registration successful!");
    navigate("/login");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 py-12"
    >
      <div className="w-full max-w-md p-8 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { name: "name", label: "Name", type: "text" },
            { name: "department", label: "Department", type: "text" },
            { name: "year", label: "Year", type: "text" },
            { name: "section", label: "Section", type: "text" },
            { name: "password", label: "Password", type: "password" },
            { name: "confirmPassword", label: "Confirm Password", type: "password" },
          ].map((field) => (
            <div key={field.name}>
              <Input
                type={field.type}
                placeholder={field.label}
                value={formData[field.name as keyof typeof formData]}
                onChange={(e) =>
                  setFormData({ ...formData, [field.name]: e.target.value })
                }
                className="w-full px-4 py-2"
              />
            </div>
          ))}
          <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white">
            Register
          </Button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-gray-900 hover:text-gray-700 font-medium transition-colors"
          >
            Sign in
          </button>
        </p>
      </div>
    </motion.div>
  );
};

export default Register;
