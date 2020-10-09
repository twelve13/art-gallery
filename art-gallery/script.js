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
	{
		"image": "images/utilities.png",
		"title": "Utilities",
		"body": "<p>Medium: Pure CSS</p> <p>3D Utility cards for the Codepen Monoopoly challenge.</p><a href='https://codepen.io/twelve13/full/xxxWGao' target='_blank'>See it in Codepen</a>"
	},
	{
		"image": "images/milk-carton.png",
		"title": "Milk Carton",
		"body": "<p>Medium: Pure CSS</p> <p>Milk carton illustration based off a mousepad I found in Taiwan.</p><a href='https://codepen.io/twelve13/full/ewKEXp' target='_blank'>See it in Codepen</a>"
	},	
	{
		"image": "images/imaginarium.png",
		"title": "Imaginarium",
		"body": "<p>Medium: Pure CSS</p> <p>Illustration inspired by <a href='https://i.pinimg.com/736x/57/de/35/57de3579bc5a28f3a2ef3d40c45138a8--illustration-art-terrarium-illustration.jpg' target='_blank'>an image I found online</a>.  </p><a href='https://codepen.io/twelve13/full/ZdaapG' target='_blank'>See it in Codepen</a>"
	},
	{
		"image": "images/heisenberg.png",
		"title": "Heisenberg",
		"body": "<p>Medium: Zdog pseudo-3D engine</p> <p>Experimentation with Zdog, inspired by Breaking Bad.</p><a href='https://codepen.io/twelve13/full/zVVPeM' target='_blank'>See it in Codepen</a>"
	},
	{
		"image": "images/moaning-myrtle.png",
		"title": "Do Your Thing, Moaning Myrtle",
		"body": "<p>Medium: Pure CSS</p> <p>Inspired by Harry Potter, <a href='https://www.pinterest.com/pin/750482725379966165/' target='_blank'>kirakiradoodles</a>, and water efficient dual-flush toilets everywhere.</p><a href='https://codepen.io/twelve13/full/wvvjGRJ' target='_blank'>See it in action in Codepen</a>"
	},
	{
		"image": "images/bobs-burgers.png",
		"title": "Bob's Burgers",
		"body": "<p>Medium: Pure CSS</p> <p>Pixel art inspired by closing credits of the episode 'Burgerboss'.</p><a href='https://codepen.io/twelve13/full/VJgxEV' target='_blank'>See it in Codepen</a>"
	},
	{
		"image": "images/travelling-cart.png",
		"title": "Travelling Cart",
		"body": "<p>Medium: Three.js</p> <p>3D Travelling Cart from Stardew Valley.</p><a href='https://codepen.io/twelve13/full/BaogXvv' target='_blank'>See it in Codepen</a>"
	},
	{
		"image": "images/roomba-cat.png",
		"title": "Captain of the USS Roomba",
		"body": "<p>Medium: CSS, GSAP</p> <p>Experimentation with GSAP, inspired by cat goals.</p><a href='https://codepen.io/twelve13/full/PoZWYKy' target='_blank'>See it in action in Codepen</a>"
	},
	{"image": "images/snowglobe.png",
		"title": "Snowglobe",
		"body": "<p>Medium: Pure CSS</p> <p>3D Utility cards for the Codepen Monoopoly challenge.</p><a href='https://codepen.io/twelve13/full/xxxWGao' target='_blank'>See it in Codepen</a>"
	},	
	{
		"image": "images/marauders-map.png",
		"title": "Marauder's Map",
		"body": "<p>Medium: Pure CSS</p> <p>3D Utility cards for the Codepen Monoopoly challenge.</p><a href='https://codepen.io/twelve13/full/xxxWGao' target='_blank'>See it in Codepen</a>"
	},
	{
		"image": "images/stamp.png",
		"title": "Scenic Stamp",
		"body": "<p>Medium: Pure CSS</p> <p>3D Utility cards for the Codepen Monoopoly challenge.</p><a href='https://codepen.io/twelve13/full/xxxWGao' target='_blank'>See it in Codepen</a>"
	},
	{
		"image": "images/pizza-cat.png",
		"title": "Pizza Cat",
		"body": "<p>Medium: Pure CSS</p> <p>3D Utility cards for the Codepen Monoopoly challenge.</p><a href='https://codepen.io/twelve13/full/xxxWGao' target='_blank'>See it in Codepen</a>"
	},
	{
		"image": "images/babycakes.png",
		"title": "Babycakes",
		"body": "<p>Medium: Pure CSS</p> <p>3D Utility cards for the Codepen Monoopoly challenge.</p><a href='https://codepen.io/twelve13/full/xxxWGao' target='_blank'>See it in Codepen</a>"
	},
	{
		"image": "images/beanbody.png",
		"title": "Mrs. Beanbody",
		"body": "<p>Medium: Pure CSS</p> <p>3D Utility cards for the Codepen Monoopoly challenge.</p><a href='https://codepen.io/twelve13/full/xxxWGao' target='_blank'>See it in Codepen</a>"
	},
	{
		"image": "images/donut.png",
		"title": "Donut",
		"body": "<p>Medium: Pure CSS</p> <p>3D Utility cards for the Codepen Monoopoly challenge.</p><a href='https://codepen.io/twelve13/full/xxxWGao' target='_blank'>See it in Codepen</a>"
	},
	{
		"image": "images/hellcat.jpeg",
		"title": "Cat",
		"body": "<p>Medium: Pure CSS</p> <p>3D Utility cards for the Codepen Monoopoly challenge.</p><a href='https://codepen.io/twelve13/full/xxxWGao' target='_blank'>See it in Codepen</a>"
	},
	{
		"image": "images/hugzilla.jpeg",
		"title": "Hugs",
		"body": "<p>Medium: Pure CSS</p> <p>3D Utility cards for the Codepen Monoopoly challenge.</p><a href='https://codepen.io/twelve13/full/xxxWGao' target='_blank'>See it in Codepen</a>"
	}
]

for(let i=0; i<paintings.length; i++){

var newItem = document.createElement("li");
newItem.classList.add("item");

newItem.innerHTML = `
<div class="painting" id="painting${i+1}" data-toggle="modal" data-target="#modal${i+1}-painting">
    <div class="painting-content"><img src=${paintings[i].image} alt=${paintings[i].title}/></div>
</div>
<div class="item-info" data-toggle="modal" data-target="#modal${i+1}-info">${paintings[i].title}</div>
`

document.getElementById("paintings-list").appendChild(newItem);

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