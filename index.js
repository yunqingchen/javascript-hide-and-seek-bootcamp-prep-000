function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementbyId('nested').querySelector('div.target');
}

function increaseRankBy(n){
  const upRank = document.getElementbyId('app').querySelectorAll('ul.ranked-list');
  
  for (var i = 0; i<upRank.length; i++){
    upRank[i].innerHTML = ((parseInt(upRank[i].innerHTML)) + n);
  }
}

function deepestChild(){
  var deep = query
}