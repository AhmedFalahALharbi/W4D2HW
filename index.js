let url = "https://66e7e6bfb17821a9d9da7097.mockapi.io/User";
let inputEmail = document.getElementById('Email');
let inputPassword = document.getElementById('password');
let loginbtn = document.getElementById('loginbtn');
let fullName = document.getElementById('fullName');

loginbtn.addEventListener('click', () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let loginSuccessful = false; 
            let Fname = "";
            let Lname = "";

            data.forEach(element => {
                if (inputEmail.value === element.email && inputPassword.value === element.password) {
                    loginSuccessful = true;
                    Fname = element.firstName; 
                    Lname = element.lastName; 
                }
            });

            if (loginSuccessful) {
                localStorage.setItem('fullName', `${Fname} ${Lname}`);
                location.assign('profile.html');
            } else {
                alert('Password or email is wrong, try again');
            }
        })
        
});

