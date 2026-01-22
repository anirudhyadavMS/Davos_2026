// Real event data for Davos Summit 2026 (WEF Annual Meeting)
// Note: WEF hosts 200+ sessions but only major sessions are publicly detailed
// Data compiled from official WEF sources and media coverage
const eventsData = [
    // Day 1 - January 20, 2026 (Day 2 of WEF - Meeting started Jan 19)
    {
        id: 1,
        date: "2026-01-20",
        time: "10:30",
        title: "Welcome Address",
        speaker: "Klaus Schwab, Executive Chairman, World Economic Forum",
        description: "Opening welcome and introduction to the Annual Meeting 2026 theme: A Spirit of Dialogue",
        location: "Congress Centre - Main Hall",
        status: "completed",
        summary: "Klaus Schwab opened the 2026 Annual Meeting with a call for renewed global dialogue amidst rising tensions. He emphasized the importance of cooperation and understanding in addressing the world's most pressing challenges.",
        highlights: [
            "Theme 'A Spirit of Dialogue' introduced to promote constructive conversations",
            "Acknowledged increasing global fragmentation and need for multilateral cooperation",
            "Set the tone for addressing AI, climate change, and economic uncertainties"
        ],
        recordingLink: "https://www.weforum.org/events/world-economic-forum-annual-meeting-2026/sessions/welcome-address"
    },
    {
        id: 2,
        date: "2026-01-20",
        time: "10:50",
        title: "Special Address by Ursula von der Leyen",
        speaker: "Ursula von der Leyen, President of the European Commission",
        description: "Europe's response to global challenges and trade partnerships. Von der Leyen stated: 'Europe will always choose the world, and the world is ready to choose Europe'",
        location: "Congress Centre - Main Hall",
        status: "completed",
        summary: "Von der Leyen delivered a strong message of European solidarity and global engagement, emphasizing Europe's commitment to multilateralism. She outlined Europe's vision for trade partnerships and response to emerging geopolitical challenges.",
        highlights: [
            "Powerful statement: 'Europe will always choose the world, and the world is ready to choose Europe'",
            "Emphasized Europe's role as a stabilizing force in global affairs",
            "Discussed strategic partnerships and trade agreements with multiple regions",
            "Addressed climate commitments and green technology leadership"
        ],
        recordingLink: "https://www.weforum.org/events/world-economic-forum-annual-meeting-2026/sessions/special-address-ursula-von-der-leyen"
    },
    {
        id: 3,
        date: "2026-01-20",
        time: "11:20",
        title: "Special Address by He Lifeng",
        speaker: "He Lifeng, Vice-Premier of the People's Republic of China",
        description: "China's perspective on global economic cooperation and development",
        location: "Congress Centre - Main Hall",
        status: "completed",
        summary: "Vice-Premier He Lifeng presented China's vision for continued economic cooperation and global development. He emphasized mutual benefits, win-win cooperation, and China's commitment to opening up its economy.",
        highlights: [
            "Reaffirmed China's commitment to economic globalization",
            "Discussed Belt and Road Initiative progress and future plans",
            "Emphasized importance of stable US-China relations for global economy",
            "Highlighted China's role in sustainable development"
        ],
        recordingLink: "https://www.weforum.org/events/world-economic-forum-annual-meeting-2026/sessions/special-address-he-lifeng"
    },
    {
        id: 4,
        date: "2026-01-20",
        time: "14:00",
        title: "Special Address by Emmanuel Macron",
        speaker: "Emmanuel Macron, President of France",
        description: "Macron addresses the rapidly evolving geopolitical landscape: 'Faced with the brutalization of the world, France and Europe must defend an effective multilateralism'",
        location: "Congress Centre - Main Hall",
        status: "completed",
        summary: "President Macron delivered a forceful speech on the need for multilateralism in an increasingly fragmented world. He warned against the 'brutalization of the world' and called for European strategic autonomy while maintaining alliances.",
        highlights: [
            "Coined phrase: 'Faced with the brutalization of the world, France and Europe must defend an effective multilateralism'",
            "Called for European defense independence alongside NATO commitments",
            "Discussed France's vision for technological sovereignty",
            "Emphasized importance of dialogue with all global powers"
        ],
        recordingLink: "https://www.weforum.org/events/world-economic-forum-annual-meeting-2026/sessions/special-address-emmanuel-macron"
    },
    {
        id: 5,
        date: "2026-01-20",
        time: "16:30",
        title: "Special Address by Mark Carney",
        speaker: "Mark Carney, Prime Minister of Canada",
        description: "Canada's vision for global cooperation and economic policy",
        location: "Congress Centre - Main Hall",
        status: "completed",
        summary: "Prime Minister Carney outlined Canada's approach to navigating complex global challenges, emphasizing climate action, inclusive growth, and multilateral cooperation. He discussed Canada's unique position as a bridge between different global powers.",
        highlights: [
            "Presented Canada's climate and economic policy integration",
            "Emphasized importance of rules-based international order",
            "Discussed Canada's strategic minerals and clean energy initiatives",
            "Called for renewed North American economic cooperation"
        ],
        recordingLink: "https://www.weforum.org/events/world-economic-forum-annual-meeting-2026/sessions/special-address-mark-carney"
    },

    // Day 2 - January 21, 2026 (Day 3 of WEF)
    {
        id: 6,
        date: "2026-01-21",
        time: "08:00",
        title: "Press Conference: Global Trade Issues",
        speaker: "Scott Bessent, US Treasury Secretary",
        description: "Media briefing on US trade policy and global economic outlook",
        location: "Congress Centre - Press Room A",
        status: "completed",
        summary: "Treasury Secretary Bessent held a press conference addressing US trade policy, tariff strategies, and the administration's economic priorities. He fielded questions on US-China trade relations and global financial stability.",
        highlights: [
            "Outlined US trade policy priorities and tariff considerations",
            "Discussed dollar strength and currency stability",
            "Addressed questions on US-China economic relations",
            "Provided insights on US economic growth projections"
        ],
        recordingLink: "https://www.weforum.org/events/world-economic-forum-annual-meeting-2026/sessions/press-conference-scott-bessent"
    },
    {
        id: 7,
        date: "2026-01-21",
        time: "09:00",
        title: "Session: Can Russia Sustain a Wartime Economy?",
        speaker: "Panel of Economic Experts and Geopolitical Analysts",
        description: "Analysis of Russia's economic situation and sustainability of its wartime spending",
        location: "Congress Centre - Geopolitics Forum",
        status: "completed",
        summary: "Expert panel analyzed Russia's economic resilience under sanctions and wartime spending. Discussion covered oil revenues, alternative trade routes, domestic industrial capacity, and long-term sustainability concerns.",
        highlights: [
            "Analysis of Russian oil revenue flows despite sanctions",
            "Discussion of alternative trade partnerships with Asia",
            "Concerns about long-term industrial base degradation",
            "Assessment of Russian central bank's monetary policy effectiveness"
        ],
        recordingLink: "https://www.weforum.org/events/world-economic-forum-annual-meeting-2026/sessions/russia-wartime-economy"
    },
    {
        id: 8,
        date: "2026-01-21",
        time: "09:30",
        title: "Special Address by Abdel Fattah El-Sisi",
        speaker: "Abdel Fattah El-Sisi, President of Egypt",
        description: "Egypt's role in regional stability and Middle Eastern affairs",
        location: "Congress Centre - Main Hall",
        status: "completed",
        summary: "President El-Sisi emphasized Egypt's role as a stabilizing force in the Middle East and North Africa. He discussed Egypt's economic reforms, infrastructure projects, and efforts to mediate regional conflicts.",
        highlights: [
            "Highlighted Egypt's mediation role in Gaza ceasefire efforts",
            "Outlined major infrastructure and development projects",
            "Discussed Egypt's economic reform progress",
            "Emphasized Egypt-Africa cooperation initiatives"
        ],
        recordingLink: "https://www.weforum.org/events/world-economic-forum-annual-meeting-2026/sessions/special-address-el-sisi"
    },
    {
        id: 9,
        date: "2026-01-21",
        time: "10:15",
        title: "Panel Discussion: Can Europe Defend Itself?",
        speaker: "European Defense Ministers and NATO Officials",
        description: "Debate on European defense capabilities, NATO relationship, and security architecture",
        location: "Congress Centre - Security Forum",
        status: "completed",
        summary: "High-level panel debated European defense spending, military capabilities, and the balance between NATO commitments and European strategic autonomy. Discussion covered defense industrial base and joint procurement.",
        highlights: [
            "Debate on achieving 2-3% GDP defense spending targets",
            "Discussion of European defense industrial cooperation",
            "Assessment of European military readiness",
            "Balance between NATO integration and strategic autonomy"
        ],
        recordingLink: "https://www.weforum.org/events/world-economic-forum-annual-meeting-2026/sessions/europe-defense"
    },
    {
        id: 10,
        date: "2026-01-21",
        time: "11:30",
        title: "Conversation with Jensen Huang",
        speaker: "Jensen Huang, President and CEO of NVIDIA & Larry Fink, Chair and CEO of BlackRock",
        description: "Discussion on AI infrastructure, innovation, and the future of computing",
        location: "Congress Centre - Technology Hub",
        status: "completed",
        summary: "Jensen Huang discussed NVIDIA's AI infrastructure vision and the transformative potential of accelerated computing. Larry Fink added perspective on AI investment opportunities and risks. The conversation covered AI's economic impact and infrastructure needs.",
        highlights: [
            "Huang described AI as the most significant technology platform shift in decades",
            "Discussed massive infrastructure investments needed for AI computing",
            "Fink emphasized AI's potential to transform productivity and growth",
            "Conversation covered AI sovereignty and global competition"
        ],
        recordingLink: "https://www.weforum.org/events/world-economic-forum-annual-meeting-2026/sessions/conversation-jensen-huang"
    },
    {
        id: 11,
        date: "2026-01-21",
        time: "12:30",
        title: "Panel Discussion: India's Path to Becoming Third-Largest Economy",
        speaker: "Ashwini Vaishnaw (India Minister), Gita Gopinath (Harvard/IMF), Sunil Bharti Mittal (Bharti Enterprises CEO), Juvencio Maeztu Herrera (IKEA CEO)",
        description: "India could grow 6-8% annually to become world's third-largest economy by 2028. Discussion covers government reforms, manufacturing, innovation, and challenges including global competition",
        location: "Business Today India Lounge",
        status: "completed",
        summary: "High-profile panel discussed India's economic trajectory and potential to become the world's third-largest economy by 2028. Minister Vaishnaw outlined government reforms, Gopinath provided IMF perspective on growth projections, while Mittal and Herrera shared private sector insights on India's business environment and opportunities.",
        highlights: [
            "India projected to achieve 6-8% annual GDP growth",
            "Government reforms in manufacturing, digital infrastructure discussed",
            "Private sector optimism about India's market potential",
            "Challenges include global trade tensions and infrastructure needs",
            "Discussion on 'Make in India' initiative progress"
        ],
        recordingLink: "https://www.weforum.org/events/world-economic-forum-annual-meeting-2026/sessions/india-economy-panel"
    },
    {
        id: 12,
        date: "2026-01-21",
        time: "13:00",
        title: "Conversation with Jamie Dimon",
        speaker: "Jamie Dimon, Chairman and CEO of JPMorgan Chase & Zanny Minton Beddoes, Editor-in-Chief of The Economist",
        description: "Wide-ranging discussion on markets, AI impact on finance, and global trade",
        location: "Congress Centre - Finance Forum",
        status: "completed",
        summary: "Jamie Dimon provided candid insights on global economic conditions, the banking sector, and geopolitical risks. He discussed AI's transformative potential in financial services while noting regulatory and competitive challenges.",
        highlights: [
            "Dimon expressed cautious optimism on US economy despite uncertainties",
            "Discussed AI's potential to revolutionize banking operations",
            "Warned about geopolitical risks and trade fragmentation",
            "Addressed banking regulation and capital requirements"
        ],
        recordingLink: "https://www.weforum.org/events/world-economic-forum-annual-meeting-2026/sessions/conversation-jamie-dimon"
    },
    {
        id: 13,
        date: "2026-01-21",
        time: "13:30",
        title: "Conversation with Mohammad Mustafa",
        speaker: "Mohammad Mustafa, Prime Minister of the Palestinian National Authority",
        description: "Palestinian perspective on Middle East peace process and regional development",
        location: "Congress Centre - Diplomacy Hall",
        status: "completed",
        summary: "Prime Minister Mustafa discussed Palestinian economic development priorities, reconstruction needs, and the path toward sustainable peace. He emphasized the importance of economic support and international engagement.",
        highlights: [
            "Outlined Palestinian economic development vision",
            "Discussed reconstruction and humanitarian needs",
            "Called for renewed international support for peace process",
            "Emphasized importance of economic stability for lasting peace"
        ],
        recordingLink: "https://www.weforum.org/events/world-economic-forum-annual-meeting-2026/sessions/conversation-mohammad-mustafa"
    },
    {
        id: 14,
        date: "2026-01-21",
        time: "14:30",
        title: "Special Address by Donald J. Trump",
        speaker: "Donald J. Trump, President of the United States of America",
        description: "US President addresses Davos on American economic policy, trade, Greenland, NATO, and housing affordability",
        location: "Congress Centre - Main Hall",
        status: "completed",
        summary: "President Trump delivered a wide-ranging address covering US economic policy, trade negotiations, and foreign policy priorities. He discussed tariff strategies, energy policy, and housing affordability while touching on controversial topics including Greenland and NATO spending.",
        highlights: [
            "Outlined 'America First' trade policy and tariff strategies",
            "Discussed energy dominance and regulatory rollbacks",
            "Addressed NATO burden-sharing and defense spending",
            "Mentioned Greenland strategic importance controversially",
            "Highlighted housing affordability initiatives"
        ],
        recordingLink: "https://www.weforum.org/events/world-economic-forum-annual-meeting-2026/sessions/special-address-trump"
    },
    {
        id: 15,
        date: "2026-01-21",
        time: "15:45",
        title: "Special Address by Javier Milei",
        speaker: "Javier Milei, President of Argentina",
        description: "Argentina's economic reforms and vision for the future",
        location: "Congress Centre - Main Hall",
        status: "completed",
        summary: "President Milei presented Argentina's radical economic reform agenda, including fiscal austerity, deregulation, and market-oriented policies. He defended his approach to tackling inflation and rebuilding Argentina's economy.",
        highlights: [
            "Outlined aggressive fiscal consolidation and spending cuts",
            "Discussed plans to dollarize or stabilize the peso",
            "Defended free-market reforms and deregulation agenda",
            "Addressed inflation reduction progress and challenges"
        ],
        recordingLink: "https://www.weforum.org/events/world-economic-forum-annual-meeting-2026/sessions/special-address-milei"
    },
    {
        id: 16,
        date: "2026-01-21",
        time: "17:00",
        title: "Roundtable: AI Valuation and Productivity",
        speaker: "Tech CEOs, Economists including Gita Gopinath",
        description: "Discussion on AI revenue models and productivity growth. Gopinath notes: 'It's unclear what the revenue model is going to be for companies'",
        location: "Steigenberger Hotel - Tech Forum",
        status: "completed",
        summary: "Expert roundtable examined the economic implications of massive AI investments and questioned whether current valuations are justified by productivity gains. Gita Gopinath raised concerns about unclear revenue models while tech leaders defended AI's transformative potential.",
        highlights: [
            "Gopinath's key concern: 'It's unclear what the revenue model is going to be for companies'",
            "Debate on AI productivity paradox and measurement challenges",
            "Discussion of massive capital expenditures by tech companies",
            "Questions about timeline for AI ROI and economic impact"
        ],
        recordingLink: "https://www.weforum.org/events/world-economic-forum-annual-meeting-2026/sessions/ai-valuation-roundtable"
    },

    // Day 3 - January 22, 2026 (Day 4 of WEF - Today)
    {
        id: 17,
        date: "2026-01-22",
        time: "09:00",
        title: "Session: Trade Deals, Exports and Tariff Challenges",
        speaker: "Ashwini Vaishnaw, India Minister & Brad Smith, Microsoft Vice-Chair",
        description: "India's concerns about developed world's debt mountain and tariff impacts. Discussion on trade agreements and export strategies",
        location: "Congress Centre - Trade Forum",
        status: "in-progress",
        summary: "Session currently underway. Check back soon for summary and highlights.",
        highlights: [],
        recordingLink: null
    },
    {
        id: 18,
        date: "2026-01-22",
        time: "10:30",
        title: "Panel Discussion: Global Economic Outlook with IMF",
        speaker: "Kristalina Georgieva, IMF Managing Director & Khalid Al-Falih, Saudi Arabia Minister of Investment",
        description: "IMF's latest economic projections and discussion on global growth challenges",
        location: "Congress Centre - Economics Hall",
        status: "in-progress",
        summary: "Session currently underway. Check back soon for summary and highlights.",
        highlights: [],
        recordingLink: null
    },
    {
        id: 19,
        date: "2026-01-22",
        time: "12:00",
        title: "Session: Climate Finance and Green Transition",
        speaker: "Climate Ministers and Finance Leaders",
        description: "Announcements on climate funding pledges and sustainable investment initiatives",
        location: "Climate Hub Davos",
        status: "in-progress",
        summary: "Session currently underway. Check back soon for summary and highlights.",
        highlights: [],
        recordingLink: null
    },
    {
        id: 20,
        date: "2026-01-22",
        time: "14:00",
        title: "Roundtable: AI Ethics and Technology Regulation",
        speaker: "Satya Nadella (Microsoft CEO), Dario Amodei (Anthropic CEO), Demis Hassabis (DeepMind CEO)",
        description: "Tech pioneers discuss ethical AI development, safety, and regulatory frameworks",
        location: "Congress Centre - AI Forum",
        status: "in-progress",
        summary: "Session currently underway. Check back soon for summary and highlights.",
        highlights: [],
        recordingLink: null
    },
    {
        id: 21,
        date: "2026-01-22",
        time: "16:00",
        title: "Session: Tariff Impacts on Emerging Economies",
        speaker: "Gita Gopinath and Trade Economists",
        description: "Gopinath warns tariffs could reduce India's growth by 0.7 percentage points. Discussion on trade policy impacts",
        location: "Congress Centre - Economics Hall",
        status: "in-progress",
        summary: "Session currently underway. Check back soon for summary and highlights.",
        highlights: [],
        recordingLink: null
    },

    // Day 4 - January 23, 2026 (Day 5 of WEF - Final Day)
    {
        id: 22,
        date: "2026-01-23",
        time: "09:00",
        title: "Conversation with Gavin Newsom",
        speaker: "Gavin Newsom, Governor of California",
        description: "California's policies on climate, technology, and innovation",
        location: "Congress Centre - Innovation Hub",
        status: "upcoming",
        summary: "Coming soon. This session is scheduled for tomorrow.",
        highlights: [],
        recordingLink: null
    },
    {
        id: 23,
        date: "2026-01-23",
        time: "09:30",
        title: "Climate Hub Davos - Closing Session & Special Screening",
        speaker: "GreenUp and WISDOM HEALTH",
        description: "Closing event for climate discussions with special sustainability screening",
        location: "Climate Hub Davos",
        status: "upcoming",
        summary: "Coming soon. This session is scheduled for tomorrow.",
        highlights: [],
        recordingLink: null
    },
    {
        id: 24,
        date: "2026-01-23",
        time: "10:30",
        title: "Special Address by Friedrich Merz",
        speaker: "Friedrich Merz, Federal Chancellor of Germany",
        description: "Germany's Chancellor shares views on global and European challenges",
        location: "Congress Centre - Main Hall",
        status: "upcoming",
        summary: "Coming soon. This session is scheduled for tomorrow.",
        highlights: [],
        recordingLink: null
    },
    {
        id: 25,
        date: "2026-01-23",
        time: "11:30",
        title: "Special Address by Isaac Herzog",
        speaker: "Isaac Herzog, President of Israel",
        description: "Israel's perspective on regional security and Middle East developments",
        location: "Congress Centre - Main Hall",
        status: "upcoming",
        summary: "Coming soon. This session is scheduled for tomorrow.",
        highlights: [],
        recordingLink: null
    },
    {
        id: 26,
        date: "2026-01-23",
        time: "13:00",
        title: "Special Address by Kyriakos Mitsotakis",
        speaker: "Kyriakos Mitsotakis, Prime Minister of Greece",
        description: "Greece's economic recovery and role in European affairs",
        location: "Congress Centre - Main Hall",
        status: "upcoming",
        summary: "Coming soon. This session is scheduled for tomorrow.",
        highlights: [],
        recordingLink: null
    },
    {
        id: 27,
        date: "2026-01-23",
        time: "14:00",
        title: "Special Address by Prabowo Subianto",
        speaker: "Prabowo Subianto, President of Indonesia",
        description: "Indonesia's development strategy and regional leadership in Southeast Asia",
        location: "Congress Centre - Main Hall",
        status: "upcoming",
        summary: "Coming soon. This session is scheduled for tomorrow.",
        highlights: [],
        recordingLink: null
    },
    {
        id: 28,
        date: "2026-01-23",
        time: "15:00",
        title: "Panel Discussion: Global Financial Leadership",
        speaker: "Ngozi Okonjo-Iweala (WTO Director-General), Kristalina Georgieva (IMF), Christine Lagarde (ECB President)",
        description: "Top global financial leaders discuss trade, monetary policy, and economic cooperation",
        location: "Congress Centre - Finance Forum",
        status: "upcoming",
        summary: "Coming soon. This session is scheduled for tomorrow.",
        highlights: [],
        recordingLink: null
    },
    {
        id: 29,
        date: "2026-01-23",
        time: "16:30",
        title: "Closing Remarks: A Spirit of Dialogue - Summit Outcomes",
        speaker: "Klaus Schwab, Executive Chairman, World Economic Forum & Summit Co-Chairs",
        description: "Reflections on major announcements, agreements, and commitments from Davos 2026. Summary of action plans and global cooperation initiatives",
        location: "Congress Centre - Main Hall",
        status: "upcoming",
        summary: "Coming soon. This session is scheduled for tomorrow.",
        highlights: [],
        recordingLink: null
    }
];

// State management
let currentFilter = 'all';

// Initialize the application
function init() {
    renderTimetable(eventsData);
    setupEventListeners();
    displayDisclaimer();
    createModal();
}

// Display disclaimer about session coverage
function displayDisclaimer() {
    const disclaimer = document.createElement('div');
    disclaimer.className = 'disclaimer';
    disclaimer.innerHTML = `
        <p><strong>Note:</strong> The World Economic Forum Annual Meeting 2026 features over 200 sessions.
        This timetable includes major keynote addresses, special addresses, and publicly announced sessions.
        Many smaller sessions, private roundtables, and bilateral meetings are not included in public schedules.</p>
    `;
    document.querySelector('.container').insertBefore(disclaimer, document.getElementById('timetable'));
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

// Open modal with event details
function openModal(eventId) {
    const event = eventsData.find(e => e.id === eventId);
    if (!event) return;

    const modal = document.getElementById('eventModal');

    // Populate modal content
    document.getElementById('modalTitle').textContent = event.title;
    document.getElementById('modalSpeaker').textContent = event.speaker;
    document.getElementById('modalTime').textContent = `${event.date} at ${event.time}`;
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

// Close modal
function closeModal() {
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
                    <div class="time-label">${event.time}</div>
                    <div class="event-card ${statusClass}" onclick="openModal(${event.id})" style="cursor: pointer;">
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
function filterEvents(day) {
    currentFilter = day;

    if (day === 'all') {
        renderTimetable(eventsData);
    } else {
        const filteredEvents = eventsData.filter(event => event.date === day);
        renderTimetable(filteredEvents);
    }
}

// Setup event listeners
function setupEventListeners() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Filter events
            const day = button.getAttribute('data-day');
            filterEvents(day);
        });
    });
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
