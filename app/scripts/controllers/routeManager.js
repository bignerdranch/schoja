// Routing Yeah!! Routing Yeah!!
var Routing = can.Control({
  'route': function() {
    // matches empty hash, #, or #!
console.log('default route');    
  },
  'profile route': function( data ) {
    // matches routes like #!todos/5
console.log('profile route');    
  }
})

// create routing control
new Routing( document.body );