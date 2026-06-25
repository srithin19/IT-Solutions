import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import {
  LifebuoyIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  BoltIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const ITSupport = () => {
  const services = [
    {
      title: "24/7 Helpdesk Support",
      description:
        "Round-the-clock technical support via phone, email, and chat.",
      IconComponent: ClockIcon,
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Remote Support",
      description:
        "Fast remote troubleshooting and resolution for quick problem-solving.",
      IconComponent: ChatBubbleLeftRightIcon,
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "On-site Technical Support",
      description:
        "Expert technicians on-site when remote support isn't enough.",
      IconComponent: UserGroupIcon,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "System Monitoring",
      description:
        "Proactive monitoring to catch and fix issues before they impact you.",
      IconComponent: ShieldCheckIcon,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Hardware Support",
      description:
        "Expert troubleshooting and repair for all your hardware needs.",
      IconComponent: WrenchScrewdriverIcon,
      image:
        "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Software Support",
      description:
        "Installation, updates, and troubleshooting for all your software.",
      IconComponent: BoltIcon,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  const benefits = [
    {
      IconComponent: ClockIcon,
      title: "24/7 Availability",
      description: "Support whenever you need it",
    },
    {
      IconComponent: BoltIcon,
      title: "Fast Response",
      description: "30-minute response time",
    },
    {
      IconComponent: UserGroupIcon,
      title: "Expert Team",
      description: "Certified IT professionals",
    },
    {
      IconComponent: LifebuoyIcon,
      title: "Multi-channel",
      description: "Phone, email, chat support",
    },
  ];

  const supportLevels = [
    {
      icon: "🥉",
      title: "Basic Support",
      features: [
        "Business hours support (8AM-6PM)",
        "Email & phone support",
        "4-hour response time",
        "Remote troubleshooting",
      ],
    },
    {
      icon: "🥈",
      title: "Priority Support",
      features: [
        "Extended hours support (7AM-10PM)",
        "Email, phone & chat support",
        "2-hour response time",
        "Remote & on-site support",
      ],
      highlighted: true,
    },
    {
      icon: "🥇",
      title: "Premium Support",
      features: [
        "24/7/365 support",
        "All channels + dedicated hotline",
        "30-minute response time",
        "Proactive monitoring included",
      ],
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
                "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop')",
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
              24/7 IT Support Services
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed mb-8">
              Professional technical support to keep your systems running
              smoothly and resolve issues quickly. Focus on your business while
              we handle your IT.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="primary">
                Get Support Now
              </Button>
              <Button to="/services" variant="outline">
                View All Services
              </Button>
            </div>
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
            <h2 className="section-title">Our Support Services</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Comprehensive IT support services to keep your technology running
              smoothly with minimal downtime and maximum productivity.
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

      {/* Support Levels */}
      <Section className="bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Choose Your Support Level</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Flexible support plans designed to match your business needs and
              budget
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {supportLevels.map((level, index) => (
              <motion.div
                key={level.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-xl p-8 ${
                  level.highlighted
                    ? "bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-2xl scale-105"
                    : "bg-white border-2 border-gray-200"
                }`}
              >
                <div className="text-5xl mb-4">{level.icon}</div>
                <h3 className="text-2xl font-bold mb-6">{level.title}</h3>
                <ul className="space-y-4">
                  {level.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg
                        className={`w-6 h-6 mr-3 flex-shrink-0 ${
                          level.highlighted
                            ? "text-primary-200"
                            : "text-primary-600"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span
                        className={
                          level.highlighted ? "text-white" : "text-gray-700"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Statistics */}
      <Section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "5,000+", label: "Support Tickets Resolved" },
              { number: "30 min", label: "Average Response Time" },
              { number: "99.8%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Availability" },
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

export default ITSupport;
