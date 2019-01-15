/*
File: keep-ratio.js
Dependencies: jQuery,
Globals: none
Designer: © Michael Schwarz, CyDot, look@cydot.de
Vers. 0.0.1 
Updated 2019-01-14

-------------------------------------------

 */

;( function ( $ ) {
    
    $kRElements,
    count = 0,
    listening = false,
    inertia = 333,
    timerId,
    cachedWidth;
    
    $.fn.keepRatio = function ( ratio ) {
        var hasRatio = $.isNumeric( ratio ),
        $els = $( this ), $el, id;
        
        $els.each( function () {
            $el = $( this );
            id = $el[ 0 ].id;
            
            if ( hasRatio ) {
                $el.data( "keep-ratio", ratio );
                if ( ! $el.hasClass( "keep-ratio" )) {
                    $el.addClass( "keep-ratio" );
                }
            }
            else if ( ! $el.data( "keep-ratio" )) {
                $el.data( "keep-ratio", $el.width() / $el.height());
                $el.addClass( "keep-ratio" );
            }
        });
        
        $kRElements = $( body ).find( ".keep-ratio" );
        $els.ratio( ratio );
        
        if ( ! listening && $els.size()) {
            $( window ).resize( inertiaDelay );
        };
        return $els;
    }
    
    $.fn.freeRatio = function () {
        $els = $( this );
        
        if ( $els.data( "keep-ratio" )) {
            $els.removeClass( "keep-ratio" );
            $els.data( "keep-ratio", undefined );
            $els.removeData( "keep-ratio" );
        };
        return $els;
    }
    
    $.fn.setRatio = function ( ratio ) {
        $els = $( this ), $el;
        
        if ( ratio === undefined ) {
            $els.each( function () {
                $el = $( this );
                ratio = $el.data( "keep-ratio" );
                if ( ratio ) $el.height( $el.width() / ratio );
            })
        }
        else {
            $els.each( function () {
                $el = $( this );
                $el.height( $el.width() / ratio );
            })
        }
        return $els;
    }
    
    function inertiaDelay () {
        clearTimeout( timerId );
        cachedWidth = $( window ).width();
        if ( inertia ) {
            timerId = setTimeout( inertiaProof, inertia )
        }
        else $kRElements.setRatio();
    }
    
    function inertiaProof () {
        if ( cachedWidth === $( window ).width()) {
            $kRElements.setRatio();
        }
    }
    
})( jQuery );
