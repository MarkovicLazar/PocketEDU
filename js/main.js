function hide(x) {
	x.classList.add('hide');
	setTimeout(() => {
		x.style.display = 'none';
		x.style.opacity = '100%';
		x.classList.remove('hide');
	}, 900);
}
function show(x) {
	x.style.display = 'block';
	x.classList.add('show');
	setTimeout(() => {
		x.style.opacity = '100%';
		x.classList.remove('show');
	}, 900);
}
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
	const cookies = document.getElementById('cookies');
	const cookieSettings = document.getElementById('cookie-settings');
	const cookiesBackground = document.getElementById('cookies-background');
	startButton.onmouseenter = () => {
		startBackground.style.width = '45px';
	}
	startButton.onmouseleave = () => {
		startBackground.style.width = '190px';
	}
	blurBackground.onclick = (event) => {
		if (signInShown && !signIn.contains(event.target)) {
			blurBackground.classList.add('hide');
			setTimeout(() => {
				blurBackground.style.display = 'none';
				signIn.style.display = 'none';
				blurBackground.style.opacity = '100%';
				blurBackground.classList.remove('hide');
				body.classList.remove('stop-scroll');
				signInShown = false;
			}, 900);
		}
		else if (loginShown && !login.contains(event.target)) {
			blurBackground.classList.add('hide');
			setTimeout(() => {
				blurBackground.style.opacity = '100%';
				blurBackground.style.display = 'none';
				blurBackground.classList.remove('hide');
				body.classList.remove('stop-scroll');
				login.style.display = 'none';
				loginShown = false;
			}, 900);
		}
	}
	startButton.onclick = () => {
		if(!signInShown) {
			signIn.style.display = 'block';
			blurBackground.style.display = 'block';
			blurBackground.classList.add('show');
			body.classList.add('stop-scroll');
			setTimeout(() => {
				signInShown = true;
				blurBackground.style.opacity = '100%';
				blurBackground.classList.remove('show');
			}, 900);
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
			body.classList.add('stop-scroll');
			setTimeout(() => {
				loginShown = true;
				blurBackground.style.opacity = '100%';
				blurBackground.classList.remove('show');
			}, 900);
		}
	}
	document.getElementById('create-account').onclick = () => {
		login.classList.add('hide');
		setTimeout(() => {
			login.style.opacity = '0%';
			login.style.display = 'none';
			login.classList.remove('hide');
			loginShown = false;
		}, 900);
		signIn.style.display = 'block';
		signIn.classList.add('show');
		setTimeout(() => {
			signInShown = true;
			signIn.style.opacity = '100%';
			signIn.classList.remove('show');
		}, 900);
	}
	document.getElementById('already-have-account').onclick = () => {
		signIn.classList.add('hide');
		setTimeout(() => {
			signIn.style.opacity = '0%';
			signIn.style.display = 'none';
			signIn.classList.remove('hide');
			signInShown = false;
		}, 900);
		login.style.display = 'block';
		login.classList.add('show');
		setTimeout(() => {
			loginShown = true;
			login.style.opacity = '100%';
			login.classList.remove('show');
		}, 900);
	}
	document.getElementById('accept-cookies').onclick = () => {
		cookiesBackground.classList.add('hide');
		setTimeout(() => {
			cookiesBackground.style.display = 'none';
			cookiesBackground.classList.remove('hide');
		}, 900);
	}
	document.getElementById('cookie-settings-button').onclick = () => {
		cookieSettings.style.display = 'block';
		cookieSettings.classList.add('show');
		cookies.classList.add('hide');
		body.classList.add('stop-scroll');
		setTimeout(() => {
			cookies.style.display = 'none';
			cookies.classList.remove('hide');
		}, 900);
	}
	document.getElementById('allow-all').onclick = () => {
		hide(cookiesBackground);
		setTimeout(() => body.classList.remove('stop-scroll'), 900);
	}
}


