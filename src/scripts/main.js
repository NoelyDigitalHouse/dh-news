


window.addEventListener( "load", ev => {
    /* [ properties ]
    ================================== */
    let socialsLinks = document.querySelectorAll( "footer ul li" );

    /* [ events ]
    ================================== */
    socialsLinks.forEach( link => link.addEventListener( "click", ev => {
        window.open( link.getAttribute( "src" ), "_blank" );
    } ) );

} );