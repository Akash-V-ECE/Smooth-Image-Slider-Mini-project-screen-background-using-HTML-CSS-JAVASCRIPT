let next=document.querySelector('.next');
let prev=document.querySelector('.prev');

next.addEventListener('click',function(){
    let i= document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(i[0])
})
prev.addEventListener('click',function(){
    let j=document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(j[j.length-1])
})