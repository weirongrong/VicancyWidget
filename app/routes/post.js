import Ember from 'ember';
    App = Ember.Application.create({});

    App.Token = Ember.Object.extend({
      token: ""
    });

    App.IndexRoute = Ember.Route.extend({
      model: function () {
        return App.Token.create()
      },
      setupController: function (controller, model) {
        controller.set("model", model);
      }
    });

    App.IndexController = Ember.ObjectController.extend({
      submitAction: function () {
        // here you could perform your actions like persisting to the server or so
        alert("now we can submit the model:" + this.get("model"));
      }
    });
