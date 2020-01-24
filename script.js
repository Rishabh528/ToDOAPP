window.onload = function (){
  let item = document.getElementById('item');
  let add = document.getElementById('add');

  function addTask (){
    let tasklist = document.getElementById('tasklist');   //ul task list
    let delbtn = document.createElement('button');
    let upbtn = document.createElement('button');
    let downbtn = document.createElement('button');

    let task = document.createElement('li'); // li tag
    // console.log(typeof item.value);
    if(item.value!=''){
      
      delbtn.innerText = 'DELETE';
      upbtn.innerText = 'UP';
      downbtn.innerText = 'DOWN';
      task.appendChild(delbtn);
      task.appendChild(upbtn);
      task.appendChild(downbtn);
      let spantask = document.createElement('span');  // actual task contained in span
      spantask.innerText = item.value;
      task.appendChild(spantask);
      tasklist.appendChild(task);
    }

    delbtn.onclick = function (event){
      event.target.parentElement.remove();
    }

    upbtn.onclick = function (event){

      let currentNode = event.target.parentElement;
      let previousNode = currentNode.previousElementSibling;
      
      currentNode.parentElement.insertBefore(currentNode,previousNode);
    }

    downbtn.onclick = function (event){

      let currentNode = event.target.parentElement;
      let nextNode = currentNode.nextElementSibling;

      
      currentNode.parentElement.insertBefore(nextNode,currentNode);
     
    }
  }

  add.onclick = addTask;

  item.addEventListener('keyup', function(event){
    if(event.keyCode==13){
      addTask();
    }
  })
}