/** Contact page FAQ — shared by UI and FAQPage JSON-LD (must match). */
export const contactPageFaqs = [
  {
    question: 'How do consultations work?',
    answer:
      'We offer both online and in-person consultations. Book a slot and our dietitian will review your health history, goals, and lifestyle—then create a personalized plan you can follow with confidence.',
  },
  {
    question: 'Is the first consultation free?',
    answer:
      'Yes. Your first consultation is free and without obligation. We use it to understand your needs and recommend the best program for you.',
  },
  {
    question: 'How do I book an appointment?',
    answer:
      'Use the contact form on this page, call or WhatsApp us, or email—we will confirm a time that works for you and send any prep steps before the session.',
  },
  {
    question: 'Can I cancel or reschedule my appointment?',
    answer:
      'Yes. Please give us at least 24 hours notice when possible so we can offer the slot to someone else. Contact us by phone or WhatsApp to reschedule.',
  },
] as const

export type ContactFaqItem = (typeof contactPageFaqs)[number]
