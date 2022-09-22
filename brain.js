const icon1 = document.getElementById('icon1');
const icon2 = document.getElementById('icon2');
const icon3 = document.getElementById('icon3');
const search = document.getElementById('search');
const list = document.getElementById('list');
const login = document.getElementById('login');

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
        login.style.left = "70vw"
    }
}



