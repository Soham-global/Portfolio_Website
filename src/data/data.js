// ============================================================
// PORTFOLIO DATA FILE
// To update anything on the site, just edit this file.
// ============================================================

export const personalInfo = {
  name: "Soham",
  role: "Data Scientist",
  taglines: [
    "Data Scientist.",
    "ML Engineer.",
    "Problem Solver.",
    "Product Builder.",
  ],
  bio: "I'm a Data Scientist who loves turning messy data into intelligent systems. I focus on building end-to-end ML products — from raw data pipelines to deployed applications — that actually solve real problems.",
  email: "magiciancoder1@gmail.com",
  phone: "9876149416",
  github: "https://github.com/Soham-global",
  linkedin: "https://linkedin.com/in/sohamkalsi",
  resumeLink: "#", // Add your resume link here
};

export const about = {
  description: `I'm a final year B.Tech CSE student at Guru Nanak Dev University with a deep passion for Machine Learning, Deep Learning, and Data Science. I don't just build models — I build complete, production-ready systems with clean pipelines, experiment tracking, and real deployments.

What drives me is the intersection of data and product thinking. I believe ML only matters when it ships. That's why every project I build goes end-to-end — from data ingestion to a live, usable application.`,
  highlights: [
    "End-to-end ML pipeline engineering",
    "Deep Learning & Transfer Learning",
    "MLOps: MLflow, DVC, Docker, CI/CD",
    "500+ DSA problems solved",
    "Top 35 / 4000+ teams at HackMol 6.0",
  ],
};

export const experiences = [
  {
    role: "AI/ML Intern",
    company: "SmartBridge",
    duration: "Jan 2026 – Present",
    description: "Developing and evaluating machine learning models using Python and SQL. Applying supervised and unsupervised learning techniques, improving model performance by 10%. Executing end-to-end ML workflows including preprocessing, feature engineering, training, and evaluation.",
    tags: ["Python", "SQL", "Machine Learning", "Feature Engineering"],
  },
  {
    role: "Data Science Intern",
    company: "InGrade",
    duration: "Feb 2025 – May 2025",
    description: "Designed and implemented complete machine learning pipelines for data cleaning, feature selection, and validation. Authored 10+ technical articles on ML and data science concepts. Converted analytical findings into structured reports enabling data-driven decision-making.",
    tags: ["Python", "ML Pipelines", "Data Analysis", "Technical Writing"],
  },
  {
    role: "Data Analytics Intern",
    company: "360DigiTMG",
    duration: "Dec 2024 – Feb 2025",
    description: "Analyzed 5+ operational datasets contributing to a 10% reduction in unplanned downtime. Engineered ETL pipelines using Python and SQL, reducing data processing time by 30%. Conducted exploratory data analysis and delivered SQL-based reports.",
    tags: ["Python", "SQL", "ETL Pipelines", "EDA"],
  },
  {
    role: "AI Intern",
    company: "TechSaksham (Microsoft & SAP Initiative)",
    duration: "2024",
    description: "Completed internship on AI: Transformative Learning with TechSaksham — a joint CSR initiative of Microsoft & SAP, implemented by Edunet Foundation under AICTE.",
    tags: ["Artificial Intelligence", "Microsoft", "SAP", "AICTE"],
  },
];

export const skills = {
  "Programming": ["Python", "SQL", "C++", "Data Structures & Algorithms"],
  "Machine Learning": ["Supervised Learning", "Unsupervised Learning", "CNNs", "Transfer Learning", "Reinforcement Learning"],
  "Deep Learning": ["TensorFlow", "Keras", "VGG-16", "MobileNetV2"],
  "Data Analysis": ["Pandas", "NumPy", "Matplotlib", "Seaborn", "SciPy"],
  "MLOps & Tools": ["MLflow", "DVC", "DagsHub", "Docker", "GitHub Actions", "FastAPI", "Flask", "Git"],
  "Databases": ["MongoDB Atlas", "SQLite", "SQL"],
};

export const projects = [
  {
    title: "Network Security – Phishing Detection",
    description: "End-to-end phishing detection system using 11,055 samples with 30 features. Implemented and compared 5 classification models with GridSearchCV hyperparameter tuning. Built a production-ready FastAPI app integrated with MongoDB Atlas for real-time URL prediction.",
    tags: ["Python", "Scikit-Learn", "MLflow", "DagsHub", "FastAPI", "MongoDB", "Docker", "GitHub Actions"],
    github: "#", // Add GitHub link here
    highlight: true,
  },
  {
    title: "Chest Disease Classification (CT Scans)",
    description: "Deep learning model to classify Adenocarcinoma vs Normal CT scan images using VGG-16 transfer learning. Built a modular pipeline for ingestion, preprocessing, training, and evaluation with full MLflow + DVC integration.",
    tags: ["Python", "TensorFlow", "Keras", "VGG-16", "MLflow", "DVC", "Flask"],
    github: "#",
    highlight: true,
  },
  {
    title: "EatSure — AllergyGuard",
    description: "Smart web app that helps people with food allergies safely navigate restaurant menus in any language. Upload a menu photo, get instant analysis of safe/unsafe dishes, and generate polite allergy messages in the waiter's language.",
    tags: ["Python", "Flask", "Groq API", "LLaMA 3.3", "Tesseract OCR", "SQLite", "Flask-Login"],
    github: "#",
    highlight: true,
  },
  {
    title: "BookSense AI",
    description: "Intelligent book recommendation engine powered by K-Nearest Neighbours and collaborative filtering trained on 59,850+ real reader interactions across 742 curated titles. Features a beautiful web interface with real-time predictions and one-click model retraining.",
    tags: ["Python", "Scikit-Learn", "KNN", "Flask", "Pandas", "Docker", "Collaborative Filtering"],
    github: "#",
    highlight: false,
  },
  {
    title: "Dynamic Pricing Engine",
    description: "AI-powered dynamic pricing system combining Machine Learning and Reinforcement Learning (Q-Learning) to optimize e-commerce prices in real-time. Achieved 85% prediction accuracy and 16% average profit improvement over static pricing, with 307% boost in competitive scenarios.",
    tags: ["Python", "Scikit-Learn", "Q-Learning", "Random Forest", "Flask", "Reinforcement Learning"],
    github: "#",
    highlight: false,
  },
];

export const certifications = [
  {
    title: "Career Essentials in Data Analytics",
    issuer: "Microsoft & LinkedIn",
    icon: "microsoft",
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    icon: "microsoft",
  },
  {
    title: "Intermediate SQL",
    issuer: "DataCamp",
    icon: "datacamp",
  },
  {
    title: "AI: Transformative Learning",
    issuer: "TechSaksham — Microsoft & SAP",
    icon: "techsaksham",
  },
];

export const achievements = [
  {
    title: "HackMol 6.0",
    description: "Selected among Top 35 teams out of 4000+ participants at NIT Jalandhar.",
    icon: "🏆",
  },
  {
    title: "500+ DSA Problems",
    description: "Solved 500+ Data Structures & Algorithms problems across LeetCode and GeeksforGeeks.",
    icon: "⚡",
  },
  {
    title: "3 Internships",
    description: "Completed 3 industry internships while pursuing B.Tech, building real-world ML systems.",
    icon: "🚀",
  },
];