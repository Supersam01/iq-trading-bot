import { Bot, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                <Bot className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold">IQ Trade Bot</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Automate your IQ Option trading with AI-powered signals delivered directly to Telegram. 
              Trade smarter, not harder.
            </p>
            <a href="https://t.me/Iq_trading_signal_bot"target="_blank" rel="noopener noreferrer">
  <Button variant="gold" size="lg">
    <Send className="w-4 h-4" />
    Join Telegram
  </Button>
</a>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Features", "Pricing", "FAQ", "Support"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 IQ Trade Bot. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground max-w-xl text-center md:text-right">
            Risk Disclaimer: Trading involves significant risk. Past performance does not guarantee future results. 
            Only trade with money you can afford to lose.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
