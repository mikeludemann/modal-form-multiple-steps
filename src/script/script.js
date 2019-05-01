var prev = document.getElementById("prevBtn");
var next = document.getElementById("nextBtn");

var getCurrentStep = 0;
showCurrentStep(getCurrentStep);

function showCurrentStep(n) {

	var tabs = document.getElementsByClassName("tab");
	tabs[n].style.display = "block";

	if (n == 0) {

		prev.style.display = "none";

	} else {

		prev.style.display = "block";

	}

	if (n == (tabs.length - 1)) {

		next.innerHTML = "Submit";

	} else {

		next.innerHTML = "Next";

	}

	indicatorStep(n)
}

function goToStep(n) {

	var tabs = document.getElementsByClassName("tab");

	if (n == 1 && !formValidation()) {

		return false;

	}

	tabs[getCurrentStep].style.display = "none";

	getCurrentStep = getCurrentStep + n;

	if (getCurrentStep >= tabs.length) {

		document.getElementById("contactForm").submit();

		return false;

	}

	showCurrentStep(getCurrentStep);
}

function formValidation() {

	var tabs, 
	inputs,
	labels,
	i, 
	valid = true;

	tabs = document.getElementsByClassName("tab");
	inputs = tabs[getCurrentStep].getElementsByTagName("input");
	labels = tabs[getCurrentStep].getElementsByTagName("label");

	for (i = 0; i < inputs.length; i++) {

		if (inputs[i].value == "") {

			inputs[i].className += " invalid";
			labels[i].className += " invalid";

			valid = false;

		} else {

			inputs[i].classList.remove("invalid");
			labels[i].classList.remove("invalid");

		}

	}

	if (valid) {

		document.getElementsByClassName("step")[getCurrentStep].classList.add("finish");

	}

	if(document.getElementsByClassName("step")[0].classList.contains('finish')){

		document.getElementsByClassName("step--line")[0].classList.add("w33");

	} if(document.getElementsByClassName("step")[0].classList.contains('finish') && document.getElementsByClassName("step")[1].classList.contains('finish')){

		document.getElementsByClassName("step--line")[0].classList.remove("w33");
		document.getElementsByClassName("step--line")[0].classList.add("w66");

	} if(document.getElementsByClassName("step")[2].classList.contains('finish')){

		document.getElementsByClassName("step--line")[0].classList.remove("w66");
		document.getElementsByClassName("step--line")[0].classList.add("w100");

	}

	return valid;

}

function indicatorStep(n) {

	var i, 
		steps = document.getElementsByClassName("step");

	for (i = 0; i < steps.length; i++) {

		steps[i].className = steps[i].className.replace(" active", "");

	}

	steps[n].className += " active";

}

prev.addEventListener("click", function(){

	goToStep(-1);

});

next.addEventListener("click", function(){

	goToStep(1);

});

var modal = document.getElementsByClassName("modal--container")[0];
var close = document.getElementsByClassName("modal--container--close")[0];

close.addEventListener("click", function(){
	modal.style.display = "none";
});

var dw = document || window;

dw.onclick = function (event) {

	if (event.target == modal) {

		modal.style.display = "none";

	}

}
