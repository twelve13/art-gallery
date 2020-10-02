//animate the art collector whenever mouse is down in the app section

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


//create the modals

const paintings = [
	{"image": "images/frame1.png",
		"title": "name of painting 1",
		"body": "<p>this is info about painting 1</p> <a href='http://google.com' target='_blank'>this is a link</a>"
	},
	{"image": "images/frame2.png",
		"title": "name of painting 2",
		"body": "info info about painting 2"
	},
	{"image": "images/frame3.png",
		"title": "name of painting 3",
		"body": "this is info about painting 3"
	},	
	{"image": "images/frame4.png",
		"title": "name of painting 4",
		"body": "4444"
	},
	{"image": "images/frame5.png",
		"title": "name of painting 5",
		"body": "this is info about painting 5"
	}
]

for(let i=0; i<paintings.length; i++){

var newModal = document.createElement("div");

newModal.innerHTML = `

<div class="modal fade" id="modal${i+1}-painting" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">${paintings[i].title}</h4>
        </div>
        <div class="modal-body">
          <img class="painting-enlarged" src=${paintings[i].image} />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

    <div class="modal fade" id="modal${i+1}-info" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">${paintings[i].title}</h4>
        </div>
        <div class="modal-body">
          ${paintings[i].body}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
`

document.getElementById("modals").appendChild(newModal);

}