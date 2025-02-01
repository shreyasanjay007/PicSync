const sidebar = document.getElementById('sidebar');

for(let i=0; i<9; i++){
    const untoggledNavBars = document.getElementsByClassName('untoggled-nav-bars')[i]
    untoggledNavBars.addEventListener('mouseenter',()=>{
        sidebar.classList.toggle('toggled-sidebar')
        
        untoggledNavBars.classList.toggle('toggled-nav-bars')
    })
}
