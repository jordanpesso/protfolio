var gProjects;
var gProjId = 101



function getProjects() {
    console.log('get me my projects')
    return gProjects
}


function createProjects() {
    var projects = [
        createProj('Minesweeper', 'fun game', 'i will tell you more. wait few hours', 'sprint1',),
        createProj('In-Picture-Game', 'another fun game', 'i will tell you more. wait few hours', 'js' )

    ]

    gProjects = projects
}



function createProj(projectName, title, description, labels) {
    return {
        id: gProjId++,
        projectName: projectName,
        title: title,
        desc: description,
        url: ` https://jordanpesso.github.io/${projectName}/`,
        imgUrl: `img/portfolio/${projectName}.png`,
        publisheAt: new Date(),
        client: 'coding academy',
        labels: labels

    }
}



// labels: ['sprint1', 'matrix', 'java script'],

