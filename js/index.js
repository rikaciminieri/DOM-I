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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const nav = document.querySelector('nav');
console.log(nav);

const anchorTags = nav.querySelectorAll('a');
console.log(anchorTags);
// const navItem1 = anchorTags[0];
// navItem1.textContent = siteContent["nav"]["nav-item-1"];

// const navItem2 = anchorTags[1];
// navItem2.textContent = siteContent["nav"]["nav-item-2"];

anchorTags.forEach((anchor, i) => {
  anchor.textContent = siteContent["nav"][`nav-item-${i+1}`];
  anchor.style.color = 'green';
})

const node1 = document.createElement('a');
const node1text = document.createTextNode('Rika');
node1.appendChild(node1text);
nav.appendChild(node1);
node1.style.color = 'green';

const node2 = document.createElement('a');
const node2text = document.createTextNode('Nav');
node2.prepend(node2text);
nav.prepend(node2);
node2.style.color = 'green';



const cta = document.querySelector(".cta");
console.log(cta);

const header1 = cta.querySelector('h1');
header1.textContent = siteContent['cta']['h1'];

const button = cta.querySelector('button');
button.textContent = siteContent['cta']['button'];

const img1 = document.getElementById('cta-img');
img1.setAttribute('src', siteContent['cta']['img-src']);

const mainContent = document.querySelector('.main-content');

console.log(mainContent);
const mainContentHeadings = mainContent.querySelectorAll("h4");
mainContentHeadings[0].textContent = siteContent['main-content']['features-h4'];
// console.log(topContentHeading[0]);
mainContentHeadings[1].textContent = siteContent['main-content']['about-h4'];
mainContentHeadings[2].textContent = siteContent['main-content']['services-h4'];
mainContentHeadings[3].textContent = siteContent['main-content']['product-h4'];
mainContentHeadings[4].textContent = siteContent['main-content']['vision-h4'];

const mainContentPs = mainContent.querySelectorAll("p");
mainContentPs[0].textContent = siteContent['main-content']['features-content'];
mainContentPs[1].textContent = siteContent['main-content']['about-content'];
mainContentPs[2].textContent = siteContent['main-content']['services-content'];
mainContentPs[3].textContent = siteContent['main-content']['product-content'];
mainContentPs[4].textContent = siteContent['main-content']['vision-content'];

const middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

const contact = document.querySelector('.contact');
console.log(contact);

const contactHeading = contact.querySelectorAll('h4');
const contactPs = contact.querySelectorAll('p');

contactHeading[0].textContent = siteContent['contact']['contact-h4'];
contactPs[0].textContent = siteContent['contact']['address'];
contactPs[1].textContent = siteContent['contact']['phone'];
contactPs[2].textContent = siteContent['contact']['email'];

const footer = document.querySelector('footer');
const copyright = footer.querySelectorAll('p');
copyright[0].textContent = siteContent['footer']['copyright'];

