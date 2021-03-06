package blackboard.plugin.hayabusa.command;

import static com.google.common.base.Preconditions.checkNotNull;

import com.google.common.base.Objects;
import com.google.common.base.Objects.ToStringHelper;

import java.util.Map;

import javax.annotation.Nullable;

public class PostCommand extends SimpleCommand
{
  private Map<String, String> _parameters;
  private String _enctype;

  public PostCommand( String title, String uri, Category category, Map<String, String> parameters )
  {
    super( title, uri, category );
    _parameters = checkNotNull( parameters );
  }

  public PostCommand( String title, String uri, Category category, Map<String, String> parameters, String enctype )
  {
    this( title, uri, category,parameters );
    _enctype = checkNotNull( enctype );
  }
  
  public Map<String, String> getParameters()
  {
    return _parameters;
  }

  public void setParameters( Map<String, String> parameters )
  {
    _parameters = checkNotNull( parameters );
  }

  public String getEnctype()
  {
    return _enctype;
  }

  public void setEnctype( String _enctype )
  {
    _enctype = checkNotNull(_enctype);
  }

  @Override
  public boolean equals( @Nullable Object obj )
  {
    if ( obj instanceof PostCommand )
    {
      PostCommand command = (PostCommand) obj;
      return Objects.equal( getTitle(), command.getTitle() ) && Objects.equal( getUri(), command.getUri() )
             && Objects.equal( getCategory(), command.getCategory() )
             && Objects.equal( getParameters(), command.getParameters() )
             && Objects.equal( getEnctype(), command.getEnctype() );
    }
    return false;
  }

  @Override
  public String toString()
  {
    ToStringHelper helper = com.google.common.base.Objects.toStringHelper( this );
    helper.add( "title", getTitle() );
    helper.add( "uri", getUri() );
    helper.add( "category", getCategory() );
    helper.add( "parameters", _parameters );
    helper.add( "enctype", getEnctype() );
    return helper.toString();
  }
}
