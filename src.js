const toggle = document.querySelector('.toggle-menu');
const nav = document.querySelector('ul');

toggle.addEventListener('click',()=>{
    if(nav.getAttribute('data-visible') == 'false'){
        toggle.style= "height:0;";
        nav.setAttribute('data-visible','true');
    }else if(nav.getAttribute('data-visible') == 'true'){
        toggle.style= "height:2rem;";
        nav.setAttribute('data-visible','false');
    }

});
$('main').click(function (event) 
{
   if(!$(event.target).closest('ul').length && !$(event.target).is('ul')) {
    toggle.style= "height:2rem;";
    nav.setAttribute('data-visible','false');
   }     
});