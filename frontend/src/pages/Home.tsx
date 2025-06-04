import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import { Briefcase, Users, ScanEye, Mail } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "backOut" },
  },
};

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-gray-800">
      {/* Hero Section */}
      <motion.section
        className="w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-32 text-center"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            Revolutionize Your Hiring Process
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Our AI-powered CV screening tool helps you find the best candidates
            in minutes, not days.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button size="lg" asChild>
              <a href="/register">Get Started for Free</a>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-16 md:py-24 bg-slate-50 w-full"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
            Why Choose Us?
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-xl mx-auto">
            Discover the features that make our CV screener the top choice for
            recruiters.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants}>
              <FeatureCard
                icon={<Briefcase size={40} className="text-primary" />}
                title="Efficient Screening"
                description="Automate the initial screening process and save valuable time."
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <FeatureCard
                icon={<Users size={40} className="text-primary" />}
                title="Identify Top Talent"
                description="Our AI accurately matches candidates to job requirements."
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <FeatureCard
                icon={<ScanEye size={40} className="text-primary" />}
                title="Reduce Bias"
                description="Focus on skills and experience for fair evaluations."
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        className="py-16 md:py-24 bg-white w-full"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-800">
            Simple Steps to Better Hiring
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <motion.div
              variants={itemVariants}
              className="p-6 border border-slate-200 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary text-white rounded-full h-10 w-10 flex items-center justify-center font-bold text-xl mr-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-slate-700">
                  Upload CVs
                </h3>
              </div>
              <p className="text-slate-600">
                Easily upload multiple CVs in various formats (PDF, DOCX).
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="p-6 border border-slate-200 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary text-white rounded-full h-10 w-10 flex items-center justify-center font-bold text-xl mr-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-slate-700">
                  Define Criteria
                </h3>
              </div>
              <p className="text-slate-600">
                Set your job requirements and essential skills for the AI to
                match.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="p-6 border border-slate-200 rounded-lg shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary text-white rounded-full h-10 w-10 flex items-center justify-center font-bold text-xl mr-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-slate-700">
                  Get Results
                </h3>
              </div>
              <p className="text-slate-600">
                Receive a ranked list of candidates with detailed insights.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="py-16 md:py-24 bg-slate-50 w-full"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto px-4 text-center">
          <Mail size={48} className="mx-auto mb-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
            Have questions or want a demo? We'd love to hear from you.
          </p>
          <Button size="lg" variant="outline" asChild>
            <a href="mailto:contact@cvscreener.com">Contact Us</a>
          </Button>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
