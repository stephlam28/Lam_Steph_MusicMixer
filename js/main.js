console.log("JS file connected");

/* SOUNDTRACK */
// Variables that store the current drop zone being played dot
let dotOne = document.getElementsByClassName('dot1');
let dotTwo = document.getElementsByClassName('dot2');
let dotThree = document.getElementsByClassName('dot3');
let dotFour = document.getElementsByClassName('dot4');
let dotFive = document.getElementsByClassName('dot5');

// Gets all the mute buttons
let muteButtons = document.getElementsByClassName('mute');

// Variable to store the audio object and array of audio tags
let audio = new Audio();
let audioArray = [];
let dropZoneDenoteArray = [];

// Variables to store whether a specific drop zone is muted/unmuted
let dropZoneOneMute = false;
let dropZoneTwoMute = false;
let dropZoneThreeMute = false;
let dropZoneFourMute = false;
let dropZoneFiveMute = false;

// Variable to hold the current track number in the array of audio tags
let currentTrackNumber = 0;

// Function that handles the changing of beats
const switchTrack = (boolean) => {
  
  // If boolean is true, that means a new beat has been dropped, thus the current track number is reset to 0 to start over from the leftmost beat
  // Also pauses the audio in preparations to start back at the leftmost beat
  if (boolean === true) {
    currentTrackNumber = 0
    audio.pause();
  }

  // If the length of the audio array is not equal to 0, that means there has been a beat dropped
  if (audioArray.length !== 0) {
    // If the current track number is equal to the audio array length, that means the last beat has been reached, thus the current track number is
    // set back to 0 to restart back at the left most beat
    if (currentTrackNumber === audioArray.length) {
      currentTrackNumber = 0;
    }

    // Sets the src of the audio object equal to the current beat
    // Since the audio array stores audio tags, the src attribute of the current audio tag is retrieved which returns the link to the audio file
    audio.src = audioArray[currentTrackNumber].getAttribute('src');

    // Checks if the next drop zone to be played is muted
    if (dropZoneDenoteArray[currentTrackNumber] === 0 && dropZoneOneMute === true) {
      audio.muted = true;
    }
    else if (dropZoneDenoteArray[currentTrackNumber] === 1 && dropZoneTwoMute === true) {
      audio.muted = true;
    }
    else if (dropZoneDenoteArray[currentTrackNumber] === 2 && dropZoneThreeMute === true) {
      audio.muted = true;
    }
    else if (dropZoneDenoteArray[currentTrackNumber] === 3 && dropZoneFourMute === true) {
      audio.muted = true;
    }
    else if (dropZoneDenoteArray[currentTrackNumber] === 4 && dropZoneFiveMute === true) {
      audio.muted = true;
    }
    else {
      audio.muted = false;
    }

    audio.currentTime = 0;
    audio.play();


    // Checks which drop zone is currently being played and fills out a little dot to let the user know which drop zone is being played
    if (dropZoneDenoteArray[currentTrackNumber] === 0) {
      dotOne[0].style.opacity = '1';
      dotTwo[0].style.opacity = '0.3';
      dotThree[0].style.opacity = '0.3';
      dotFour[0].style.opacity = '0.3';
      dotFive[0].style.opacity = '0.3';
    }
    else if (dropZoneDenoteArray[currentTrackNumber] === 1) {
      dotOne[0].style.opacity = '0.3';
      dotTwo[0].style.opacity = '1';
      dotThree[0].style.opacity = '0.3';
      dotFour[0].style.opacity = '0.3';
      dotFive[0].style.opacity = '0.3';
    }
    else if (dropZoneDenoteArray[currentTrackNumber] === 2) {
      dotOne[0].style.opacity = '0.3';
      dotTwo[0].style.opacity = '0.3';
      dotThree[0].style.opacity = '1';
      dotFour[0].style.opacity = '0.3';
      dotFive[0].style.opacity = '0.3';
    }
    else if (dropZoneDenoteArray[currentTrackNumber] === 3) {
      dotOne[0].style.opacity = '0.3';
      dotTwo[0].style.opacity = '0.3';
      dotThree[0].style.opacity = '0.3';
      dotFour[0].style.opacity = '1';
      dotFive[0].style.opacity = '0.3';
    }
    else if (dropZoneDenoteArray[currentTrackNumber] === 4) {
      dotOne[0].style.opacity = '0.3';
      dotTwo[0].style.opacity = '0.3';
      dotThree[0].style.opacity = '0.3';
      dotFour[0].style.opacity = '0.3';
      dotFive[0].style.opacity = '1';
    }

    // Increments the current track number to get to the next beat when switchTrack is recalled
    currentTrackNumber++;
  }
}

// Adds an event listener to the audio object, which calls switchTrack once the current beat ends
audio.addEventListener('ended', switchTrack);

function playAudio() {
  console.log("playing audio");
  audio.play();
}

function pauseAudio() {
  console.log("paused audio");
  audio.pause();
}

function enableMute(number) { 
  // Checks if the current drop zone being played is the drop zone being muted
  if (dropZoneDenoteArray[currentTrackNumber-1] === number) {
    audio.muted = true;
  }

  // Marks off the drop zone that is to be muted and changes that drop zones mute button to dark grey
  if (number === 0) {
    muteButtons[0].style.backgroundColor = '#BDBDBD';
    dropZoneOneMute = true;
  }
  if (number === 1) {
    muteButtons[1].style.backgroundColor = '#BDBDBD';
    dropZoneTwoMute = true;
  }
  if (number === 2) {
    muteButtons[2].style.backgroundColor = '#BDBDBD';
    dropZoneThreeMute = true;
  }
  if (number === 3) {
    muteButtons[3].style.backgroundColor = '#BDBDBD';
    dropZoneFourMute = true;
  }
  if (number === 4) {
    muteButtons[4].style.backgroundColor = '#BDBDBD';
    dropZoneFiveMute = true;
  }

  console.log("muted audio");
} 

function disableMute(number) { 
  // Checks if the current drop zone being played is the drop zone to be unmuted
  if (dropZoneDenoteArray[currentTrackNumber-1] === number) {
    audio.muted = false;
  }

  // Marks off the drop zone that is to be unmuted and changes that drop zones mute button back to transparent background
  if (number === 0) {
    muteButtons[0].style.backgroundColor = 'transparent';
    dropZoneOneMute = false;
  }
  if (number === 1) {
    muteButtons[1].style.backgroundColor = 'transparent';
    dropZoneTwoMute = false;
  }
  if (number === 2) {
    muteButtons[2].style.backgroundColor = 'transparent';
    dropZoneThreeMute = false;
  }
  if (number === 3) {
    muteButtons[3].style.backgroundColor = 'transparent';
    dropZoneFourMute = false;
  }
  if (number === 4) {
    muteButtons[4].style.backgroundColor = 'transparent';
    dropZoneFiveMute = false;
  }

  console.log("unmuted audio");
}

/*DRAG AND DROP*/
const puzzleBoard = document.querySelector(".LeftDiv"),
  Beats = document.querySelectorAll(".Beats"),
  BeatsBoard = document.querySelector(".Pieces"),
  dropZones = document.querySelectorAll(".Item"),
  resetButton = document.getElementById("resetBut");

let draggedPiece;

 function handleStartDrag() {
  draggedPiece = this;
}

function handleDragOver(e) {
  e.preventDefault();
  console.log("dragged over me");
}

function handleDrop(e) {
  e.preventDefault();
  console.log("dropped something on me");

  if(!this.firstChild) {
      this.appendChild(draggedPiece);
      // Every time a new piece is dropped into a drop zone, gets all tags with the classname 'Item'. 'Item' tags are the dropzones themselves, thus all dropped
      // beats are retrieved
      // Also clears the audio array to ensure the audio array and drop zone denote array is up to date with the current dropped beats
      let mixerContainer = document.getElementsByClassName('Item');
      audioArray = [];
      dropZoneDenoteArray = [];

      // Loops through the retrieved dropzones
      for (let i = 0; i < mixerContainer.length; i++) {
        // Checks to ensure the dropzone has a child - if it does that means there is a beat dropped into it, if not there is no beat in that
        if (mixerContainer[i].hasChildNodes()) {
          // Pushes the audio tag of the current drop zone onto the audio array (audio tag stored at mixerContainer[i].childNodes[0].childNodes[3])
          audioArray.push(mixerContainer[i].childNodes[0].childNodes[3]);

          // Pushes the drop zone of the current audio tag to drop zone denote array to reference in the future
          // Drop zone just denotes which beat in the audio array corresponds to which drop zone
          // Example, if one beat is dropped into drop zone 3, audioArray[0] will be that beat and dropZoneDenoteArray[0] denotes that beat
          // is located at drop zone 3
          dropZoneDenoteArray.push(i);
        }
      }
    }
     // Calls the switchTrack function with the boolean set to true to denote that a new beat has been dropped
    switchTrack(true);
  }

function handleReset(e) {
  e.preventDefault();
  
  dropZones.forEach(zone => {
      if (zone.firstElementChild) {
          puzzleBoard.appendChild(zone.firstElementChild);
      }
  });
    // On reset, clears the audio array and pauses any audio currently being played
    audio.pause();
    audioArray = [];
}

Beats.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));
dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));
resetButton.addEventListener("click", handleReset);

/* VOLUME SLIDER */
let volume = document.querySelector(".VolumeSlider");
  console.log("volume has been changed");
  volume.addEventListener("change", function(e) {
  audio.volume = e.currentTarget.value / 100;
})