
const body = document.querySelector('.body');
const textArea = document.getElementById('text-area');
const conta =document.querySelector('.container')
const saveButton = document.querySelector('#save_btn')
const plus_btn = document.querySelector('.plus')
const editPage = document.querySelector('.container_editpage')

let noteData = "http://localhost:3000/noteA";
let note = [];
//fetching json server
fetch(noteData)
.then((response)=>{
    return response.json()
}).then((data)=>{
     note.push(...data)
     console.log(data)
//displaying element gotten from json server array,so it can be edited by the user in the text area in index page
  function fetchData(){
        const getData = note.map(function(el){
            return `
            <form class="note-container">
            <input name="title" placeholder="${el.title}" class="title"/>
            <textarea class="text" placeholder="${el.content}"></textarea>
            </form>`
        });
        const textArea = document.querySelector('.container');
        textArea.innerHTML = getData.join("");
   
  }
  window.addEventListener('DOMContentLoaded',fetchData());
  
 
}).catch((error)=>{console.log('error')});

   







