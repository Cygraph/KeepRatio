/*
File: keep-ratio.js
Dependencies: jQuery,
Globals: none
Designer: © Michael Schwarz, CyDot, look@cydot.de
Vers. 0.2.2 
Updated 2019-03-05
*/

;( function ( $ ) {
    
    var version = "0.2.2",
    $kr_elems,
    listening = false,
    _inertia = 50,
    timerId,
    cachedWidth;
    
    $.fn.keepRatio = function ( ratio ) {
        var provided = $.isNumeric( ratio ),
        args = arguments.length,
        $els = $( this ), $el,
        currentRatio;
        
        $els.each( function () {
            $el = $( this ); 
            currentRatio = $el.ratio();
            
            if ( ! $el.data( "keep-ratio" )) { 
                $el.data( "initial-ratio", currentRatio );
                if ( ! $el.hasClass( "keep-ratio" )) { 
                    $el.addClass( "keep-ratio" );
                }
            }
            if ( provided ) {
                ratio = Number( ratio );
                $el.data( "keep-ratio", ratio );
                $el.ratio( ratio );
            }
            else if ( ! args ) {
                $el.data( "keep-ratio", currentRatio );
            }
        });
        
        $kr_elems = $( ".keep-ratio" );
        
        if ( ! listening && $kr_elems.length ) {
            activate();
        };
        return $els;
    }
    
    $.fn.freeRatio = function ( reset ) {
        var $els = $( this ).filter( ".keep-ratio" ),
        $el;
        
        $els.each( function () {
            $el = $( this );
            
            if ( reset === true ) {
                $el.ratio( $el.data( "initial-ratio" ));
            };
            $el.removeData( "initial-ratio" );
            $el.removeData( "keep-ratio" );
            $el.removeClass( "keep-ratio" );
        });
        
        $kr_elems = $( ".keep-ratio" );
        
        if ( ! $kr_elems.length ) {
            deactivate();
        };
        return $( this );
    }
    
    $.fn.ratio = function ( ratio ) {
        var $els = $( this );
        
        if ( ! arguments.length ) {
            return $els.width() / $els.height();
        };
        
        var $el;
        return $els.each( function () {
            $el = $( this );
            $el.height( $el.width() / Number( ratio ));
        });
    }
    
    $.keepRatio = ( function () {
        var v = version;
        
        // For html notation
        // Finds elements with data-keep-ratio attribute
        
        function register () {
            $( "[data-keep-ratio]" )
                .not( ".keep-ratio" )
                .addClass( "keep-ratio" );
            
            $kr_elems = elements();
            return $.keepRatio;
        }
        
        function elements () {
            return $( ".keep-ratio" );
        }
        
        function inertia ( ms ) {
            if ( ! arguments.length ) {
                return _inertia;
            };
            _inertia = ms;
            return $.keepRatio;
        }
        
        function update () {
            renderRatios();
            return $.keepRatio;
        }
        
        return {
            version: v,
            register: register,
            elements: elements,
            inertia: inertia,
            update: update
        }
    })();
    
    // Resize event methods ------------
    
    function activate () {
        if ( ! listening ) {
            listening = true;
            $( window ).resize( inertiaDelay );
        }
    }
    
    function deactivate () {
        if ( listening ) {
            listening = false;
            $( window ).off( "resize", inertiaDelay );
        }
    }
    
    function inertiaDelay () {
        clearTimeout( timerId );
        cachedWidth = $( window ).width();
        if ( _inertia ) {
            timerId = setTimeout( inertiaProof, _inertia )
        }
        else renderRatios();
    }
    
    function inertiaProof () {
        if ( cachedWidth === $( window ).width()) {
            renderRatios();
        }
    }
    
    function renderRatios () {
        $kr_elems.each( function () {
            $el = $( this );
            $el.height( $el.width() / $el.data( "keep-ratio" ));
        });
    }
    
})( jQuery );
