import Ember from 'ember';

export default Ember.Controller.extend({
  init() {
    this.set('messages', Ember.A([]));
  },

  actions: {
    'ember-action'() {
      this.get('messages').pushObject('You invoked an Ember action!');
    }
  }
});
