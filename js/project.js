'use strict';

// Helper function to create DOM nodes
const createEl = (tag) => document.createElement(tag);

// Load project html
$.ajax('./project.json')
.then((res) => res.list)
.then((projectArray) => displayProjects(projectArray))
.then((html) => document.querySelector("#project-view").innerHTML = html);


const displayProjects = (list) => {
  let d = createEl('div');
  d.setAttribute('class', 'project-div');

  let h1 = createEl('h1');

  let a1 = createEl('a');

  let a2 = createEl('a');

  // let


  console.log(d);
  let html = '';

  list.forEach(each => {

    html += `
    <div class="project-div">
      <div class="project-info">
        <h1>${each.title}</h1>
        <p>Project summary: ${each.summary}</p>

        <a class="link" href="${each.githubRepo}">
        Click to View the Github Repo</a>

        <a class="link" href="${each.hostedUrl}">
        Click to View the hosted url</a>

        <p>Technologies used:<p>
        <div class="panel-icon-list">
          <img src="${each.techPics[0].img}" />
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
