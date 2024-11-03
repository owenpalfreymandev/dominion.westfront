import React from 'react';
import './styles/App.css'; // Ensure this line is present

const UserArea: React.FC = () => {
  const jobListings = [
    {
      title: 'Product Designer',
      location: 'Remote',
      type: 'Full-time',
      description: `Join our team as a product designer and help us build a world-class user experience for our customers. You'll be responsible for creating and maintaining the UI/UX design across our entire platform, including our web app, mobile app, and marketing site. This is a highly collaborative role that requires you to work closely with product managers, engineers, and other designers to ensure that our products are intuitive, visually appealing, and delightful to use. You should be comfortable working in a fast-paced environment, have a strong attention to detail, and be passionate about creating beautiful and functional designs.`,
      requirements: [
        '3+ years of experience in UI/UX design',
        'Strong portfolio showcasing your design work',
        'Proficiency in design tools such as Figma or Sketch',
        'Excellent communication and collaboration skills',
      ],
    },
    // You can add more job listings here
  ];

  const renderJobListings = () => {
    return jobListings.map((job, index) => (
      <div key={index} className="job-container">
        <h2 className="job-title">{job.title}</h2>
        <p className="job-info">{job.location} | {job.type}</p>
        <h3 className="section-title">Description</h3>
        <p className="job-description">{job.description}</p>
        <h3 className="section-title">Requirements</h3>
        <ul className="requirements-list">
          {job.requirements.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>
        <button className="apply-button">Apply Now</button>
      </div>
    ));
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Job Listings</h1>
        <button className="login-button">Admin Login</button>
      </div>
      <div style={{ marginTop: '80px' }}> {/* Add margin to push content below the fixed header */}
        {renderJobListings()}
      </div>
    </div>
  );
};

export default UserArea;
