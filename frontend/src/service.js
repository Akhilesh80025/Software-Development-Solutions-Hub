// Define the services data
const services = [
  {
    name: 'Business Website',
    description: `We build professional and feature-rich business websites to help you establish a strong online presence. Our business website services include:
  - Customized website development tailored to your industry and requirements
  - Responsive design for optimal viewing on all devices
  - Integration of essential features like contact forms, about us section, and services/products showcase
  - Search engine optimization (SEO) to improve your website's visibility
  - Regular website maintenance and updates to keep your site running smoothly`,
    price: 199.99, // Update the price if necessary
    duration: '2 hours' // Update the duration if necessary
  },

  // Add other service objects if needed

  {
    name: 'E-commerce Website Development',
    description: `We offer professional e-commerce website development to help you start or expand your online store. Our e-commerce services include:
  - Custom website design and development
  - Product catalog setup
  - Shopping cart and payment gateway integration
  - Order management system
  - Mobile responsiveness`,
    price: 999.99,
    duration: '4 weeks'
  },

  {
    name: 'E-Commerce Application',
    description: `We offer a comprehensive E-Commerce Application development service to help you build a robust online store. Our E-Commerce Application service includes:
  - Custom website design and development
  - User-friendly product catalog
  - Secure payment gateways integration
  - Shopping cart functionality
  - Order tracking and management system
  - Customer login and registration
  - Product search and filtering options`,
    price: 999.99,
    duration: '4 weeks'
  },
  {
    name: 'Marketing Software',
    description: `We offer powerful marketing software to help you streamline your marketing efforts. Our marketing software services include:
  - Email marketing automation
  - Social media management tools
  - SEO optimization software
  - Analytics and reporting platforms
  - Customer relationship management (CRM) software`,
    price: 199.99,
    duration: '1 month'
  }
  ];
  
  function generateServicesSection() {
    const servicesContainer = document.getElementById('services-container');
  
    // Divide the services array into pairs of two
    for (let i = 0; i < services.length; i += 2) {
      const servicePairContainer = document.createElement('div');
      servicePairContainer.classList.add('service-pair');
  
      // Add the first service in the pair
      if (i < services.length) {
        const service1 = createServiceElement(services[i]);
        servicePairContainer.appendChild(service1);
      }
  
      // Add the second service in the pair
      if (i + 1 < services.length) {
        const service2 = createServiceElement(services[i + 1]);
        servicePairContainer.appendChild(service2);
      }
  
      servicesContainer.appendChild(servicePairContainer);
    }
  }
  
  // Helper function to create the service element
  function createServiceElement(service) {
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
  
    const requestDemoButton = document.createElement('button');
    requestDemoButton.textContent = 'Request Demo';
    requestDemoButton.addEventListener('click', function () {
      // Navigate to the form.html file when the "Request Demo" button is clicked
      window.location.href = './public/form.html';
    });
    serviceElement.appendChild(requestDemoButton);
  
    return serviceElement;
  }
  
  generateServicesSection();


  