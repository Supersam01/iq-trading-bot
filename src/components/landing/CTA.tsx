import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-gold mb-8 glow-gold">
            <Bot className="w-8 h-8 text-primary-foreground" />
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Start <span className="text-gradient-gold">Trading Smarter?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10">
            Join thousands of traders who are already using our bot to automate their IQ Option trades. 
           Get free signals on our bot.
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
  href="https://t.me/Iq_trading_signal_bot"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="gold" size="xl">
    Get Free Signal
    <ArrowRight className="w-5 h-5" />
  </Button>
</a>

            <Button variant="goldOutline" size="xl">
              Contact Team
            </Button>
          </motion.div>
          
          <p className="text-sm text-muted-foreground mt-6">
            No credit card required •
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
