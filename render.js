const json = require('./globalJSON');
console.log(json);
document.addEventListener("DOMContentLoaded", () => {


  document.getElementById(".midListItem").addEventListener("click", displayRoute);

  function displayRoute(val) {
    var node = document.createElement("li");                 // Create a <li> node
    var textnode = document.createTextNode(json[0]["changes"][1]);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"
  }



}):