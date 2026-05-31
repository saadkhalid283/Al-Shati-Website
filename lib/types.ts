export type Lang = "ar" | "en";

export interface Step {
  t: string;
  d: string;
}

export interface Translations {
  dir: string;
  brand: string;
  brandSub: string;
  nav: { home: string; services: string; why: string; reviews: string; contact: string };
  waBtn: string;
  callBtn: string;
  heroEyebrow: string;
  heroTitle1: string;
  heroTitle2: string;
  heroSub: string;
  heroWa: string;
  heroCall: string;
  heroMsg: string;
  badges: string[];
  servicesTitle: string;
  servicesSub: string;
  requestBtn: string;
  moreTitle: string;
  whyTitle: string;
  whySub: string;
  howTitle: string;
  howSub: string;
  steps: Step[];
  reviewsTitle: string;
  reviewsSub: string;
  localGuide: string;
  googleReviews: string;
  heroRating: string;
  ctaTitle: string;
  ctaSub: string;
  ctaWa: string;
  ctaCall: string;
  contactTitle: string;
  contactSub: string;
  callUs: string;
  primaryLine: string;
  secondLine: string;
  addressLabel: string;
  address: string;
  hoursLabel: string;
  hours: string;
  waCard: string;
  waCardSub: string;
  floatMsg: string;
  footerTag: string;
  quickLinks: string;
  footerContact: string;
  rights: string;
  langBtn: string;
}
