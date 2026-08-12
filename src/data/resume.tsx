import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
// import { NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { CPlusPlus } from "@/components/ui/svgs/cplusplus";
import { FastApi } from "@/components/ui/svgs/fastapi";

export const DATA = {
  name: "Nursultan Sagyntay",
  initials: "NS",
  url: "https://nursultan.org",
  location: "Abu Dhabi, UAE",
  locationLink: "https://www.google.com/maps/place/abu+dhabi",
  description:
    "CS student at NYU Abu Dhabi. AI Engineer and Quantitative Researcher. I build agentic systems and quant tooling that ship to production.",
  summary:
    "I'm a computer science student at [NYU Abu Dhabi](/#education) (Class of 2027) working on AI agents and quantitative research. Most recently I was a [Quantitative Researcher and AI Engineer at Kepler Cheuvreux](/#work) in Dubai, where I built a credit-signal platform covering 2,500+ EM bonds and shipped it as a production web product. Before that I worked on LLM evaluation infrastructure at [ISSAI](/#work), adapting SOTA benchmarks into Kazakh and Russian, and I still build RAG and multi-agent pipelines for [Computational Social Science at NYU](/#work). On the side I ship things like [CodeReaper](https://mcpservers.org/codereaper), an MCP tool that hunts dead JavaScript, and a handful of other [projects](/#projects). Away from the keyboard I shoot film photography and train MMA.",
  avatarUrl: "/me.jpg",
  skills: [
    // Languages and frameworks carry icons and lead the list; platforms, data
    // stores, and protocols follow as plain pills.
    { name: "Python", icon: Python },
    { name: "Typescript", icon: Typescript },
    { name: "Go", icon: Golang },
    { name: "C++", icon: CPlusPlus },
    { name: "FastAPI", icon: FastApi },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "React", icon: ReactLight },
    { name: "PyTorch" },
    { name: "LangGraph" },
    { name: "vLLM" },
    { name: "MCP" },
    { name: "HuggingFace" },
    { name: "Postgres" },
    { name: "Qdrant" },
    { name: "Redis" },
    { name: "Docker" },
    { name: "AWS" },
    { name: "Bloomberg" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ns5745@nyu.edu",
    tel: "+971502010348",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kazakhpunk",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/nursultan-sagyntay",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/kazakhpunk",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ns5745@nyu.edu",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Kepler Cheuvreux",
      href: "https://www.keplercheuvreux.com",
      badges: [],
      location: "Dubai, UAE",
      title: "Quantitative Researcher, AI Engineer",
      logoUrl: "/keplercheuvreux.png",
      start: "May 2026",
      end: "August 2026",
      description:
        "Built a quantitative credit-signal platform across 3 EM bond universes (GCC, MENA, LatAm) and 2,500+ USD bonds, pairing an abnormality-alert engine with cross-sectional alpha ranking. Distilled 30 raw factors into 6 PCA themes on a forward-21d excess-return target, weighted by out-of-sample Ridge regression and validated via IC/ICIR/hit-rate. Ported the desk's Excel workbook into a production web product (FastAPI + Next.js), cutting refresh time by 30%. Built an ETF Exposure Explorer decomposing flows across 15k ETFs by geography, sector, and asset class. Increased lead-to-client conversion by 13% by anchoring signals to news catalysts via Swarm Agents and the Bloomberg API.",
    },
    {
      company: "Institute of Smart Systems and Artificial Intelligence",
      href: "https://issai.nu.edu.kz",
      badges: [],
      location: "Astana, Kazakhstan",
      title: "AI Engineer",
      logoUrl: "/issai.png",
      start: "June 2025",
      end: "August 2025",
      description:
        "Adapted 4 SOTA benchmarks (WinoGrande, HellaSwag, USAMO) into Kazakh and Russian via the OpenAI API for evaluations. Integrated vLLM with Hugging Face Datasets to deliver 10x faster inference and fault-tolerant online result persistence. Designed a code-centric LLM evaluation pipeline integrating LiveCodeBench and HumanEval for algorithmic problem-solving. Implemented reasoning-token evaluation for the Qwen3 family by integrating LLM-as-a-Judge to assess reasoning traces.",
    },
    {
      company: "Heart Center Foundation",
      href: "https://hcf.kz",
      badges: [],
      location: "Remote",
      title: "Full Stack Engineer",
      logoUrl: "/hcf.png",
      start: "December 2024",
      end: "March 2025",
      description:
        "Architected the web platform for the largest cardiology awareness organization in Central Asia using Laravel Livewire and jQuery. Built a high-performance monolithic application handling patient resources, donor management, and educational content. Collaborated with medical stakeholders to implement digital tools and a CMS for cardiac surgery education and outreach.",
    },
    {
      company: "Computational Social Science @ NYU",
      href: "https://nyuad.nyu.edu",
      badges: [],
      location: "New York, NY",
      title: "AI Engineer",
      logoUrl: "/nyuad.png",
      start: "September 2024",
      end: null,
      description:
        "Indexed 2TB of political data using dsRAG, Qdrant and Next.js with agentic tooling to handle dataset queries. Fixed 300GB of PDF OCRs about US Executive Orders using Multi-Agent AI and RAG, reaching 88% accuracy.",
    },
  ],
  education: [
    {
      school: "New York University Abu Dhabi",
      href: "https://nyuad.nyu.edu",
      degree: "B.S. in Computer Science, Minor in Applied Math | GPA 3.8 / 4.0",
      logoUrl: "/nyuad.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "NYU Stern School of Business",
      href: "https://www.stern.nyu.edu",
      degree: "Coursework in Business and Finance",
      logoUrl: "/nyuad.png",
      start: "Winter 2024",
      end: "Fall 2025",
    },
    {
      school: "nFactorial Incubator",
      href: "https://www.nfactorial.school",
      degree: "Software Engineering Fellow",
      logoUrl: "/nfactorial.png",
      start: "Summer 2024",
      end: null,
    },
  ],
  projects: [
    {
      title: "Signal",
      href: "https://signal-rouge-sigma.vercel.app/",
      dates: "2026",
      active: true,
      description:
        "Bond trade-intelligence platform that surfaces abnormal yields and macro catalysts before the market prices them in. Ranks GCC, MENA and LatAm bonds peer-neutral across 6 PCA themes distilled from 30 raw factors, with a live leaderboard and expandable theme breakdowns.",
      technologies: [
        "Next.js",
        "FastAPI",
        "Python",
        "PCA",
        "Ridge Regression",
        "Bloomberg API",
      ],
      links: [
        {
          type: "Website",
          href: "https://signal-rouge-sigma.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/signal.jpeg?v=11",
      video: "/projects/signal_demo.mp4?v=11",
    },
    {
      title: "Quant Trader AI",
      href: "https://quant-trader-ai-v4.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "AI trading platform that fuses technical indicators, fundamentals, sentiment and volatility into real-time signals. Covers 450+ tickers with relative-value pair discovery, cointegration analysis, and a paper-trading sandbox before live broker execution.",
      technologies: [
        "Next.js",
        "Python",
        "FastAPI",
        "NLP",
        "PostgreSQL",
        "Broker APIs",
      ],
      links: [
        {
          type: "Website",
          href: "https://quant-trader-ai-v4.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/kazakhpunk/Quant_Trader_AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/quant_hero.jpg?v=11",
      video: "/projects/quant_demo.mp4?v=11",
    },
    {
      title: "CodeReaper",
      href: "https://pypi.org/project/codereaper/",
      dates: "Jan 2026",
      active: true,
      description:
        "AI-driven MCP tool for Cursor that autonomously explores UIs via a browser agent and captures V8 coverage to identify unused JavaScript. Engineers the complete dead-code lifecycle: risk scoring, patch generation (conservative/balanced/aggressive), verification replay, and rollback snapshots.",
      technologies: [
        "FastAPI",
        "Playwright",
        "V8 Coverage",
        "MCP",
        "Gemini API",
        "Cursor",
      ],
      links: [
        {
          type: "PyPI",
          href: "https://pypi.org/project/codereaper/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/codereaper.png?v=11",
      video: "",
    },
    {
      title: "MapTourAI",
      href: "https://maptourai-git-feat-avatar-muhammad-shahzaib-hassans-projects.vercel.app/",
      dates: "Sep 2025",
      active: true,
      description:
        "Location-based AI travel agent that uses the Model Context Protocol to scrape real-time sightseeing data. Geolocation tracking triggers AI-generated avatars that narrate historical stories as users approach landmarks.",
      technologies: [
        "Next.js",
        "MCP Agents",
        "Geolocation",
        "AI Avatars",
        "Typescript",
      ],
      links: [
        {
          type: "Website",
          href: "https://maptourai-git-feat-avatar-muhammad-shahzaib-hassans-projects.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/maptourai.jpeg?v=11",
      video: "/projects/map_demo.mp4?v=11",
    },
    {
      title: "TUIitter",
      href: "https://github.com/kazakhpunk/tuitter-backend",
      dates: "Nov 2025",
      active: true,
      description:
        "Terminal-based (TUI) social network distributable via `pip install`, with threads and direct messaging. Backed by a serverless AWS architecture for scalable event handling and low-latency reads.",
      technologies: [
        "Python",
        "Textual",
        "AWS Lambda",
        "DynamoDB",
        "Cognito",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/kazakhpunk/tuitter-backend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/tuitter.jpg?v=11",
      video: "/projects/tuitter_demo.mp4?v=11",
    },
    {
      title: "Heart Center Foundation",
      href: "https://hcf.kz",
      dates: "Dec 2024 - Mar 2025",
      active: true,
      description:
        "Web platform for Kazakhstan's first healthcare endowment fund, covering cardiology, cardiac surgery and transplantology. Handles patient resources, donor management, events and educational content behind a custom CMS.",
      technologies: [
        "Laravel",
        "Livewire",
        "PHP",
        "jQuery",
        "MySQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://hcf.kz",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/hcf.jpeg?v=11",
      video: "/projects/hcf_demo.mp4?v=11",
    },
  ],
} as const;
