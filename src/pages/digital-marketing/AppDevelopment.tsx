import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import {
  DevicePhoneMobileIcon,
  BoltIcon,
  ShieldCheckIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";

const AppDevelopment = () => {
  const benefits = [
    {
      icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
      title: "Cross-Platform",
      description: "Single codebase for iOS and Android",
    },
    {
      icon: <BoltIcon className="w-8 h-8" />,
      title: "High Performance",
      description: "Native-like speed and responsiveness",
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: "Secure & Scalable",
      description: "Enterprise-grade security standards",
    },
    {
      icon: <CloudIcon className="w-8 h-8" />,
      title: "Cloud Integration",
      description: "Seamless backend connectivity",
    },
  ];

  const services = [
    {
      title: "iOS App Development",
      description:
        "Native iOS applications built with Swift for optimal performance on iPhone and iPad.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
      features: ["Swift/SwiftUI", "App Store Optimization", "TestFlight Beta"],
    },
    {
      title: "Android App Development",
      description:
        "Native Android apps using Kotlin for the best user experience on all Android devices.",
      image:
        "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2070&auto=format&fit=crop",
      features: ["Kotlin/Java", "Google Play", "Material Design"],
    },
    {
      title: "Cross-Platform Apps",
      description:
        "React Native and Flutter apps that work seamlessly on both iOS and Android platforms.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2074&auto=format&fit=crop",
      features: ["React Native", "Flutter", "Single Codebase"],
    },
    {
      title: "Enterprise Mobile Solutions",
      description:
        "Custom mobile applications designed for enterprise workflows and business processes.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
      features: ["Employee Apps", "B2B Solutions", "Integration"],
    },
    {
      title: "E-Commerce Apps",
      description:
        "Feature-rich shopping apps with secure payments and seamless checkout experience.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
      features: ["Shopping Cart", "Payment Gateway", "Push Notifications"],
    },
    {
      title: "App Maintenance",
      description:
        "Ongoing support, updates, and optimization to keep your app running perfectly.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
      features: ["Bug Fixes", "OS Updates", "Performance Tuning"],
    },
  ];

  const technologies = [
    "React Native",
    "Flutter",
    "Swift",
    "Kotlin",
    "Firebase",
    "AWS",
    "Node.js",
    "MongoDB",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2074&auto=format&fit=crop')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/95 to-primary-700/95"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Mobile App Development
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed mb-8">
              Build powerful mobile apps for iOS and Android that users love
            </p>
            <Button to="/contact" variant="secondary">
              Start Your App Project
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <Section className="bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-xl mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-secondary-900">
                  {benefit.title}
                </h3>
                <p className="text-secondary-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Services Grid */}
      <Section className="bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">App Development Services</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Comprehensive mobile solutions for every platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-secondary-900">
                  {service.title}
                </h3>
                <p className="text-secondary-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-secondary-700"
                    >
                      <DevicePhoneMobileIcon className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Technologies */}
      <Section className="bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Technologies We Use</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Cutting-edge tools and frameworks for modern app development
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="px-6 py-3 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-full text-secondary-900 font-semibold"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Statistics */}
      <Section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-5xl font-bold mb-2">200+</div>
              <div className="text-primary-100">Apps Launched</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-5xl font-bold mb-2">4.8★</div>
              <div className="text-primary-100">Average App Rating</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-5xl font-bold mb-2">2M+</div>
              <div className="text-primary-100">Total Downloads</div>
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
            className="card text-center max-w-3xl mx-auto bg-gradient-to-br from-primary-50 to-secondary-50"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-900">
              Ready to Launch Your Mobile App?
            </h2>
            <p className="text-lg text-secondary-600 mb-8">
              Transform your idea into a successful mobile application
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" variant="primary">
                Discuss Your App
              </Button>
              <Button to="/digital-marketing" variant="outline-dark">
                View All Services
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default AppDevelopment;
