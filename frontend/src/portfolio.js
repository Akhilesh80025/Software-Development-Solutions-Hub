let portfolioData = [];

const project1 = {
  name: 'Project 1',
  description: 'This is the description of Project 1.',
  image: '../asset/p1.jpg'
};

const project2 = {
  name: 'Project 2',
  description: 'This is the description of Project 2.',
  image: '../asset/p2.jpg'
};

portfolioData.push(project1, project2);

console.log(portfolioData);

  
  function generatePortfolioElements() {
    const portfolioContainer = document.getElementById('portfolio-container');
  
    portfolioData.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <img src="${project.image}" alt="${project.name}">
      `;
      portfolioContainer.appendChild(projectElement);
    });
  }
  
  generatePortfolioElements();
  