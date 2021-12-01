const toggle = document.querySelector('.toggle-menu');
const nav = document.querySelector('ul');

toggle.addEventListener('click',()=>{
    if(nav.getAttribute('data-visible') == 'false'){
        toggle.style= "    transform: rotate(90deg);";
        nav.setAttribute('data-visible','true');
    }else if(nav.getAttribute('data-visible') == 'true'){
        toggle.style= "    transform: rotate(0deg);";
        nav.setAttribute('data-visible','false');
    }

});