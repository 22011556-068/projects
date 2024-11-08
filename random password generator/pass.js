let values = '';
values += `   <p class="text">Generate a Random password </p>
            <div class="grid">
                <input type="text" placeholder="Generating a password" class="input">
                <img src="copy.png" class="image-copy" onclick="copyPassword()">
            </div>
            <button class="password-button" onclick="passwordgenerater()">Generate Password</button>`;
                console.log(values);
document.querySelector('.js-display')
.innerHTML = values;
let inputPass = document.querySelector('.input');
let length = 12;
let upperCase= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
let numbers = '1234567890';
let addCases = upperCase + lowerCase + numbers;
function passwordgenerater(){
    let password ='';
    password += upperCase[Math.floor(Math.random()* upperCase.length)];
    password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
    password += numbers[Math.floor(Math.random()* numbers.length)];
    while(length > password.length){
        password += addCases[Math.floor(Math.random()* addCases.length)];
      
    }
    inputPass.value = password;
}
function copyPassword(){
    inputPass.select();
    document.execCommand('copy');

}
const product = [{
 
}];
