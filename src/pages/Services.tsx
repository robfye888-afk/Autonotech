import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Globe, Code2, Briefcase, CheckCircle2, TrendingUp, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServicesProps {
  setCurrentPage: (page: string) => void;
}

export default function Services({ setCurrentPage: _ }: ServicesProps) {
  const services = [
    {
      title: "AI Automation",
      icon: <Bot size={48} />,
      tagline: "The Future of Business Efficiency",
      description: "In today's fast-paced digital landscape, manual processes are holding businesses back. Our AI automation solutions are engineered to revolutionize how you operate, eliminating bottlenecks and unlocking unprecedented productivity.",
      features: [
        "Custom AI workflow design tailored to your specific business needs",
        "Intelligent process automation reducing human error by up to 95%",
        "Real-time data processing and predictive analytics",
        "Seamless integration with existing systems and platforms",
        "24/7 automated operations with zero downtime",
        "ROI typically achieved within 3-6 months"
      ],
      whyBest: "We don't just implement off-the-shelf solutions. Our team of AI specialists works closely with you to understand your unique challenges and creates custom automation frameworks that adapt and evolve with your business. With over 200 successful AI implementations and an average 70% efficiency increase, we're the industry leader in intelligent automation."
    },
    {
      title: "Website Design & Hosting",
      icon: <Globe size={48} />,
      tagline: "Where Design Meets Performance",
      description: "Your website is your digital storefront, and first impressions matter. We craft stunning, high-performance websites that not only captivate visitors but convert them into loyal customers.",
      features: [
        "Custom responsive design optimized for all devices",
        "Lightning-fast loading speeds (under 2 seconds guaranteed)",
        "SEO-optimized architecture for maximum visibility",
        "Enterprise-grade security with SSL and DDoS protection",
        "99.9% uptime guarantee with redundant hosting infrastructure",
        "Ongoing maintenance and performance optimization"
      ],
      whyBest: "We combine cutting-edge design principles with technical excellence. Every website we build scores 95+ on Google PageSpeed Insights. Our hosting infrastructure uses premium CDN networks ensuring your site loads instantly worldwide. Unlike template-based competitors, we build every site from scratch, ensuring uniqueness and optimal performance."
    },
    {
      title: "Marketing",
      icon: <Code2 size={48} />,
      tagline: "Data-Driven Growth Strategies",
      description: "Marketing isn't about guesswork—it's about precision. Our data-driven marketing strategies are designed to maximize your ROI and scale your brand to new heights.",
      features: [
        "Comprehensive market analysis and competitor research",
        "Multi-channel campaign management (SEO, PPC, Social, Email)",
        "Advanced analytics and conversion rate optimization",
        "Content strategy and creation by industry experts",
        "Brand positioning and messaging frameworks",
        "Real-time campaign monitoring and optimization"
      ],
      whyBest: "We've generated over $50M in revenue for our clients through strategic marketing campaigns. Our team includes certified specialists in Google Ads, Meta Advertising, and SEO. We use proprietary analytics tools that give us insights competitors can't access. Average client sees 300% increase in qualified leads within 6 months."
    },
    {
      title: "Business Consulting",
      icon: <Briefcase size={48} />,
      tagline: "Strategic Vision, Measurable Results",
      description: "Transform your business with strategic consulting that goes beyond surface-level advice. We dive deep into your operations to identify opportunities and implement solutions that drive sustainable growth.",
      features: [
        "Comprehensive business audits and process mapping",
        "Strategic planning and roadmap development",
        "Operational efficiency optimization",
        "Technology stack assessment and recommendations",
        "Team training and change management support",
        "Ongoing advisory and performance tracking"
      ],
      whyBest: "Our consultants average 15+ years of experience across Fortune 500 companies and successful startups. We don't just identify problems—we implement solutions and stay with you until results are achieved. Our clients report an average 40% operational cost reduction and 60% productivity increase within the first year."
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="py-20 px-6 text-center relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#d4af37] mb-6">
            Elite Services, Exceptional Results
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Industry-leading solutions backed by proven methodologies and decades of combined expertise
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-zinc-950/80 backdrop-blur-sm border-2 border-zinc-800 hover:border-[#d4af37]/50 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      repeating-linear-gradient(
                        45deg,
                        rgba(212, 175, 55, 0.1) 0px,
                        transparent 2px,
                        transparent 4px,
                        rgba(212, 175, 55, 0.1) 6px
                      ),
                      repeating-linear-gradient(
                        -45deg,
                        rgba(212, 175, 55, 0.1) 0px,
                        transparent 2px,
                        transparent 4px,
                        rgba(212, 175, 55, 0.1) 6px
                      )
                    `,
                    backgroundSize: '20px 20px'
                  }} />
                </div>

                <CardContent className="p-12 relative z-10">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="text-[#d4af37] relative">
                      {service.icon}
                      <div className="absolute -inset-3 bg-[#d4af37]/10 blur-xl rounded-full" />
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold text-white mb-2">{service.title}</h2>
                      <p className="text-[#d4af37] text-xl font-semibold">{service.tagline}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 bg-black/30 p-4 rounded-lg border border-zinc-800">
                        <CheckCircle2 className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                        <p className="text-gray-300 text-sm">{feature}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-br from-[#d4af37]/10 to-transparent border border-[#d4af37]/30 rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-6 h-6 text-[#d4af37]" />
                      <h3 className="text-xl font-semibold text-[#d4af37]">Why We're The Best</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {service.whyBest}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-zinc-900 text-center relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 48%, rgba(212, 175, 55, 0.1) 49%, rgba(212, 175, 55, 0.1) 51%, transparent 52%),
              linear-gradient(-45deg, transparent 48%, rgba(212, 175, 55, 0.1) 49%, rgba(212, 175, 55, 0.1) 51%, transparent 52%)
            `,
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-[#d4af37] mb-6">The Autonotech Advantage</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-zinc-950/50 p-6 rounded-lg border border-zinc-800">
              <Zap className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Fast Results</h3>
              <p className="text-gray-400">Average ROI achieved in under 6 months</p>
            </div>
            <div className="bg-zinc-950/50 p-6 rounded-lg border border-zinc-800">
              <Shield className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Proven Track Record</h3>
              <p className="text-gray-400">500+ successful projects delivered</p>
            </div>
            <div className="bg-zinc-950/50 p-6 rounded-lg border border-zinc-800">
              <TrendingUp className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Continuous Growth</h3>
              <p className="text-gray-400">Ongoing support and optimization</p>
            </div>
          </div>
          <Button
            className="bg-[#d4af37] text-black hover:bg-yellow-500 font-semibold px-8 py-3 rounded-full text-lg"
            onClick={() => window.location.href = 'tel:9099295186'}
          >
            Start Your Transformation Today
          </Button>
        </div>
      </section>
    </div>
  );
}
