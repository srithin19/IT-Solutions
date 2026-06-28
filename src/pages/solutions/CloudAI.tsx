import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import {
  CloudIcon,
  CpuChipIcon,
  CircleStackIcon,
  ArrowPathIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  BoltIcon,
  LockClosedIcon,
  ArrowTrendingUpIcon,
  LightBulbIcon,
  CogIcon,
  ChatBubbleLeftRightIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";

const CloudAI = () => {
  const cloudAISolutions = [
    {
      title: "Cloud Migration",
      description:
        "Seamless migration to AWS, Azure, or Google Cloud with zero downtime and minimal disruption.",
      IconComponent: CloudIcon,
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    },
    {
      title: "Microsoft 365",
      description:
        "Complete Microsoft 365 setup, migration, and management for modern workplaces.",
      IconComponent: CloudIcon,
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "AI Integration",
      description:
        "Implement AI and machine learning solutions to automate processes and gain insights.",
      IconComponent: CpuChipIcon,
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Cloud Storage",
      description:
        "Secure, scalable cloud storage solutions with automated backup and recovery.",
      IconComponent: CircleStackIcon,
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Hybrid Cloud",
      description:
        "Optimize your infrastructure with hybrid cloud solutions combining on-premise and cloud.",
      IconComponent: ArrowPathIcon,
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "AI Analytics",
      description:
        "Advanced analytics and business intelligence powered by artificial intelligence.",
      IconComponent: ChartBarIcon,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  const benefits = [
    {
      IconComponent: CurrencyDollarIcon,
      title: "Cost Savings",
      description:
        "Optimize infrastructure spend with right-sized cloud resources.",
    },
    {
      IconComponent: BoltIcon,
      title: "Enhanced Performance",
      description:
        "Improve app responsiveness and throughput with modern cloud stacks.",
    },
    {
      IconComponent: LockClosedIcon,
      title: "Advanced Security",
      description:
        "Protect data and workloads with enterprise-grade cloud security.",
    },
    {
      IconComponent: ArrowTrendingUpIcon,
      title: "Scalability",
      description: "Scale services up or down instantly based on demand.",
    },
  ];

  const aiFeatures = [
    {
      title: "Predictive Analytics",
      description: "Use AI to forecast trends and make data-driven decisions.",
      IconComponent: LightBulbIcon,
    },
    {
      title: "Process Automation",
      description: "Automate repetitive tasks with intelligent AI workflows.",
      IconComponent: CogIcon,
    },
    {
      title: "Natural Language Processing",
      description:
        "Implement chatbots and voice assistants for customer service.",
      IconComponent: ChatBubbleLeftRightIcon,
    },
    {
      title: "Computer Vision",
      description:
        "Leverage image recognition and analysis for quality control.",
      IconComponent: EyeIcon,
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
                "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
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
              Cloud & AI Solutions
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed mb-8">
              Transform your business with cutting-edge cloud infrastructure and
              artificial intelligence. Scale faster, work smarter, and stay
              ahead of the competition.
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

      {/* Cloud Solutions Grid */}
      <Section className="bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Cloud & AI Services</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Comprehensive cloud and AI solutions to modernize your business
              operations and unlock new opportunities for growth and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudAISolutions.map((solution, index) => (
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

      {/* AI Features Section */}
      <Section className="bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">AI-Powered Capabilities</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Harness the power of artificial intelligence to transform your
              business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
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
              Dubai's Leading Cloud & AI Solutions Provider
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">300+</div>
                <p className="text-secondary-600">Cloud Migrations Completed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <p className="text-secondary-600">AI Solutions Deployed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <p className="text-secondary-600">Cloud Uptime SLA</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default CloudAI;
