export const personalInfo = {
  name: "Sanket Kumar",
  title: "Software Engineer",
  email: "ksanket446@gmail.com",
  phone: "+91-6204838808",
  location: "Dhanbad, Jharkhand",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  shortBio: "Final-year B.Tech Computer Science student at KIIT with hands-on experience in full-stack web development (Java, Spring Boot, PostgreSQL, React.js) and machine learning/NLP (Python, Scikit-learn). Built 4 end-to-end applications applying MVC architecture, JWT security, REST APIs, and Agile practices. Seeking a Software Engineering Internship to contribute to scalable, production-ready systems.",
};

export const skills = [
  {
    category: "Languages",
    items: ["Java", "Python", "JavaScript", "SQL", "C/C++"]
  },
  {
    category: "Backend",
    items: ["Spring Boot", "REST APIs", "JWT", "Maven", "MVC", "OOP"]
  },
  {
    category: "Frontend",
    items: ["React.js", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "SQLite", "Schema Design", "Query Optimization"]
  },
  {
    category: "ML / NLP",
    items: ["Scikit-learn", "TF-IDF", "Logistic Regression", "SVM", "Pandas", "NLTK"]
  },
  {
    category: "Mobile",
    items: ["Kotlin", "Java", "Firebase", "Jetpack Room/LiveData"]
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "IntelliJ IDEA", "Linux", "Shell Scripting", "Agile/Scrum", "Debugging"]
  }
];

export const projects = [
  {
    title: "FaceTrack – QR-Based Attendance System",
    description: "Designed full-stack app with role-based JWT auth; normalized PostgreSQL schema across 5+ tables reduced average query response time by ~35%. Built React.js dashboard consuming REST APIs supporting 200+ concurrent users; QR-based workflow cut manual attendance time by 80%.",
    technologies: ["Spring Boot", "PostgreSQL", "React.js", "Tailwind CSS", "JWT", "REST APIs"],
    repoUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Hate Speech Detection Model",
    description: "Built end-to-end NLP pipeline on 25,000+ tweets; Logistic Regression classifier achieved 91% F1-score, outperforming Naïve Bayes baseline by 4% in precision. Reduced false-positive rate by 12% vs. SVM baseline via TF-IDF n-gram tuning and L2 regularization.",
    technologies: ["Python", "Scikit-learn", "TF-IDF", "Logistic Regression", "SVM", "Naïve Bayes", "NLTK"],
    repoUrl: "#",
    liveUrl: "#"
  },
  {
    title: "FitTrack – Fitness Tracking Android App",
    description: "Built multi-screen Android app with Firebase Realtime Database sync (<200ms latency) and Jetpack ViewModel/LiveData, eliminating 100% of activity-leak crashes.",
    technologies: ["Kotlin", "Firebase Realtime Database", "Android", "Jetpack"],
    repoUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Record Keeper – Local Data Management App",
    description: "Implemented full CRUD with Jetpack Room Database; lifecycle-aware architecture reduced boilerplate by ~40% across 500+ validated read/write operations.",
    technologies: ["Java", "Android", "Jetpack Room", "LiveData", "ViewModel"],
    repoUrl: "#",
    liveUrl: "#"
  }
];

export const education = {
  degree: "B.Tech – Computer Science and Engineering",
  institution: "KIIT, Bhubaneswar",
  duration: "Jul 2023 – Present",
  details: "GPA: 7.57/10 (5 semesters) | Coursework: DSA, DBMS, OOP, OS, Computer Networks"
};

export const highSchool = {
  degree: "Senior Secondary (PCM, CBSE)",
  institution: "Delhi Public School, Dhanbad",
  duration: "2023",
  details: "Score: 80%"
};

export const certifications = [
  {
    title: "Red Hat Certified System Administrator (RH124)",
    issuer: "Red Hat",
    date: "Jan 2025"
  },
  {
    title: "Android App Development Bootcamp: Beginner to Pro",
    issuer: "Udemy",
    date: "Nov 2024"
  }
];

export const activities = [
  {
    role: "ECOSOC Committee Delegate",
    organization: "KIITMUN",
    date: "2023",
    description: "Represented Belize; ranked top 10% of 60+ delegates for research and public speaking."
  },
  {
    role: "Cinematographer & Director",
    organization: "KIIT Film Society",
    date: "Mar 2024 – Present",
    description: "Led 3+ short film projects managing a 5-person crew."
  }
];
