import React from 'react';
import './Class.css';

const HomeopathyDoctorPage = () => {
  const doctorName = 'Dr. Meghana Anagani';
  const doctorSpecialization = 'Homeopathy';
  const doctorBio = 'Dr. Meghana Anagani is a  homeopathy doctor  in treating various ailments using natural remedies. He believes in a holistic approach to healing and has helped numerous patients achieve optimal health.';

  const testimonials = [
    {
      id: 1,
      text: 'Dr. Meghana has transformed my life. His treatment has helped me overcome chronic migraines, and I couldn\'t be more grateful.',
      author: 'Phanindra',
    },
    {
      id: 2,
      text: 'I highly recommend Dr. Meghana. His expertise in homeopathy is exceptional, and his caring nature makes the healing journey even better.',
      author: 'Nitin',
    },
  ];

  const renderTestimonials = () => {
    return testimonials.map((testimonial) => (
      <div key={testimonial.id} className="testimonial">
        <p className="testimonial-text">{testimonial.text}</p>
        <p className="testimonial-author">- {testimonial.author}</p>
      </div>
    ));
  };

  return (
    <div className="doctor-page">
      <h1>{doctorName}</h1>
      <h2>{doctorSpecialization}</h2>
      <p>{doctorBio}</p>

      <h3>Services:</h3>
      <ul>
        <li>Initial consultation and assessment</li>
        <li>Personalized treatment plans</li>
        <li>Natural remedies and medicines</li>
        <li>Follow-up sessions and adjustments</li>
      </ul>

      <h3>Testimonials:</h3>
      <div className="testimonials-container">{renderTestimonials()}</div>

      <h3>Contact Information:</h3>
      <p>Email: drjohnsmith@example.com</p>
      <p>Phone: +1 123-456-7890</p>

      <h3>Location:</h3>
      <p>123 Main Street, City, State, ZIP</p>

      <h3>Book an Appointment:</h3>
      <p>Contact us to schedule an appointment with Dr. Smith.</p>
      <button className="appointment-button">Book Appointment</button>
    </div>
  );
};

export default HomeopathyDoctorPage;