console.log("JS file connected");




/*function darkMode() {
    var bg = document.body;

    bg.classList.toggle("dark-mode");
}

const button = document.getElementById('dark-mode');
        button.addEventListener('click', (event) => {
            if (button.innerHTML === "Dark Mode") {
                document.documentElement.style.setProperty('--text', '#000');
                document.documentElement.style.setProperty('--bg', '#eeeeee');
                button.innerHTML = "Light Mode";
            } else {
                document.documentElement.style.setProperty('--text', '#1e2939');
                document.documentElement.style.setProperty('--bg', '#F1F9fc');
                button.innerHTML = "Dark Mode";
            }
        });*/


/*drag and drop function example below taken from 
w3schools https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_draganddrop

function allowDrop(event) {
  ev.preventDefault();
}
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

site references for dnd
https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
https://interactjs.io/ (more complex but includes html css js)
*/