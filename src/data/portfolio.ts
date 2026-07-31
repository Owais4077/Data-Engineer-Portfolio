import {
  Activity,
  BarChart3,
  Boxes,
  Braces,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  FileCheck2,
  GitFork,
  Github,
  GraduationCap,
  Layers3,
  LineChart,
  Mail,
  MapPin,
  Server,
  Sparkles,
  Star,
  Workflow
} from "lucide-react";
import type { ComponentType } from "react";
import {
  FaAws,
  FaDocker,
  FaGithub,
  FaGitAlt,
  FaLinkedin,
  FaMicrosoft,
  FaPython
} from "react-icons/fa";
import {
  SiApache,
  SiDatabricks,
  SiFastapi,
  SiGooglecloud,
  SiJupyter,
  SiMysql,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiStreamlit
} from "react-icons/si";

export type PortfolioIcon = ComponentType<{ className?: string; size?: number }>;

export type SkillGroup = {
  title: string;
  icon: PortfolioIcon;
  skills: { name: string; icon?: PortfolioIcon }[];
};

export type Project = {
  title: string;
  category: "Data Engineering" | "Analytics" | "AI/ML";
  visual: "pipeline" | "dashboard" | "rag" | "agent" | "pricing" | "medical" | "navigation" | "career";
  description: string;
  stack: string[];
  features: string[];
  stats: { label: string; value: string }[];
  github: string;
  demo: string;
};

export type GitHubRepo = {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  pushedAt: string;
};

export const profile = {
  name: "Owais Ahmad",
  title: "Data Engineer",
  stack: "Python | SQL | PySpark | Databricks | Delta Lake",
  summary:
    "I build scalable ETL pipelines, modern Lakehouse platforms, and analytics-ready data products with Python, SQL, PySpark, Databricks, and Delta Lake.",
  email: "owaisahmad445566@gmail.com",
  github: "https://github.com/Owais4077",
  linkedin: "https://www.linkedin.com/in/owais-ahmad-79a431292/",
  location: "Pakistan",
  resume: "/assets/Owais-Ahmad-Data-Engineer-Resume.txt",
  atsResume: "/assets/Owais-Ahmad-ATS-Resume.txt"
};

export const stats = [
  { label: "Public Repositories", value: "36" },
  { label: "Certificates", value: "4+" },
  { label: "Technologies", value: "25+" },
  { label: "Years Learning", value: "4" }
];

export const githubStats = {
  publicRepos: 36,
  totalStars: 6,
  totalForks: 1,
  strongestLanguage: "Python",
  languages: [
    { name: "Python", count: 21, color: "bg-cyan-300" },
    { name: "HTML", count: 5, color: "bg-violet-300" },
    { name: "JavaScript", count: 3, color: "bg-blue-300" },
    { name: "Jupyter Notebook", count: 2, color: "bg-amber-300" },
    { name: "C++", count: 1, color: "bg-emerald-300" },
    { name: "PowerShell", count: 1, color: "bg-slate-300" }
  ],
  recentRepos: [
    {
      name: "Rag-Project",
      description: "Beginner-friendly RAG project repository focused on retrieval workflows.",
      language: "Python",
      stars: 1,
      forks: 0,
      url: "https://github.com/Owais4077/Rag-Project",
      pushedAt: "2026-01-07"
    },
    {
      name: "Interactive-Data-Visualization-Analytics-Dashboard",
      description: "Streamlit, Pandas, and Plotly dashboard for real-time exploratory data analysis.",
      language: "Jupyter Notebook",
      stars: 0,
      forks: 0,
      url: "https://github.com/Owais4077/Interactive-Data-Visualization-Analytics-Dashboard",
      pushedAt: "2026-01-05"
    },
    {
      name: "FlowVision-End-to-End-Real-Time-ML-Pipeline",
      description: "End-to-end real-time ML pipeline with collection, transformation, monitoring, and dashboarding.",
      language: "Python",
      stars: 0,
      forks: 0,
      url: "https://github.com/Owais4077/FlowVision-End-to-End-Real-Time-ML-Pipeline",
      pushedAt: "2025-12-01"
    },
    {
      name: "CareerSense-AI-Career-Path-Predictor",
      description: "BERT and Random Forest system that recommends career roles and skill roadmaps.",
      language: "Python",
      stars: 0,
      forks: 0,
      url: "https://github.com/Owais4077/CareerSense-AI-Career-Path-Predictor",
      pushedAt: "2025-12-06"
    }
  ] satisfies GitHubRepo[]
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    icon: Code2,
    skills: [
      { name: "Python", icon: FaPython },
      { name: "SQL", icon: Database },
      { name: "Spark SQL", icon: SiApache }
    ]
  },
  {
    title: "Data Engineering",
    icon: Workflow,
    skills: [
      { name: "ETL" },
      { name: "ELT" },
      { name: "Data Pipelines" },
      { name: "Data Cleaning" },
      { name: "Data Validation" },
      { name: "Data Transformation" },
      { name: "Data Quality" },
      { name: "Data Modeling" },
      { name: "Data Warehousing" }
    ]
  },
  {
    title: "Big Data",
    icon: Layers3,
    skills: [
      { name: "Apache Spark", icon: SiApache },
      { name: "PySpark", icon: FaPython },
      { name: "Databricks", icon: SiDatabricks },
      { name: "Delta Lake", icon: Boxes }
    ]
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "SQL Server", icon: FaMicrosoft }
    ]
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: [
      { name: "Azure", icon: FaMicrosoft },
      { name: "AWS", icon: FaAws },
      { name: "Google Cloud", icon: SiGooglecloud }
    ]
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "FastAPI", icon: SiFastapi },
      { name: "REST API", icon: Braces },
      { name: "Streamlit", icon: SiStreamlit }
    ]
  },
  {
    title: "Visualization",
    icon: BarChart3,
    skills: [
      { name: "Power BI", icon: BarChart3 },
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "Excel", icon: LineChart }
    ]
  },
  {
    title: "Development Tools",
    icon: BriefcaseBusiness,
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Docker", icon: FaDocker },
      { name: "VS Code", icon: Code2 },
      { name: "Jupyter Notebook", icon: SiJupyter }
    ]
  }
];

export const experience = {
  role: "Data Engineer Intern",
  company: "YBIX",
  employment: "Full-Time",
  duration: "May 2026 - July 2026",
  responsibilities: [
    "Developed ETL pipelines using Python, SQL, PySpark, and Databricks.",
    "Performed data cleaning, validation, and transformation.",
    "Built Bronze, Silver, and Gold Lakehouse architecture.",
    "Implemented Delta Lake MERGE for incremental processing.",
    "Created dashboards for business reporting.",
    "Collaborated with engineering teams."
  ],
  technologies: ["Python", "SQL", "PySpark", "Spark SQL", "Databricks", "Delta Lake"]
};

export const projects: Project[] = [
  {
    title: "FlowVision Real-Time ML Pipeline",
    category: "Data Engineering",
    visual: "pipeline",
    description:
      "End-to-end pipeline for collecting live data, transforming it, evaluating ML models, and visualizing monitoring insights.",
    stack: ["Python", "Pipelines", "Monitoring", "Dashboard"],
    features: ["Live data collection", "Transformation workflow", "Model evaluation", "Production monitoring"],
    stats: [
      { label: "Repo", value: "Live" },
      { label: "Type", value: "Pipeline" }
    ],
    github: "https://github.com/Owais4077/FlowVision-End-to-End-Real-Time-ML-Pipeline",
    demo: "#contact"
  },
  {
    title: "Interactive Data Visualization Dashboard",
    category: "Analytics",
    visual: "dashboard",
    description:
      "A web-based data exploration app built with Streamlit, Pandas, and Plotly for real-time EDA on structured datasets.",
    stack: ["Streamlit", "Pandas", "Plotly", "EDA"],
    features: ["Interactive charts", "Dataset profiling", "Real-time exploration", "Analytics dashboard"],
    stats: [
      { label: "Mode", value: "EDA" },
      { label: "Stack", value: "BI" }
    ],
    github: "https://github.com/Owais4077/Interactive-Data-Visualization-Analytics-Dashboard",
    demo: "#contact"
  },
  {
    title: "RAG Project",
    category: "AI/ML",
    visual: "rag",
    description:
      "Retrieval-augmented generation project foundation for document search, question answering, and AI-assisted knowledge workflows.",
    stack: ["Python", "RAG", "LLM", "Retrieval"],
    features: ["Document retrieval", "Question answering", "Knowledge search", "AI workflow design"],
    stats: [
      { label: "Stars", value: "1" },
      { label: "Lang", value: "Py" }
    ],
    github: "https://github.com/Owais4077/Rag-Project",
    demo: "#contact"
  },
  {
    title: "Autonomous Data Scientist Agent",
    category: "AI/ML",
    visual: "agent",
    description:
      "AI-powered system that automates machine learning stages from raw data loading to final reports and model explanations.",
    stack: ["Python", "AutoML", "LLM", "ML Pipeline"],
    features: ["Automated EDA", "Model training", "Evaluation reports", "Explainable outputs"],
    stats: [
      { label: "Flow", value: "E2E" },
      { label: "Mode", value: "Auto" }
    ],
    github: "https://github.com/Owais4077/Autonomous-Data-Scientist-Agent-Fully-Automated-ML-Pipeline-System_updated",
    demo: "#contact"
  },
  {
    title: "SmartDynamic Pricing Engine",
    category: "AI/ML",
    visual: "pricing",
    description:
      "AI-powered price optimization system that adapts prices using demand, inventory, customer behavior, and market signals.",
    stack: ["Python", "RL", "Optimization", "Analytics"],
    features: ["Dynamic pricing", "Demand signals", "Inventory logic", "Profit optimization"],
    stats: [
      { label: "Stars", value: "1" },
      { label: "Type", value: "RL" }
    ],
    github: "https://github.com/Owais4077/SmartDynamic-Pricing-Engine-AI-Powered-Price-Optimization-System",
    demo: "#contact"
  },
  {
    title: "Multi-Modal Medical Assistant",
    category: "AI/ML",
    visual: "medical",
    description:
      "Diagnostic support system that compares medical images and clinical text to identify mismatches and generate safer second opinions.",
    stack: ["Python", "Deep Learning", "Vision", "NLP"],
    features: ["Image analysis", "Report comparison", "Mismatch detection", "Evidence-based output"],
    stats: [
      { label: "Modes", value: "2" },
      { label: "Domain", value: "Med" }
    ],
    github: "https://github.com/Owais4077/Multi-Modal-Medical-Assistant-MMMA-",
    demo: "#contact"
  },
  {
    title: "WiFi Indoor Mall Navigator",
    category: "Analytics",
    visual: "navigation",
    description:
      "WiFi RSSI-based indoor navigation system that simulates user location, store directions, category browsing, and deal alerts.",
    stack: ["JavaScript", "RSSI", "Navigation", "Dashboard"],
    features: ["Signal mapping", "Store directions", "Admin dashboard", "Nearest-shop detection"],
    stats: [
      { label: "Signal", value: "RSSI" },
      { label: "UI", value: "Map" }
    ],
    github: "https://github.com/Owais4077/WiFi-Based-Indoor-Mall-Navigator",
    demo: "#contact"
  },
  {
    title: "CareerSense AI Career Path Predictor",
    category: "AI/ML",
    visual: "career",
    description:
      "Career recommendation system that uses resume text and skills to predict roles, find missing skills, and create learning roadmaps.",
    stack: ["Python", "BERT", "Random Forest", "NLP"],
    features: ["Resume analysis", "Role prediction", "Skill-gap detection", "Learning roadmap"],
    stats: [
      { label: "NLP", value: "BERT" },
      { label: "Output", value: "Path" }
    ],
    github: "https://github.com/Owais4077/CareerSense-AI-Career-Path-Predictor",
    demo: "#contact"
  }
];

export const certifications = [
  {
    name: "Databricks Data Engineering Fundamentals",
    organization: "Databricks",
    date: "Completed",
    credential: "Add credential ID",
    verifyUrl: "#contact",
    icon: SiDatabricks
  },
  {
    name: "Databricks SQL Analytics",
    organization: "Databricks",
    date: "Completed",
    credential: "Add credential ID",
    verifyUrl: "#contact",
    icon: Database
  },
  {
    name: "IBM Data Engineering",
    organization: "IBM",
    date: "Completed",
    credential: "Add credential ID",
    verifyUrl: "#contact",
    icon: FileCheck2
  },
  {
    name: "KPITB AI & Machine Learning",
    organization: "KPITB",
    date: "Completed",
    credential: "Add credential ID",
    verifyUrl: "#contact",
    icon: GraduationCap
  }
];

export const socials = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "Location", href: "#contact", icon: MapPin }
];

export const architectureSteps = [
  { label: "Ingest", detail: "Raw files and APIs", icon: Cloud },
  { label: "Bronze", detail: "Source-aligned tables", icon: Database },
  { label: "Silver", detail: "Validated clean data", icon: FileCheck2 },
  { label: "Gold", detail: "Business-ready marts", icon: Sparkles }
];
