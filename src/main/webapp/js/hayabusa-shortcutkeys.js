//open command bar
Mousetrap.bindGlobal(['shift+up'], function(e) {
  document.getElementById('light').style.display='block';
  return false;
});

//close command bar
Mousetrap.bindGlobal(['shift+down', 'esc'], function(e) {
	document.getElementById('lightboxInput').value="";	
	document.getElementById('light').style.display='none';
	
  return false;
});

//open command bar and trigger voice search
Mousetrap.bindGlobal(['ctrl+shift+.'], function(e) {
  document.getElementById('light').style.display='block';document.getElementById('fade').style.display='block'
  return false;
});

jQuery( "iframe" ).each( function( i, iframe )
{
  Mousetrap.bindEventsTo( iframe.contentDocument );
} );
