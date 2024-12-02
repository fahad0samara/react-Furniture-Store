import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What is your delivery timeframe?',
    answer: 'Standard delivery typically takes 5-7 business days. For custom pieces, please allow 4-6 weeks for production and delivery.',
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship to select international destinations. Shipping costs and delivery times vary by location.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for standard items in original condition. Custom pieces are non-returnable.',
  },
  {
    question: 'Do you offer assembly services?',
    answer: 'Yes, professional assembly service is available for an additional fee in select areas.',
  },
  {
    question: 'Can I customize furniture dimensions?',
    answer: 'Yes, many of our pieces can be customized to your specifications. Contact our design team for details.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers. Financing options are also available.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="pt-20">
      <div className="relative h-[40vh] mb-16">
        <img
          src="https://images.unsplash.com/photo-1618219740975-d40978bb7378?auto=format&fit=crop&q=80"
          alt="FAQ"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-serif">
            Frequently Asked Questions
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg"
              >
                <span className="font-medium text-left">{faq.question}</span>
                {openIndex === index ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 text-gray-600">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}