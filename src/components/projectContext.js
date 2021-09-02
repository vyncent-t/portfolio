const projectArr = []
// class Project {
//     constructor(title, img, desc, deploy, repo, tech) {
//         this.title = title
//         this.img = img
//         this.desc = desc
//         this.deploy = deploy
//         this.repo = repo
//         this.tech = tech
//     }
// }


let proA = {
    title: "Travlr",
    image: "https://raw.githubusercontent.com/vyncent-t/portfolio-project/main/my-portfolio/src/images/atmossc.jpg",
    desc: "Travlr is a social media platform in which users express their experiences at venues or establishments in the form of recommendation posts, creating value by ways of exposure for establishments and reliable entertainment/information for the user base. Travlr is meant to be used primarily at a local level by tourists to better inform and make judgments based on engagement of the users native to their destination/city.",
    deploy: "https://travlr-proj.herokuapp.com/",
    repo: "https://github.com/vyncent-t/travlr-project",
    tech: "Javascript, React.js, Bootstrap, MongoDB, Mongoose, GraphQL, HTML, CSS, Git, GitHub, Apollo, Insomnia"
}

let proB = {
    title: "Likeminded",
    image: "imgplace",
    desc: "Likeminded is a multi-user organizational app that allows users to create, propose, and manage activities within a group of other individual users on the platform. This app serves as a tool to better link users to each other through friend groups labeled as cliques which contain dynamic events created by the users where they propose plans to be decided on as a collective.",
    deploy: "https://likeminded-project.herokuapp.com/",
    repo: "https://github.com/vyncent-t/likeminded",
    tech: "Tools: Javascript, HTML, CSS, Bootstrap, mySQL, Sequelize, mySQL workbench, Express.js, Handlebars.js"
}

let proC = {
    title: "atmos",
    image: "https://raw.githubusercontent.com/vyncent-t/portfolio-project/main/my-portfolio/src/images/atmossc.jpg",
    desc: "Atmos is a multi-media consumption app that allows the user to select both a preferred genre of music to be listened to through spotify access while viewing a playlist of curated visual atmospheric videos to be played simultaneously based off of keywords searched by the user. This provides a unique relaxation experience to the user only by streamlining both separate sources of audio and visuals in a single platform instance.",
    deploy: "https://vyncent-t.github.io/atmosphere-project/",
    repo: "https://github.com/vyncent-t/atmosphere-project",
    tech: "Javascript, jQuery, HTML, CSS, Spotify API, Youtube API"
}

projectArr.push(proA)
projectArr.push(proB)
projectArr.push(proC)


module.exports = projectArr