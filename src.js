const toggle = document.querySelector('.toggle-menu');
const nav = document.querySelector('ul');
var development = true;

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


//if development false, remove all blured classes, and also display none #root announcement and its children
if(!development){
    document.querySelector('body#root').classList.remove('disable-scroll');
    document.querySelector('body#root').classList.add('enable-scroll');
    document.querySelectorAll('.blured').forEach((element)=>{
        element.classList.remove('blured');
    });
    document.querySelector('#root .announcement').style.display = 'none';
}
else if(development){
    //get current url
    var url = window.location.href;
    document.querySelector('#new-url').href = url + 'new';
}