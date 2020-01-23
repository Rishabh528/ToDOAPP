window.onload = function (){
  let item = document.getElementById('item');
  let add = document.getElementById('add');

  function addTask (){
    let tasklist = document.getElementById('tasklist');
    let task = document.createElement('li');
    console.log(item.value);
    task.innerText = item.value;
    tasklist.appendChild(task);
  }

  add.onclick = addTask;

  item.addEventListener('keyup', function(event){
    if(event.keyCode==13){
      addTask();
    }
  })
}