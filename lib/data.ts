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
  { value: 5000, suffix: '+', label: 'Happy Clients' },
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Diet Programs' },
  { value: 98, suffix: '%', label: 'Success Rate' },
]

export const blogPosts = [
  ...weightLossBlogPosts,
  {
    slug: 'benefits-of-balanced-diet',
    title: '10 Amazing Benefits of a Balanced Diet',
    excerpt: 'Discover how a balanced diet can transform your health, boost energy levels, and improve your overall well-being.',
    content: `
A balanced diet is the cornerstone of good health. When we nourish our bodies with the right combination of nutrients, we unlock numerous health benefits that extend far beyond just maintaining a healthy weight.

## What is a Balanced Diet?

A balanced diet includes a variety of foods from all food groups in the right proportions. This means incorporating:

- **Fruits and vegetables** - At least 5 portions daily
- **Whole grains** - Brown rice, whole wheat, oats
- **Lean proteins** - Fish, poultry, legumes, nuts
- **Dairy or alternatives** - For calcium and vitamin D
- **Healthy fats** - Olive oil, avocados, nuts

## Key Benefits

### 1. Improved Energy Levels
When you eat a balanced diet, your body receives a steady supply of nutrients that help maintain consistent energy levels throughout the day.

### 2. Better Mental Health
Research shows a strong connection between diet and mental health. Nutrients like omega-3 fatty acids, B vitamins, and antioxidants support brain function and mood regulation.

### 3. Stronger Immune System
A diet rich in vitamins, minerals, and antioxidants helps strengthen your immune system, making you more resistant to infections and diseases.

### 4. Healthy Weight Management
Balanced eating naturally helps you maintain a healthy weight without extreme restrictions or fad diets.

### 5. Reduced Disease Risk
A nutritious diet can significantly reduce the risk of chronic conditions like heart disease, diabetes, and certain cancers.

## Getting Started

Making dietary changes doesn't have to be overwhelming. Start with small, sustainable changes and gradually build healthier habits over time. Consider consulting with a registered dietitian for personalized guidance.
    `,
    image: '/blog/balanced-diet.webp',
    author: 'Dr. Priya Nutritionist',
    date: '2024-01-15',
    category: 'Nutrition',
    readTime: '5 min read',
  },
  {
    slug: 'pcos-diet-guide',
    title: 'Complete PCOS Diet Guide: Foods to Eat and Avoid',
    excerpt: 'Learn about the best dietary strategies to manage PCOS symptoms and improve hormonal balance naturally.',
    content: `
Polycystic Ovary Syndrome (PCOS) affects millions of women worldwide. While there's no cure, dietary changes can significantly help manage symptoms and improve quality of life.

## Understanding PCOS and Diet

Diet plays a crucial role in managing PCOS because it directly affects insulin levels, inflammation, and hormone balance. The right dietary choices can help regulate menstrual cycles, reduce symptoms, and lower the risk of long-term complications.

## Foods to Include

### Complex Carbohydrates
- Whole grains (quinoa, brown rice, oats)
- Legumes (lentils, chickpeas, beans)
- Sweet potatoes

### Anti-Inflammatory Foods
- Fatty fish (salmon, mackerel)
- Leafy greens
- Berries
- Turmeric

### Lean Proteins
- Chicken breast
- Fish
- Tofu
- Eggs

## Foods to Limit or Avoid

- Refined carbohydrates
- Sugary foods and beverages
- Processed foods
- Excessive dairy (for some individuals)

## Sample Meal Plan

**Breakfast:** Oatmeal with berries and nuts
**Lunch:** Grilled chicken salad with olive oil dressing
**Dinner:** Baked salmon with quinoa and roasted vegetables
**Snacks:** Greek yogurt, nuts, or fresh fruits

## Lifestyle Tips

Remember that diet is just one piece of the puzzle. Regular exercise, stress management, and adequate sleep are equally important for managing PCOS effectively.
    `,
    image: '/blog/pcos-diet.webp',
    author: 'Dr. Priya Nutritionist',
    date: '2024-01-10',
    category: 'PCOS',
    readTime: '7 min read',
  },
  {
    slug: 'weight-loss-mistakes',
    title: '7 Common Weight Loss Mistakes and How to Avoid Them',
    excerpt: 'Avoid these common pitfalls that prevent people from achieving their weight loss goals.',
    content: `
Weight loss can be challenging, and many people unknowingly make mistakes that sabotage their efforts. Understanding these common pitfalls can help you stay on track and achieve lasting results.

## Mistake #1: Extreme Calorie Restriction

While creating a calorie deficit is necessary for weight loss, cutting calories too drastically can backfire. Your body may go into "starvation mode," slowing metabolism and making weight loss harder.

**Solution:** Aim for a moderate deficit of 500-750 calories per day for sustainable weight loss.

## Mistake #2: Skipping Meals

Skipping meals often leads to overeating later and can cause blood sugar fluctuations that increase cravings.

**Solution:** Eat regular, balanced meals and healthy snacks to keep your metabolism active.

## Mistake #3: Focusing Only on the Scale

Weight fluctuates daily due to water retention, hormones, and other factors. Obsessing over the number can be discouraging.

**Solution:** Track progress through multiple measures - how clothes fit, energy levels, and body measurements.

## Mistake #4: Neglecting Protein

Protein is essential for preserving muscle mass during weight loss and keeping you feeling full longer.

**Solution:** Include protein in every meal - aim for 0.8-1g per pound of body weight daily.

## Mistake #5: Drinking Calories

Beverages like sodas, fruit juices, and fancy coffee drinks can add significant calories without making you feel full.

**Solution:** Stick to water, unsweetened tea, and black coffee. Save calories for satisfying foods.

## Mistake #6: Not Getting Enough Sleep

Poor sleep disrupts hunger hormones and can increase cravings for high-calorie foods.

**Solution:** Aim for 7-9 hours of quality sleep per night.

## Mistake #7: Going It Alone

Without proper guidance, it's easy to follow ineffective or even harmful diet advice.

**Solution:** Work with a qualified nutritionist who can create a personalized plan for your needs.
    `,
    image: '/blog/weight-loss.webp',
    author: 'Dr. Priya Nutritionist',
    date: '2024-01-05',
    category: 'Weight Loss',
    readTime: '6 min read',
  },
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
