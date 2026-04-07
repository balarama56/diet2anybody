export type PricingTier = {
  id: string
  title: string
  /** Second line under title, e.g. "Monthly" */
  subtitle: string
  /** Large price line, e.g. "₹999" */
  price: string
  popular?: boolean
  features: string[]
}

/** Shared tiers for all program detail pages */
export const servicePricingTiers: PricingTier[] = [
  {
    id: 'basic',
    title: 'Basic Plan',
    subtitle: 'Monthly',
    price: '₹999',
    features: [
      'Consultation Call',
      'Month Meal Plans Management',
      'WhatsApp Support: 8 hrs',
      'Follow UP Calls 1',
      'Blood Report Evaluation',
    ],
  },
  {
    id: 'standard',
    title: 'Standard Plan',
    subtitle: 'Monthly',
    price: '₹1,999',
    popular: true,
    features: [
      'Consultation Call',
      'Bi-Weekly Meal Plans Management',
      'WhatsApp Support: 12 hrs',
      'Follow UP Calls 2',
      'Blood Report Evaluation',
      'Therapeutic Diets',
      'Workout Plan Videos',
      'Travel Diet',
    ],
  },
  {
    id: 'platinum',
    title: 'Platinum Plan',
    subtitle: 'Monthly',
    price: '₹2,999',
    features: [
      'Consultation Call',
      'Weekly Meal Plans Management',
      'WhatsApp Support Unlimited',
      'Follow UP Calls 3',
      'Blood Report Evaluation',
      'Therapeutic Diets',
      'Workout Plan Videos',
      'Travel Diet',
    ],
  },
]
