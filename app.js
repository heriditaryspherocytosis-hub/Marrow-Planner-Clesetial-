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

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('app-main');
  const grandTotalEl = document.getElementById('header-total-hours');
  const speedSelect = document.getElementById('speed-select');
  
  const themeToggleBtn = document.getElementById('theme-toggle');
  const iconMoon = document.getElementById('theme-icon-moon');
  const iconSun = document.getElementById('theme-icon-sun');
  const backBtn = document.getElementById('back-btn');
  const headerTitle = document.getElementById('header-title');
  const headerTotalLabel = document.getElementById('header-total-label');

  let activeView = 'dashboard'; // 'dashboard' or index of subject
  let currentSpeed = 1;

  // --- Theme Engine Setup ---
  let currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  function updateThemeIcons() {
    if (currentTheme === 'dark') {
      iconMoon.style.display = 'block';
      iconSun.style.display = 'none';
    } else {
      iconMoon.style.display = 'none';
      iconSun.style.display = 'block';
    }
  }
  updateThemeIcons();

  themeToggleBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcons();
  });

  // --- Format Helpers ---
  function formatMinutes(totalMins) {
    const h = Math.floor(totalMins / 60);
    const m = Math.round(totalMins % 60);
    return `${h}h ${m}m`;
  }

  function decimalToHM(dec) {
    const h = Math.floor(dec);
    const m = Math.round((dec - h) * 60);
    return { h, m };
  }

  // --- Data Loading ---
  let userData = JSON.parse(localStorage.getItem('marrowPlannerDataV2'));
  if (!userData) {
    userData = syllabusData.map((subject) => {
      return {
        subject: subject.subject,
        dailyGoalH: 2, 
        dailyGoalM: 0,
        chapters: subject.chapters.map((ch) => {
          const hm = decimalToHM(ch.hours);
          return {
            name: ch.name,
            modules: ch.modules,
            h: hm.h,
            m: hm.m,
            completed: false
          };
        })
      };
    });
    saveData();
  }

  currentSpeed = parseFloat(speedSelect.value);
  speedSelect.addEventListener('change', (e) => {
    currentSpeed = parseFloat(e.target.value);
    updateTotals();
  });

  backBtn.addEventListener('click', () => {
    activeView = 'dashboard';
    backBtn.style.display = 'none';
    headerTitle.textContent = 'Marrow Planner';
    headerTotalLabel.textContent = 'Grand Total';
    render();
  });

  function calculateSubjectTotals(sub) {
    let subTotalBaseMins = 0;
    let completedBaseMins = 0;
    sub.chapters.forEach(ch => {
      const mins = (ch.h * 60) + ch.m;
      subTotalBaseMins += mins;
      if (ch.completed) completedBaseMins += mins;
    });
    return { subTotalBaseMins, completedBaseMins };
  }

  // --- Core Rendering ---
  function render() {
    container.innerHTML = '';
    
    if (activeView === 'dashboard') {
      const welcomeCard = document.createElement('div');
      welcomeCard.className = 'welcome-card view-container';
      welcomeCard.innerHTML = `
        <div class="welcome-content">
          <p><strong>Speed Multiplier:</strong> Select your playback speed in the header to instantly recalculate all required watch times across the app.</p>
          <p><strong>Subject Dashboard:</strong> The circular rings track your module completion percentage. Tap any subject to dive into its focused checklist.</p>
          <p><strong>Pace Target:</strong> Inside a subject, input your daily study goal to see exactly how many days you have left to complete it.</p>
        </div>
        <div class="creator-credits">Created by @Heriditaryspherosytosis</div>
      `;
      container.appendChild(welcomeCard);

      const grid = document.createElement('div');
      grid.className = 'dashboard-grid view-container';

      userData.forEach((sub, sIdx) => {
        const { subTotalBaseMins, completedBaseMins } = calculateSubjectTotals(sub);
        const percentage = subTotalBaseMins > 0 ? (completedBaseMins / subTotalBaseMins) * 100 : 0;
        const totalSubMins = subTotalBaseMins * currentSpeed;

        const tile = document.createElement('div');
        tile.className = 'subject-tile';
        if (percentage === 100) tile.classList.add('completed-tile');

        const ring = document.createElement('div');
        ring.className = 'progress-ring';
        // Use inline style for dynamic conic-gradient
        ring.style.background = `conic-gradient(var(--success-color) ${percentage}%, var(--ring-bg) 0)`;

        const ringText = document.createElement('div');
        ringText.className = 'progress-ring-text';
        ringText.textContent = `${Math.round(percentage)}%`;
        ring.appendChild(ringText);

        const title = document.createElement('div');
        title.className = 'subject-tile-title';
        title.textContent = sub.subject;

        const subtitle = document.createElement('div');
        subtitle.className = 'subject-tile-subtitle';
        subtitle.id = `dash-sub-total-${sIdx}`;
        subtitle.textContent = formatMinutes(totalSubMins);

        tile.appendChild(ring);
        tile.appendChild(title);
        tile.appendChild(subtitle);

        tile.addEventListener('click', () => {
          activeView = sIdx;
          backBtn.style.display = 'flex';
          headerTitle.textContent = sub.subject;
          headerTotalLabel.textContent = 'Subject Total';
          render();
        });

        grid.appendChild(tile);
      });

      container.appendChild(grid);
    } 
    else {
      // --- FOCUSED SUBJECT VIEW ---
      const sub = userData[activeView];
      const sIdx = activeView;
      const viewWrapper = document.createElement('div');
      viewWrapper.className = 'view-container';

      // Focused Header
      const focusedHeader = document.createElement('div');
      focusedHeader.className = 'focused-subject-header';
      
      const fTitle = document.createElement('div');
      fTitle.className = 'focused-subject-title';
      fTitle.textContent = sub.subject;

      const fProgress = document.createElement('div');
      fProgress.className = 'focused-subject-progress';
      
      const pContainer = document.createElement('div');
      pContainer.className = 'progress-container';
      const pBar = document.createElement('div');
      pBar.className = 'progress-bar';
      pBar.id = `focus-progress-${sIdx}`;
      pContainer.appendChild(pBar);

      fProgress.appendChild(pContainer);
      focusedHeader.appendChild(fTitle);
      focusedHeader.appendChild(fProgress);

      // Daily Goal Calculator
      const goalCalc = document.createElement('div');
      goalCalc.className = 'goal-calculator';
      
      const goalHeader = document.createElement('div');
      goalHeader.className = 'goal-calculator-header';
      goalHeader.innerHTML = `<span>Pace Target:</span> <span id="days-left-${sIdx}" class="goal-result">0 days</span>`;
      
      const goalInputs = document.createElement('div');
      goalInputs.className = 'goal-inputs';
      
      const goalHInput = document.createElement('input');
      goalHInput.type = 'number';
      goalHInput.min = '0';
      goalHInput.value = sub.dailyGoalH;
      
      const goalMInput = document.createElement('input');
      goalMInput.type = 'number';
      goalMInput.min = '0';
      goalMInput.max = '59';
      goalMInput.value = sub.dailyGoalM;

      const updateGoal = () => {
        sub.dailyGoalH = parseInt(goalHInput.value) || 0;
        sub.dailyGoalM = parseInt(goalMInput.value) || 0;
        saveData();
        updateTotals();
      };

      goalHInput.addEventListener('input', updateGoal);
      goalMInput.addEventListener('input', updateGoal);

      goalInputs.appendChild(goalHInput);
      goalInputs.appendChild(document.createTextNode('h'));
      goalInputs.appendChild(goalMInput);
      goalInputs.appendChild(document.createTextNode('m'));

      goalCalc.appendChild(goalHeader);
      goalCalc.appendChild(goalInputs);

      // Chapter List
      const chaptersCard = document.createElement('div');
      chaptersCard.className = 'chapters-card';

      sub.chapters.forEach((ch) => {
        const chItem = document.createElement('div');
        chItem.className = 'chapter-item';
        if (ch.completed) chItem.classList.add('completed');

        const infoWrapper = document.createElement('div');
        infoWrapper.className = 'chapter-info-wrapper';

        const chCheckbox = document.createElement('input');
        chCheckbox.type = 'checkbox';
        chCheckbox.checked = ch.completed;

        chCheckbox.addEventListener('change', (e) => {
          ch.completed = e.target.checked;
          saveData();
          if (ch.completed) chItem.classList.add('completed');
          else chItem.classList.remove('completed');
          updateTotals();
        });

        const info = document.createElement('div');
        info.className = 'chapter-info';
        
        const chName = document.createElement('div');
        chName.className = 'chapter-name';
        chName.textContent = ch.name;

        const chMods = document.createElement('div');
        chMods.className = 'chapter-modules';
        chMods.textContent = `${ch.modules} Modules`;

        info.appendChild(chName);
        info.appendChild(chMods);

        infoWrapper.appendChild(chCheckbox);
        infoWrapper.appendChild(info);

        const inputGroup = document.createElement('div');
        inputGroup.className = 'chapter-input-group';

        const inputH = document.createElement('input');
        inputH.type = 'number';
        inputH.min = '0';
        inputH.value = ch.h;

        const inputM = document.createElement('input');
        inputM.type = 'number';
        inputM.min = '0';
        inputM.max = '59';
        inputM.value = ch.m;
        
        const updateChapterTime = () => {
          ch.h = parseInt(inputH.value) || 0;
          ch.m = parseInt(inputM.value) || 0;
          saveData();
          updateTotals();
        };

        inputH.addEventListener('input', updateChapterTime);
        inputM.addEventListener('input', updateChapterTime);

        inputGroup.appendChild(inputH);
        inputGroup.appendChild(document.createTextNode('h'));
        inputGroup.appendChild(inputM);
        inputGroup.appendChild(document.createTextNode('m'));

        chItem.appendChild(infoWrapper);
        chItem.appendChild(inputGroup);
        chaptersCard.appendChild(chItem);
      });

      viewWrapper.appendChild(focusedHeader);
      viewWrapper.appendChild(goalCalc);
      viewWrapper.appendChild(chaptersCard);
      container.appendChild(viewWrapper);
    }
    
    updateTotals();
  }

  function updateTotals() {
    let grandTotalBaseMins = 0;

    if (activeView === 'dashboard') {
      userData.forEach((sub, sIdx) => {
        const { subTotalBaseMins, completedBaseMins } = calculateSubjectTotals(sub);
        grandTotalBaseMins += subTotalBaseMins;
        
        const totalSubMins = subTotalBaseMins / currentSpeed;
        const dashSubTotal = document.getElementById(`dash-sub-total-${sIdx}`);
        if (dashSubTotal) dashSubTotal.textContent = formatMinutes(totalSubMins);
        
        // To update conic gradient on the fly, we'd need to re-select the ring.
        // It's easier to just let render() handle dashboard ring generation unless speed changes.
        // Since speed select calls updateTotals(), we can just re-render dashboard entirely for simplicity 
        // to update the circular rings mathematically if speed changed, but rings are percentage based and speed doesn't change percentages!
      });
      grandTotalEl.textContent = formatMinutes(grandTotalBaseMins / currentSpeed);
    } 
    else {
      // In Subject View
      const sub = userData[activeView];
      const { subTotalBaseMins, completedBaseMins } = calculateSubjectTotals(sub);
      
      // We still need grand total calculation across all subjects
      userData.forEach(s => {
        grandTotalBaseMins += calculateSubjectTotals(s).subTotalBaseMins;
      });
      
      const pBar = document.getElementById(`focus-progress-${activeView}`);
      if (pBar) {
        const percentage = subTotalBaseMins > 0 ? (completedBaseMins / subTotalBaseMins) * 100 : 0;
        pBar.style.width = `${percentage}%`;
      }

      // Update Header with specific Subject Total instead of Grand Total
      grandTotalEl.textContent = formatMinutes(subTotalBaseMins / currentSpeed);

      // Update Goal Calculator
      const daysLeftEl = document.getElementById(`days-left-${activeView}`);
      if (daysLeftEl) {
        const uncompletedBaseMins = subTotalBaseMins - completedBaseMins;
        const requiredWatchMins = uncompletedBaseMins / currentSpeed;
        const dailyGoalMins = (sub.dailyGoalH * 60) + sub.dailyGoalM;
        
        if (dailyGoalMins > 0 && requiredWatchMins > 0) {
          const days = (requiredWatchMins / dailyGoalMins).toFixed(1);
          daysLeftEl.textContent = `${days} days`;
        } else if (requiredWatchMins === 0) {
          daysLeftEl.textContent = `Done!`;
        } else {
          daysLeftEl.textContent = `Set goal`;
        }
      }
    }
  }

  function saveData() {
    localStorage.setItem('marrowPlannerDataV2', JSON.stringify(userData));
  }

  // --- PWA Install Prompt ---
  let deferredPrompt;
  const installPopup = document.getElementById('install-popup');
  const btnInstallCancel = document.getElementById('install-cancel');
  const btnInstallConfirm = document.getElementById('install-confirm');

  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    // Show our custom install UI
    installPopup.style.display = 'block';
  });

  btnInstallCancel.addEventListener('click', () => {
    installPopup.style.display = 'none';
  });

  btnInstallConfirm.addEventListener('click', async () => {
    installPopup.style.display = 'none';
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response to the install prompt: ${outcome}`);
      deferredPrompt = null;
    }
  });

  window.addEventListener('appinstalled', () => {
    installPopup.style.display = 'none';
    deferredPrompt = null;
  });

  // Initial render
  render();
});
