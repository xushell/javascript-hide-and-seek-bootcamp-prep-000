function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById("nested").getElementsByClassName("target")[0];
}

function increaseRankBy(n){
  var list = document.querySelectorAll('ul.ranked-list li');
  for (var i=0; i<list.length; i++){
    list[i].innerHTML = parseInt(list[i].innerHTML,10)+n;
  }
}

function deepestChild(){
  var current = document.getElementById('grand-node');
  let next = [];
  while (current) {
    var children = current.querySelectorAll('div');
    if (children.length==0) {
      return current;
    }
    for (let i = 0, l = children.length; i < l; i++) {
      next.push(children[i]);
    }
    current = next.shift();
  }
  return null
}
