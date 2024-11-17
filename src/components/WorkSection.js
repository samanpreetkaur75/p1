import React from 'react';

const WorkSection = () => {
  const projects = [
    {
      title: 'Rails Intro Project',
      description: 'Created a Rails app with database structures, data pulling, and search functionalities.',
      image: '/path/to/rails-intro-project-image.jpg',
      link: 'https://github.com/samanpreetkaur75/Intro-project',
      techList: ['Ruby on Rails', 'PostgreSQL']
    },
    {
      title: 'Sinners for Shoes E-commerce',
      description: 'Developed an admin dashboard for managing product listings with authentication.',
      image: '/path/to/sinners-for-shoes-image.jpg',
      link: '#',
      techList: ['Ruby on Rails', 'Tailwind CSS']
    },
    {
      title: 'Flask and Dash APIs',
      description: 'Built an interactive web app using Flask and Dash, displaying data from the City of Winnipeg Open Data Portal.',
      image: '/path/to/flask-dash-project-image.jpg',
      link: '#',
      techList: ['Python', 'Flask', 'Dash']
    }
  ];

  return (
    <section>
      <h2>Work</h2>
      {projects.map((project, index) => (
        <div key={index} className="work-item">
          <h3>{project.title}</h3>
          <img src={project.image} alt={`${project.title} screenshot`} />
          <p>{project.description}</p>
          <p>Tech Used: {project.techList.join(', ')}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
    </section>
  );
};

export default WorkSection;
