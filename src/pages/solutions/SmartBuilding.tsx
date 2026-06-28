import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import {
  BoltIcon,
  ShieldCheckIcon,
  HomeIcon,
  SignalIcon,
  DevicePhoneMobileIcon,
  SpeakerWaveIcon,
  ChartBarIcon,
  BellAlertIcon,
  ClockIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

const SmartBuilding = () => {
  const smartSolutions = [
    {
      title: "Smart Lighting Control",
      description:
        "Intelligent lighting systems with automated controls, scheduling, and energy savings.",
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Climate Control",
      description:
        "Smart HVAC systems for optimal temperature, humidity, and air quality management.",
      image:
        "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Security & Access Control",
      description:
        "Advanced security systems with biometric access, video surveillance, and monitoring.",
      image:
        "https://images.unsplash.com/photo-1558002038-bb4237b50b93?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Energy Management",
      description:
        "Monitor and optimize energy consumption for maximum efficiency and cost savings.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Smart Home Integration",
      description:
        "Unified control of all home systems through mobile apps and voice commands.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2066&auto=format&fit=crop",
    },
    {
      title: "Building Automation",
      description:
        "Complete BMS (Building Management System) for commercial properties.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  const benefits = [
    {
      title: "40% Energy Savings",
      description: "Reduce utility costs significantly",
      IconComponent: BoltIcon,
    },
    {
      title: "Enhanced Security",
      description: "24/7 monitoring and protection",
      IconComponent: ShieldCheckIcon,
    },
    {
      title: "Comfort & Convenience",
      description: "Automated climate and lighting",
      IconComponent: HomeIcon,
    },
    {
      title: "Remote Control",
      description: "Manage your building from anywhere",
      IconComponent: SignalIcon,
    },
  ];

  const features = [
    {
      title: "Mobile App Control",
      description: "Control everything from your smartphone",
      IconComponent: DevicePhoneMobileIcon,
    },
    {
      title: "Voice Integration",
      description: "Works with Alexa, Google, and Siri",
      IconComponent: SpeakerWaveIcon,
    },
    {
      title: "Energy Analytics",
      description: "Real-time energy usage insights",
      IconComponent: ChartBarIcon,
    },
    {
      title: "Smart Alerts",
      description: "Instant notifications for any issues",
      IconComponent: BellAlertIcon,
    },
    {
      title: "Scheduling",
      description: "Automated routines and schedules",
      IconComponent: ClockIcon,
    },
    {
      title: "Easy Integration",
      description: "Works with existing systems",
      IconComponent: CogIcon,
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
                "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2066&auto=format&fit=crop')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/92 to-blue-700/86"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Building & Home Automation
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed mb-8">
              Transform your building or home into an intelligent space with our
              cutting-edge automation solutions. Save energy, enhance security,
              and enjoy unparalleled comfort.
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
            <h2 className="section-title">Our Smart Automation Solutions</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Comprehensive building and home automation solutions designed to
              enhance comfort, security, and efficiency while reducing energy
              costs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smartSolutions.map((solution, index) => (
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

      {/* Features Grid */}
      <Section className="bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Smart Features & Capabilities</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Advanced features that make your building truly intelligent
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <feature.IconComponent className="w-10 h-10 text-primary-600" />
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

      {/* Why Choose Us */}
      <Section className="bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Dubai's Premier Smart Building Solutions Provider
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <p className="text-secondary-600">Smart Installations</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">35%</div>
                <p className="text-secondary-600">Average Energy Savings</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <p className="text-secondary-600">Customer Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Case Study Section */}
      <Section className="bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Real Results from Real Projects
              </h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Luxury Villa - Palm Jumeirah
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Complete home automation with lighting, climate, security,
                    and entertainment integration.
                  </p>
                  <div className="flex gap-6">
                    <div>
                      <div className="text-2xl font-bold text-primary-900">
                        42%
                      </div>
                      <div className="text-sm text-gray-600">
                        Energy Savings
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary-900">
                        $15K
                      </div>
                      <div className="text-sm text-gray-600">
                        Annual Savings
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Commercial Tower - Business Bay
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Building management system for 20-story commercial tower.
                  </p>
                  <div className="flex gap-6">
                    <div>
                      <div className="text-2xl font-bold text-primary-900">
                        38%
                      </div>
                      <div className="text-sm text-gray-600">
                        Cost Reduction
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary-900">
                        6 Months
                      </div>
                      <div className="text-sm text-gray-600">ROI Period</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2066&auto=format&fit=crop"
                alt="Smart Home"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default SmartBuilding;
