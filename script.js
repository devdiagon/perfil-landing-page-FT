const contentBoxes = document.querySelectorAll(".content-wrapper");
const buttons = document.querySelectorAll(".nav-btn");

contentBoxes.forEach(contentBox => {
	if(contentBox.getAttribute('info-type') !== "pasatiempos"){
		contentBox.style.display = 'none';
	}
});

const changeContent = (event) => {
	contentBoxes.forEach(contentBox => {
		contentBox.style.display = 'none';
	});

	const infoType = event.target.getAttribute('info-type');
  const contentBox = document.querySelector(`.content-wrapper[info-type="${infoType}"]`);
  if (contentBox) {
    contentBox.style.display = 'block';
  }
}

buttons.forEach((button) => {
	button.addEventListener("click", changeContent);
});