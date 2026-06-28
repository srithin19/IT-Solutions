import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ceoImage from "@/assets/image.png";

const About = () => {
  return (
    <div>
      {/* Company Overview */}
      <Section className="bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Who We Are</h2>
              <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                NSLogix IT Solutions is a trusted Managed IT and system
                integration partner with over 5+ years of experience. We help
                organizations in Dubai, across the UAE, and globally modernize
                operations through practical, future-ready technology.
              </p>
              <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                Our certified team delivers end-to-end expertise in cloud
                services, cybersecurity, infrastructure, and IT consulting. We
                design and implement solutions that improve performance,
                strengthen resilience, and support long-term business growth.
              </p>
              <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                We build lasting client partnerships through accountability,
                transparent communication, and consistent delivery. Client
                satisfaction is central to our approach, and we bring the same
                high standards and commitment to excellence to every engagement.
              </p>
              <Button to="/contact" variant="primary">
                Get In Touch
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="max-w-md ml-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-secondary-100">
                <div className="bg-secondary-50 p-3 border-b border-secondary-100">
                  <p className="text-sm font-semibold text-secondary-700 text-center">
                    Abdul Raheem, CEO of NSLogix IT Solutions
                  </p>
                </div>
                <div className="p-4">
                  <img
                    src={ceoImage}
                    alt="Abdul Raheem, CEO of NSLogix IT Solutions"
                    className="w-full h-[420px] object-cover object-top rounded-xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <div className="text-primary-600 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary-900">
                Our Mission
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                To empower businesses with cutting-edge IT solutions that drive
                growth, enhance productivity, and create lasting competitive
                advantages in the digital economy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card"
            >
              <div className="text-primary-600 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary-900">
                Our Vision
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                To be the most trusted IT consulting partner in the Middle East,
                recognized for innovation, excellence, and unwavering commitment
                to client success.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section className="bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              The principles that guide every project, partnership, and decision
              we make
            </p>
            <p className="text-lg text-secondary-600 max-w-4xl mx-auto mt-6 leading-relaxed">
              Our values are not just words on a page. They define how we plan,
              communicate, deliver, and improve every day. By staying true to
              these values, we maintain high standards, take pride in our work,
              and consistently provide the best possible outcomes for our
              clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                icon: (
                  <svg
                    className="w-12 h-12 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                ),
                description:
                  "Committed to delivering the highest quality in everything we do",
              },
              {
                title: "Innovation",
                icon: (
                  <svg
                    className="w-12 h-12 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                ),
                description:
                  "Constantly evolving with the latest technology trends",
              },
              {
                title: "Integrity",
                icon: (
                  <svg
                    className="w-12 h-12 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
                description: "Building trust through transparency and honesty",
              },
              {
                title: "Partnership",
                icon: (
                  <svg
                    className="w-12 h-12 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
                description: "Your success is our success",
              },
              {
                title: "Customer First",
                icon: (
                  <svg
                    className="w-12 h-12 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-3 3-3-3z"
                    />
                  </svg>
                ),
                description:
                  "Listening first and tailoring solutions around each client's goals",
              },
              {
                title: "Accountability",
                icon: (
                  <svg
                    className="w-12 h-12 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                description:
                  "Owning outcomes with timely delivery, transparency, and follow-through",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-secondary-900">
                  {value.title}
                </h3>
                <p className="text-secondary-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Google Maps Section */}
      <Section className="bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4 text-center text-secondary-900">
              Visit Our Office
            </h3>
            <p className="text-center text-secondary-600 mb-6">
              Located in Port Saeed, Dubai, UAE
            </p>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.7026470753564!2d55.33663731501221!3d25.267621083858747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cea7e2a6c41%3A0x88e34fdbef4988a1!2sPort%20Saeed%2C%20Dubai!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NSLogix IT Solutions Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default About;
