import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rodriguez",
    role: "Full-time Trader",
    content: "This bot completely changed my trading game. The signals are incredibly accurate, and the auto-execute feature means I never miss an opportunity. Made back my investment in the first week!",
    rating: 5,
    avatar: "AR"
  },
  {
    name: "Sarah Chen",
    role: "Part-time Trader",
    content: "As someone with a full-time job, this bot is perfect. I set it up once and let it trade while I work. The Telegram integration keeps me informed without being overwhelming.",
    rating: 5,
    avatar: "SC"
  },
  {
    name: "Michael Torres",
    role: "Crypto Enthusiast",
    content: "Been using trading bots for years, and this is by far the best for IQ Option. The win rate is consistently above 80%, and support team is super responsive.",
    rating: 5,
    avatar: "MT"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="text-gradient-gold">Traders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of successful traders who've transformed their trading with our bot
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-sm font-bold text-primary-foreground">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
