
// specific questions from each topic
const topicsData = {
    Demographics: [
        { id: 'class-year', label: 'Class Year' },
        { id: 'primary-school', label: 'Primary School' },
        { id: 'gender', label: 'Gender' },
        { id: 'sexual-orientation', label: 'Sexual Orientation' },
        { id: 'international-student-status', label: 'International Student Status' },


    ],
    broadTopic2: [
        { id: 'section2-1', label: 'Specific Topic 2-1' },
        { id: 'section2-2', label: 'Specific Topic 2-2' }
    ],
    broadTopic3: [
        { id: 'section3-1', label: 'Specific Topic 3-1' },
        { id: 'section3-2', label: 'Specific Topic 3-2' }
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
        // Create a button for each specific topic
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
                console.log("hi")
                sectionElement.classList.add('active');
                console.log("active")
            }
        });

        // Append the topic button to the specific topics container
        specificTopicsContainer.appendChild(topicButton);
    });
}
});
});


