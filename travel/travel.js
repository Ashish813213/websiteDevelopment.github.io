// logic close and open menu tags
let tag = document.getElementById('tag')
let nav = document.getElementById('menuLIST')
tag.addEventListener('click', () => {
    if (nav.classList.contains('closing')) {
        nav.classList.replace('closing', 'navOPEN');
    }
    else {
        nav.classList.add("closing")
        nav.classList.remove('navOPEN')
    }
})
window.addEventListener('DOMContentLoaded',()=>{
    let loader = document.getElementById('section')
    setTimeout(() => {
        
        loader.style.display = "none"
    }, 1000);
})
