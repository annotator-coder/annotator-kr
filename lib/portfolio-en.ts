import type { Project } from './portfolio'

export const projectsEn: Project[] = [
  {
    slug: 'crisis-ai-system',
    title: 'Media Crisis Response AI System',
    category: 'AI · Crisis Management',
    tags: ['AI', 'Automation', 'Node.js', 'Crisis Management', 'PM2'],
    year: '2026',
    tagline: 'From issue detection to response draft — team response time cut by two-thirds',
    description:
      'An AI-based crisis response pipeline that automates media monitoring → severity classification → response message drafting. Built for an energy company\'s PR team as an internal operating system.',
    problem:
      'Speed is everything in a media crisis. The bottleneck was the time from issue detection to approved response message. When issues broke in the middle of the night, a team member had to manually collect articles, assess severity, and write a draft — averaging 90 minutes per incident.',
    approach: [
      'Real-time keyword monitoring via News API + RSS feeds',
      'GPT-based severity classifier (5-level scale, automatic issue type tagging)',
      'RAG pipeline over past response case DB for draft generation',
      'PM2-based server management with Slack notification integration',
    ],
    outcome: [
      'Issue detection to draft generation: 90 min → under 15 min',
      'Eliminated response gaps during nights and weekends',
      'Standardized team crisis response SOP (auto-linked to system)',
    ],
    href: undefined,
    images: [
      {
        src: '/portfolio/crisis-ai-type-select.png',
        caption: '01 Crisis type selection — auto severity classification (BLACK/RED) by 7 crisis types',
      },
      {
        src: '/portfolio/crisis-ai-input-form.png',
        caption: '03 Fact verification level / 04 External spread status — separating confirmed facts from unverified to improve AI draft accuracy',
      },
    ],
    featured: true,
    relatedBlogSlugs: ['ai-pr-crisis'],
  },
  {
    slug: 'oil-map',
    title: 'Crude Oil Import Diversification Interactive Map',
    category: 'Data Visualization',
    tags: ['Data Visualization', 'D3.js', 'Vercel', 'PR Content'],
    year: '2026',
    tagline: 'Complex energy security data, readable at a glance',
    description:
      'An interactive world map visualizing crude oil import source diversification. Used simultaneously for policy briefings and media distribution.',
    problem:
      'Energy security figures existed in vast quantities but were hard for journalists or policy officials to grasp at a glance. There was no tool to intuitively convey the energy security contribution message.',
    approach: [
      'Collected and refined public statistics (KEEI, KNOC)',
      'Built an interactive world map with D3.js (import share by country)',
      'Mobile-responsive design, automated screenshot generation for media distribution',
      'Deployed on Vercel, URL attached to press release distributions',
    ],
    outcome: [
      'Multiple positive responses from journalists upon distribution',
      'Adopted as a standard resource for internal policy briefings',
      'Expanded into follow-up energy statistics dashboard project',
    ],
    href: 'https://oil-map-korea.vercel.app',
    featured: true,
    relatedBlogSlugs: ['data-viz-pr'],
  },
  {
    slug: 'energy-stats',
    title: 'Energy Statistics Dashboard',
    category: 'Data Journalism',
    tags: ['Dashboard', 'Chart.js', 'Vercel', 'Statistics'],
    year: '2026',
    tagline: '37 energy indicators, interactive on a single screen',
    description:
      'An expert-grade dashboard presenting 37 major domestic oil and petroleum statistics as interactive charts. Built for journalist briefings and internal reporting.',
    problem:
      'Energy statistics were scattered across multiple agencies, requiring manual aggregation every time briefing materials were needed. A single reference dashboard with auto-updated data was essential.',
    approach: [
      'Integrated public data from major energy statistics agencies (37 indicators)',
      'Designed a 4-category taxonomy: supply/demand, prices, environment, trade',
      'Built responsive interactive charts with Chart.js',
      'Deployed on Vercel with a weekly data refresh process',
    ],
    outcome: [
      'Briefing material preparation time reduced by 40%',
      'Single link for data provision on journalist inquiries',
      'Adopted as the data source for weekly internal reports',
    ],
    href: 'https://energy-stats-korea.vercel.app',
    featured: true,
    relatedBlogSlugs: ['data-viz-pr'],
  },
  {
    slug: 'pr-dashboard',
    title: 'PR Team Performance Dashboard',
    category: 'Team Operations · Data',
    tags: ['Dashboard', 'KPI', 'Google Sheets', 'Team Operations'],
    year: '2026',
    tagline: 'PR results in numbers: weekly reporting, automated',
    description:
      'An internal dashboard that visualizes real-time progress and quarterly performance across 9 core PR team tasks. Integrated with Google Apps Script.',
    problem:
      'Preparing weekly team reports required 2–3 hours of manually aggregating KPIs scattered across multiple channels. PR performance relied on qualitative judgment, making team alignment difficult.',
    approach: [
      'Defined PR performance metrics (media exposure, content performance, stakeholder response)',
      'Google Sheets data input → Apps Script auto-aggregation',
      'KPI visualization dashboard with weekly auto-updates',
    ],
    outcome: [
      'Weekly report preparation time: 2 hours → 20 minutes',
      'Real-time progress-vs-target sharing improved team alignment',
    ],
    href: undefined,
    featured: false,
    relatedBlogSlugs: ['ceo-message'],
  },
  {
    slug: 'dream-energy-day',
    title: 'Dream Energy Day',
    category: 'CSR · Events',
    tags: ['CSR', 'HTML', 'Vercel', 'JSFC', 'Sports'],
    year: '2026',
    tagline: 'Dedicated event page for a multicultural children\'s CSR program with FC Seoul',
    description:
      'Planning and digital channel buildout for the Dream Energy Day event — a collaboration between an energy company and FC Seoul targeting multicultural children.',
    problem:
      'CSR event brand value was being communicated only through press releases. A digital hub was needed to sustainably showcase the event\'s story and impact.',
    approach: [
      'Developed event branding concept (Energy + Dreams)',
      'Built an interactive HTML event page (planning + timeline + participation info)',
      'Deployed on Vercel, OG image optimized for social sharing',
      'Separate HTML planning document prepared for executive reporting',
    ],
    outcome: [
      'Over 200 social shares on event day',
      '4 articles through media hub tie-in',
      'Used for executive reporting; secured next year\'s budget',
    ],
    href: 'https://dream-energy-day.vercel.app',
    featured: false,
    relatedBlogSlugs: [],
  },
  {
    slug: 'brand-dashboard',
    title: 'Brand Marketing Dashboard',
    category: 'Dashboard · Brand',
    tags: ['Dashboard', 'Vercel', 'API', 'Marketing'],
    year: '2026',
    tagline: 'Real-time visualization of 2026 brand KPIs and campaign performance',
    description:
      'An interactive dashboard for brand marketing KPIs and campaign performance, shareable externally. Integrated with Instagram and LinkedIn APIs.',
    problem:
      'Campaign performance needed to be shared periodically with management and external partners. Instead of rebuilding a PPT each time, a live dashboard accessible anytime was needed.',
    approach: [
      'Integrated social platform metrics APIs (Instagram, LinkedIn)',
      'Designed brand KPI visualization interface',
      'Built Vercel serverless API functions as a data proxy',
    ],
    outcome: [
      'Real-time data access during executive reporting',
      'Single shareable link for external partner communications',
    ],
    href: undefined,
    featured: false,
    relatedBlogSlugs: [],
  },
  {
    slug: 'digital-brochure',
    title: 'Energy Company Digital Brochure',
    category: 'Brand Content',
    tags: ['Brand Journalism', 'HTML', 'Vercel', 'Editorial'],
    year: '2026',
    tagline: 'Bloomberg/FT-style interactive brochure for the energy transition story',
    description:
      'An interactive digital brochure presenting an energy company\'s business overview and new energy transition story in Bloomberg Annual Report style.',
    problem:
      'The existing company introduction was a static PDF. An interactive, brand-journalism-style digital channel was needed to carry the energy transition narrative.',
    approach: [
      'Referenced Bloomberg/FT Annual Report design language',
      'Designed editorial typography + interactive chart combination',
      'Planned section-by-section storytelling structure, built in HTML',
      'Deployed on Vercel, running as an external-sharing URL',
    ],
    outcome: [
      'Adopted as a primary IR and media distribution channel',
      '"I\'ve never seen a brochure like this" — feedback from industry contacts',
    ],
    href: 'https://gs-caltex-brochure-annotator-s-projects.vercel.app',
    featured: false,
    relatedBlogSlugs: [],
  },
  {
    slug: 'ai-reference',
    title: 'PR Team AI Reference',
    category: 'AI · Team Operations',
    tags: ['AI', 'SOP', 'Vercel', 'Prompt Library'],
    year: '2026',
    tagline: 'Web reference for PR team AI usage SOPs and prompt library',
    description:
      'A web reference documenting how the PR team actually uses AI in their work. Includes prompt libraries by task type: press releases, crisis response, and content creation.',
    problem:
      'In the early stages of AI tool adoption, each team member used it differently, creating quality variance. A standardized guide was needed to raise the team\'s overall AI proficiency.',
    approach: [
      'Collected and refined prompts from real work use cases',
      'Documented SOPs by type: press releases, crisis response, SNS, briefings',
      'Built as an interactive web reference (search and copy functionality)',
      'Deployed on Vercel, shared as an internal team URL',
    ],
    outcome: [
      'Team AI usage frequency tripled',
      'Shortened new team member onboarding time',
      'Standardized press release draft quality across the team',
    ],
    href: 'https://ai-reference-ashy.vercel.app',
    featured: false,
    relatedBlogSlugs: ['ai-pr-crisis'],
  },
  {
    slug: 'baduk-project',
    title: 'Go Team Analytics Project',
    category: 'Sports PR · Data',
    tags: ['Sports', 'Data Analysis', 'Vercel', 'Go/Baduk'],
    year: '2026',
    tagline: 'Data-driven analysis report for improving a corporate Go team\'s operations',
    description:
      'An interactive report containing analysis of a corporate Go (Baduk) team\'s operations, a review of AI training adoption, and PR strategy recommendations.',
    problem:
      'There was a need to present the Go team\'s contribution to corporate PR and operational efficiency improvements with data. A persuasive, data-driven format was required for executive reporting.',
    approach: [
      'Collected Go team performance data and benchmarked against other sports teams',
      'Researched AI training adoption cases (Korea Baduk Association, overseas teams)',
      'Visualized as an interactive HTML report',
      'Prepared separate briefing materials for chairman-level presentation',
    ],
    outcome: [
      'Go team operational improvement plan presented to executives',
      'AI training adoption feasibility review completed',
    ],
    href: undefined,
    featured: false,
    relatedBlogSlugs: [],
  },
  {
    slug: 'ai-blog-assistant',
    title: 'AI Blog Assistant',
    category: 'AI · Content Automation',
    tags: ['AI', 'Prompt Engineering', 'Flask', 'Persona Design', 'Content Automation'],
    year: '2026',
    tagline: 'My personal writing partner — trained on 13 years of journalism',
    description:
      'A personal AI assistant that automates the entire Naver Blog, Instagram, and SNS content workflow. Analyzed 59 real posts to distill writing style, sentence patterns, and category structures into a v2.1 guideline, then implemented as a Flask app.',
    problem:
      'Finishing one blog post — from research to photo placement to SNS derivatives — took 2–3 hours. AI made it faster, but the tone didn\'t sound like me. The goal was to make "AI write like me."',
    approach: [
      'Full analysis of 59 published posts — extracted intro patterns, sentence rhythm, and category-specific structural formulas',
      'Designed the Louis persona: journalist writing style + father\'s perspective + PR professional\'s authenticity standards',
      '5-stage automation pipeline: research → draft → photo placement → Naver posting → SNS derivatives',
      'Implemented as a Flask app with category-specific structure formulas (travel, education, culture, books, reflections)',
    ],
    outcome: [
      'Time to complete one blog post: 2–3 hours → under 40 minutes',
      'No "this sounds like AI" feedback — journalist-style inverted pyramid and reporting-based research preserved',
      'Consistent quality maintained across 5 categories × format formulas',
    ],
    href: undefined,
    featured: false,
    relatedBlogSlugs: [],
  },
  {
    slug: 'frog-jump',
    title: 'Sian\'s Frog Jump',
    category: 'Side Project · Development',
    tags: ['Game', 'HTML Canvas', 'JavaScript', 'Side Project'],
    year: '2026',
    tagline: 'A browser game built with AI for my son',
    description:
      'My elementary school son Sian said "Dad, build me a game." A browser game made to prove that even without coding experience, building with AI makes it possible. HTML Canvas + JavaScript, mobile touch support.',
    problem:
      '"Dad, I want you to make me a game." It started with one line from my son. I had no game development experience, but I wanted to experiment with how far I could go with AI as a co-builder.',
    approach: [
      'Designed game mechanics with Claude — jump physics, obstacle generation, difficulty curve',
      'Built with HTML Canvas + Vanilla JS, with mobile touch and tilt support',
      'Applied son\'s favorite frog character, dark forest background, and gold score system',
      'Documented the entire dev process as a 5-episode LinkedIn series: "I Built a Game for My Son"',
    ],
    outcome: [
      'Son\'s first reaction: "Dad, is this real?" — goal achieved',
      'Proved that non-programmers can ship a complete product when building with AI',
    ],
    href: undefined,
    featured: false,
    relatedBlogSlugs: [],
  },
  {
    slug: 'bw-photo-exhibition',
    title: 'B&W Photography Exhibition: Records from the Field',
    category: 'Campaign · Brand Journalism',
    tags: ['Campaign', 'Photo Exhibition', 'AI Video', 'Brand Journalism', 'Integrated Campaign'],
    year: '2025',
    tagline: 'A full-scale integrated campaign planned and produced entirely in-house, without an external agency',
    description:
      'An integrated campaign developed around the message "The most radiant energy is people" for an energy company\'s 58th anniversary. 40 black-and-white photos of frontline workers anchored an online trilingual site (Korean/English/Japanese), an offline touring exhibition (4 venues from Seoul to Yeosu), AI video, gas station media facades, and newspaper ads — all delivered simultaneously. Planning, AI video production, and web development were handled entirely in-house by the PR team.',
    problem:
      'The routine of limiting anniversary communications to press releases and internal events needed to be broken. The challenge was to deliver the message "people\'s energy is hope" both internally and externally — to an industry and region facing hardship — while combining employee pride and industry authenticity in a single campaign.',
    approach: [
      'Designed campaign concept: 40 B&W field worker photos organized under 4 themes — I / You / We / Future',
      'Built the online special site in-house — trilingual (KO/EN/JP), online photo exhibition, AI motion video screening',
      'Planned and operated an online photo exhibition + acrostic poem event linked to the company\'s fuel app',
      'Offline touring exhibition: Seoul HQ (5/12–5/23) → Seoul city gallery (5/25–6/23) → Yeosu cultural venue (6/24–7/25) → Yeosu plant (7/26–8/31)',
      'Deployed 3 gas station media facades, outdoor ads at Yeocheon Station, simultaneous placement in 18 print outlets',
      'Integrated press release distribution and media response management',
    ],
    outcome: [
      'Online site: 15,255 cumulative visits (5/12–7/10)',
      'App event: 38,964 visitors, 2,232 participants',
      'Covered by 73 media outlets including OBS and MTN broadcast',
      '18-outlet newspaper ad placement, outdoor ads and media facades deployed simultaneously',
      'Entire campaign — planning, AI video, web development — executed entirely in-house by the PR team',
    ],
    links: [
      { label: 'Online Photo Exhibition (Media Hub)', url: 'https://gscaltexmediahub.com/gsc-exhibition/?lang=ko' },
      { label: 'Press Release', url: 'https://gscaltexmediahub.com/news/gscaltex-black-and-white-photo-exhibition/' },
      { label: 'The PR Campaign Analysis', url: 'https://www.the-pr.co.kr/news/articleView.html?idxno=53428' },
    ],
    featured: false,
    relatedBlogSlugs: [],
  },
  {
    slug: 'apec-2025-booth',
    title: 'APEC CEO Summit 2025 Exhibition Booth',
    category: 'International Events · Brand Communication',
    tags: ['APEC', 'International Events', 'Booth Operations', 'Global PR', 'Integrated'],
    year: '2025',
    tagline: 'Delivering an energy transition vision directly to global business leaders at APEC CEO Summit',
    description:
      'Operated an "Energy for Sustainable Life" themed exhibition booth at the 2025 APEC CEO Summit (Gyeongju, Oct 28–31) in collaboration with the parent group. A 4×4m space at Gyeongju Arts Center featured large LED facades, 3 beacon-based videos, and a parallel online exhibition — communicating an energy company\'s sustainability vision to Asia-Pacific global leaders.',
    problem:
      'The APEC CEO Summit is a global stage bringing together the top decision-makers of the Asia-Pacific region. More than simple promotion, a content strategy was needed to persuasively show what the company is doing in the energy transition era. The task: make an impact in English, in a 4×4m space.',
    approach: [
      'Set concept "Energy for Sustainable Life" aligned with APEC 2025\'s official theme "Building a Sustainable Tomorrow"',
      'Designed storytelling structure around 3 axes: BX (Business Transformation) / DAX (Digital & AI) / GX (Low-Carbon New Business)',
      'Produced 3 videos (Legacy & New Energy / DAX / Future Plus) using large LED facade, 3-panel interior LED, and beacon devices',
      'Built a parallel online exhibition to extend reach to global audiences who couldn\'t attend in person',
      'Enhanced visitor touchpoints with docent operations and branded merchandise (safety figurines, CCUS education kit)',
      'Approximately 5-week preparation: kickoff (9/25) → content, construction, rehearsal completed (10/27)',
    ],
    outcome: [
      'Energy transition vision delivered directly to Asia-Pacific global business leaders',
      'Covered by Electronic Times, Financial News, Asia Today, and others',
      'Global reach beyond the booth itself secured through the parallel online exhibition',
    ],
    links: [
      { label: 'APEC Online Exhibition', url: 'https://gscaltexmediahub.com/apec2025/#home' },
      { label: 'Press Release', url: 'https://gscaltexmediahub.com/news/gsc-apec-ceo-summit_kr/' },
    ],
    featured: false,
    relatedBlogSlugs: ['apec-2025'],
  },
  {
    slug: 'cpack-pr-system',
    title: '1Pager-Based C-Pack PR System',
    category: 'PR Strategy · System Design',
    tags: ['PR Strategy', 'C-Pack', 'Stakeholders', 'System Design', 'Data PR'],
    year: '2025',
    tagline: '1Pager → C-Pack → Stakeholder — a data-driven strategic PR pipeline',
    description:
      'An integrated PR operating system designed for an energy company\'s PR team, built around the 1Pager format. When a Project Owner drafts a PR blueprint as a 1Pager, related content is bundled into a C-Pack and projected to pre-defined stakeholders. After H1 2025 real-world operation, the system was refined with data for H2.',
    problem:
      'PR activities were fragmented at the press release level. Content on the same topic wasn\'t reaching stakeholders with a consistent message, and there was no system to measure effectiveness.',
    approach: [
      'Designed the 1Pager format — a single-page PR blueprint capturing goals, key messages, expected outcomes, and communication tools',
      'Structured integrated PR with a dual PO (Project Owner) / IO (Item Owner) system',
      'Bundled individual content items into C-Packs and sent to stakeholders in a trackable form',
      'Measured quantitative data (views, read time) alongside qualitative indicators (press coverage, meeting connections)',
      'H2 improvements based on H1 lessons: real-name/anonymous dual-track, 50+ recipients, shifted to deadline-backward scheduling',
    ],
    outcome: [
      'H1: 8 1Pagers, 30+ associated content items produced and operated',
      'Major C-Pack: 155 views, average read time 11 min 34 sec (high engagement vs. simple distribution)',
      'Government ministry working-level meetings secured, multiple press coverage outcomes confirmed',
      'Stakeholder journalist/columnist DB of 80+ contacts built',
    ],
    images: [
      {
        src: '/portfolio/cpack-system-diagram.png',
        caption: 'C-Pack operating system structure: 1Pager → Target PR rollout → Package → Stakeholder projection → Review',
      },
    ],
    featured: false,
    relatedBlogSlugs: [],
  },
  {
    slug: 'ohouse-newsroom',
    title: 'Ohouse Newsroom',
    category: 'Owned Media · Content',
    tags: ['Owned Media', 'Content Strategy', 'Newsroom', 'CMS', 'Storytelling'],
    year: '2022',
    tagline: 'Not a press release archive — a content hub everyone curious about Ohouse comes to',
    description:
      'Planned and launched the first newsroom for an interior design unicorn startup. Designed under the name "Ohstory" with a 3-phase roadmap, assembled a project team without external resources. Grew it into an owned media with 310+ articles and 5,000+ monthly visitors in 18 months, generating 134 tier-1/2 media coverage pieces through 14 flagship content projects.',
    problem:
      'Corporate communications were limited to press releases. Journalists and partners had nowhere to find context and stories behind a single press release, and the company had no channel to speak in its own voice.',
    approach: [
      'Researched domestic and international startup newsrooms, designed the vision, named it "Ohstory" for independent media identity — built Phase 1 (launch) → Phase 2 (original series, collabs) → Phase 3 (Bucketplace integration, lifestyle magazine) roadmap',
      'Served simultaneously as planner, PM, and editor-in-chief — built no-code MVP, CMS, UX, and operations process without external agencies',
      'Systematized 9 content types (Featured Story, Original Series, Trend Report, etc.) and tracked press performance by type',
      'Designed a 4-area dashboard (crisis management, media relations, content, key messages) — quantified team KPIs to multiply impact with a 3-person team',
    ],
    outcome: [
      '310+ articles, 5,000+ monthly visitors 18 months after launch; established as the go-to reference for press and partners',
      '14 flagship content projects, 134 tier-1/2 media coverage pieces (40% increase YoY), newsroom views 2.2x',
      'Established data-driven content formats: CSR, trend reports, search year-in-review, co-growth reports',
    ],
    href: 'https://ohstory.io/',
    featured: false,
    relatedBlogSlugs: ['ohouse-3c-synergy', 'tmon-wemakeprice-crisis'],
  },
  {
    slug: 'lifestyle-trend-report',
    title: 'Lifestyle Search Year-in-Review',
    category: 'Data Journalism · Owned Media',
    tags: ['Data Analysis', 'Trend Report', 'Search Big Data', 'PR Content', 'Lifestyle'],
    year: '2023',
    tagline: 'Korea\'s lifestyle shifts, decoded from hundreds of millions of search queries.',
    description:
      'Collaborated with the search team to analyze one year of in-platform search big data and distributed the "Lifestyle Search Year-in-Review" to media. The goal: just as Zigbang builds authority through real estate data, make Ohouse data the standard reference for lifestyle trends.',
    problem:
      'There was no perception of Ohouse as the definitive source for lifestyle trends. Amid the year-end trend report flood, there was no content leveraging the uniquely Ohouse data.',
    approach: [
      'Partnered with the search team to directly analyze 18 months of search query data — interior style trends, appliance search surges, evolving consumption patterns',
      'Identified 3 trend keywords: Uncommon Style (individual taste), Ilpyeonga-sim (convenience appliance surge), and Gaseongbi+ (modular consumption)',
      'Produced infographics with the design team, simultaneous press release and newsroom Featured Story publication',
    ],
    outcome: [
      'Key 2023 findings: robot vacuum searches up 200x+, Mid-Century Modern declining, Newtro/Classic & Antique rising',
      'Multiple media coverage; laid groundwork for positioning Ohouse data as the lifestyle trend reference',
      'Established a format expandable into quarterly/semi-annual trend reports',
    ],
    links: [
      { label: 'Press Release', url: 'https://ohstory.io/press/pressrelease/10287' },
      { label: 'Search Year-in-Review Story', url: 'https://ohstory.io/featured/10300' },
    ],
    featured: false,
    relatedBlogSlugs: [],
  },
  {
    slug: 'ohouse-oson-doson',
    title: 'Oson-Doson: Small Business Co-Growth Project & Report',
    category: 'Platform Co-Growth · PR Communication',
    tags: ['Co-Growth', 'Small Business', 'Data Report', 'PR Communication', 'Partnership'],
    year: '2022',
    tagline: 'Not words — numbers. A co-growth report tracking 370 small businesses relentlessly.',
    description:
      '"Co-growth" is easy to say. Ohouse decided to prove it with data. Full analysis of transaction data from 370 participating businesses in the O!Son-Doson Market, tracking +31% growth in small furniture sales amid a market contraction (-17%), and surfacing individual business growth stories. This wasn\'t a PR message — it was an image built from facts.',
    problem:
      'As Ohouse grew rapidly, the perception that "big platforms exploit small businesses" was taking root. There were hundreds of partner small businesses growing together with Ohouse, but their story had never been made visible to the outside world.',
    approach: [
      'Full transaction data analysis of 370 O!Son-Doson Market participants (5 months, 15,000+ products) — designed metrics from scratch: per-business transaction change, category growth rates, sole proprietor share',
      'Contextualized comparison with overall market data: identified a -17% market contraction period to present Ohouse\'s +31% small furniture growth figures meaningfully',
      'Tracked individual business trajectories — Carrem Furniture +81%, Furnico +332% — and turned the numbers into human stories ("When the furniture market was struggling, Ohouse was there")',
      'Included O!Goods curated shop performance data, illuminating the platform\'s enabler role from multiple angles',
      'Produced the Oson-Doson Report centered on data infographics and distributed to media (December 2023)',
    ],
    outcome: [
      'O!Son-Doson Market in 5 months: ~KRW 60 billion total revenue, +KRW 22M avg per business, sole proprietor transactions up 55.9%',
      'O!Goods collaboration: 10,000+ mix-and-match bedding sets sold, one partner\'s revenue up 670% in a year',
      'Small furniture content: 1,434 businesses, avg KRW 314M transactions — +31% amid -17% market contraction',
      'Multiple media coverage, "platform-small business co-growth" image established — contributed to Ministry of SMEs and Startups citation recommendation',
    ],
    links: [
      { label: 'Small Furniture Co-Growth Story', url: 'https://ohstory.io/featured/7066' },
    ],
    href: undefined,
    featured: false,
    relatedBlogSlugs: [],
  },
  {
    slug: 'ohouse-original-series',
    title: 'Everything About Housewarming — Original Series',
    category: 'Owned Media · Content',
    tags: ['Original Series', 'Long-form Content', 'Data Journalism', 'Storytelling', 'Community'],
    year: '2023',
    tagline: 'Read 9,000 housewarmings to find the social shifts behind them — a 4-part series.',
    description:
      'A long-form original series deeply analyzing Ohouse\'s largest content asset: online housewarming posts. Structured like a major investigative feature from journalism days — weaving data analysis, expert interviews, and user cases into a 4-part narrative plus 2 appendices. Moved beyond interior content to examine Korean living culture and spatial values in social context.',
    problem:
      'Nobody could properly explain why housewarming content attracted 1.3 million monthly visitors. "People love it" wasn\'t enough. Original content was needed to deeply understand the platform\'s core asset and convey its meaning to readers.',
    approach: [
      'Analyzed 9,000+ housewarming data points; built social context through expert interviews including Prof. Chae Hye-jin at Konkuk University',
      'Found and reported real user cases — from nurse to photo studio founder, from ordinary housewarming writer to published author',
      'Designed reader experience beyond text using web features like before/after and interactive slides',
      '4-part + 2-appendix long form; weekly release over 4 weeks (2023.9.4–9.25)',
    ],
    outcome: [
      '9,000+ housewarmings, 173 years if you visit every weekend, 1.3M+ monthly visitors — conveyed platform scale through story',
      'First to illuminate the cultural backdrop of the domestic home interior market\'s growth from KRW 28T (2016) to KRW 60T (2022)',
      'Proved that corporate content can carry journalism-level social analysis, establishing a precedent within the newsroom',
    ],
    links: [
      { label: 'Ep 1: From Space to Buy to Space to Live', url: 'https://ohstory.io/original/9014' },
      { label: 'Ep 2: Curious Neighbors, A Cross-Section of Korea', url: 'https://ohstory.io/original/7786' },
      { label: 'Ep 3: Two Lives Changed by Housewarming', url: 'https://ohstory.io/original/7811' },
      { label: 'Ep 4: The Evolution and Variations of Housewarming', url: 'https://ohstory.io/original/7893' },
    ],
    images: [
      {
        src: '/portfolio/ohouse-original-cover.png',
        caption: 'ORIGINAL SERIES "Everything About Housewarming" — DIFFERENT LIFE cover',
      },
      {
        src: '/portfolio/ohouse-original-stats.png',
        caption: 'Online Housewarming Overview: 9,000+ posts / 173+ years if visited every weekend / 1.3M+ monthly visitors',
      },
    ],
    featured: true,
    relatedBlogSlugs: ['ohouse-3c-synergy'],
  },
  {
    slug: 'factpl',
    title: 'FactPL: JoongAng Ilbo Tech & Business Newsletter',
    category: 'Vertical Media · Service Planning',
    tags: ['Newsletter', 'Vertical Media', 'PM', 'Homepage Planning', 'IT Journalism'],
    year: '2020',
    tagline: 'We didn\'t make news — we made a service. 20,000 subscribers, 40% open rate.',
    description:
      'A JoongAng Ilbo tech & business newsletter delivering clear analysis of innovative company trends. Joined as a founding member in July 2020 and grew it into a leading IT vertical media with 20,000 subscribers and a 40% open rate. Now integrated into the JoongAng Plus platform.',
    problem:
      'There was no specialized media covering the IT industry in depth. In an era of consuming blockchain, AI, and commerce in a single article, a format with both on-the-ground reporting and report-level analysis was needed. FactPL was oriented as a content service from the start, not just news.',
    approach: [
      'Managed the full service planning cycle: reader persona analysis, GTM design, data analysis',
      'Diversified formats: 10,000-character deep dives, interactive polls (StoryPoll), video season 1',
      'Personally planned the responsive homepage, managed CMS setup, migration, and QA',
      'Iterated based on subscriber data until finding what worked in the market',
    ],
    outcome: [
      '20,000+ newsletter subscribers, 40% average open rate',
      'Monetized as JoongAng Ilbo exclusive paid content, integrated into JoongAng Plus',
      'Established as a major IT vertical media in Korea',
    ],
    href: 'https://www.joongang.co.kr/factpl',
    featured: false,
    relatedBlogSlugs: ['factpl-how-we-work'],
  },
  {
    slug: 'notion-ceo-interview',
    title: 'Notion CEO Ivan Zhao — Korea\'s First Interview',
    category: 'In-Depth Interview · IT Journalism',
    tags: ['Interview', 'Notion', 'IT Journalism', 'Global CEO', 'Productivity Tools'],
    year: '2021',
    tagline: 'Korea\'s first interview with Notion CEO Ivan Zhao — product philosophy and Korea market strategy',
    description:
      'The first Korean media interview with Notion CEO Ivan Zhao. Covered the product\'s origin, all-in-one workspace philosophy, and the story behind explosive growth in the Korean market. A FactPL exclusive.',
    problem:
      'Notion had spread explosively in Korea\'s startup and IT circles, but the founder\'s voice had never been introduced to a Korean audience. A primary-source account of the product philosophy from the CEO himself was needed.',
    approach: [
      'Directly contacted Notion\'s PR team to negotiate and secure a CEO interview',
      'Designed questions around product origin, the all-in-one vs. vertical SaaS debate, and the Korean user surge',
      'Edited for practical insights aligned with the FactPL reader persona (startups, office workers)',
    ],
    outcome: [
      'Korea\'s first exclusive Notion CEO interview published',
      'Recorded the highest open rate and share count of any single FactPL article',
      'Credited as one catalyst for Notion\'s expanded marketing activities in Korea',
    ],
    featured: false,
    relatedBlogSlugs: [],
  },
  {
    slug: 'google-inapp-reform',
    title: 'Google In-App Billing Reform Series',
    category: 'Investigative Journalism',
    tags: ['Investigative Reporting', 'IT Journalism', 'App Market', 'Regulation', 'Monopoly'],
    year: '2020',
    tagline: 'Broke the Google in-app billing story first; drove public debate with 20 articles over 6 months',
    description:
      'A series that first broke the story of Google\'s plan to mandate in-app billing across its app market. Published 20+ consecutive articles over 6 months, igniting domestic app market regulation debate.',
    problem:
      'Google\'s in-app billing mandate was an abuse of platform monopoly power, but Korean app developers feared retaliation and couldn\'t speak out publicly. The market-wide issue needed to be brought into public discourse by an independent reporter.',
    approach: [
      'Secured multiple sources among Korean app developers and startups; pursued exclusive reporting',
      'Analyzed Google\'s in-app billing enforcement timeline and fee structure; visualized findings',
      '6-month consecutive series tracking policy change process',
      'Continuous follow-up reporting on reactions from Korea\'s IT industry, National Assembly, and consumer groups',
    ],
    outcome: [
      '20+ articles over 6 months; first to bring Korea\'s app market monopoly issue into public discourse',
      'Triggered legislative debate — influenced the passage of the App Market Business Act (amendment to the Telecommunications Business Act)',
      'Established FactPL\'s credibility as a core investigative IT media',
    ],
    href: 'https://www.joongang.co.kr/factpl',
    featured: false,
    relatedBlogSlugs: ['factpl-how-we-work'],
  },
  {
    slug: 'factpl-futurebook',
    title: 'FactPL FutureBook: The 90s-Born Founders Are Coming',
    category: 'Vertical Media · Book',
    tags: ['Book', 'In-Depth Reporting', 'Startups', 'IT Journalism', 'Vertical Media'],
    year: '2022',
    tagline: '7 founders born in the 90s, from A to Z — a FactPL deep-dive e-book',
    description:
      'An e-book based on months of in-depth reporting on 7 founders born in the 1990s. Covering Beyond Music, Radish, Classum, Doctoranow, Flotiq, StarsiteTech, and Geekble — their founding vision, team building, and challenges. Team project; personal contribution approximately 20%.',
    problem:
      'It seemed a waste to end the FactPL deep-dive journalism as archived subscription content. A strategy was needed to package a proven series into a book with minimal resources — acquiring new readers and generating secondary revenue.',
    approach: [
      'Directly reported on 7 founders born in the 90s across content, healthcare, education, mobility, food, and logistics',
      'Supplemented each founder\'s section with a VC verification interview — "why did you bet on this team?"',
      'Packaged for FactPL subscribers as a PDF book; distributed externally through Ridibooks',
    ],
    outcome: [
      'ISBN-registered e-book (193 pages) officially published — sold on Ridibooks',
      'Proved the subscription content → book secondary distribution strategy; launched the FactPL PDF Book series',
    ],
    href: 'https://ridibooks.com/books/902000192',
    links: [
      { label: 'Ridibooks purchase page', url: 'https://ridibooks.com/books/902000192' },
    ],
    featured: false,
    relatedBlogSlugs: ['factpl-how-we-work'],
  },
  {
    slug: 'us-china-tech-hegemony',
    title: 'US-China Tech Hegemony: The Future of Semiconductors, AI & Space',
    category: 'In-Depth Journalism',
    tags: ['US-China Relations', 'Semiconductors', 'AI Hegemony', 'Geopolitics', 'In-Depth Reporting'],
    year: '2021',
    tagline: 'Six-part deep-dive on the US-China tech hegemony battle over semiconductors, AI, and space',
    description:
      'A 6-part series deeply analyzing the hegemony competition between the US and China over semiconductor, AI, and space technologies. Examined the geopolitics of technology through the lens of a journalist with an international politics background.',
    problem:
      'Framing the US-China conflict as a simple trade war was dominant. Helping readers understand that semiconductor supply chains, AI leadership, and space infrastructure were the new front lines required a journalist who could read both technology and geopolitics simultaneously.',
    approach: [
      'Interviewed domain experts in semiconductors (TSMC, Samsung, SMIC), AI (GPT, Huawei HiSilicon), and space (Starlink, China\'s Tianling)',
      'Used an international politics background to connect the tech competition to geopolitical context',
      'Produced infographics and export restriction timelines for reader accessibility',
      'Published as a 6-episode series for FactPL newsletter subscribers',
    ],
    outcome: [
      '6-episode series established US-China tech hegemony discourse in Korean IT media for the first time',
      'Highest reader session time of any FactPL series',
      'Series revisited as semiconductor legislation and AI governance became major news',
    ],
    featured: false,
    relatedBlogSlugs: [],
  },
  {
    slug: 'grenfel-data',
    title: 'Our Grenfell',
    category: 'Data Journalism',
    tags: ['Data Journalism', 'R', 'Python', 'Interactive', 'Public Interest Journalism'],
    year: '2017',
    tagline: 'A data series on Seoul\'s fire risk. Won the top prize at the Korean Online Journalism Awards.',
    description:
      'Prompted by the 2017 Grenfell Tower fire in London, a series analyzing large-scale fire risk in Seoul through data. Combined R/Python analysis, an interactive map, visualizations, and video into a multi-format piece that accumulated 500,000+ views.',
    problem:
      'Fire risk information was scattered across statistics and regulations. Listing numbers meant nobody would read it. Citizens needed to be able to check their own neighborhood\'s risk directly, while structural flaws needed to be pinpointed with data.',
    approach: [
      'Led with a "Check Your Neighborhood\'s Fire Risk" interactive Seoul fire risk map as a hook',
      'Collected and analyzed full Seoul fire risk data with R and Python — cross-referenced 3 conditions: poor safety rating + combustible cladding + no sprinklers',
      'Collaborated with data visualization team (Codenamu); PM\'d a 4-person team including designer and developer',
      '3-part series: I. Buildings That Catch Fire Are Different / II. Firetrucks Want to Run / III. The Secret of the 15-Floor Apartment',
    ],
    outcome: [
      '500,000+ cumulative views',
      'Triggered follow-up reporting by other outlets, led to policy discussions',
      '2017 Korean Online Journalism Award — Best Data Journalism (Grand Prize)',
    ],
    href: 'https://www.joongang.co.kr/digitalspecial/199',
    images: [
      {
        src: '/portfolio/grenfel-map.png',
        caption: 'Seoul\'s Potential Grenfell Towers: distribution of buildings with poor safety rating + combustible cladding + no sprinklers',
      },
    ],
    featured: true,
    relatedBlogSlugs: [],
  },
  {
    slug: 'space-likeit',
    title: 'Space LikeIT',
    category: 'Interactive Content',
    tags: ['Interactive', '3D', 'Multimedia', 'UX Planning', 'Digital Special'],
    year: '2018',
    tagline: 'An interactive experience that sends readers on a space journey. 300,000+ experiences.',
    description:
      'Scroll once to rise to actual altitude; tilt your phone and the space image follows. An experiential content piece that lets readers personally book a space trip across 4 packages — from Blue Origin to the Moon.',
    problem:
      'Space stories captivate everyone, but articles don\'t get read to the end. It started with a question: what if readers could feel themselves actually ascending?',
    approach: [
      'On-site interviews with Seattle space startups and Prof. Neil F. Comins; verified with Korea Aerospace Research Institute',
      'Prototyped with Adobe XD; dynamically mapped scroll pixels to real altitude (switching from 1px/10m to 1px/100m past 120km)',
      'Built 4 real space travel packages interactively: Blue Origin (107km), LEO, Lunar trip (384,000km)',
      'Included ISS and orbital debris belt illustrations, rocket stage separation simulation',
      'Mobile tilt feature for space image experience; user name input ticketing → certificate issuance',
      'Produced a space movie quiz as a viral element for marketing',
    ],
    outcome: [
      '300,000+ cumulative experiences',
      'Featured by design and interactive media outlet ditoday — "an indirect experience closer to reality than imagination"',
      'Used as aerospace education material',
      '2018 Korean Online Journalism Award — Best Multimedia Storytelling',
    ],
    href: 'https://www.joongang.co.kr/digitalspecial/419',
    links: [
      { label: 'ditoday feature article', url: 'https://ditoday.com/%EC%9A%B0%EC%A3%BC%EC%97%AC%ED%96%89%EC%9D%84-%EC%B2%B4%ED%97%98%ED%8C%90%EC%9C%BC%EB%A1%9C-%EC%A6%90%EA%B2%A8%EB%B3%B4%EC%9E%90/' },
    ],
    images: [
      {
        src: '/portfolio/space-likeit-ui.png',
        caption: 'Space travel ticketing interface: explore altitude, flight time, and price per package on an interactive orbital map',
      },
    ],
    featured: false,
    relatedBlogSlugs: [],
  },
  {
    slug: 'panmunjom-3d',
    title: 'Panmunjom 3D Interactive Series',
    category: 'Interactive · 3D Journalism',
    tags: ['Three.js', '3D', 'Interactive', 'Digital Special', 'Inter-Korean Summit'],
    year: '2018',
    tagline: 'Published the day before the summit — Panmunjom\'s 65-year history reconstructed in Three.js',
    description:
      'A 3-part interactive journalism series published ahead of the 2018 Inter-Korean Summit. Three.js reconstructed the Panmunjom space; 65 years of history was arranged as a scroll narrative. Followed by a summit day piece and an English global edition.',
    problem:
      'Everyone knew the name Panmunjom, but virtually no one understood its actual layout or 65-year history. The goal — published the day before the 2018 summit — was to let readers directly experience that space.',
    approach: [
      'Built Panmunjom in 3D with Three.js — reproduced actual structures: Freedom House, Panmungak, Military Demarcation Line',
      'Arranged 8 historical chapters from the 1953 armistice to the 2017 defection on a 3D scroll narrative',
      'Produced follow-up pieces for the 3rd (4/27) and 4th (5/26) Inter-Korean Summits',
      'Produced a separate English edition for global audiences',
    ],
    outcome: [
      'Completed a 3-part series: pre-summit (290) → post-summit (293) → English global (295)',
      '3D interactive format conveyed the Panmunjom space and 65-year history with full context',
      'English edition served as an explanatory resource on Korean Peninsula issues for international readers',
      '7th Korean Online Journalism Award — Multimedia Storytelling (Korean Online Editor\'s Association, 2018)',
      'Panmunjom & Two Koreas series: 1.1M+ cumulative PV',
    ],
    href: 'https://www.joongang.co.kr/digitalspecial/290',
    links: [
      { label: 'That Place, Panmunjom (pre-summit)', url: 'https://www.joongang.co.kr/digitalspecial/290' },
      { label: 'That Day, Panmunjom (summit day)', url: 'https://www.joongang.co.kr/digitalspecial/293' },
      { label: 'Panmunjom, History in the Making (English)', url: 'https://www.joongang.co.kr/digitalspecial/295' },
    ],
    featured: false,
    relatedBlogSlugs: [],
  },
  {
    slug: 'roots-two-koreas',
    title: 'One Root, Two Koreas',
    category: 'Data Journalism · Digital Special',
    tags: ['Data Journalism', 'Interactive', 'Inter-Korean Relations', 'Digital Special', 'JoongAng Ilbo'],
    year: '2018',
    tagline: '70 years of division — how different have we become? Data published 3 days before the summit.',
    description:
      'A data journalism project published 3 days before the 2018 Inter-Korean Summit (4/27). Compared the language, economy, population, and culture of North and South Korea after 70 years of division through interactive graphics.',
    problem:
      'With the inter-Korean summit imminent, what readers needed wasn\'t breaking news but context: "how different have we become in 70 years?" The challenge was to bring scattered statistics together into a single interactive piece.',
    approach: [
      'Collected major North-South indicators over 70 years of division — language, economy, population, daily life, military',
      'Structured as interactive comparison graphics with a scroll narrative format',
      'Published 3 days before the summit (4/27) — positioned as a context piece in the news cycle',
    ],
    outcome: [
      'Reader traffic concentrated as a context piece ahead of the summit',
      'Completed the 2018 Inter-Korean Summit digital package alongside the Panmunjom 3D series',
      'Panmunjom & Two Koreas series: 1.1M+ cumulative PV',
    ],
    href: 'https://www.joongang.co.kr/digitalspecial/289',
    links: [
      { label: 'One Root, Two Koreas', url: 'https://www.joongang.co.kr/digitalspecial/289' },
    ],
    featured: false,
    relatedBlogSlugs: [],
  },
  {
    slug: 'furniture-upcycling',
    title: 'Furniture Upcycling Hackathon',
    category: 'CSR · Event Planning',
    tags: ['CSR', 'Event Planning', 'Local Government Collaboration', 'Upcycling', 'Exhibition'],
    year: '2022',
    tagline: '23 pieces of furniture set for the landfill became one-of-a-kind works of art.',
    description:
      'Korea\'s first large-scale furniture upcycling hackathon. Using furniture damaged in transit and slated for disposal, 30+ participants — from elementary students to carpenters — spent two days at a warehouse on Amtae Island, Shinan creating pieces. They were exhibited at Donuimun Museum Village in Seoul, then donated to the community.',
    problem:
      'A Slack message revealed that 1,000+ damaged furniture items would be bulk-discarded from the warehouse. "It\'s such a waste" sparked a proposal. Not a donation-check CSR, but a project rooted in the company\'s own business, with a real story to tell.',
    approach: [
      'Visited the warehouse to assess discarded furniture, found the DECAL cooperative with upcycling experience to kick things off',
      'Chose a former rice warehouse repurposed as a brewery — a space that matched the upcycling ethos',
      '30+ participants — elementary students, carpenters, media artists, street art painters — created 23 pieces over two days',
      'Seoul\'s Donuimun Museum Village exhibition "Ohouse, Life of Tomorrow" (Dec 27, 2022 – Mar 19, 2023) — hackathon works displayed alongside pieces by artists Naul, Hoehwa Yuhi, Kim Kyung-su',
      'After exhibition, all works donated to repurposed school buildings, small libraries, and children\'s welfare facilities in Shinan',
    ],
    outcome: [
      '23 upcycled pieces created — bicycle racks, infinity mirror tables, tidal flat drawer units, all one-of-a-kind',
      'After 3 months of free exhibition, all pieces donated to Shinan; proved the value of resource circulation through story',
      'Introduced in media as Korea\'s first large-scale furniture upcycling hackathon; established as the company\'s first CSR case',
    ],
    href: 'https://ohstory.io/featured/4525',
    links: [
      { label: 'Hackathon video', url: 'https://youtu.be/u1AnyMYSPqo?si=Pb8hLbrChFi3iFRP' },
      { label: 'Exhibition page', url: 'https://ohstory.io/featured/5078' },
      { label: 'Newsroom press release', url: 'https://ohstory.io/press/pressrelease/5562' },
    ],
    featured: false,
    relatedBlogSlugs: [],
  },
  {
    slug: 'anger-king',
    title: 'Anger King / Ask a Pro',
    category: 'Video Content · Service Planning',
    tags: ['YouTube', 'Video Planning', 'Solutions Journalism', 'Community', 'New Media'],
    year: '2019',
    tagline: 'Solutions journalism layered onto news; internet community memes turned into a format',
    description:
      'Led a video unit in an in-house new business incubation team. Started with solutions journalism-based "Anger King," then pivoted to "Ask a Pro" using DC Inside memes.',
    problem:
      'News video rarely went beyond reading a text article aloud. The gap between what YouTube users actually wanted and what media was delivering was enormous. The challenge: build a format that both preserved journalistic value and was actually consumed on the platform.',
    approach: [
      'Analyzed the YouTube content market; directly met with Google/YouTube teams for consulting',
      'Planned and produced the "Anger King" series format; led a team of 2 reporters and 6 video interns',
      'Pivoted after 6 months: partnered with DC Inside to launch community meme-based "Ask a Pro" series',
      'This experience directly fed into producing FactPL Video Season 1',
    ],
    outcome: [
      '6,000 YouTube subscribers acquired in 6 months',
      'Converted internet community memes into an entertainment news format; internalized platform grammar',
      'Connected to FactPL Video Season 1 production',
    ],
    href: undefined,
    featured: false,
    relatedBlogSlugs: [],
  },
  {
    slug: 'blood-donor-dog-edge',
    title: 'Blood Donor Dog Edge — A Detection Dog\'s Letter',
    category: 'Public Interest Journalism',
    tags: ['Public Interest', 'First-Person Narrative', 'Animal Welfare', 'Social Change', 'Detection Dog'],
    year: '2012',
    tagline: 'One article written from a detection dog\'s perspective — led to SBS broadcast, a children\'s book, and a national Hyundai campaign',
    description:
      'The story of Edge, a Labrador Retriever who served 9 years — first as a drug detection dog, then as a blood donor dog. Discovered during a visit to Seoul National University veterinary hospital; written from Edge\'s first-person perspective. Generated 100+ adoption applications, SBS Animal Farm coverage, a children\'s book publication, and eventually a Hyundai Motor nationwide blood donor dog campaign.',
    problem:
      'Blood donor dogs existed but were almost unknown to the public. A data-heavy, institutional article wouldn\'t move readers emotionally. Telling the story through the eyes of one aging dog facing euthanasia could simultaneously convey the institutional problem and deliver genuine emotion.',
    approach: [
      'Stumbled upon Edge\'s story during a vet interview at Seoul National University\'s animal hospital; developed it into an exclusive feature',
      'Chose first-person narration from Edge\'s perspective instead of conventional 3rd-person reporting — from detection dog training to blood donation service',
      'Added "will be euthanized without an adopter" in the postscript to directly prompt reader action',
      'Published 2 follow-up pieces after successful adoption — responses included a primary school student\'s cash donation, a former National Assembly member, and an overseas consulate',
    ],
    outcome: [
      'Hundreds of adoption inquiries after publication; 100+ formal adoption applications received',
      'SBS Animal Farm broadcast — nationwide awareness of blood donor dogs',
      'Children\'s book "Blood Donor Dog Edge" published — wrote the foreword',
      'Starting point of the blood donor dog public discourse that led to Hyundai Motor\'s nationwide pet blood donor car campaign (2019)',
    ],
    links: [
      { label: '"Looking for an owner to save me" (2012.01.25)', url: 'https://www.joongang.co.kr/article/7201014' },
      { label: '"Edge is happy" (2012.02.01)', url: 'https://www.joongang.co.kr/article/7256111' },
      { label: '"Edge got a sibling and a dad" (2012.02.14)', url: 'https://www.joongang.co.kr/article/7360968' },
      { label: 'Children\'s book "Blood Donor Dog Edge" (Kyobo)', url: 'https://product.kyobobook.co.kr/detail/S000001007657' },
    ],
    featured: false,
    relatedBlogSlugs: ['blood-donor-dog-edge-story'],
  },
  {
    slug: 'mingalaba-myanmar',
    title: 'Mingalaba! Myanmar — On-the-Ground Report After the Historic Election',
    category: 'Field Reporting · International Journalism',
    tags: ['International Reporting', 'Field Report', 'Democratization', 'Myanmar', 'Aung San Suu Kyi'],
    year: '2015',
    tagline: 'Stayed in Yangon for two weeks right after the election that ended 53 years of military rule — determined to meet Aung San Suu Kyi',
    description:
      'Traveled to Yangon immediately after Myanmar\'s historic election of November 8, 2015 (NLD landslide, end of 53 years of military rule) and stayed for over two weeks. Set out to meet Aung San Suu Kyi, covering slums, NLD headquarters, the stock exchange, and youth cafes along the way. Published as a 4-part series.',
    problem:
      'Myanmar felt psychologically distant to Korean readers. Yet it shared Korea\'s history: colonialism, military dictatorship, democracy movements, and geopolitical significance. At the moment the world\'s attention was fixed on the post-election period, there was a need to simultaneously convey the context of democratization and the economic reality on the ground.',
    approach: [
      'Field assignment to Yangon immediately after the election; stayed 2+ weeks accumulating multi-layer interviews',
      'Built a diverse source base: NLD Central Committee members, ruling party officials, slum residents, young journalists, doctors, and business people',
      'Exclusive interview with the President of Myanmar Statistical Association (former Vice Chancellor of Yangon University of Economics) for in-depth coverage of economic reform agenda',
      'Structured the planning around 3 axes: democratization history (8888 Uprising, 1990 election nullification), economic structure (Crony system), and geopolitics (US-China proxy contest)',
      'Captured the impact of SNS and smartphone proliferation on the election through young local voices',
    ],
    outcome: [
      '4-part series published simultaneously in JoongAng Ilbo print and online (December 2015)',
      'First in-depth delivery of Myanmar\'s democratization context to Korean readers from the post-election field',
      'Vivid local expressions like "Amay Su (our mother Suu)" secured reader empathy',
    ],
    links: [
      { label: 'Youth on the street: "We voted trusting Amay Su"', url: 'https://www.joongang.co.kr/article/19181059' },
      { label: '"World\'s factory" candidate Myanmar — Crony reform on the agenda', url: 'https://www.joongang.co.kr/article/19188821' },
      { label: 'Interview with Myanmar Statistics Association President', url: 'https://www.joongang.co.kr/article/19188822' },
      { label: '"We won\'t fail like the Arab Spring" — Yangon youth', url: 'https://www.joongang.co.kr/article/19215436' },
    ],
    featured: false,
    relatedBlogSlugs: [],
  },
]

export function getProjectEnBySlug(slug: string): Project | undefined {
  return projectsEn.find((p) => p.slug === slug)
}

export function getFeaturedProjectsEn(): Project[] {
  return projectsEn.filter((p) => p.featured)
}
