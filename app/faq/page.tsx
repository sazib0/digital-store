'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Footer } from '@/components/footer';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What is Digital Store?",
        answer: "Digital Store is an online marketplace that connects farmers directly with consumers, providing fresh agricultural products straight from the farm to your table."
      },
      {
        question: "How does Digital Store work?",
        answer: "Farmers list their products on our platform, and customers can browse, select, and purchase items. We handle the delivery process to ensure fresh products reach your doorstep."
      },
      {
        question: "Where do you deliver?",
        answer: "Currently, we deliver throughout Dhaka city. We're continuously expanding our delivery network to reach more areas."
      }
    ]
  },
  {
    category: "Orders & Delivery",
    questions: [
      {
        question: "How long does delivery take?",
        answer: "Most orders are delivered within 24 hours. For some areas, same-day delivery is available for orders placed before 2 PM."
      },
      {
        question: "What is the minimum order value?",
        answer: "The minimum order value is BDT 500. Orders above BDT 1000 qualify for free delivery."
      },
      {
        question: "Can I track my order?",
        answer: "Yes, once your order is confirmed, you'll receive a tracking link via SMS and email to monitor your delivery status."
      }
    ]
  },
  {
    category: "Products & Quality",
    questions: [
      {
        question: "Are your products organic?",
        answer: "We offer both organic and conventional products. Organic products are clearly labeled and certified by relevant authorities."
      },
      {
        question: "What if I'm not satisfied with the product quality?",
        answer: "We have a 100% satisfaction guarantee. If you're not happy with the quality, we'll replace the items or provide a full refund."
      },
      {
        question: "How do you ensure product freshness?",
        answer: "Products are harvested and collected from farms daily. We maintain a cold chain during transportation to ensure maximum freshness."
      }
    ]
  },
  {
    category: "Payment & Returns",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept cash on delivery, credit/debit cards, and mobile banking (bKash, Nagad, Rocket)."
      },
      {
        question: "What is your return policy?",
        answer: "If you're not satisfied with the products, you can return them within 24 hours of delivery for a full refund or replacement."
      },
      {
        question: "Is it safe to pay online?",
        answer: "Yes, we use industry-standard SSL encryption for all online transactions to ensure your payment information is secure."
      }
    ]
  }
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Find answers to common questions about our services and products.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search */}
        <div className="relative mb-12">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            className="pl-10"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* FAQs */}
        <div className="space-y-8">
          {filteredFaqs.map((category, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem key={faqIndex} value={`${index}-${faqIndex}`} className="bg-white rounded-lg">
                    <AccordionTrigger className="px-4">{faq.question}</AccordionTrigger>
                    <AccordionContent className="px-4 text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
          {filteredFaqs.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No FAQs found matching your search.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}