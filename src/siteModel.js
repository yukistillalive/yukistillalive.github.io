export const model = {
  // Personal info
  name: "Yue Zhu 朱越",
  role: "Master Student · Interactive Media Technology",
  affiliation: "KTH Royal Institute of Technology",
  email: "yukizhuyue [at] outlook [dot] com",
  photo: "/media/profile/profile.jpeg",
  bio: `Thanks for stopping by! I am a master's student studying Interactive Media Technology (MSc) at KTH Royal Institute of Technology. Through a sociotechnical lens, I design and develop for meaningful interactive experiences, conduct empirical study to perceive and reflect, and speculate for alternative human-technology relationship. My current interest includes Critical Computing, Creativity Support, Data Feminism, and more broadly, Human-Computer Interaction. 

Previously during my undergraduate studies in Industrial Design (BEng) at China Academy of Art, I have gained valuable research experience at POEL Lab, Politecnico di Torino and MiLab, Tsinghua University. Before those, I went for exchange study at Willem de Kooning Academie with a focus on Transformation Design (BA). View my full [CV](https://drive.google.com/file/d/1qfp0cRNJ__H4Rj9sVOis4C9qNOafOxUL/view?usp=sharing) here.

I'm grateful for every institution that shaped my education. Starting at an art academy before KTH gave me the freedom to think beyond conventional technical discourses and to practice mindfully at the intersection of technology and society, which largely defines where my positionality of research and design comes from.

My name Yue 越 pronounces as 'Yoo-eh', which I interpret as 'radical'. Besides, I also enjoy my friends calling me 'Yuki' as an alternative. To confront occasionally increased anxiety, I started to write down some [thoughts and reflection](/blog).`,
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
      venue: "Full Paper at IMX'26",
      year: 2026,
      link: "https://dl.acm.org/doi/10.1145/3788851.3805004",
      tags: ["AI Critique", "Media Study", "Creative Industries"],
    },
    {
      id: 2,
      title: " TangibleNegotiation: Probing Design Opportunities for Integration of Generative AI and Swarm Robotics for Imagination Cultivation in Child Art Education",
      authors: "Yue Zhu, Zhiyuan Zhou, Jinlin Miao, Haipeng Mi, and Yijie Guo",
      venue: "Posters at Ubicomp'24",
      year: 2024,
      link: "https://dl.acm.org/doi/10.1145/3675094.3677586",
      tags: ["Creativity Support", "Human-AI Interaction"],
    }
  ],

  // Projects
  projects: [
    {
      id: 7,
      slug: "seeking-answer-from-tarot",
      title: "Seeking Answers from Tarot",
      description: "A react web app for Tarot divination, designed and developed for reflection and meaning-making.",
      link: "https://tarot-app-dev-yuki.web.app/",
      thumb: "/media/projects/07_tarot/cover.png",
      label: "A react web app for Tarot divination, designed and developed for reflection and meaning-making.",
      link: "https://tarot-app-dev-yuki.web.app/",
      tags: ["Web App", "Interaction Design"],
    },
    {
      id: 6,
      slug: "feminist-critique-to-cst",
      title: "Creative Infrastructure as Ideology",
      description: "A work-in-progress essay draft",
      link: null,
      thumb: "/media/projects/06_feminist/cover.png",
      // pdf: "/media/projects/06_feminist/feminist critique to cst.pdf",
      label: "A Feminist Critique of Designing Creativity Support Tools In The Age of Generative AI",
      tags: ["Gender and Technology", "Creativity Support", "Generative AI"],
    },
    {
      id: 5,
      slug: "birthday-ritual-workbook",
      title: "Designing Ritual for Meaningful Micro-Moments: A Playful Birthday Ritual",
      description: "Revive birthday celebration from afar through a playful ritual.",
      link: null,
      thumb: "/media/projects/05_ritual/cover.png",
      pdf: "/media/projects/05_ritual/Birthday%20Ritual%20Workbook_revision.pdf",
      label: "Revive birthday celebration from afar through a playful ritual.",
      tags: ["Interaction Design", "Design Reflection"],
    },
    {
      id: 4,
      slug: "unveiling-ai-hype",
      title: "Designing Responsible AI Communication",
      description: "A critique to unveil hype in GenAI advertisement media by examining the narrative structures that contribute to constructing our collective imagination and design for alternatives.",
      link: null,
      thumb: "/media/projects/04_hype/cover.png",
      label: "A critique to unveil hype in GenAI advertisement media by examining the narrative structures that contribute to constructing our collective imagination.",
      tags: ["Critical Computing", "AI & Social Justice", "AI Trust"],
    },
    {
      id: 3,
      slug: "tangible-negotiation",
      title: "Designing Tangible Negotiation for Child-Robot Interaction",
      description: "Designing shape-aware interaction as tangible feedback for collaborative storytelling in between Child and Swarm Robots.",
      link: "https://vimeo.com/989595382",
      thumb: "/media/projects/03_sui/cover.png",
      label: "Designing shape-aware interaction as tangible feedback for collaborative storytelling in between Child and Swarm Robots.",
      tags: ["Creativity Support", "Child-Robot Interaction"],
    },
    {
      id: 2,
      slug: "piano-automata",
      title: "PianoAutomata",
      description: "Approaching the invisible dynamics of emotional resonance with daily objects, deconstructing and mutating a piano.",
      link: "https://vimeo.com/916722480?share=copy",
      thumb: "/media/projects/02_piano/cover.png",
      label: "Approaching the invisible dynamics of emotional resonance with daily objects, deconstructing and mutating a piano.",
      tags: ["Physical Interaction", "First-Person Perspective"],
    },
    {
      id: 1,
      slug: "face-average",
      title: "Unveiling the Mystery of Artist's Face",
      description: "Measuring artistic identity by your similarity to the average artist's face.",
      link: "https://vimeo.com/916722327",
      thumb: "/media/projects/01_face/cover.png",
      label: "Measuring artistic identity by your similarity to the average artist's face.",
      tags: ["Digital Interactive Art", "Design Speculation"],
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
    {
      id: 2,
      slug: "a-reminder-to-myself",
      title: "A Reminder to Myself",
      date: "May 10, 2026",
      description: "A reminder to myself when feeling lost and restless.",
      tags: ["reflection"],
    },
    {
      id: 3,
      slug: "a-study-note-on-statistics",
      title: "A study note on statistics for UX research",
      date: "Jun 15, 2026",
      description: "A study note on statistics.",
      tags: ["statistics", "UX Research", "study note"],
    },
    {
      id: 4,
      slug: "a-reflection-on-imx",
      title: "Attending IMX'26",
      date: "Jul 20, 2026",
      description: "My first oral presentation at an international conference!",
      tags: ["reflection", "IMX'26"],
    }
    // {
    //   id: 3,
    //   slug: "what-are-we-looking-for-when-asking-an-ai",
    //   title: "What We Are Looking for When Asking An AI",
    //   date: "Jun 15, 2026",
    //   description: "What are we looking for when asking an AI? A reflection on the design of AI communication.",
    //   tags: ["reflection", "AI Critique"],
    // },
    // {
    //   id: 4,
    //   slug: "speculate-for-meaningful-micro-moments",
    //   title: "Speculate for Meaningful Micro-Moments",
    //   date: "Jul 20, 2026",
    //   description: "A brief reflection on the importance of designing for meaningful micro-moments in human-computer interaction.",
    //   tags: ["reflection", "Interaction Design"],
    // },
    // {
    //   id: 5,
    //   slug: "a-visit-to-andon-cafe",
    //   title: "A Visit to Andon Café -- First Café in the World Run by AI",
    //   date: "Aug 20, 2026",
    //   description: "A visit to Andon Café, the first café in the world run by AI.",
    //   tags: ["reflection", "AI Critique"],
    // }
  ],

  // News
  news: [
    { id: 9, date: "Jul 2026", text: "Attending summer school 'AI Dreaming Together' in Shenzhen, by PoliTo and SUSTech." },
    { id: 8, date: "Jun 2026", text: "I had the opportunity to present and volenteer at IMX'26 🥳 with the support by SIGCHI", link: "https://sigchi.org/resources/gary-marsden-travel-awards/recipients/", linkLabel: "Gary Marsden Travel Award"},
    { id: 7, date: "May 2026", text: "Project 'Asking PianoAutomata' has been selected for NAVET Student Festival 2026 with Tekniska!" },
    {
      id: 6,
      date: "Apr 2026",
      text: "Seeking creative practitioners for an",
      link: "https://bucolic-churros-8cbc0b.netlify.app/",
      linkLabel: "online study.",
    },
    { id: 5, date: "Apr 2026", text: "One paper accepted at ACM IMX'26! Will be presenting it in Althone, Ireland." },
    { id: 4, date: "Mar 2026", text: "Got one special recognition for outstanding reviews on CHI'26 posters." },
    { id: 3, date: "Aug 2025", text: "Started my master's study at KTH Royal Institute of Technology." },
    { id: 2, date: "Jun 2025", text: "Received the Lin Fengmian Gold Award for Thesis Project at China Academy of Art." },
    { id: 1, date: "Oct 2024", text: "Poster presentation of TangibleNegotiation at Ubicomp'24, Melbourne." },
    // { id: 6, date: "Mar 2023", text: "Paper accepted at CSCW 2023." },
  ],
};
