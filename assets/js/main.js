"use strict";

document.addEventListener("DOMContentLoaded",
    function() {


// Ajoute target="_blank" aux liens externes.
( function() {
    const internal = new RegExp( location.host.replace( "www.", "" ), "i" );
    const a = document.getElementsByTagName( "a" );
    for( let i = 0; i < a.length; i++ ) {
        const href = a[ i ].host;
        if( !internal.test( href ) ) {
            a[ i ].setAttribute( "target", "_blank" );
        }
    }
})();



// Navigation avec le clavier et le balayage sur les écrans tactiles.
(function() {
    var menuLinks = document.querySelectorAll("ul.nav li");
    var nbLinks = menuLinks.length;
    var menuLinks = Array.from(document.querySelectorAll("ul.nav li"));
    var activeLinkIndex = menuLinks.findIndex(link => link.classList.contains('active'));
    var nextLink = menuLinks[activeLinkIndex < (nbLinks - 1) ? activeLinkIndex + 1 : 0].children[0].getAttribute('href');
    var prevLink = menuLinks[activeLinkIndex > 0 ? activeLinkIndex - 1 : nbLinks - 1].children[0].getAttribute('href');
    var firstLink = document.querySelector("ul.nav li").firstElementChild.getAttribute('href');

    document.querySelector('a#bouton-prec').setAttribute("href", prevLink);
    document.querySelector('a#bouton-suiv').setAttribute("href", nextLink);

    Mousetrap.bind('left', function(e) { navigate_to_page(e, prevLink); });
    Mousetrap.bind('esc', function(e) { navigate_to_page(e, firstLink); });
    Mousetrap.bind('right', function(e) { navigate_to_page(e, nextLink); });

    document.body.addEventListener('mousedown', function(e) { disable_swipe(e); });
    document.body.addEventListener('touchstart', function(e) { enable_swipe(e); });

    var navigate_to_page = function(e, targetHref) {
        window.location.href = targetHref;
    };

    function disable_swipe(e) {
        document.body.removeEventListener('swiperight', function(e) { navigate_to_page(e, prevLink); });
        document.body.removeEventListener('swipeleft', function(e) { navigate_to_page(e, nextLink); });
    }

    function enable_swipe(e) {
        document.body.addEventListener('swiperight', function(e) { navigate_to_page(e, prevLink); });
        document.body.addEventListener('swipeleft', function(e) { navigate_to_page(e, nextLink); });
    }
})();


}
);
