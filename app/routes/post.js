import Ember from 'ember';

export default Ember.Route.extend({
    ajax: Ember.inject.service(),
    sendRequest() {
        return this.get('ajax').request('https://dashboard-staging.hrofficelabs.com', {
            method: 'POST',
            data: {
                foo: 'bar'
            }
        });
    }
});
