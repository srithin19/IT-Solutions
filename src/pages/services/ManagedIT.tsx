import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import {
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  ClockIcon,
  CogIcon,
  ServerIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const ManagedIT = () => {
  const services = [
    {
      title: "Proactive Monitoring",
      description:
        "24/7 network monitoring with real-time alerts and issue detection.",
      IconComponent: ChartBarIcon,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Security Management",
      description:
        "Comprehensive security monitoring, threat detection, and response.",
      IconComponent: ShieldCheckIcon,
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "IT AMC Contracts",
      description:
        "Comprehensive Annual Maintenance Contracts for proactive IT support and system reliability.",
      IconComponent: CloudIcon,
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    },
    {
      title: "Server Management",
      description:
        "Full server administration, maintenance, and performance tuning.",
      IconComponent: ServerIcon,
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    },
    {
      title: "Backup & Recovery",
      description:
        "Automated backup solutions with disaster recovery planning.",
      IconComponent: CogIcon,
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Vendor Management",
      description:
        "Coordinate with vendors and manage all IT-related relationships.",
      IconComponent: UserGroupIcon,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  const benefits = [
    {
      IconComponent: CurrencyDollarIcon,
      title: "Fixed Costs",
      description: "Predictable monthly pricing",
    },
    {
      IconComponent: UserGroupIcon,
      title: "Expert Team",
      description: "Access to specialized IT pros",
    },
    {
      IconComponent: ClockIcon,
      title: "24/7 Support",
      description: "Always-on monitoring & support",
    },
    {
      IconComponent: ShieldCheckIcon,
      title: "Enhanced Security",
      description: "Continuous protection",
    },
  ];

  const managedServices = [
    "Network Infrastructure Management",
    "System Updates & Patch Management",
    "Security Monitoring & Threat Response",
    "Data Backup & Disaster Recovery",
    "IT AMC Contracts",
    "Email & Collaboration Tools",
    "IT Help Desk & User Support",
    "Vendor Coordination",
    "IT Strategy & Planning",
    "Performance Monitoring & Optimization",
    "Compliance Management",
    "Monthly Reporting & Analytics",
  ];

  const whyChoose = [
    {
      IconComponent: CurrencyDollarIcon,
      title: "Cost Effective",
      description:
        "Reduce IT costs by up to 40% compared to in-house teams while getting enterprise-level expertise.",
    },
    {
      IconComponent: ChartBarIcon,
      title: "Scalable Solutions",
      description:
        "Scale IT resources up or down as your business needs change without hiring or firing.",
    },
    {
      IconComponent: ClockIcon,
      title: "Focus on Business",
      description:
        "Let us handle IT while you focus on core business activities and growth strategies.",
    },
    {
      IconComponent: ShieldCheckIcon,
      title: "Improved Security",
      description:
        "Enterprise-grade security with 24/7 monitoring and rapid threat response.",
    },
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
                "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')",
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
              Managed IT Services
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed mb-8">
              Full-service IT management to handle all your technology needs so
              you can focus on your business. Get enterprise-level IT without
              the enterprise costs.
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
            <h2 className="section-title">What We Manage For You</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Comprehensive IT management services covering every aspect of your
              technology infrastructure for maximum uptime and performance.
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

      {/* Managed Services List */}
      <Section className="bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Complete IT Management</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Everything you need to keep your IT infrastructure running
              smoothly
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {managedServices.map((service, index) => (
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

      {/* Why Choose Us */}
      <Section className="bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Why Choose Managed IT Services</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              The benefits of partnering with us for your IT management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whyChoose.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center">
                      <item.IconComponent className="w-8 h-8 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
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
              { number: "150+", label: "Businesses Managed" },
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "40%", label: "Average Cost Savings" },
              { number: "2,000+", label: "Devices Monitored" },
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

export default ManagedIT;
