console.clear();

const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

function loginBtnFunction(e) {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if (element !== "slide-up") {
			parent.classList.add('slide-up');
		} else {
			signupBtn.parentNode.classList.add('slide-up');
			parent.classList.remove('slide-up');
		}
	});
}

function signupBtnFunction(e) {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if (element !== "slide-up") {
			parent.classList.add('slide-up');
		} else {
			loginBtn.parentNode.parentNode.classList.add('slide-up');
			parent.classList.remove('slide-up');
		}
	});
}


loginBtn.addEventListener('click', loginBtnFunction);
signupBtn.addEventListener('click', signupBtnFunction);
