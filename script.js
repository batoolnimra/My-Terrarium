 window.addEventListener('DOMContentLoaded', () =>{
 const music = document.getElementById("background-music");
  const toggleBtn = document.getElementById("toggle-music");

  // Music Autoplay on Click
  document.addEventListener("click", function playOnce() {
    music.play().catch(() => {});
    document.removeEventListener("click", playOnce);
  });

  // Mute/Unmute Music
  toggleBtn.addEventListener("click", () => {
    music.muted = !music.muted;
    toggleBtn.textContent = music.muted ? "🔇 Unmute Music" : "🔊 Mute Music";
  });

  // Make all plants draggable
  document.querySelectorAll(".plant").forEach((plant) => {
    plant.setAttribute("draggable", true);
    plant.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", e.target.src);
    });
  });

dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));

function dragElement(terrariumElement) {
	//set 4 positions for positioning on the screen
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	terrariumElement.onpointerdown = pointerDrag;

	function pointerDrag(e) {
		e.preventDefault();
		console.log(e);
		// get the initial mouse cursor position for pos3 and pos4
		pos3 = e.clientX;
		pos4 = e.clientY;
		// when the mouse moves, start the drag
		document.onpointermove = elementDrag;
		// when the mouse is lifted, stop the drag
		document.onpointerup = stopElementDrag;
	}

	function elementDrag(e) {
		// calculate the new cursor position
		// pos1 = where the Xmouse WAS - where it IS
		pos1 = pos3 - e.clientX;
		// pos2 = where the Ymouse WAS - where it IS
		pos2 = pos4 - e.clientY;
		//reset pos3 to current location of Xmouse
		pos3 = e.clientX;
		//reset pos4 to current location of Ymouse
		pos4 = e.clientY;
		console.log(pos1, pos2, pos3, pos4);
		// set the element's new position:
		terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
		terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
	}

	function stopElementDrag() {
		// stop calculating when mouse is released
		document.onpointerup = null;
		document.onpointermove = null;
	}
    window.addEventListener('DOMContentLoaded', () => {
  // Loop through each plant by ID
  for (let i = 1; i <= 14; i++) {
    const plant = document.getElementById(`plant${i}`);
    if (plant) dragElement(plant);
  }

  function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    elmnt.onpointerdown = pointerDrag;

    function pointerDrag(e) {
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;

      document.onpointermove = elementDrag;
      document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      // 💡 Make sure the element is absolutely positioned
      elmnt.style.position = 'absolute';
      elmnt.style.zIndex = 1000;
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    }

    function stopElementDrag() {
      document.onpointerup = null;
      document.onpointermove = null;
    }
  }
});

}
});
 