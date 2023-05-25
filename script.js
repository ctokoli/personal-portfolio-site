const hamburger = document.querySelector('.humburger');
const mobileMenu = document.querySelector('.mobile-menu');

const popUp = document.querySelector('.pop-up-container');
const closeButton = document.querySelector('.pop-close');
const popUpImage = document.querySelector('.pop-image');
const linkLive = document.querySelector('.pop-button');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link')
  .forEach((element) => element.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
  }));

fetch('projects.json')
  .then((response) => response.json())
  .then((projects) => {
    const placeholder = document.querySelector('.project-section');
    let result = '';
    // inserting the header text for the project
    result += `
        <div class="headings a">
        <h2>Projects</h2>
        <div class="a-img"></div>
        </div>
    `;
    projects.forEach((project) => {
      result += `
        <div class="project ${project.grid}">
            <div class="laptop-img img${project.grid}">
                <img src="${project.featured_image}" alt="laptop">
            </div>
            <div class="project-details ${project.project_details}">
                <div class="tech-details ${project.tech_details} ">
                    <h2 class="project-name head">${project.name}</h2>
                    <ul class="tech-stack tech">
                        <li>${project.technologies.stack1}</li>
                        <li>${project.technologies.stack2}</li>
                        <li>${project.technologies.stack3}</li>
                    </ul>
                    <div class="details-button btn">
                        <button class="project-pop" onclick="getData('${project.featured_image}','${project.link_to_live}', '${project.link_to_source}')">
                            See this project
                            <div class="union white"></div>
                            <div class="union black"></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    placeholder.innerHTML = result;

    const projectCSection = document.querySelector('.imgc');
    projectCSection.insertAdjacentHTML('afterend', '<div class="c-img"><img src="images/image-geometry_2.svg" alt="laptop"></div>');

    const projectESection = document.querySelector('.imge');
    projectESection.insertAdjacentHTML('afterend', '<div class="e-img"><img src="images/Shape5.png" alt="laptop"></div>');

    const projectDSection = document.querySelector('.d');
    projectDSection.insertAdjacentHTML('afterbegin', '<div class="d-img"><img src="images/Group 83.png" alt="laptop"></div>');

    const projectGSection = document.querySelector('.g');
    projectGSection.insertAdjacentHTML('afterbegin', '<div class="g-img3"><img src="images/image-geometry_4.svg" alt="laptop"></div>');

    const projectFSection = document.querySelector('.f');
    projectFSection.insertAdjacentHTML('afterbegin', ' <img src="images/image-geometry_5.svg" class="show" alt="laptop">');

    document.querySelectorAll('.project-pop')
      .forEach((element) => element.addEventListener('click', () => {
        popUp.classList.add('pop-active');
      }));

    closeButton.addEventListener('click', () => {
      popUp.classList.remove('pop-active');
    });
  });

// eslint-disable-next-line no-unused-vars
function getData(featuredImage, live, source) {
  let link = '';
  let result = '';

  result += `
       <img src="${featuredImage}" alt="project details image" />
      `;
  link += `
        <a href="${live}" target="_blank"><button class="pop-icon"><span>See live</span></button></a>
        <a href="${source}" target="_blank"><button class="pop-icon1"><span>See source</span></button></a>
      `;

  popUpImage.innerHTML = result;
  linkLive.innerHTML = link;
}
