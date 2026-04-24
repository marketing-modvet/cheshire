// Dubai Vet Price Intelligence Database
// Auto-generated + manually curated
// All prices in AED (inclusive of VAT unless noted)
// Sources: clinic websites, Groupon, search results, Andrew's manual research

const LAST_UPDATED = "2026-04-24";

const OUR_BRANDS = ["Modern Vet Hospital", "Modern Vet Branches", "Blue Oasis Vet", "Vienna Vet"];

const SERVICES = [
  { id: "consult_standard", label: "Consultation (Standard)", category: "Consultation" },
  { id: "consult_emergency", label: "Consultation (Emergency Walk-In)", category: "Consultation" },
  { id: "vax_annual_dog", label: "Annual Vaccination – Dog (incl. tag)", category: "Vaccinations" },
  { id: "vax_annual_cat", label: "Annual Vaccination – Cat (incl. tag)", category: "Vaccinations" },
  { id: "vax_initial_dog", label: "Initial Vaccination – Dog (2x + rabies)", category: "Vaccinations" },
  { id: "vax_initial_cat", label: "Initial Vaccination – Cat (2x + rabies)", category: "Vaccinations" },
  { id: "microchip", label: "Microchipping", category: "Preventive" },
  { id: "neuter_cat_male", label: "Neuter – Cat (Male)", category: "Surgery" },
  { id: "spay_cat_female", label: "Spay – Cat (Female)", category: "Surgery" },
  { id: "neuter_dog_male_s", label: "Neuter – Dog (Male, <10kg)", category: "Surgery" },
  { id: "spay_dog_female_s", label: "Spay – Dog (Female, <10kg)", category: "Surgery" },
  { id: "neuter_dog_male_m", label: "Neuter – Dog (Male, 11–25kg)", category: "Surgery" },
  { id: "spay_dog_female_m", label: "Spay – Dog (Female, 11–25kg)", category: "Surgery" },
  { id: "dental_scale_cat", label: "Dental Scaling – Cat", category: "Dental" },
  { id: "dental_scale_dog_s", label: "Dental Scaling – Dog (<10kg)", category: "Dental" },
  { id: "dental_scale_dog_m", label: "Dental Scaling – Dog (10–25kg)", category: "Dental" },
];

const COMPETITORS = [
  // ─────────────────────────────────────────────
  // OUR BRANDS (for comparison baseline)
  // ─────────────────────────────────────────────
  {
    id: "mv_hospital",
    name: "Modern Vet Hospital",
    isOurs: true,
    website: "https://modernvet.com",
    notes: "MV JLT Hospital",
    prices: {
      consult_standard: { val: 299, note: "excl. VAT", src: "internal", date: "2026-01-19" },
      consult_emergency: { val: 380, note: "excl. VAT", src: "internal", date: "2026-01-19" },
      vax_annual_dog: { val: 349, note: "excl. VAT", src: "internal", date: "2026-01-19" },
      vax_annual_cat: { val: 349, note: "excl. VAT", src: "internal", date: "2026-01-19" },
      vax_initial_dog: { val: 699, note: "excl. VAT", src: "internal", date: "2026-01-19" },
      vax_initial_cat: { val: 699, note: "excl. VAT", src: "internal", date: "2026-01-19" },
      microchip: { val: 200, note: "excl. VAT", src: "internal", date: "2026-01-19" },
      neuter_cat_male: { val: 999, note: "excl. VAT, incl. blood", src: "internal", date: "2026-01-19" },
      spay_cat_female: { val: 1299, note: "excl. VAT, incl. blood", src: "internal", date: "2026-01-19" },
      neuter_dog_male_s: { val: 1849, note: "excl. VAT, incl. blood", src: "internal", date: "2026-01-19" },
      spay_dog_female_s: { val: 2049, note: "excl. VAT, incl. blood", src: "internal", date: "2026-01-19" },
      neuter_dog_male_m: { val: 2049, note: "excl. VAT, incl. blood", src: "internal", date: "2026-01-19" },
      spay_dog_female_m: { val: 2299, note: "excl. VAT, incl. blood", src: "internal", date: "2026-01-19" },
      dental_scale_cat: { val: 1489, note: "excl. VAT", src: "internal", date: "2026-01-19" },
      dental_scale_dog_s: { val: 1654, note: "excl. VAT", src: "internal", date: "2026-01-19" },
      dental_scale_dog_m: { val: 2205, note: "excl. VAT", src: "internal", date: "2026-01-19" },
    }
  },
  {
    id: "mv_branches",
    name: "Modern Vet Branches",
    isOurs: true,
    website: "https://modernvet.com",
    notes: "MV Azizi / Downtown / etc.",
    prices: {
      consult_standard: { val: 249, note: "excl. VAT", src: "internal", date: "2026-01-19" },
      consult_emergency: { val: 380, note: "excl. VAT", src: "internal", date: "2026-01-19" },
      vax_annual_dog: { val: 349, note: "excl. VAT", src: "internal", date: "2026-01-19" },
      vax_annual_cat: { val: 349, note: "excl. VAT", src: "internal", date: "2026-01-19" },
      vax_initial_dog: { val: 549, note: "excl. VAT", src: "internal", date: "2026-01-19" },
      vax_initial_cat: { val: 549, note: "excl. VAT", src: "internal", date: "2026-01-19" },
      microchip: { val: 200, note: "excl. VAT", src: "internal", date: "2026-01-19" },
      neuter_cat_male: { val: 799, note: "excl. VAT, incl. blood", src: "internal", date: "2026-01-19" },
      spay_cat_female: { val: 999, note: "excl. VAT, incl. blood", src: "internal", date: "2026-01-19" },
      neuter_dog_male_s: { val: 1499, note: "excl. VAT, incl. blood", src: "internal", date: "2026-01-19" },
      spay_dog_female_s: { val: 1799, note: "excl. VAT, incl. blood", src: "internal", date: "2026-01-19" },
      neuter_dog_male_m: { val: 1699, note: "excl. VAT, incl. blood", src: "internal", date: "2026-01-19" },
      spay_dog_female_m: { val: 1999, note: "excl. VAT, incl. blood", src: "internal", date: "2026-01-19" },
      dental_scale_cat: { val: null, note: "not available", src: "internal", date: "2026-01-19" },
      dental_scale_dog_s: { val: null, note: "not available", src: "internal", date: "2026-01-19" },
      dental_scale_dog_m: { val: null, note: "not available", src: "internal", date: "2026-01-19" },
    }
  },
  {
    id: "blue_oasis",
    name: "Blue Oasis Vet",
    isOurs: true,
    website: "https://modernvet.com",
    notes: "BOV brand",
    prices: {
      consult_standard: { val: 299, note: "excl. VAT", src: "internal", date: "2026-01-19" },
      consult_emergency: { val: 380, note: "excl. VAT", src: "internal", date: "2026-01-19" },
      vax_annual_dog: { val: 349, note: "excl. VAT", src: "internal", date: "2026-01-19" },
      vax_annual_cat: { val: 349, note: "excl. VAT", src: "internal", date: "2026-01-19" },
      vax_initial_dog: { val: 549, note: "excl. VAT", src: "internal", date: "2026-01-19" },
      vax_initial_cat: { val: 549, note: "excl. VAT", src: "internal", date: "2026-01-19" },
      microchip: { val: 200, note: "excl. VAT", src: "internal", date: "2026-01-19" },
      neuter_cat_male: { val: 799, note: "excl. VAT, incl. blood", src: "internal", date: "2026-01-19" },
      spay_cat_female: { val: 999, note: "excl. VAT, incl. blood", src: "internal", date: "2026-01-19" },
      neuter_dog_male_s: { val: 1499, note: "excl. VAT, incl. blood", src: "internal", date: "2026-01-19" },
      spay_dog_female_s: { val: 1799, note: "excl. VAT, incl. blood", src: "internal", date: "2026-01-19" },
      neuter_dog_male_m: { val: 1699, note: "excl. VAT, incl. blood", src: "internal", date: "2026-01-19" },
      spay_dog_female_m: { val: 1999, note: "excl. VAT, incl. blood", src: "internal", date: "2026-01-19" },
      dental_scale_cat: { val: 945, note: "excl. VAT", src: "internal", date: "2026-01-19" },
      dental_scale_dog_s: { val: 1014, note: "excl. VAT", src: "internal", date: "2026-01-19" },
      dental_scale_dog_m: { val: null, note: "not listed", src: "internal", date: "2026-01-19" },
    }
  },
  {
    id: "vienna_vet",
    name: "Vienna Vet",
    isOurs: true,
    website: "https://modernvet.com",
    notes: "VV cat clinic brand",
    prices: {
      consult_standard: { val: 199, note: "excl. VAT", src: "internal", date: "2026-01-19" },
      consult_emergency: { val: 338, note: "excl. VAT", src: "internal", date: "2026-01-19" },
      vax_annual_cat: { val: 299, note: "excl. VAT", src: "internal", date: "2026-01-19" },
      vax_initial_cat: { val: 499, note: "excl. VAT", src: "internal", date: "2026-01-19" },
      microchip: { val: 125, note: "excl. VAT", src: "internal", date: "2026-01-19" },
      neuter_cat_male: { val: 499, note: "excl. VAT, incl. blood", src: "internal", date: "2026-01-19" },
      spay_cat_female: { val: 699, note: "excl. VAT, incl. blood", src: "internal", date: "2026-01-19" },
      dental_scale_cat: { val: 1365, note: "excl. VAT", src: "internal", date: "2026-01-19" },
    }
  },

  // ─────────────────────────────────────────────
  // COMPETITORS – price data confirmed
  // ─────────────────────────────────────────────
  {
    id: "british_vet",
    name: "British Veterinary Clinic",
    isOurs: false,
    website: "https://britishveterinaryclinic.com",
    notes: "Multiple branches",
    prices: {
      consult_standard: { val: 380, note: "confirmed", src: "Andrew research", date: "2026-04" },
    }
  },
  {
    id: "noble_vet",
    name: "Noble Vet Clinic",
    isOurs: false,
    website: "https://noblevetclinic.com",
    notes: "Multiple branches, transparent pricing page",
    prices: {
      consult_standard: { val: 288, note: "confirmed", src: "Andrew research", date: "2026-04" },
      vax_initial_dog: { val: 360, note: "DHPPiL with exam", src: "noblevetclinic.com", date: "2026-04" },
      vax_annual_dog: { val: 510, note: "booster + rabies + muni tag + exam", src: "noblevetclinic.com", date: "2026-04" },
      neuter_dog_male_s: { val: 1200, note: "starting from", src: "noblevetclinic.com", date: "2026-04" },
    }
  },
  {
    id: "amity_vet",
    name: "Amity Vet Clinic",
    isOurs: false,
    website: "https://amityvet.com",
    notes: "Treats Card partner – 15% discount available",
    prices: {
      consult_standard: { val: 262, note: "210 standard / 262 with surgeon – confirmed", src: "Andrew research", date: "2026-04" },
    }
  },
  {
    id: "karas_vet",
    name: "Karas Veterinary Clinic",
    isOurs: false,
    website: "https://karasvet.com",
    notes: "JLT & Business Bay – prices excl. VAT",
    prices: {
      consult_standard: { val: 150, note: "excl. VAT", src: "karasvet.com/prices", date: "2026-04" },
      vax_annual_dog: { val: 299, note: "incl. exam + muni tag", src: "karasvet.com/prices", date: "2026-04" },
      vax_initial_dog: { val: 499, note: "3x DHPPiL + rabies + microchip + muni reg", src: "karasvet.com/prices", date: "2026-04" },
      microchip: { val: null, note: "included in initial vax pkg", src: "karasvet.com/prices", date: "2026-04" },
      neuter_cat_male: { val: 380, note: "excl. VAT (from)", src: "karasvet.com/prices", date: "2026-04" },
      neuter_dog_male_s: { val: 750, note: "excl. VAT (from)", src: "karasvet.com/prices", date: "2026-04" },
      dental_scale_cat: { val: 850, note: "excl. VAT (incl. blood + sed)", src: "karasvet.com/prices", date: "2026-04" },
      dental_scale_dog_s: { val: 1100, note: "excl. VAT small dog (incl. blood + sed)", src: "karasvet.com/prices", date: "2026-04" },
      dental_scale_dog_m: { val: 1500, note: "excl. VAT 11–25kg (incl. blood + sed)", src: "karasvet.com/prices", date: "2026-04" },
    }
  },
  {
    id: "star_vet",
    name: "Star Veterinary Clinic",
    isOurs: false,
    website: "https://starveterinaryclinicdubai.com",
    notes: "Sports City + Sustainable City branches",
    prices: {
      consult_standard: { val: 220, note: "confirmed", src: "starveterinaryclinicdubai.com/pricing", date: "2026-04" },
      vax_initial_dog: { val: 315, note: "initial vax with exam", src: "starveterinaryclinicdubai.com/pricing", date: "2026-04" },
      microchip: { val: 210, note: "", src: "Google snippet", date: "2026-04" },
      spay_cat_female: { val: 1485, note: "", src: "Google snippet", date: "2026-04" },
      neuter_dog_male_s: { val: 1405, note: "dog neuter (starting)", src: "Google snippet", date: "2026-04" },
      dental_scale_cat: { val: 940, note: "starting from", src: "Google snippet", date: "2026-04" },
    }
  },
  {
    id: "europets",
    name: "Europets Vet",
    isOurs: false,
    website: "https://europets.ae",
    notes: "Al Quoz, Sheikh Zayed Rd",
    prices: {
      vax_annual_dog: { val: 299, note: "annual vaccines starting from", src: "social media post", date: "2026-04" },
      vax_annual_cat: { val: 299, note: "annual vaccines starting from", src: "social media post", date: "2026-04" },
      neuter_cat_male: { val: 550, note: "starting from", src: "social media post", date: "2026-04" },
      spay_cat_female: { val: 550, note: "spaying starting from", src: "social media post", date: "2026-04" },
      dental_scale_cat: { val: 550, note: "dental scaling starting from", src: "social media post", date: "2026-04" },
    }
  },
  {
    id: "umm_suqeim_vet",
    name: "Umm Suqeim Vet Centre (USVC)",
    isOurs: false,
    website: "https://usvetcentre.com",
    notes: "24h, referral hospital level",
    prices: {
      consult_standard: { val: 259, note: "confirmed", src: "Andrew research", date: "2026-04" },
    }
  },
  {
    id: "cityvet",
    name: "CityVet Dubai",
    isOurs: false,
    website: null,
    notes: "",
    prices: {
      consult_standard: { val: 250, note: "confirmed", src: "Andrew research", date: "2026-04" },
    }
  },
  {
    id: "pawsitive",
    name: "Pawsitive Veterinary Clinic",
    isOurs: false,
    website: "https://pawsitive.ae",
    notes: "24h emergency, JVC",
    prices: {
      consult_standard: { val: 152, note: "confirmed", src: "Andrew research", date: "2026-04" },
    }
  },
  {
    id: "petzone",
    name: "Petzone Veterinary Clinic",
    isOurs: false,
    website: "https://petzonevet.com",
    notes: "Est. 2009",
    prices: {
      vax_annual_dog: { val: 169, note: "Groupon promo price", src: "Groupon", date: "2026-04" },
      vax_annual_cat: { val: 169, note: "Groupon promo price", src: "Groupon", date: "2026-04" },
      neuter_cat_male: { val: 329, note: "Groupon promo price (female from 329)", src: "Groupon", date: "2026-04" },
    }
  },
  {
    id: "super_vet",
    name: "Super Vet Pet Clinic",
    isOurs: false,
    website: "https://supervetdubai.com",
    notes: "24h, Arjan + Al Raha, on Groupon",
    prices: {
      consult_standard: { val: 109, note: "Groupon from; 100–250 confirmed range", src: "Andrew research + Groupon", date: "2026-04" },
    }
  },
  {
    id: "pet_friends",
    name: "Pet Friends Vet Clinic",
    isOurs: false,
    website: null,
    notes: "On Groupon",
    prices: {
      consult_standard: { val: 190, note: "confirmed", src: "Andrew research", date: "2026-04" },
      vax_annual_dog: { val: 215, note: "Groupon package with vaccine", src: "Groupon", date: "2026-04" },
    }
  },
  {
    id: "happy_tails",
    name: "Happy Tails Veterinary Clinic",
    isOurs: false,
    website: "https://happytails-vet.ae",
    notes: "Nad Al Sheba",
    prices: {
      consult_standard: { val: 199, note: "confirmed", src: "Andrew research", date: "2026-04" },
    }
  },
  {
    id: "companion_vet",
    name: "Companion Veterinary Clinic",
    isOurs: false,
    website: "https://companionvetdubai.com",
    notes: "Dubai/Sharjah/Ajman",
    prices: {
      consult_standard: { val: 145, note: "confirmed", src: "Andrew research", date: "2026-04" },
    }
  },
  {
    id: "pet_corner_vet",
    name: "Pet Corner Vet",
    isOurs: false,
    website: null,
    notes: "",
    prices: {
      consult_standard: { val: 209, note: "199 excl. VAT / 208.95 incl.", src: "Andrew research", date: "2026-04" },
    }
  },
  {
    id: "myvesty",
    name: "MyVetsy",
    isOurs: false,
    website: null,
    notes: "Online / mobile vet",
    prices: {
      consult_standard: { val: 200, note: "online consultation", src: "Andrew research", date: "2026-04" },
    }
  },
  {
    id: "petflix",
    name: "Petflix Vet Clinic",
    isOurs: false,
    website: null,
    notes: "On Groupon at 75 AED",
    prices: {
      consult_standard: { val: 250, note: "standard; 75 on Groupon", src: "Andrew research", date: "2026-04" },
    }
  },
  {
    id: "welfare_vet",
    name: "Welfare Veterinary Clinic",
    isOurs: false,
    website: "https://wvetclinic.com",
    notes: "Very low cost / charity",
    prices: {
      consult_standard: { val: 70, note: "confirmed very low", src: "Andrew research", date: "2026-04" },
    }
  },
  {
    id: "dr_dolittle",
    name: "Dr. Dolittle Vet Clinic",
    isOurs: false,
    website: null,
    notes: "",
    prices: {
      consult_standard: { val: 99, note: "confirmed", src: "Andrew research", date: "2026-04" },
    }
  },
  {
    id: "provet",
    name: "ProVet Veterinary Clinic",
    isOurs: false,
    website: null,
    notes: "Very low cost",
    prices: {
      consult_standard: { val: 50, note: "confirmed", src: "Andrew research", date: "2026-04" },
    }
  },
  {
    id: "moon_vet",
    name: "The Moon Veterinary Clinic",
    isOurs: false,
    website: null,
    notes: "",
    prices: {
      consult_standard: { val: 180, note: "confirmed", src: "Andrew research", date: "2026-04" },
    }
  },
  {
    id: "drwell",
    name: "Dr. Well Veterinary Clinic",
    isOurs: false,
    website: null,
    notes: "",
    prices: {
      consult_standard: { val: 245, note: "confirmed", src: "Andrew research", date: "2026-04" },
    }
  },
  {
    id: "star_vet_sc",
    name: "Star Veterinary Clinic (old entry)",
    isOurs: false,
    website: "https://starveterinaryclinicdubai.com",
    notes: "Merged into star_vet entry above",
    hidden: true,
    prices: {
      consult_standard: { val: 220, note: "probably excl. VAT", src: "Andrew research", date: "2026-04" },
    }
  },
  {
    id: "abvc",
    name: "ABVC",
    isOurs: false,
    website: null,
    notes: "Not fully confirmed",
    prices: {
      consult_standard: { val: 180, note: "not confirmed", src: "Andrew research", date: "2026-04" },
      neuter_cat_male: { val: 700, note: "2019 Reddit report – may be outdated", src: "Reddit r/dubai", date: "2019" },
      spay_cat_female: { val: 880, note: "2019 Reddit report – may be outdated", src: "Reddit r/dubai", date: "2019" },
    }
  },
  {
    id: "happy_paws",
    name: "Happy Paws Veterinary Clinic",
    isOurs: false,
    website: null,
    notes: "",
    prices: {
      consult_standard: { val: 145, note: "confirmed", src: "Andrew research", date: "2026-04" },
    }
  },
  {
    id: "pet_palace",
    name: "Pet Palace Veterinary Clinic",
    isOurs: false,
    website: null,
    notes: "",
    prices: {
      consult_standard: { val: 90, note: "confirmed", src: "Andrew research", date: "2026-04" },
    }
  },
  {
    id: "pet_first",
    name: "Pet First Veterinary Clinic",
    isOurs: false,
    website: null,
    notes: "Not confirmed",
    prices: {
      consult_standard: { val: 210, note: "not confirmed", src: "Andrew research", date: "2026-04" },
    }
  },
  {
    id: "vrinda_vet",
    name: "Vrinda / Super Vet (Barsha)",
    isOurs: false,
    website: null,
    notes: "Groupon: from 109 AED – comprehensive package",
    prices: {
      consult_standard: { val: 109, note: "Groupon promo", src: "Groupon", date: "2026-04" },
    }
  },
  {
    id: "anubis_vet",
    name: "Anubis Veterinary Clinic",
    isOurs: false,
    website: null,
    notes: "On Groupon – puppy package deal",
    prices: {
      vax_initial_dog: { val: null, note: "Groupon package – no price visible", src: "Groupon", date: "2026-04" },
    }
  },
  {
    id: "noorudheen_vet",
    name: "Vet Hospital Dubai (generic)",
    isOurs: false,
    website: null,
    notes: "",
    prices: {
      consult_standard: { val: 279, note: "confirmed", src: "Andrew research", date: "2026-04" },
    }
  },
];
