import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Section from "@/components/ui/Section";
import { services } from "@/data/constants";
import {
  ChartBarIcon,
  LifebuoyIcon,
  ShieldCheckIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

const Services = () => {
  // Icon mapping for services
  const iconMap: {
    [key: string]: React.ComponentType<{ className?: string }>;
  } = {
    "chart-bar": ChartBarIcon,
    support: LifebuoyIcon,
    "shield-check": ShieldCheckIcon,
    cog: CogIcon,
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image - Dubai Skyline */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=2070&auto=format&fit=crop')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 to-primary-700/90"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Our IT Services
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed mb-4">
              Professional IT services tailored to support and optimize your
              business technology infrastructure
            </p>
            <p className="text-base text-primary-200">
              From strategic consultancy to 24/7 support, we deliver excellence
              in every IT service
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Services Section */}
      <Section className="bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Core IT Services</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Professional IT services designed to optimize your technology
              infrastructure and support your business growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 4).map((service, index) => {
              const IconComponent = iconMap[service.icon] || CogIcon;
              return (
                <Link key={service.id} to={service.link}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-primary-500 transition-all duration-300 group h-full"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                        <IconComponent className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Additional Services */}
      <Section className="bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Additional IT Services</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              We offer a comprehensive range of specialized IT services to
              support every aspect of your technology infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Office IT Setup & Configuration",
              "Structured Cabling Solutions",
              "Next-Gen Firewall Installation",
              "Security Camera & CCTV Systems",
              "Server Setup & Management",
              "Network Infrastructure Design",
              "IT Helpdesk & Support Services",
              "Flexible IT Support Contracts",
              "Data Backup & Disaster Recovery",
            ].map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center space-x-3 p-4 bg-gradient-to-r from-secondary-50 to-white rounded-lg border border-gray-200 hover:border-primary-500 hover:shadow-md transition-all duration-200"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-sm">
                  {service}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's discuss how our professional IT services can support your
              business growth and technology needs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-900 font-semibold rounded-lg hover:bg-primary-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-900 transition-colors duration-300"
              >
                Explore Our Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Services;
