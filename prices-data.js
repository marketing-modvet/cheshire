// Dubai Vet Price Intelligence Database
// Sourced from: Google Maps research (vet-report.html), clinic websites, Groupon, social media
// Source key: "website" | "social" | "groupon" | "cobone" | "internal" | "" (confirmed, source unknown)

const LAST_UPDATED = "2026-04-29";

const SERVICES = [
  { id: "consult_standard",    label: "Consultation (Standard)",               category: "Consultation" },
  { id: "consult_emergency",   label: "Consultation (Emergency Walk-In)",      category: "Consultation" },
  { id: "vax_annual_dog",      label: "Annual Vaccination – Dog (incl. tag)",  category: "Vaccinations" },
  { id: "vax_annual_cat",      label: "Annual Vaccination – Cat (incl. tag)",  category: "Vaccinations" },
  { id: "vax_initial_dog",     label: "Initial Vaccination – Dog (2x+rabies)", category: "Vaccinations" },
  { id: "vax_initial_cat",     label: "Initial Vaccination – Cat (2x+rabies)", category: "Vaccinations" },
  { id: "microchip",           label: "Microchipping",                         category: "Preventive"   },
  { id: "neuter_cat_male",     label: "Neuter – Cat (Male)",                   category: "Surgery"      },
  { id: "spay_cat_female",     label: "Spay – Cat (Female)",                   category: "Surgery"      },
  { id: "neuter_dog_male_s",   label: "Neuter – Dog (Male, <10kg)",            category: "Surgery"      },
  { id: "spay_dog_female_s",   label: "Spay – Dog (Female, <10kg)",            category: "Surgery"      },
  { id: "neuter_dog_male_m",   label: "Neuter – Dog (Male, 11–25kg)",          category: "Surgery"      },
  { id: "spay_dog_female_m",   label: "Spay – Dog (Female, 11–25kg)",          category: "Surgery"      },
  { id: "dental_scale_cat",    label: "Dental Scaling – Cat",                  category: "Dental"       },
  { id: "dental_scale_dog_s",  label: "Dental Scaling – Dog (<10kg)",          category: "Dental"       },
  { id: "dental_scale_dog_m",  label: "Dental Scaling – Dog (10–25kg)",        category: "Dental"       },
];

const COMPETITORS = [

  // ══════════════════════════════════════════════════════
  // OUR BRANDS
  // ══════════════════════════════════════════════════════

  {
    id: "mv_hospital", name: "Modern Vet Hospital", isOurs: true,
    website: "https://modernvet.com", area: "JLT", rating: null, reviews: null,
    notes: "JLT Hospital branch",
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
    website: "https://modernvet.com", area: "Multiple", rating: null, reviews: null,
    notes: "Azizi Riviera / Downtown / etc.",
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
    }
  },
  {
    id: "blue_oasis", name: "Blue Oasis Vet", isOurs: true,
    website: "https://modernvet.com", area: "Multiple", rating: null, reviews: null,
    notes: "BOV brand",
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
      dental_scale_cat:   { val: 945,  note: "excl. VAT",              src: "internal", date: "2026-01" },
      dental_scale_dog_s: { val: 1014, note: "excl. VAT",              src: "internal", date: "2026-01" },
    }
  },
  {
    id: "vienna_vet", name: "Vienna Vet", isOurs: true,
    website: "https://viennavet.com", area: "Multiple", rating: null, reviews: null,
    notes: "Cat clinic, ISFM Gold Standard",
    prices: {
      consult_standard:  { val: 199,  note: "excl. VAT",              src: "internal", date: "2026-01" },
      consult_emergency: { val: 338,  note: "excl. VAT",              src: "internal", date: "2026-01" },
      vax_annual_cat:    { val: 299,  note: "excl. VAT",              src: "internal", date: "2026-01" },
      vax_initial_cat:   { val: 499,  note: "excl. VAT",              src: "internal", date: "2026-01" },
      microchip:         { val: 125,  note: "excl. VAT",              src: "internal", date: "2026-01" },
      neuter_cat_male:   { val: 499,  note: "excl. VAT, incl. blood", src: "internal", date: "2026-01" },
      spay_cat_female:   { val: 699,  note: "excl. VAT, incl. blood", src: "internal", date: "2026-01" },
      dental_scale_cat:  { val: 1365, note: "excl. VAT",              src: "internal", date: "2026-01" },
    }
  },

  // ══════════════════════════════════════════════════════
  // COMPETITORS — 147 clinics from Google Maps research
  // ══════════════════════════════════════════════════════

  {
    id: "pet_paradise_vet_clinic", name: "Pet Paradise Vet Clinic", isOurs: false,
    website: null, area: "Al Alia",
    rating: "4.9", reviews: 131,
    notes: "Al Alia | Unnamed Road",
    address: "Unnamed Road - Al Alia - Ajman - United Arab Emirates",
    prices: {}
  },

  {
    id: "pets_haven_veterinary_clinic", name: "Pets Haven Veterinary Clinic", isOurs: false,
    website: null, area: "Al Bada'",
    rating: "4.8", reviews: 344,
    notes: "Al Bada' | Villa 183",
    address: "Villa 183 - 181 Al Wasl Rd - Al Bada\' - Jumeirah 1 - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "kings_vet_clinic_al_wasl_jumeirah", name: "Kings Vet Clinic Al Wasl Jumeirah", isOurs: false,
    website: null, area: "Al Bada'",
    rating: "4.6", reviews: 180,
    notes: "Al Bada' | Villa 1",
    address: "Villa 1 - 79th Street Al Wasl Rd - Al Bada\' - Jumeirah 1 - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "al_barsha_veterinary_clinic_llc", name: "Al Barsha Veterinary Clinic LLC", isOurs: false,
    website: "https://abvc.ae", area: "Al Barsha First",
    rating: "4.5", reviews: 659,
    notes: "Al Barsha First | SS Lootha. PROMO until 2026-09-30 on neuter/spay (CIO submission Apr 29).",
    address: "SS Lootha - Building, shop no.3 23b street - Al Barsha First - Al Barsha - Dubai - United Arab Emirates",
    prices: {
      consult_standard:  { val: 180, note: "not confirmed",                                              src: "",         date: "2026-04" },
      neuter_cat_male:   { val: 300, note: "excl. VAT — PROMO until 2026-09-30",                          src: "internal", date: "2026-04-29" },
      spay_cat_female:   { val: 450, note: "excl. VAT — PROMO until 2026-09-30",                          src: "internal", date: "2026-04-29" },
      neuter_dog_male_s: { val: 450, note: "small dog, excl. VAT — PROMO until 2026-09-30",               src: "internal", date: "2026-04-29" },
      spay_dog_female_s: { val: 650, note: "small dog, excl. VAT — PROMO until 2026-09-30",               src: "internal", date: "2026-04-29" },
      neuter_dog_male_m: { val: 650, note: "medium dog, excl. VAT — PROMO until 2026-09-30 (large 850)",  src: "internal", date: "2026-04-29" },
      spay_dog_female_m: { val: 850, note: "medium dog, excl. VAT — PROMO until 2026-09-30 (large 950)",  src: "internal", date: "2026-04-29" }
    }
  },

  {
    id: "pet_connection_veterinary_clinic_dubai_al_barsha_1", name: "Pet Connection Veterinary Clinic Dubai Al Barsha 1", isOurs: false,
    website: null, area: "Al Barsha First",
    rating: "4.2", reviews: 472,
    notes: "Al Barsha First | Summer Land Building, Al Barsha 1 Between Mall of the Emirat",
    address: "Summer Land Building, Al Barsha 1 Between Mall of the Emirates and Lulu Hypermarket - Al Barsha First - Al Barsha - Duba",
    prices: {}
  },

  {
    id: "vet_clinic_dubai_al_barsha_branch", name: "Vet Clinic Dubai - Al Barsha Branch", isOurs: false,
    website: null, area: "Al Barsha First",
    rating: "4.3", reviews: 449,
    notes: "Al Barsha First | Al Barsha Business Centre",
    address: "Al Barsha Business Centre - 14 Al Barsha 1 - Al Barsha First - Al Barsha - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "the_city_vet_clinic_al_barsha_mall", name: "The City Vet Clinic - Al Barsha Mall", isOurs: false,
    website: null, area: "Al Barsha Second",
    rating: "4.8", reviews: 257,
    notes: "Al Barsha Second | Mall",
    address: "Mall - Al Barsha Second - Al Barsha - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "the_city_vet_clinic_jvt_branch", name: "The City Vet Clinic - JVT Branch", isOurs: false,
    website: null, area: "Al Barsha South Fifth",
    rating: "4.6", reviews: 353,
    notes: "Al Barsha South Fifth | Imperial Residence",
    address: "Imperial Residence - Shop No. 21 - Al Barsha South Fifth - Jumeirah Village Triangle - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "pet_friends_vet_clinic", name: "Pet friends vet clinic", isOurs: false,
    website: null, area: "Al Barsha South Fourth",
    rating: "4.5", reviews: 1031,
    notes: "Al Barsha South Fourth | Sobha Daffodil",
    address: "Sobha Daffodil - Al Barsha South Fourth - Jumeirah Village Circle - Dubai - United Arab Emirates",
    prices: {
      consult_standard: { val: 190, note: "", src: "", date: "2026-04" },
      vax_annual_dog: { val: 215, note: "package incl. vaccine", src: "groupon", date: "2026-04" }
    }
  },

  {
    id: "pets_society_veterinary_clinic", name: "Pets Society Veterinary Clinic", isOurs: false,
    website: null, area: "Al Barsha South Fourth",
    rating: "4.9", reviews: 308,
    notes: "Al Barsha South Fourth | JVC Dubai, The Manhattan",
    address: "JVC Dubai, The Manhattan - Tower, Shop number 4 - Al Barsha South Fourth - Jumeirah Village Circle - Dubai - United Arab",
    prices: {}
  },

  {
    id: "territory_a_pet_clinic_jvc", name: "territory “a Pet Clinic“ J.V.C", isOurs: false,
    website: null, area: "Al Barsha South Fourth",
    rating: "4.9", reviews: 247,
    notes: "Al Barsha South Fourth | Al Barsha South Fourth",
    address: "Al Barsha South Fourth - Jumeirah Village Circle - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "pet_planet_veterinary_clinic_vet_jvc", name: "Pet Planet Veterinary Clinic - VET JVC", isOurs: false,
    website: null, area: "Al Barsha South Fourth",
    rating: "4.8", reviews: 138,
    notes: "Al Barsha South Fourth | BinGhatti Emerald Building",
    address: "BinGhatti Emerald Building - Shop No.1 - Al Barsha South Fourth - Jumeirah Village Circle - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "pet_avenue_clinic", name: "PET AVENUE CLINIC", isOurs: false,
    website: null, area: "Al Barsha South Fourth",
    rating: "4.5", reviews: 131,
    notes: "Al Barsha South Fourth | AMSA 2",
    address: "AMSA 2 - Al Barsha South Fourth - Jumeirah Village Circle - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "modern_vet", name: "Modern vet", isOurs: false,
    website: null, area: "Al Barsha South Fourth",
    rating: "N/R", reviews: 0,
    notes: "Al Barsha South Fourth | 28 Circle 90",
    address: "28 Circle 90 - Al Barsha South Fourth - Jumeirah Village Circle - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "purr_and_bark_pet_veterinary_clinic", name: "Purr and Bark Pet Veterinary Clinic", isOurs: false,
    website: "https://purrnbark.com", area: "Al Barsha South Third",
    rating: "4.9", reviews: 525,
    notes: "Al Barsha South Third | Arjan",
    address: "Arjan - Al Barsha South Third - Al Barsha South - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "vetcare_veterinary_medical_centre", name: "Vetcare Veterinary Medical Centre", isOurs: false,
    website: "https://vetcaredubai.com", area: "Al Barsha South Third",
    rating: "4.4", reviews: 154,
    notes: "Al Barsha South Third | 1 Arjan, Diamond Business Centre",
    address: "1 Arjan, Diamond Business Centre - Al Barsha South Third - Al Barsha South - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "amity_veterinary_clinic", name: "Amity Veterinary Clinic", isOurs: false,
    website: "https://amityvet.com", area: "Al Barsha Third",
    rating: "4.8", reviews: 1422,
    notes: "Al Barsha Third | Villa 1",
    address: "Villa 1 - 39th St - next to civil defense - Al Barsha Third - Al Barsha - Dubai - United Arab Emirates",
    prices: {
      consult_standard: { val: 262, note: "210 standard / 262 surgeon", src: "", date: "2026-04" }
    }
  },

  {
    id: "perfect_dose_veterinary_clinic", name: "Perfect Dose Veterinary Clinic", isOurs: false,
    website: "https://perfectdoseveterinaryclinic.com", area: "Al Barsha Third",
    rating: "4.7", reviews: 793,
    notes: "Al Barsha Third | Hessa St",
    address: "Hessa St - Al Barsha Third - Al Barsha - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "mikes_veterinary_clinic", name: "Mike’s Veterinary Clinic", isOurs: false,
    website: "https://mikesvet.com", area: "Al Barsha Third",
    rating: "4.9", reviews: 448,
    notes: "Al Barsha Third | 39th St",
    address: "39th St - Al Barsha Third - Al Barsha - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "the_cat_vet", name: "The Cat Vet", isOurs: false,
    website: null, area: "Al Barsha Third",
    rating: "4.6", reviews: 378,
    notes: "Al Barsha Third | Raa Building",
    address: "Raa Building - Hessa St - Al Barsha Third - Al Barsha - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "pet_first_veterinary_clinic", name: "Pet First Veterinary Clinic", isOurs: false,
    website: null, area: "Al Barsha Third",
    rating: "4.8", reviews: 261,
    notes: "Al Barsha Third | Villa 130",
    address: "Villa 130 - 62nd Hessa St - near Al Kabayl Discount Centre - Al Barsha Third - Al Barsha - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "vets_in_the_city_veterinary_clinic", name: "Vets in the City Veterinary Clinic", isOurs: false,
    website: null, area: "Al Barsha Third",
    rating: "4.8", reviews: 188,
    notes: "Al Barsha Third | Villa 98/1 62nd St",
    address: "Villa 98/1 62nd St - Al Barsha Third - Al Barsha - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "royal_pets_veterinary_clinic", name: "Royal Pets Veterinary Clinic", isOurs: false,
    website: "https://royalpetsclinic.com", area: "Al Garhoud",
    rating: "4.9", reviews: 763,
    notes: "Al Garhoud | Al Garhoud",
    address: "Al Garhoud - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "paw_sisters_veterinary_clinic", name: "Paw Sisters Veterinary Clinic", isOurs: false,
    website: "https://pawsisters.ae", area: "Al Garhoud",
    rating: "4.8", reviews: 271,
    notes: "Al Garhoud | 31 61B Street",
    address: "31 61B Street - Al Garhoud - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "dkc_veterinary_clinic", name: "DKC Veterinary Clinic", isOurs: false,
    website: "https://dkc.ae", area: "Al Hebiah First",
    rating: "4.5", reviews: 831,
    notes: "Al Hebiah First | Daytona House",
    address: "Daytona House - Detroit Rd - Al Hebiah First - Dubai Motor City - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "ranches_equine_clinic_llc", name: "Ranches Equine Clinic L.L.C", isOurs: false,
    website: null, area: "Al Hebiah Second",
    rating: "5", reviews: 10,
    notes: "Al Hebiah Second | Al Qudra Rd",
    address: "Al Qudra Rd - Al Hebiah Second - Arabian Ranches - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "little_hearts_veterinary_clinic", name: "Little Hearts Veterinary Clinic", isOurs: false,
    website: null, area: "Al Hebiah Third",
    rating: "4.1", reviews: 46,
    notes: "Al Hebiah Third | Golf Promenade 2B",
    address: "Golf Promenade 2B - Al Hebiah Third - DAMAC Hills - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "liberty_veterinary_clinic_aljaddaf", name: "Liberty veterinary clinic Aljaddaf", isOurs: false,
    website: null, area: "Al Jadaf",
    rating: "4.4", reviews: 726,
    notes: "Al Jadaf | Al Jadaf",
    address: "Al Jadaf - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "top_vet_clinic", name: "Top Vet Clinic", isOurs: false,
    website: "https://topvet.ae", area: "Al Jadaf",
    rating: "4.9", reviews: 467,
    notes: "Al Jadaf | 68CF+MP2",
    address: "68CF+MP2 - Al Jadaf - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "vip_veterinary_clinic", name: "VIP Veterinary Clinic", isOurs: false,
    website: null, area: "Al Jadaf",
    rating: "4.9", reviews: 93,
    notes: "Al Jadaf | Vip Veterinary Clinic",
    address: "Vip Veterinary Clinic - Shop:7 Building: - Al Jadaf - Views - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "easyvet_veterinary_clinic", name: "Easyvet Veterinary Clinic", isOurs: false,
    website: null, area: "Al Khawaneej",
    rating: "4.5", reviews: 17,
    notes: "Al Khawaneej | 67",
    address: "67 - Emirates Rd - Al Khawaneej - Al Khawaneej 2 - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "crown_veterinary_clinic", name: "Crown Veterinary Clinic", isOurs: false,
    website: null, area: "Al Kheeran",
    rating: "4.8", reviews: 126,
    notes: "Al Kheeran | entrance",
    address: "entrance - Al Badia Blvd - near Deira International School - Al Kheeran - Dubai Festival City - Dubai - United Arab Emir",
    prices: {}
  },

  {
    id: "petflix_vet_clinic", name: "Petflix Vet Clinic", isOurs: false,
    website: null, area: "Al Khor",
    rating: "4.8", reviews: 480,
    notes: "Al Khor | 59GG+XFJ Al-Khor Industrial Area",
    address: "59GG+XFJ Al-Khor Industrial Area - Al Khor - - - - United Arab Emirates",
    prices: {
      consult_standard: { val: 250, note: "standard; 75 on Groupon", src: "groupon", date: "2026-04" }
    }
  },

  {
    id: "royal_equine_veterinary_clinic", name: "Royal Equine Veterinary Clinic", isOurs: false,
    website: null, area: "Al Lesaily",
    rating: "3", reviews: 2,
    notes: "Al Lesaily | XF3X+4VC",
    address: "XF3X+4VC - Al Lesaily - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "canadian_veterinary_clinic", name: "Canadian Veterinary Clinic.", isOurs: false,
    website: "https://canadianvc.com/dubai", area: "Al Manara",
    rating: "4.6", reviews: 277,
    notes: "Al Manara | Al Wasl Rd",
    address: "Al Wasl Rd - Al Manara - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "dubai_camel_hospital", name: "Dubai Camel Hospital", isOurs: false,
    website: null, area: "Al Marmoom",
    rating: "4.6", reviews: 168,
    notes: "Al Marmoom | Al Marmum",
    address: "Al Marmum - Al Ain - Dubai Rd - Al Marmoom - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "petology_vet_clinic_pet_shop", name: "Petology Vet Clinic & Pet Shop", isOurs: false,
    website: null, area: "Al Merkadh",
    rating: "4.6", reviews: 301,
    notes: "Al Merkadh | One Park Avenue, Sobha Hartland",
    address: "One Park Avenue, Sobha Hartland - Unit #1 - Al Merkadh - Nad Al Sheba 1 - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "jungle_veterinary_clinic_llc", name: "Jungle Veterinary Clinic L.L.C", isOurs: false,
    website: null, area: "Al Mizhar First",
    rating: "4.5", reviews: 147,
    notes: "Al Mizhar First | Al Khawaneej centre",
    address: "Al Khawaneej centre - B03 - Al Mizhar First - Al Mizhar - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "dogventurez_vet_clinic", name: "Dogventurez Vet Clinic", isOurs: false,
    website: null, area: "Al Qouz Ind.third",
    rating: "4.8", reviews: 93,
    notes: "Al Qouz Ind.third | 25C Street",
    address: "25C Street - Al Qouz Ind.third - Al Quoz - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "pet_station_veterinary_clinic", name: "Pet Station Veterinary Clinic", isOurs: false,
    website: "https://petstationgroup.com", area: "Al Qouz Ind.third",
    rating: "4.5", reviews: 82,
    notes: "Al Qouz Ind.third | street 19",
    address: "street 19 - Al Qouz Ind.third - Al Quoz - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "petbook_veterinary_clinic", name: "Petbook veterinary clinic", isOurs: false,
    website: null, area: "Al Qouz Third",
    rating: "4.8", reviews: 368,
    notes: "Al Qouz Third | The Curve Building",
    address: "The Curve Building - Shop no.G08 - Sheikh Zayed Rd - Al Qouz Third - Al Quoz - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "pet_xpress_vet_clinic", name: "Pet Xpress Vet Clinic", isOurs: false,
    website: null, area: "Al Qouz Third",
    rating: "4.5", reviews: 109,
    notes: "Al Qouz Third | near Oasis mall",
    address: "near Oasis mall - Shop#9 - Al Waha St - Al Qouz Third - Al Quoz - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "deira_veterinary_clinic_llc", name: "Deira Veterinary Clinic LLC", isOurs: false,
    website: null, area: "Al Qusais",
    rating: "4.2", reviews: 273,
    notes: "Al Qusais | 86 Amman St",
    address: "86 Amman St - Al Qusais - Al Qusais Ind. Fifth - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "whiskers_and_wags_veterinary_clinic", name: "Whiskers and Wags Veterinary Clinic", isOurs: false,
    website: null, area: "Al Safa 1",
    rating: "4.7", reviews: 60,
    notes: "Al Safa 1 | Villa # 5 Al Hadiqa Rd",
    address: "Villa # 5 Al Hadiqa Rd - Al Safa 1 - Al Safa - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "the_city_vet_clinic_al_wasl_branch", name: "The City Vet Clinic - Al Wasl Branch", isOurs: false,
    website: null, area: "Al Safa 2",
    rating: "4.4", reviews: 528,
    notes: "Al Safa 2 | Villa 881 Al Wasl Rd",
    address: "Villa 881 Al Wasl Rd - Al Safa 2 - Al Safa - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "al_basha_vet_medicine", name: "Al Basha Vet Medicine", isOurs: false,
    website: null, area: "Al Souq Al Kabeer",
    rating: "5", reviews: 3,
    notes: "Al Souq Al Kabeer | 775Q+W8C China Building",
    address: "775Q+W8C China Building - 34 16th St - Al Souq Al Kabeer - Al Fahidi - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "noble_veterinary_clinic_jlt", name: "Noble Veterinary Clinic JLT", isOurs: false,
    website: "https://noblevetclinic.com", area: "Al Thanyah Fifth",
    rating: "4.9", reviews: 539,
    notes: "Al Thanyah Fifth | N2 Lake Point Tower",
    address: "N2 Lake Point Tower - Showroom R3A Cluster N - Al Thanyah Fifth - Jumeirah Lakes Towers - Dubai - United Arab Emirates",
    prices: {
      consult_standard: { val: 288, note: "", src: "", date: "2026-04" },
      vax_initial_dog: { val: 360, note: "DHPPiL + exam", src: "website", date: "2026-04" },
      vax_annual_dog: { val: 510, note: "booster + rabies + muni tag + exam", src: "website", date: "2026-04" },
      neuter_dog_male_s: { val: 1200, note: "starting from", src: "website", date: "2026-04" }
    }
  },

  {
    id: "clinipets_vet_clinic_dmcc", name: "Clinipets Vet Clinic DMCC", isOurs: false,
    website: null, area: "Al Thanyah Fifth",
    rating: "4.8", reviews: 341,
    notes: "Al Thanyah Fifth | Al Thanyah Fifth",
    address: "Al Thanyah Fifth - JLT Cluster K - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "safe_care_veterinary_clinic_scvc", name: "Safe care veterinary clinic (scvc)", isOurs: false,
    website: null, area: "Al Thanyah Fifth",
    rating: "4.7", reviews: 113,
    notes: "Al Thanyah Fifth | Shop number 7",
    address: "Shop number 7 - Jumeirah Bay X2 - next to costa coffe - Al Thanyah Fifth - Jumeirah Lakes Towers - Dubai - United Arab E",
    prices: {}
  },

  {
    id: "biovet_lab_clinic", name: "BIOVET LAB CLINIC", isOurs: false,
    website: null, area: "Al Thanyah Fifth",
    rating: "4.9", reviews: 69,
    notes: "Al Thanyah Fifth | UNIT P5, Concorde Tower, JLT Cluster H",
    address: "UNIT P5, Concorde Tower, JLT Cluster H - 1st St - Al Thanyah Fifth - Jumeirah Lakes Towers - Dubai - United Arab Emirate",
    prices: {}
  },

  {
    id: "the_city_vet_clinic_al_warqa_city_mall", name: "The City Vet Clinic - Al Warqa City Mall", isOurs: false,
    website: null, area: "Al Warqa",
    rating: "4.5", reviews: 363,
    notes: "Al Warqa | Mall",
    address: "Mall - Al Warqa - Al Warqa\'a Third - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "al_falah_veterinary_clinic", name: "Al Falah Veterinary Clinic", isOurs: false,
    website: "https://alfalahveterinary.com", area: "Al Wasl",
    rating: "4.7", reviews: 412,
    notes: "Al Wasl | 28 21C St",
    address: "28 21C St - Al Wasl - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "european_veterinary_centre", name: "European Veterinary Centre", isOurs: false,
    website: null, area: "Al Wasl",
    rating: "N/R", reviews: 0,
    notes: "Al Wasl | Dubai",
    address: "Dubai - Al Wasl - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "vet_clinic_dubai_town_square_nshama", name: "Vet Clinic Dubai - Town Square Nshama", isOurs: false,
    website: null, area: "Al Yalayis 2",
    rating: "4.7", reviews: 426,
    notes: "Al Yalayis 2 | D63",
    address: "D63 - Al Yalayis 2 - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "amazon_vet_clinic", name: "Amazon vet clinic", isOurs: false,
    website: null, area: "Al Yufrah 2",
    rating: "5", reviews: 12,
    notes: "Al Yufrah 2 | XC54+VPQ",
    address: "XC54+VPQ - Al Yufrah 2 - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "vetpass", name: "VETPASS", isOurs: false,
    website: null, area: "Burj Khalifa",
    rating: "4.7", reviews: 11,
    notes: "Burj Khalifa | Level 3, Boulevard Plaza Tower 1",
    address: "Level 3, Boulevard Plaza Tower 1 - Sheikh Mohammed bin Rashid Blvd - Burj Khalifa - Downtown Dubai - Dubai - United Arab",
    prices: {}
  },

  {
    id: "prime_paws_veterinary_clinic_llc", name: "Prime Paws Veterinary Clinic LLC", isOurs: false,
    website: null, area: "Business Bay",
    rating: "4.9", reviews: 264,
    notes: "Business Bay | Fairview Residency",
    address: "Fairview Residency - Marasi Dr - Business Bay - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "petland_wellness_vet_clinic", name: "Petland wellness Vet clinic", isOurs: false,
    website: "https://petlandwellness.com", area: "Dubai Investment Park First",
    rating: "4.9", reviews: 172,
    notes: "Dubai Investment Park First | Ground floor, office 09, royal class, DIP 1",
    address: "Ground floor, office 09, royal class, DIP 1 - Dubai Investment Park First - Green Community Village - Dubai - United Ara",
    prices: {}
  },

  {
    id: "dreamers_veterinary_clinic", name: "Dreamers Veterinary Clinic", isOurs: false,
    website: null, area: "Dubai Investment Park First",
    rating: "4.8", reviews: 74,
    notes: "Dubai Investment Park First | Falcon House",
    address: "Falcon House - 1 Oakwood Rd - Dubai Investment Park First - Green Community Village - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "sabb_veterinary_clinic_and_laboratory", name: "SaBB Veterinary Clinic and Laboratory", isOurs: false,
    website: null, area: "Dubai Investment Park Second",
    rating: "4.9", reviews: 249,
    notes: "Dubai Investment Park Second | 2",
    address: "2 - Dubai Investment Park Second - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "provet_veterinary_clinic", name: "Provet Veterinary Clinic", isOurs: false,
    website: null, area: "Hor Al Anz East",
    rating: "4.3", reviews: 693,
    notes: "Hor Al Anz East | Hor Al Anz East",
    address: "Hor Al Anz East - Deira - Dubai - United Arab Emirates",
    prices: {
      consult_standard: { val: 50, note: "", src: "", date: "2026-04" }
    }
  },

  {
    id: "the_city_vet_clinic_al_marmoom_branch", name: "The City Vet Clinic - Al Marmoom Branch", isOurs: false,
    website: null, area: "Intersection",
    rating: "4.7", reviews: 12,
    notes: "Intersection | Shop#9, Al Lisaili Building Al Lusaili",
    address: "Shop#9, Al Lisaili Building Al Lusaili - Intersection - - United Arab Emirates",
    prices: {}
  },

  {
    id: "fairy_tail_veterinary_clinic", name: "Fairy Tail Veterinary Clinic", isOurs: false,
    website: null, area: "Jebel Ali Village",
    rating: "4.9", reviews: 202,
    notes: "Jebel Ali Village | 25C4+C2F rose residence 1",
    address: "25C4+C2F rose residence 1 - next to Ecos Hotel - Jebel Ali Village - Al Furjan - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "the_pet_house_veterinary_clinic", name: "The Pet House Veterinary Clinic", isOurs: false,
    website: null, area: "Jebel Ali Village",
    rating: "4.9", reviews: 168,
    notes: "Jebel Ali Village | Rose Residence 2",
    address: "Rose Residence 2 - opposite Danube Gemz - Jebel Ali Village - Al Furjan - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "noble_veterinary_clinic_jumeirah", name: "Noble Veterinary Clinic Jumeirah", isOurs: false,
    website: "https://noblevetclinic.com", area: "Jumeirah",
    rating: "4.8", reviews: 738,
    notes: "Jumeirah | Villa 63 Umm Al Sheif St",
    address: "Villa 63 Umm Al Sheif St - Jumeirah - Jumeira Third - Dubai - United Arab Emirates",
    prices: {
      consult_standard: { val: 288, note: "", src: "", date: "2026-04" }
    }
  },

  {
    id: "vets_pets_dubai_italian_veterinary_clinic", name: "VETS & PETS Dubai - Italian Veterinary Clinic", isOurs: false,
    website: null, area: "Jumeirah",
    rating: "4.9", reviews: 592,
    notes: "Jumeirah | 754A Al Wasl Rd",
    address: "754A Al Wasl Rd - Jumeirah - Jumeirah 3 - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "panacea_vets", name: "Panacea Vets", isOurs: false,
    website: "https://panaceavets.com", area: "Jumeirah",
    rating: "4.8", reviews: 441,
    notes: "Jumeirah | Villa 444 Al Wasl Rd",
    address: "Villa 444 Al Wasl Rd - Jumeirah - Jumeira Second - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "british_veterinary_hospital", name: "BRITISH veterinary hospital", isOurs: false,
    website: "https://britishveterinaryclinic.com", area: "Jumeirah",
    rating: "4.1", reviews: 238,
    notes: "Jumeirah | Villa 742",
    address: "Villa 742 - Al Wasl Rd - Jumeirah - Jumeirah 3 - Dubai - United Arab Emirates",
    prices: {
      consult_standard: { val: 380, note: "", src: "", date: "2026-04" }
    }
  },

  {
    id: "alpha_vet_clinic_dubai", name: "Alpha Vet Clinic Dubai", isOurs: false,
    website: "https://alphavetdubai.com", area: "Jumeirah",
    rating: "4.4", reviews: 159,
    notes: "Jumeirah | 2nd December St",
    address: "2nd December St - Jumeirah - Jumeirah 1 - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "falcon_centre_al_wasl_veterinary_clinic", name: "Falcon Centre (Al Wasl Veterinary Clinic)", isOurs: false,
    website: null, area: "Jumeirah",
    rating: "4.5", reviews: 52,
    notes: "Jumeirah | Dubai",
    address: "Dubai - Jumeirah - Jumeirah 1 - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "vet_plus", name: "Vet Plus | Вет Плюс", isOurs: false,
    website: null, area: "Marsa Dubai",
    rating: "4.8", reviews: 411,
    notes: "Marsa Dubai | Marina walk",
    address: "Marina walk - Marina Promenade - Marsa Dubai - Dubai Marina - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "pawbulance_veterinary_clinic", name: "Pawbulance veterinary clinic", isOurs: false,
    website: null, area: "Marsa Dubai",
    rating: "4.8", reviews: 125,
    notes: "Marsa Dubai | Amwaj 2",
    address: "Amwaj 2 - Marsa Dubai - Jumeirah Beach Residence - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "rusty_veterinary_clinic", name: "Rusty Veterinary Clinic", isOurs: false,
    website: null, area: "Marsa Dubai",
    rating: "4.9", reviews: 98,
    notes: "Marsa Dubai | Rimal 1",
    address: "Rimal 1 - P19b - Marsa Dubai - Jumeirah Beach Residence - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "vet_in_town_veterinary_clinic", name: "Vet in Town Veterinary Clinic", isOurs: false,
    website: null, area: "Me'aisem First",
    rating: "4.9", reviews: 134,
    notes: "Me'aisem First | Me'aisem First",
    address: "Me\'aisem First - Dubai Production City - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "the_moon_veterinary_clinic_llc", name: "The Moon Veterinary Clinic LLC", isOurs: false,
    website: null, area: "Mirdif",
    rating: "5", reviews: 445,
    notes: "Mirdif | tulip project",
    address: "tulip project - shop#20 78th St - Mirdif - Dubai - United Arab Emirates",
    prices: {
      consult_standard: { val: 180, note: "", src: "", date: "2026-04" }
    }
  },

  {
    id: "the_city_vet_clinic_mirdif_branch", name: "The City Vet Clinic - Mirdif Branch", isOurs: false,
    website: null, area: "Mirdif",
    rating: "4.3", reviews: 374,
    notes: "Mirdif | Al Barajeel Oasis Complex",
    address: "Al Barajeel Oasis Complex - 47th St - Mirdif - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "synergy_veterinary_clinic", name: "Synergy Veterinary Clinic", isOurs: false,
    website: null, area: "Mirdif",
    rating: "4.4", reviews: 163,
    notes: "Mirdif | 37th St",
    address: "37th St - Mirdif - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "the_vet_hub_clinic", name: "The Vet Hub Clinic", isOurs: false,
    website: null, area: "Mirdif",
    rating: "4.2", reviews: 91,
    notes: "Mirdif | Villa 1 47th St",
    address: "Villa 1 47th St - Mirdif - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "the_pearl_veterinary_clinic", name: "The Pearl Veterinary Clinic", isOurs: false,
    website: null, area: "Mirdif",
    rating: "3.3", reviews: 43,
    notes: "Mirdif | Park Centre",
    address: "Park Centre - 15th St - Mirdif - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "pet_pulse_emergency_veterinary_clinic_mirdif_dubai", name: "Pet Pulse Emergency Veterinary Clinic - Mirdif Dubai", isOurs: false,
    website: null, area: "Mirdif",
    rating: "4.6", reviews: 22,
    notes: "Mirdif | 78th St",
    address: "78th St - Mirdif - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "pet_wellness_vet_clinic_dubai", name: "Pet wellness vet clinic Dubai", isOurs: false,
    website: null, area: "Nad Al Sheba",
    rating: "4.4", reviews: 101,
    notes: "Nad Al Sheba | Nad Al Sheba",
    address: "Nad Al Sheba - Nad Al Sheba 1 - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "happy_tails_veterinary_clinic", name: "Happy tails Veterinary Clinic", isOurs: false,
    website: "https://happytails-vet.ae", area: "Nad Al Sheba",
    rating: "4.7", reviews: 79,
    notes: "Nad Al Sheba | Nad Al Sheba",
    address: "Nad Al Sheba - Nadd Al Shiba First - Dubai - United Arab Emirates",
    prices: {
      consult_standard: { val: 199, note: "", src: "", date: "2026-04" }
    }
  },

  {
    id: "nad_al_shiba_veterinary_clinic", name: "Nad Al Shiba Veterinary Clinic", isOurs: false,
    website: null, area: "Nad Al Sheba 1",
    rating: "4", reviews: 162,
    notes: "Nad Al Sheba 1 | Retail No.3 residence 1",
    address: "Retail No.3 residence 1 - Nad Al Sheba 1 - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "doctor_jess_falcon_clinic", name: "Doctor Jess Falcon Clinic", isOurs: false,
    website: null, area: "Nad Al Sheba 1",
    rating: "5", reviews: 9,
    notes: "Nad Al Sheba 1 | Nad Al Sheba 1",
    address: "Nad Al Sheba 1 - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "the_pet_vet", name: "The Pet Vet", isOurs: false,
    website: null, area: "Nadd Al Hamar",
    rating: "4.8", reviews: 454,
    notes: "Nadd Al Hamar | Nadd Al Hamar",
    address: "Nadd Al Hamar - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "cure_veterinary_clinic", name: "Cure Veterinary Clinic", isOurs: false,
    website: null, area: "Nadd Al Hamar",
    rating: "4.6", reviews: 92,
    notes: "Nadd Al Hamar | Nadd Al Hamar",
    address: "Nadd Al Hamar - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "the_city_vet_clinic_dubai_silicon_oasis_dso", name: "The City Vet Clinic - Dubai Silicon Oasis (DSO)", isOurs: false,
    website: null, area: "Nadd Hessa",
    rating: "4.7", reviews: 521,
    notes: "Nadd Hessa | Lynx Tower",
    address: "Lynx Tower - Shop G-02 - Nadd Hessa - Dubai Silicon Oasis - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "pawsitive_veterinary_clinic_dubai_silicon_oasis", name: "Pawsitive Veterinary Clinic - Dubai Silicon Oasis", isOurs: false,
    website: null, area: "Nadd Hessa",
    rating: "4.3", reviews: 497,
    notes: "Nadd Hessa | IT PLAZA",
    address: "IT PLAZA - G10 - Nadd Hessa - Dubai Silicon Oasis - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "pet_point_veterinary_clinic", name: "Pet Point Veterinary Clinic", isOurs: false,
    website: null, area: "Nadd Hessa",
    rating: "4.7", reviews: 420,
    notes: "Nadd Hessa | Al Zarooni Building",
    address: "Al Zarooni Building - Nadd Hessa - Dubai Silicon Oasis - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "pet_joy_veterinary_clinic", name: "Pet Joy Veterinary Clinic", isOurs: false,
    website: null, area: "Nadd Hessa",
    rating: "4.7", reviews: 345,
    notes: "Nadd Hessa | Apricot Towers",
    address: "Apricot Towers - Nadd Hessa - Dubai Silicon Oasis - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "majestic_veterinary_clinic", name: "Majestic Veterinary Clinic", isOurs: false,
    website: null, area: "Oud Metha",
    rating: "4.4", reviews: 112,
    notes: "Oud Metha | 18th St",
    address: "18th St - Oud Metha - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "my_buddy_pet_care", name: "My Buddy Pet Care", isOurs: false,
    website: null, area: "Ras Al Khor Industrial Area 1",
    rating: "4.6", reviews: 375,
    notes: "Ras Al Khor Industrial Area 1 | Ras Al Khor Rd",
    address: "Ras Al Khor Rd - Ras Al Khor Industrial Area 1 - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "the_veterinary_hospital", name: "THE VETERINARY HOSPITAL", isOurs: false,
    website: "https://vet-hosp.com", area: "Umm Al Sheif",
    rating: "4.3", reviews: 407,
    notes: "Umm Al Sheif | Villa 4",
    address: "Villa 4 - Al Wasl Rd - Umm Al Sheif - Dubai - United Arab Emirates",
    prices: {
      consult_standard: { val: 279, note: "", src: "", date: "2026-04" }
    }
  },

  {
    id: "pure_life_veterinary_clinic_dubai", name: "Pure Life Veterinary Clinic Dubai", isOurs: false,
    website: null, area: "Umm Suqeim First",
    rating: "4.9", reviews: 198,
    notes: "Umm Suqeim First | Umm Suqeim First",
    address: "Umm Suqeim First - Jumeirah 3 - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "intervet_veterinary_clinic_llc", name: "Intervet Veterinary Clinic L.L.C", isOurs: false,
    website: "https://intervetuae.ae", area: "Umm Suqeim Second",
    rating: "4.6", reviews: 586,
    notes: "Umm Suqeim Second | 1234 Al Wasl Rd",
    address: "1234 Al Wasl Rd - Umm Suqeim Second - Umm Suqeim 2 - Dubai - United Arab Emirates",
    prices: {
      spay_cat_female: { val: 960, note: "promo spay package cat/dog", src: "cobone", date: "2026-04" },
      spay_dog_female_s: { val: 960, note: "promo spay package cat/dog", src: "cobone", date: "2026-04" },}
  },

  {
    id: "umm_suqeim_veterinary_centre", name: "Umm Suqeim Veterinary Centre", isOurs: false,
    website: "https://usvetcentre.com", area: "Umm Suqeim Second",
    rating: "4", reviews: 525,
    notes: "Umm Suqeim Second | Villa 1138",
    address: "Villa 1138 - 1140 Al Wasl Rd - Umm Suqeim Second - Umm Suqeim 2 - Dubai - United Arab Emirates",
    prices: {
      consult_standard: { val: 259, note: "24/7 hospital rate", src: "", date: "2026-04" }
    }
  },

  {
    id: "advanced_pet_care_clinic", name: "Advanced Pet Care Clinic", isOurs: false,
    website: null, area: "Umm Suqeim Second",
    rating: "4.5", reviews: 350,
    notes: "Umm Suqeim Second | 113 40 C St",
    address: "113 40 C St - Umm Suqeim Second - Umm Suqeim 2 - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "dr_well_veterinary_clinic", name: "Dr. Well Veterinary Clinic", isOurs: false,
    website: null, area: "Umm Suqeim Second",
    rating: "4.8", reviews: 178,
    notes: "Umm Suqeim Second | 1084 Al Wasl Rd",
    address: "1084 Al Wasl Rd - Umm Suqeim Second - Umm Suqeim 2 - Dubai - United Arab Emirates",
    prices: {
      consult_standard: { val: 245, note: "", src: "", date: "2026-04" }
    }
  },

  {
    id: "petopia_veterinary_clinic", name: "Petopia Veterinary Clinic", isOurs: false,
    website: null, area: "Wadi Al Safa 3",
    rating: "4.7", reviews: 205,
    notes: "Wadi Al Safa 3 | One residences",
    address: "One residences - Wadi Al Safa 3 - Majan - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "2feet4paws_exotics_veterinary_clinic", name: "2Feet4Paws (& Exotics) Veterinary Clinic", isOurs: false,
    website: null, area: "Wadi Al Safa 5",
    rating: "4.3", reviews: 246,
    notes: "Wadi Al Safa 5 | Shop 1, Durar Building Wadi Al Safa 5, Dubai",
    address: "Shop 1, Durar Building Wadi Al Safa 5, Dubai - Wadi Al Safa 5 - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "meshmesh_veterinary_clinic", name: "Meshmesh Veterinary Clinic", isOurs: false,
    website: null, area: "Wadi Al Safa 7",
    rating: "4.5", reviews: 32,
    notes: "Wadi Al Safa 7 | Serena Marketplace SMP-G15",
    address: "Serena Marketplace SMP-G15 - Wadi Al Safa 7 - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "pet_lovers_veterinary_clinic", name: "Pet Lovers Veterinary Clinic", isOurs: false,
    website: null, area: "Warsan First",
    rating: "4.4", reviews: 393,
    notes: "Warsan First | Warsan First",
    address: "Warsan First - Dubai International City - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "harmony_vet_clinic", name: "Harmony Vet Clinic", isOurs: false,
    website: "https://harmonyvetdubai.com", area: "Warsan First",
    rating: "4.7", reviews: 392,
    notes: "Warsan First | Q1 Dubai",
    address: "Q1 Dubai - Warsan First - France Cluster - Dubai - United Arab Emirates",
    prices: {
      vax_annual_dog: { val: 249, note: "annual pkg: exam+DHPPIL+rabies+deworming+muni tag", src: "website", date: "2026-04" },
      vax_annual_cat: { val: 249, note: "annual pkg: exam+PCH+rabies+deworming+muni tag", src: "website", date: "2026-04" },
      vax_initial_dog: { val: 399, note: "puppy pkg: 2x consult+2x DHPPIL+rabies+chip+passport+muni", src: "website", date: "2026-04" },
      vax_initial_cat: { val: 399, note: "kitten pkg: 2x consult+2x PCH+rabies+chip+passport+muni", src: "website", date: "2026-04" },
      neuter_cat_male: { val: 333, note: "", src: "website", date: "2026-04" },
      spay_cat_female: { val: 444, note: "", src: "website", date: "2026-04" },
      neuter_dog_male_s: { val: 777, note: "starting from", src: "website", date: "2026-04" },
      spay_dog_female_s: { val: 999, note: "starting from", src: "website", date: "2026-04" },}
  },

  {
    id: "dr_samir_vet_clinic", name: "Dr. Samir vet clinic", isOurs: false,
    website: null, area: "Warsan First",
    rating: "3.1", reviews: 96,
    notes: "Warsan First | V03",
    address: "V03 - Warsan First - Dubai International City - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "animalia_veterinary_clinic_llc", name: "Animalia Veterinary Clinic LLC", isOurs: false,
    website: null, area: "Warsan First",
    rating: "4.9", reviews: 53,
    notes: "Warsan First | H07 Shop 09",
    address: "H07 Shop 09 - Warsan First - China Cluster - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "phoenix_veterinary_clinic", name: "Phoenix Veterinary Clinic", isOurs: false,
    website: null, area: "Warsan Third",
    rating: "4.2", reviews: 142,
    notes: "Warsan Third | Pet and Bird Market",
    address: "Pet and Bird Market - Warsan Third - Warsan 3 - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "zabeel_veterinary_hospital", name: "Zabeel Veterinary Hospital", isOurs: false,
    website: "https://zabeelvet.com", area: "Zaa'beel Second",
    rating: "4.4", reviews: 655,
    notes: "Zaa'beel Second | Sheikh Zayed Rd",
    address: "Sheikh Zayed Rd - near MBG Centre : Molecular Biology - Zaa\'beel Second - Za\'abeel - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "dubai_equine_hospital", name: "Dubai Equine Hospital", isOurs: false,
    website: null, area: "Zaa'beel Second",
    rating: "4.6", reviews: 62,
    notes: "Zaa'beel Second | 2 Street # 22A",
    address: "2 Street # 22A - Zaa\'beel Second - Za\'abeel - Dubai - United Arab Emirates",
    prices: {}
  },

  {
    id: "lucky_veterinary_clinic_lvc", name: "Lucky Veterinary Clinic (LVC)", isOurs: false,
    website: null, area: "البرشاء الأولى",
    rating: "4.5", reviews: 199,
    notes: "البرشاء الأولى | Shop 18-19",
    address: "Shop 18-19 - Old Wasl Building - - - - United Arab Emirates",
    prices: {}
  },

  {
    id: "vets_fur_pets", name: "Vets Fur Pets", isOurs: false,
    website: null, area: "البرشاء الثالثة",
    rating: "4.2", reviews: 452,
    notes: "البرشاء الثالثة | Hessa",
    address: "Hessa - Villa1 - 4 - - - - United Arab Emirates",
    prices: {}
  },

  {
    id: "super_vet_pet_clinic_llc", name: "Super Vet Pet Clinic LLC", isOurs: false,
    website: "https://supervetdubai.com", area: "البرشاء جنوب الثالثة",
    rating: "4.2", reviews: 155,
    notes: "البرشاء جنوب الثالثة | resortz by danube building",
    address: "resortz by danube building - dubailand, La Fontana - shop number 12 - - - - United Arab Emirates",
    prices: {
      consult_standard: { val: 109, note: "promo from; standard range 100–250", src: "groupon", date: "2026-04" }
    }
  },

  {
    id: "paw_prints_veterinary_clinic", name: "Paw Prints Veterinary Clinic", isOurs: false,
    website: null, area: "البرشاء جنوب الثالثة",
    rating: "4.7", reviews: 91,
    notes: "البرشاء جنوب الثالثة | Arjan, Nas 2 Building, Shop 1",
    address: "Arjan, Nas 2 Building, Shop 1 - - - - United Arab Emirates",
    prices: {}
  },

  {
    id: "orthopedic_veterinary_clinic", name: "Orthopedic Veterinary Clinic", isOurs: false,
    website: null, area: "البرشاء جنوب الثالثة",
    rating: "5", reviews: 55,
    notes: "البرشاء جنوب الثالثة | Al Barsha South 3",
    address: "Al Barsha South 3 - - - - United Arab Emirates",
    prices: {}
  },

  {
    id: "vetdub_veterinary_clinic", name: "VetDUB Veterinary Clinic", isOurs: false,
    website: null, area: "البرشاء جنوب الثانية",
    rating: "4.6", reviews: 167,
    notes: "البرشاء جنوب الثانية | My City Centre Ground Floor B016",
    address: "My City Centre Ground Floor B016 - Ground Floor - - - - United Arab Emirates",
    prices: {}
  },

  {
    id: "kare_veterinary_clinic_llc", name: "Kare Veterinary Clinic LLC", isOurs: false,
    website: null, area: "البرشاء جنوب الخامسة",
    rating: "4.8", reviews: 320,
    notes: "البرشاء جنوب الخامسة | Jumeriah Village Triangle",
    address: "Jumeriah Village Triangle - - District 2 - - United Arab Emirates",
    prices: {}
  },

  {
    id: "jvc_express_veterinary_clinic", name: "JVC Express Veterinary Clinic", isOurs: false,
    website: null, area: "البرشاء جنوب الرابعة",
    rating: "4.7", reviews: 396,
    notes: "البرشاء جنوب الرابعة | JVC",
    address: "JVC - Maple 1 Emirates Garden 2 - - - - United Arab Emirates",
    prices: {}
  },

  {
    id: "paws_and_claws_dubai", name: "Paws and Claws Dubai", isOurs: false,
    website: null, area: "البرشاء جنوب الرابعة",
    rating: "4.6", reviews: 111,
    notes: "البرشاء جنوب الرابعة | Jumeirah Village Circle",
    address: "Jumeirah Village Circle - Dar Al Jawhara Building - - - - United Arab Emirates",
    prices: {}
  },

  {
    id: "vets_for_pets_veterinary_clinic", name: "Vets For Pets Veterinary Clinic", isOurs: false,
    website: null, area: "الثنيه الثالثة",
    rating: "4.5", reviews: 147,
    notes: "الثنيه الثالثة | G-R02A, The Onyx Tower 1",
    address: "G-R02A, The Onyx Tower 1 - near Domino\'s Pizza - - The Greens - - United Arab Emirates",
    prices: {}
  },

  {
    id: "karas_veterinary_clinic", name: "Karas Veterinary Clinic", isOurs: false,
    website: "https://karasvet.com", area: "الثنيه الخامسة",
    rating: "4.7", reviews: 621,
    notes: "الثنيه الخامسة | S06-07, Jumeirah Bay X3 Tower, Cluster X",
    address: "S06-07, Jumeirah Bay X3 Tower, Cluster X - - - - United Arab Emirates",
    prices: {
      consult_standard: { val: 150, note: "excl. VAT", src: "website", date: "2026-04" },
      vax_annual_dog: { val: 299, note: "incl. exam + muni tag", src: "website", date: "2026-04" },
      vax_initial_dog: { val: 499, note: "3x DHPPiL + rabies + chip + muni", src: "website", date: "2026-04" },
      neuter_cat_male: { val: 380, note: "excl. VAT, from", src: "website", date: "2026-04" },
      neuter_dog_male_s: { val: 750, note: "excl. VAT, from", src: "website", date: "2026-04" },
      dental_scale_cat: { val: 850, note: "excl. VAT, incl. blood + sed", src: "website", date: "2026-04" },
      dental_scale_dog_s: { val: 1100, note: "excl. VAT small, incl. blood", src: "website", date: "2026-04" },
      dental_scale_dog_m: { val: 1500, note: "excl. VAT 11–25kg, incl. blood", src: "website", date: "2026-04" }
    }
  },

  {
    id: "vida_vet_veterinary_clinic_full_pet_health_care_em", name: "VIDA VET - Veterinary Clinic, Full Pet Health Care, Emergency Care 24/7", isOurs: false,
    website: null, area: "الثنيه الرابعة",
    rating: "5", reviews: 131,
    notes: "الثنيه الرابعة | Emirates Hills, Tower C1 G",
    address: "Emirates Hills, Tower C1 G - Shop 24 - - - - United Arab Emirates",
    prices: {}
  },

  {
    id: "pets_hub_veterinary_clinic", name: "Pets Hub Veterinary Clinic", isOurs: false,
    website: null, area: "الجداف",
    rating: "4.3", reviews: 41,
    notes: "الجداف | Al Jaddaf al wasl sports club shops",
    address: "Al Jaddaf al wasl sports club shops - al nowras st - Shop S11 - - - United Arab Emirates",
    prices: {}
  },

  {
    id: "pet_bond_veterinary_clinic", name: "Pet Bond Veterinary Clinic", isOurs: false,
    website: null, area: "الحبيه الثالثة",
    rating: "4.6", reviews: 106,
    notes: "الحبيه الثالثة | Damac mall – damac hillis",
    address: "Damac mall – damac hillis - Shop number 17 - 18 - - - - United Arab Emirates",
    prices: {}
  },

  {
    id: "mercy_veterinary_clinic", name: "Mercy Veterinary Clinic", isOurs: false,
    website: null, area: "الصفا 1",
    rating: "4.8", reviews: 179,
    notes: "الصفا 1 | Al safa park complex",
    address: "Al safa park complex - 1 - - - United Arab Emirates",
    prices: {}
  },

  {
    id: "al_hayat_veterinary_clinic", name: "Al Hayat Veterinary Clinic", isOurs: false,
    website: null, area: "العوير الأولى",
    rating: "4.9", reviews: 436,
    notes: "العوير الأولى | Omar Abdullah Building. Main Road, Al Awir 2",
    address: "Omar Abdullah Building. Main Road, Al Awir 2 - - - United Arab Emirates",
    prices: {}
  },

  {
    id: "companion_veterinary_clinic", name: "Companion Veterinary Clinic", isOurs: false,
    website: "https://companionvetdubai.com", area: "القصيص منطقة صناعية",
    rating: "4.8", reviews: 675,
    notes: "القصيص منطقة صناعية | Mansoor Faqihi building",
    address: "Mansoor Faqihi building - 5 Shop No 4 - - opposite of Ambulance Station - - - United Arab Emirates",
    prices: {
      consult_standard: { val: 145, note: "", src: "", date: "2026-04" }
    }
  },

  {
    id: "petzone_veterinary_clinic", name: "Petzone Veterinary Clinic", isOurs: false,
    website: "https://petzonevet.com", area: "الوصل",
    rating: "4.2", reviews: 584,
    notes: "الوصل | Al-Thouraya Building",
    address: "Al-Thouraya Building - Showroom # 2 - - - United Arab Emirates",
    prices: {
      vax_annual_dog: { val: 169, note: "promo price", src: "groupon", date: "2026-04" },
      vax_annual_cat: { val: 169, note: "promo price", src: "groupon", date: "2026-04" },
      neuter_cat_male: { val: 329, note: "promo from", src: "groupon", date: "2026-04" }
    }
  },

  {
    id: "petsfirst_veterinary_clinic_and_grooming", name: "PetsFirst Veterinary Clinic and Grooming", isOurs: false,
    website: null, area: "الوصل",
    rating: "4.8", reviews: 168,
    notes: "الوصل | Citywalk Residential Building 13B G01",
    address: "Citywalk Residential Building 13B G01 - - - United Arab Emirates",
    prices: {}
  },

  {
    id: "the_hills_veterinary_clinic", name: "The Hills Veterinary Clinic", isOurs: false,
    website: null, area: "حدائق الشيخ محمد بن راشد",
    rating: "4.1", reviews: 84,
    notes: "حدائق الشيخ محمد بن راشد | Dubai Hills Estate Park point Building B",
    address: "Dubai Hills Estate Park point Building B - - - United Arab Emirates",
    prices: {}
  },

  {
    id: "dubai_falcon_hospital", name: "Dubai Falcon Hospital", isOurs: false,
    website: null, area: "زعبيل الثانية",
    rating: "4.5", reviews: 75,
    notes: "زعبيل الثانية | 676R+46J",
    address: "676R+46J - Al Sa\'ada St - - - - United Arab Emirates",
    prices: {}
  },

  {
    id: "noble_veterinary_clinic_dip", name: "Noble Veterinary Clinic DIP", isOurs: false,
    website: "https://noblevetclinic.com", area: "مجمع دبي للاستثمار الأول",
    rating: "4.8", reviews: 1196,
    notes: "مجمع دبي للاستثمار الأول | Retail 5",
    address: "Retail 5 - After Park n Shop - Green Community - DIP1 - - - - United Arab Emirates",
    prices: {
      consult_standard: { val: 288, note: "", src: "", date: "2026-04" }
    }
  },

  {
    id: "doctor_dolittle_veterinary_clinic", name: "Doctor Dolittle Veterinary Clinic", isOurs: false,
    website: null, area: "مجمع دبي للاستثمار الأول",
    rating: "4.7", reviews: 405,
    notes: "مجمع دبي للاستثمار الأول | Royal class Building, Shop 11",
    address: "Royal class Building, Shop 11 - - - - United Arab Emirates",
    prices: {
      consult_standard: { val: 99, note: "", src: "", date: "2026-04" }
    }
  },

  {
    id: "happy_paws_veterinary_clinic_llc", name: "Happy Paws Veterinary Clinic LLC", isOurs: false,
    website: null, area: "مدينة دبي الملاحية",
    rating: "4.6", reviews: 309,
    notes: "مدينة دبي الملاحية | G12 Block A, Al Hudaiba Awards Bldg",
    address: "G12 Block A, Al Hudaiba Awards Bldg - - - - - United Arab Emirates",
    prices: {
      consult_standard: { val: 145, note: "", src: "", date: "2026-04" }
    }
  },

  {
    id: "al_falah_veterinary_clinic_branch", name: "Al Falah Veterinary Clinic branch", isOurs: false,
    website: null, area: "مدينة دبي الملاحية",
    rating: "4.7", reviews: 73,
    notes: "مدينة دبي الملاحية | 1",
    address: "1 - building 3 - shop no 19 - - Port views - - United Arab Emirates",
    prices: {}
  },

  {
    id: "pet_land_veterinary_clinic_mirdif", name: "Pet Land Veterinary Clinic - Mirdif", isOurs: false,
    website: null, area: "مردف",
    rating: "4.8", reviews: 238,
    notes: "مردف | Mirdif tulip building, shop#29",
    address: "Mirdif tulip building, shop#29 - - - United Arab Emirates",
    prices: {}
  },

  {
    id: "al_fattal_vet_clinic_shop_119_120", name: "Al Fattal Vet Clinic Shop 119 &120", isOurs: false,
    website: null, area: "مرغم",
    rating: "4", reviews: 4,
    notes: "مرغم",
    address: "United Arab Emirates",
    prices: {}
  },

  {
    id: "cardiovet_veterinary_clinic", name: "CardioVet Veterinary Clinic", isOurs: false,
    website: null, area: "معيصم الأولى",
    rating: "4.8", reviews: 146,
    notes: "معيصم الأولى | Building Galadari 17, shop 2",
    address: "Building Galadari 17, shop 2 - - Dubai Production City - - United Arab Emirates",
    prices: {}
  },

  {
    id: "amore_veterinary_clinic", name: "Amore veterinary Clinic", isOurs: false,
    website: null, area: "معيصم الأولى",
    rating: "4.4", reviews: 88,
    notes: "معيصم الأولى | Jumeirah Golf Estate Centro Al Andalus 1st Floor Shop24 & 25",
    address: "Jumeirah Golf Estate Centro Al Andalus 1st Floor Shop24 & 25 Instagram amorevetclinic - - - - United Arab Emirates",
    prices: {}
  },

  {
    id: "creekside_vet_clinic_llc", name: "Creekside Vet Clinic LLC", isOurs: false,
    website: "https://creeksidevet.ae", area: "ند الحمر",
    rating: "4.8", reviews: 229,
    notes: "ند الحمر | Shop C3",
    address: "Shop C3 - Avenues - - - United Arab Emirates",
    prices: {}
  },

  {
    id: "the_city_vet_clinic_meydan_branch", name: "The City Vet Clinic - Meydan Branch", isOurs: false,
    website: null, area: "ند الشبا الأولى",
    rating: "4.5", reviews: 174,
    notes: "ند الشبا الأولى | Shop#3, Dar Mira Nad Al Shiba First Dubai",
    address: "Shop#3, Dar Mira Nad Al Shiba First Dubai - - - United Arab Emirates",
    prices: {}
  },

  {
    id: "the_ark_animal_clinic", name: "The Ark Animal Clinic", isOurs: false,
    website: null, area: "ند حصه",
    rating: "4.8", reviews: 540,
    notes: "ند حصه | 92",
    address: "92 - Binghatti Pearls Building - Shop no. 5 - - - - United Arab Emirates",
    prices: {}
  },

  {
    id: "pet_pulse_emergency_veterinary_clinic_dubai_silico", name: "Pet Pulse Emergency Veterinary Clinic - Dubai Silicon Oasis (DSO)", isOurs: false,
    website: null, area: "ند حصه",
    rating: "4.9", reviews: 277,
    notes: "ند حصه | Binghatti vista G shop 5",
    address: "Binghatti vista G shop 5 - - - - United Arab Emirates",
    prices: {}
  },

  {
    id: "kings_vet_clinic_albarari", name: "Kings Vet Clinic Al-Barari", isOurs: false,
    website: null, area: "وادي الصفا 3",
    rating: "4.8", reviews: 282,
    notes: "وادي الصفا 3 | Retail 4, Palm Tree Residence, Majan",
    address: "Retail 4, Palm Tree Residence, Majan - 3 - Al Barari - - United Arab Emirates",
    prices: {}
  },

  {
    id: "star_veterinary_clinic_sustainable_city", name: "Star Veterinary Clinic - Sustainable City ⭐", isOurs: false,
    website: null, area: "وادي الصفا 7",
    rating: "4.7", reviews: 312,
    notes: "وادي الصفا 7 | block C, Beside",
    address: "block C, Beside - ZOOM - 7 - The Sustainable City - - United Arab Emirates",
    prices: {}
  },

  {
    id: "pet_palace_veterinary_clinic", name: "Pet Palace Veterinary Clinic", isOurs: false,
    website: null, area: "ورسان الأولى",
    rating: "4.7", reviews: 259,
    notes: "ورسان الأولى | France Cluster Building Q09 Shop No S14",
    address: "France Cluster Building Q09 Shop No S14 - - - - United Arab Emirates",
    prices: {}
  },

  {
    id: "petpals_veterinary_clinic", name: "PETPALS VETERINARY CLINIC", isOurs: false,
    website: null, area: "ورسان الأولى",
    rating: "4.8", reviews: 104,
    notes: "ورسان الأولى | Universal apartments CBD 21 shop no 3",
    address: "Universal apartments CBD 21 shop no 3 - - warsan 2 - - United Arab Emirates",
    prices: {}
  },

  {
    id: "salsabeel_veterinary_medicines_llc", name: "Salsabeel Veterinary Medicines LLC", isOurs: false,
    website: null, area: "ورسان الأولى",
    rating: "4.4", reviews: 8,
    notes: "ورسان الأولى | Sheikh Mohammed Bin Zayed Rd",
    address: "Sheikh Mohammed Bin Zayed Rd - - - - United Arab Emirates",
    prices: {}
  },

  {
    id: "winterfell_veterinary_pet_salon_llc", name: "Winterfell Veterinary & Pet Salon L.L.C", isOurs: false,
    website: null, area: "ورسان الرابعة",
    rating: "4.7", reviews: 75,
    notes: "ورسان الرابعة | Shop #5 I.D Blue Building",
    address: "Shop #5 I.D Blue Building - - - United Arab Emirates",
    prices: {}
  },

];