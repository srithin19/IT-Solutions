import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import {
  RocketLaunchIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

const WebDevelopment = () => {
  const benefits = [
    {
      icon: <RocketLaunchIcon className="w-8 h-8" />,
      title: "Fast Performance",
      description: "Lightning-fast loading speeds for better user experience",
    },
    {
      icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
      title: "Mobile Responsive",
      description: "Perfect display on all devices and screen sizes",
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: "Secure & Reliable",
      description: "Built with security best practices and SSL encryption",
    },
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: "SEO Optimized",
      description: "Search engine friendly code for better rankings",
    },
  ];

  const services = [
    {
      title: "Corporate Websites",
      description:
        "Professional business websites that establish your brand presence and credibility online.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      features: ["Custom Design", "CMS Integration", "Analytics Setup"],
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Full-featured online stores with secure payment gateways and inventory management.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
      features: ["Shopping Cart", "Payment Gateway", "Product Management"],
    },
    {
      title: "Web Applications",
      description:
        "Custom web apps tailored to your business processes and workflow automation.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2074&auto=format&fit=crop",
      features: ["Custom Features", "API Integration", "Cloud Hosting"],
    },
    {
      title: "Landing Pages",
      description:
        "High-converting landing pages designed to capture leads and drive conversions.",
      image:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop",
      features: ["Conversion Focused", "A/B Testing", "Lead Capture"],
    },
    {
      title: "Website Redesign",
      description:
        "Modernize your existing website with fresh design and improved functionality.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop",
      features: ["Modern UI/UX", "Performance Boost", "Mobile Optimization"],
    },
    {
      title: "Maintenance & Support",
      description:
        "Ongoing website maintenance, updates, and technical support to keep your site running smoothly.",
      image:
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2074&auto=format&fit=crop",
      features: ["Regular Updates", "Bug Fixes", "24/7 Monitoring"],
    },
  ];

  const process = [
    {
      step: "1",
      title: "Discovery",
      description: "Understanding your requirements and goals",
    },
    {
      step: "2",
      title: "Design",
      description: "Creating wireframes and visual designs",
    },
    {
      step: "3",
      title: "Development",
      description: "Building your website with latest technologies",
    },
    {
      step: "4",
      title: "Launch",
      description: "Testing, deployment, and going live",
    },
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
                "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop')",
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
              Web Development Services
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed mb-8">
              Custom websites that drive results and grow your business
            </p>
            <Button to="/contact" variant="secondary">
              Start Your Project
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
            <h2 className="section-title">What We Build</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Comprehensive web development solutions for every business need
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
                      <CogIcon className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Our Development Process</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              A proven approach to delivering exceptional websites
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-secondary-900">
                  {item.title}
                </h3>
                <p className="text-secondary-600">{item.description}</p>
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
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Websites Delivered</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-primary-100">Client Satisfaction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-5xl font-bold mb-2">50ms</div>
              <div className="text-primary-100">Average Load Time</div>
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
              Ready to Build Your Website?
            </h2>
            <p className="text-lg text-secondary-600 mb-8">
              Let's create a powerful online presence for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" variant="primary">
                Get Started
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

export default WebDevelopment;
