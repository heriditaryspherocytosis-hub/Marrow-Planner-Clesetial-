const syllabusData = [
  {
    "subject": "Anatomy",
    "chapters": [
      {"name": "EMBRYO.", "modules": 4, "hours": 1.8},
      {"name": "HISTO.", "modules": 3, "hours": 2.3},
      {"name": "NEURO-ANAT.", "modules": 11, "hours": 6.6},
      {"name": "HNF", "modules": 17, "hours": 11.5},
      {"name": "UL", "modules": 10, "hours": 5.7},
      {"name": "THORAX", "modules": 12, "hours": 5.2},
      {"name": "ABDO.", "modules": 19, "hours": 9.8},
      {"name": "LL", "modules": 7, "hours": 4.3},
      {"name": "GEN. ANAT.", "modules": 1, "hours": 0.6}
    ]
  },
  {
    "subject": "Biochemistry",
    "chapters": [
      {"name": "GEN. BIOCHEM.", "modules": 3, "hours": 1.6},
      {"name": "ENZYMOLOGY", "modules": 7, "hours": 5.1},
      {"name": "CARBOHYDRATES", "modules": 10, "hours": 7.6},
      {"name": "LIPIDS", "modules": 7, "hours": 5.9},
      {"name": "PROTEINS & AA", "modules": 8, "hours": 6.5},
      {"name": "BIOENERGETICS", "modules": 2, "hours": 1.4},
      {"name": "MOLECULAR BIOLOGY", "modules": 11, "hours": 9.9},
      {"name": "VITAMINS", "modules": 5, "hours": 4.0}
    ]
  },
  {
    "subject": "Physiology",
    "chapters": [
      {"name": "GEN. PHYSIO.", "modules": 9, "hours": 6.5},
      {"name": "NV. MUS. PHYSIO.", "modules": 6, "hours": 5.7},
      {"name": "CNS", "modules": 11, "hours": 10.1},
      {"name": "RESPI.", "modules": 9, "hours": 7.0},
      {"name": "CVS", "modules": 9, "hours": 7.2},
      {"name": "GI.", "modules": 4, "hours": 5.6},
      {"name": "RENAL", "modules": 5, "hours": 4.4},
      {"name": "ENDO.", "modules": 5, "hours": 4.5},
      {"name": "REPRO.", "modules": 2, "hours": 1.9},
      {"name": "EXERCISE PHYSIO", "modules": 2, "hours": 1.5}
    ]
  },
  {
    "subject": "Pharmacology",
    "chapters": [
      {"name": "GEN. PHARMA.", "modules": 12, "hours": 8.6},
      {"name": "ANS", "modules": 7, "hours": 6.5},
      {"name": "CVS", "modules": 7, "hours": 6.3},
      {"name": "RENAL", "modules": 2, "hours": 2.5},
      {"name": "CNS + PNS", "modules": 10, "hours": 8.3},
      {"name": "ANTIMICROBIALS", "modules": 13, "hours": 10.9},
      {"name": "ENDO.", "modules": 7, "hours": 4.0},
      {"name": "AUTACOIDS", "modules": 5, "hours": 3.1},
      {"name": "HEMAT.", "modules": 2, "hours": 2.1},
      {"name": "RESPI.", "modules": 2, "hours": 0.8},
      {"name": "GASTRO-INTESTINAL", "modules": 3, "hours": 1.5},
      {"name": "IMMUNO-MODULATORS", "modules": 1, "hours": 0.6},
      {"name": "ANTI-NEOPLASTIC AGENTS", "modules": 4, "hours": 3.1}
    ]
  },
  {
    "subject": "Microbiology",
    "chapters": [
      {"name": "GEN. MICROBIO. & GEN. BACTERIO.", "modules": 11, "hours": 7.8},
      {"name": "ORGAN SPECIFIC BACTERIO.", "modules": 24, "hours": 18.3},
      {"name": "IMMUNO.", "modules": 8, "hours": 7.7},
      {"name": "VIROLOGY", "modules": 13, "hours": 8.9},
      {"name": "PROTOZOOLOGY", "modules": 6, "hours": 4.0},
      {"name": "HELMINTHOLOGY", "modules": 4, "hours": 2.6},
      {"name": "MYCOLOGY", "modules": 6, "hours": 3.3},
      {"name": "CLINICAL MICRO.", "modules": 12, "hours": 9.7}
    ]
  },
  {
    "subject": "Pathology",
    "chapters": [
      {"name": "GEN. PATHO.", "modules": 23, "hours": 19.8},
      {"name": "HEMAT.", "modules": 18, "hours": 15.4},
      {"name": "CVS", "modules": 5, "hours": 4.5},
      {"name": "GU", "modules": 10, "hours": 7.4},
      {"name": "GI", "modules": 7, "hours": 5.8},
      {"name": "RESPI.", "modules": 4, "hours": 3.2},
      {"name": "ENDO. & BREAST", "modules": 5, "hours": 4.3},
      {"name": "SKIN & MUSCULO-SKELETAL", "modules": 2, "hours": 1.5},
      {"name": "NERVOUS", "modules": 2, "hours": 1.8},
      {"name": "MISC.", "modules": 3, "hours": 0.8}
    ]
  },
  {
    "subject": "Community Medicine",
    "chapters": [
      {"name": "DEMOGRAPHY & FAMILY-PLANNING", "modules": 8, "hours": 4.6},
      {"name": "MATERNAL & CHILD HEALTH", "modules": 5, "hours": 4.7},
      {"name": "VACCINE & IMMUNIZATION", "modules": 4, "hours": 3.2},
      {"name": "EPIDEMIOLOGY", "modules": 6, "hours": 3.4},
      {"name": "SCREENING OF DISEASES", "modules": 3, "hours": 2.2},
      {"name": "BIOSTATICS", "modules": 9, "hours": 4.5},
      {"name": "NATIONAL HEALTH PROGRAMMES", "modules": 15, "hours": 9.2},
      {"name": "HEALTHCARE PLANNING IN INDIA", "modules": 3, "hours": 2.3},
      {"name": "INFECTIOUS DISEASES EPIDEMIOLOGY", "modules": 3, "hours": 2.3},
      {"name": "COMMUNICABLE DISEASE", "modules": 14, "hours": 7.2},
      {"name": "NON-COMMUNICABLE DISEASE", "modules": 2, "hours": 1.0},
      {"name": "NUTRITION", "modules": 4, "hours": 2.7},
      {"name": "ENVIRONMENT", "modules": 8, "hours": 5.5},
      {"name": "BMW", "modules": 1, "hours": 0.8},
      {"name": "OCCUPATIONAL HEALTH", "modules": 2, "hours": 1.2},
      {"name": "CONCEPT OF HEALTH & DISEASE", "modules": 3, "hours": 1.9},
      {"name": "DISASTER MANAGEMENT", "modules": 1, "hours": 0.6},
      {"name": "HEALTH COMM.", "modules": 1, "hours": 0.5},
      {"name": "INTERNATIONAL HEALTH ORG.", "modules": 1, "hours": 0.5},
      {"name": "SOCIAL MEDICINE", "modules": 1, "hours": 0.8},
      {"name": "MISC.", "modules": 4, "hours": 1.6}
    ]
  },
  {
    "subject": "Forensic Medicine",
    "chapters": [
      {"name": "FORENSIC TRAUMATOLOGY", "modules": 12, "hours": 8.5},
      {"name": "MEDICAL JURISPRUDENCE", "modules": 4, "hours": 3.3},
      {"name": "FORENSIC PATHO.", "modules": 10, "hours": 7.9},
      {"name": "SEXUAL JURIS.", "modules": 4, "hours": 3.5},
      {"name": "TOXICOLOGY", "modules": 11, "hours": 8.3},
      {"name": "FORENSIC PSYCHIATRY & MISC.", "modules": 3, "hours": 2.3}
    ]
  },
  {
    "subject": "Ophthalmology",
    "chapters": [
      {"name": "BASIC ANATOMY OF EYE", "modules": 6, "hours": 4.7},
      {"name": "NEURO-OPHTHALMO.", "modules": 4, "hours": 4.5},
      {"name": "SQUINT", "modules": 7, "hours": 5.0},
      {"name": "LENS", "modules": 6, "hours": 6.0},
      {"name": "GLAUCOMA", "modules": 5, "hours": 4.7},
      {"name": "OPTICS", "modules": 4, "hours": 5.0},
      {"name": "RETINA", "modules": 6, "hours": 6.0},
      {"name": "CORNEA", "modules": 3, "hours": 2.2},
      {"name": "UVEA", "modules": 3, "hours": 1.9},
      {"name": "CONJUNCTIVA", "modules": 1, "hours": 1.3},
      {"name": "ADNEXA", "modules": 3, "hours": 2.2},
      {"name": "MISC.", "modules": 5, "hours": 1.7}
    ]
  },
  {
    "subject": "Otorhinolaryngology (ENT)",
    "chapters": [
      {"name": "EAR", "modules": 35, "hours": 23.8},
      {"name": "NOSE", "modules": 14, "hours": 9.7},
      {"name": "PHARYNX", "modules": 8, "hours": 7.1},
      {"name": "LARYNX", "modules": 8, "hours": 8.3}
    ]
  },
  {
    "subject": "Anaesthesia",
    "chapters": [
      {"name": "ANAESTHESIA", "modules": 28, "hours": 24.0}
    ]
  },
  {
    "subject": "Dermatology",
    "chapters": [
      {"name": "DERMATOLOGY", "modules": 26, "hours": 14.1}
    ]
  },
  {
    "subject": "Psychiatry",
    "chapters": [
      {"name": "PSYCHIATRY", "modules": 22, "hours": 16.6}
    ]
  },
  {
    "subject": "Radiology",
    "chapters": [
      {"name": "FUNDAMENTS OF RADIOLOGY", "modules": 10, "hours": 6.0},
      {"name": "RADIOTHERAPY & NUCLEAR MEDICINE", "modules": 5, "hours": 3.3},
      {"name": "SYSTEMIC RADIOLOGY", "modules": 27, "hours": 19.7}
    ]
  },
  {
    "subject": "Medicine",
    "chapters": [
      {"name": "GASTROENTERO.", "modules": 12, "hours": 6.9},
      {"name": "HEMAT.", "modules": 21, "hours": 14.1},
      {"name": "PULMONO.", "modules": 18, "hours": 11.5},
      {"name": "CARDIO.", "modules": 14, "hours": 10.5},
      {"name": "ECG", "modules": 11, "hours": 12.2},
      {"name": "RHEUMAT. & IMMUNO.", "modules": 19, "hours": 13.3},
      {"name": "NEURO.", "modules": 29, "hours": 18.7},
      {"name": "NEPHRO.", "modules": 23, "hours": 13.5},
      {"name": "ACID-BASE REGULATION", "modules": 4, "hours": 3.2},
      {"name": "ENDOCRINO.", "modules": 31, "hours": 18.0},
      {"name": "HEPATOLOGY", "modules": 17, "hours": 8.5},
      {"name": "INFECTIOUS DISEASES", "modules": 3, "hours": 2.8}
    ]
  },
  {
    "subject": "Surgery",
    "chapters": [
      {"name": "GEN. SURGERY", "modules": 10, "hours": 6.7},
      {"name": "BREAST", "modules": 6, "hours": 5.1},
      {"name": "ENDO.", "modules": 6, "hours": 5.0},
      {"name": "GI & ABD. SURGERY", "modules": 24, "hours": 22.1},
      {"name": "UROLOGY", "modules": 10, "hours": 7.5},
      {"name": "SPECIALITY SURGERY", "modules": 5, "hours": 3.9},
      {"name": "TRAUMA", "modules": 6, "hours": 6.0},
      {"name": "HERNIA", "modules": 3, "hours": 2.5},
      {"name": "VASCULAR SURGERY", "modules": 6, "hours": 4.1},
      {"name": "FACIOMAXILLARY SURGERY", "modules": 3, "hours": 2.5},
      {"name": "MISC.", "modules": 5, "hours": 3.0}
    ]
  },
  {
    "subject": "Orthopaedics",
    "chapters": [
      {"name": "ORTHOPAEDICS", "modules": 25, "hours": 21.0}
    ]
  },
  {
    "subject": "Paediatrics",
    "chapters": [
      {"name": "NEONATOLOGY", "modules": 8, "hours": 6.0},
      {"name": "GROWTH & DEV.", "modules": 6, "hours": 3.8},
      {"name": "NUTRITION", "modules": 4, "hours": 2.5},
      {"name": "GENETIC DISORDERS", "modules": 1, "hours": 1.1},
      {"name": "CHILDHOOD INFEC.", "modules": 3, "hours": 2.2},
      {"name": "GI", "modules": 4, "hours": 3.1},
      {"name": "RESPI.", "modules": 4, "hours": 2.5},
      {"name": "CVS", "modules": 4, "hours": 3.1},
      {"name": "GU", "modules": 5, "hours": 3.3},
      {"name": "NERVOUS", "modules": 4, "hours": 3.6},
      {"name": "ENDOCRINE", "modules": 4, "hours": 2.3},
      {"name": "CHILDHOOD MALIGNANCIES", "modules": 2, "hours": 0.8},
      {"name": "PAEDIATRIC RHEUMATOLOGY", "modules": 1, "hours": 1.2},
      {"name": "HEMATOLOGY", "modules": 3, "hours": 2.8},
      {"name": "MISC.", "modules": 2, "hours": 1.3}
    ]
  },
  {
    "subject": "Obstetrics & Gynaecology",
    "chapters": [
      {"name": "GEN. GYNAECOLOGY", "modules": 33, "hours": 28.3},
      {"name": "GYNAECOLOGIC INFEC.", "modules": 3, "hours": 1.7},
      {"name": "INFERTILITY & CONTRACEPTION", "modules": 6, "hours": 6.0},
      {"name": "GYNAECOLOGIC ONCOLOGY", "modules": 8, "hours": 7.4},
      {"name": "FUNDAMENTALS OF REPRODUCTION", "modules": 7, "hours": 6.3},
      {"name": "NORMAL PREGNANCY & ANTENATAL CARE", "modules": 9, "hours": 8.4},
      {"name": "MEDICAL & SURGICAL COMPLICATIONS IN PREGNANCY", "modules": 14, "hours": 11.6},
      {"name": "OBSTETRIC COMPLICATIONS", "modules": 13, "hours": 12.0},
      {"name": "LABOUR & PUERPERIUM", "modules": 17, "hours": 16.0}
    ]
  }
];

export default syllabusData;
