const contactInfo = {
    mobile: '+1234567890',
    email: 'info@example.com',
    whatsapp: 'https://wa.me/1234567890',
    socialMedia: {
        facebook: 'https://www.facebook.com/yourpage',
        twitter: 'https://www.twitter.com/yourpage',
        instagram: 'https://www.instagram.com/yourpage',
        linkedin: 'https://www.linkedin.com/company/yourpage',
    },
};

function displayContactInfo() {
    const contactInfoElement = document.createElement('div');
    contactInfoElement.classList.add('contact-info');

    const mobileElement = document.createElement('p');
    mobileElement.textContent = 'Mobile: ' + contactInfo.mobile;
    contactInfoElement.appendChild(mobileElement);

    const emailElement = document.createElement('p');
    emailElement.textContent = 'Email: ' + contactInfo.email;
    contactInfoElement.appendChild(emailElement);

    const whatsappElement = document.createElement('p');
    const whatsappLink = document.createElement('a');
    whatsappLink.href = contactInfo.whatsapp;
    whatsappLink.textContent = 'WhatsApp: ' + contactInfo.whatsapp;
    whatsappElement.appendChild(whatsappLink);
    contactInfoElement.appendChild(whatsappElement);

    const socialMediaElement = document.createElement('div');
    for (const platform in contactInfo.socialMedia) {
        const platformLink = document.createElement('a');
        platformLink.href = contactInfo.socialMedia[platform];
        platformLink.textContent = platform.charAt(0).toUpperCase() + platform.slice(1);
        socialMediaElement.appendChild(platformLink);
        socialMediaElement.appendChild(document.createElement('br'));
    }
    contactInfoElement.appendChild(socialMediaElement);

    document.getElementById('contact-us').appendChild(contactInfoElement);
}

displayContactInfo();