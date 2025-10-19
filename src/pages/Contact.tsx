import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactProps {
  setCurrentPage: (page: string) => void;
}

export default function Contact({ setCurrentPage: _ }: ContactProps) {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-20 px-6 text-center relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                rgba(212, 175, 55, 0.03) 0px,
                transparent 1px,
                transparent 2px,
                rgba(212, 175, 55, 0.03) 3px
              ),
              repeating-linear-gradient(
                90deg,
                rgba(212, 175, 55, 0.03) 0px,
                transparent 1px,
                transparent 2px,
                rgba(212, 175, 55, 0.03) 3px
              )
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#d4af37] mb-6">
            Let's Start Your Transformation
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to elevate your business? We're here to help you succeed.
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-zinc-950/80 backdrop-blur-sm border-2 border-zinc-800 h-full relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    linear-gradient(45deg, transparent 48%, rgba(212, 175, 55, 0.1) 49%, rgba(212, 175, 55, 0.1) 51%, transparent 52%),
                    linear-gradient(-45deg, transparent 48%, rgba(212, 175, 55, 0.1) 49%, rgba(212, 175, 55, 0.1) 51%, transparent 52%)
                  `,
                  backgroundSize: '20px 20px'
                }} />
              </div>

              <CardContent className="p-12 relative z-10">
                <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="bg-[#d4af37]/10 p-4 rounded-lg group-hover:bg-[#d4af37]/20 transition-colors">
                      <Phone className="w-6 h-6 text-[#d4af37]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Phone</h3>
                      <a href="tel:9099295186" className="text-gray-400 hover:text-[#d4af37] transition-colors text-lg">
                        (909) 929-5186
                      </a>
                      <p className="text-gray-500 text-sm mt-1">Call us for immediate assistance</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="bg-[#d4af37]/10 p-4 rounded-lg group-hover:bg-[#d4af37]/20 transition-colors">
                      <Mail className="w-6 h-6 text-[#d4af37]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <a href="mailto:info@autonotech.com" className="text-gray-400 hover:text-[#d4af37] transition-colors">
                        info@autonotech.com
                      </a>
                      <p className="text-gray-500 text-sm mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="bg-[#d4af37]/10 p-4 rounded-lg group-hover:bg-[#d4af37]/20 transition-colors">
                      <MapPin className="w-6 h-6 text-[#d4af37]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Location</h3>
                      <p className="text-gray-400">Remote & On-Site Services</p>
                      <p className="text-gray-500 text-sm mt-1">Serving clients worldwide</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="bg-[#d4af37]/10 p-4 rounded-lg group-hover:bg-[#d4af37]/20 transition-colors">
                      <Clock className="w-6 h-6 text-[#d4af37]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Business Hours</h3>
                      <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                      <p className="text-gray-400">Saturday: 10:00 AM - 4:00 PM PST</p>
                      <p className="text-gray-500 text-sm mt-1">Emergency support available 24/7</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-zinc-950/80 backdrop-blur-sm border-2 border-zinc-800 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.3) 1px, transparent 0)`,
                  backgroundSize: '40px 40px'
                }} />
              </div>

              <CardContent className="p-12 relative z-10">
                <h2 className="text-3xl font-bold text-white mb-4">Why Choose Autonotech?</h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  We're not just service providers—we're your growth partners committed to your success.
                </p>

                <div className="space-y-6 mb-10">
                  <div className="border-l-4 border-[#d4af37] pl-4 py-2">
                    <h3 className="text-white font-semibold mb-1">Proven Results</h3>
                    <p className="text-gray-400 text-sm">500+ successful projects with measurable ROI</p>
                  </div>

                  <div className="border-l-4 border-[#d4af37] pl-4 py-2">
                    <h3 className="text-white font-semibold mb-1">Expert Team</h3>
                    <p className="text-gray-400 text-sm">15+ years combined experience across all services</p>
                  </div>

                  <div className="border-l-4 border-[#d4af37] pl-4 py-2">
                    <h3 className="text-white font-semibold mb-1">Custom Solutions</h3>
                    <p className="text-gray-400 text-sm">Tailored strategies designed specifically for your business</p>
                  </div>

                  <div className="border-l-4 border-[#d4af37] pl-4 py-2">
                    <h3 className="text-white font-semibold mb-1">Ongoing Support</h3>
                    <p className="text-gray-400 text-sm">We stay with you long after project completion</p>
                  </div>

                  <div className="border-l-4 border-[#d4af37] pl-4 py-2">
                    <h3 className="text-white font-semibold mb-1">Transparent Process</h3>
                    <p className="text-gray-400 text-sm">Clear communication and realistic timelines</p>
                  </div>
                </div>

                <Button
                  className="w-full bg-[#d4af37] text-black hover:bg-yellow-500 font-semibold py-6 text-lg rounded-lg shadow-lg shadow-[#d4af37]/20 hover:shadow-[#d4af37]/40 transition-all"
                  onClick={() => window.location.href = 'tel:9099295186'}
                >
                  Call Now: (909) 929-5186
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-zinc-900 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 48%, rgba(212, 175, 55, 0.1) 49%, rgba(212, 175, 55, 0.1) 51%, transparent 52%),
              linear-gradient(-45deg, transparent 48%, rgba(212, 175, 55, 0.1) 49%, rgba(212, 175, 55, 0.1) 51%, transparent 52%)
            `,
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold text-[#d4af37] mb-6">
            What Happens Next?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-zinc-950/50 p-8 rounded-lg border border-zinc-800">
              <div className="w-16 h-16 bg-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#d4af37] text-2xl font-bold">1</span>
              </div>
              <h3 className="text-white font-semibold mb-2 text-lg">Initial Consultation</h3>
              <p className="text-gray-400 text-sm">We'll discuss your needs and goals in detail</p>
            </div>

            <div className="bg-zinc-950/50 p-8 rounded-lg border border-zinc-800">
              <div className="w-16 h-16 bg-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#d4af37] text-2xl font-bold">2</span>
              </div>
              <h3 className="text-white font-semibold mb-2 text-lg">Custom Proposal</h3>
              <p className="text-gray-400 text-sm">Receive a detailed plan and transparent pricing</p>
            </div>

            <div className="bg-zinc-950/50 p-8 rounded-lg border border-zinc-800">
              <div className="w-16 h-16 bg-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#d4af37] text-2xl font-bold">3</span>
              </div>
              <h3 className="text-white font-semibold mb-2 text-lg">Launch & Grow</h3>
              <p className="text-gray-400 text-sm">Watch your business transform with our support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
