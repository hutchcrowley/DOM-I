const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

// logo.setAttribute('src', siteContent["nav"]["img-src"]);



// create selectors for HTML elements

// navigation elements

const header = document.querySelector('header');

const navItem1 = document.querySelectorAll('nav a')[0];

const navItem2 = document.querySelectorAll('nav a')[1];

const navItem3 = document.querySelectorAll('nav a')[2];

const navItem4 = document.querySelectorAll('nav a')[3];

const navItem5 = document.querySelectorAll('nav a')[4];

const navItem6 = document.querySelectorAll('nav a')[5];

// header elements

const logo = document.getElementById('logo-img');

const image2 = document.getElementById('cta-img');

const topButton = document.querySelector('.cta button');

const topText = document.querySelector('.cta .cta-text > h1');

// top content elements

const featuresH4 = document.querySelectorAll('.top-content .text-content > h4')[0];

const featuresP = document.querySelectorAll('.top-content .text-content > p')[0];

const aboutH4 = document.querySelectorAll('.top-content .text-content > h4')[1];

const aboutP = document.querySelectorAll('.top-content .text-content > p')[1];

// middle image

const middleImage = document.getElementById('middle-img');

// bottom content elements

const servicesH4 = document.querySelectorAll('.bottom-content .text-content > h4')[0];

const servicesP = document.querySelectorAll('.bottom-content .text-content > p')[0];

const productH4 = document.querySelectorAll('.bottom-content .text-content > h4')[1];

const productP = document.querySelectorAll('.bottom-content .text-content > p')[1];

const visionH4 = document.querySelectorAll('.bottom-content .text-content > h4')[2];

const visionP = document.querySelectorAll('.bottom-content .text-content > p')[2];

// contact section elements

const contactH4 = document.querySelector('.contact h4');

const contactP = document.querySelectorAll('.contact p')[0];

const contactP1 = document.querySelectorAll('.contact p')[1];

const contactP2 = document.querySelectorAll('.contact p')[2];

// footer elements

const copyright = document. querySelector('footer p');

// end selector section
// Update elements
// navigation bar

navItem1.textContent = siteContent.nav["nav-item-1"];

navItem2.textContent = siteContent.nav["nav-item-2"];

navItem3.textContent = siteContent.nav["nav-item-3"];

navItem4.textContent = siteContent.nav["nav-item-4"];

navItem5.textContent = siteContent.nav["nav-item-5"];

navItem6.textContent = siteContent.nav["nav-item-6"];

// header stuff

logo.setAttribute('src', 'img/logo.png');

topButton.textContent = siteContent.cta['button'];

image2.setAttribute('src', 'img/header-img.png');

topText.textContent = siteContent.cta['h1'];

// top content

featuresH4.textContent = siteContent["main-content"]['features-h4'];

featuresP.textContent = siteContent["main-content"]['features-content'];

aboutH4.textContent = siteContent["main-content"]['about-h4'];

aboutP.textContent = siteContent["main-content"]['about-content'];

// update middle image src

middleImage.setAttribute('src', 'img/mid-page-accent.jpg');

// bottom content

servicesH4.textContent = siteContent['main-content']['services-h4'];

servicesP.textContent = siteContent['main-content']['services-content'];

productH4.textContent = siteContent['main-content']['product-h4'];

productP.textContent = siteContent['main-content']['product-content'];

visionH4.textContent = siteContent['main-content']['vision-h4'];

visionP.textContent = siteContent['main-content']['vision-content'];

// contact content

contactH4.textContent = siteContent['contact']['contact-h4'];

contactP.textContent = siteContent['contact']['address'];

contactP1.textContent = siteContent['contact']['phone'];

contactP2.textContent = siteContent['contact']['email'];

// footer content

copyright.textContent = siteContent['footer']['copyright'];