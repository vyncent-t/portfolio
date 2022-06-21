

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
    desc: "Likemind is a social organizational app that allows users to create, propose, and manage activities within exclusive groups composed of other individuals on the platform. Users create an exclusive group (Clique) to which they are able to create events based on a calender date. Within each event, users can create dynamic posts serving as a plan/idea to put forward for group voting. This app serves as a tool to better facilitate planning for events across diffrent social circles.",
    deploy: "https://likemind-project.herokuapp.com/",
    repo: "https://github.com/vyncent-t/likemind-beta",
    tech: "Tools: JavaScript, HTML, CSS, Bootstrap, React.js, Node.js, Express.js, Apollo, Apollo-client, Apollo-server, GraphQL, Git, GitHub, Heroku, Insomnia, Node Package Manager (NPM)"
}



let proB = {
    title: "Atmos",
    image: "https://user-images.githubusercontent.com/78232183/168392114-038c1b06-4843-40a9-86e9-22456a781156.png",
    demo: "https://www.youtube.com/watch?v=aj7OF1mASa0",
    desc: "Atmos is a multi-media consumption app that allows the users to simultaneously listen to their preferred genre of music via Spotify while viewing a playlist of curated atmospheric videos via YouTube. The user inputs their preference of audio and visual content into the custom menu and a media dashboard is generated playing the content they chose. The user can then change the content options from within the dashboard (change videos, playlists, songs, etc.) or can return to the menu for a new combination of options. [PLEASE NOTE: Please view the video demo as the current project requires spotify review in order to work for non project affiliated users]",
    deploy: "https://the-atmos-project.herokuapp.com/",
    repo: "https://github.com/vyncent-t/atmos-beta",
    tech: "Tools: JavaScript, HTML, CSS, Bootstrap, React.js, Redux.js, Node.js, Express.js, Spotify API, Google API, YouTube API, Git, GitHub, Heroku, Insomnia, Node Package Manager (NPM)"
}


let proC = {
    title: "Weathermind",
    image: "https://user-images.githubusercontent.com/78232183/115094913-4f4fce00-9eed-11eb-84ac-f5a66fda12ff.png",
    desc: "Weathermind is a simplistic weather tracking application that allows users access to the current weather conditions for any major city in a 5-day forecast format. This project is a very minimalistic in nature, requiring only basic jQuery to function. The current weather for the city at the time of searching will be the main focus of the page while the following 5 day forecast will be available as complimentary data.",
    deploy: "https://vyncent-t.github.io/weathermind-app/",
    repo: "https://github.com/vyncent-t/weathermind-app",
    tech: "Tools: Javascript, jQuery, HTML, CSS, Git, GitHub, Insomnia"
}


projectArr.push(proA)
projectArr.push(proB)
projectArr.push(proC)


module.exports = projectArr