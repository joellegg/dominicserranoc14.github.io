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

        <div class="link-div">
          <a target="_blank" class="link" href="${each.githubRepo}">
            Github Repo
            <img src="img/github-circle-black.png" />
          </a>

          <a target="_blank" class="link" href="${each.hostedUrl}">
            Hosted Project
            <img src="img/web-black.png" />
          </a>
        </div>

        <p>Project summary: ${each.summary}</p>

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
