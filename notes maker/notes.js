let ntButton = document.querySelector('.ntbutton');
let notesContainer = document.querySelector('.notes-container');
let notes = document.querySelectorAll('.input-box');
let deleteButton = document.querySelector('.delete');

  ntButton.addEventListener('click', ()=>{
   let inputBox = document.createElement('p');
   let button = document.createElement('button');
   inputBox.className = 'input-box';
   inputBox.setAttribute('contenteditable' , 'true');
   notesContainer.appendChild(inputBox).appendChild(button);
   console.log(notesContainer)
  });
 