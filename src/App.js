import React from 'react';
import './App.css';
import Card from './components/Card';
import Testimonial from './components/Testimonial';
import QRCode from 'qrcode.react';



const App = () => {
  const [showQRCode, setShowQRCode] = React.useState(false);

  // ... (Add your services, testimonials, and FAQs data here as in previous responses)
  const services = [
    {
      title: 'Attic Maintenance',
      description: 'With the right improvements, you can add storage, make your home more energy efficient and even transform it into a more utilized room. Common improvements include installing drywall, insulation, and flooring.',
    },
    {
      title: 'Bathroom Maintenance',
      description: 'Install new shower doors, replace broken tiles, stop a leaky toilet, repair a faucet—the bathroom gets a lot of use and abuse. Our experienced handymen can handle it all.',
    },
    {
      title: 'Garage Maintenance',
      description: 'From installing storage racks to repairing garage windows, our experienced team of home improvement professionals can get your garage in tip-top condition.',
    },
    {
      title: 'Kitchen Maintenance',
      description: 'Whether you have a broken cabinet drawer or a chipped tile backsplash, our dependable home improvement professionals have the tools and the experience to repair your kitchen to chef-worthy condition.',
    },
    {
      title: 'Outdoor Home Maintenance',
      description: 'From repairing fences to power washing the side of your home, let our experienced handymen help cross a few items off of that outdoor to-do list.',
    },
  ];

  const testimonials = [
    {
      name: 'John Smith',
      quote: 'Al Sila Dubai did an excellent job on my home maintenance project. Their team was professional and efficient. I would definitely recommend their services!',
    },
    {
      name: 'Jane Doe',
      quote: 'I had a great experience with Al Sila Dubai. They were on time, friendly, and got the job done quickly. I will definitely use their services again.',
    },
    {
      name: 'Ahmed Ali',
      quote: 'Al Sila Dubai has been my go-to maintenance company for years. They always provide high-quality work and excellent customer service. Highly recommended!',
    },
  ];

  const faqs = [
    {
      question: 'Do you provide services for both residential and commercial properties?',
      answer: 'Yes, we provide maintenance services for both residential and commercial properties. Our experienced professionals are equipped to handle a wide range of projects for homes and businesses.',
    },
    {
      question: 'How do I schedule a service?',
      answer: 'To schedule a service, you can contact us via phone at +971 4 262 8523 or +971 56 952 4690, or email us at sales@alsila.com. Our team will assist you in setting up an appointment.',
    },
    {
      question: 'What areas do you serve?',
      answer: 'We are based in Dubai and serve clients throughout the United Arab Emirates. Please contact us for more information on our service areas.',
    },
  ];



  return (
    <div className="App">
      <header className="header">
        <h1>Al Sila Dubai</h1>
      </header>

      <section className="about">
        <h2>About Us</h2>
        <p>
          We are a home and commercial maintenance service provider. We are a 20-year-old company that has already successfully finished projects worth more than 100 million dirhams. We provide Repair, Install, Grout, Patch & More.
        </p>
      </section>

      <section className="services">
        <h2>Services</h2>
        <div className="services-items">
          {services.map((service) => (
            <Card key={service.title} title={service.title} description={service.description} />
          ))}
        </div>
      </section>
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonials-items">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.name} name={testimonial.name} quote={testimonial.quote} />
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Contact Us Today</h2>
        <p>Let our experienced professionals handle all your home and commercial maintenance needs. Get in touch with us today!</p>
      </section>

      <section className="faq">
        <h2>FAQs</h2>
        <div className="faq-items">
          {faqs.map((faq) => (
            <div className="faq-item" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
  <h3 className="footer-title">Al Sila Dubai</h3>
  <p>
    Al-Raihan, Al-Mamzar Building, Office 222th, 20th St, Deira, Dubai, United Arab Emirates | Phone: +971 4 262 8523, +971 56 952 4690 | Email: sales@alsila.com
  </p>
  <button
  onClick={(e) => {
    e.preventDefault();
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const url = 'https://wa.me//+971569524690?text=Hello%20Al%20Sila%20Dubai%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.';
    if (isMobile) {
      window.open(url, '_blank', 'noopener noreferrer');
    } else {
     setShowQRCode(!showQRCode);
    }
    
  }}
  className="whatsapp-icon"
>
  <i className="fab fa-whatsapp"></i>


</button>
{showQRCode && (
  <div>
    <QRCode value="https://wa.me/+971569524690?text=Hello%20Al%20Sila%20Dubai%2C%20I%20would%20like%20to%20inquire%20about%20your%20services." />
    <p>Add the number +971 56 952 4690 to your contacts and scan this QR code to send a message.</p>
  </div>
)}


</footer>
    </div>
  );
};

export default App;
