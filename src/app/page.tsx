"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Sparkles, Heart, Star, Users, ThumbsUp } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="medium"
      sizing="largeSmall"
      background="floatingGradient"
      cardStyle="subtle-shadow"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="layered"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Nishi Beauty Parlour"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Call Now",            href: "tel:+919876543210"
          }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
          buttonClassName="bg-[var(--primary-cta)] text-[var(--primary-cta-text)] hover:opacity-90"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Professional Beauty Services in Your Neighborhood"
          description="Enhance your natural beauty with expert care at Nishi Beauty Parlour. Bridal makeup, facials, hair styling, and more—delivered with passion and precision."
          tag="Beauty Experts Since 2015"
          tagIcon={Sparkles}
          background={{ variant: "floatingGradient" }}
          imageSrc="http://img.b2bpic.net/free-photo/visagiste-making-facial-makeup-brunette-model-studio_23-2148113100.jpg"
          imageAlt="Professional makeup artist applying bridal makeup"
          mediaAnimation="slide-up"
          imagePosition="right"
          buttons={[
            { text: "Call Now: +91-98765-43210", href: "tel:+919876543210" },
            { text: "Book Appointment", href: "#contact" }
          ]}
          className="w-full"
          containerClassName="max-w-7xl mx-auto px-4"
          titleClassName="text-4xl font-bold"
          descriptionClassName="text-lg"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwentyFour
          title="Our Premium Services"
          description="Complete beauty solutions designed to bring out your best. Expert services tailored to your needs."
          tag="Services"
          tagIcon={Heart}
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          features={[
            {
              id: "bridal",              title: "Bridal Makeup",              author: "Expert Artists",              description: "Transform into your most beautiful self on your special day. Professional bridal makeup with premium products and traditional techniques.",              tags: ["Full Service", "Trial Included"],
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-brunette-female-posing-with-colorful-flower-bouquet_613910-2096.jpg",              imageAlt: "Professional bridal makeup"
            },
            {
              id: "facial",              title: "Facial & Skin Care",              author: "Beauty Specialists",              description: "Glow facial, gold facial, and deep clean-up services. Rejuvenate your skin with professional treatments using premium skincare products.",              tags: ["Glow Facial", "Gold Facial"],
              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-getting-beauty-treatment_329181-18828.jpg",              imageAlt: "Professional facial treatment"
            },
            {
              id: "hair",              title: "Hair Services",              author: "Hair Experts",              description: "Hair cutting, hair spa treatments, and professional styling. Get the perfect look with our skilled hair specialists.",              tags: ["Hair Spa", "Styling"],
              imageSrc: "http://img.b2bpic.net/free-photo/professional-girl-hairdresser-makes-client-haircut-girl-is-sitting-mask-beauty-salon_343596-4432.jpg",              imageAlt: "Professional hair styling"
            },
            {
              id: "beauty",              title: "Beauty & Grooming",              author: "Beauty Technicians",              description: "Waxing, threading, manicure, pedicure, and complete grooming solutions. Polished and confident beauty treatments.",              tags: ["Waxing", "Threading"],
              imageSrc: "http://img.b2bpic.net/free-photo/bamboo-whisk-sculpts-thigh-line-spa-smooth-skin_169016-69331.jpg",              imageAlt: "Professional waxing service"
            }
          ]}
          buttons={[
            { text: "View Pricing", href: "#pricing" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About Nishi Beauty Parlour"
          description="Your trusted beauty destination in the heart of your neighborhood. We believe every woman deserves to feel beautiful and confident."
          tag="Our Story"
          tagIcon={Star}
          textboxLayout="default"
          useInvertedBackground={true}
          mediaAnimation="blur-reveal"
          imagePosition="right"
          imageSrc="http://img.b2bpic.net/free-photo/gorgeous-woman-with-lipstick_23-2147783923.jpg"
          imageAlt="Our beautiful salon interior"
          bulletPoints={[
            {
              title: "Expert Team",              description: "Certified and trained beauty professionals with 5+ years of experience",              icon: Users
            },
            {
              title: "Quality Products",              description: "Only premium, dermatologist-approved beauty and skincare products",              icon: Sparkles
            },
            {
              title: "Client Satisfaction",              description: "4.2★ rating from 6+ verified reviews. Your satisfaction is our priority.",              icon: ThumbsUp
            },
            {
              title: "Personalized Service",              description: "Customized treatments tailored to your unique skin type and preferences",              icon: Heart
            }
          ]}
          buttons={[
            { text: "Schedule Now", href: "#contact" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="What Our Clients Say"
          description="Real reviews from real customers who trust Nishi Beauty Parlour for their beauty needs."
          tag="Reviews"
          tagIcon={Star}
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          showRating={true}
          testimonials={[
            {
              id: "1",              name: "Priya Sharma",              handle: "@priyabeauty",              testimonial: "Best bridal makeup I could have asked for! The team made me feel so confident on my wedding day. Highly recommended!",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/indoor-shot-attractive-caucasian-teenage-woman-with-long-dark-hair-sitting-desk-with-lots-textbooks_273609-1136.jpg",              imageAlt: "Priya Sharma"
            },
            {
              id: "2",              name: "Anjali Verma",              handle: "@anjali_glow",              testimonial: "The facial treatment was absolutely rejuvenating. My skin has never looked better. Thank you Nishi Beauty!",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-slim-sensual-girl-gray-dress-leaning-ag_613910-8706.jpg",              imageAlt: "Anjali Verma"
            },
            {
              id: "3",              name: "Isha Patel",              handle: "@ishashine",              testimonial: "Professional, friendly, and affordable. My go-to salon for all my beauty needs. Love the ambiance!",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/content-beautiful-businesswoman-standing-window_1262-1778.jpg",              imageAlt: "Isha Patel"
            },
            {
              id: "4",              name: "Deepika Singh",              handle: "@deepika_glow",              testimonial: "The hair styling for my party was stunning. The team is so talented and friendly. Worth every rupee!",              rating: 4,
              imageSrc: "http://img.b2bpic.net/free-photo/shot-beautiful-young-businesswoman-wearing-blue-chiffon-shirt-while-standing-with-folded-arms-gray-marble-wall_158595-6773.jpg",              imageAlt: "Deepika Singh"
            },
            {
              id: "5",              name: "Neha Gupta",              handle: "@neha_beauty",              testimonial: "Threading and waxing services are top-notch. Clean, hygienic, and professional. Highly satisfied!",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-attractive-emotional-girl-business-style-clothes-plain-white-background-office-audience_78826-2259.jpg",              imageAlt: "Neha Gupta"
            },
            {
              id: "6",              name: "Meera Joshi",              handle: "@meerasmile",              testimonial: "Visited for my first time and got the best experience. The staff is so welcoming and skilled!",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-camera-happy-beautiful-beach_1303-1815.jpg",              imageAlt: "Meera Joshi"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Book Your Appointment Today"
          description="Get ready to feel beautiful. Fill out the form below and our team will confirm your appointment within 2 hours. Call us anytime for instant booking!"
          inputs={[
            { name: "fullName", type: "text", placeholder: "Your Full Name", required: true },
            { name: "phone", type: "tel", placeholder: "Your Phone Number", required: true },
            { name: "service", type: "text", placeholder: "Service You're Looking For", required: true },
            { name: "preferredDate", type: "date", placeholder: "Preferred Date", required: false }
          ]}
          textarea={{
            name: "message",            placeholder: "Any special requests or questions?",            rows: 4,
            required: false
          }}
          useInvertedBackground={false}
          mediaAnimation="fade"
          mediaPosition="right"
          imageSrc="http://img.b2bpic.net/free-photo/women-posing-together-close-up_23-2149190673.jpg"
          imageAlt="Beautiful beauty transformation"
          buttonText="Book Appointment"
          className="w-full"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Quick Links",              items: [
                { label: "Home", href: "#hero" },
                { label: "Services", href: "#services" },
                { label: "About", href: "#about" },
                { label: "Reviews", href: "#testimonials" }
              ]
            },
            {
              title: "Contact Info",              items: [
                { label: "📞 +91-98765-43210", href: "tel:+919876543210" },
                { label: "📍 Brahmachari Ka Kuwa, Uttar Pradesh 231001", href: "https://maps.google.com/?q=Nishi+Beauty+Parlour" },
                { label: "📧 info@nishibeauty.com", href: "mailto:info@nishibeauty.com" },
                { label: "🕐 Mon-Sun: 10AM-8PM", href: "#" }
              ]
            },
            {
              title: "Connect With Us",              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "WhatsApp", href: "https://wa.me/919876543210" },
                { label: "Google Reviews", href: "https://google.com/maps" }
              ]
            }
          ]}
          copyrightText="© 2025 Nishi Beauty Parlour | All rights reserved"
        />
      </div>
    </ThemeProvider>
  );
}
