//DOMACI ODRADRITI : user kartice da napravimo (slika,ime,prezime,email), da povucemo podatke da sacuvamo u varijablu i da usere prikazemo u interfejs i da svaki user ima svoju karticu
//                   to radimo na isti princip kao sto smo prikazali sve odgovore na kvizu i trebamo da prikazemo sve usere na interfejs
//                   preko forEach se radi

let users = [];

const getUsers = async () => {
    try {
        const response = await fetch("https://reqres.in/api/users");
        let dataBig = await response.json();
        users = dataBig.data;

        const renderUsers = () => {
            users.forEach((user) => {
                console.log(user);
                let main = document.querySelector("#main");
                const userContainer = document.createElement("div");
                userContainer.id = "userContainer";
                const userPicture = document.createElement("img");
                userPicture.id = "userPicture";
                userPicture.src = user.avatar;

                const userInfo = document.createElement("div");
                userInfo.id = "userInfo"
                const userName = document.createElement("p");
                userName.id = 'userName';
                const userEmail = document.createElement("p");
                userEmail.id = 'userEmain';
                userName.innerHTML = `${user.first_name} ${user.last_name}`
                userEmail.innerHTML = user.email


                document.querySelector("#main").appendChild(userContainer);
                userContainer.appendChild(userPicture);
                userContainer.appendChild(userInfo);
                userContainer.appendChild(userName);
                userContainer.appendChild(userEmail);
            });
        };
        renderUsers();
    } catch (e) {
        console.log(e);
    } finally {
        console.log("gotovo")
    }
};
getUsers();