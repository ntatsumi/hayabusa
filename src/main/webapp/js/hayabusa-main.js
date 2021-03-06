jQuery.noConflict();
var matchedJSON =
{};

jQuery( function()
{
  // /provider/commands
  jQuery.getJSON( "/webapps/bb-hayabusa-BBLEARN/execute/provider/commands", function( data )
  {
    parse( data.commands );
    jQuery( "#lightboxInput" ).autocomplete(
    {
        autoFocus : true,
        source : data.commands,
        selectFirst : true,
        minLength : 1,
        select : function( event, ui )
        {
          matchedJSON = ui.item;
          if(matchedJSON.parameters == null)
            parent.frames['content'].location.href = getUri();
          else
            post_to_url(getUri(), matchedJSON.parameters, "post", matchedJSON.enctype);
        }
    } ).data( 'ui-Autocomplete' )._renderItem = function( ul, item )
    {
      return jQuery( "<li>" )
          .append( "<a>" + page.bundle.getString( item.category.name ) + " - " + item.title + "</a>" ).appendTo( ul );
    };
  } )
} );

function getUri()
{
  var uri = matchedJSON.uri;
  return uri;
}

function parse( items )
{
  jQuery( items ).each( function()
  {
    this.value = page.bundle.getString( this.category.name ) + " - " + this.title;
  } );
}

function post_to_url(path, params, method, enctype) {
  method = method || "post";

  var form = document.createElement("form");
  form.setAttribute("method", method);
  form.setAttribute("action", path);
  form.setAttribute("target", "content");
  if(enctype != null)
  {
	  form.setAttribute("enctype",enctype);
  }

  for(var key in params) {
      if(params.hasOwnProperty(key)) {
          var hiddenField = document.createElement("input");
          hiddenField.setAttribute("type", "hidden");
          hiddenField.setAttribute("name", key);
          hiddenField.setAttribute("value", params[key]);

          form.appendChild(hiddenField);
       }
  }

  document.body.appendChild(form);
  form.submit();
}