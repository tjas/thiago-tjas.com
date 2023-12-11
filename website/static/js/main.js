//============================================================================================
// Stable
//============================================================================================

/* Constants and variables */

const pathIconBurger = '/static/img/svg/burger-menu.svg';
const pathIconClose = '/static/img/svg/close.svg';
const menu = document.getElementById('menu');
const menuIcon = document.querySelector(".menu-icon");

/** Navigation */

let back = true;

/** Threshold to elemnt size.
 */
const threshold = 51;

/** Keep scroll position.
 */
let lastKnownScrollPosition = 0;

/** Custom thumb definition.
 */
const thumb = document.getElementById("scrollbar-thumb");



/* Utils */

/** toggle element (Element) class value.
 * @param {Element} element element to have class value toggle.
 * @param {string} value class value to be toggle.
 */
function toggleElementClass(element, value){
    element.classList.toggle(value);
};
/** Togle Elements (HTMLElement) visibility. 
 * You can get an Element in this way: document.getElementById("myDIV").
 * @param {HTMLElement} element the element to be hidden or shown.
 */
function toggleVisibility(element) {
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
};
function setVisible(element){
    if (element.style.display === "none") {
        element.style.display = "block";
    };
};
function setInvisible(element){
    if (element.style.display !== "none") {
        element.style.display = "none";
    };
};
/** Dispatch an event from an specific element (Element).
 * @param {Element} element the element from where the event will be dispatched.
 * @param {string} eventtype the event string to be dispatched.
 * @param {Event} customevent (optional) an specific event (Event) to be dispatched.
 */
const trigger = (element, eventtype, customevent) => {
    const evt = customevent ?? new Event( eventtype );
    element.dispatchEvent( evt );
};
/** Create a live page mouse position mapping.
 * Based on https://www.instagram.com/p/Cq-uQjiv9KF/?img_index=1
*/
document.getElementById("body").onmousemove = e => {
    const rect = document.getElementById("body").getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
    document.getElementById("body").style.setProperty("--mouse-x", `${x}px`);
    document.getElementById("body").style.setProperty("--mouse-y", `${y}px`);
};
/** Returns the number if it is greater than or equals zero; or returns zero if it is less than zero.
 * @param {number} number the number to be evaluated.
 * @returns {number} returns the number, if it is greater than or equal zero; or returs zero if it is less than zero.
 */
function keepGreaterOrEqualThanZero(number) {
    return (number < 0) ? 0 : number;
};
/** Returns the anchor position, from URL, if exists.
 * @returns {string|null} the anchor string position if exists, null otherwise.
 */
function getAnchor() {
    return (document.URL.split('#').length > 1) ? document.URL.split('#')[1] : null;
};



/* Page scrolling */

/** Check if an element (Element) is visible on screen.
 * @param {Element} element the element wich visibility will be checked;
 * @param {number} threshold threshold to elemnt size;
 * @param {string} mode visibility state. Values available: visible, below and above; defaults to visible;
 * @returns {boolean} true if the element is in the mode state, false otherwise.
 */
function checkVisibility(element, threshold=51, mode='visible') {
    threshold = threshold || 0;
    let rect = element.getBoundingClientRect();
    let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    let above = rect.bottom - threshold < 0;
    let below = rect.top - viewHeight + threshold >= 0;
    return mode === 'above' ? above : (mode === 'below' ? below : !above && !below);
};
/** Defines menu selection related to scroll position.
 */
document.onscroll = function() {
    for(const section of document.getElementsByClassName("section")){
        if (checkVisibility(section, threshold)) {
            document.querySelectorAll('.section').forEach(
                e => e.classList.remove('active')
            );
            document.querySelectorAll('.opt').forEach(
                e => e.classList.remove('active')
            );
            section.classList.add('active');
            let opt = document.querySelector('#menu-' + section.getAttribute('id'));
            opt.classList.add('active');
            //console.log('True ' + sect.getAttribute('id'))
        }
    };
};
/** Controlls the custom thumb position, defined by thumb constant.
 */
window.onscroll = function() {
    if (thumb) {
        let rect = thumb.getBoundingClientRect();
        //let shift = ( window.scrollY / (document.documentElement.scrollHeight / window.innerHeight) ) - (rect.bottom - rect.top);
        //let shift = ( window.scrollY / (document.documentElement.scrollHeight / window.innerHeight) ) + ((rect.bottom - rect.top) / 2);
        let shift = ( window.scrollY / (document.documentElement.scrollHeight / window.innerHeight) );
        //console.log(shift);
        //thumb.style.transform = 'translateY(' + keepGreaterOrEqualThanZero(shift) + 'px)';
        thumb.style.transform = 'translateY(' + shift + 'px)';
    }
    lastKnownScrollPosition = window.scrollY;
};



/* Navbar and menu controll */

/** Controlls menu toggle.
 */
function toggleMenuIcon() {
    let src = menuIcon.getAttribute('src');
    if (src === pathIconClose){
        closeLanguageOptionsFullScreen();
        closeMenuOptionsFullScreen();
        back = false;
    } else {
        openMenuOptionsFullScreen();
        back = true;
    };
    let iconName = src === pathIconBurger ? pathIconClose : pathIconBurger;
    menuIcon.setAttribute('src', iconName);
};
function setMenuIconClose() {
    menuIcon.setAttribute('src', pathIconClose);
}
function setMenuIconBurger() {
    menuIcon.setAttribute('src', pathIconBurger);
}
function getMenuIcon(){
    return menuIcon.getAttribute('src');
}

function closeMenuOptionsFullScreen() {
    if (menu.classList.contains('menu--mobile')){
        toggleElementClass(menu, 'menu--mobile');
        //setInvisible(menu);
    };
};
function closeLanguageOptionsFullScreen() {
    let internationalization = document.querySelector('.internationalization');
    if (internationalization.classList.contains('internationalization--mobile')){
        toggleElementClass(internationalization, 'internationalization--mobile');
    };
};

/** Controlls the menu options list full screen toggle.
 * 
 */
function toggleMenuOptionsFullScreen() {
    closeLanguageOptionsFullScreen();
    toggleElementClass(menu, 'menu--mobile');
};

function openMenuOptionsFullScreen() {
    closeLanguageOptionsFullScreen();
    if (!menu.classList.contains('menu--mobile')){
        toggleElementClass(menu, 'menu--mobile');
    };
};

/** Controlls the languages list full screen toggle.
 */
const toggleLanguageOptionsFullScreen = () => {
    closeMenuOptionsFullScreen();
    let internationalization = document.querySelector('.internationalization');
    toggleElementClass(internationalization, 'internationalization--mobile');
};

function openLanguageOptionsFullScreen() {
    closeMenuOptionsFullScreen();
    let internationalization = document.querySelector('.internationalization');
    if (!internationalization.classList.contains('internationalization--mobile')){
        toggleElementClass(internationalization, 'internationalization--mobile');
    };
};

const backLanguageOptionsFullScreen = () => {
    if(back) {
        toggleMenuOptionsFullScreen();
    } else {
        trigger(menuIcon, 'click');
        closeLanguageOptionsFullScreen();
    };
};

/** Controlls the menu options list click event.
 */
document.querySelectorAll('.opt').forEach(
    option => {
        option.addEventListener('click', function(event) {
            if (menu.classList.contains('menu--mobile')){
                trigger(menuIcon, 'click');
            };
        });
});

/** Controlls the languages list click event.
 */
document.querySelectorAll('.opt-lang').forEach(
    option => {
        option.addEventListener('click', function(event) {
                let anchor = getAnchor();
                if (anchor) {
                    let href = event.target.getAttribute('href');
                    event.target.setAttribute('href', href+'#'+anchor);
                };
        });
    });

/** Controlls the localization button click event.
 */
document.querySelectorAll('.localization').forEach(
    opt => {
        opt.addEventListener('click', function(event) {
            toggleLanguageOptionsFullScreen();
            setMenuIconClose();
        });
});

function verifyMenuIconVisibility() {
    if (window.innerWidth <= 780 || document.querySelector('.internationalization').classList.contains('internationalization--mobile')) {
        if(menu.classList.contains('menu--mobile')){
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
        };
        menuIcon.style.display = 'block';
    } else {
        menu.style.display = 'block';
        menuIcon.style.display = 'none';
    }
};
  
window.onload = window.onresize = window.onchange = verifyMenuIconVisibility;
  
const observer = new MutationObserver(function() {
    verifyMenuIconVisibility();
});
  
observer.observe(document.body, { attributes: true, childList: true, subtree: true });
  

//============================================================================================
// Draft
//============================================================================================

/**
 * Mapping card mouse position
 * Based on https://www.instagram.com/p/Cq-uQjiv9KF/?img_index=1

document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")){
        const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    };
} */

/**
 * Manage scrollbar
 * Based on https://stackoverflow.com/questions/5353934/check-if-element-is-visible-on-screen
 */

/* window.addEventListener('scroll', this.handleScroll, true);

handleScroll = (e) => {
    if (e.target.classList.contains("on-scrollbar") === false) {
        e.target.classList.add("on-scrollbar");
    }
} */


//const visiblePercent = 0.51;




/* function checkVisible2(elm, threshold) {
    threshold = threshold || 1.0;

    let rect = elm.getBoundingClientRect();

    let elmHeight = rect.bottom - rect.top;
    let visible = elmHeight * threshold;

    if (elm.offsetHeight >= visible) {
        return 1;
    } else {
        return 0;
    }
} */

/* function checkVisible3(elm, threshold) {
    threshold = threshold || 1.0;

    let rect = elm.getBoundingClientRect();
    let elmHeight = rect.bottom - rect.top;
    let visible = elmHeight * threshold;

    if (elm.offsetHeight >= visible) {
        return 1;
    } else {
        return 0;
    }
} */

/**
 * Vertical draggable scroll
 */

// Make the DIV element draggable:
/* dragElement(document.getElementById("scrollbar-thumb"));

function dragElement(elmnt) {
    //let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    let pos2 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.Event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        //pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.Event;
        e.preventDefault();
        // calculate the new cursor position:
        //pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        //pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        //elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
} */

/* $("#scrollbar-thumb").draggable({
    axis: "y",
    revert: false,
    containment: "#scrollbar-track"
}); */

/* var x = document.getElementById('a')    

for(var n=0; n<x.children.length; n++) {
    ;(function(c) {
        c.addEventListener('mousedown', function(e) {
            console.log('dragstart')
            this.style.opacity = '.9'
            this.style.position = 'relative'

            if(c.style.top === "") {
                var offsetStart = 0
            } else {
                var offsetStart = parseInt(c.style.top.slice(0,-2))
            }

            var mouseStart = e.pageY
            var mousemoveHandler;
            document.addEventListener('mousemove', mousemoveHandler  = function(e) {
                this.style.opacity -= '.01'
                c.style.top = offsetStart + e.pageY - mouseStart
                console.log('drag: ', e.pageY, mouseStart, c.style.top)
            })
            document.addEventListener('mouseup', function(e) {
                console.log('dragend')
                document.removeEventListener('mousemove', mousemoveHandler)
            })
        })
    })(x.children[n])
} */

/* document.getElementById("scrollbar").addEventListener("scroll", (e) => {

}); */

/* window.onscroll = function() {myFunction()}; */



/* function myFunction() {
  if (document.body.scrollTop || document.documentElement.scrollTop) {
    //document.getElementById("myP").className = "test";
  } 
  
  if (condition) {
    
  }
} */

//Smooth scrolling with links
/* $('a[href*=\\#]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
}); */

// Smooth scrolling when the document is loaded and ready
/* $(document).ready(function(){
  $('html,body').animate({scrollTop:$(location.hash).offset().top}, 500);
}); */

/*   button.addEventListener("show", {

  }); */

/* document.onscrollend = e => {
    for(const sect of e){
        if (checkVisible(sect, dist)) {
            sect.classList.add('active');
            let opt = document.querySelector('#menu-' + sect.getAttribute('id'));
            opt.classList.add('active');
            console.log('True ' + sect.getAttribute('id'))
        } else {
            sect.classList.remove('active');
            let opt = document.querySelector('#menu-' + sect.getAttribute('id'));
            opt.classList.remove('active');
            console.log('False ' + sect.getAttribute('id'))
        }
    };
} */

/* const sections = document.querySelectorAll('.section');
const options = document.querySelectorAll('.opt');
console.log(option);

options.forEach(option => {
    option.addEventListener('click', function(e) {
        e.preventDefault();

        // remove all active / show state
        options.forEach(
            item => item.classList.remove('active')
        );
        sections.forEach(
            section => section.classList.remove('show')
        );

        // add active / show state again
        this.classList.add('active');

        const target = this.getAttribute('href');
        document.querySelector(target)?.classList.add('show');
  });
});

document.querySelectorAll('.opt') = e => {
    for(const card of document.getElementsByClassName("card")){
        const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    };
} */

/* $("#menu li a").on("click", function(e){
    e.preventDefault();
    $('#menu li a').removeClass('active');
    $(this).addClass('active');
}); */

        
//changeLanguage(language);

/* const userData = fetch(`http://localhost:8001/?language=${language}`).then(function(response) {
    return response.text();
}).then(function(string) {
    console.log(string);
}); */

/* function changeLanguage(language) {
    //trigger( document.querySelector('#change-language'), 'click' );
    const userData = fetch(`https://api.com/api/user/${userId}`)
   .then(response => response.json())
   .then(data => console.log(data.name))
}; */

/**
 * Avatar image moving effect
 */

/**
 * Dropdown button
 */

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
/* function myDropdownFunction() {
    document.getElementById("language-dropdown").classList.toggle("show");
  }
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.btn-dropdown')) {
    let myDropdown = document.getElementById("language-dropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  } */