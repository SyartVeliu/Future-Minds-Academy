const email = document.querySelector('#email');
const pass = document.querySelector('#pass');
const loginBTN = document.querySelector('#loginBTN');
const msg = document.querySelector('#msg');

let emailUser = 'syart';
let paddUser = 'veliu';

loginBTN.addEventListener('click', function () {

    if(email.value === emailUser && pass.value === paddUser){
            msg.innerHTML = `<span style="color: green;">Correct</span>`

    }
    else{
        msg.innerHTML = `<span style="color: red;">Incorrect</span>`
    }

}); 