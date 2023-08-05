window.onload = () => {
	const startButton = document.getElementById('start');
	const startBackground = document.getElementById('start-pozadina');
	const signIn = document.getElementById('sign-in');
	const blurBackground = document.getElementById('blur-background');
	let signInShown = false;
	let loginShown = false;
	const joinButton = document.getElementById('join');
	const body = document.body;
	const loginButton = document.getElementById('nav-login');
	const login = document.getElementById('login');
	const forgotPassword = document.getElementById('forgot-password');
	startButton.onmouseenter = () => {
		startBackground.style.width = '45px';
	}
	startButton.onmouseleave = () => {
		startBackground.style.width = '190px';
	}
	blurBackground.onclick = (event) => {
		if (signInShown && !signIn.contains(event.target)) {
			blurBackground.classList.add('hide');
			signIn.classList.add('hide');
			body.classList.remove('stop-scroll');
			setTimeout(() => {
				signIn.style.opacity = '0%';
				blurBackground.style.opacity = '100%';
				signIn.style.display = 'none';
				blurBackground.style.display = 'none';
				blurBackground.classList.remove('hide');
				signIn.classList.remove('hide');
				signInShown = false;
			}, 1000);
		}
		else if (loginShown && !login.contains(event.target)) {
			blurBackground.classList.add('hide');
			login.classList.add('hide');
			body.classList.remove('stop-scroll');
			setTimeout(() => {
				login.style.opacity = '0%';
				blurBackground.style.opacity = '100%';
				login.style.display = 'none';
				blurBackground.style.display = 'none';
				blurBackground.classList.remove('hide');
				login.classList.remove('hide');
				loginShown = false;
			}, 1000);
		}
	}
	startButton.onclick = () => {
		if(!signInShown) {
			signIn.style.display = 'block';
			blurBackground.style.display = 'block';
			blurBackground.classList.add('show');
			signIn.classList.add('show');
			body.classList.add('stop-scroll');
			setTimeout(() => {
				signInShown = true;
				signIn.style.opacity = '100%';
				blurBackground.style.opacity = '100%';
				signIn.classList.remove('show');
				blurBackground.classList.remove('show');
			}, 1000);
		}
	}
	joinButton.onclick = () => {
		if(document.querySelector("select").value === "") {
			countryError.style.display = "block";
		}
	}
	loginButton.onclick = () => {
		if(!loginShown) {
			login.style.display = 'block';
			blurBackground.style.display = 'block';
			blurBackground.classList.add('show');
			login.classList.add('show');
			body.classList.add('stop-scroll');
			setTimeout(() => {
				loginShown = true;
				login.style.opacity = '100%';
				blurBackground.style.opacity = '100%';
				login.classList.remove('show');
				blurBackground.classList.remove('show');
			}, 1000);
		}
	}
	document.getElementById('create-account').onclick = () => {
		login.classList.add('hide');
		setTimeout(() => {
			login.style.opacity = '0%';
			login.style.display = 'none';
			login.classList.remove('hide');
			loginShown = false;
		}, 1000);
		signIn.style.display = 'block';
		signIn.classList.add('show');
		setTimeout(() => {
			signInShown = true;
			signIn.style.opacity = '100%';
			signIn.classList.remove('show');
		}, 1000);
	}
	document.getElementById('already-have-account').onclick = () => {

	}
}


