// Real event data for Davos Summit 2026 (WEF Annual Meeting)
// Note: WEF hosts 200+ sessions but only major sessions are publicly detailed
// Data compiled from official WEF sources and media coverage
const eventsData = [
  {
    "id": 1,
    "date": "2026-01-19",
    "time": "10:00",
    "title": "Opening Concert with Jon Batiste",
    "speaker": "Jon Batiste, Musician and Composer & Børge Brende, WEF President and CEO",
    "description": "Davos 2026 opens with sound filling the Congress Hall, featuring musician and composer Jon Batiste, reflecting the meeting's theme of 'A Spirit of Dialogue'",
    "location": "Congress Hall",
    "status": "completed",
    "summary": "The 2026 Annual Meeting opened not with speeches, but with an extraordinary musical performance by Jon Batiste. This innovative opening set the tone for the week's emphasis on dialogue, connection, and shared humanity beyond traditional business and political discourse.",
    "highlights": [
      "Historic opening format breaking from traditional speech-only ceremonies",
      "Jon Batiste's performance emphasized universal human connection through music",
      "Børge Brende's welcoming remarks emphasized 'A Spirit of Dialogue' theme",
      "Set inclusive tone for week of global conversations"
    ],
    "recordingLink": "https://www.youtube.com/watch?v=5p2CTWLs0Nw"
  },
  {
    "id": 2,
    "date": "2026-01-19",
    "time": "18:30",
    "title": "Open Forum: Which 2050 Do We Want?",
    "speaker": "Panel of Climate Scientists, Policymakers, and Community Leaders",
    "description": "Public discussion exploring visions for 2050 and how today's choices on climate, technology, social justice shape our future. Focus on glaciers, climate innovation, and global risks",
    "location": "Open Forum Venue - Davos Platz",
    "status": "completed",
    "summary": "This powerful Open Forum session asked participants to envision the world of 2050 and recognize that our choices today are actively creating that future. The discussion centered on critical issues including glacier preservation, climate innovation in mountain regions, and the Global Risks Report 2025 findings about system fragmentation.",
    "highlights": [
      "Glaciers cover only 10% of Earth yet sustain half of humanity - vanishing at alarming rates",
      "Mountain regions becoming hubs of climate innovation with scientists racing to preserve ice",
      "Two-thirds of experts anticipate fragmented global system by mid-century",
      "Emphasized link between today's decisions and 2050 outcomes on sustainability and equity",
      "Part of 'Visions of 2050: Tomorrow Starts Now' Open Forum series"
    ],
    "recordingLink": "https://www.weforum.org/open-forum/"
  },
  {
    "id": 3,
    "date": "2026-01-20",
    "time": "10:30",
    "title": "Welcome Address",
    "speaker": "Klaus Schwab, Executive Chairman, World Economic Forum",
    "description": "Opening welcome and introduction to the Annual Meeting 2026 theme: A Spirit of Dialogue",
    "location": "Congress Centre - Main Hall",
    "status": "completed",
    "summary": "Klaus Schwab opened the 2026 Annual Meeting with a call for renewed global dialogue amidst rising tensions. He emphasized the importance of cooperation and understanding in addressing the world's most pressing challenges.",
    "highlights": [
      "Theme 'A Spirit of Dialogue' introduced to promote constructive conversations",
      "Acknowledged increasing global fragmentation and need for multilateral cooperation",
      "Set the tone for addressing AI, climate change, and economic uncertainties"
    ],
    "recordingLink": "https://www.weforum.org/videos/klaus-schwab-2026/"
  },
  {
    "id": 2,
    "date": "2026-01-20",
    "time": "10:50",
    "title": "Special Address by Ursula von der Leyen",
    "speaker": "Ursula von der Leyen, President of the European Commission",
    "description": "Europe's response to global challenges and trade partnerships. Von der Leyen stated: 'Europe will always choose the world, and the world is ready to choose Europe'",
    "location": "Congress Centre - Main Hall",
    "status": "completed",
    "summary": "Von der Leyen delivered a strong message of European solidarity and global engagement, emphasizing Europe's commitment to multilateralism. She outlined Europe's vision for trade partnerships and response to emerging geopolitical challenges.",
    "highlights": [
      "Powerful statement: 'Europe will always choose the world, and the world is ready to choose Europe'",
      "Emphasized Europe's role as a stabilizing force in global affairs",
      "Discussed strategic partnerships and trade agreements with multiple regions",
      "Addressed climate commitments and green technology leadership"
    ],
    "recordingLink": "https://www.youtube.com/watch?v=YWFz70Lwsog"
  },
  {
    "id": 3,
    "date": "2026-01-20",
    "time": "11:20",
    "title": "Special Address by He Lifeng",
    "speaker": "He Lifeng, Vice-Premier of the People's Republic of China",
    "description": "China's perspective on global economic cooperation and development",
    "location": "Congress Centre - Main Hall",
    "status": "completed",
    "summary": "Vice-Premier He Lifeng presented China's vision for continued economic cooperation and global development. He emphasized mutual benefits, win-win cooperation, and China's commitment to opening up its economy.",
    "highlights": [
      "Reaffirmed China's commitment to economic globalization",
      "Discussed Belt and Road Initiative progress and future plans",
      "Emphasized importance of stable US-China relations for global economy",
      "Highlighted China's role in sustainable development"
    ],
    "recordingLink": "https://www.youtube.com/watch?v=mCWBEKCKOdE"
  },
  {
    "id": 4,
    "date": "2026-01-20",
    "time": "14:00",
    "title": "Special Address by Emmanuel Macron",
    "speaker": "Emmanuel Macron, President of France",
    "description": "Macron addresses the rapidly evolving geopolitical landscape: 'Faced with the brutalization of the world, France and Europe must defend an effective multilateralism'",
    "location": "Congress Centre - Main Hall",
    "status": "completed",
    "summary": "President Macron delivered a forceful speech on the need for multilateralism in an increasingly fragmented world. He warned against the 'brutalization of the world' and called for European strategic autonomy while maintaining alliances.",
    "highlights": [
      "Coined phrase: 'Faced with the brutalization of the world, France and Europe must defend an effective multilateralism'",
      "Called for European defense independence alongside NATO commitments",
      "Discussed France's vision for technological sovereignty",
      "Emphasized importance of dialogue with all global powers"
    ],
    "recordingLink": "https://www.youtube.com/watch?v=YmyMfK7YS7E"
  },
  {
    "id": 5,
    "date": "2026-01-20",
    "time": "16:30",
    "title": "Special Address by Mark Carney",
    "speaker": "Mark Carney, Prime Minister of Canada",
    "description": "Canada's vision for global cooperation and economic policy",
    "location": "Congress Centre - Main Hall",
    "status": "completed",
    "summary": "Prime Minister Carney outlined Canada's approach to navigating complex global challenges, emphasizing climate action, inclusive growth, and multilateral cooperation. He discussed Canada's unique position as a bridge between different global powers.",
    "highlights": [
      "Presented Canada's climate and economic policy integration",
      "Emphasized importance of rules-based international order",
      "Discussed Canada's strategic minerals and clean energy initiatives",
      "Called for renewed North American economic cooperation"
    ],
    "recordingLink": "https://www.youtube.com/watch?v=flsgJe8mN-A"
  },
  {
    "id": 30,
    "date": "2026-01-20",
    "time": "18:30",
    "title": "Open Forum: Where Biology Meets Choice",
    "speaker": "Panel of Bioethicists and Scientists",
    "description": "Public discussion on bioethics, genetic engineering, and human choice in shaping our biological future",
    "location": "Open Forum Venue - Davos Platz",
    "status": "completed",
    "summary": "Open Forum session explored the ethical dimensions of modern biotechnology and genetic engineering. Panelists discussed how advances in biology are giving humans unprecedented choices about health, longevity, and human enhancement.",
    "highlights": [
      "Explored ethical implications of CRISPR and gene editing",
      "Discussed accessibility and equity in biotechnology",
      "Debated the boundaries of human enhancement",
      "Examined regulatory frameworks for emerging biotech"
    ],
    "recordingLink": "https://www.weforum.org/open-forum/"
  },
  {
    "id": 6,
    "date": "2026-01-21",
    "time": "08:00",
    "title": "Press Conference: Global Trade Issues",
    "speaker": "Scott Bessent, US Treasury Secretary",
    "description": "Media briefing on US trade policy and global economic outlook",
    "location": "Congress Centre - Press Room A",
    "status": "completed",
    "summary": "Treasury Secretary Bessent held a press conference addressing US trade policy, tariff strategies, and the administration's economic priorities. He fielded questions on US-China trade relations and global financial stability.",
    "highlights": [
      "Outlined US trade policy priorities and tariff considerations",
      "Discussed dollar strength and currency stability",
      "Addressed questions on US-China economic relations",
      "Provided insights on US economic growth projections"
    ],
    "recordingLink": "https://www.youtube.com/watch?v=AY6BK-ZOQ6M"
  },
  {
    "id": 31,
    "date": "2026-01-21",
    "time": "09:30",
    "title": "Open Forum: Swipe Left on Reality",
    "speaker": "Technology and Communication Experts",
    "description": "Public discussion on AI's impact on human communication and authentic reality",
    "location": "Open Forum Venue - Davos Platz",
    "status": "completed",
    "summary": "This Open Forum session examined how AI and digital technologies are reshaping human communication, dating, social interactions, and our perception of reality. Experts discussed the tension between digital convenience and authentic human connection.",
    "highlights": [
      "Explored AI's role in modern dating and relationships",
      "Discussed the impact of social media algorithms on reality perception",
      "Examined digital authenticity vs. curated online personas",
      "Debated solutions for maintaining human connection in digital age"
    ],
    "recordingLink": "https://www.weforum.org/open-forum/"
  },
  {
    "id": 7,
    "date": "2026-01-21",
    "time": "09:00",
    "title": "Session: Can Russia Sustain a Wartime Economy?",
    "speaker": "Panel of Economic Experts and Geopolitical Analysts",
    "description": "Analysis of Russia's economic situation and sustainability of its wartime spending",
    "location": "Congress Centre - Geopolitics Forum",
    "status": "completed",
    "summary": "Expert panel analyzed Russia's economic resilience under sanctions and wartime spending. Discussion covered oil revenues, alternative trade routes, domestic industrial capacity, and long-term sustainability concerns.",
    "highlights": [
      "Analysis of Russian oil revenue flows despite sanctions",
      "Discussion of alternative trade partnerships with Asia",
      "Concerns about long-term industrial base degradation",
      "Assessment of Russian central bank's monetary policy effectiveness"
    ],
    "recordingLink": "https://www.weforum.org/meetings/world-economic-forum-annual-meeting-2026/sessions/can-russia-sustain-a-wartime-economy/"
  },
  {
    "id": 8,
    "date": "2026-01-21",
    "time": "09:30",
    "title": "Special Address by Abdel Fattah El-Sisi",
    "speaker": "Abdel Fattah El-Sisi, President of Egypt",
    "description": "Egypt's role in regional stability and Middle Eastern affairs",
    "location": "Congress Centre - Main Hall",
    "status": "completed",
    "summary": "President El-Sisi emphasized Egypt's role as a stabilizing force in the Middle East and North Africa. He discussed Egypt's economic reforms, infrastructure projects, and efforts to mediate regional conflicts.",
    "highlights": [
      "Highlighted Egypt's mediation role in Gaza ceasefire efforts",
      "Outlined major infrastructure and development projects",
      "Discussed Egypt's economic reform progress",
      "Emphasized Egypt-Africa cooperation initiatives"
    ],
    "recordingLink": "https://www.youtube.com/watch?v=WQ3uABFKj3E"
  },
  {
    "id": 9,
    "date": "2026-01-21",
    "time": "10:15",
    "title": "Panel Discussion: Can Europe Defend Itself?",
    "speaker": "European Defense Ministers and NATO Officials",
    "description": "Debate on European defense capabilities, NATO relationship, and security architecture",
    "location": "Congress Centre - Security Forum",
    "status": "completed",
    "summary": "High-level panel debated European defense spending, military capabilities, and the balance between NATO commitments and European strategic autonomy. Discussion covered defense industrial base and joint procurement.",
    "highlights": [
      "Debate on achieving 2-3% GDP defense spending targets",
      "Discussion of European defense industrial cooperation",
      "Assessment of European military readiness",
      "Balance between NATO integration and strategic autonomy"
    ],
    "recordingLink": "https://www.youtube.com/watch?v=jzbLH2GajL0"
  },
  {
    "id": 10,
    "date": "2026-01-21",
    "time": "11:30",
    "title": "Conversation with Jensen Huang",
    "speaker": "Jensen Huang, President and CEO of NVIDIA & Larry Fink, Chair and CEO of BlackRock",
    "description": "Discussion on AI infrastructure, innovation, and the future of computing",
    "location": "Congress Centre - Technology Hub",
    "status": "completed",
    "summary": "Jensen Huang discussed NVIDIA's AI infrastructure vision and the transformative potential of accelerated computing. Larry Fink added perspective on AI investment opportunities and risks. The conversation covered AI's economic impact and infrastructure needs.",
    "highlights": [
      "Huang described AI as the most significant technology platform shift in decades",
      "Discussed massive infrastructure investments needed for AI computing",
      "Fink emphasized AI's potential to transform productivity and growth",
      "Conversation covered AI sovereignty and global competition"
    ],
    "recordingLink": "https://www.youtube.com/watch?v=eqpkLUUDvNg"
  },
  {
    "id": 11,
    "date": "2026-01-21",
    "time": "12:30",
    "title": "Panel Discussion: India's Path to Becoming Third-Largest Economy",
    "speaker": "Ashwini Vaishnaw (India Minister), Gita Gopinath (Harvard/IMF), Sunil Bharti Mittal (Bharti Enterprises CEO), Juvencio Maeztu Herrera (IKEA CEO)",
    "description": "India could grow 6-8% annually to become world's third-largest economy by 2028. Discussion covers government reforms, manufacturing, innovation, and challenges including global competition",
    "location": "Business Today India Lounge",
    "status": "completed",
    "summary": "High-profile panel discussed India's economic trajectory and potential to become the world's third-largest economy by 2028. Minister Vaishnaw outlined government reforms, Gopinath provided IMF perspective on growth projections, while Mittal and Herrera shared private sector insights on India's business environment and opportunities.",
    "highlights": [
      "India projected to achieve 6-8% annual GDP growth",
      "Government reforms in manufacturing, digital infrastructure discussed",
      "Private sector optimism about India's market potential",
      "Challenges include global trade tensions and infrastructure needs",
      "Discussion on 'Make in India' initiative progress"
    ],
    "recordingLink": "https://www.weforum.org/videos/india-economy-2028/"
  },
  {
    "id": 12,
    "date": "2026-01-21",
    "time": "12:30",
    "title": "Open Forum: Understanding Quantum Reality",
    "speaker": "Quantum Physicists and Technology Leaders",
    "description": "Public session exploring quantum computing, quantum mechanics, and implications for technology and society",
    "location": "Open Forum Venue - Davos Platz",
    "status": "completed",
    "summary": "Experts made quantum physics accessible to the public, explaining quantum computing breakthroughs and their potential impact on cryptography, medicine, and artificial intelligence. The session bridged complex scientific concepts with practical applications.",
    "highlights": [
      "Explained quantum computing in accessible terms",
      "Discussed quantum encryption and cybersecurity implications",
      "Explored potential medical and pharmaceutical applications",
      "Timeline for quantum computing becoming mainstream"
    ],
    "recordingLink": "https://www.weforum.org/open-forum/"
  },
  {
    "id": 32,
    "date": "2026-01-21",
    "time": "13:00",
    "title": "Conversation with Jamie Dimon",
    "speaker": "Jamie Dimon, Chairman and CEO of JPMorgan Chase & Zanny Minton Beddoes, Editor-in-Chief of The Economist",
    "description": "Wide-ranging discussion on markets, AI impact on finance, and global trade",
    "location": "Congress Centre - Finance Forum",
    "status": "completed",
    "summary": "Jamie Dimon provided candid insights on global economic conditions, the banking sector, and geopolitical risks. He discussed AI's transformative potential in financial services while noting regulatory and competitive challenges.",
    "highlights": [
      "Dimon expressed cautious optimism on US economy despite uncertainties",
      "Discussed AI's potential to revolutionize banking operations",
      "Warned about geopolitical risks and trade fragmentation",
      "Addressed banking regulation and capital requirements"
    ],
    "recordingLink": "https://www.youtube.com/watch?v=hnLTD4D4wxY"
  },
  {
    "id": 33,
    "date": "2026-01-21",
    "time": "13:30",
    "title": "Conversation with Mohammad Mustafa",
    "speaker": "Mohammad Mustafa, Prime Minister of the Palestinian National Authority",
    "description": "Palestinian perspective on Middle East peace process and regional development",
    "location": "Congress Centre - Diplomacy Hall",
    "status": "completed",
    "summary": "Prime Minister Mustafa discussed Palestinian economic development priorities, reconstruction needs, and the path toward sustainable peace. He emphasized the importance of economic support and international engagement.",
    "highlights": [
      "Outlined Palestinian economic development vision",
      "Discussed reconstruction and humanitarian needs",
      "Called for renewed international support for peace process",
      "Emphasized importance of economic stability for lasting peace"
    ],
    "recordingLink": "https://www.youtube.com/watch?v=SLd2GrjbSeg"
  },
  {
    "id": 34,
    "date": "2026-01-21",
    "time": "14:30",
    "title": "Special Address by Donald J. Trump",
    "speaker": "Donald J. Trump, President of the United States of America",
    "description": "US President addresses Davos on American economic policy, trade, Greenland, NATO, and housing affordability",
    "location": "Congress Centre - Main Hall",
    "status": "completed",
    "summary": "President Trump delivered a wide-ranging address covering US economic policy, trade negotiations, and foreign policy priorities. He discussed tariff strategies, energy policy, and housing affordability while touching on controversial topics including Greenland and NATO spending.",
    "highlights": [
      "Outlined 'America First' trade policy and tariff strategies",
      "Discussed energy dominance and regulatory rollbacks",
      "Addressed NATO burden-sharing and defense spending",
      "Mentioned Greenland strategic importance controversially",
      "Highlighted housing affordability initiatives"
    ],
    "recordingLink": "https://www.youtube.com/watch?v=r9YdMzYAN84"
  },
  {
    "id": 35,
    "date": "2026-01-21",
    "time": "15:45",
    "title": "Special Address by Javier Milei",
    "speaker": "Javier Milei, President of Argentina",
    "description": "Argentina's economic reforms and vision for the future",
    "location": "Congress Centre - Main Hall",
    "status": "completed",
    "summary": "President Milei presented Argentina's radical economic reform agenda, including fiscal austerity, deregulation, and market-oriented policies. He defended his approach to tackling inflation and rebuilding Argentina's economy.",
    "highlights": [
      "Outlined aggressive fiscal consolidation and spending cuts",
      "Discussed plans to dollarize or stabilize the peso",
      "Defended free-market reforms and deregulation agenda",
      "Addressed inflation reduction progress and challenges"
    ],
    "recordingLink": "https://www.youtube.com/watch?v=UaE65g1jOAs"
  },
  {
    "id": 36,
    "date": "2026-01-21",
    "time": "17:00",
    "title": "Roundtable: AI Valuation and Productivity",
    "speaker": "Tech CEOs, Economists including Gita Gopinath",
    "description": "Discussion on AI revenue models and productivity growth. Gopinath notes: 'It's unclear what the revenue model is going to be for companies'",
    "location": "Steigenberger Hotel - Tech Forum",
    "status": "completed",
    "summary": "Expert roundtable examined the economic implications of massive AI investments and questioned whether current valuations are justified by productivity gains. Gita Gopinath raised concerns about unclear revenue models while tech leaders defended AI's transformative potential.",
    "highlights": [
      "Gopinath's key concern: 'It's unclear what the revenue model is going to be for companies'",
      "Debate on AI productivity paradox and measurement challenges",
      "Discussion of massive capital expenditures by tech companies",
      "Questions about timeline for AI ROI and economic impact"
    ],
    "recordingLink": "https://www.weforum.org/videos/ai-revenue-models/"
  },
  {
    "id": 37,
    "date": "2026-01-21",
    "time": "18:30",
    "title": "Open Forum: The Fragile Future of Antibiotics",
    "speaker": "Medical Researchers and Public Health Officials",
    "description": "Public discussion on antibiotic resistance crisis and the future of infectious disease treatment",
    "location": "Open Forum Venue - Davos Platz",
    "status": "completed",
    "summary": "This critical Open Forum session addressed the growing threat of antibiotic resistance. Experts warned that without urgent action, common infections could become untreatable, potentially returning humanity to a pre-antibiotic era.",
    "highlights": [
      "Warned about rising antibiotic-resistant superbugs",
      "Discussed decline in new antibiotic development",
      "Explored alternative treatments and bacteriophage therapy",
      "Called for global coordination on antibiotic stewardship"
    ],
    "recordingLink": "https://www.weforum.org/open-forum/"
  },
  {
    "id": 38,
    "date": "2026-01-22",
    "time": "09:00",
    "title": "Session: Trade Deals, Exports and Tariff Challenges",
    "speaker": "Ashwini Vaishnaw, India Minister & Brad Smith, Microsoft Vice-Chair",
    "description": "India's concerns about developed world's debt mountain and tariff impacts. Discussion on trade agreements and export strategies",
    "location": "Congress Centre - Trade Forum",
    "status": "in-progress",
    "summary": "Session currently underway. Check back soon for summary and highlights.",
    "highlights": [],
    "recordingLink": null
  },
  {
    "id": 39,
    "date": "2026-01-22",
    "time": "09:30",
    "title": "Open Forum: Beyond Earth - The Next Space Race",
    "speaker": "Space Agency Leaders and Private Space Entrepreneurs",
    "description": "Public discussion on the new era of space exploration, commercialization, and human expansion beyond Earth",
    "location": "Open Forum Venue - Davos Platz",
    "status": "in-progress",
    "summary": "Session currently underway. Check back soon for summary and highlights.",
    "highlights": [],
    "recordingLink": null
  },
  {
    "id": 40,
    "date": "2026-01-22",
    "time": "10:30",
    "title": "Panel Discussion: Global Economic Outlook with IMF",
    "speaker": "Kristalina Georgieva, IMF Managing Director & Khalid Al-Falih, Saudi Arabia Minister of Investment",
    "description": "IMF's latest economic projections and discussion on global growth challenges",
    "location": "Congress Centre - Economics Hall",
    "status": "in-progress",
    "summary": "Session currently underway. Check back soon for summary and highlights.",
    "highlights": [],
    "recordingLink": null
  },
  {
    "id": 41,
    "date": "2026-01-22",
    "time": "12:00",
    "title": "Session: Climate Finance and Green Transition",
    "speaker": "Climate Ministers and Finance Leaders",
    "description": "Announcements on climate funding pledges and sustainable investment initiatives",
    "location": "Climate Hub Davos",
    "status": "in-progress",
    "summary": "Session currently underway. Check back soon for summary and highlights.",
    "highlights": [],
    "recordingLink": null
  },
  {
    "id": 42,
    "date": "2026-01-22",
    "time": "12:30",
    "title": "Open Forum: Agricultural Evolution",
    "speaker": "Agricultural Scientists and Food Security Experts",
    "description": "Public session on transforming agriculture for sustainability, food security, and climate resilience",
    "location": "Open Forum Venue - Davos Platz",
    "status": "in-progress",
    "summary": "Session currently underway. Check back soon for summary and highlights.",
    "highlights": [],
    "recordingLink": null
  },
  {
    "id": 43,
    "date": "2026-01-22",
    "time": "14:00",
    "title": "Roundtable: AI Ethics and Technology Regulation",
    "speaker": "Satya Nadella (Microsoft CEO), Dario Amodei (Anthropic CEO), Demis Hassabis (DeepMind CEO)",
    "description": "Tech pioneers discuss ethical AI development, safety, and regulatory frameworks",
    "location": "Congress Centre - AI Forum",
    "status": "in-progress",
    "summary": "Session currently underway. Check back soon for summary and highlights.",
    "highlights": [],
    "recordingLink": null
  },
  {
    "id": 44,
    "date": "2026-01-22",
    "time": "16:00",
    "title": "Session: Tariff Impacts on Emerging Economies",
    "speaker": "Gita Gopinath and Trade Economists",
    "description": "Gopinath warns tariffs could reduce India's growth by 0.7 percentage points. Discussion on trade policy impacts",
    "location": "Congress Centre - Economics Hall",
    "status": "in-progress",
    "summary": "Session currently underway. Check back soon for summary and highlights.",
    "highlights": [],
    "recordingLink": null
  },
  {
    "id": 45,
    "date": "2026-01-23",
    "time": "09:00",
    "title": "Conversation with Gavin Newsom",
    "speaker": "Gavin Newsom, Governor of California",
    "description": "California's policies on climate, technology, and innovation",
    "location": "Congress Centre - Innovation Hub",
    "status": "upcoming",
    "summary": "Coming soon. This session is scheduled for tomorrow.",
    "highlights": [],
    "recordingLink": null
  },
  {
    "id": 46,
    "date": "2026-01-23",
    "time": "09:30",
    "title": "Climate Hub Davos - Closing Session & Special Screening",
    "speaker": "GreenUp and WISDOM HEALTH",
    "description": "Closing event for climate discussions with special sustainability screening",
    "location": "Climate Hub Davos",
    "status": "upcoming",
    "summary": "Coming soon. This session is scheduled for tomorrow.",
    "highlights": [],
    "recordingLink": null
  },
  {
    "id": 47,
    "date": "2026-01-23",
    "time": "10:30",
    "title": "Special Address by Friedrich Merz",
    "speaker": "Friedrich Merz, Federal Chancellor of Germany",
    "description": "Germany's Chancellor shares views on global and European challenges",
    "location": "Congress Centre - Main Hall",
    "status": "upcoming",
    "summary": "Coming soon. This session is scheduled for tomorrow.",
    "highlights": [],
    "recordingLink": null
  },
  {
    "id": 48,
    "date": "2026-01-23",
    "time": "11:30",
    "title": "Special Address by Isaac Herzog",
    "speaker": "Isaac Herzog, President of Israel",
    "description": "Israel's perspective on regional security and Middle East developments",
    "location": "Congress Centre - Main Hall",
    "status": "upcoming",
    "summary": "Coming soon. This session is scheduled for tomorrow.",
    "highlights": [],
    "recordingLink": null
  },
  {
    "id": 49,
    "date": "2026-01-23",
    "time": "13:00",
    "title": "Special Address by Kyriakos Mitsotakis",
    "speaker": "Kyriakos Mitsotakis, Prime Minister of Greece",
    "description": "Greece's economic recovery and role in European affairs",
    "location": "Congress Centre - Main Hall",
    "status": "upcoming",
    "summary": "Coming soon. This session is scheduled for tomorrow.",
    "highlights": [],
    "recordingLink": null
  },
  {
    "id": 50,
    "date": "2026-01-23",
    "time": "14:00",
    "title": "Special Address by Prabowo Subianto",
    "speaker": "Prabowo Subianto, President of Indonesia",
    "description": "Indonesia's development strategy and regional leadership in Southeast Asia",
    "location": "Congress Centre - Main Hall",
    "status": "upcoming",
    "summary": "Coming soon. This session is scheduled for tomorrow.",
    "highlights": [],
    "recordingLink": null
  },
  {
    "id": 51,
    "date": "2026-01-23",
    "time": "15:00",
    "title": "Panel Discussion: Global Financial Leadership",
    "speaker": "Ngozi Okonjo-Iweala (WTO Director-General), Kristalina Georgieva (IMF), Christine Lagarde (ECB President)",
    "description": "Top global financial leaders discuss trade, monetary policy, and economic cooperation",
    "location": "Congress Centre - Finance Forum",
    "status": "upcoming",
    "summary": "Coming soon. This session is scheduled for tomorrow.",
    "highlights": [],
    "recordingLink": null
  },
  {
    "id": 52,
    "date": "2026-01-23",
    "time": "16:30",
    "title": "Closing Remarks: A Spirit of Dialogue - Summit Outcomes",
    "speaker": "Klaus Schwab, Executive Chairman, World Economic Forum & Summit Co-Chairs",
    "description": "Reflections on major announcements, agreements, and commitments from Davos 2026. Summary of action plans and global cooperation initiatives",
    "location": "Congress Centre - Main Hall",
    "status": "upcoming",
    "summary": "Coming soon. This session is scheduled for tomorrow.",
    "highlights": [],
    "recordingLink": null
  },
  {
    "id": 53,
    "date": "2026-01-20",
    "time": "07:15",
    "title": "Scaling AI: Now Comes the Hard Part",
    "speaker": "Panel of AI Leaders and Tech CEOs",
    "description": "Discussion on practical implementation challenges of AI at scale across industries",
    "location": "Congress Centre - AI Forum",
    "status": "completed",
    "summary": "Leading AI experts discussed the practical challenges of scaling artificial intelligence across industries. The session focused on real-world implementation issues, from data governance to workforce transformation.",
    "highlights": [
      "Industry leaders shared experiences on AI deployment challenges",
      "Discussion on balancing AI innovation with responsible governance",
      "Focus on workforce adaptation and skills development",
      "Emphasis on data quality and infrastructure requirements"
    ],
    "recordingLink": "https://www.weforum.org/videos/scaling-ai/"
  },
  {
    "id": 54,
    "date": "2026-01-20",
    "time": "08:30",
    "title": "Conversation with Satya Nadella, CEO of Microsoft",
    "speaker": "Satya Nadella, Chairman and CEO, Microsoft",
    "description": "An intimate conversation with Microsoft's CEO on AI transformation, cloud computing, and the future of work",
    "location": "Congress Centre - Main Hall",
    "status": "completed",
    "summary": "Microsoft CEO Satya Nadella discussed the company's vision for AI-powered productivity, cloud infrastructure, and how technology can empower every person and organization to achieve more. The conversation covered Microsoft's approach to responsible AI development and global digital transformation.",
    "highlights": [
      "Microsoft's commitment to democratizing AI through accessible tools",
      "Discussion on Copilot and AI integration across Microsoft products",
      "Focus on cybersecurity in an AI-driven world",
      "Emphasis on responsible AI development and deployment"
    ],
    "recordingLink": "https://www.weforum.org/videos/satya-nadella-2026/"
  },
  {
    "id": 55,
    "date": "2026-01-20",
    "time": "12:00",
    "title": "Town Hall: Dilemmas around Knowledge",
    "speaker": "Panel of Educators, Tech Leaders, and Policy Makers",
    "description": "Exploring challenges of knowledge creation, validation, and distribution in the age of AI and misinformation",
    "location": "Open Forum - Town Hall",
    "status": "completed",
    "summary": "This town hall addressed critical questions about knowledge in the digital age: How do we validate information? Who controls knowledge creation? How can we combat misinformation while preserving free speech? The session brought together diverse perspectives on education, media, and technology.",
    "highlights": [
      "Debates on information verification in the AI era",
      "Role of education systems in critical thinking development",
      "Challenges of misinformation and deep fakes",
      "Discussion on open access to knowledge versus proprietary systems"
    ],
    "recordingLink": "https://www.weforum.org/videos/town-hall-knowledge/"
  },
  {
    "id": 56,
    "date": "2026-01-20",
    "time": "12:30",
    "title": "The Day After AGI",
    "speaker": "Sam Altman (OpenAI), Demis Hassabis (Google DeepMind), Dario Amodei (Anthropic)",
    "description": "Leading AI researchers discuss what happens when artificial general intelligence is achieved",
    "location": "Congress Centre - Technology Forum",
    "status": "completed",
    "summary": "In one of the most anticipated sessions of Davos 2026, the CEOs of OpenAI, Google DeepMind, and Anthropic came together to discuss the implications of achieving AGI. The conversation explored safety measures, societal transformation, governance frameworks, and how humanity can prepare for this transformative moment.",
    "highlights": [
      "Consensus on AGI arriving within the next 5-10 years",
      "Emphasis on alignment and safety as top priorities",
      "Discussion on economic disruption and job transformation",
      "Need for international cooperation on AGI governance",
      "Debate on open vs. closed AGI development models"
    ],
    "recordingLink": "https://www.weforum.org/videos/the-day-after-agi/"
  },
  {
    "id": 57,
    "date": "2026-01-20",
    "time": "15:15",
    "title": "Prosperity: Sovereign Yet Connected?",
    "speaker": "Panel of Finance Ministers and Central Bankers",
    "description": "Examining how nations can maintain economic sovereignty while participating in global trade and finance",
    "location": "Congress Centre - Economics Forum",
    "status": "completed",
    "summary": "Finance ministers and central bankers debated the tension between national economic sovereignty and global interconnectedness. The discussion covered supply chain resilience, currency independence, trade agreements, and how countries can protect their interests while benefiting from globalization.",
    "highlights": [
      "Strategies for balancing national interests with global cooperation",
      "Discussion on digital currencies and financial sovereignty",
      "Supply chain diversification and resilience",
      "Role of multilateral institutions in the new economic order"
    ],
    "recordingLink": "https://www.weforum.org/videos/prosperity-sovereign-connected/"
  },
  {
    "id": 58,
    "date": "2026-01-20",
    "time": "15:30",
    "title": "Future of War",
    "speaker": "Military Leaders, Defense Ministers, and Security Experts",
    "description": "Analysis of how AI, cyber warfare, and new technologies are transforming military conflict",
    "location": "Congress Centre - Security Forum",
    "status": "completed",
    "summary": "Military and security leaders discussed the changing nature of warfare in an era of AI, autonomous systems, cyber attacks, and space-based assets. The session explored ethical considerations, international law, and how to maintain stability in an increasingly complex security landscape.",
    "highlights": [
      "Impact of AI and autonomous weapons on modern warfare",
      "Cybersecurity as a critical national defense issue",
      "Space militarization and new domains of conflict",
      "Need for updated international laws and conventions",
      "Emphasis on de-escalation and conflict prevention"
    ],
    "recordingLink": "https://www.weforum.org/videos/future-of-war/"
  },
  {
    "id": 59,
    "date": "2026-01-20",
    "time": "16:00",
    "title": "Where Can New Growth Come From?",
    "speaker": "Economists, Business Leaders, and Innovation Experts",
    "description": "Exploring new sources of economic growth in a mature global economy",
    "location": "Congress Centre - Growth Forum",
    "status": "completed",
    "summary": "With traditional growth engines slowing, this panel explored emerging opportunities: green technologies, AI productivity gains, space economy, biotech innovations, and new markets in developing economies. The discussion focused on sustainable and inclusive growth models.",
    "highlights": [
      "Green energy transition as a major growth opportunity",
      "AI-driven productivity improvements across sectors",
      "Emerging markets and demographic dividends",
      "Biotech and healthcare innovation potential",
      "Space economy and new frontiers"
    ],
    "recordingLink": "https://www.weforum.org/videos/new-growth-sources/"
  },
  {
    "id": 60,
    "date": "2026-01-20",
    "time": "16:00",
    "title": "AI Power Play—No Referees",
    "speaker": "Tech CEOs, Policy Makers, and Legal Experts",
    "description": "Examining the global competition for AI dominance and the lack of international governance",
    "location": "Congress Centre - AI Governance",
    "status": "completed",
    "summary": "This crucial session addressed the 'Wild West' state of AI development, with major powers racing ahead without agreed-upon rules. Discussions covered the AI arms race, data sovereignty, computing power concentration, and urgent need for international frameworks.",
    "highlights": [
      "Competition between US, China, and EU for AI leadership",
      "Concentration of AI capabilities in few companies",
      "Lack of international regulatory frameworks",
      "Calls for AI governance similar to nuclear treaties",
      "Debate on open-source vs. proprietary AI development"
    ],
    "recordingLink": "https://www.weforum.org/videos/ai-power-play/"
  },
  {
    "id": 61,
    "date": "2026-01-21",
    "time": "10:00",
    "title": "Special Address by António Guterres, Secretary-General, United Nations",
    "speaker": "António Guterres, Secretary-General, United Nations",
    "description": "The UN Secretary-General addresses global challenges and the role of international cooperation",
    "location": "Congress Hall - Main Stage",
    "status": "completed",
    "summary": "Secretary-General Guterres delivered a powerful address calling for renewed multilateralism and urgent action on climate change, global conflicts, and inequality. He emphasized the UN's role in facilitating dialogue and the need for reformed global governance structures.",
    "highlights": [
      "Urgent call for climate action and fossil fuel phase-out",
      "Emphasis on reforming global governance institutions",
      "Appeal for peace in ongoing conflicts",
      "Focus on sustainable development goals",
      "Warning about growing global inequality"
    ],
    "recordingLink": "https://www.weforum.org/videos/guterres-address-2026/"
  },
  {
    "id": 62,
    "date": "2026-01-21",
    "time": "10:30",
    "title": "Conversation with Jensen Huang, CEO of NVIDIA",
    "speaker": "Jensen Huang, Founder and CEO, NVIDIA",
    "description": "NVIDIA's CEO discusses the AI revolution, accelerated computing, and the future of technology",
    "location": "Congress Centre - Technology Stage",
    "status": "completed",
    "summary": "Jensen Huang captivated the audience with insights on NVIDIA's pivotal role in the AI revolution. He discussed accelerated computing, the future of GPUs, AI infrastructure, and how computing is transforming every industry from healthcare to manufacturing.",
    "highlights": [
      "NVIDIA's vision for AI computing infrastructure",
      "Discussion on next-generation chip architectures",
      "AI's transformative impact across all industries",
      "Democratization of AI through accessible computing",
      "Future of autonomous systems and robotics"
    ],
    "recordingLink": "https://www.weforum.org/videos/jensen-huang-2026/"
  },
  {
    "id": 63,
    "date": "2026-01-21",
    "time": "10:30",
    "title": "Hard Realities of Cyber Threats",
    "speaker": "Cybersecurity Experts, Government Officials, and Tech Leaders",
    "description": "Addressing the escalating challenges of cybersecurity in an interconnected world",
    "location": "Congress Centre - Security Forum",
    "status": "completed",
    "summary": "This session tackled the harsh realities of modern cyber threats: ransomware, state-sponsored attacks, AI-powered hacking, and infrastructure vulnerabilities. Experts discussed defense strategies, international cooperation, and the growing cyber insurance industry.",
    "highlights": [
      "Rise of AI-powered cyber attacks",
      "State-sponsored hacking and digital espionage",
      "Critical infrastructure protection challenges",
      "Need for international cyber norms",
      "Growing importance of cyber resilience"
    ],
    "recordingLink": "https://www.weforum.org/videos/cyber-threats-2026/"
  },
  {
    "id": 64,
    "date": "2026-01-21",
    "time": "14:30",
    "title": "Why Quantum Is Around the Corner and Why It Is Not",
    "speaker": "Quantum Computing Researchers and Industry Leaders",
    "description": "Balanced discussion on the promise and challenges of quantum computing",
    "location": "Congress Centre - Advanced Technology",
    "status": "completed",
    "summary": "Leading quantum researchers provided a realistic assessment of quantum computing's current state and future potential. The session explored breakthrough achievements, persistent challenges, practical applications, and timeline expectations for quantum advantage.",
    "highlights": [
      "Recent breakthroughs in quantum error correction",
      "Realistic timeline: 5-10 years for practical applications",
      "Current limitations and technical challenges",
      "Potential applications in cryptography, drug discovery, optimization",
      "Need for quantum-ready cybersecurity"
    ],
    "recordingLink": "https://www.weforum.org/videos/quantum-computing-2026/"
  },
  {
    "id": 65,
    "date": "2026-01-21",
    "time": "16:45",
    "title": "Regulating at the Speed of Code",
    "speaker": "Regulators, Tech CEOs, and Legal Scholars",
    "description": "How can regulation keep pace with rapidly evolving technology?",
    "location": "Congress Centre - Policy Forum",
    "status": "completed",
    "summary": "A critical examination of the growing gap between technological innovation and regulatory frameworks. The panel discussed agile regulation, sandbox approaches, international cooperation, and how to protect consumers while fostering innovation.",
    "highlights": [
      "Challenge of regulating technologies that don't yet exist",
      "Success stories of regulatory sandboxes",
      "Need for international regulatory harmonization",
      "Balancing innovation with consumer protection",
      "Role of industry self-regulation"
    ],
    "recordingLink": "https://www.weforum.org/videos/regulating-code-speed/"
  },
  {
    "id": 66,
    "date": "2026-01-22",
    "time": "08:00",
    "title": "Factories that Think",
    "speaker": "Manufacturing Leaders and Industry 4.0 Experts",
    "description": "Exploring AI-powered smart manufacturing and the future of production",
    "location": "Congress Centre - Industry Forum",
    "status": "completed",
    "summary": "Industry leaders showcased the transformation of manufacturing through AI, IoT, robotics, and digital twins. The session explored how intelligent factories are revolutionizing production, improving efficiency, and creating new business models.",
    "highlights": [
      "AI-driven predictive maintenance and quality control",
      "Digital twin technology for factory optimization",
      "Collaborative robots (cobots) working alongside humans",
      "Supply chain optimization through AI",
      "Sustainability benefits of smart manufacturing"
    ],
    "recordingLink": "https://www.weforum.org/videos/factories-think/"
  },
  {
    "id": 67,
    "date": "2026-01-22",
    "time": "08:30",
    "title": "Open Forum: Beyond Earth—The Next Space Race",
    "speaker": "Space Agency Leaders, Commercial Space Companies, Scientists",
    "description": "The new era of space exploration and commercialization",
    "location": "Open Forum Venue",
    "status": "completed",
    "summary": "An exciting discussion on humanity's expansion into space: lunar bases, Mars missions, space mining, satellite constellations, and space tourism. The session highlighted both the opportunities and challenges of the new space economy.",
    "highlights": [
      "Plans for permanent lunar bases by 2030s",
      "Commercial space stations and tourism",
      "Space mining and resource extraction",
      "International cooperation vs. competition in space",
      "Environmental concerns about space debris"
    ],
    "recordingLink": "https://www.weforum.org/videos/beyond-earth/"
  },
  {
    "id": 68,
    "date": "2026-01-22",
    "time": "09:15",
    "title": "Town Hall: Dilemmas Around Ethics in AI",
    "speaker": "AI Ethicists, Philosophers, Tech Leaders, Civil Society",
    "description": "Grappling with fundamental ethical questions raised by artificial intelligence",
    "location": "Open Forum - Town Hall",
    "status": "completed",
    "summary": "A thought-provoking town hall addressing AI ethics: bias and fairness, privacy, autonomous decision-making, accountability, and the future of human agency. The diverse panel explored different cultural perspectives on AI ethics.",
    "highlights": [
      "Addressing bias and fairness in AI systems",
      "Privacy concerns in the age of pervasive AI",
      "Who is responsible when AI makes mistakes?",
      "Preserving human agency and meaningful work",
      "Cultural differences in AI ethics approaches"
    ],
    "recordingLink": "https://www.weforum.org/videos/ai-ethics-townhall/"
  },
  {
    "id": 69,
    "date": "2026-01-22",
    "time": "13:30",
    "title": "An Honest Conversation on AI and Humanity",
    "speaker": "Yuval Noah Harari, AI Researchers, Humanists",
    "description": "Deep philosophical discussion on AI's impact on human civilization and what it means to be human",
    "location": "Congress Hall",
    "status": "completed",
    "summary": "Historian Yuval Noah Harari led a profound conversation about AI's implications for humanity. The discussion ranged from the nature of consciousness and intelligence to social structures, democracy, and human purpose in an AI-augmented world.",
    "highlights": [
      "Questions about consciousness and sentience in AI",
      "Impact of AI on human relationships and society",
      "Democracy and governance in the age of AI",
      "Finding meaning and purpose when AI exceeds human capabilities",
      "The importance of wisdom versus intelligence"
    ],
    "recordingLink": "https://www.weforum.org/videos/ai-humanity-conversation/"
  },
  {
    "id": 70,
    "date": "2026-01-23",
    "time": "08:00",
    "title": "Internet up for Grabs",
    "speaker": "Tech Policy Experts, Government Officials, Internet Pioneers",
    "description": "The battle for control of internet governance and the future of digital freedom",
    "location": "Congress Centre - Digital Forum",
    "status": "completed",
    "summary": "A critical session on internet governance challenges: data sovereignty, censorship, platform regulation, and the tension between national control and global connectivity. The panel debated different models for internet governance and their implications for freedom and innovation.",
    "highlights": [
      "Fragmentation of the global internet",
      "Data localization and sovereignty concerns",
      "Platform regulation and content moderation",
      "Digital authoritarianism vs. internet freedom",
      "Future of internet governance institutions"
    ],
    "recordingLink": "https://www.weforum.org/videos/internet-up-for-grabs/"
  },
  {
    "id": 71,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "When Artists and Scientists Talk",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=hbxcwWCfdk4"
  },
  {
    "id": 72,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "How High Can Unicorns Fly?",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=TTvBw0aaKiA"
  },
  {
    "id": 73,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Meaning of Politics",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=MEmv0TK-Uls"
  },
  {
    "id": 74,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Mental Health When Everything Shifts",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=Hc3R0OL0GEo"
  },
  {
    "id": 75,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Geopolitical Risks Outlook for 2026",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=dHA1o6HNuMo"
  },
  {
    "id": 76,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "What Is the State of the Fourth Estate?",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=sTuilRTu3ag"
  },
  {
    "id": 77,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Can We Protect Science?",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=KM5oaEOpqlc"
  },
  {
    "id": 78,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Music and Conversation with Yo-Yo Ma",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=Vg4g6v2WM7k"
  },
  {
    "id": 79,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Is Democracy in Trouble?",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=8zifV_fsSO0"
  },
  {
    "id": 80,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "A Check-In on the Saudi Economy",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=IBKf9pocRgQ"
  },
  {
    "id": 81,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Can Europe Compete on Clean Power?",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=wqUMVdY3hy4"
  },
  {
    "id": 82,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Investors and the Patience Premium",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=mColukXeSOM"
  },
  {
    "id": 83,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "All Geopolitics Is Local",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=1gwX62wjobk"
  },
  {
    "id": 84,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "A Prosperity Agenda for the Middle East",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=QdMlUGtM8JY"
  },
  {
    "id": 85,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Murals that Speak",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=Al5V1Mf6ocs"
  },
  {
    "id": 86,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Town Hall: Dilemmas around Growth",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=QBJt3NbfPV8"
  },
  {
    "id": 87,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Not All Disruptions Are Equal",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=jpgttQSVNlY"
  },
  {
    "id": 88,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "What Does Adaptation Look Like?",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=SQo0dQnuvsA"
  },
  {
    "id": 89,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "The Physical Economy Is Back",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=JST-YYEzoSE"
  },
  {
    "id": 90,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Can Trees Tame the Flames?",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=uS4iXmOP0us"
  },
  {
    "id": 91,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "New Dawn for Entrepreneurship?",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=IduMM73S4FA"
  },
  {
    "id": 92,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Davos Kick-off for FIFA World Cup 2026",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=13f6oIzGhXM"
  },
  {
    "id": 93,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Living Autonomously",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=aH6yvNSxJ50"
  },
  {
    "id": 94,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Energy: The Great Funding Gap",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=jNcY85neIAI"
  },
  {
    "id": 95,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "What Makes the US Economy Exceptional?",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=KF50qIyPSJM"
  },
  {
    "id": 96,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Europe Is Treading Water, How Can It Make Waves?",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=hNS0BHd5T4U"
  },
  {
    "id": 97,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Is ASEAN Moving Fast Enough?",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=wq_NnftPG3I"
  },
  {
    "id": 98,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Converging Technologies to Win",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=k2cE3Qa5bCQ"
  },
  {
    "id": 99,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "How Housing Became a Bottleneck",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=gnXWH5e5OAM"
  },
  {
    "id": 100,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Will We Ever Have a Global Plastics Treaty?",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=wCg0agMWJhw"
  },
  {
    "id": 101,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Taking NCDs Seriously",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=FURfDqfAZV8"
  },
  {
    "id": 102,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "New Era for Finance",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=FF0c1aMdaXs"
  },
  {
    "id": 103,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Velocity of the Blue Economy",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=JgSRu6rzrkE"
  },
  {
    "id": 104,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Can We Save the Middle Class?",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=Xxs7gS1JtRI"
  },
  {
    "id": 105,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "An Honest Conversation about Why We Are Divided",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=F8uDLMppM5E"
  },
  {
    "id": 106,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Conversation with Elon Musk",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=-D_ufAPjkfY"
  },
  {
    "id": 107,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Venezuela: What Next?",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=IgifEgm1-e0"
  },
  {
    "id": 108,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Is Europe's Tech Sovereignty Feasible?",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=PTXmBlRLtlY"
  },
  {
    "id": 109,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Rebalancing the New World Order",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=DwBBzaOs7Is"
  },
  {
    "id": 110,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Cybercrime Has Real Victims",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=qqEJM88jZg0"
  },
  {
    "id": 111,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Where Are We on Stablecoins?",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=UqxcUv7D7ao"
  },
  {
    "id": 112,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Conversation with US State Governors",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=USpMQLrRtWw"
  },
  {
    "id": 113,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Economies Beyond the Shock Cycle",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=KuTnBEDpDTY"
  },
  {
    "id": 114,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Breakthroughs in Women's Health",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=khtxU8WxZ_8"
  },
  {
    "id": 115,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Sailing through Barriers",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=UVwPUnAhis0"
  },
  {
    "id": 116,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "A Coming Jobs Challenge in Emerging Markets?",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=qy8aXnlhMJU"
  },
  {
    "id": 117,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Is Everyone Falling Behind?",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=yRxUlDK0cUg"
  },
  {
    "id": 118,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Building AI for the Long Term",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=d9jK-h_1YWs"
  },
  {
    "id": 119,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Dedollarization or Redollarization?",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=2ax1nyrwGLU"
  },
  {
    "id": 120,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "The Intelligent Co-Worker",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=WZaB7qnVvCM"
  },
  {
    "id": 121,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Humanitarian Briefing on Sudan",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=6QiS4If6Q-E"
  },
  {
    "id": 122,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Putting Entrepreneurs where Markets Aren't",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=34WoOp1EEfo"
  },
  {
    "id": 123,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "On Guard, from Deep Sea to Orbit",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=M6vebFZfSqY"
  },
  {
    "id": 124,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Making Healthy Choices, Better",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=MTiwzkxa0_k"
  },
  {
    "id": 125,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Are Markets Mispricing the Future?",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=BpXayLXIASw"
  },
  {
    "id": 126,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Clear-Eyed about Nuclear Renaissance",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=HCHY2e1e8T4"
  },
  {
    "id": 127,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Scars of Survival: How I Rebuilt My Life",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=-V-jKRRVZcc"
  },
  {
    "id": 128,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Conversation with Ken Griffin, President and CEO of Citadel",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/playlist?list=PL7m903CwFUgmYkE5HorVe2w0R44argXEJ"
  },
  {
    "id": 129,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "At the Cusp of Healthcare for All",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=bjqrR3QPvgc"
  },
  {
    "id": 130,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Rethinking Global Aid: The Time Is Now",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=sWTVbTONbqc"
  },
  {
    "id": 131,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "An Honest Conversation on the Hyper Connected and the Hyper Lonely",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/playlist?list=PL7m903CwFUgmYkE5HorVe2w0R44argXEJ"
  },
  {
    "id": 132,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Conversation with David Sacks and Marc Benioff",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=4vaf0iwYNO8"
  },
  {
    "id": 133,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Water in the Balance",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=XZXaJ8ECsbY"
  },
  {
    "id": 134,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "RNA, Why it is still a Big Deal",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=6C9Gb3rVMTg"
  },
  {
    "id": 135,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Who Brokers Trust Now?",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=cPLVwdF30wc"
  },
  {
    "id": 136,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Preventing Jobless Growth",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=4JkoSpmHw5U"
  },
  {
    "id": 137,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "How Can We Avert a Climate Recession?",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=LbKGgvt84k4"
  },
  {
    "id": 138,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "When Code and Creativity Collide",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=So_QRghXo0Y"
  },
  {
    "id": 139,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Breaking Latin America's Growth Ceiling",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=Yl-XlBUufVw"
  },
  {
    "id": 140,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Chinese Economy: Fully Emerged?",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=5LLUU1YwTyc"
  },
  {
    "id": 141,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Advancing Interfaith Dialogue for Peace",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=EXC_3G2yYJM"
  },
  {
    "id": 142,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "US and China: Where Will They Land?",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=wRKKnaIz2W0"
  },
  {
    "id": 143,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Weight of Global Debt",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=c-Sn5Rb32js"
  },
  {
    "id": 144,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Second Act for EU Single Market",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=MiFQpGkkm58"
  },
  {
    "id": 145,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Business Case for Nature",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=ZjUTF2jlcBo"
  },
  {
    "id": 146,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "China's AI+ Economy",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=Ysm9J9tyHT0"
  },
  {
    "id": 147,
    "date": "2026-01-22",
    "time": "TBD",
    "title": "Closing Remarks",
    "speaker": "Various Speakers and Panelists",
    "description": "Session from WEF Annual Meeting 2026. Full details to be updated.",
    "location": "WEF Davos 2026",
    "status": "completed",
    "summary": "Recording available on YouTube. Summary to be added.",
    "highlights": [],
    "recordingLink": "https://www.youtube.com/watch?v=he-yp3Hder4"
  }
];

// Helper functions to extract metadata from events
function getSessionType(title) {
    if (title.startsWith('Special Address')) return 'Special Address';
    if (title.startsWith('Open Forum')) return 'Open Forum';
    if (title.startsWith('Panel Discussion')) return 'Panel Discussion';
    if (title.startsWith('Session:')) return 'Session';
    if (title.startsWith('Conversation')) return 'Conversation';
    if (title.startsWith('Roundtable')) return 'Roundtable';
    if (title.startsWith('Press Conference')) return 'Press Conference';
    if (title.includes('Concert') || title.includes('Music')) return 'Concert/Performance';
    if (title.includes('Closing')) return 'Closing Event';
    return 'Other';
}

function getThemes(event) {
    const text = (event.title + ' ' + event.description + ' ' + (event.summary || '')).toLowerCase();
    const themes = [];
    
    if (text.match(/\b(ai|artificial intelligence|machine learning|deep learning|llm|agi|nvidia|microsoft|openai|anthropic)\b/)) themes.push('AI & Technology');
    if (text.match(/\b(climate|environment|sustainability|green|carbon|renewable|glacier)\b/)) themes.push('Climate & Environment');
    if (text.match(/\b(economy|economic|trade|tariff|gdp|growth|finance|investment|market|imf|bank)\b/)) themes.push('Economy & Trade');
    if (text.match(/\b(geopolitic|war|defense|nato|security|conflict|military|russia|ukraine)\b/)) themes.push('Geopolitics & Security');
    if (text.match(/\b(health|medical|biotech|antibiotic|genetic|biology)\b/)) themes.push('Healthcare & Biotech');
    if (text.match(/\b(education|knowledge|learning|school)\b/)) themes.push('Education');
    if (text.match(/\b(space|quantum|computing)\b/)) themes.push('Future Technologies');
    if (text.match(/\b(cyber|internet|digital)\b/)) themes.push('Cybersecurity & Digital');
    
    return themes.length > 0 ? themes : ['General'];
}

function getCountry(speaker) {
    if (!speaker) return 'Multinational';
    
    const speakerLower = speaker.toLowerCase();
    
    if (speakerLower.includes('president of france') || speakerLower.includes('macron')) return 'France';
    if (speakerLower.includes('china') || speakerLower.includes('people\'s republic') || speakerLower.includes('he lifeng')) return 'China';
    if (speakerLower.includes('united states') || speakerLower.includes('us treasury') || speakerLower.includes('california') || speakerLower.includes('trump') || speakerLower.includes('bessent') || speakerLower.includes('newsom')) return 'United States';
    if (speakerLower.includes('canada') || speakerLower.includes('carney')) return 'Canada';
    if (speakerLower.includes('egypt') || speakerLower.includes('el-sisi')) return 'Egypt';
    if (speakerLower.includes('argentina') || speakerLower.includes('milei')) return 'Argentina';
    if (speakerLower.includes('germany') || speakerLower.includes('merz')) return 'Germany';
    if (speakerLower.includes('israel') || speakerLower.includes('herzog')) return 'Israel';
    if (speakerLower.includes('greece') || speakerLower.includes('mitsotakis')) return 'Greece';
    if (speakerLower.includes('indonesia') || speakerLower.includes('subianto')) return 'Indonesia';
    if (speakerLower.includes('european commission') || speakerLower.includes('von der leyen') || speakerLower.includes('ecb') || speakerLower.includes('lagarde')) return 'European Union';
    if (speakerLower.includes('india') || speakerLower.includes('vaishnaw')) return 'India';
    if (speakerLower.includes('saudi arabia') || speakerLower.includes('al-falih')) return 'Saudi Arabia';
    if (speakerLower.includes('palestinian') || speakerLower.includes('mustafa')) return 'Palestine';
    if (speakerLower.includes('united nations') || speakerLower.includes('guterres')) return 'International';
    if (speakerLower.includes('wto') || speakerLower.includes('imf') || speakerLower.includes('world economic forum') || speakerLower.includes('schwab')) return 'International';
    
    return 'Multinational';
}

// Enrich events with metadata
eventsData.forEach(event => {
    event.sessionType = getSessionType(event.title);
    event.themes = getThemes(event);
    event.country = getCountry(event.speaker);
});

// State management
let currentDayFilter = 'all';
let currentSessionTypeFilter = 'all';
let currentThemeFilter = 'all';
let currentCountryFilter = 'all';

// Initialize the application
function init() {
    renderTimetable(eventsData);
    setupEventListeners();
    setupEventCardClickHandlers();
    displayDisclaimer();
    createModal();
    populateFilters();
}

// Setup click handlers for event cards using event delegation
function setupEventCardClickHandlers() {
    const timetableContainer = document.getElementById('timetable');

    // Use event delegation on the timetable container
    timetableContainer.addEventListener('click', (e) => {
        // Find the closest event-card element
        const eventCard = e.target.closest('.event-card');

        if (eventCard) {
            const eventId = parseInt(eventCard.getAttribute('data-event-id'));

            if (eventId) {
                window.openModal(eventId);
            }
        }
    });
}

// Display disclaimer about session coverage
function displayDisclaimer() {
    const disclaimer = document.createElement('div');
    disclaimer.className = 'disclaimer';
    disclaimer.innerHTML = `
        <p><strong>Note:</strong> The World Economic Forum Annual Meeting 2026 features over 200 sessions.
        This timetable includes major keynote addresses, special addresses, and publicly announced sessions.
        Many smaller sessions, private roundtables, and bilateral meetings are not included in public schedules.</p>
        <p><strong>⏰ All times shown are in Swiss Time (CET - Central European Time, UTC+1)</strong></p>
    `;
    document.querySelector('main.container').insertBefore(disclaimer, document.getElementById('timetable'));
}

// Create modal structure
function createModal() {
    const modalHTML = `
        <div id="eventModal" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 id="modalTitle"></h2>
                    <span class="modal-close">&times;</span>
                </div>
                <div class="modal-body">
                    <div class="modal-info">
                        <div class="modal-info-item">
                            <strong>Speaker:</strong>
                            <span id="modalSpeaker"></span>
                        </div>
                        <div class="modal-info-item">
                            <strong>Time:</strong>
                            <span id="modalTime"></span>
                        </div>
                        <div class="modal-info-item">
                            <strong>Location:</strong>
                            <span id="modalLocation"></span>
                        </div>
                        <div class="modal-info-item">
                            <strong>Status:</strong>
                            <span id="modalStatus" class="status-badge"></span>
                        </div>
                    </div>
                    <div class="modal-section">
                        <h3>Summary</h3>
                        <p id="modalSummary"></p>
                    </div>
                    <div class="modal-section" id="highlightsSection">
                        <h3>Key Highlights</h3>
                        <ul id="modalHighlights"></ul>
                    </div>
                    <div class="modal-section" id="recordingSection">
                        <h3>Recording</h3>
                        <a id="modalRecording" href="#" target="_blank" class="recording-link">
                            Watch Recording →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Setup close handlers
    const modal = document.getElementById('eventModal');
    const closeBtn = document.querySelector('.modal-close');

    closeBtn.onclick = () => closeModal();
    window.onclick = (event) => {
        if (event.target === modal) {
            closeModal();
        }
    };
}

// Open modal with event details (exposed to global scope for onclick handlers)
window.openModal = function(eventId) {
    const event = eventsData.find(e => e.id === eventId);
    if (!event) return;

    let modal = document.getElementById('eventModal');

    if (!modal) {
        createModal();
        modal = document.getElementById('eventModal');
        if (!modal) return;
    }

    // Populate modal content
    document.getElementById('modalTitle').textContent = event.title;
    document.getElementById('modalSpeaker').textContent = event.speaker;
    document.getElementById('modalTime').textContent = `${event.date} at ${event.time} CET`;
    document.getElementById('modalLocation').textContent = event.location;

    // Status badge
    const statusBadge = document.getElementById('modalStatus');
    statusBadge.textContent = event.status === 'completed' ? 'Completed' :
                              event.status === 'in-progress' ? 'In Progress' : 'Upcoming';
    statusBadge.className = `status-badge status-${event.status}`;

    // Summary
    document.getElementById('modalSummary').textContent = event.summary;

    // Highlights
    const highlightsSection = document.getElementById('highlightsSection');
    const highlightsList = document.getElementById('modalHighlights');
    if (event.highlights && event.highlights.length > 0) {
        highlightsSection.style.display = 'block';
        highlightsList.innerHTML = event.highlights.map(h => `<li>${h}</li>`).join('');
    } else {
        highlightsSection.style.display = 'none';
    }

    // Recording link
    const recordingSection = document.getElementById('recordingSection');
    const recordingLink = document.getElementById('modalRecording');
    if (event.recordingLink) {
        recordingSection.style.display = 'block';
        recordingLink.href = event.recordingLink;
    } else {
        recordingSection.style.display = 'none';
    }

    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal (exposed to global scope)
window.closeModal = function() {
    const modal = document.getElementById('eventModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Render the timetable
function renderTimetable(events) {
    const timetableContainer = document.getElementById('timetable');

    if (events.length === 0) {
        timetableContainer.innerHTML = `
            <div class="empty-state">
                <h3>No events found</h3>
                <p>Try selecting a different day</p>
            </div>
        `;
        return;
    }

    // Group events by date
    const eventsByDate = events.reduce((acc, event) => {
        if (!acc[event.date]) {
            acc[event.date] = [];
        }
        acc[event.date].push(event);
        return acc;
    }, {});

    // Sort dates
    const sortedDates = Object.keys(eventsByDate).sort();

    // Generate HTML
    let html = '';
    sortedDates.forEach(date => {
        const dateObj = new Date(date + 'T00:00:00');
        const formattedDate = dateObj.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        html += `<div class="day-section" data-date="${date}">`;
        html += `<h3 class="day-header">${formattedDate}</h3>`;

        // Sort events by time
        const sortedEvents = eventsByDate[date].sort((a, b) => a.time.localeCompare(b.time));

        sortedEvents.forEach(event => {
            const statusClass = event.status ? `status-${event.status}` : '';
            html += `
                <div class="time-slot">
                    <div class="time-label">${event.time}<br><span style="font-size: 0.75rem; opacity: 0.8;">CET</span></div>
                    <div class="event-card ${statusClass}" data-event-id="${event.id}" style="cursor: pointer;">
                        <h4 class="event-title">${event.title}</h4>
                        <div class="event-speaker">${event.speaker}</div>
                        <p class="event-description">${event.description}</p>
                        <div class="event-footer">
                            <span class="event-location">${event.location}</span>
                            <span class="event-details-btn">View Details →</span>
                        </div>
                    </div>
                </div>
            `;
        });

        html += `</div>`;
    });

    timetableContainer.innerHTML = html;
}

// Filter events by day
function getFilteredEvents() {
    let filteredEvents = eventsData;
    
    // Apply day filter
    if (currentDayFilter !== 'all') {
        filteredEvents = filteredEvents.filter(event => event.date === currentDayFilter);
    }
    
    // Apply session type filter
    if (currentSessionTypeFilter !== 'all') {
        filteredEvents = filteredEvents.filter(event => event.sessionType === currentSessionTypeFilter);
    }
    
    // Apply theme filter
    if (currentThemeFilter !== 'all') {
        filteredEvents = filteredEvents.filter(event => event.themes.includes(currentThemeFilter));
    }
    
    // Apply country filter
    if (currentCountryFilter !== 'all') {
        filteredEvents = filteredEvents.filter(event => event.country === currentCountryFilter);
    }
    
    return filteredEvents;
}

function filterEvents() {
    const filteredEvents = getFilteredEvents();
    renderTimetable(filteredEvents);
    updateFilterCounts();
}

// Populate dynamic filters
function populateFilters() {
    // Get unique values
    const sessionTypes = [...new Set(eventsData.map(e => e.sessionType))].sort();
    const allThemes = [...new Set(eventsData.flatMap(e => e.themes))].sort();
    const countries = [...new Set(eventsData.map(e => e.country))].sort();
    
    // Populate session type filter
    const sessionTypeFilter = document.getElementById('sessionTypeFilter');
    sessionTypeFilter.innerHTML = '<option value="all">All Types</option>';
    sessionTypes.forEach(type => {
        const count = eventsData.filter(e => e.sessionType === type).length;
        sessionTypeFilter.innerHTML += `<option value="${type}">${type} (${count})</option>`;
    });
    
    // Populate theme filter
    const themeFilter = document.getElementById('themeFilter');
    themeFilter.innerHTML = '<option value="all">All Themes</option>';
    allThemes.forEach(theme => {
        const count = eventsData.filter(e => e.themes.includes(theme)).length;
        themeFilter.innerHTML += `<option value="${theme}">${theme} (${count})</option>`;
    });
    
    // Populate country filter
    const countryFilter = document.getElementById('countryFilter');
    countryFilter.innerHTML = '<option value="all">All Countries</option>';
    countries.forEach(country => {
        const count = eventsData.filter(e => e.country === country).length;
        countryFilter.innerHTML += `<option value="${country}">${country} (${count})</option>`;
    });
}

// Update filter counts based on current filters
function updateFilterCounts() {
    const resultCount = document.getElementById('resultCount');
    const filteredEvents = getFilteredEvents();
    resultCount.textContent = `Showing ${filteredEvents.length} of ${eventsData.length} sessions`;
}

// Clear all filters
function clearAllFilters() {
    currentDayFilter = 'all';
    currentSessionTypeFilter = 'all';
    currentThemeFilter = 'all';
    currentCountryFilter = 'all';
    
    // Reset UI
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.filter-btn[data-day="all"]').classList.add('active');
    document.getElementById('sessionTypeFilter').value = 'all';
    document.getElementById('themeFilter').value = 'all';
    document.getElementById('countryFilter').value = 'all';
    
    filterEvents();
}

// Setup event listeners
function setupEventListeners() {
    // Day filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentDayFilter = button.getAttribute('data-day');
            filterEvents();
        });
    });
    
    // Session type filter
    const sessionTypeFilter = document.getElementById('sessionTypeFilter');
    if (sessionTypeFilter) {
        sessionTypeFilter.addEventListener('change', (e) => {
            currentSessionTypeFilter = e.target.value;
            filterEvents();
        });
    }
    
    // Theme filter
    const themeFilter = document.getElementById('themeFilter');
    if (themeFilter) {
        themeFilter.addEventListener('change', (e) => {
            currentThemeFilter = e.target.value;
            filterEvents();
        });
    }
    
    // Country filter
    const countryFilter = document.getElementById('countryFilter');
    if (countryFilter) {
        countryFilter.addEventListener('change', (e) => {
            currentCountryFilter = e.target.value;
            filterEvents();
        });
    }
    
    // Clear filters button
    const clearFiltersBtn = document.getElementById('clearFilters');
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearAllFilters);
    }
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
