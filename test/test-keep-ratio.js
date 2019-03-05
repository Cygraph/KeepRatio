/*
test-breakspaces.js
Designer: © Michael Schwarz, CyDot
Updated: 2019-03-05
*/


( function ( $ ) {
    
    // Methods:
    // -------------------
    // $.fn.keepRatio()
    // $.fn.freeRatio()
    // $.fn.ratio()
    // $.keepRatio.register()
    // $.keepRatio.elements()
    // $.keepRatio.inertia()
    // $.keepRatio.update()
    
    function onDoc () {
        
        $.keepRatio.register().inertia( 30 );
        
        var $els = $( ".box-1, .box-2" );
        
        $els.keepRatio();
        
        $els.ratio( 1 );
        
        //$( ".box-1" ).freeRatio( true );
        
        console.log( "keepRatio", $els, $.keepRatio.elements());
    }
    
    // -----------------------------------------------
    
    $( document ).ready( onDoc );
    
})( jQuery );
