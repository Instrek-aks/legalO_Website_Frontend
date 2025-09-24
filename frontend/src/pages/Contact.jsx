import React from "react";
import Header from "../components/Header";
import ContactCard from "./ContactCard";
import { Mail, Calendar } from "lucide-react";
import Footer from "../components/Footer";

const ContactSection = () => {
  return (
    <div
      className="min-h-screen bg-background"
      style={{ backgroundColor: "hsl(44, 20%, 94%)" }}
    >
      <Header />

      <main className="container mx-auto px-4 lg:px-6 py-16 lg:py-24">
        {/* Hero Section */}
        <div className="text-center mb-16 lg:mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 pt-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Connect with the Legal-Olympiad team for queries or support
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          <ContactCard
            icon={<Mail className="w-8 h-8" />}
            title="Email Us"
            description="Reach out directly to our support team"
            actionText="Partner@legalolympiad.com"
            actionHref="mailto:Partner@legalolympiad.com?subject=Inquiry from LegalO Website&body=Hello,%0D%0A%0D%0AI would like to learn more about your services.%0D%0A%0D%0ABest regards,"
          />

          <ContactCard
            icon={<Calendar className="w-8 h-8" />}
            title="Schedule a Demo"
            description="Schedule a demo meeting - both you and Legal-O will receive calendar invites"
            actionText="Schedule Demo"
            isButton={true}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactSection;
