export const projectsData = [
  {
    id: "crohns-dp-fl",
    title: "Privacy-Preserving Federated Learning Framework for Crohn's Disease Risk Prediction",
    subtitle: "Capstone Research Project",
    status: "Research",
    summary: "Developing an enhanced Differentially Private Federated Learning (DP-FL) framework integrated with Explainable AI (XAI) for secure genomic risk prediction across hospital institutions without sharing raw patient data.",
    tech: ["Python", "Federated Learning", "Differential Privacy", "Machine Learning", "Explainable AI (XAI)"],
    problem: "Healthcare institutions and medical research facilities are strictly restricted from centralizing raw patient genomic data due to health privacy compliance (e.g., HIPAA) and patient confidentiality concerns.",
    objective: "To design a distributed, multi-institution Machine Learning framework that calculates individual genomic disease risk while guaranteeing privacy mathematically through Differential Privacy (DP) and providing clinically interpretable risk scores via Explainable AI (XAI).",
    personalContribution: "Designing the distributed model training architecture across hospital nodes, implementing differential privacy noise-injection mechanisms, integrating explainability modules for severity scoring, and analyzing fairness across diverse genomic datasets.",
    methods: "Implemented DP-SGD (Differentially Private Stochastic Gradient Descent) with dynamic privacy budgeting across distributed hospital client nodes. Integrated feature-attribution XAI modules to generate clinically interpretable severity scores and personalized preventive recommendations.",
    results: [
      { label: "Publication Venue", value: "IEEE CIBCB 2026" },
      { label: "Privacy Framework", value: "Differential Privacy (DP)" },
      { label: "Architecture", value: "Distributed Node Training" }
    ],
    skills: ["Federated Learning", "Differential Privacy Guarantees", "Explainable AI (XAI)", "Distributed Systems", "Genomic Data Modeling"],
    realWorldRelevance: "Enables clinical multi-center collaborative research across hospitals without compromising raw patient confidentiality or violating healthcare privacy laws.",
    limitations: "Navigating the trade-off between strict noise-addition for privacy and model precision across non-IID (heterogeneous) genomic distributions.",
    evidenceLinks: {
      repo: null, // Placeholder: "https://github.com/lukeitsevan/crohns-dp-fl"
      paper: "Accepted at IEEE CIBCB 2026, Athens, Greece",
      slides: null,
      docs: null
    }
  },
  {
    id: "elderly-financial-assistant",
    title: "AI-Powered Financial Assistant for Elderly Users",
    subtitle: "Terrathon 2025 - 1st Place Winner",
    status: "Completed",
    summary: "Built a dual-interface AI conversational system to simplify complex financial terminology, EMI structures, and credit scoring for elderly citizens with multilingual support in 5+ languages.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Gemini API"],
    problem: "Senior citizens often struggle to navigate modern online banking systems and understand intricate financial jargon (such as EMIs, interest compounding, and credit scores) in digital interfaces.",
    objective: "Develop an intuitive, accessible conversational assistant that simplifies complex financial concepts into plain language and supports multi-language translation for inclusive digital literacy.",
    personalContribution: "Engineered the full-stack system architecture, integrated Gemini API for automated simplification and translation across 5+ languages, and created accessible frontend components designed specifically for older adults.",
    methods: "Utilized prompt-engineered Gemini API pipelines for real-time translation and term simplification. Built custom REST endpoints in Node.js/Express and designed a high-contrast accessibility-focused UI in React.",
    results: [
      { label: "Hackathon Result", value: "1st Place Winner" },
      { label: "Languages Supported", value: "5+ Languages" },
      { label: "Event", value: "Terrathon 2025" }
    ],
    skills: ["Full-Stack Web Development", "LLM Integration (Gemini API)", "Accessibility (UI/UX)", "RESTful APIs", "Multilingual Localization"],
    realWorldRelevance: "Democratizes financial literacy for aging demographics, reducing financial fraud vulnerability and digital adoption friction.",
    limitations: "Requires active internet connectivity for real-time LLM query processing; localized dialect coverage can be further expanded.",
    evidenceLinks: {
      repo: null, // Placeholder: "https://github.com/lukeitsevan/elderly-financial-assistant"
      demo: null,
      slides: null
    }
  }
];