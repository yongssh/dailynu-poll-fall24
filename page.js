
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
    Northwestern_Issues: [
        { id: 'generative-ai-use', label: 'Generative AI Use' },
        { id: 'satisfaction', label: 'Satisfaction' },
        { id: 'off-campus-rent', label: 'Off-Campus Rent' },
        { id: 'schill-approval-by-class-year', label: 'Schill Approval by Class Year' },
        { id: 'schill-approval-by-deal-approval', label: 'Schill Approval by Deal Approval' },
        { id: 'encampment-approval', label: 'Encampment Approval' },
        { id: 'deal-approval', label: 'Deal Approval' },
    ],
    lifestyle: [
        { id: 'alcohol', label: 'Alcohol' },
        { id: 'drugs', label: 'Drugs' },
        { id: 'sex-by-gender', label: 'Sex by Gender' },
        { id: 'sex-by-sexual-orientation', label: 'Sex by Sexual Orientation' },
        { id: 'sex-by-relationship-status', label: 'Sex by Relationship Status' },
        { id: 'romantic-relationships', label: 'Romantic Relationships' },
        { id: 'social-media', label: 'Social Media' },
        { id: 'reading', label: 'Reading' },
    ],
    NationalPolitics:[
        { id: 'political-leaning-engagement', label: 'Political Leaning and Engagement' },
        { id: 'political-engagement-standalone', label: 'Political Engagement (Standalone)' },
        { id: 'biden-approval', label: 'Biden Approval' },
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
        });

        // Append the topic button to the specific topics container
        specificTopicsContainer.appendChild(topicButton);
    });
}
});
});


