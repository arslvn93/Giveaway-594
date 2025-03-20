// This file centralizes all editable content for the giveaway page

// Prize section
export const prizeImages = [
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixid=M3w3MjQzNjF8MHwxfHNlYXJjaHwxfHxiYXJiZXJ8ZW58MHx8fHwxNzQyNDIwMzk3fDA&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixid=M3w3MjQzNjF8MHwxfHNlYXJjaHwyfHxiYXJiZXJ8ZW58MHx8fHwxNzQyNDIwMzk3fDA&ixlib=rb-4.0.3", 
  "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?ixid=M3w3MjQzNjF8MHwxfHNlYXJjaHwzfHxiYXJiZXJ8ZW58MHx8fHwxNzQyNDIwMzk3fDA&ixlib=rb-4.0.3", 
];
export const prizeContent = {
  title: "Local Barber Shop $100 Gift Card",
  description: "Enjoy a fun and fresh family outing with a $100 gift card to our beloved local barber shop. Whether it’s your kid’s first haircut or a family trimming day, this prize is your ticket to creating memorable moments with your loved ones.",
  features: [
    "Exclusive $100 gift card for a local barber shop",
    "Perfect for family outings and first haircuts",
    "Simple entry process – no purchase necessary",
    "Support local businesses in our community",
    "A chance to create unforgettable family memories",
  ],
  value: "$100",
};

// Header section
export const headerContent = {
  title: "Win a $100 Gift Card for Family Fun!",
  description: "Exclusive giveaway for families! Enter for a chance to win a $100 gift card to our favorite local barber shop. Don't miss out – join in today!",
  ctaText: "Enter Now",
  heroImage: prizeImages[0],
  secondaryImage: prizeImages[1], // Add secondary image for the header
};

// Navigation section
export const navigationContent = {
  title: "Local Barber Shop Giveaway",
  links: [
    { name: 'Home', href: '#' },
    { name: 'Prize Details', href: '#prize' },
    { name: 'How to Enter', href: '#howToEnter' },
    { name: 'Rules', href: '#rules' },
    { name: 'Contact', href: '#contact' }
  ]
};

// How to Enter section
export const howToEnterContent = {
  title: "How to Enter",
  description: "Entering is easy! Follow these simple steps to secure your chance at winning our exclusive $100 gift card:",
  steps: [
    {
      icon: "Mail",
      title: "Fill Out the Form",
      description: "Enter your name and email address in the form and hit submit."
    },
    {
      icon: "Share2",
      title: "Spread the Word",
      description: "Share the giveaway on social media for additional entries."
    },
    {
      icon: "Users",
      title: "Confirm Your Entry",
      description: "Check your email for a confirmation to complete your entry."
    }
  ],
  benefits: [
    { 
      icon: "Clock", 
      title: "Quick & Easy", 
      desc: "Takes less than a minute" 
    },
    { 
      icon: "Trophy", 
      title: "Extra Chances", 
      desc: "Earn bonus entries by sharing" 
    },
    { 
      icon: "Gift", 
      title: "Awesome Prize", 
      desc: "Valued at $100" 
    }
  ],
  formLabels: {
    nameLabel: "Your Name",
    namePlaceholder: "John Doe",
    emailLabel: "Email Address",
    emailPlaceholder: "you@example.com",
    submitButton: "Enter Giveaway",
    processingText: "Processing...",
    sharingPlatforms: ["Facebook", "Twitter", "Instagram"],
    sharingText: "Share for Extra Entries:",
    termsText: "By entering, you agree to our Terms & Conditions and Privacy Policy."
  },
  successMessage: {
    title: "Entry Submitted!",
    description: "Check your email to confirm your entry."
  },
  currentEntries: 482
};

// Rules section
export const rulesContent = {
  title: "Rules & Eligibility",
  description: "Please review the following rules and eligibility requirements before entering the giveaway.",
  rules: [
    {
      question: "Who is eligible to enter?",
      answer: "Anyone 18 years or older residing in our community can enter this giveaway."
    },
    {
      question: "How long does the giveaway run?",
      answer: "This giveaway runs from March 19, 2025 until April 7, 2025, as indicated by the countdown timer."
    },
    {
      question: "How will the winner be selected?",
      answer: "The winner will be selected randomly from all valid entries using a certified random selection process to ensure fairness."
    },
    {
      question: "When and how will the winner be notified?",
      answer: "The winner will be notified via email within 48 hours after the giveaway ends and must respond within 72 hours to claim the prize."
    },
    {
      question: "How many times can I enter?",
      answer: "Each person may enter once. Additional entries can be earned by sharing on social media (up to 3 extra entries)."
    },
    {
      question: "Is my information secure?",
      answer: "Yes, your information is kept confidential and is only used for the purposes of this giveaway."
    }
  ],
  imageUrl: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=800",
  tipsForEntering: [
    "Double-check your email before submitting your entry",
    "Share on social media for extra entry opportunities",
    "Set a reminder for the drawing date"
  ],
  importantNotice: "All winners will be contacted via the email provided at entry. Be sure to check your inbox (and spam folder) regularly after the giveaway ends.",
  supportEmail: "support@giveaway.com",
  termsText: "By entering, you agree to all the rules and terms.",
  downloadRulesText: "Download Full Rules PDF"
};

// Contact section
export const contactContent = {
  title: "Get In Touch",
  email: "info@theskygroup.ca",
  phone: "289-210-5250",
  brokerage: {
    name: "The Sky Group",
    address: "123 Arena Blvd, Toronto"
  },
  disclaimer: "This site is not intended to solicit buyers or sellers who are currently under contract.",
  copyright: "Copyright 2025. All rights reserved",
  privacyPolicyText: "Privacy Policy"
};

// Footer section
export const footerContent = {
  aboutText: "The Sky Group specializes in offering exclusive opportunities and community-focused giveaways for our dedicated fans.",
  email: "info@theskygroup.ca",
  phone: "289-210-5250",
  quickLinks: ["Home", "About", "Listings", "Contact", "Privacy Policy"],
  newsletterText: "Subscribe to our newsletter for the latest updates on giveaways and exclusive offers.",
  brokerage: {
    name: "The Sky Group",
    address: "123 Arena Blvd, Toronto"
  },
  disclaimer: "This site is not intended to solicit buyers or sellers who are currently under contract.",
  copyright: "Copyright 2025. All rights reserved",
  company: "The Sky Group",
  privacyPolicyText: "Privacy Policy"
};

// Countdown
export const countdownContent = {
  endDate: new Date("April 7, 2025")
};

// Color scheme configuration for the entire giveaway
export const colorScheme = {
  primary: {
    main: 'amber-600',
    light: 'amber-400',
    dark: 'amber-800',
    gradient: 'from-amber-500 to-amber-700',
    text: 'amber-700',
    textLight: 'amber-500',
    textDark: 'amber-900',
    hover: 'amber-700',
    border: 'amber-200',
    background: 'amber-50',
    accent: 'amber-100',
    accentDark: 'amber-300',
  },
  secondary: {
    main: 'white',
    text: 'gray-700',
    textLight: 'gray-600',
    textDark: 'gray-800',
    border: 'gray-200',
    background: 'white',
    accent: 'gray-100',
  },
  utility: {
    success: 'green-600',
    successLight: 'green-100',
    error: 'red-600',
    errorLight: 'red-100',
    warning: 'yellow-600',
    warningLight: 'yellow-100',
    info: 'blue-600',
    infoLight: 'blue-100',
  },
  gradients: {
    header: 'from-amber-100/70 via-amber-50/40 to-transparent',
    countdownBg: 'from-amber-800 to-amber-950',
    countdownText: 'from-amber-200 to-amber-400',
    prizeTitle: 'from-amber-700 to-amber-500',
    button: 'from-amber-500 to-amber-600',
    buttonHover: 'from-amber-600 to-amber-700',
  },
  shadows: {
    small: 'shadow-md',
    medium: 'shadow-lg',
    large: 'shadow-xl',
    extraLarge: 'shadow-2xl',
    glow: 'shadow-[0_0_15px_rgba(251,191,36,0.3)]',
  },
  animations: {
    float: 'animate-float',
    pulseSlow: 'animate-pulse-slow',
    bounceSlow: 'animate-bounce-slow',
  }
};