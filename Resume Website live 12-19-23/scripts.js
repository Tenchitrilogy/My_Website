// Fetch employment data dynamically (you'll need to fetch your data)
const employmentData = [
  {
    title: 'Network Administrator',
    company: 'Bloomfield Board of Education',
    location: 'Bloomfield, NJ',
    duration: '2009 - Present',
    responsibilities: [
      'Monitoring day-to-day network operations',
      'Providing technical assistance',
      // Add your responsibilities
    ],
    // Add other job details
  },
  // Add other job experiences
];

// Populate employment timeline
const employmentTimeline = document.getElementById('employment-timeline');
employmentData.forEach(job => {
  const jobDiv = document.createElement('div');
  jobDiv.innerHTML = `
    <h3>${job.title}</h3>
    <p>${job.company} - ${job.location}</p>
    <p>${job.duration}</p>
    <ul>
      ${job.responsibilities.map(responsibility => `<li>${responsibility}</li>`).join('')}
    </ul>
    <!-- Add more job details as needed -->
  `;
  employmentTimeline.appendChild(jobDiv);
});

// Fetch and populate skills, projects, and certifications dynamically
// Use JavaScript to create interactive elements and links to your GitHub and tryhackme.com badges
// Add your code to populate these sections with your skills, projects, and certifications
