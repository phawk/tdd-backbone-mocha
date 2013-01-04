(function(global, $, _, Backbone, undefined) {

    app.views.Profile = Backbone.View.extend({

        render: function() {
            var html = "<h1>"+ this.model.getFullName() +"</h1>" +
                "<p>"+ this.model.get('first_name') +" is "+ this.model.get('age') + " years old";

            this.$el.html(html);
        }

    });

})(this, $, _, Backbone);