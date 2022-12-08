$( document ).ready(function() {
    console.log( "ready!" );


    var accepter = Cookies.get('cookies');

    if (accepter == 'ok') {
        console.log('cookies sont la')
    }else {
        console.log('cookies sont pas la')
        gsap.to(".banniere", { // selector text, Array, or object
            opacity : 1,
            y: 20,
            duration: 0.5, // seconds

          });
    }

    $( "#btn" ).click(function() {
        console.log('oui');
        Cookies.set('cookies', 'ok', { expires: 365 });
        gsap.to(".banniere", { // selector text, Array, or object
            opacity : 0,
            y: 0,
            duration: 0.5, // seconds

          });

      });

      $('#form').validetta({
        onValid : function( event ) {
          event.preventDefault(); // Will prevent the submission of the form
          alert( 'Nice, Form is valid.' );
        },
        onError : function( event ){
          alert( 'Stop bro !! There are some errors.');
        }
      });

 
});