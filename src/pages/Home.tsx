import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Globe, Bot, Briefcase } from "lucide-react";

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  return (
    <>
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative mb-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#d4af37] tracking-tight relative">
            AUTONOTECH
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent animate-pulse pointer-events-none" />
          </h1>
          <div className="absolute -inset-4 bg-[#d4af37]/5 blur-xl rounded-full" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg md:text-xl max-w-2xl text-gray-400 mb-8"
        >
          Revolutionizing businesses through AI automation, sleek web design, and elite marketing strategies.
        </motion.p>
        <Button
          className="bg-[#d4af37] text-black hover:bg-yellow-500 font-semibold px-6 py-3 rounded-full"
          onClick={() => window.location.href = 'tel:9099295186'}
        >
          Get Started
        </Button>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-zinc-900 text-center relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 48%, rgba(212, 175, 55, 0.1) 49%, rgba(212, 175, 55, 0.1) 51%, transparent 52%),
              linear-gradient(-45deg, transparent 48%, rgba(212, 175, 55, 0.1) 49%, rgba(212, 175, 55, 0.1) 51%, transparent 52%)
            `,
            backgroundSize: '20px 20px'
          }} />
        </div>

        <h2 className="text-4xl font-semibold text-[#d4af37] mb-12 relative z-10">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6 relative z-10">
          {[
            { title: "AI Automation", icon: <Bot size={36} />, desc: "Streamline operations with cutting-edge AI workflows." },
            { title: "Website Design & Hosting", icon: <Globe size={36} />, desc: "Modern, fast, and secure digital presence." },
            { title: "Marketing", icon: <Code2 size={36} />, desc: "Data-driven campaigns to scale your brand globally." },
            { title: "Business Consulting", icon: <Briefcase size={36} />, desc: "Strategic insights to elevate your business growth." },
          ].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="transition-all"
            >
              <Card className="bg-zinc-950/80 backdrop-blur-sm border border-zinc-800 hover:border-[#d4af37]/50 text-left p-6 h-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
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

                <CardContent className="relative z-10">
                  <div className="text-[#d4af37] mb-4 relative">
                    {s.icon}
                    <div className="absolute -inset-2 bg-[#d4af37]/10 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{s.title}</h3>
                  <p className="text-gray-400 text-sm">{s.desc}</p>
                </CardContent>

                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-12">
          <Button
            className="bg-transparent border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black font-semibold px-8 py-3 rounded-full transition-all"
            onClick={() => setCurrentPage("services")}
          >
            Explore All Services
          </Button>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 48%, rgba(212, 175, 55, 0.1) 49%, rgba(212, 175, 55, 0.1) 51%, transparent 52%),
              linear-gradient(-45deg, transparent 48%, rgba(212, 175, 55, 0.1) 49%, rgba(212, 175, 55, 0.1) 51%, transparent 52%)
            `,
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#d4af37] mb-4">Client Success Stories</h2>
            <p className="text-gray-400 text-lg">Over 100+ Satisfied Clients & Growing</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Mitchell",
                role: "CEO, TechVenture Inc.",
                rating: 5,
                review: "Autonotech completely transformed our business operations. Their AI automation solutions reduced our processing time by 70% and increased our productivity exponentially. The team was incredibly professional, responsive, and delivered beyond our expectations. Within just three months, we saw a significant ROI and our customers noticed the improved service quality immediately. I can't recommend them highly enough!"
              },
              {
                name: "Marcus Rodriguez",
                role: "Founder, Digital Dynamics",
                rating: 5,
                review: "Working with Autonotech was a game-changer for our startup. They designed and hosted a stunning website that not only looks amazing but converts visitors into customers at an unprecedented rate. Their marketing strategies helped us grow from 1,000 to 50,000 monthly visitors in just six months. The attention to detail and strategic thinking they brought to the table was exceptional. Every interaction was seamless and professional."
              },
              {
                name: "Jennifer Chen",
                role: "Director of Operations, GlobalReach Ltd.",
                rating: 5,
                review: "I've worked with many consulting firms over the years, but Autonotech stands out as truly exceptional. Their business consulting services provided us with actionable insights that revolutionized our workflow. The AI automation they implemented saved us countless hours and significantly reduced operational costs. The team's expertise, dedication, and forward-thinking approach made the entire process smooth and results-driven. Absolutely worth every penny!"
              }
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="bg-zinc-950/80 backdrop-blur-sm border border-zinc-800 hover:border-[#d4af37]/50 p-6 h-full relative overflow-hidden transition-all duration-300">
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="15" cy="15" r="2" fill="#d4af37" />
                      <circle cx="35" cy="35" r="2" fill="#d4af37" />
                      <circle cx="55" cy="15" r="2" fill="#d4af37" />
                      <line x1="15" y1="15" x2="35" y2="35" stroke="#d4af37" strokeWidth="0.5" />
                      <line x1="35" y1="35" x2="55" y2="15" stroke="#d4af37" strokeWidth="0.5" />
                    </svg>
                  </div>

                  <CardContent className="space-y-4">
                    <div className="flex gap-1 mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-[#d4af37]" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed italic">
                      "{review.review}"
                    </p>

                    <div className="pt-4 border-t border-zinc-800">
                      <p className="text-white font-semibold">{review.name}</p>
                      <p className="text-gray-500 text-sm">{review.role}</p>
                    </div>
                  </CardContent>

                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center px-6 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-semibold text-[#d4af37] mb-6 relative z-10"
        >
          About Autonotech
        </motion.h2>
        <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed relative z-10 mb-8">
          At Autonotech, we merge technology and innovation to help businesses thrive in the digital era. Our solutions blend automation, design, and strategy — ensuring you stay ahead of the curve.
        </p>
        <Button
          className="bg-transparent border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black font-semibold px-8 py-3 rounded-full transition-all"
          onClick={() => setCurrentPage("testimonials")}
        >
          Read More Client Stories
        </Button>
      </section>

      <section className="py-20 bg-zinc-950 text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                rgba(212, 175, 55, 0.02) 0px,
                transparent 1px,
                transparent 2px,
                rgba(212, 175, 55, 0.02) 3px
              ),
              repeating-linear-gradient(
                90deg,
                rgba(212, 175, 55, 0.02) 0px,
                transparent 1px,
                transparent 2px,
                rgba(212, 175, 55, 0.02) 3px
              )
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />

        <h2 className="text-4xl font-semibold text-[#d4af37] mb-6 relative z-10">Let's Build the Future</h2>
        <p className="text-gray-400 mb-8 relative z-10">Ready to elevate your business with Autonotech?</p>
        <Button
          className="bg-[#d4af37] text-black hover:bg-yellow-500 font-semibold px-6 py-3 rounded-full relative z-10 shadow-lg shadow-[#d4af37]/20 hover:shadow-[#d4af37]/40 transition-shadow"
          onClick={() => setCurrentPage("contact")}
        >
          Contact Us
        </Button>
      </section>
    </>
  );
}
