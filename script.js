// Sample event data for Davos Summit 2026
const eventsData = [
    // Day 1 - January 20, 2026
    {
        id: 1,
        date: "2026-01-20",
        time: "09:00",
        title: "Opening Ceremony - The State of the Global Economy",
        speaker: "Klaus Schwab, Executive Chairman, World Economic Forum",
        description: "Welcome address and keynote on the global economic outlook for 2026",
        location: "Congress Centre - Main Hall"
    },
    {
        id: 2,
        date: "2026-01-20",
        time: "10:30",
        title: "Climate Action: From Commitment to Implementation",
        speaker: "Greta Thunberg, Climate Activist & Dr. Jane Goodall, Primatologist",
        description: "A critical discussion on accelerating climate action and sustainable development",
        location: "Congress Centre - Plenary Room"
    },
    {
        id: 3,
        date: "2026-01-20",
        time: "13:00",
        title: "The Future of Artificial Intelligence",
        speaker: "Satya Nadella, CEO Microsoft & Sam Altman, CEO OpenAI",
        description: "Exploring AI's transformative impact on society, economy, and governance",
        location: "Congress Centre - Innovation Hub"
    },
    {
        id: 4,
        date: "2026-01-20",
        time: "15:30",
        title: "Global Health Security in the Post-Pandemic Era",
        speaker: "Dr. Tedros Adhanom Ghebreyesus, WHO Director-General",
        description: "Lessons learned from COVID-19 and building resilient health systems",
        location: "Congress Centre - Health Forum"
    },
    {
        id: 5,
        date: "2026-01-20",
        time: "17:00",
        title: "Cryptocurrency and the Future of Finance",
        speaker: "Christine Lagarde, ECB President & Brian Armstrong, Coinbase CEO",
        description: "Digital currencies, regulation, and the evolution of global finance",
        location: "Congress Centre - Finance Hall"
    },

    // Day 2 - January 21, 2026
    {
        id: 6,
        date: "2026-01-21",
        time: "09:00",
        title: "Geopolitical Risks and Global Cooperation",
        speaker: "António Guterres, UN Secretary-General",
        description: "Navigating international tensions and fostering multilateral cooperation",
        location: "Congress Centre - Main Hall"
    },
    {
        id: 7,
        date: "2026-01-21",
        time: "11:00",
        title: "The Energy Transition: Challenges and Opportunities",
        speaker: "Fatih Birol, IEA Executive Director & Elon Musk, Tesla CEO",
        description: "Accelerating the shift to renewable energy and sustainable transportation",
        location: "Congress Centre - Energy Forum"
    },
    {
        id: 8,
        date: "2026-01-21",
        time: "14:00",
        title: "Education Revolution: Preparing for the Future of Work",
        speaker: "Malala Yousafzai, Education Activist & Sal Khan, Khan Academy Founder",
        description: "Transforming education systems to meet 21st century challenges",
        location: "Congress Centre - Education Center"
    },
    {
        id: 9,
        date: "2026-01-21",
        time: "16:00",
        title: "Space Exploration and Commercialization",
        speaker: "Jeff Bezos, Blue Origin & Dr. Mae Jemison, Astronaut",
        description: "The next frontier: commercial space travel and space economies",
        location: "Congress Centre - Innovation Hub"
    },

    // Day 3 - January 22, 2026
    {
        id: 10,
        date: "2026-01-22",
        time: "09:00",
        title: "Cybersecurity in an Interconnected World",
        speaker: "Brad Smith, Microsoft President & Jen Easterly, CISA Director",
        description: "Protecting critical infrastructure and digital ecosystems",
        location: "Congress Centre - Technology Forum"
    },
    {
        id: 11,
        date: "2026-01-22",
        time: "11:00",
        title: "Women in Leadership: Breaking Barriers",
        speaker: "Ursula von der Leyen, European Commission President & Jacinda Ardern, Former PM",
        description: "Advancing gender equality and women's representation in leadership",
        location: "Congress Centre - Diversity Hall"
    },
    {
        id: 12,
        date: "2026-01-22",
        time: "14:00",
        title: "Innovation in Healthcare and Biotechnology",
        speaker: "Dr. Anthony Fauci & Dr. Jennifer Doudna, Nobel Laureate",
        description: "CRISPR, gene therapy, and the future of personalized medicine",
        location: "Congress Centre - Health Forum"
    },
    {
        id: 13,
        date: "2026-01-22",
        time: "16:30",
        title: "The Metaverse and Web3: Next Internet Revolution",
        speaker: "Mark Zuckerberg, Meta CEO & Vitalik Buterin, Ethereum Co-founder",
        description: "Exploring virtual worlds, digital ownership, and decentralized networks",
        location: "Congress Centre - Digital Arena"
    },

    // Day 4 - January 23, 2026
    {
        id: 14,
        date: "2026-01-23",
        time: "09:00",
        title: "Sustainable Food Systems and Agriculture",
        speaker: "Dr. Vandana Shiva, Food Sovereignty Activist",
        description: "Feeding the world while protecting our planet",
        location: "Congress Centre - Sustainability Forum"
    },
    {
        id: 15,
        date: "2026-01-23",
        time: "11:00",
        title: "The Future of Democracy and Governance",
        speaker: "Emmanuel Macron, President of France & Tsai Ing-wen, Taiwan President",
        description: "Strengthening democratic institutions in the digital age",
        location: "Congress Centre - Governance Hall"
    },
    {
        id: 16,
        date: "2026-01-23",
        time: "14:00",
        title: "Quantum Computing: The Next Computing Revolution",
        speaker: "Dr. Michio Kaku, Physicist & Sundar Pichai, Google CEO",
        description: "Understanding quantum computing and its transformative potential",
        location: "Congress Centre - Innovation Hub"
    },
    {
        id: 17,
        date: "2026-01-23",
        time: "16:00",
        title: "Closing Remarks: Our Collective Future",
        speaker: "Klaus Schwab, Executive Chairman, World Economic Forum",
        description: "Reflections on the summit and commitments for global cooperation",
        location: "Congress Centre - Main Hall"
    }
];

// State management
let currentFilter = 'all';

// Initialize the application
function init() {
    renderTimetable(eventsData);
    setupEventListeners();
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
            html += `
                <div class="time-slot">
                    <div class="time-label">${event.time}</div>
                    <div class="event-card">
                        <h4 class="event-title">${event.title}</h4>
                        <div class="event-speaker">${event.speaker}</div>
                        <p class="event-description">${event.description}</p>
                        <span class="event-location">${event.location}</span>
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
