// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: "table",
  className: "table",

  initialize: function() {
    this.render();
    this.on('change', function(){
      this.render()
    })
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<tr><th>Library</th><td></td><td><span>Summer</span><span>Fall</span><span>Winter</span><span>Spring</span></td><td></td><td></td></tr><tr><td class="subheader">Starred</td><td class="subheader">Artist</td><td class="subheader">Title</td><td class="subheader">PlayCount</td><td class="subheader"><span style="margin-right: 8px;" class="pull-right">Add</span></td></tr>').append(
      this.collection.map(function(song){
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
