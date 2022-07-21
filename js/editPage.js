
//pushing user note in editPage to display them in the index page using POST method
const savebtn = document.querySelector('.save_btn');
savebtn.addEventListener('click', function(){
const form = document.querySelector('.edit_container');
const date = new Date();
console.log(date.getTime())
const stringDate =date.toDateString();
let minutes =date.getMinutes();
if(minutes < 10){
   minutes = '0'+minutes
}else{minutes};

const currentTime = `${date.getHours()}:${minutes}`;
let dateSuffix = ' ';
if(date.getHours() >= 12){
    dateSuffix +=`PM`;
}else{dateSuffix += `AM`};

const notes =
    {
    title: form.title.value,
    content: form.content.value,
    date: `<h5>${currentTime} ${dateSuffix} ${stringDate}<h5>`
    }
     const data = 'http://localhost:3000/noteA';
fetch(data,{
    method:'POST',
    body: JSON.stringify(notes),
    headers: {"Content-Type":"application/json"}
}).then(()=>{window.location.replace('/index.html')}).catch((error)=>{console.log("error")});
})



git








  
   






