
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Exit = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="text-center bg-white/80 backdrop-blur-lg p-12 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-semibold mb-6 text-gray-800">
          Thanks for visiting my website
        </h1>
        <p className="text-gray-600 mb-8">
          I hope you enjoyed exploring my portfolio!
        </p>
        <Button
          onClick={() => navigate("/login")}
          className="bg-gray-900 hover:bg-gray-800 text-white"
        >
          Sign in again
        </Button>
      </div>
    </motion.div>
  );
};

export default Exit;
