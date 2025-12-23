// Smooth scroll to details section
function scrollToDetails() {
    const detailsSection = document.getElementById('details');
    if (detailsSection) {
        detailsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// General registration form (optional main form)
function redirectToRegistration() {
    const formURL = 'https://docs.google.com/forms/d/e/1FAIpQLSdk5xXA-XXvb8YPdohpHtJH42MzJJXGzWtoqtVnTMegPd5jKQ/viewform?usp=header';
    window.open(formURL, '_blank');
}

// Open specific registration forms for different event types
function openForm(type) {
    let url = '';

    if (type === 'sports') {
        // Sports events – 06 Feb 2026
        url = 'https://forms.gle/s585V1ibE4qmwkE88';
    } else if (type === 'workshop' || type === 'conference' || type === 'tech' || type === 'cultural') {
        // Workshop, National Conference, Tech/Non-Tech, Cultural events
        // (all mapped to this common events form as per given link)
        url = 'https://forms.gle/7BoVbaeBPDh3GyZC8';
    }

    if (url) {
        window.open(url, '_blank');
    }
}

// Open venue map
function openVenue() {
    const mapsUrl = 'https://maps.app.goo.gl/UWDM9MkshwJDLUQn9';
    window.open(mapsUrl, '_blank');
}

// No contact form handler needed (form removed)

