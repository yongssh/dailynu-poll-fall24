// Specific questions from each topic
const topicsData = {
    Demographics: [
        { id: 'class-year', label: 'Class Year' },
        { id: 'primary-school', label: 'Primary School' },
        { id: 'gender', label: 'Gender' },
        { id: 'sexual-orientation', label: 'Sexual Orientation' },
        { id: 'international-student-status', label: 'International Student Status' },
        { id: 'country-of-origin', label: 'Country of Origin' },
        { id: 'state-of-origin', label: 'State of Origin' },
        { id: 'race-ethnicity', label: 'Race/Ethnicity' },
        { id: 'financial-aid', label: 'Financial Aid' },
        { id: 'varsity-athletes', label: 'Varsity Athletes' },
        { id: 'greek-life', label: 'Greek Life' },
        { id: 'religious-affiliation', label: 'Religious Affiliation' },
    ],
    Admissions: [
        { id: 'admissions-round-accepted', label: 'Admissions Round Accepted' },
        { id: 'number-of-applications', label: 'Number of Applications' },
        { id: 'graduating-class-size', label: 'Graduating Class Size' },
        { id: 'high-school-type', label: 'High School Type' },
        { id: 'cost-of-attendance', label: 'Cost of Attendance' },
        { id: 'extracurriculars', label: 'Extracurriculars' },
        { id: 'legacy-and-relatives', label: 'Legacy and Relatives' },
    ],
    NorthwesternIssues: [
        { id: 'generative-ai-use', label: 'Generative AI Use' },
        { id: 'satisfaction', label: 'Satisfaction' },
        { id: 'off-campus-rent', label: 'Off-Campus Rent' },
        { id: 'schill-approval', label: 'Schill Approval' },
        { id: 'encampment-approval', label: 'Encampment Approval' },
        { id: 'deal-approval', label: 'Deal Approval' },
    ],
    Lifestyle: [
        { id: 'alcohol', label: 'Alcohol' },
        { id: 'drugs', label: 'Drugs' },
        { id: 'sex', label: 'Sex' },
        { id: 'romantic-relationships', label: 'Romantic Relationships' },
        { id: 'social-media', label: 'Social Media' },
        { id: 'reading', label: 'Reading' },
    ],
    NationalPolitics: [
        { id: 'political-leaning', label: 'Political Leaning' },
        { id: 'voting-likelihood', label: 'Voting Likelihood' },
        { id: 'voting-preference', label: 'Voting Preference' },
        { id: 'protest-attendance-history', label: 'Protest Attendance History' },
        { id: 'israel-palestine', label: 'Israel/Palestine' },
    ]
};

const broadTopicButtons = document.querySelectorAll('.broad-topic-container button');
const sidebar = document.getElementById('sidebar');
const specificTopicsContainer = document.getElementById('specific-topics');
const sidebarTitle = document.getElementById('sidebar-title');
const sections = document.querySelectorAll('.poll-section');

// Function to toggle the sidebar visibility
function toggleSidebar() {
    // Toggle the 'active' class on the sidebar
    sidebar.classList.toggle('active');

    // Set display property based on the sidebar's active status
    if (sidebar.classList.contains('active')) {
        sidebar.style.display = 'block'; // Show the sidebar
    } else {
        sidebar.style.display = 'none'; // Hide the sidebar
    }
}

// Track if a specific question/topic has been clicked
let specificTopicClicked = false;

// Default specific question for each broad topic
const defaultSpecificTopic = {
    Demographics: 'Class Year',
    Admissions: 'Admissions Round Accepted',
    NorthwesternIssues: 'Generative AI Use',
    Lifestyle: 'Alcohol',
    NationalPolitics: 'Political Leaning',
};

// For each broad topic button
broadTopicButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all broad topic buttons
        broadTopicButtons.forEach(btn => btn.classList.remove('active'));

        // Add 'active' class to the clicked button
        button.classList.add('active');

        // Hide all sections
        sections.forEach(section => section.classList.remove('active'));

        // Get clicked broad topic/category
        const broadTopic = button.getAttribute('data-topic');

        // Clear specific topics container for new broad topic
        specificTopicsContainer.innerHTML = '';

        // If specific topics/questions exist for this broad topic, create buttons
        if (topicsData[broadTopic]) {
            topicsData[broadTopic].forEach(topic => {
                // Button for each specific question
                const topicButton = document.createElement('button');
                topicButton.innerText = topic.label;
                topicButton.classList.add('specific-topic-button');

                // Add click event listener for each specific topic button
                topicButton.addEventListener('click', () => {
                    // Hide all sections
                    sections.forEach(section => section.classList.remove('active'));

                    // Only show the selected section
                    const sectionElement = document.getElementById(topic.id);
                    if (sectionElement) {
                        sectionElement.classList.add('active');
                    }

                    // Remove 'active' class from all specific topic buttons
                    const specificButtons = specificTopicsContainer.querySelectorAll('.specific-topic-button');
                    specificButtons.forEach(btn => btn.classList.remove('active'));

                    // Add 'active' class to the clicked specific button
                    topicButton.classList.add('active');
                });

                // Append the topic button to the specific topics container
                specificTopicsContainer.appendChild(topicButton);
            });
        }

        // Automatically trigger specific topics for each broad topic
        if (broadTopic === 'Demographics') {
            const demographicsDefaultButton = Array.from(specificTopicsContainer.querySelectorAll('.specific-topic-button')).find(btn => btn.innerText === 'Class Year');
            if (demographicsDefaultButton) {
                demographicsDefaultButton.click();
            }
        }

        if (broadTopic === 'Admissions') {
            const admissionsRoundAcceptedButton = Array.from(specificTopicsContainer.querySelectorAll('.specific-topic-button')).find(btn => btn.innerText === 'Admissions Round Accepted');
            if (admissionsRoundAcceptedButton) {
                admissionsRoundAcceptedButton.click();
            }
        }

        if (broadTopic === 'NorthwesternIssues') {
            const NUIssuesDefaultButton = Array.from(specificTopicsContainer.querySelectorAll('.specific-topic-button')).find(btn => btn.innerText === 'Generative AI Use');
            if (NUIssuesDefaultButton) {
                NUIssuesDefaultButton.click();
            }
        }

        if (broadTopic === 'Lifestyle') {
            const alcoholDefaultButton = Array.from(specificTopicsContainer.querySelectorAll('.specific-topic-button')).find(btn => btn.innerText === 'Alcohol');
            if (alcoholDefaultButton) {
                alcoholDefaultButton.click();
            }
        }

        if (broadTopic === 'NationalPolitics') {
            const nationalPoliticsDefaultButton = Array.from(specificTopicsContainer.querySelectorAll('.specific-topic-button')).find(btn => btn.innerText === 'Political Leaning');
            if (nationalPoliticsDefaultButton) {
                nationalPoliticsDefaultButton.click();
            }
        }
    });
});

// Automatically display "Class Year" section on page load
document.addEventListener('DOMContentLoaded', () => {
    // Trigger the Demographics button to be clicked
    const demographicsButton = document.querySelector('button[data-topic="Demographics"]');
    demographicsButton.click();

    // Trigger the "Class Year" button to select
    const specificButtons = specificTopicsContainer.querySelectorAll('.specific-topic-button');
    specificButtons.forEach(btn => {
        if (btn.innerText === 'Class Year') {
            btn.click();
        }
    });
});

document.getElementById('toggle-sidebar').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    // Toggle sidebar activee
    sidebar.classList.toggle('active'); 
});