

const projectArr = []
// class Project {
//     constructor(title, img, desc, website, repo, tech) {
//         this.title = title
//         this.img = img
//         this.desc = desc
//         this.website = website
//         this.repo = repo
//         this.tech = tech
//     }
// }


let proA = {
    title: "Headlamp",
    nature: "Open source project",
    role: "Team contributor",
    image: "https://raw.githubusercontent.com/headlamp-k8s/headlamp/screenshots/videos/headlamp_quick_run.gif",
    desc: "Headlamp is an open-source project that aims to provide a web-based user interface (UI) for managing Kubernetes clusters. It is designed to be easy to use, extensible, and customizable. Headlamp is built using modern web technologies such as React, Redux, and TypeScript. The frontend interacts with the Kubernetes API to perform various cluster management tasks, while the backend handles authentication and other server-side functionalities. This web UI is designed to help users manage their Kubernetes clusters more efficiently and effectively by providing them with a visually intuitive interface.",
    website: "https://www.headlamp.dev/",
    repo: "https://github.com/headlamp-k8s/headlamp",
    tech: "Tools: TypeScript, JavaScript, Go, React.js, Redux toolkit, MaterialUI, Storybook, Kubernetes, Docker, Linux, Azure Cloud Platforms, GitHub"
}


let proB = {
    title: "Atmos",
    nature: "Solo Project",
    role: "Creator",
    image: "https://user-images.githubusercontent.com/78232183/168383161-a72cbe72-9698-4d20-a3f9-4eb0ef8caebb.png",
    demo: "https://www.youtube.com/watch?v=aj7OF1mASa0",
    note: "NOTE: Please note that this project requires Spotify authorization to access music data. If you're not affiliated with the project, please watch the video demo to understand how the project works.",
    desc: "Atmos is an immersive multimedia consumption app that seamlessly combines users' preferred music genres with curated atmospheric videos, creating a captivating audio-visual experience. By leveraging the Spotify API for music streaming and the Google YouTube API for video content, Atmos ensures compatibility with a variety of listening devices and enables effortless control through the application.",
    website: "https://the-atmos-project.herokuapp.com/",
    repo: "https://github.com/vyncent-t/atmos-beta",
    tech: "Tools: Javascript, HTML, CSS, Bootstrap, React.js, Redux toolkit, Spotify API, Youtube API"
}

let proC = {
    title: "Likemind",
    nature: "Solo Project",
    role: "Creator",
    image: "https://user-images.githubusercontent.com/78232183/160478676-8a2887cc-b50d-4718-b9dc-0c62f7c85d00.jpg",
    demo: "https://www.youtube.com/watch?v=9ZkpfkBytEk",
    desc: "Likemind is a social event organization app designed to facilitate the planning and management of activities within exclusive, user-created groups. By offering an intuitive platform for proposing group-specific events based on calendar dates, Likemind enables users to generate dynamic posts outlining plans or ideas that can be voted on by group members, fostering streamlined collaboration and decision-making.",
    website: "https://github.com/vyncent-t/likemind-beta",
    repo: "https://github.com/vyncent-t/likemind-beta",
    tech: "Tools: Javascript, HTML, CSS, Bootstrap, React.js, Redux, MongoDB, Mongoose, Express.js, Apollo, Apollo-client, Apollo-server, Git, GitHub, GraphQL, Heroku "
}





projectArr.push(proA)
projectArr.push(proB)
projectArr.push(proC)


module.exports = projectArr