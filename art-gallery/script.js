const app = document.querySelector(".app");

function debounce(func, wait = 10, immediate = true) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
};

const moveArtCollector = function() { 
	document.querySelector("#art-collector-body").classList.add("active");
	document.querySelector("#art-collector-hair").classList.add("active");
}

const stopArtCollector = function() { 
	document.querySelector("#art-collector-body").classList.remove("active");
	document.querySelector("#art-collector-hair").classList.remove("active");
}

app.addEventListener("mousedown", debounce(moveArtCollector));
app.addEventListener("mouseup", debounce(stopArtCollector));