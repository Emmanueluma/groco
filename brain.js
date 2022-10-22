(function () {
    const icon0 = document.getElementById('icon0')
    const icon1 = document.getElementById('icon1');
    const icon2 = document.getElementById('icon2');
    const icon3 = document.getElementById('icon3');
    const search = document.getElementById('search');
    const list = document.getElementById('list');
    const login = document.getElementById('login');
    const menu = document.getElementById('menu');
    const main = document.body.getElementsByClassName('center')[0];
    
    window.addEventListener('load', e => {
        main.classList.add('centerHidden');
    })
    
    icon0.onclick = () => {
        if (menu.style.display == "flex") {
                menu.style.display = "none"
        }
        else {
            menu.style.display = "flex"
        }
    }
    icon1.onclick = () => {
        if (search.style.display == "flex") {
                search.style.display = "none"
        }
        else{
            search.style.display = "flex"
        }
    }
    icon2.onclick = () => {
        if (list.style.display == "flex") {
                list.style.display = "none"
        }
        else{
            list.style.display = "flex"   
        }
    }
    icon3.onclick = () => {
        if (login.style.display == "flex") {
            login.style.cssText = "display: none left: 100vw "
        }
        else{
            login.style.display = "flex"
            login.style.left = "60vw"
        }
    } 
}) ()




