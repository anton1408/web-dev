	var userLoginLink = document.querySelector(".login-btn");
	var userLoginModal = document.querySelector(".modal-login");
	var loginFocus = userLoginModal.querySelector("[name=login]");

	var userSearchLink = document.querySelector(".search-btn");
	var userSearchModal = document.querySelector(".modal-search");
	var searchFocus = userSearchModal.querySelector("[name=search]");

	var userFeedBackLink = document.querySelector(".feedBack-btn");
	var userFeedBackModal = document.querySelector(".modal-feedBack");
	var feedBackFocus = document.querySelector("[name=name]");
	var modalCloseBtn = document.querySelector(".modal-close");

	var modalOverlay = document.querySelector(".modal-overlay");


	userLoginLink.addEventListener("click", function (evt) {
		evt.preventDefault();
		userLoginModal.classList.add("modal-show");
		modalOverlay.classList.add("modal-show");
		loginFocus.focus();
	});
	modalOverlay.addEventListener("click", function (evt) {
		modalOverlay.classList.remove("modal-show");
		userLoginModal.classList.remove("modal-show");
	});

	userSearchLink.addEventListener("click", function (evt) {
		evt.preventDefault();
		userSearchModal.classList.add("modal-show");
		modalOverlay.classList.add("modal-show");
		searchFocus.focus();
	});
	modalOverlay.addEventListener("click", function (evt) {
		modalOverlay.classList.remove("modal-show");
		userSearchModal.classList.remove("modal-show");
	});

	userFeedBackLink.addEventListener("click", function (evt) {
		userFeedBackModal.classList.add("modal-show");
		modalOverlay.classList.add("modal-show");
		feedBackFocus.focus();
	});
	modalOverlay.addEventListener("click", function (evt) {
		modalOverlay.classList.remove("modal-show");
		userFeedBackModal.classList.remove("modal-show");
	});
		modalCloseBtn.addEventListener("click", function (evt) {
		modalOverlay.classList.remove("modal-show");
		userFeedBackModal.classList.remove("modal-show");
	});