function print(text){
  var comm = document.getElementById('comm');
  var node = document.createElement('p');
  var textNode = document.createTextNode(text);
  node.appendChild(textNode);
  comm.appendChild(node);
}
