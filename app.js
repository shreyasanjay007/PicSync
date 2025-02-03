const sidebar = document.getElementById('sidebar')
const navBtn = document.getElementsByClassName('nav-btns')
const navTitle = document.getElementsByClassName('nav-titles')
const resize = document.getElementById('resize-btn')
const logoDiv = document.getElementById('logo-div')
const homePage1 = document.getElementById('home-page1')
const homePage2 = document.getElementById('home-page2')

for(let i=0; i<navBtn.length; i++){
    resize.addEventListener('click',()=>{
        navTitle[i].classList.toggle('nav-titles-toggle')
        
    })
}

resize.addEventListener('click',()=>{
    sidebar.classList.toggle('sidebar-toggle')
    logoDiv.classList.toggle('logo-div-toggle')
    homePage2.classList.toggle('home-page2-toggle')
    homePage1.classList.toggle('home-page1-toggle')
})

const idArray = ["Chris Hemsworth","Scarlett Johnson","Tom Holland","Benedict Clumberbatch","Robert Downey Jr.","Chris Pratt","Paul Rudd","Elizabeth Olsen","Mark Ruffallo","Chris Evans","Tom Hiddleston","Jeremy Renner"]

const homeStory = document.getElementById('home-story')
for(let i=1; i<=12; i++){
    const storyBox = document.createElement('div')
    storyBox.id = 'story-box${i}'
    storyBox.className = 'story-box'
    storyBox.innerHTML = `<div id='story-image-box${i}' class='story-image-box' ></div>
                            <div id='story-id${i}' class='story-id' ></div> `
    homeStory.appendChild(storyBox)

    const storyImageBox = document.getElementsByClassName('story-image-box')[i-1]
    storyImageBox.innerHTML = `<img src="/assets/images/story/story${i}.jpg" />`
 
    const storyID = document.getElementsByClassName('story-id')[i-1]
    storyID.innerHTML = `${idArray[i-1]}`


}

