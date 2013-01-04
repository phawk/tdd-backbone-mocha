(function(global, _, Backbone, undefined) {

    app.models.User = Backbone.Model.extend({

        getFullName: function() {
            return this.get('first_name')+" "+this.get('last_name');
        }

    });

})(this, _, Backbone);