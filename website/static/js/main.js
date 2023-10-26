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

function checkVisible2(elm, threshold) {
    threshold = threshold || 1.0;

    let rect = elm.getBoundingClientRect();

    let elmHeight = rect.bottom - rect.top;
    let visible = elmHeight * threshold;

    if (elm.offsetHeight >= visible) {
        return 1;
    } else {
        return 0;
    }
}

function checkVisible3(elm, threshold) {
    threshold = threshold || 1.0;

    let rect = elm.getBoundingClientRect();
    let elmHeight = rect.bottom - rect.top;
    let visible = elmHeight * threshold;

    if (elm.offsetHeight >= visible) {
        return 1;
    } else {
        return 0;
    }
}

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
    const burgerMenu = document.querySelector(".menu-icon");
    const src = burgerMenu.getAttribute('src');
    const iconName = src === '/static/img/svg/burger-menu.svg' ?
        '/static/img/svg/close.svg'
        :
        '/static/img/svg/burger-menu.svg';


    burgerMenu.setAttribute(
        'src',
        iconName
    );

    const navigation = document.querySelector('.menu');

    navigation.classList.toggle(
        'menu--mobile'
    );
};