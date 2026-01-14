import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the trading bot work?",
    answer: "Our bot uses advanced AI algorithms to analyze market patterns on IQ Option. It sends trading signals to your Telegram, and if you enable auto-execute, it will automatically place trades based on these signals. You maintain full control and can customize risk parameters."
  },
  {
    question: "Is my IQ Option account safe?",
    answer: "Absolutely. We use secure API connections and never store your login credentials. The bot only executes trades within the parameters you set, and you can revoke access at any time. All data is encrypted end-to-end."
  },
  {
    question: "What is the average win rate?",
    answer: "Our bot maintains an average win rate of 82-87% across all trading pairs. However, past performance doesn't guarantee future results, and we always recommend proper risk management."
  },
  {
    question: "Can I use this with a demo account?",
    answer: "Yes! We actually encourage new users to start with a demo account. You can test all features and strategies risk-free before trading with real money."
  },
  {
    question: "How do I get started?",
    answer: "Simply choose a plan, connect your Telegram account, and follow our setup guide to link your IQ Option account. The entire process takes less than 5 minutes, and our support team is available 24/7 to help."
  },
  {
    question: "What if I'm not satisfied?",
    answer: "We offer a 7-day money-back guarantee on all plans. If you're not completely satisfied with the bot's performance, contact our support team for a full refund, no questions asked."
  }
];

const FAQ = () => {
  return (
    <section className="py-24" id="faq">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-display font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
