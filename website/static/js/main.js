/**
 * Mapping page mouse position
 * Based on https://www.instagram.com/p/Cq-uQjiv9KF/?img_index=1
*/
document.getElementById("body").onmousemove = e => {
    const rect = document.getElementById("body").getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
    document.getElementById("body").style.setProperty("--mouse-x", `${x}px`);
    document.getElementById("body").style.setProperty("--mouse-y", `${y}px`);
}

/**
 * Mapping card mouse position
 * Based on https://www.instagram.com/p/Cq-uQjiv9KF/?img_index=1
*/
/* document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")){
        const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    };
} */


/**
 * Manage navbar
 */






/**
 * Manage scrollbar
 */

/* window.addEventListener('scroll', this.handleScroll, true);

handleScroll = (e) => {
    if (e.target.classList.contains("on-scrollbar") === false) {
        e.target.classList.add("on-scrollbar");
    }
} */

/** 
 * Manage Visible Scroll
 * Based on https://stackoverflow.com/questions/5353934/check-if-element-is-visible-on-screen
 */


const dist = 51;
const visiblePercent = 0.51;

document.onscroll = function() {
    for(const sect of document.getElementsByClassName("section")){
        if (checkVisible(sect, dist)) {
            document.querySelectorAll('.section').forEach(
                e => e.classList.remove('active')
            );
            document.querySelectorAll('.opt').forEach(
                e => e.classList.remove('active')
            );
            sect.classList.add('active');
            let opt = document.querySelector('#menu-' + sect.getAttribute('id'));
            opt.classList.add('active');
            //console.log('True ' + sect.getAttribute('id'))
        }
    };
}

function checkVisible(elm, threshold, mode) {
    threshold = threshold || 0;
    //mode = mode || 'visible';

    let rect = elm.getBoundingClientRect();
    let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    let above = rect.bottom - threshold < 0;
    let below = rect.top - viewHeight + threshold >= 0;

    //return mode === 'above' ? above : (mode === 'below' ? below : !above && !below);
    let response = !above && !below;
    return response;
  }

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

let lastKnownScrollPosition = 0;
let thumb = document.getElementById("scrollbar-thumb");

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

function keepGreaterOrEqualThanZero(n) {
    return (n < 0) ? 0 : n;
}

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

/** 
 * Toogle Menu 
 */
const toggleMenu = () => {
    const menuIcon = document.querySelector(".menu-icon");
    const src = menuIcon.getAttribute('src');
    const iconName = src === '/static/img/svg/burger-menu.svg' ?
        '/static/img/svg/close.svg'
        :
        '/static/img/svg/burger-menu.svg';


    menuIcon.setAttribute(
        'src',
        iconName
    );

    const navigation = document.querySelector('.menu');

    navigation.classList.toggle(
        'menu--mobile'
    );

    let internationalization = document.getElementById('internationalization');
    if (internationalization.classList.contains('internationalization--mobile')){
        toggleInternationalization();
    }

};

const trigger = (el, etype, custom) => {
    const evt = custom ?? new Event( etype );
    el.dispatchEvent( evt );
  };

document.querySelectorAll('.opt').forEach(
    opt => {
        opt.addEventListener('click', function(event) {
            let navigation = document.getElementById('menu');
            if (navigation.classList.contains('menu--mobile')){
                trigger( document.querySelector('.menu-icon'), 'click' );
            };
        });
});

const toggleInternationalization = () => {
    const navigation = document.querySelector('.menu');

    navigation.classList.toggle('menu--mobile');

    const internationalization = document.querySelector('.internationalization');

    internationalization.classList.toggle('internationalization--mobile');

    navigation.classList.toggle('menu--mobile');
};

document.querySelectorAll('.lang').forEach(
    opt => {
        opt.addEventListener('click', function(event) {
            let internationalization = document.getElementById('internationalization');
            if (!internationalization.classList.contains('internationalization--mobile')){
                //document.querySelector('.menu-icon').style.display = 'none';
                toggleInternationalization();
            } else {
                //document.querySelector('.menu-icon').style.display = 'block';
            };
        });
});

document.querySelectorAll('.opt-lang').forEach(
    opt => {
        opt.addEventListener('click', function(e) {
                document.querySelectorAll('.opt-lang').forEach(
                    e => e.classList.remove('active')
                );
                e.target.classList.add('active');
                let language = e.target.getAttribute('value') ;
                document.getElementById("lang").textContent = language;
                toggleInternationalization();
        });
});