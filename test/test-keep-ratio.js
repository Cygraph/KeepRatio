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
        
        var $els = $( ".box" );
        
        $els.keepRatio();
    }
    
    // -----------------------------------------------
    
    $( document ).ready( onDoc );
    
})( jQuery );
