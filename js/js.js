/**
 * file: js/js.js
 */
console.log("Hi from js/js.js")

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}

/*inject HTML into footer*/

const myFooter = `
<ul id="footer">
    
    <li style="margin-right: 20px;"><small>Opening Hours:<br>
        Mon - Fri 09:00 - 18:00<br>
        Sat - Sun 10:00 - 16:00</small></li>
    <li><br><small>Frederiksgade 74, st th<br>
        8000 Aarhus C</small></li>
    <li><br><br><small>© Copyright, 2022</small></li>
    
</ul>
`;

const footerElement = document.getElementById("my-footer");

footerElement.innerHTML = myFooter;


/* header*/


/*Gallery and shop*/

const filterButtons = document.getElementsByClassName('filter-button')

for (let i = 0; i < filterButtons.length; i++) {
    const button = filterButtons[i];

    button.addEventListener('click', (e) => {
        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove('active')
        }

        e.target.classList.add('active')
    });
}

/*Menu*/

/*Menu tabs*/
function openMenu(evt, subMenu) {
    var i, tabcontent, breakfast;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");

    }

    document.getElementById(subMenu).style.display = "block";
    evt.currrentTarget.className += "active";
}

document.getElementById("defaultOpen").click();


