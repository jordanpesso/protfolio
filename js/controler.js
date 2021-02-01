console.log('Starting up');


function onInit() {
  console.log('Started...');
  createProjects();
  renderPreviewProtfolio();

}

function renderPreviewProtfolio() {
  console.log('rendring protfolio area')
  var projects = getProjects()
  console.log(projects)
  var strHtmls = projects.map(function (project) {
    return `
     <div class="col-md-4 col-sm-6 portfolio-item">
     <a class="portfolio-link" data-toggle="modal" href="('${project.url}')"> 
       <div class="portfolio-hover">
         <div class="portfolio-hover-content">
           <i class="fa fa-plus fa-3x"></i>
         </div>
       </div>
       <img class="img-fluid" src="${project.imgUrl}" alt="${project.projectName}">
     </a>
     <div class="portfolio-caption">
       <h4>${project.projectName}</h4>
       <p class="text-muted badge badge-info">"${project.labels}"</p>
     </div>
     </div>
     `
  })
  var strHtml = strHtmls.join('')
  var $elProjectPrevRow = $('.prevProtfolio')
  $elProjectPrevRow.html(strHtml)

}


function renderProjModal() {
    console.log('im rendring the modal')
}

