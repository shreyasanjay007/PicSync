const sidebar = document.getElementById('sidebar')
const navBtn = document.getElementsByClassName('nav-btns')
const navTitle = document.getElementsByClassName('nav-titles')
const resize = document.getElementById('resize')
const logo = document.getElementById('logo')
const mini = document.getElementById('mini')
const max = document.getElementById('max')
const logoDiv = document.getElementById('logo-div')

for(let i=0; i<navBtn.length; i++){
    resize.addEventListener('click',()=>{
        navTitle[i].classList.toggle('nav-titles-toggle')
        
    })
}

resize.addEventListener('click',()=>{
    sidebar.classList.toggle('sidebar-toggle')
    logo.classList.toggle('logo-toggle')
    mini.classList.toggle('mini')
    max.classList.toggle('max-toggle')
    logoDiv.classList.toggle('logo-div-toggle')
    

})




// function increaseBtnWidth(){
//     for(let i=0;i<navBtn.length;i++){
//         navTitle[i].style.display = 'flex'
//         sidebar.classList.add('sidebar-toggle')
//     }
// }
// function decreaseBtnWidth(){
//     for(let i=0;i<navBtn.length;i++){
//         navTitle[i].style.display = 'none'
//         sidebar.classList.remove('sidebar-toggle')
//     }
// }

// sidebar.addEventListener('mouseenter',increaseBtnWidth)

// sidebar.addEventListener('mouseleave',decreaseBtnWidth)

