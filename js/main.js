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
	const icons = document.querySelectorAll('#carousel img');
	icons.forEach(icon => {icon.style.transform = 'scale(1.1)'; icon.classList.add('smooth-zoom');});
	document.getElementById('carousel').addEventListener('mousemove', function(e) {
		const x = e.clientX;
		icons.forEach(icon => {
			const iconRect = icon.getBoundingClientRect();
			const iconCenter = iconRect.left + iconRect.width / 2;
			const distance = Math.abs(x - iconCenter);
			const scale = 2 - Math.min(distance / 500, 0.9);
			icon.style.transform = `scale(${scale})`;
		});
	});
	document.getElementById('carousel').addEventListener('mouseenter', () => {
		icons.forEach(icon => {
			setTimeout(() => {icon.classList.remove('smooth-zoom')}, 300);
		});
	});
	document.getElementById('carousel').addEventListener('mouseleave', () => {
		icons.forEach(icon => {
			icon.classList.add('smooth-zoom');
			icon.style.transform = 'scale(1.1)';
		});
	});
	startButton.onmouseenter = () => {
		startBackground.style.width = '45px';
	}
	startButton.onmouseleave = () => {
		startBackground.style.width = '190px';
	}
	blurBackground.onclick = (event) => {
		if (signInShown && !signIn.contains(event.target)) {
			hide(blurBackground);
			hide(signIn);
			setTimeout(() => {
				body.classList.remove('stop-scroll');
				signInShown = false;
			}, 900);
		}
		else if (loginShown && !login.contains(event.target)) {
			hide(blurBackground);
			hide(login);
			setTimeout(() => {
				body.classList.remove('stop-scroll');
				loginShown = false;
			}, 900);
		}
	}
	startButton.onclick = () => {
		if(!signInShown) {
			show(signIn);
			show(blurBackground);
			body.classList.add('stop-scroll');
			setTimeout(() => {
				signInShown = true;
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
			show(login);
			show(blurBackground);
			body.classList.add('stop-scroll');
			setTimeout(() => {
				loginShown = true;
			}, 900);
		}
	}
	document.getElementById('create-account').onclick = () => {
		hide(login);
		setTimeout(() => {
			loginShown = false;
		}, 900);
		show(signIn);
		setTimeout(() => {
			signInShown = true;
		}, 900);
	}
	document.getElementById('already-have-account').onclick = () => {
		hide(signIn);
		setTimeout(() => {
			signInShown = false;
		}, 900);
		show(login);
		blurBackground.scrollTo({top: 0, behavior: "smooth"});
		setTimeout(() => {
			loginShown = true;
		}, 900);
	}
	document.getElementById('accept-cookies').onclick = () => {
		hide(cookiesBackground);
	}
	document.getElementById('cookie-settings-button').onclick = () => {
		show(cookieSettings);
		hide(cookies);
		body.classList.add('stop-scroll');
	}
	document.getElementById('allow-all').onclick = () => {
		hide(cookiesBackground);
		setTimeout(() => body.classList.remove('stop-scroll'), 900);
	}
}


