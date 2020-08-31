let enlaces = document.querySelectorAll('a');
document.addEventListener('click', (e)=>{
    //console.log(e.target)
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});