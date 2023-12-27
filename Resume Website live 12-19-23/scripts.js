document.addEventListener('DOMContentLoaded', function() {
const timelineData = [
    {
        date: 'Oct 2009 - Present',
        title: 'Network Administrator',
        description: 'Proficient Network Administrator with solid background installing, configuring, and supporting network and internal systems. Verify operations and trace faults with skilled testing and troubleshooting. Thrive under pressure to keep systems optimized and user-friendly..'
    },
    {
        date: 'Jan 2000 - Dec 2009',
        title: 'L3 Travel Event Tech',
        description: 'As a L3 Travel Event Tech at Rush Computer Rentals, I supervised major equipment rental projects across Las Vegas, Atlnta, and New York, delivering exceptional customer support, managing equipment specifications, installations, and providing technical expertise for network systems. Additionally, I oversaw staff training, problem-solving, and served as the primary liaison for client communication and project supervision.'
    },
    {
        date: '1998 - 1999',
        title: 'Laser Printer Tech',
        description: 'I effectively managed customer service orders, providing comprehensive maintenance, repair, and technical support for Hewlett Packard and Lexmark printers, ensuring prompt resolution and reliable assistance.'
    }
];

    const timeline = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        let entry = document.createElement('div');
        entry.classList.add('timeline-entry');
        entry.setAttribute('id', 'entry-' + index);

        let dot = document.createElement('div');
        dot.classList.add('timeline-dot');

        let date = document.createElement('div');
        date.textContent = item.date;
        date.classList.add('timeline-date');

        let content = document.createElement('div');
        content.classList.add('timeline-content');
        content.setAttribute('id', 'content-' + index);

        let title = document.createElement('h3');
        title.textContent = item.title;

        let description = document.createElement('p');
        description.textContent = item.description;
        description.style.display = 'none'; // Initially hide the description

        // Click event to toggle the description visibility
        entry.addEventListener('click', function() {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        content.appendChild(title);
        content.appendChild(description);

        entry.appendChild(dot);
        entry.appendChild(date);
        entry.appendChild(content);

        timeline.appendChild(entry);
    });
});
