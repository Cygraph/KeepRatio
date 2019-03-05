/*
test-breakspaces.js
Designer: © Michael Schwarz, CyDot
Updated: 2019-01-09
*/


( function ( $ ) {
    
    // Methods:
    // -------------------
    // $.fn.keepRatio()
    // $.fn.freeRatio()
    // $.fn.ratio()
    // $.keepRatio_inertia()
    
    function onDoc () {
        
        //$.keepRatio.inertia( 30 );
        
        var $els = $( ".box" );
        
        $els.keepRatio();
        
        $els.ratio( 1 );
        
        //$( ".box-1" ).freeRatio( true );
        
        console.log( "keepRatio", $els );
    }
    
    // -----------------------------------------------
    
    $( document ).ready( onDoc );
    
})( jQuery );
