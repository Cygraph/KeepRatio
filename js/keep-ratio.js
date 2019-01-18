/*
File: keep-ratio.js
Dependencies: jQuery,
Globals: none
Designer: © Michael Schwarz, CyDot, look@cydot.de
Vers. 0.1.0 
Updated 2019-01-15

-------------------------------------------

 */

;( function ( $ ) {
    
    var $kRElements,
    listening = false,
    inertia = 50,
    timerId,
    cachedWidth;
    
    $.fn.keepRatio = function ( ratio ) {
        var hasRatio = $.isNumeric( ratio ),
        $els = $( this ), $el;
        
        $els.each( function () {
            $el = $( this );
            
            if ( hasRatio ) {
                $el.data( "keep-ratio", ratio );
                if ( ! $el.hasClass( "keep-ratio" )) {
                    $el.addClass( "keep-ratio" );
                }
                $el.ratio( ratio );
            }
            else if ( ! $el.data( "keep-ratio" )) {
                $el.data( "keep-ratio", $el.ratio());
                $el.addClass( "keep-ratio" );
            }
        });
        
        $kRElements = $( "body" ).find( ".keep-ratio" );
        
        if ( ! listening && $els.length ) {
            listening = true;
            $( window ).resize( inertiaDelay );
        }
        return $els;
    }
    
    $.fn.freeRatio = function () {
        var $els = $( this ), $el;
        
        $els.each( function () {
            $el = $( this );
            if ( $el.data( "keep-ratio" )) {
                $el.removeClass( "keep-ratio" );
                $el.data( "keep-ratio", undefined );
                $el.removeData( "keep-ratio" );
            }
        });
        
        $kRElements = $( "body" ).find( ".keep-ratio" );
        
        if ( listening && ! $els.length ) {
            listening = false;
            $( window ).off( "resize", inertiaDelay );
        }
        return $els;
    }
    
    $.fn.ratio = function ( ratio ) {
        var $els = $( this ), $el;
        
        if ( ! arguments.length ) {
            return $els.width() / $els.height();
        }
        else {
            $els.each( function () {
                $el = $( this );
                $el.height( $el.width() / ratio );
            })
        }
        return $els;
    }
    
    $.keepRatio_inertia = function ( ms ) {
        if ( ! arguments.length ) {
            return inertia;
        }
        inertia = ms;
    }
    
    function inertiaDelay () {
        clearTimeout( timerId );
        cachedWidth = $( window ).width();
        if ( inertia ) {
            timerId = setTimeout( inertiaProof, inertia )
        }
        else resetRatio();
    }
    
    function inertiaProof () { console.log( "inertiaProof", cachedWidth );
        if ( cachedWidth === $( window ).width()) {
            resetRatio();
        }
    }
    
    function resetRatio () {
        $kRElements.each( function () {
            $el = $( this );
            ratio = $el.data( "keep-ratio" );
            if ( ratio ) $el.height( $el.width() / ratio );
        });
    }
    
})( jQuery );
