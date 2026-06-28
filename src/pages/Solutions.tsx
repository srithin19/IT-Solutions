import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { solutions } from "@/data/constants";
import {
  TrophyIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ClockIcon,
  CheckBadgeIcon,
  ShieldCheckIcon,
  BoltIcon,
  SparklesIcon,
  HandRaisedIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  ServerIcon,
  CloudIcon,
  CubeIcon,
  BuildingOffice2Icon,
  SignalIcon,
  HomeIcon,
  MegaphoneIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

const Solutions = () => {
  // Icon mapping for solutions
  const iconMap: {
    [key: string]: React.ComponentType<{ className?: string }>;
  } = {
    server: ServerIcon,
    cloud: CloudIcon,
    "shield-check": ShieldCheckIcon,
    cube: CubeIcon,
    building: BuildingOffice2Icon,
    network: SignalIcon,
    cog: CogIcon,
    home: HomeIcon,
    "trending-up": MegaphoneIcon,
  };

  const trustIndicators = [
    { IconComponent: TrophyIcon, number: "5+", label: "Years of Excellence" },
    { IconComponent: UserGroupIcon, number: "200+", label: "Happy Clients" },
    {
      IconComponent: CheckCircleIcon,
      number: "99%",
      label: "Client Satisfaction",
    },
    { IconComponent: ClockIcon, number: "24/7", label: "Support Available" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image - Palm Jumeirah */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=2070&auto=format&fit=crop')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/90 to-primary-600/86"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Comprehensive IT Solutions
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed mb-8">
              Dubai's Most Trusted IT Solutions Provider - Delivering innovative
              technology solutions across all industries with unmatched
              expertise and support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="primary">
                Get Started Today
              </Button>
              <Button to="/about" variant="outline">
                Learn About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <Section className="bg-white border-y border-secondary-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={indicator.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <indicator.IconComponent className="w-14 h-14 text-primary-600" />
                </div>
                <div className="text-4xl font-bold mb-2 text-secondary-900">
                  {indicator.number}
                </div>
                <div className="text-secondary-600">{indicator.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Solutions Grid */}
      <Section className="bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Solution Categories</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Comprehensive technology solutions designed to meet every aspect
              of your business needs. From infrastructure to automation, we have
              you covered.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = iconMap[solution.icon] || CogIcon;
              return (
                <Link key={solution.id} to={solution.link}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group h-full"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-9 h-9 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                        {solution.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {solution.description}
                      </p>
                      <div className="mt-4 flex items-center text-primary-600 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                        Explore Solution
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section className="bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Why We're Dubai's Most Trusted IT Partner
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              We combine deep technical expertise with a customer-first approach
              to deliver exceptional results for businesses of all sizes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                IconComponent: CheckBadgeIcon,
                title: "Proven Expertise",
                description:
                  "5+ years delivering world-class IT solutions across the UAE",
              },
              {
                IconComponent: ShieldCheckIcon,
                title: "Enterprise Security",
                description:
                  "Military-grade security protocols to protect your business",
              },
              {
                IconComponent: BoltIcon,
                title: "Rapid Response",
                description:
                  "24/7 support with 30-minute response time guarantee",
              },
              {
                IconComponent: SparklesIcon,
                title: "Quality Guaranteed",
                description:
                  "ISO-certified processes and 99% client satisfaction rate",
              },
              {
                IconComponent: HandRaisedIcon,
                title: "Trusted Partners",
                description:
                  "Certified partner of Microsoft, Cisco, AWS, and more",
              },
              {
                IconComponent: ChartBarIcon,
                title: "Business Growth",
                description:
                  "Solutions designed to scale with your business needs",
              },
              {
                IconComponent: CurrencyDollarIcon,
                title: "Cost-Effective",
                description:
                  "Competitive pricing with transparent, no-hidden-fees policy",
              },
              {
                IconComponent: GlobeAltIcon,
                title: "Local Presence",
                description:
                  "Based in Dubai with deep understanding of UAE market",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <feature.IconComponent className="w-12 h-12 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Specialized Solutions */}
      <Section className="bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Additional Specialized Services</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Beyond our core solutions, we offer specialized services tailored
              to specific business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "IP Telephony",
                description:
                  "Advanced VoIP communication systems for seamless connectivity",
              },
              {
                title: "PBX Setup",
                description:
                  "Professional phone system installation and configuration",
              },
              {
                title: "Routers & Switches",
                description:
                  "Enterprise-grade network infrastructure equipment",
              },
              {
                title: "Data Recovery",
                description:
                  "Secure data backup and disaster recovery solutions",
              },
              {
                title: "Microsoft 365",
                description:
                  "Cloud productivity and collaboration tools deployment",
              },
              {
                title: "Server Room Setup",
                description: "Complete data center design and implementation",
              },
              {
                title: "Firewall Solutions",
                description: "Advanced firewall systems for network protection",
              },
              {
                title: "Video Surveillance",
                description: "Professional CCTV and security camera systems",
              },
              {
                title: "WiFi Solutions",
                description: "Enterprise-grade wireless network deployment",
              },
            ].map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card group hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-secondary-900 group-hover:text-primary-600 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-secondary-600 text-sm">
                  {solution.description}
                </p>
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-900">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-secondary-600 mb-8">
              Join over 1,000 satisfied clients who trust us with their IT
              infrastructure. Get a free consultation and discover how we can
              help your business thrive.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="primary">Get Free Consultation</Button>
              </Link>
              <Link to="/services">
                <Button variant="outline-dark">View Our Services</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Solutions;
