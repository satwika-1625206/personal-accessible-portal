
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const education = [
    {
      institution: "GITAM University",
      degree: "B.Tech Computer Science",
      period: "2023 - Present",
      grade: "CGPA: 7.4",
    },
    {
      institution: "Sri Gaythri Junior College",
      degree: "Intermediate",
      period: "2021 - 2023",
      grade: "Percentage: 80%",
    },
  ];

  const projects = [
    {
      title: "Dyslexia Prediction",
      date: "August 2023",
      description:
        "Developed a logistic regression model integrated into a quiz-based website for predicting dyslexia.",
      techStack: "Python (Machine Learning), HTML, CSS",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    },
    {
      title: "The Machine Man",
      date: "January 2023",
      description:
        "Developed a Python-based job scheduling system for optimizing business orders for cobblers.",
      techStack: "Python, Tkinter GUI",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
  ];

  const handleLogout = () => {
    navigate("/exit");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <nav className="bg-white/80 backdrop-blur-lg shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-semibold text-gray-800"
            >
              Portfolio
            </motion.h1>
            <Button 
              onClick={handleLogout}
              variant="ghost"
              className="text-gray-600 hover:text-gray-900"
            >
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">About Me</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              I am a passionate and dedicated software developer pursuing my B.Tech in Computer Science and Engineering at GITAM University Hyderabad. With a strong foundation in web development and programming, I specialize in creating modern, efficient, and user-friendly applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:Karthikambeer4@gmail.com"
                className="text-gray-900 hover:text-gray-700 font-medium"
              >
                Karthikambeer4@gmail.com
              </a>
              <a 
                href="https://www.linkedin.com/in/ambeer-karthik-800b13301/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-700 font-medium"
              >
                LinkedIn Profile
              </a>
              <a 
                href="https://github.com/Karthik-f1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-700 font-medium"
              >
                GitHub Profile
              </a>
              <a 
                href="https://drive.google.com/file/d/1tWPGOaY5oDxYsZ_NmvUDOoV_JdRAP6Ix/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-gray-700 font-medium"
              >
                Download Resume
              </a>
            </div>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-gray-200 pl-4">
                  <h3 className="text-xl font-medium text-gray-800">{edu.institution}</h3>
                  <p className="text-gray-600">{edu.degree}</p>
                  <p className="text-gray-500">{edu.period}</p>
                  <p className="text-gray-500">{edu.grade}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="bg-gray-50 rounded-xl overflow-hidden shadow-md"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                      <span className="text-sm text-gray-500">{project.date}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <p className="text-sm text-gray-500">Tech Stack: {project.techStack}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default Index;
