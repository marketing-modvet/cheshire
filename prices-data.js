// Dubai Vet Price Intelligence Database
// All prices in AED (inclusive of VAT unless noted)
// Source key:
//   "website"   = official clinic website
//   "social"    = clinic's official social media post
//   "groupon"   = Groupon.ae listing
//   "cobone"    = Cobone listing
//   "internal"  = Vet Alliance internal price list
//   ""          = confirmed, source not recorded — update when known

const LAST_UPDATED = "2026-04-24";

const SERVICES = [
  { id: "consult_standard",    label: "Consultation (Standard)",              category: "Consultation" },
  { id: "consult_emergency",   label: "Consultation (Emergency Walk-In)",     category: "Consultation" },
  { id: "vax_annual_dog",      label: "Annual Vaccination – Dog (incl. tag)", category: "Vaccinations" },
  { id: "vax_annual_cat",      label: "Annual Vaccination – Cat (incl. tag)", category: "Vaccinations" },
  { id: "vax_initial_dog",     label: "Initial Vaccination – Dog (2x+rabies)",category: "Vaccinations" },
  { id: "vax_initial_cat",     label: "Initial Vaccination – Cat (2x+rabies)",category: "Vaccinations" },
  { id: "microchip",           label: "Microchipping",                        category: "Preventive"   },
  { id: "neuter_cat_male",     label: "Neuter – Cat (Male)",                  category: "Surgery"      },
  { id: "spay_cat_female",     label: "Spay – Cat (Female)",                  category: "Surgery"      },
  { id: "neuter_dog_male_s",   label: "Neuter – Dog (Male, <10kg)",           category: "Surgery"      },
  { id: "spay_dog_female_s",   label: "Spay – Dog (Female, <10kg)",           category: "Surgery"      },
  { id: "neuter_dog_male_m",   label: "Neuter – Dog (Male, 11–25kg)",         category: "Surgery"      },
  { id: "spay_dog_female_m",   label: "Spay – Dog (Female, 11–25kg)",         category: "Surgery"      },
  { id: "dental_scale_cat",    label: "Dental Scaling – Cat",                 category: "Dental"       },
  { id: "dental_scale_dog_s",  label: "Dental Scaling – Dog (<10kg)",         category: "Dental"       },
  { id: "dental_scale_dog_m",  label: "Dental Scaling – Dog (10–25kg)",       category: "Dental"       },
];

const COMPETITORS = [

  // ══════════════════════════════════════════════════════
  // OUR BRANDS
  // ══════════════════════════════════════════════════════

  {
    id: "mv_hospital", name: "Modern Vet Hospital", isOurs: true,
    website: "https://modernvet.com", notes: "JLT Hospital branch",
    prices: {
      consult_standard:   { val: 299,  note: "excl. VAT",              src: "internal", date: "2026-01" },
      consult_emergency:  { val: 380,  note: "excl. VAT",              src: "internal", date: "2026-01" },
      vax_annual_dog:     { val: 349,  note: "excl. VAT",              src: "internal", date: "2026-01" },
      vax_annual_cat:     { val: 349,  note: "excl. VAT",              src: "internal", date: "2026-01" },
      vax_initial_dog:    { val: 699,  note: "excl. VAT",              src: "internal", date: "2026-01" },
      vax_initial_cat:    { val: 699,  note: "excl. VAT",              src: "internal", date: "2026-01" },
      microchip:          { val: 200,  note: "excl. VAT",              src: "internal", date: "2026-01" },
      neuter_cat_male:    { val: 999,  note: "excl. VAT, incl. blood", src: "internal", date: "2026-01" },
      spay_cat_female:    { val: 1299, note: "excl. VAT, incl. blood", src: "internal", date: "2026-01" },
      neuter_dog_male_s:  { val: 1849, note: "excl. VAT, incl. blood", src: "internal", date: "2026-01" },
      spay_dog_female_s:  { val: 2049, note: "excl. VAT, incl. blood", src: "internal", date: "2026-01" },
      neuter_dog_male_m:  { val: 2049, note: "excl. VAT, incl. blood", src: "internal", date: "2026-01" },
      spay_dog_female_m:  { val: 2299, note: "excl. VAT, incl. blood", src: "internal", date: "2026-01" },
      dental_scale_cat:   { val: 1489, note: "excl. VAT",              src: "internal", date: "2026-01" },
      dental_scale_dog_s: { val: 1654, note: "excl. VAT",              src: "internal", date: "2026-01" },
      dental_scale_dog_m: { val: 2205, note: "excl. VAT",              src: "internal", date: "2026-01" },
    }
  },

  {
    id: "mv_branches", name: "Modern Vet Branches", isOurs: true,
    website: "https://modernvet.com", notes: "Azizi Riviera / Downtown / etc.",
    prices: {
      consult_standard:   { val: 249,  note: "excl. VAT",              src: "internal", date: "2026-01" },
      consult_emergency:  { val: 380,  note: "excl. VAT",              src: "internal", date: "2026-01" },
      vax_annual_dog:     { val: 349,  note: "excl. VAT",              src: "internal", date: "2026-01" },
      vax_annual_cat:     { val: 349,  note: "excl. VAT",              src: "internal", date: "2026-01" },
      vax_initial_dog:    { val: 549,  note: "excl. VAT",              src: "internal", date: "2026-01" },
      vax_initial_cat:    { val: 549,  note: "excl. VAT",              src: "internal", date: "2026-01" },
      microchip:          { val: 200,  note: "excl. VAT",              src: "internal", date: "2026-01" },
      neuter_cat_male:    { val: 799,  note: "excl. VAT, incl. blood", src: "internal", date: "2026-01" },
      spay_cat_female:    { val: 999,  note: "excl. VAT, incl. blood", src: "internal", date: "2026-01" },
      neuter_dog_male_s:  { val: 1499, note: "excl. VAT, incl. blood", src: "internal", date: "2026-01" },
      spay_dog_female_s:  { val: 1799, note: "excl. VAT, incl. blood", src: "internal", date: "2026-01" },
      neuter_dog_male_m:  { val: 1699, note: "excl. VAT, incl. blood", src: "internal", date: "2026-01" },
      spay_dog_female_m:  { val: 1999, note: "excl. VAT, incl. blood", src: "internal", date: "2026-01" },
      dental_scale_cat:   { val: null, note: "not available",          src: "internal", date: "2026-01" },
      dental_scale_dog_s: { val: null, note: "not available",          src: "internal", date: "2026-01" },
      dental_scale_dog_m: { val: null, note: "not available",          src: "internal", date: "2026-01" },
    }
  },

  {
    id: "blue_oasis", name: "Blue Oasis Vet", isOurs: true,
    website: "https://modernvet.com", notes: "BOV brand",
    prices: {
      consult_standard:   { val: 299,  note: "excl. VAT",              src: "internal", date: "2026-01" },
      consult_emergency:  { val: 380,  note: "excl. VAT",              src: "internal", date: "2026-01" },
      vax_annual_dog:     { val: 349,  note: "excl. VAT",              src: "internal", date: "2026-01" },
      vax_annual_cat:     { val: 349,  note: "excl. VAT",              src: "internal", date: "2026-01" },
      vax_initial_dog:    { val: 549,  note: "excl. VAT",              src: "internal", date: "2026-01" },
      vax_initial_cat:    { val: 549,  note: "excl. VAT",              src: "internal", date: "2026-01" },
      microchip:          { val: 200,  note: "excl. VAT",              src: "internal", date: "2026-01" },
      neuter_cat_male:    { val: 799,  note: "excl. VAT, incl. blood", src: "internal", date: "2026-01" },
      spay_cat_female:    { val: 999,  note: "excl. VAT, incl. blood", src: "internal", date: "2026-01" },
      neuter_dog_male_s:  { val: 1499, note: "excl. VAT, incl. blood", src: "internal", date: "2026-01" },
      spay_dog_female_s:  { val: 1799, note: "excl. VAT, incl. blood", src: "internal", date: "2026-01" },
      neuter_dog_male_m:  { val: 1699, note: "excl. VAT, incl. blood", src: "internal", date: "2026-01" },
      spay_dog_female_m:  { val: 1999, note: "excl. VAT, incl. blood", src: "internal", date: "2026-01" },
      dental_scale_cat:   { val: 945,  note: "excl. VAT",              src: "internal", date: "2026-01" },
      dental_scale_dog_s: { val: 1014, note: "excl. VAT",              src: "internal", date: "2026-01" },
      dental_scale_dog_m: { val: null, note: "not listed",             src: "internal", date: "2026-01" },
    }
  },

  {
    id: "vienna_vet", name: "Vienna Vet", isOurs: true,
    website: "https://viennavet.com", notes: "Cat clinic, ISFM Gold Standard",
    prices: {
      consult_standard:   { val: 199,  note: "excl. VAT",              src: "internal", date: "2026-01" },
      consult_emergency:  { val: 338,  note: "excl. VAT",              src: "internal", date: "2026-01" },
      vax_annual_cat:     { val: 299,  note: "excl. VAT",              src: "internal", date: "2026-01" },
      vax_initial_cat:    { val: 499,  note: "excl. VAT",              src: "internal", date: "2026-01" },
      microchip:          { val: 125,  note: "excl. VAT",              src: "internal", date: "2026-01" },
      neuter_cat_male:    { val: 499,  note: "excl. VAT, incl. blood", src: "internal", date: "2026-01" },
      spay_cat_female:    { val: 699,  note: "excl. VAT, incl. blood", src: "internal", date: "2026-01" },
      dental_scale_cat:   { val: 1365, note: "excl. VAT",              src: "internal", date: "2026-01" },
    }
  },

  // ══════════════════════════════════════════════════════
  // COMPETITORS — WITH CONFIRMED PRICE DATA
  // ══════════════════════════════════════════════════════

  {
    id: "british_vet", name: "British Veterinary Clinic",
    website: "https://britishveterinaryclinic.com", notes: "Multiple branches incl. JLT, Mirdif",
    prices: {
      consult_standard: { val: 380, note: "", src: "", date: "2026-04" },
    }
  },

  {
    id: "noble_vet", name: "Noble Vet Clinic",
    website: "https://noblevetclinic.com", notes: "5 branches, 24/7",
    prices: {
      consult_standard:  { val: 288, note: "",                              src: "",        date: "2026-04" },
      vax_initial_dog:   { val: 360, note: "DHPPiL + exam",                src: "website", date: "2026-04" },
      vax_annual_dog:    { val: 510, note: "booster + rabies + muni tag + exam", src: "website", date: "2026-04" },
      neuter_dog_male_s: { val: 1200, note: "starting from",               src: "website", date: "2026-04" },
    }
  },

  {
    id: "amity_vet", name: "Amity Vet Clinic",
    website: "https://amityvet.com", notes: "Al Barsha. Treats Card: 15% discount available",
    prices: {
      consult_standard: { val: 262, note: "210 standard / 262 surgeon", src: "", date: "2026-04" },
    }
  },

  {
    id: "karas_vet", name: "Karas Veterinary Clinic",
    website: "https://karasvet.com", notes: "JLT & Business Bay. Prices excl. VAT",
    prices: {
      consult_standard:   { val: 150,  note: "excl. VAT",                       src: "website", date: "2026-04" },
      vax_annual_dog:     { val: 299,  note: "incl. exam + muni tag",            src: "website", date: "2026-04" },
      vax_initial_dog:    { val: 499,  note: "3x DHPPiL + rabies + chip + muni", src: "website", date: "2026-04" },
      neuter_cat_male:    { val: 380,  note: "excl. VAT (from)",                 src: "website", date: "2026-04" },
      neuter_dog_male_s:  { val: 750,  note: "excl. VAT (from)",                 src: "website", date: "2026-04" },
      dental_scale_cat:   { val: 850,  note: "excl. VAT, incl. blood + sed",     src: "website", date: "2026-04" },
      dental_scale_dog_s: { val: 1100, note: "excl. VAT small dog, incl. blood", src: "website", date: "2026-04" },
      dental_scale_dog_m: { val: 1500, note: "excl. VAT 11–25kg, incl. blood",   src: "website", date: "2026-04" },
    }
  },

  {
    id: "star_vet", name: "Star Veterinary Clinic",
    website: "https://starveterinaryclinicdubai.com", notes: "Sports City + Sustainable City",
    prices: {
      consult_standard:   { val: 220,  note: "",                src: "website", date: "2026-04" },
      vax_initial_dog:    { val: 315,  note: "with exam",       src: "website", date: "2026-04" },
      microchip:          { val: 210,  note: "",                src: "website", date: "2026-04" },
      spay_cat_female:    { val: 1485, note: "",                src: "website", date: "2026-04" },
      neuter_dog_male_s:  { val: 1405, note: "starting from",   src: "website", date: "2026-04" },
      dental_scale_cat:   { val: 940,  note: "starting from",   src: "website", date: "2026-04" },
    }
  },

  {
    id: "europets", name: "Europets Vet",
    website: "https://europets.ae", notes: "Al Quoz, Sheikh Zayed Rd",
    prices: {
      vax_annual_dog:   { val: 299, note: "starting from", src: "social", date: "2026-04" },
      vax_annual_cat:   { val: 299, note: "starting from", src: "social", date: "2026-04" },
      neuter_cat_male:  { val: 550, note: "starting from", src: "social", date: "2026-04" },
      spay_cat_female:  { val: 550, note: "starting from", src: "social", date: "2026-04" },
      dental_scale_cat: { val: 550, note: "starting from", src: "social", date: "2026-04" },
    }
  },

  {
    id: "umm_suqeim_vet", name: "Umm Suqeim Vet Centre (USVC)",
    website: "https://usvetcentre.com", notes: "24/7, first 24h hospital in Middle East, Al Wasl Rd",
    prices: {
      consult_standard: { val: 259, note: "", src: "", date: "2026-04" },
    }
  },

  {
    id: "cityvet", name: "CityVet Dubai",
    website: null, notes: "",
    prices: {
      consult_standard: { val: 250, note: "", src: "", date: "2026-04" },
    }
  },

  {
    id: "pawsitive", name: "Pawsitive Veterinary Clinic",
    website: "https://pawsitive.ae", notes: "24/7 emergency, JVC",
    prices: {
      consult_standard: { val: 152, note: "", src: "", date: "2026-04" },
    }
  },

  {
    id: "petzone", name: "Petzone Veterinary Clinic",
    website: "https://petzonevet.com", notes: "Est. 2009",
    prices: {
      vax_annual_dog:  { val: 169, note: "promo price", src: "groupon", date: "2026-04" },
      vax_annual_cat:  { val: 169, note: "promo price", src: "groupon", date: "2026-04" },
      neuter_cat_male: { val: 329, note: "promo from",  src: "groupon", date: "2026-04" },
    }
  },

  {
    id: "super_vet", name: "Super Vet Pet Clinic",
    website: "https://supervetdubai.com", notes: "24/7, Arjan + Al Raha",
    prices: {
      consult_standard: { val: 109, note: "promo from; standard range 100–250", src: "groupon", date: "2026-04" },
    }
  },

  {
    id: "pet_friends", name: "Pet Friends Vet Clinic",
    website: null, notes: "",
    prices: {
      consult_standard: { val: 190, note: "",                        src: "",        date: "2026-04" },
      vax_annual_dog:   { val: 215, note: "package incl. vaccine",   src: "groupon", date: "2026-04" },
    }
  },

  {
    id: "happy_tails", name: "Happy Tails Veterinary Clinic",
    website: "https://happytails-vet.ae", notes: "Nad Al Sheba",
    prices: {
      consult_standard: { val: 199, note: "", src: "", date: "2026-04" },
    }
  },

  {
    id: "companion_vet", name: "Companion Veterinary Clinic",
    website: "https://companionvetdubai.com", notes: "Serves Dubai, Sharjah, Ajman",
    prices: {
      consult_standard: { val: 145, note: "", src: "", date: "2026-04" },
    }
  },

  {
    id: "pet_corner_vet", name: "Pet Corner Vet",
    website: null, notes: "",
    prices: {
      consult_standard: { val: 209, note: "199 excl. VAT / 208.95 incl.", src: "", date: "2026-04" },
    }
  },

  {
    id: "myvesty", name: "MyVetsy",
    website: null, notes: "Online / mobile vet",
    prices: {
      consult_standard: { val: 200, note: "online consultation", src: "", date: "2026-04" },
    }
  },

  {
    id: "petflix", name: "Petflix Vet Clinic",
    website: null, notes: "",
    prices: {
      consult_standard: { val: 250, note: "standard; 75 on Groupon", src: "groupon", date: "2026-04" },
    }
  },

  {
    id: "welfare_vet", name: "Welfare Veterinary Clinic",
    website: "https://wvetclinic.com", notes: "Very low cost / charity model",
    prices: {
      consult_standard: { val: 70, note: "", src: "", date: "2026-04" },
    }
  },

  {
    id: "dr_dolittle", name: "Dr. Dolittle Vet Clinic",
    website: null, notes: "",
    prices: {
      consult_standard: { val: 99, note: "", src: "", date: "2026-04" },
    }
  },

  {
    id: "provet", name: "ProVet Veterinary Clinic",
    website: null, notes: "Very low cost",
    prices: {
      consult_standard: { val: 50, note: "", src: "", date: "2026-04" },
    }
  },

  {
    id: "moon_vet", name: "The Moon Veterinary Clinic",
    website: null, notes: "",
    prices: {
      consult_standard: { val: 180, note: "", src: "", date: "2026-04" },
    }
  },

  {
    id: "drwell", name: "Dr. Well Veterinary Clinic",
    website: null, notes: "",
    prices: {
      consult_standard: { val: 245, note: "", src: "", date: "2026-04" },
    }
  },

  {
    id: "abvc", name: "Al Barsha Veterinary Clinic (ABVC)",
    website: "https://abvc.ae", notes: "Al Barsha 1. 24/7 via DVES network",
    prices: {
      consult_standard: { val: 180, note: "not confirmed",  src: "",        date: "2026-04" },
      neuter_cat_male:  { val: 700, note: "2019 data – may be outdated", src: "", date: "2019" },
      spay_cat_female:  { val: 880, note: "2019 data – may be outdated", src: "", date: "2019" },
    }
  },

  {
    id: "happy_paws", name: "Happy Paws Veterinary Clinic",
    website: null, notes: "",
    prices: {
      consult_standard: { val: 145, note: "", src: "", date: "2026-04" },
    }
  },

  {
    id: "pet_palace", name: "Pet Palace Veterinary Clinic",
    website: null, notes: "",
    prices: {
      consult_standard: { val: 90, note: "", src: "", date: "2026-04" },
    }
  },

  {
    id: "pet_first", name: "Pet First Veterinary Clinic",
    website: null, notes: "Not confirmed",
    prices: {
      consult_standard: { val: 210, note: "not confirmed", src: "", date: "2026-04" },
    }
  },

  {
    id: "anubis_vet", name: "Anubis Veterinary Clinic",
    website: null, notes: "",
    prices: {
      vax_initial_dog: { val: null, note: "Groupon package – price not visible", src: "groupon", date: "2026-04" },
    }
  },

  {
    id: "vet_hospital", name: "The Veterinary Hospital",
    website: "https://vet-hosp.com", notes: "Established Dubai vet, 24/7 emergency",
    prices: {
      consult_standard: { val: 279, note: "", src: "", date: "2026-04" },
    }
  },

  // ══════════════════════════════════════════════════════
  // COMPETITORS — CONFIRMED EXISTING, NO PRICE DATA YET
  // ══════════════════════════════════════════════════════

  {
    id: "canadian_vet", name: "Canadian Veterinary Clinic",
    website: "https://canadianvc.com/dubai", notes: "Est. 2013, Al Wasl/Jumeirah. Also Abu Dhabi & Sharjah branches",
    prices: {}
  },

  {
    id: "alpha_vet", name: "Alpha Vet Clinic",
    website: "https://alphavetdubai.com", notes: "Al Manara, Al Wasl Rd",
    prices: {}
  },

  {
    id: "two_feet_four_paws", name: "Two Feet Four Paws (2F4P)",
    website: "https://2feet4paws.com", notes: "Palm Jumeirah + Dubailand. Exotics specialist. RCVS standards",
    prices: {}
  },

  {
    id: "dkc_vet", name: "DKC Veterinary Clinic",
    website: "https://dkc.ae", notes: "Motor City, 24/7. Linked to Dubai Kennels & Cattery",
    prices: {}
  },

  {
    id: "vetcare_dubai", name: "VetCare Veterinary Medical Centre",
    website: "https://vetcaredubai.com", notes: "Dubailand, near Arabian Ranches & Miracle Garden. Est. 2009",
    prices: {}
  },

  {
    id: "zabeel_vet", name: "Zabeel Veterinary Hospital",
    website: "https://zabeelvet.com", notes: "Zaabeel 2. MRI/CT equipped. Treats Card 10% discount",
    prices: {}
  },

  {
    id: "al_falah_vet", name: "Al Falah Veterinary Clinic",
    website: "https://alfalahveterinary.com", notes: "Al Wasl Centre, Jumeirah. Also livestock",
    prices: {}
  },

  {
    id: "creekside_vet", name: "Creekside Vet Clinic",
    website: "https://creeksidevet.ae", notes: "24/7, Est. 2025",
    prices: {}
  },

  {
    id: "pet_station", name: "Pet Station Veterinary Clinic",
    website: "https://petstationgroup.com", notes: "Near Mall of Emirates. Also boarding/grooming",
    prices: {}
  },

  {
    id: "pet_lounge_vet", name: "Pet Lounge Veterinary Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "al_safa_vet", name: "Al Safa Veterinary Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "al_manara_vet", name: "Al Manara Veterinary Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "yanni_animal", name: "Yanni Animal Health Center",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "al_rawdah_vet", name: "Al Rawdah Veterinary Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "al_warqaa_vet", name: "Al Warqaa Veterinary Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "spring_vet", name: "Spring Veterinary Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "the_vet", name: "The Vet Veterinary Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "dr_irene", name: "Dr. Irene's Vet Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "hope_vet", name: "Hope Veterinary Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "perfect_pet_vet", name: "Perfect Pet Veterinary Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "animal_specialist", name: "Animal Specialist Veterinary Clinic",
    website: null, notes: "Al Badaa / Jumeirah 1, opp Sandcastle Nursery",
    prices: {}
  },

  {
    id: "al_jumeirah_vet", name: "Al Jumeirah Veterinary Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "reem_vet", name: "Reem Veterinary Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "skyline_vet", name: "Skyline Veterinary Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "pet_nation", name: "Pet Nation Veterinary Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "al_aweer_vet", name: "Al Aweer Veterinary Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "advanced_pet_care", name: "Advanced Pet Care Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "one_vet", name: "One Vet Veterinary Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "al_sufouh_vet", name: "Al Sufouh Veterinary Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "petmed_vet", name: "PetMed Veterinary Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "al_nahda_vet", name: "Al Nahda Veterinary Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "arabian_ranches_vet", name: "Arabian Ranches Veterinary Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "petlife_vet", name: "PetLife Veterinary Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "urban_tails_vet", name: "Urban Tails Veterinary Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "al_qusais_vet", name: "Al Qusais Veterinary Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "prestige_vet", name: "Prestige Veterinary Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "pet_street_vet", name: "Pet Street Veterinary Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "abu_hail_vet", name: "Abu Hail Veterinary Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "pets_health_vet", name: "Pets Health Veterinary Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "energetic_vet", name: "Energetic Veterinary Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "leopards_vet", name: "Leopards Veterinary Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "pet_connection_vet", name: "Pet Connection Veterinary Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "al_mizhar_vet", name: "Al Mizhar Veterinary Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "the_pet_vet", name: "The Pet Vet Veterinary Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "my_vet", name: "My Vet Veterinary Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "vetdirect", name: "VetDirect Pet Clinic",
    website: null, notes: "",
    prices: {}
  },

  {
    id: "al_mizmar_vet", name: "Al Mizmar Veterinary Clinic",
    website: null, notes: "",
    prices: {}
  },

  // ══════════════════════════════════════════════════════
  // PLACEHOLDER SLOTS — awaiting Andrew's 150-clinic list
  // Add entries here as the Google Maps list comes in
  // ══════════════════════════════════════════════════════

];
