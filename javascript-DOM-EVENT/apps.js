// const main  = document.querySelector(".main");
// const btn = document.querySelector(".clickable");
// const body = document.querySelector("body");
// const p = document.querySelector(".tekst");
// const nameInput = document.querySelector(".input").value;
// const ispis = document.querySelector("ispis");





// btn.addEventListener("click", () => {
//     // alert("Dugme sa klasom clickable je kliknuto");
//     main.style.background = 'pink'
// });



// // main.addEventListener("mouseout", () => {
// //     main.style.backgroundColor = "green"
// // })



// body.addEventListener("keydown", (e) => {
//     console.log(e);
//     p.textContent += `kod: ${e.code}`;
//     // if (e.code === "KeyR") location.reload();
// });







// FORME VEZBANJE *********

const usersContainer = document.querySelector(".users");
const submitBtn = document.querySelector("#submit");
const formaClear = document.querySelector("#forma");

let users = [];

const userFactory = (name, lastName, occupation) => {
    return {name, lastName, occupation};
};

const renderUsers = () => {
    users.forEach((user) => {
        const userContainer = document.createElement("div");

        const userNameEl = document.createElement("span");
        const lastNameEl = document.createElement("span");
        const occupationEl = document.createElement("span");

        usersContainer.appendChild(userNameEl);
        usersContainer.appendChild(lastNameEl);
        usersContainer.appendChild(occupationEl);

        userNameEl.textContent = "IME : " + user.name
        lastNameEl.textContent = "PREZIME : " + user.lastName
        occupationEl.textContent = "ZANIMANJE : " + user.occupation
        

        usersContainer.appendChild(userContainer);
    });
}



submitBtn.onclick = (e) => {
    e.preventDefault();
    let userName = document.querySelector("#name").value;
    
    let lastName = document.querySelector("#lastName").value;
    
    let occupation = document.querySelector("#occupation").value;
    
    
    
  const user = userFactory(userName,lastName,occupation);

  e.preventDefault();
  const inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
    input.value = ""
  })
  


  users.push(user);
   renderUsers();
   
  
  
};


//OVO JE KAKO BRISEMO NEKOG KORISNIKA

const deleteUser = (userId) => {
    const newUsers = users.filter((user) => {
         return user.id !== userId
    });
    users = [...newUsers]
}

// actionCell.addEventListener("click", () => deleteUser(currentUser.id));



// da se ociste polja     -     URADJENO
// da se ne duplaju podaci kad izbaci  
// da se stilizuje forma  -   URADJENO





