const id = new URLSearchParams(window.location.search).get('id');

window.addEventListener('DOMContentLoaded',function(){
 fetch('http://localhost:3000/noteA/'+ id)
 .then((res)=>res.json())
 .then((data)=>{
    const display = ` 
    <input value="${data.title}" name="title" placeholder="${data.title}" class="title" />
    <textarea class="text-area" name="content">${data.content}</textarea>
    `
   const container =document.querySelector('.delete_container')
   container.innerHTML= display;
   //grabbing tht element to be deleted
   const delete_btn = document.querySelector('.delete_btn');
   //delete the content opened when delete btn is clicked
   delete_btn.addEventListener('click', function(){
      fetch('http://localhost:3000/noteA/'+ id,{
        method: "DELETE"
     }).then((res)=>{
        window.location.replace('/index.html')
     })
   });
 
 
  }).catch((error)=>(console.log('error')))
});

// saving user content after editing if the user does not want to delete it again
const container =document.querySelector('.delete_container')
const save_btn = document.querySelector('.save_btn2');
const delete_btn = document.querySelector('.delete_btn');
container.addEventListener('keypress', function(){
   save_btn.style.display = 'block';
   delete_btn.style.display = 'none';
});
save_btn.addEventListener('click', function(){
    const form = document.querySelector('.delete_container');
const date = new Date();
const stringDate =date.toDateString();
let minutes =date.getMinutes();
if(minutes < 10){
    minutes ='0'+minutes
}else{minutes};

const currentTime = `${date.getHours()}:${minutes}`;
let dateSuffix = ' ';
if(date.getHours() >= 12){
    dateSuffix +=`PM`;
}else{dateSuffix += `AM`};
    const notes = {
         title:form.title.value,
         content:form.content.value,
         date: `${currentTime} ${dateSuffix} ${stringDate}`
    }
       fetch('http://localhost:3000/noteA/'+ id,{
       method:'PUT',
       body: JSON.stringify(notes),
       headers: {"Content-Type":"application/json"}
   })
   .then(()=>{window.location.replace('/index.html')}).catch((error)=>{console.log("error")});
   
})