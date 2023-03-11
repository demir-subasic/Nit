// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);


// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'Hello'       //OVO NIJE DOBAR NACIN
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);



// GETELEMENTBYID //

// console.log(document.getElementById('header-title'))
// const headerTitle = document.getElementById('header-title');
// const header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Godbye';
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000'



// GETELEMENTSBYCLASSNAME //

// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

//Gives error
// items.style.backgroundColor = 'dark';

// for(let i=0; i < items.length; i++) {
//   items[i].style.backgroundColor = 'blue';
// }



//QUERY SELECTOR //

// const header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px red';

// const input = document.querySelector('input');
// input.value = 'Hello World';

// const submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND"

// const item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// const lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// const secondItem = document.querySelector('.list-group-item:nth-child(2');
// secondItem.style.color = 'yellow';




//QUERY SELECTOR ALL //
// const titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// const odd = document.querySelectorAll('li:nth-child(odd)');
// const even = document.querySelectorAll('li:nth-child(even)');

// for(let i=0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = 'gray';
//     even[i].style.backgroundColor = 'green';
// }



//TRAVERSING THE DOM

// const itemList = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'yellow';
// console.log(itemList.parentNode.parentNode)

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'yellow';
// console.log(itemList.parentElement.parentElement);

//childNodes
// console.log(itemList.childNodes);

//children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'orange';

//firstChild                  (USELESS)
// console.log(itemList.firstChild);

//firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

//lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

//nextElementSibling
// console.log(itemList.nextElementSibling);

//previousElementSibling
// console.log(itemList.previousElementSibling);





// CREATE ELEMENT
// const newDiv = document.createElement('div');

// //Add class
// newDiv.className = 'hello';

// //Add id
// newDiv.id = 'hello1';

// //Add attribute
// newDiv.setAttribute('title', 'Hello Div');

// //Create text node
// const newDivText = document.createTextNode('Hello World')

// //Add text to div
// newDiv.appendChild(newDivText);

// const container = document.querySelector('header .container');
// const h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);


// EVENTS //

// const button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e) {
    // console.log('Button Clicked');
    // document.getElementById('header-title').textContent = 'Changed';
    // document.querySelector('#main').style.backgroundColor = 'red';
    // console.log(e);

    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.classList);

    // const output = document.getElementById('output');
    // output.innerHTML = '<h3>'+e.target.id+'</h3>';

    // console.log(e.type);
     
    //OVO JE SA WINDOW OBJEKTA
    // console.log(e.clientX);
    // console.log(e.clientY);
    
    //OVO JE SA ELEMENTA
    // console.log(e.offsetX);
    // console.log(e.offsetY); 


    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);
// }

const button = document.getElementById('button');
const box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

const itemInput = document.querySelector('input[type="text"]');
const form = document.querySelector('form');
const select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);


// select.addEventListener('change', runEvent);

form.addEventListener('submit', runEvent)

function runEvent(e){
    console.log('EVENT TYPE: '+e.type);
    e.preventDefault();
     
    // console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'

    // output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>'
    // document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";
}
