const signUpButton = document.getElementById('signUpp');
const signInButton = document.getElementById('signInn');
const container = document.getElementById('containerr');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

