import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

export default Ember.Route.extend({
    host: 'https://dashboard-staging.hrofficelabs.com',
    contentType: 'application/json; charset=utf-8'
});
