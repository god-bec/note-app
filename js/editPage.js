
//pushing user note in editPage to display them in the index page using POST method
const savebtn = document.querySelector('#save_btn')
savebtn.addEventListener('click', function(){
const form = document.querySelector('.edit_container');
const notes =
    {
    title: form.title.value,
    content: form.content.value
    }
     const data = 'http://localhost:3000/noteA';
fetch(data,{
    method:'POST',
    body: JSON.stringify(notes),
    headers: {"Content-Type":"application/json"}
});
window.location.replace('/index.html')

});













  
   






