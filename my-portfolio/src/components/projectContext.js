const projectArr = []
class Project {
    constructor(title, img, desc, deploy, repo, tech) {
        this.title = title
        this.img = img
        this.desc = desc
        this.deploy = deploy
        this.repo = repo
        this.tech = tech
    }
}

let prox = new Project("atmos", "imgplace", "Atmos allows a user to choose a genre of music that they are in the mood for along with searching visuals they would like to see. The problem we are trying to solve is to allow the user to create a personalized experience without video editing knowledge or without requiring the use of multiple apps/browsers to achieve the same goal.", "deploylink", "githublink", "tech")

console.log(prox)

module.exports = Project