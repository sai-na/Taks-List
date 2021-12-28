// // set local storage item
// localStorage.setItem('name','john');
// localStorage.setItem('age','19');

// // set session storage item
// sessionStorage.setItem('name','sai');

// // Remove from storage
// localStorage.removeItem('name');

// //get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// //clear local storage
// localStorage.clear();

// console.log(name , age);

document.querySelector('form').addEventListener('submit',
function(e){
    const task = document.getElementById('task').value;
    // console.log(task);

    let tasks;
    if(localStorage.getItem('tasks') === null){
       tasks= [];
        // localStorage.setItem('tasks',tasks);
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('Task saved');
    task ='';
    e.preventDefault();
})

const tasks = JSON.parse(localStorage.getItem('tasks')); 


tasks.forEach(function(task) {
  console.log(task);  
});