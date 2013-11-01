/* --------------- 
	
	This Script includes functions for Menu and Blog

	 ---------------*/



function show(id){  // function to display corresponding page
	event.preventDefault(); // prevents form performing the default charesteristic of an event, used it here to avoid adding the hash value in the URL on click of the button
	var elements = document.getElementsByClassName('content');

	for (var i = 0; i < elements.length; i++) {
		elements[i].style.display = "none";
	}

	var displayId = id.getAttributeNode("href").value.slice(1); // extracting the id name to be displayed from the href attribute of the button clicked

	document.getElementById(displayId).style.display = "block";

	// to change the background color for active menu first reset all background colors then change, style assigned to class active
	var items = document.getElementsByClassName('mnuitem');
	for (var i = 0; i < elements.length; i++) {
		items[i].classList.remove("active");
	}

	// to avoid assigning class active to the buttons in the blocks/boxes on home page
	if (id.parentNode.nodeName == "LI") {  
		id.classList.add("active");
	}
}

function displayBlog(){       // function to display blog
	titles = new Array("Title1 goes here", "Title2 goes here", "Title3 goes here");
	dates = new Array("September 9, 2013","September 15, 2013", "October 10, 2013");
	descriptions = new Array("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ","Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ");

    for (var i = 0; i < titles.length; i++) {
    	var linode = document.createElement('li');		    // creating li node to display the title
    	var h2node = document.createElement('h2');
    	var h4node = document.createElement('h4');
    	var pnode = document.createElement('p');
		var txtTitle = document.createTextNode(titles[i]);	// store the title to textnode 
		var txtDate = document.createTextNode(dates[i]);
		var txtDesc = document.createTextNode(descriptions[i]);
		h2node.appendChild(txtTitle);
		h4node.appendChild(txtDate);
		pnode.appendChild(txtDesc);
		linode.appendChild(h2node);
		linode.appendChild(h4node);
		linode.appendChild(pnode);							// append textnode to li nde
		document.getElementById('blogs').appendChild(linode);
    }
}