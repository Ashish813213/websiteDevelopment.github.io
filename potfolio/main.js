let tag = document.getElementById('tag');
        let nav = document.getElementById('navUL');
        // tag.addEventListener('click',()=>{
        //     if(nav.style.height == '0px'){
        //         nav.style.height = "calc(100vh - 70px)";
        //     }
        //     else{
        //         nav.style.height = "0px";
        //     }
        // })
        tag.addEventListener('click',()=>{
            if (nav.classList.contains('closing')) {
                nav.classList.replace('closing','navOPEN');
            }
            else{
                nav.classList.add("closing")
                nav.classList.remove('navOPEN')
            }
        })
        let logBtn = document.getElementById('logbtn')
        let log = document.getElementById('logContent')
        let notN = document.getElementById('not')
        logBtn.addEventListener('click', () => {
            if (log.style.width == "0%") {
                log.style.width = "100%" ;
                log.style.opacity = "1";
            }
            else {
                log.style.width = "0%"
                log.style.opacity = "0"
            }
        })
        notN.addEventListener('click', () => {
            if (log.style.width == "0%") {
                log.style.width = "100%" ;
                log.style.opacity = "1";
            }
            else {
                log.style.width = "0%"
                log.style.opacity = "0"
            }
        })
        window.addEventListener('scroll',(e)=>{
            let scrollVAlue = pageYOffset;
            let card1 = document.getElementById('card1')
            let card2 = document.getElementById('card2')
            let card3 = document.getElementById('card3')
            let bar1 = document.getElementById('bar1');
            let bar2 = document.getElementById('bar2');
            let bar3 = document.getElementById('bar3');
            let bar4 = document.getElementById('bar4');
            let bar5 = document.getElementById('bar5');

            if(scrollVAlue => 180){
                card1.classList.add('animate1');
                card2.classList.add('animate1');
                card3.classList.add('animate1');
            }
            else{
                card1.classList.remove('animate1');
                card2.classList.remove('animate1');
                card3.classList.remove('animate1');
            }
            if (scrollVAlue => 550 ) {
                bar1.classList.add('animate2');
                bar2.classList.add('animate2');
                bar3.classList.add('animate2');
                bar4.classList.add('animate2');
                bar5.classList.add('animate2');
            }
            else{
                bar1.classList.remove('animate2');
                bar2.classList.remove('animate2');
                bar3.classList.remove('animate2');
                bar4.classList.remove('animate2');
                bar5.classList.remove('animate2');
            }
        })