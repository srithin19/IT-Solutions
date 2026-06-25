import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import {
  MegaphoneIcon,
  UserGroupIcon,
  ChartBarIcon,
  HeartIcon,
  CameraIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

const SocialMedia = () => {
  const benefits = [
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: "Audience Growth",
      description: "Build engaged follower base",
    },
    {
      icon: <HeartIcon className="w-8 h-8" />,
      title: "Brand Awareness",
      description: "Increase brand recognition",
    },
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: "Higher Engagement",
      description: "Boost likes, shares, comments",
    },
    {
      icon: <MegaphoneIcon className="w-8 h-8" />,
      title: "Lead Generation",
      description: "Convert followers to customers",
    },
  ];

  const services = [
    {
      title: "Social Media Strategy",
      description:
        "Comprehensive social media roadmap aligned with your business goals and target audience.",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074&auto=format&fit=crop",
      features: ["Audience Analysis", "Content Calendar", "Platform Selection"],
    },
    {
      title: "Content Creation",
      description:
        "Eye-catching graphics, videos, and copy designed to engage your audience and drive action.",
      image:
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=2074&auto=format&fit=crop",
      features: ["Visual Design", "Video Production", "Copywriting"],
    },
    {
      title: "Community Management",
      description:
        "Active engagement with your audience, responding to comments, messages, and building relationships.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
      features: ["Comment Moderation", "Message Response", "Engagement"],
    },
    {
      title: "Paid Social Advertising",
      description:
        "Targeted ad campaigns on Facebook, Instagram, LinkedIn, and Twitter to reach your ideal customers.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      features: ["Ad Campaign Setup", "Audience Targeting", "ROI Tracking"],
    },
    {
      title: "Influencer Marketing",
      description:
        "Connect with relevant influencers to amplify your brand message and reach new audiences.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2087&auto=format&fit=crop",
      features: [
        "Influencer Outreach",
        "Campaign Management",
        "Performance Tracking",
      ],
    },
    {
      title: "Analytics & Reporting",
      description:
        "Detailed performance reports with insights and recommendations for continuous improvement.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      features: ["Monthly Reports", "KPI Tracking", "Strategy Refinement"],
    },
  ];

  const platforms = [
    "Facebook",
    "Instagram",
    "LinkedIn",
    "Twitter",
    "TikTok",
    "YouTube",
    "Pinterest",
    "Snapchat",
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
                "url('https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=2074&auto=format&fit=crop')",
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
              Social Media Marketing
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed mb-8">
              Build your brand presence and engage with your audience on social
              platforms
            </p>
            <Button to="/contact" variant="secondary">
              Grow Your Following
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
            <h2 className="section-title">Social Media Services</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Complete social media management solutions for your business
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
                      <MegaphoneIcon className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Platforms */}
      <Section className="bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Platforms We Manage</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Expert management across all major social media platforms
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="px-6 py-3 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-full text-secondary-900 font-semibold"
              >
                {platform}
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Content Types */}
      <Section className="bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Content We Create</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Diverse content formats to keep your audience engaged
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <CameraIcon className="w-12 h-12" />,
                title: "Visual Content",
                items: ["Photos", "Graphics", "Infographics", "Carousel Posts"],
              },
              {
                icon: <PencilSquareIcon className="w-12 h-12" />,
                title: "Written Content",
                items: ["Captions", "Blog Posts", "Stories", "Threads"],
              },
              {
                icon: <ChartBarIcon className="w-12 h-12" />,
                title: "Video Content",
                items: ["Reels", "Stories", "Live Streams", "Tutorials"],
              },
            ].map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 text-primary-600 rounded-xl mb-4">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-secondary-900">
                  {type.title}
                </h3>
                <ul className="space-y-2 text-secondary-600">
                  {type.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
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
              <div className="text-5xl font-bold mb-2">500%</div>
              <div className="text-primary-100">Engagement Increase</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-5xl font-bold mb-2">50K+</div>
              <div className="text-primary-100">Followers Gained</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-5xl font-bold mb-2">4.5x</div>
              <div className="text-primary-100">ROI on Ad Spend</div>
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
              Ready to Grow Your Social Presence?
            </h2>
            <p className="text-lg text-secondary-600 mb-8">
              Let's build a thriving community around your brand
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

export default SocialMedia;
