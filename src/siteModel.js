export const model = {
  // Personal info
  name: "Yue Zhu 朱越",
  role: "Master Student · Interactive Media Technology",
  affiliation: "KTH Royal Institute of Technology",
  email: "yukizhuyue [at] outlook [dot] com",
  photo: "/media/profile/profile.jpeg",
  bio: `Hej hej, I am Yue, currently a first-year master student studying Interactive Media Technology (MSc) at KTH Royal Institute of Technology.

My current work sits at the intersection of Critical Computing and Creativity Support, with broader interests in Human-Computer Interaction and Data Feminism. I design and develop for interactive experiences, conduct empirical studies with mixed methods, critique human-technology tensions through a sociotechnical lens and speculate for alternatives.

Previously during my undergraduate studies in Industrial Design (BEng) at China Academy of Art, I gained valuable research experience at POEL Lab (Politecnico di Torino) and the Future Lab (Tsinghua University). I also went for exchange in Willem de Kooning Academie with a focus on Transformation Design (BA) in 2024. You are welcome to view my full [CV](/content/cv/cv_apr_26.pdf) here.

To confront occasionally increased anxiety, I started to write down some [thoughts and reflection](/blog).`,
  links: {
    // github:  "https://github.com/yukistillalive",
    scholar: "https://scholar.google.com/citations?user=QGG3uUgAAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/yue-z-35b170291/",
    // cv:      "../content/cv/cv_apr_26.pdf",
  },
  contact: {
    address: "",
    office:  "",
  },

  // Publications
  publications: [
    {
      id: 1,
      title: "Unveiling Hype Patterns in AI Advertising",
      authors: "Yue Zhu, Yuan Yao, and Maria Luce Lupetti",
      venue: "Full paper conditionally accepted by ACM IMX'26",
      year: 2026,
      link: "#",
      tags: ["AI Critique", "Media Study", "Creative Industries"],
    },
    {
      id: 2,
      title: " TangibleNegotiation: Probing Design Opportunities for Integration of Generative AI and Swarm Robotics for Imagination Cultivation in Child Art Education",
      authors: "Yue Zhu, Zhiyuan Zhou, Jinlin Miao, Haipeng Mi, and Yijie Guo",
      venue: "Ubicomp'24 (Poster)",
      year: 2024,
      link: "https://dl.acm.org/doi/10.1145/3675094.3677586",
      tags: ["Creativity Support", "Human-AI Interaction"],
    }
  ],

  // Projects
  projects: [
    {
      id: 4,
      slug: "unveiling-ai-hype",
      title: "Designing Responsible AI Communication",
      description: "A critique to unveil hype in GenAI advertisement media by examining the narrative structures that contribute to constructing our collective imagination and design for alternatives.",
      link: null,
      thumb: "/media/projects/04_hype/cover.png",
      label: "A critique to unveil hype in GenAI advertisement media by examining the narrative structures that contribute to constructing our collective imagination.",
      tags: ["Critical Computing", "2024-2026"],
    },
    {
      id: 3,
      slug: "tangible-negotiation",
      title: "Designing Tangible Negotiation for Child-Robot Interaction",
      description: "Designing intention-aware motion as tangible feedback for collaborative storytelling in between Child and Swarm Robots.",
      link: "https://vimeo.com/989595382",
      thumb: "/media/projects/03_sui/cover.png",
      label: "Designing intention-aware motion as tangible feedback for collaborative storytelling in between Child and Swarm Robots.",
      tags: ["Creativity Support", "Interaction Design", "2024"],
    },
    {
      id: 2,
      slug: "piano-automata",
      title: "PianoAutomata",
      description: "Approaching the invisible dynamics of emotional resonance with daily objects, deconstructing and mutating a piano.",
      link: "https://vimeo.com/916722480?share=copy",
      thumb: "/media/projects/02_piano/cover.png",
      label: "Approaching the invisible dynamics of emotional resonance with daily objects, deconstructing and mutating a piano.",
      tags: ["Physical Interaction", "2023"],
    },
    {
      id: 1,
      slug: "face-average",
      title: "Unveiling the Mystery of Artist's Face",
      description: "Measuring artistic identity by your similarity to the average artist's face.",
      link: "https://vimeo.com/916722327",
      thumb: "/media/projects/01_face/cover.png",
      label: "Measuring artistic identity by your similarity to the average artist's face.",
      tags: ["Digital Interactive Art", "Design Speculation", "2023"],
    },
    // {
    //   id: 3,
    //   title: "StudyBuddy",
    //   description: "Adaptive flashcard app using spaced-repetition and learner models.",
    //   link: "#",
    //   thumb: null,
    //   label: "CSCW '22",
    //   tags: ["React", "Firebase"],
    // },
  ],

  // Blog
  blog: [
    // Add posts here. Each post needs a matching markdown file at:
    // /public/content/blog/{slug}.md
    {
      id: 1,
      slug: "on-anxiety-and-writing",
      title: "On Anxiety and Writing",
      date: "Apr 27, 2026",
      description: "Why I started writing, and what I hope it becomes.",
      tags: ["reflection"],
    },
  ],

  // News
  news: [
    {
      id: 6,
      date: "Apr 2026",
      text: "We are currently seeking creative practitioners for an online study ✨ You are very welcome to participate",
      link: "https://bucolic-churros-8cbc0b.netlify.app/",
      linkLabel: "here",
    },
    { id: 5, date: "Apr 2026", text: "One paper accepted at ACM IMX'26! Will be presenting it in Althone, Ireland." },
    { id: 4, date: "Mar 2026", text: "Got one special recognition for outstanding reviews on CHI'26 posters." },
    { id: 3, date: "Aug 2025", text: "Started my master's study at KTH Royal Institute of Technology." },
    { id: 2, date: "Jun 2025", text: "Received the Lin Fengmian Gold Award for Thesis Project at China Academy of Art." },
    { id: 1, date: "Oct 2024", text: "Poster presentation of TangibleNegotiation at Ubicomp'24, Melbourne." },
    // { id: 6, date: "Mar 2023", text: "Paper accepted at CSCW 2023." },
  ],
};
