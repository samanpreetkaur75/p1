import React from 'react';

const Resources = () => {
  const resources = [
    { title: 'Faker', image: '/path/to/faker-icon.jpg', summary: 'A library for generating fake data.', link: 'https://pypi.org/project/Faker/' },
    { title: 'Nginx', image: '/path/to/nginx-icon.jpg', summary: 'A high-performance web server for serving the portfolio site.', link: 'https://www.nginx.com/' }
  ];

  return (
    <section>
      <h2>Resources</h2>
      {resources.map((resource, index) => (
        <div key={index} className="resource-item">
          <h3>{resource.title}</h3>
          <img src={resource.image} alt={`${resource.title} icon`} />
          <p>{resource.summary}</p>
          <a href={resource.link} target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
      ))}
    </section>
  );
};

export default Resources;
