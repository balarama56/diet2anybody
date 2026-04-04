export type ServiceProgramDetail = {
  tagline: string
  intro: string
  benefits: { title: string; description: string }[]
  included: string[]
  idealFor: string[]
  process: { title: string; description: string }[]
}

export const serviceProgramDetails: Record<string, ServiceProgramDetail> = {
  'weight-loss': {
    tagline: 'Sustainable weight loss with Indian meals you enjoy',
    intro:
      'Our nutritionists build calorie-aware plans around your tastes, culture, and routine—so you lose fat without crash dieting or skipping family meals.',
    benefits: [
      {
        title: 'Personalized macros',
        description: 'Portions and food swaps matched to your goals, activity level, and medical history.',
      },
      {
        title: 'Lifestyle-first',
        description: 'Travel, work shifts, and festivals are built into your plan—not treated as failures.',
      },
      {
        title: 'Steady progress',
        description: 'Weekly check-ins to adjust your plan and keep motivation high.',
      },
    ],
    included: [
      'Custom meal structure (breakfast, lunch, dinner, snacks)',
      'Regional Indian food options and easy recipes',
      'Hydration and sleep tips that support fat loss',
      'Guidance on eating out and ordering in',
      'WhatsApp support for quick questions',
    ],
    idealFor: [
      'Adults who want structured, safe fat loss',
      'People who have tried fad diets without lasting results',
      'Those with mild lifestyle-related health concerns (discussed in consultation)',
      'Anyone seeking habit-based change—not extreme restriction',
    ],
    process: [
      {
        title: 'Assessment',
        description: 'We review weight history, health markers, food preferences, and schedule.',
      },
      {
        title: 'Plan design',
        description: 'You receive a clear, written plan with swaps and a grocery-friendly list.',
      },
      {
        title: 'Coaching',
        description: 'We track progress, refine portions, and troubleshoot plateaus together.',
      },
      {
        title: 'Maintenance',
        description: 'You learn to stabilize weight with flexible eating for the long term.',
      },
    ],
  },
  pcod: {
    tagline: 'Nutrition aligned with hormone balance and insulin sensitivity',
    intro:
      'PCOS-friendly eating patterns can help manage energy, cravings, and cycles. We focus on balanced plates, protein, fiber, and sustainable routines—not generic “diet culture” rules.',
    benefits: [
      {
        title: 'Blood-sugar aware',
        description: 'Meal timing and composition aimed at steadier glucose and fewer crashes.',
      },
      {
        title: 'Inflammation-smart',
        description: 'Food choices that fit anti-inflammatory patterns where appropriate for you.',
      },
      {
        title: 'Supportive follow-up',
        description: 'Adjustments as symptoms, activity, or medications change.',
      },
    ],
    included: [
      'PCOS-focused meal templates you can repeat',
      'Snack ideas for busy days',
      'Guidance on supplements only as discussed with your clinician',
      'Support for vegetarian, egg, or non-veg preferences',
      'Coordination-friendly notes for your doctor when needed',
    ],
    idealFor: [
      'Women diagnosed with PCOS or PCOD',
      'Those managing weight, skin, or energy concerns alongside PCOS',
      'Clients who want practical meals—not unrealistic elimination diets',
      'Anyone pairing nutrition with medical care and labs',
    ],
    process: [
      {
        title: 'History & goals',
        description: 'Symptoms, cycle patterns, medications, and what success means for you.',
      },
      {
        title: 'Meal architecture',
        description: 'We define breakfast–dinner patterns that fit your life.',
      },
      {
        title: 'Iterate',
        description: 'We refine based on hunger, energy, and your feedback.',
      },
      {
        title: 'Long-term habits',
        description: 'You build confidence to eat independently with guardrails.',
      },
    ],
  },
  diabetes: {
    tagline: 'Meal planning that respects your medications and glucose patterns',
    intro:
      'Whether type 2, prediabetes, or gestational history, we translate medical advice into everyday meals—without banning your cultural foods outright.',
    benefits: [
      {
        title: 'Glycemic balance',
        description: 'Carb quality, portions, and pairing explained in simple terms.',
      },
      {
        title: 'Heart-smart choices',
        description: 'Fiber, fats, and protein aligned with common cardiometabolic goals.',
      },
      {
        title: 'Practical tracking',
        description: 'Optional food logs or photo check-ins—your choice.',
      },
    ],
    included: [
      'Meal and snack ideas with portion guides',
      'Low-GI swaps for staples you already eat',
      'Dining-out strategies',
      'Coordination with your doctor’s targets when shared',
      'Family-friendly meals so one plan fits the household',
    ],
    idealFor: [
      'Adults managing type 2 diabetes or prediabetes',
      'Anyone newly diagnosed who feels overwhelmed by food rules',
      'People on insulin or oral meds who need structured eating times',
      'Families cooking one meal for multiple needs',
    ],
    process: [
      {
        title: 'Clinical context',
        description: 'We note meds, recent labs if available, and typical meal times.',
      },
      {
        title: 'Plate method',
        description: 'We teach a repeatable way to build satisfying, balanced meals.',
      },
      {
        title: 'Tune & test',
        description: 'We adjust as glucose response and lifestyle change.',
      },
      {
        title: 'Confidence',
        description: 'You learn to self-correct portions when routines shift.',
      },
    ],
  },
  thyroid: {
    tagline: 'Supportive nutrition for energy, metabolism, and recovery',
    intro:
      'Hypo- or hyperthyroid care often needs consistent protein, key minerals, and stress-aware routines. We align food with your treatment—not replace it.',
    benefits: [
      {
        title: 'Nutrient density',
        description: 'Emphasis on protein, iron-friendly pairings, and balanced iodine/selenium context.',
      },
      {
        title: 'Energy pacing',
        description: 'Meals sized for fatigue patterns and workout days.',
      },
      {
        title: 'Medication timing',
        description: 'Meal spacing tips around thyroid meds when relevant.',
      },
    ],
    included: [
      'Thyroid-aware meal outlines',
      'Snack lists for low-energy days',
      'Hydration and sleep hygiene reminders',
      'Exercise-friendly fueling basics',
      'Ongoing messaging support',
    ],
    idealFor: [
      'People on thyroid medication seeking structured eating',
      'Those with fatigue, weight, or hair concerns alongside thyroid issues',
      'Clients who want to avoid random internet “thyroid diets”',
      'Anyone combining nutrition with endocrinology care',
    ],
    process: [
      {
        title: 'Snapshot',
        description: 'Symptoms, meds, recent thyroid labs if you have them.',
      },
      {
        title: 'Fuel strategy',
        description: 'Meals built around energy needs and preferences.',
      },
      {
        title: 'Monitor',
        description: 'We adapt as dose changes or symptoms shift.',
      },
      {
        title: 'Stability',
        description: 'You keep a flexible template for travel and busy weeks.',
      },
    ],
  },
  pregnant: {
    tagline: 'Safe, trimester-aware nutrition for mother and baby',
    intro:
      'We help you meet extra protein, iron, folate, and calcium needs through familiar foods—while managing nausea, cravings, and food safety.',
    benefits: [
      {
        title: 'Trimester tweaks',
        description: 'Adjustments for nausea, heartburn, and third-trimester comfort.',
      },
      {
        title: 'Food safety',
        description: 'Clear guidance on what to limit without unnecessary fear.',
      },
      {
        title: 'Gestational diabetes ready',
        description: 'Structured plates if your doctor flags glucose concerns.',
      },
    ],
    included: [
      'Meal frequency and snack ideas',
      'Hydration and supplement discussion (with your OB)',
      'Vegetarian and non-veg options',
      'Postpartum handoff notes for breastfeeding goals',
      'Partner-friendly cooking tips',
    ],
    idealFor: [
      'Expecting mothers in any trimester',
      'Those with nausea, anemia risk, or prior GD history',
      'Vegetarian or vegan pregnancies needing review',
      'Anyone wanting culturally familiar meals',
    ],
    process: [
      {
        title: 'Obstetric alignment',
        description: 'We follow your doctor’s restrictions and supplement plan.',
      },
      {
        title: 'Daily structure',
        description: 'Meals and snacks that hit key nutrients.',
      },
      {
        title: 'Symptom support',
        description: 'We adapt recipes as appetite changes.',
      },
      {
        title: 'Birth & beyond',
        description: 'Planning for recovery and lactation nutrition if needed.',
      },
    ],
  },
  'weight-gain': {
    tagline: 'Healthy weight gain with structured calories and strength support',
    intro:
      'We increase intake using nutrient-dense foods—not only junk calories—so you gain lean mass where possible while protecting digestion.',
    benefits: [
      {
        title: 'Calorie clarity',
        description: 'Realistic targets and meal additions you can repeat.',
      },
      {
        title: 'Protein forward',
        description: 'Enough protein to support muscle with training if you exercise.',
      },
      {
        title: 'Digestion aware',
        description: 'Fiber and fluids adjusted so higher intake feels comfortable.',
      },
    ],
    included: [
      'Higher-calorie swaps for staples you like',
      'Shake and snack ideas',
      'Meal timing for appetite challenges',
      'Gym-day fueling tips',
      'Weekly weight trend review',
    ],
    idealFor: [
      'Underweight adults or athletes needing mass',
      'People recovering from illness with clearance to gain',
      'Those who “eat a lot” but still don’t gain—need structure',
      'Clients pairing food with resistance training',
    ],
    process: [
      {
        title: 'Baseline',
        description: 'Weight, intake estimate, and barriers to eating more.',
      },
      {
        title: 'Additions',
        description: 'Specific add-ons per meal to hit surplus comfortably.',
      },
      {
        title: 'Train & eat',
        description: 'Align intake with workouts if applicable.',
      },
      {
        title: 'Lock in',
        description: 'Maintenance calories once goal weight is reached.',
      },
    ],
  },
  hair: {
    tagline: 'Nutrients that support hair follicle health from the inside out',
    intro:
      'Hair thinning often links to iron, protein, vitamin D, and stress. We build meals that cover gaps—alongside dermatology or trichology care when needed.',
    benefits: [
      {
        title: 'Protein & iron',
        description: 'Meat, plant, or mixed approaches depending on your diet.',
      },
      {
        title: 'Anti-inflammatory base',
        description: 'Whole-food patterns that support scalp health.',
      },
      {
        title: 'Stress & sleep',
        description: 'Lifestyle hooks that complement nutrition.',
      },
    ],
    included: [
      'Blood-work-friendly food focus (per your reports)',
      'Vegetarian iron absorption tips',
      'Simple weekly meal rotation',
      'Supplement discussion boundaries with your doctor',
      'Photo-based progress check-ins optional',
    ],
    idealFor: [
      'Hair shedding or thinning with nutritional contributors',
      'Vegetarians at risk of low iron or B12',
      'Post-illness or postpartum hair changes',
      'Anyone tired of shampoo-only fixes',
    ],
    process: [
      {
        title: 'Pattern review',
        description: 'Hair timeline, stress, diet, and labs if available.',
      },
      {
        title: 'Nutrient map',
        description: 'We prioritize gaps before exotic supplements.',
      },
      {
        title: 'Meal upgrade',
        description: 'Concrete swaps and recipes.',
      },
      {
        title: 'Sustain',
        description: 'Habits that fit travel and work.',
      },
    ],
  },
  'post-pregnancy': {
    tagline: 'Recovery, lactation, and gentle weight goals on your timeline',
    intro:
      'After delivery, nutrition supports healing, milk supply (if breastfeeding), sleep deprivation, and gradual return to activity—without pressure to “bounce back” overnight.',
    benefits: [
      {
        title: 'Healing first',
        description: 'Calories and protein aligned with recovery and feeding.',
      },
      {
        title: 'Lactation-aware',
        description: 'Fluids, galactagogue myths debunked, and practical snacks.',
      },
      {
        title: 'Gradual fat loss',
        description: 'When appropriate, small deficits that don’t tank supply.',
      },
    ],
    included: [
      'One-handed snack ideas',
      'Hydration and caffeine guidance',
      'Iron and calcium through food',
      'Partner meal prep shortcuts',
      'Emotional eating support strategies',
    ],
    idealFor: [
      'New mothers 0–12 months postpartum',
      'Breastfeeding or formula-feeding parents',
      'Those managing thyroid or glucose post-delivery',
      'Anyone seeking sane timelines—not crash diets',
    ],
    process: [
      {
        title: 'Fourth trimester',
        description: 'Healing, feeding method, and sleep reality check.',
      },
      {
        title: 'Fuel & recover',
        description: 'Meals that match hunger and energy.',
      },
      {
        title: 'Reintroduce activity',
        description: 'Eating for walks, PT, or gym as cleared.',
      },
      {
        title: 'New normal',
        description: 'Stable routine before aggressive fat loss.',
      },
    ],
  },
}
