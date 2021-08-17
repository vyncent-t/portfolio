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
    title: "atmos",
    image: "my-portfolio/src/images/atmossc.jpg",
    desc: "Atmos allows a user to choose a genre of music that they are in the mood for along with searching visuals they would like to see. The problem we are trying to solve is to allow the user to create a personalized experience without video editing knowledge or without requiring the use of multiple apps/browsers to achieve the same goal.",
    deploy: "https://vyncent-t.github.io/atmosphere-project/",
    repo: "https://github.com/vyncent-t/atmosphere-project",
    tech: "HTML, CSS, Javascript"
}

let proB = {
    title: "Budget tracker",
    image: "imgplace",
    desc: "The goal of this app was to create a budget log that will store the name and amount of a transaction input by the uder that functions while offline in the browser using indexedDB.",
    deploy: "https://offline-budget-project.herokuapp.com/",
    repo: "https://github.com/vyncent-t/offline-budget-tracker-project",
    tech: "HTML, CSS, Javascript, MongoDB, Mongoose"
}

let proC = {
    title: "Workout Tracker",
    image: "imgplace",
    desc: "The goal of this app was to create a fitness log that allows the user to log their workouts dynamically using mongoDB as the database and mongoose.",
    deploy: "https://vyncent-t.github.io/atmosphere-project/",
    repo: "https://github.com/vyncent-t/workout-tracker",
    tech: "HTML, CSS, Javascript, MongoDB, Mongoose"
}

projectArr.push(proA)
projectArr.push(proB)
projectArr.push(proC)


module.exports = projectArr