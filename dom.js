const toggleList = document.getElementById('toggleList');
		const listDiv = document.querySelector('.list');
		const input = document.querySelector('input');
		const p = document.querySelector('p.description');
		const button = document.querySelector('button.description');
		const listUl = document.querySelector('ul');
		const lis = listUl.children;
		const addItemInput = document.querySelector('input.addItemInput');
		const addItemButton = document.querySelector('button.addItemButton');
		// add the 3 different buttons
		function attachListItemButton(li){
				let but = document.createElement('button');
				but.textContent = 'remove';
				but.className = 'remove';
				li.appendChild(but);
				let down = document.createElement('button');
				down.textContent = 'down';
				down.className = 'down';
				li.appendChild(down);
				let up = document.createElement('button');
				up.textContent = 'up';
				up.className = 'up';
				li.appendChild(up);
		}
		// add button on existing list
		for(let i = 0; i<lis.length ; i++){
			attachListItemButton(lis[i]);
		}

		// adding event listener for different nodes up , down and remove
		listUl.addEventListener('click',(event)=>{
			if(event.target.tagName == 'BUTTON'){
				if(event.target.className == 'remove'){
					let li = event.target.parentNode;
					let ul = li.parentNode;
					ul.removeChild(li);
				}
				if(event.target.className == 'up'){
					let li = event.target.parentNode;
					let prevLi = li.previousElementSibling;
					let ul = li.parentNode;
					if(prevLi){
					ul.insertBefore(li,prevLi);
				}
			}}
			if(event.target.className == 'down'){
				let li = event.target.parentNode;
					let nextLi = li.nextElementSibling;
					let nextnextLi = nextLi.nextElementSibling;
					let ul = li.parentNode;
					if(nextLi){
					ul.insertBefore(li,nextnextLi);
					
		}}
		} );

		// listDiv.addEventListener('mouseout',(event)=>{
			// 	if(event.target.tagName == 'LI'){
			// 	event.target.textContent = event.target.textContent.toLowerCase();
			// 	}
		// });

		// show n hide list div
		toggleList.addEventListener('click',()=>{
			if(listDiv.style.display == 'none'){
				toggleList.textContent = 'Hide list';
				listDiv.style.display = 'block';
			}else{
				toggleList.textContent = 'Show list';
			listDiv.style.display='none';
		}
		});

		// change inner html content
		button.addEventListener('click',()=> {
			p.innerHTML = input.value + ':';
		});
			
			
		// adding new items in list 
		addItemButton.addEventListener('click',()=> {
			// select the parent node of list items li
			let ul = document.getElementsByTagName('ul')[0];
			// create new list
			let li = document.createElement('li');
			// insert content from input
			li.textContent = addItemInput.value;
			// append means add within the list as it will add at end of the list
			ul.appendChild(li);
			// attach buttons when new item is entered
			attachListItemButton(li);
			// clear the input area
			addItemInput.value= '';
		})