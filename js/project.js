'use strict';

// Helper function to create DOM nodes
const createEl = (tag) => document.createElement(tag);

// Load project html
$.ajax('./project.json')
.then(res => res.list)
.then(res => res.sort((a,b) => (a.numDate < b.numDate)? 1: -1))
.then((projectArray) => displayProjects(projectArray))
.then((html) => document.querySelector("#project-view").innerHTML = html);

// Function will display each tech picture
const displayTechPics = (techArray) => {
  let html = '';
  techArray.forEach(each => {
    html += `<img src="${each.img}" />`
  });
  return html;
};

// Function will determine if a hostedUrl is provided
const determineHostedURLStatus = (url) => {
  if (url) {
    return `
    <a target="_blank" class="link" href="${url}">
      <img src="img/web-black.png" />
      Hosted Project
    </a>`;
  } else {
    return '';
  }
}

// Display each project div
const displayProjects = (list) => {
  let html = '';

  list.forEach(each => {
    html += `
    <div class="project-div">
      <div class="project-info">
      <h1>${each.title}</h1>
      <p class="project-date">${each.date}</p>

        <div class="link-div">
          <a target="_blank" class="link" href="${each.githubRepo}">
            <img src="img/github-circle-black.png" />
            Github Repo
          </a>

          ${determineHostedURLStatus(each.hostedUrl)}
        </div>

        <p class="project-summary">Project summary: ${each.summary}</p>

        <div class="panel-icon-list">
          <p>Technologies used:</p>
          <p>${displayTechPics(each.techPics)}</p>
        </div>
      </div>

      <div class="project-pic-div">
        <img class="project-pic" src="${each.projectPics[0]}" >
      </div>

    </div>
    `;
  });
  return html;
};
