// Define the services data
const services = [
    {
      name: 'Web Design',
      description: `We create beautiful and functional websites tailored to your needs. Our web design services include:
  - User-friendly and responsive website design
  - Customized website development
  - Mobile-friendly design and optimization
  - UX/UI design and wireframing
  - Website maintenance and updates`,
      price: 99.99,
      duration: '1 hour'
    },
    {
      name: 'Graphic Design',
      description: `We provide stunning graphic designs for your brand and marketing materials. Our graphic design services include:
  - Logo design and branding
  - Brochure and flyer design
  - Poster and banner design
  - Packaging design
  - Social media graphics`,
      price: 149.99,
      duration: '2 hours'
    }
    // Add more service objects as needed
  ];
  
  // Generate HTML for each service
  function generateServicesSection () {
    const servicesContainer = document.getElementById('services-container');
  
    services.forEach(function(service) {
      const serviceElement = document.createElement('div');
      serviceElement.classList.add('service');
  
      const serviceName = document.createElement('h3');
      serviceName.textContent = service.name;
      serviceElement.appendChild(serviceName);
  
      const serviceDescription = document.createElement('p');
      serviceDescription.innerHTML = service.description.replace(/\n/g, '<br>');
      serviceElement.appendChild(serviceDescription);
  
      const servicePrice = document.createElement('p');
      servicePrice.textContent = 'Price: $' + service.price.toFixed(2);
      serviceElement.appendChild(servicePrice);
  
      const serviceDuration = document.createElement('p');
      serviceDuration.textContent = 'Duration: ' + service.duration;
      serviceElement.appendChild(serviceDuration);
  
      servicesContainer.appendChild(serviceElement);
    });
  };
  
  // Call the generateServicesSection function
  generateServicesSection();
  