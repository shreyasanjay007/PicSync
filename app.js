const container = document.getElementById("container")

const sidebar = document.createElement('div')
sidebar.id = "sidebar"
container.appendChild(sidebar)

const home = document.createElement('div')
home.id = "home"
container.appendChild(home)


const logoDiv = document.createElement('div')
logoDiv.id = 'logo-div'
sidebar.appendChild(logoDiv)

const miniLogo = document.createElement('div')
miniLogo.className = 'mini-logo'
miniLogo.innerHTML = `<img src="/assets/images/favicon.png" width="80px" />`
logoDiv.appendChild(miniLogo)

const maxiLogo = document.createElement('div')
maxiLogo.innerHTML = `<img src="/assets/images/mlogo.png" width="130px" />`
maxiLogo.className = 'maxi-logo'
logoDiv.appendChild(maxiLogo)

const navDiv = document.createElement('div')
navDiv.id = 'nav-div'
sidebar.appendChild(navDiv)

for(let i=1; i<9; i++){
    const navBar = document.createElement('div')
    navBar.id = `navBar${i}`
    navBar.className = `nav-bar`
}