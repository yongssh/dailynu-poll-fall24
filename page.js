
// specific questions from each topic
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
    NationalPolitics:[
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

let specificTopicClicked = false; // Flag to track if a specific topic has been clicked
// Define the default specific question for each broad topic
const defaultSpecificTopic = {
    Demographics: 'Class Year',
    Admissions: 'Admissions Round Accepted',
    NorthwesternIssues: 'Generative AI Use',
    Lifestyle: 'Alcohol',
    NationalPolitics: 'Political Leaning',
};
// Select all the broad topic buttons

// Iterate over each broad topic button
broadTopicButtons.forEach(button => {
    button.addEventListener('click', () => {

        // Remove 'active' class from all broad topic buttons
        broadTopicButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add 'active' class to the clicked button
        button.classList.add('active');

        // Hide all sections
        sections.forEach(section => section.classList.remove('active'));

        // Get the broad topic that was clicked
        const broadTopic = button.getAttribute('data-topic');

        // Clear specific topics container for new broad topic
        specificTopicsContainer.innerHTML = '';
        

        
// If there are specific topics for this broad topic, create buttons
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
                    
                    // Show the selected section
                    const sectionElement = document.getElementById(topic.id);
                    if (sectionElement) {
                        sectionElement.classList.add('active');
                    }

                    // Remove 'active' class from all specific topic buttons
                    const specificButtons = specificTopicsContainer.querySelectorAll('.specific-topic-button');
                    specificButtons.forEach(btn => btn.classList.remove('active'));

                    // Add 'active' class to the clicked specific topic button
                    topicButton.classList.add('active');
                });

        // Append the topic button to the specific topics container
        specificTopicsContainer.appendChild(topicButton);
    });
}

    if (broadTopic === 'Demographics') {
        const demographicsDefaultButton = Array.from(specificTopicsContainer.querySelectorAll('.specific-topic-button')).find(btn => btn.innerText === 'Class Year');
        if (demographicsDefaultButton) {
            demographicsDefaultButton.click();
        }
    };

    // Automatically trigger the specific topic if the broad topic is Admissions
    if (broadTopic === 'Admissions') {
        const admissionsRoundAcceptedButton = Array.from(specificTopicsContainer.querySelectorAll('.specific-topic-button')).find(btn => btn.innerText === 'Admissions Round Accepted');
        if (admissionsRoundAcceptedButton) {
            admissionsRoundAcceptedButton.click();
        }
    };
    // Automatically trigger the specific topic if the broad topic is NU Issues
    if (broadTopic === 'NorthwesternIssues') {
        const NUIssuesDefaultButton = Array.from(specificTopicsContainer.querySelectorAll('.specific-topic-button')).find(btn => btn.innerText === 'Generative AI Use');
        if (NUIssuesDefaultButton) {
            NUIssuesDefaultButton.click();
        }
    };
    // Automatically trigger the specific topic if the broad topic is Lifestyle
    if (broadTopic === 'Lifestyle') {
        const alcoholDefaultButton = Array.from(specificTopicsContainer.querySelectorAll('.specific-topic-button')).find(btn => btn.innerText === 'Alcohol');
        if (alcoholDefaultButton) {
            alcoholDefaultButton.click();
        }
    };

       // Automatically trigger the specific topic if the broad topic is National Politics
       if (broadTopic === 'NationalPolitics') {
        const nationalPoliticsDefaultButton = Array.from(specificTopicsContainer.querySelectorAll('.specific-topic-button')).find(btn => btn.innerText === 'Political Leaning');
        if (nationalPoliticsDefaultButton) {
            nationalPoliticsDefaultButton.click();
        }
    };

});
});


// Automatically display "Class Year" section on page load
document.addEventListener('DOMContentLoaded', () => {
    // Trigger the Demographics button to be clicked
    const demographicsButton = document.querySelector('button[data-topic="Demographics"]');
    demographicsButton.click();

    // Simulate clicking the "Class Year" button
    const specificButtons = specificTopicsContainer.querySelectorAll('.specific-topic-button');
    specificButtons.forEach(btn => {
        if (btn.innerText === 'Class Year') {
            btn.click();
        }
    });
});