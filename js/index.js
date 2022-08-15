
const body = document.querySelector('.body');
const textArea = document.getElementById('text-area');
const conta = document.querySelector('.container')
const plus_btn = document.querySelector('.plus')
const searchForm = document.querySelector('.search-form');

// 

//displaying element gotten from json server array,so it can be edited by the user in the text area in index page
function fetchData(searchTerm) {
  let noteData = "http://localhost:3000/noteA?_";
  //this statement fires for only the search input
  if(searchTerm){
    noteData +=`&q=${searchTerm}`;
  }
  let note = [];
  //fetching json server
  fetch(noteData)
    .then((response) => {
      return response.json()
    }).then((data) => {
      note.push(...data)
      const getData = note.map(function (el) {
        return `
            <a href="deletePage.html?id=${el.id}" class="js-link"><form class="note-container">
            <input name="title" placeholder="${el.title}" class="title" disabled/>
            <textarea class="text" disabled>${el.content}</textarea>
            <h4 class="js-h4">${el.date}<h4>
            </form>
            </a>`
           
      });
      const textArea = document.querySelector('.container');
      textArea.innerHTML = getData.join("");
    }

    ).catch((error) => { console.log('error') })
}

window.addEventListener('DOMContentLoaded', function () {
  fetchData();
});

//search field code

searchForm.addEventListener('submit', function (e) {
  e.preventDefault();
 fetchData(searchForm.search.value.trim());
  


});



