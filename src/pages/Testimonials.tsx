import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Globe, Briefcase, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TestimonialsProps {
  setCurrentPage: (page: string) => void;
}

export default function Testimonials({ setCurrentPage: _ }: TestimonialsProps) {
  const testimonialsByService = [
    {
      service: "AI Automation",
      icon: <Bot size={36} />,
      testimonials: [
        {
          name: "David Thompson",
          role: "CTO, TechFlow Solutions",
          company: "Fortune 500 Technology Company",
          rating: 5,
          review: "Working with Autonotech on our AI automation project was nothing short of transformative. We were drowning in manual data processing that was taking our team 40+ hours per week. Within just 8 weeks of implementation, Autonotech's custom AI solution reduced this to less than 2 hours. The accuracy improved from 82% to 99.7%, virtually eliminating costly errors. What truly sets them apart is their deep understanding of our business logic—they didn't just automate processes, they optimized them. Our operational costs dropped by $180,000 annually, and employee satisfaction increased as they could focus on meaningful work instead of repetitive tasks. The system has paid for itself three times over in the first year alone. I've worked with numerous tech vendors, and Autonotech is in a league of their own."
        },
        {
          name: "Rebecca Martinez",
          role: "Operations Director, HealthFirst Medical",
          company: "Healthcare Provider Network",
          rating: 5,
          review: "I was skeptical about AI automation—I'd seen too many failed implementations at other healthcare facilities. Autonotech completely changed my perspective. They took the time to understand our complex HIPAA compliance requirements and patient data workflows before writing a single line of code. The custom AI system they built for patient intake and appointment scheduling has been flawless. We've reduced patient wait times by 65%, improved appointment show-rates by 40%, and our staff no longer struggles with double-bookings or scheduling conflicts. The AI handles 300+ appointments daily with zero errors. What impressed me most was their 3-month post-launch support—they monitored every metric, made adjustments, and trained our entire staff. Six months in, and this system runs like clockwork. Worth every penny and then some."
        }
      ]
    },
    {
      service: "Website Design & Hosting",
      icon: <Globe size={36} />,
      testimonials: [
        {
          name: "Michael Chen",
          role: "Founder & CEO, Luxe Interiors",
          company: "Premium Home Design Studio",
          rating: 5,
          review: "Our previous website was beautiful but slow—it took 8+ seconds to load and we were losing customers because of it. Autonotech rebuilt our entire digital presence from the ground up. The new site loads in under 1.5 seconds globally, looks absolutely stunning on every device, and our conversion rate jumped from 2.1% to 8.7% in the first month. They didn't just build a website—they built a sales machine. The custom portfolio galleries showcase our work better than anything I've seen from competitors. The SEO optimization got us ranking on page 1 for our most valuable keywords within 90 days. Our hosting has been rock solid with zero downtime in 8 months. Project inquiries increased by 340%, and our average project value went up 25% because the site positions us as the premium choice. The best investment we've made in our business. Autonotech doesn't just understand web development—they understand business growth."
        },
        {
          name: "Amanda Foster",
          role: "E-commerce Director, StyleHub Fashion",
          company: "Online Retail Platform",
          rating: 5,
          review: "We were using a popular e-commerce platform but experiencing constant slowdowns during traffic spikes and losing sales because of it. Autonotech built us a custom e-commerce solution that has been absolutely phenomenal. During Black Friday, we handled 50,000+ concurrent users without a single glitch—our old system would have crashed at 5,000. The checkout process they designed is so intuitive that our cart abandonment rate dropped from 73% to 41%. The integrated analytics dashboard gives us insights we never had before, allowing us to optimize in real-time. Mobile sales increased 215% because the mobile experience is flawless. The admin panel makes managing inventory, orders, and promotions incredibly simple. Their hosting infrastructure with global CDN means customers in Europe and Asia get the same lightning-fast experience as US customers. Six months in and we've seen a 290% increase in revenue. Autonotech didn't just meet our expectations—they redefined what we thought was possible."
        }
      ]
    },
    {
      service: "Business Consulting",
      icon: <Briefcase size={36} />,
      testimonials: [
        {
          name: "James Patterson",
          role: "CEO, Pinnacle Manufacturing",
          company: "Industrial Equipment Manufacturer",
          rating: 5,
          review: "After 15 years of steady growth, our company hit a plateau. We knew something needed to change but couldn't identify the root issues. Autonotech's business consulting team spent three weeks doing a comprehensive audit of our operations, and what they uncovered was eye-opening. They identified $2.3M in unnecessary annual expenses, bottlenecks in our supply chain that were costing us 30% in productivity, and outdated technology that was holding us back. Their strategic roadmap was detailed, actionable, and realistic. Over six months of implementation with their guidance, we restructured our operations, upgraded critical systems, and retrained our management team. The results have been remarkable: 45% reduction in operational costs, 68% improvement in delivery times, and employee turnover dropped from 28% to 9%. Our profit margins increased by 34%, and we're now positioned for expansion into new markets. The Autonotech team didn't just consult—they rolled up their sleeves and worked alongside us until the transformation was complete. Best consulting experience I've had in my entire career."
        },
        {
          name: "Lisa Rodriguez",
          role: "Founder, GreenLeaf Organic Foods",
          company: "Sustainable Food Startup",
          rating: 5,
          review: "As a startup founder, I was overwhelmed trying to scale our business while maintaining our sustainable practices and company values. Autonotech's consulting services were exactly what we needed at a critical growth stage. They helped us develop a 3-year strategic plan that balanced rapid growth with sustainability—something I thought was impossible. They optimized our supply chain to reduce waste by 60% while cutting costs by 35%. The technology recommendations they made modernized our operations without breaking our limited budget. They introduced us to automation tools that gave us enterprise-level capabilities at startup pricing. Their marketing strategy helped us secure partnerships with three major retail chains within four months. What I appreciated most was their genuine investment in our success—they treated our business like it was their own. We've grown from $800K to $4.2M in annual revenue in 18 months, expanded to 12 states, and maintained our core values throughout. Autonotech gave us the strategic guidance and operational excellence of a Fortune 500 while respecting our startup culture. I recommend them to every entrepreneur I meet."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="py-20 px-6 text-center relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 48%, rgba(212, 175, 55, 0.1) 49%, rgba(212, 175, 55, 0.1) 51%, transparent 52%),
              linear-gradient(-45deg, transparent 48%, rgba(212, 175, 55, 0.1) 49%, rgba(212, 175, 55, 0.1) 51%, transparent 52%)
            `,
            backgroundSize: '30px 30px'
          }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#d4af37] mb-6">
            Success Stories That Speak Volumes
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-4">
            Real results from real clients across all our services
          </p>
          <div className="flex items-center justify-center gap-2 text-[#d4af37]">
            <Star className="w-6 h-6 fill-current" />
            <span className="text-2xl font-bold">100+ Five-Star Reviews</span>
            <Star className="w-6 h-6 fill-current" />
          </div>
        </motion.div>
      </section>

      {testimonialsByService.map((serviceSection, sectionIndex) => (
        <section key={sectionIndex} className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="text-[#d4af37]">{serviceSection.icon}</div>
              <h2 className="text-4xl font-bold text-white">{serviceSection.service}</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {serviceSection.testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-zinc-950/80 backdrop-blur-sm border-2 border-zinc-800 hover:border-[#d4af37]/50 h-full relative overflow-hidden group transition-all duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="20" cy="20" r="2" fill="#d4af37" />
                        <circle cx="40" cy="40" r="2" fill="#d4af37" />
                        <circle cx="60" cy="20" r="2" fill="#d4af37" />
                        <circle cx="80" cy="40" r="2" fill="#d4af37" />
                        <line x1="20" y1="20" x2="40" y2="40" stroke="#d4af37" strokeWidth="0.5" />
                        <line x1="40" y1="40" x2="60" y2="20" stroke="#d4af37" strokeWidth="0.5" />
                        <line x1="60" y1="20" x2="80" y2="40" stroke="#d4af37" strokeWidth="0.5" />
                      </svg>
                    </div>

                    <CardContent className="p-8 relative z-10">
                      <div className="flex gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 fill-[#d4af37] text-[#d4af37]" />
                        ))}
                      </div>

                      <p className="text-gray-300 leading-relaxed mb-6 italic text-sm">
                        "{testimonial.review}"
                      </p>

                      <div className="pt-6 border-t border-zinc-800">
                        <p className="text-white font-bold text-lg">{testimonial.name}</p>
                        <p className="text-[#d4af37] text-sm font-semibold mb-1">{testimonial.role}</p>
                        <p className="text-gray-500 text-sm">{testimonial.company}</p>
                      </div>
                    </CardContent>

                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-gradient-to-b from-black to-zinc-900 text-center relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-[#d4af37] mb-4">Ready To Write Your Success Story?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Join 100+ satisfied clients who've transformed their businesses with Autonotech
          </p>
          <Button
            className="bg-[#d4af37] text-black hover:bg-yellow-500 font-semibold px-8 py-3 rounded-full text-lg shadow-lg shadow-[#d4af37]/20"
            onClick={() => window.location.href = 'tel:9099295186'}
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
}
