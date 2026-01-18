import { motion } from "framer-motion";
import { Bot, TrendingUp, Shield, Clock, Smartphone, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Signals",
    description: "Advanced algorithms analyze market patterns and deliver high-accuracy trading signals directly to your Telegram."
  },
  {
    icon: TrendingUp,
    title: "Auto-Analyze Trades",
    description: "Our bot automatically analyze trades on IQ Option based on signal parameters and chart memory."
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Protect your capital with smart risk management Strategy."
  },
  {
    icon: Clock,
    title: "24/7 Operation",
    description: "Never miss a trading opportunity. The bot operates around the clock across all major trading sessions."
  },
  {
    icon: Smartphone,
    title: "Telegram Integration",
    description: "Full control from your phone. Receive signals, manage positions, and track performance all from Telegram."
  },
  {
    icon: BarChart3,
    title: "Live Analytics",
    description: "Real-time performance dashboards with detailed trade history, win rates, and profit tracking."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Features = () => {
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
            Powerful <span className="text-gradient-gold">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to automate your trading and maximize profits
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
