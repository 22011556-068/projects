var nameError = document.querySelector('.name-error');
var fixError = document.querySelector('.fix-error');
var phoneError = document.querySelector('.phone-error');
var mailError = document.querySelector('.mail-error');
var messageError = document.querySelector('.message-error');

     function nameUpdate(){
    var name = document.querySelector('.name-input').value;
    if(name.length == 0){
        nameError.innerHTML= 'Name is required'
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Enter Full Name';
        return false;
    }
    nameError.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m420.37-292.02 285.72-285.72-55.81-55.37L420.37-403.2 306.46-517.11l-54.81 55.37 168.72 169.72Zm59.77 221.15q-84.44 0-159.13-32.16-74.7-32.16-130.27-87.83-55.58-55.68-87.73-130.16-32.14-74.48-32.14-158.84 0-85.44 32.16-160.13 32.16-74.7 87.74-130.05 55.59-55.36 130.11-87.51 74.52-32.15 158.93-32.15 85.49 0 160.26 32.24 74.76 32.24 130.07 87.5 55.31 55.26 87.43 129.84 32.13 74.58 32.13 160.06 0 84.51-32.16 159.2-32.17 74.69-87.62 130.19-55.46 55.51-129.94 87.66-74.48 32.14-159.84 32.14Zm-.17-76.72q138.27 0 235.36-97.2 97.08-97.19 97.08-235.18 0-138.27-97.05-235.36-97.05-97.08-235.61-97.08-137.55 0-234.86 97.05-97.3 97.05-97.3 235.61 0 137.55 97.2 234.86 97.19 97.3 235.18 97.3ZM480-480Z"/></svg>'; 
    return true;       
}
 function phoneUpdate(){
    var phone = document.querySelector('.phone').value;
    if(phone.length === 0){
        phoneError.innerHTML = 'phone no is required';
        return false;
    }
   if(phone.length !== 10){
    phoneError.innerHTML = 'phone must be 10 digits';
   }
   if(!phone.match(/^[0-9]{10}$/)){
  phoneError.innerHTML = 'Enter 10 Digits';
  return false;
   }
        phoneError.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m420.37-292.02 285.72-285.72-55.81-55.37L420.37-403.2 306.46-517.11l-54.81 55.37 168.72 169.72Zm59.77 221.15q-84.44 0-159.13-32.16-74.7-32.16-130.27-87.83-55.58-55.68-87.73-130.16-32.14-74.48-32.14-158.84 0-85.44 32.16-160.13 32.16-74.7 87.74-130.05 55.59-55.36 130.11-87.51 74.52-32.15 158.93-32.15 85.49 0 160.26 32.24 74.76 32.24 130.07 87.5 55.31 55.26 87.43 129.84 32.13 74.58 32.13 160.06 0 84.51-32.16 159.2-32.17 74.69-87.62 130.19-55.46 55.51-129.94 87.66-74.48 32.14-159.84 32.14Zm-.17-76.72q138.27 0 235.36-97.2 97.08-97.19 97.08-235.18 0-138.27-97.05-235.36-97.05-97.08-235.61-97.08-137.55 0-234.86 97.05-97.3 97.05-97.3 235.61 0 137.55 97.2 234.86 97.19 97.3 235.18 97.3ZM480-480Z"/></svg>';
    return true;
 }
   function mailUpdate(){
    var mail = document.querySelector('.inpo').value;
     if(mail.length === 0){
        
        mailError.innerHTML = 'Enter some email';
        return true;
     }
     if(!mail.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        mailError.innerHTML = 'invalid email';
        return false;
   }
   mailError.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m420.37-292.02 285.72-285.72-55.81-55.37L420.37-403.2 306.46-517.11l-54.81 55.37 168.72 169.72Zm59.77 221.15q-84.44 0-159.13-32.16-74.7-32.16-130.27-87.83-55.58-55.68-87.73-130.16-32.14-74.48-32.14-158.84 0-85.44 32.16-160.13 32.16-74.7 87.74-130.05 55.59-55.36 130.11-87.51 74.52-32.15 158.93-32.15 85.49 0 160.26 32.24 74.76 32.24 130.07 87.5 55.31 55.26 87.43 129.84 32.13 74.58 32.13 160.06 0 84.51-32.16 159.2-32.17 74.69-87.62 130.19-55.46 55.51-129.94 87.66-74.48 32.14-159.84 32.14Zm-.17-76.72q138.27 0 235.36-97.2 97.08-97.19 97.08-235.18 0-138.27-97.05-235.36-97.05-97.08-235.61-97.08-137.55 0-234.86 97.05-97.3 97.05-97.3 235.61 0 137.55 97.2 234.86 97.19 97.3 235.18 97.3ZM480-480Z"/></svg>';
   return true; 
}
    function messageUpdate(){
    var message =  document.querySelector('.message').value;
     if(message.length == 0){
        messageError.innerHTML = 'enter some letters';
        return false;
     }
     if(message.length !== 30 && message.length < 30 ){
         messageError.innerHTML = 'enter 30 Letters'
        return false
     }
     messageError.innerHTML= '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m420.37-292.02 285.72-285.72-55.81-55.37L420.37-403.2 306.46-517.11l-54.81 55.37 168.72 169.72Zm59.77 221.15q-84.44 0-159.13-32.16-74.7-32.16-130.27-87.83-55.58-55.68-87.73-130.16-32.14-74.48-32.14-158.84 0-85.44 32.16-160.13 32.16-74.7 87.74-130.05 55.59-55.36 130.11-87.51 74.52-32.15 158.93-32.15 85.49 0 160.26 32.24 74.76 32.24 130.07 87.5 55.31 55.26 87.43 129.84 32.13 74.58 32.13 160.06 0 84.51-32.16 159.2-32.17 74.69-87.62 130.19-55.46 55.51-129.94 87.66-74.48 32.14-159.84 32.14Zm-.17-76.72q138.27 0 235.36-97.2 97.08-97.19 97.08-235.18 0-138.27-97.05-235.36-97.05-97.08-235.61-97.08-137.55 0-234.86 97.05-97.3 97.05-97.3 235.61 0 137.55 97.2 234.86 97.19 97.3 235.18 97.3ZM480-480Z"/></svg>';
}
function runFun(){
    if(!nameUpdate() ||  !phoneUpdate() ||  !mailUpdate() || !messageUpdate()){
  fixError.innerHTML ='please fix error to submit';
  setTimeout(() => {
    fixError.style.display = 'none';
  },3000);
  return false;
    }
  
}