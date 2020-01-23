window.onload = function (){
  let item = document.getElementById('item');
  let add = document.getElementById('add');

  function addTask (){
    let tasklist = document.getElementById('tasklist');
    let delbtn = document.createElement('button');
    let upbtn = document.createElement('button');
    let downbtn = document.createElement('button');

    let task = document.createElement('li');
    // console.log(typeof item.value);
    if(item.value!=''){
      task.innerText = item.value;
      delbtn.innerText = 'DELETE';
      upbtn.innerText = 'UP';
      downbtn.innerText = 'DOWN';
      task.appendChild(delbtn);
      task.appendChild(upbtn);
      task.appendChild(downbtn);
      tasklist.appendChild(task);
    }

    delbtn.onclick = function (event){
      event.target.parentElement.remove();
    }

    upbtn.onclick = function (event){

      let currentNode = event.target.parentElement;
      let previousNode = currentNode.previousSibling;
      
      let temp = currentNode.parentElement.insertBefore(currentNode,previousNode);

      // currentNode.remove();
      // console.log(previousNode);
    }

    downbtn.onclick = function (event){

      let currentNode = event.target.parentElement;
      let nextNode = currentNode.nextSibling;

      if(nextNode.nextSibling != null){
      let temp = currentNode.parentElement.insertBefore(currentNode,nextNode.nextSibling);
      }
    }
  }

  add.onclick = addTask;

  item.addEventListener('keyup', function(event){
    if(event.keyCode==13){
      addTask();
    }
  })
}