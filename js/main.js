window.onload = () => {
	const startButton = document.getElementById('start');
	const containter = document.getElementById('container');
	const startBackground = document.getElementById('start-pozadina');
	const signIn = document.getElementById('sign-in');
	const signInBackground = document.getElementById('sign-in-pozadina');
	let signInShown = false;
	const joinButton = document.getElementById('join');
	const body = document.body;
	startButton.onmouseenter = () => {
		startBackground.style.width = '45px';
	}
	startButton.onmouseleave = () => {
		startBackground.style.width = '190px';
	}
	signInBackground.onclick = (event) => {
		if (signInShown && !signIn.contains(event.target)) {
			signInBackground.classList.add('hide');
			signIn.classList.add('hide');
			body.classList.remove('stop-scroll');
			setTimeout(() => {
				signIn.style.opacity = '0%';
				signInBackground.style.opacity = '100%';
				signIn.style.display = 'none';
				signInBackground.style.display = 'none';
				signInBackground.classList.remove('hide');
				signIn.classList.remove('hide');
				signInShown = false;
			}, 1000);
		}
	}
	startButton.onclick = () => {
		if(!signInShown) {
			signIn.style.display = 'block';
			signInBackground.style.display = 'block';
			signInBackground.classList.add('show');
			signIn.classList.add('show');
			body.classList.add('stop-scroll');
			setTimeout(() => {
				signInShown = true;
				signIn.style.opacity = '100%';
				signInBackground.style.opacity = '100%';
				signIn.classList.remove('show');
				signInBackground.classList.remove('show');
			}, 1000);
		}
	}
	joinButton.onclick = () => {
		if(document.querySelector("select").value === "") {
			countryError.style.display = "block";
		}
	}

}


