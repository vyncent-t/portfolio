

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
    title: "Likemind",
    image: "https://user-images.githubusercontent.com/78232183/160478676-8a2887cc-b50d-4718-b9dc-0c62f7c85d00.jpg",
    demo: "https://www.youtube.com/watch?v=9ZkpfkBytEk",
    desc: "Likemind is a multi-user organizational app that allows users to create, propose, and manage activities within a group of other individual users on the platform. This app serves as a tool to better link users through friend groups labeled as cliques which contain dynamic events created by the users where they propose plans to be decided on as a collective.",
    deploy: "https://likemind-project.herokuapp.com/",
    repo: "https://github.com/vyncent-t/likemind-beta",
    tech: "Tools: Javascript, HTML, CSS, Bootstrap, React.js, MongoDB, Mongoose, Express.js, Apollo, Apollo-client, Apollo-server, Git, GitHub, Heroku "
}



let proB = {
    title: "Atmos",
    image: "https://user-images.githubusercontent.com/78232183/160482215-d71674d6-3108-4ec9-bd51-9dab43457a84.png",
    desc: "Atmos is a multi-media consumption app that allows the users to simultaneously listen to their preferred genre of music via Spotify while viewing a playlist of curated atmospheric videos via YouTube. The user simply inputs their preference of audio and visual content into the custom menu and a media dashboard is generated based off of keywords by the user.",
    deploy: "https://the-atmos-project.herokuapp.com/",
    repo: "https://github.com/vyncent-t/atmos-beta",
    tech: "Tools: Javascript, HTML, CSS, Bootstrap, React.js, Spotify API, Youtube API"
}


let proC = {
    title: "Weathermind",
    image: "https://user-images.githubusercontent.com/78232183/115094913-4f4fce00-9eed-11eb-84ac-f5a66fda12ff.png",
    desc: " Weathermind is a simple weather tracking project that allows users access to the current weather conditions for any major city in a 5 day forcast format. This project is a very minimalistic in nature, requiring only basic jQuery to function. The current weather for the city at the time of searching will be the main focus of the page while the following 5 day forecast will be available as complimentary data.",
    deploy: "https://vyncent-t.github.io/weathermind-app/",
    repo: "https://github.com/vyncent-t/weathermind-app",
    tech: "Tools: Javascript, jQuery, HTML, CSS, Git, GitHub, Insomnia"
}


projectArr.push(proA)
projectArr.push(proB)
projectArr.push(proC)


module.exports = projectArr