function fetchTeamMembers() {
    fetch('team.json')
      .then(response => response.json())
      .then(data => {
        const teamMembersContainer = document.getElementById('team-members');
    
        data.forEach(member => {
          const memberElement = document.createElement('div');
          memberElement.innerHTML = `
            <h3>${member.name}</h3>
            <p><strong>Role:</strong> ${member.role}</p>
            <p>${member.bio}</p>
            <img src="${member.photo}" alt="${member.name}">
          `;
          teamMembersContainer.appendChild(memberElement);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  fetchTeamMembers();
  