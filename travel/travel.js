// logic close and open menu tags
let close = document.getElementById('tag');
let res = document.getElementById('res')
close.addEventListener('click',()=>{
    close.innerHTML="&#10006;"
})
window.addEventListener('DOMContentLoaded',()=>{
    let loader = document.getElementById('section')
    setTimeout(() => {
        
        loader.style.display = "none"
    }, 3000);
})
