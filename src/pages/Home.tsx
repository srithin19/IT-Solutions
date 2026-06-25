import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Section from "@/components/ui/Section";
import ServiceCard from "@/components/ui/ServiceCard";
import Button from "@/components/ui/Button";
import { services } from "@/data/constants";
import {
  TrophyIcon,
  UserGroupIcon,
  ClockIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay - Burj Khalifa Dubai */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-primary-700/90"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-primary-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                Best IT Company
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-100">
                  in Dubai
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                NSLogix IT Solutions is an industry leader in Managed IT
                services and system integration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button to="/contact" variant="primary">
                  Get Started
                </Button>
                <Button to="/services" variant="outline">
                  Our Services
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg
            className="w-6 h-6 text-secondary-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </section>

      {/* Services Section */}
      <Section className="bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              IT services and solutions built to work together
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={service.id} to={service.link}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  delay={index * 0.1}
                />
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section className="relative bg-gradient-to-br from-primary-600 to-primary-700 text-white overflow-hidden">
        {/* Tech Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop')",
              filter: "contrast(1.2) brightness(0.8)",
            }}
          ></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Dubai's Most Trusted IT Solutions Provider
              </h2>
              <p className="text-lg text-primary-100 mb-6 leading-relaxed">
                As your dedicated IT partner, we work closely with vendors on
                your behalf, eliminating the hassle of managing multiple
                relationships. No need for you to maintain a list of who to call
                for what issue. We maintain these relationships, act as a front
                end to any action requests, and track their progress until the
                desired outcome is achieved.
              </p>
              <Button to="/about" variant="secondary">
                Learn More About Us
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                {
                  number: "5+",
                  label: "Years Excellence",
                  IconComponent: TrophyIcon,
                },
                {
                  number: "200+",
                  label: "Happy Clients",
                  IconComponent: UserGroupIcon,
                },
                {
                  number: "24/7",
                  label: "Support Available",
                  IconComponent: ClockIcon,
                },
                {
                  number: "99%",
                  label: "Satisfaction Rate",
                  IconComponent: StarIcon,
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:border-primary-300/50 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex justify-center mb-2">
                    <stat.IconComponent className="w-10 h-10 text-primary-200" />
                  </div>
                  <div className="text-4xl font-bold mb-2 text-primary-200">
                    {stat.number}
                  </div>
                  <div className="text-white">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="section-title">Ready to Transform Your Business?</h2>
            <p className="section-subtitle">
              Join over 1,000 satisfied clients who trust us with their IT
              infrastructure. Get a free consultation and discover how we can
              help your business thrive in the digital age.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="primary">
                Get Free Consultation
              </Button>
              <Button to="/solutions" variant="outline-dark">
                Explore Our Solutions
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
