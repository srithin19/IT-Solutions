import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import {
  ShieldCheckIcon,
  ServerIcon,
  DocumentChartBarIcon,
  MagnifyingGlassIcon,
  ExclamationTriangleIcon,
  CheckBadgeIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const ITAudit = () => {
  const services = [
    {
      title: "Infrastructure Assessment",
      description:
        "Comprehensive evaluation of your IT infrastructure and architecture.",
      IconComponent: ServerIcon,
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    },
    {
      title: "Security Vulnerability Scan",
      description: "Identify security weaknesses before they can be exploited.",
      IconComponent: ShieldCheckIcon,
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Network Architecture Review",
      description:
        "Analyze network design for performance and security optimization.",
      IconComponent: MagnifyingGlassIcon,
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Compliance Audit",
      description:
        "Ensure your IT systems meet regulatory and industry standards.",
      IconComponent: ClipboardDocumentCheckIcon,
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Performance Benchmarking",
      description:
        "Measure and compare your IT performance against industry standards.",
      IconComponent: ChartBarIcon,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Detailed Reporting",
      description:
        "Comprehensive reports with actionable recommendations and roadmap.",
      IconComponent: DocumentChartBarIcon,
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2026&auto=format&fit=crop",
    },
  ];

  const benefits = [
    {
      IconComponent: ShieldCheckIcon,
      title: "Risk Mitigation",
      description: "Identify threats early",
    },
    {
      IconComponent: CheckBadgeIcon,
      title: "Compliance",
      description: "Meet regulatory requirements",
    },
    {
      IconComponent: ChartBarIcon,
      title: "Performance",
      description: "Optimize IT efficiency",
    },
    {
      IconComponent: ExclamationTriangleIcon,
      title: "Prevention",
      description: "Stop issues before they start",
    },
  ];

  const auditProcess = [
    {
      step: "01",
      title: "Initial Consultation",
      description:
        "Understand your business needs, concerns, and audit objectives.",
    },
    {
      step: "02",
      title: "Data Collection",
      description:
        "Gather information about your IT infrastructure, systems, and processes.",
    },
    {
      step: "03",
      title: "Analysis & Testing",
      description:
        "Perform comprehensive analysis, vulnerability scans, and performance tests.",
    },
    {
      step: "04",
      title: "Reporting & Recommendations",
      description:
        "Deliver detailed findings with prioritized recommendations and action plans.",
    },
  ];

  const auditAreas = [
    "Hardware Inventory Assessment",
    "Software License Compliance",
    "Network Security Analysis",
    "Data Backup & Recovery Review",
    "Disaster Recovery Planning",
    "Access Control & User Management",
    "System Performance Metrics",
    "IT Policy & Procedure Review",
    "Cloud Infrastructure Audit",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/92 to-primary-500/88"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Complete IT Audit Services
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed mb-8">
              Comprehensive IT infrastructure audits to identify
              vulnerabilities, optimize performance, and ensure compliance. Get
              a complete picture of your IT health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <Section className="bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <benefit.IconComponent className="w-12 h-12 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
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
            className="text-center mb-16"
          >
            <h2 className="section-title">Our IT Audit Services</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Thorough examination of your IT infrastructure to identify risks,
              improve security, and optimize performance for better business
              outcomes.
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
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-primary-600/90 p-3 rounded-lg backdrop-blur-sm">
                    <service.IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Audit Areas */}
      <Section className="bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">What We Audit</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Comprehensive coverage of all critical IT areas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {auditAreas.map((area, index) => (
              <motion.div
                key={area}
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
                  {area}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Audit Process */}
      <Section className="bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Audit Process</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              A systematic approach to ensure thorough and accurate auditing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {auditProcess.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-xl border-l-4 border-primary-600 h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-5xl font-bold text-primary-200 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Statistics */}
      <Section className="bg-gradient-to-br from-primary-600 to-primary-500 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "IT Audits Completed" },
              { number: "85%", label: "Risk Reduction Average" },
              { number: "100%", label: "Compliance Achievement" },
              { number: "2 Weeks", label: "Average Audit Duration" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold mb-2 text-primary-200">
                  {stat.number}
                </div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ITAudit;
