import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Briefcase, Users, ScanEye } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 overflow-x-hidden font-['Poppins']">
      <Navbar />

      <main className="flex-1 overflow-x-hidden">
        {/* Hero Section - Modern style with gradient */}
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white">
          {/* Background dots/grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            ></div>
          </div>

          {/* Hero content */}
          <div className="container mx-auto px-4 py-16 sm:py-20 md:py-24 lg:py-32 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight"
              >
                Find Your Perfect{" "}
                <span className="text-cyan-400">Career Match</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-slate-200 px-2 font-light"
              >
                Our AI-powered platform matches job seekers with their ideal
                roles and helps employers find the perfect candidates.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2"
              >
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white border-0 rounded-full px-6 sm:px-8 py-2 sm:py-6 text-sm sm:text-base mt-3 sm:mt-0 font-['Rubik'] font-medium tracking-wide">
                  <Link to="/register">Get Started</Link>
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 rounded-full px-6 sm:px-8 py-2 sm:py-6 text-sm sm:text-base mt-3 sm:mt-0 font-['Rubik'] font-medium tracking-wide"
                >
                  <Link to="/demo">Watch Demo</Link>
                </Button>
              </motion.div>

              {/* Stats instead of trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto px-2"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-5 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">
                    95%
                  </div>
                  <div className="text-xs sm:text-sm text-slate-200 font-light">
                    Matching Accuracy
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-5 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">
                    10K+
                  </div>
                  <div className="text-xs sm:text-sm text-slate-200 font-light">
                    CVs Processed
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-5 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">
                    80%
                  </div>
                  <div className="text-xs sm:text-sm text-slate-200 font-light">
                    Time Saved
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Wave divider */}
          <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="w-full h-auto"
            >
              <path
                fill="#f8fafc"
                fillOpacity="1"
                d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>

        {/* Features Section - Clean cards with icons */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-slate-800 tracking-tight">
                Why Choose CVision
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-2 font-light">
                Our platform offers cutting-edge tools for job seekers and
                recruiters
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="bg-cyan-50 p-3 sm:p-4 rounded-lg inline-block mb-4 sm:mb-5">
                  <Briefcase className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-slate-800">
                  AI-Powered Matching
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-light">
                  Smart algorithms match resumes to job descriptions based on
                  skills and experience.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="bg-purple-50 p-3 sm:p-4 rounded-lg inline-block mb-4 sm:mb-5">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-slate-800">
                  Bias-Free Screening
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-light">
                  Focus on qualifications, not demographics, for fair and
                  objective hiring.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow sm:col-span-2 md:col-span-1 sm:mx-auto md:mx-0"
              >
                <div className="bg-indigo-50 p-3 sm:p-4 rounded-lg inline-block mb-4 sm:mb-5">
                  <ScanEye className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-slate-800">
                  Detailed Analytics
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-light">
                  Get insights into candidate skills and matching scores for
                  better decisions.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works - Modern step process with authentication */}
        <section className="py-12 sm:py-16 md:py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-slate-800 tracking-tight">
                How It Works
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-2 font-light">
                Four simple steps to transform your hiring process
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline connector - visible only on md screens and up */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2"></div>

              <div className="space-y-12 sm:space-y-16 md:space-y-24">
                {/* Step 1 - Create Account */}
                <div className="relative">
                  {/* Desktop version - side by side */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="hidden md:block md:w-1/2 md:pr-16 text-right md:ml-0 mb-8 md:mb-0"
                  >
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-slate-800">
                      Create Account
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 max-w-xs ml-auto font-light">
                      Sign up to access our CV screening service.
                    </p>
                  </motion.div>

                  {/* Circle for timeline - desktop only */}
                  <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 bg-green-500 text-white rounded-full h-10 w-10 md:h-12 md:w-12 items-center justify-center font-bold text-lg md:text-xl">
                    1
                  </div>

                  {/* Mobile version - top down */}
                  <div className="md:hidden bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                    <div className="flex items-center mb-3">
                      <div className="bg-green-500 text-white rounded-full h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center font-bold text-lg sm:text-xl mr-4 flex-shrink-0">
                        1
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-slate-800">
                        Create Account
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 pl-12 font-light">
                      Sign up to access our CV screening service.
                    </p>
                  </div>
                </div>

                {/* Step 2 - Upload CVs */}
                <div className="relative">
                  {/* Desktop version - side by side */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="hidden md:block md:w-1/2 md:pl-16 md:ml-auto mb-8 md:mb-0"
                  >
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-slate-800">
                      Upload CVs
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 max-w-xs font-light">
                      Upload resumes in multiple formats (PDF, DOCX).
                    </p>
                  </motion.div>

                  {/* Circle for timeline - desktop only */}
                  <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 bg-indigo-500 text-white rounded-full h-10 w-10 md:h-12 md:w-12 items-center justify-center font-bold text-lg md:text-xl">
                    2
                  </div>

                  {/* Mobile version - top down */}
                  <div className="md:hidden bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                    <div className="flex items-center mb-3">
                      <div className="bg-indigo-500 text-white rounded-full h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center font-bold text-lg sm:text-xl mr-4 flex-shrink-0">
                        2
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-slate-800">
                        Upload CVs
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 pl-12 font-light">
                      Upload resumes in multiple formats (PDF, DOCX).
                    </p>
                  </div>
                </div>

                {/* Step 3 - Define Requirements */}
                <div className="relative">
                  {/* Desktop version - side by side */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="hidden md:block md:w-1/2 md:pr-16 text-right md:ml-0 mb-8 md:mb-0"
                  >
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-slate-800">
                      Define Requirements
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 max-w-xs ml-auto font-light">
                      Specify job skills and qualifications for AI matching.
                    </p>
                  </motion.div>

                  {/* Circle for timeline - desktop only */}
                  <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 bg-cyan-500 text-white rounded-full h-10 w-10 md:h-12 md:w-12 items-center justify-center font-bold text-lg md:text-xl">
                    3
                  </div>

                  {/* Mobile version - top down */}
                  <div className="md:hidden bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                    <div className="flex items-center mb-3">
                      <div className="bg-cyan-500 text-white rounded-full h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center font-bold text-lg sm:text-xl mr-4 flex-shrink-0">
                        3
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-slate-800">
                        Define Requirements
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 pl-12 font-light">
                      Specify job skills and qualifications for AI matching.
                    </p>
                  </div>
                </div>

                {/* Step 4 - Review Results */}
                <div className="relative">
                  {/* Desktop version - side by side */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="hidden md:block md:w-1/2 md:pl-16 md:ml-auto"
                  >
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-slate-800">
                      Review Results
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 max-w-xs font-light">
                      Get ranked candidates with detailed skill analysis.
                    </p>
                  </motion.div>

                  {/* Circle for timeline - desktop only */}
                  <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 bg-purple-500 text-white rounded-full h-10 w-10 md:h-12 md:w-12 items-center justify-center font-bold text-lg md:text-xl">
                    4
                  </div>

                  {/* Mobile version - top down */}
                  <div className="md:hidden bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                    <div className="flex items-center mb-3">
                      <div className="bg-purple-500 text-white rounded-full h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center font-bold text-lg sm:text-xl mr-4 flex-shrink-0">
                        4
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-slate-800">
                        Review Results
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 pl-12 font-light">
                      Get ranked candidates with detailed skill analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials/CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 tracking-tight">
              Ready to Transform Your Hiring Process?
            </h2>

            <div className="max-w-3xl mx-auto mb-10 sm:mb-12">
              <ul className="space-y-3 sm:space-y-4 text-left mb-8 sm:mb-10 px-2 sm:px-4">
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 sm:h-6 sm:w-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base font-light">
                    Save 80% of your screening time with AI-powered analysis
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 sm:h-6 sm:w-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base font-light">
                    Identify the best candidates with 95% accuracy
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 sm:h-6 sm:w-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base font-light">
                    Reduce hiring bias and improve workforce diversity
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 sm:h-6 sm:w-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base font-light">
                    Free 30-day trial with no credit card required
                  </span>
                </li>
              </ul>
            </div>

            <Button
              size="lg"
              className="bg-white text-indigo-900 hover:bg-slate-100 rounded-full px-6 sm:px-10 py-2 sm:py-6 text-sm sm:text-base md:text-lg font-['Rubik'] font-medium tracking-wide"
            >
              <Link to="/register">Start Free Trial</Link>
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
