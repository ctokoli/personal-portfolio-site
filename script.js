const hamburger = document.querySelector('.humburger');
const mobileMenu = document.querySelector('.mobile-menu');
const projectButton = document.querySelector('.project-pop');
const popUp = document.querySelector('.pop-up-container');
const closeButton = document.querySelector('.pop-close');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link')
.forEach((element) => element.addEventListener('click', () => {
  hamburger.classList.remove('active');
  mobileMenu.classList.remove('active');
}));



fetch("projects.json")
.then(function(response) {
    return response.json();
    
})
.then(function(projects){
    let placeholder = document.querySelector('.project-section');
    let result = "";
    // inserting the header text for the project
    result += `
        <div class="headings a">
        <h2>Projects</h2>
        <div class="a-img"></div>
        </div>
    `;
    for(project of projects){
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
                        <button class="project-pop">
                            See this project
                            <div class="union white"></div>
                            <div class="union black"></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `;  
    }
    placeholder.innerHTML = result;

    let projectCSection = document.querySelector('.imgc');
    projectCSection.insertAdjacentHTML('afterend', '<div class="c-img"><img src="images/image-geometry_2.svg" alt="laptop"></div>');
    console.log(projectCSection);

    let projectESection = document.querySelector('.imge');
    projectESection.insertAdjacentHTML('afterend', '<div class="e-img"><img src="images/Shape5.png" alt="laptop"></div>');
    console.log(projectESection);

    let projectDSection = document.querySelector('.d');
    projectDSection.insertAdjacentHTML('afterbegin', '<div class="d-img"><img src="images/Group 83.png" alt="laptop"></div>');
    console.log(projectDSection);





document.querySelectorAll('.project-pop')
    .forEach((element) => element.addEventListener('click', () => {
    popUp.classList.add('pop-active');
}));

closeButton.addEventListener('click', () => {
  popUp.classList.remove('pop-active');
});
});




