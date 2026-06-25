import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import {
  ShieldCheckIcon,
  LockClosedIcon,
  FireIcon,
  ClockIcon,
  UserGroupIcon,
  ExclamationTriangleIcon,
  KeyIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

const Cybersecurity = () => {
  const securitySolutions = [
    {
      title: "Penetration Testing",
      description:
        "Comprehensive security assessments to identify vulnerabilities before hackers do. Ethical hacking and vulnerability testing.",
      IconComponent: ShieldCheckIcon,
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Firewall Management",
      description:
        "Next-generation firewall configuration, management, and monitoring to protect your network perimeter.",
      IconComponent: FireIcon,
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Email Security",
      description:
        "Advanced email filtering, anti-phishing protection, and secure email gateways to protect against email threats.",
      IconComponent: LockClosedIcon,
      image:
        "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Endpoint Protection",
      description:
        "Advanced antivirus, EDR, and endpoint security solutions for desktops, laptops, and mobile devices.",
      IconComponent: ComputerDesktopIcon,
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop",
    },
    {
      title: "Security Monitoring",
      description:
        "24/7 SOC (Security Operations Center) services with real-time threat detection and incident response.",
      IconComponent: ClockIcon,
      image:
        "https://images.unsplash.com/photo-1551808525-76a4f28b8f93?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Compliance Management",
      description:
        "Support for GDPR, ISO 27001, PCI-DSS, and other regulatory compliance requirements.",
      IconComponent: KeyIcon,
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  const benefits = [
    {
      IconComponent: ShieldCheckIcon,
      title: "Enterprise Protection",
      description: "Military-grade security",
    },
    {
      IconComponent: ClockIcon,
      title: "24/7 Monitoring",
      description: "Round-the-clock vigilance",
    },
    {
      IconComponent: ExclamationTriangleIcon,
      title: "Threat Prevention",
      description: "Proactive defense",
    },
    {
      IconComponent: UserGroupIcon,
      title: "Expert Team",
      description: "Certified professionals",
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
                "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')",
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
              Cybersecurity Solutions
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed mb-8">
              Protect your business from cyber threats with our comprehensive
              security solutions. From penetration testing to 24/7 monitoring,
              we safeguard your digital assets.
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

      {/* Solutions Grid */}
      <Section className="bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Comprehensive Security Services</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Protect your business with our multi-layered cybersecurity
              approach. We combine cutting-edge technology with expert security
              professionals to defend against evolving threats.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securitySolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-primary-600/90 p-3 rounded-lg backdrop-blur-sm">
                    <solution.IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Statistics Section */}
      <Section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "200+", label: "Clients Protected" },
              { number: "99.9%", label: "Threat Prevention Rate" },
              { number: "24/7", label: "Security Monitoring" },
              { number: "15+", label: "Years Experience" },
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
              Secure Your Business Today
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Don't wait for a breach to happen. Get a free security assessment
              and discover how we can protect your business from cyber threats.
            </p>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Cybersecurity;
