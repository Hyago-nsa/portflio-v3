
const saluteTextContainer = document.querySelector(".saluteTextContainer");
const saluteImgContainer = document.querySelector(".saluteImgContainer");
const authorName = document.querySelector(".name");
const jobTitleContainers = document.querySelectorAll(".jobTitleContainer");
const jobTitles = document.querySelectorAll(".jobTitle");
const projects = document.querySelectorAll(".project");
const projectsTitle = document.querySelector(".projectsTitle");

window.addEventListener("scroll", () => {
  let offsetY = window.scrollY;
  saluteTextContainer.style.transform = `translateY(${offsetY * -0.5}px)`;

  authorName.style.transform = `translateX(calc(-100vh + ${offsetY}px))`;
  jobTitleContainers[0].style.backgroundPositionY = `${offsetY * 1.5}px`;
  jobTitleContainers[1].style.backgroundPositionY = `${-offsetY * 0.5}px`;
  jobTitles[0].style.transform = `translateX(calc(250vh - ${offsetY}px))`;
  jobTitles[1].style.transform = `translateX(calc(-280vh + ${offsetY}px))`;
  projectsTitle.style.transform = `translateY(calc(220vh - ${offsetY * 0.5}px))`;
  projects[0].style.transform = `translateX(calc(225vh - ${offsetY * 0.5}px))`;
  projects[1].style.transform = `translateX(calc(-510vh + ${offsetY}px))`;
  projects[2].style.transform = `translateX(calc(590vh - ${offsetY}px))`;
});
