
const teamMembers = [];
  const teamMembers1 = {
    name: 'John Doe',
    role: 'CEO & Founder',
    bio: 'John Doe is the CEO and Founder of our company. He has years of experience in the industry and is passionate about driving innovation and growth.',
    photo: '../asset/pic2.jpg' 
  };
  const teamMembers2 = {
    name: 'Jane Smith',
    role: 'CTO',
    bio: 'Jane Smith is the Chief Technology Officer of our company. With her expertise in technology and leadership, she plays a vital role in driving our technical strategies and initiatives.',
    photo: '../asset/pic2.jpg' 
  };
  const teamMembers3 = {
    name: 'Mark Johnson',
    role: 'Lead Developer',
    bio: 'Mark Johnson is our Lead Developer, responsible for overseeing the development process and ensuring high-quality code. His technical skills and attention to detail contribute to our successful projects.',
    photo: '../asset/pic2.jpg' 
  };
  teamMembers.push(teamMembers1,teamMembers2,teamMembers3);

  console.log(teamMembers);

  function generateTeamMembersSection() {
    const teamContainer = document.getElementById('team');
  
    teamMembers.forEach(function(member) {
      const memberElement = document.createElement('div');
      memberElement.classList.add('team-member');
  
      const memberPhoto = document.createElement('img');
      memberPhoto.src = member.photo;
      memberPhoto.alt = member.name;
      memberElement.appendChild(memberPhoto);
  
      const memberName = document.createElement('h3');
      memberName.textContent = member.name;
      memberElement.appendChild(memberName);
  
      const memberRole = document.createElement('p');
      memberRole.textContent = member.role;
      memberElement.appendChild(memberRole);
  
      const memberBio = document.createElement('p');
      memberBio.textContent = member.bio;
      memberElement.appendChild(memberBio);
  
      teamContainer.appendChild(memberElement);
    });
  }
  
 
  generateTeamMembersSection();
  