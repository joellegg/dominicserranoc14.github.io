'use strict';

// Load project html
$.ajax('./project.json')
.then((res) => res.list)
.then((projectArray) => displayProjects(projectArray))
.then((html) => document.querySelector("#project-view").innerHTML = html);


const displayProjects = (list) => {
  console.log(list);
  let html = '';

  list.forEach(each => {

    html += `
    <div class="project-div">
      <h1>${each.title}</h1>
        <div>
          <p>Project summary: ${each.summary}</p>

          <a class="link" href="${each.githubRepo}">
          <p>Click to View the Github Repo</p></a>

          <a class="link" href="${each.hostedUrl}">
          <p>Click to View the hosted url</p></a>

          <p>Technologies used:</p>
          <div class="panel-icon-list" >
            <img src="${each.techPics[0].img}" />
          </div>
          <img class="project-mainimage-view" src="${each.projectPics[0]}" >
      </div>
    `;

  });

  return html;

};
