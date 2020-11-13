  <script>
	function addEvent() {
	  var list = document.createElement("li");
	  var userInput = document.getElementById("inputEvent").value;
	  var inputVal = document.createTextNode(userInput);
	  list.className = "del";
	  list.appendChild(inputVal);
	  var holdList = document.getElementById("storeList");
	  
	  if (userInput == " ") {
	    alert("You must write something");
		} else {
		  holdList.appendChild(list);
		  }
		    document.getElementById("inputEvent").value = " ";

	   var btn = document.createElement("span");
	   var icon = createTextNode("\u00D7");
	   btn.className = "remove";
	   btn.appendChild(icon);
	   list.appendChild(btn);
	
	   for (i = 0; i < remove.length; i++) {
	     remove[i].onclick = function() {
		   var div = this.parentElement;
		   div.style.display = "none";
		   }   
	     }
		};
	
	  function clearNode() {
	    let listSection = document.getElementById("storeList");
		listSection.style.display = "none";
		}
  </script>
