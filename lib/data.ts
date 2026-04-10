import { weightLossBlogPosts } from './weight-loss-blog-posts'

export { services } from './services'

export const programs = [
  {
    id: 'basic',
    title: 'Basic Diet Plan',
    duration: '1 Month',
    price: '₹2,999',
    features: [
      'Personalized diet chart',
      'Weekly follow-ups',
      'Healthy recipe suggestions',
      'WhatsApp support',
    ],
    popular: false,
  },
  {
    id: 'standard',
    title: 'Standard Program',
    duration: '3 Months',
    price: '₹7,999',
    features: [
      'Customized meal plans',
      'Bi-weekly consultations',
      'Exercise recommendations',
      'Progress tracking',
      '24/7 chat support',
    ],
    popular: true,
  },
  {
    id: 'premium',
    title: 'Premium Transformation',
    duration: '6 Months',
    price: '₹14,999',
    features: [
      'Comprehensive health assessment',
      'Weekly video consultations',
      'Personalized workout plan',
      'Supplement guidance',
      'Priority support',
      'Monthly body composition analysis',
    ],
    popular: false,
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Lost 15 kg in 4 months',
    content: 'Diet2Anybody completely transformed my relationship with food. The personalized approach made all the difference. I never felt like I was on a restrictive diet!',
    rating: 5,
    image: '/testimonials/priya.webp',
  },
  {
    id: 2,
    name: 'Rahul Verma',
    role: 'Managed Diabetes Successfully',
    content: 'My blood sugar levels have been consistently normal since I started following the diet plan. The team is incredibly supportive and knowledgeable.',
    rating: 5,
    image: '/testimonials/rahul.webp',
  },
  {
    id: 3,
    name: 'Sneha Patel',
    role: 'PCOS Management',
    content: 'After years of struggling with PCOS, I finally found a diet that works. My symptoms have reduced significantly and I feel more energetic than ever.',
    rating: 5,
    image: '/testimonials/sneha.webp',
  },
  {
    id: 4,
    name: 'Amit Kumar',
    role: 'Athletic Performance',
    content: 'As a marathon runner, proper nutrition is crucial. The sports nutrition plan helped me improve my timing and recovery significantly.',
    rating: 5,
    image: '/testimonials/amit.webp',
  },
]

export const stats = [
  { value: 300, suffix: '+', label: 'Happy Clients' },
  { value: 8, suffix: '+', label: 'Experience' },
  { value: 20, suffix: '+', label: 'Diet Programs' },
  { value: 98, suffix: '%', label: 'Success Rate' },
]

export const blogPosts = [
  ...weightLossBlogPosts,
]

export const faqs = [
  {
    question: 'How do I get started with a diet plan?',
    answer: 'Getting started is easy! Simply book a consultation through our website or call us. During your first session, we\'ll discuss your health goals, medical history, and lifestyle to create a personalized plan.',
  },
  {
    question: 'Are the diet plans customized?',
    answer: 'Yes, all our diet plans are 100% customized based on your individual needs, preferences, health conditions, and goals. We don\'t believe in one-size-fits-all approaches.',
  },
  {
    question: 'How often do I need to consult with the dietitian?',
    answer: 'The frequency depends on your program. Basic plans include weekly follow-ups, while premium programs offer more frequent consultations. We adjust based on your progress and needs.',
  },
  {
    question: 'Can you help with medical conditions like diabetes or thyroid?',
    answer: 'Absolutely! Our team includes specialists experienced in managing various medical conditions through nutrition. We work alongside your healthcare providers for optimal results.',
  },
  {
    question: 'Do you provide vegetarian and vegan options?',
    answer: 'Yes! We cater to all dietary preferences including vegetarian, vegan, Jain, and other specific requirements. Your diet plan will respect your food choices and cultural preferences.',
  },
]
