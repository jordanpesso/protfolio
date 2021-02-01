console.log('Starting up');


$(document).ready(onInit);
$('.portfolio-link').click(onProtfolioModal);

function onInit() {
  createProjects();
  renderPreviewProtfolio();
  renderProjModal();

}

function onProtfolioModal() {
  $('#portfolio-link').on('shown.bs.modal', function () {
    $("#portfolio-link").attr('aria-hidden', false);
});

$('#portfolio-link').on('hidden.bs.modal', function () {
  $("#portfolio-link").attr('aria-hidden', true);
});

}


function renderPreviewProtfolio() {
  var projects = getProjects()
  console.log(projects)
  var strHtmls = projects.map(function (project) {
    return `
     <div class="col-md-4 col-sm-6 portfolio-item">
     <a class="portfolio-link" data-toggle="modal" href="#${project.projectName}"> 
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
  var projects = getProjects()
  var strHtmls = projects.map(function (project) {
    return `
    <div class="portfolio-modal modal fade" id="${project.projectName}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>${project.projectName}</h2>
                <p class="item-intro text-muted">${project.title}</p>
                <img class="img-fluid d-block mx-auto" src="${project.imgUrl}" alt="${project.projectName}">
                <p>${project.desc}</p>
                <ul class="list-inline">
                  <li>Date: ${project.publisheAt}</li>
                  <li>Client: ${project.client}</li>
                  <li>Category: ${project.labels}</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `
  })
  var strHtml = strHtmls.join('')
  var $elProjectModal = $('.modals-area')
  $elProjectModal.html(strHtml)

} 
