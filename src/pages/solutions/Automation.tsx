import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import {
  BoltIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";

const Automation = () => {
  const automationSolutions = [
    {
      title: "Workflow Automation",
      description:
        "Automate repetitive business processes and approval workflows for maximum efficiency.",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Document Management",
      description:
        "Intelligent document processing, storage, and retrieval systems.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "RPA Solutions",
      description:
        "Robotic Process Automation to handle high-volume repetitive tasks.",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064&auto=format&fit=crop",
    },
    {
      title: "CRM Automation",
      description:
        "Automated customer relationship management and sales processes.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Email Automation",
      description:
        "Automated email campaigns, responses, and marketing workflows.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Financial Automation",
      description:
        "Automated invoicing, expense tracking, and financial reporting.",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2026&auto=format&fit=crop",
    },
  ];

  const benefits = [
    {
      title: "80% Faster Processes",
      description: "Dramatically reduce processing time",
      IconComponent: BoltIcon,
    },
    {
      title: "Cost Reduction",
      description: "Save up to 50% on operational costs",
      IconComponent: CurrencyDollarIcon,
    },
    {
      title: "99.9% Accuracy",
      description: "Eliminate human errors",
      IconComponent: CheckCircleIcon,
    },
    {
      title: "Scalable Growth",
      description: "Scale operations without adding staff",
      IconComponent: ArrowTrendingUpIcon,
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
                "url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop')",
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
              Business Process Automation
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed mb-8">
              Streamline your operations with intelligent automation solutions.
              Free your team from repetitive tasks and focus on strategic growth
              and innovation.
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
            <h2 className="section-title">Our Automation Services</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Transform your business operations with our comprehensive
              automation solutions designed to increase efficiency, reduce
              costs, and eliminate errors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationSolutions.map((solution, index) => (
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
              Your Automation Partner for Digital Transformation
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">400+</div>
                <p className="text-secondary-600">Processes Automated</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50M+</div>
                <p className="text-secondary-600">Hours Saved Annually</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">45%</div>
                <p className="text-secondary-600">Average Cost Reduction</p>
              </div>
            </div>
            <div className="mt-12">
              <Link to="/contact">
                <Button variant="outline">Start Automating Today</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ROI Section */}
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
                Proven ROI & Business Impact
              </h2>
              <div className="space-y-6">
                {[
                  {
                    metric: "Average ROI",
                    value: "300%",
                    period: "within 12 months",
                  },
                  {
                    metric: "Time Savings",
                    value: "80%",
                    period: "on manual processes",
                  },
                  {
                    metric: "Error Reduction",
                    value: "99.5%",
                    period: "elimination rate",
                  },
                  {
                    metric: "Productivity Boost",
                    value: "60%",
                    period: "team efficiency gain",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.metric}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-primary-50 to-blue-50 p-4 rounded-lg"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-600">
                          {item.metric}
                        </div>
                        <div className="text-2xl font-bold text-primary-900">
                          {item.value}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">{item.period}</div>
                    </div>
                  </motion.div>
                ))}
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
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
                alt="Business Automation"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Automation;
