/*
//1.use of document.getElementByid
var a=document.getElementById('header-title');
a.textContent="hello";

var header=document.getElementById('header');
header.style.borderBottom='10px solid yellow';

*/



/*
//2.use of getElementsByClassName

var item=document.getElementsByClassName('list-item');
item[1].textContent='animation';
item[1].style.fontWeight='bold';
item[2].style.backgroundColor='red';

//backgroudcolor for all element
for(var i=0;i<item.length;i++){
    item[i].style.backgroundColor='yellow';
}

*/



//3.use of querySelector()
//4.use of querySelectorAll()

var headline=document.querySelector('#tegline');
headline.style.color='red';


var item=document.querySelector('.list-item');
item.style.color='yellow';


//diffrence querySelectorAll
var it=document.querySelectorAll('.list-item');
it[2].style.color='#923';


//or
//var item=document.querySelector('.list-item:nthe-child(3)');
var item=document.querySelector('.list-item:last-child');
item.style.color='blue';


var odd=document.querySelectorAll('li:nth-child(odd)');

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='#6655';
}


var input=document.querySelector('input');
input.value='enter your name';


var button=document.querySelector('input[type="submit"]');
button.style.backgroundColor='red';
button.style.color='yellow';
button.value='Send';


