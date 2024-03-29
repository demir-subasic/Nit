const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter')

//Form submit event
form.addEventListener('submit', addItem);

//Delete event
itemList.addEventListener('click', removeItem);

//Filter event
filter.addEventListener('keyup', filterItems);

//Add item
function addItem(e){
  e.preventDefault();
  
  //Get input value
  const newItem = document.getElementById('item').value;

  //Create new li element
  const li = document.createElement('li');
  //Add class
  li.className = 'list-group-item';
  //Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //Create del btn value
  const deleteBtn = document.createElement('button')

  //Add classes to del btn
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  //Add text node
  deleteBtn.appendChild(document.createTextNode('X'));

  //Append btn to li 
  li.appendChild(deleteBtn);

  //Append li to list
  itemList.appendChild(li);
}


//Remove Item
function removeItem(e){
   if(e.target.classList.contains('delete')){    //OVO ZNACI DA SAMO NA DUGME BRISE STVARI A NE NA CELO POLJE
    if(confirm('Are you sure?')){
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
   }
}


//Filter Items 
function filterItems(e){
    // conver to lowercase
    const text = e.target.value.toLowerCase();
    //Get list
    const items = itemList.getElementsByTagName('li');
    //Convert to an array
    Array.from(items).forEach(function(item){
       const itemName = item.firstChild.textContent;
       if(itemName.toLowerCase().indexOf(text) !== -1){
        item.style.display = 'block';
       } else {
        item.style.display = 'none';
       }
    })
}