import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Component.extend({
  didInsertElement: function() {
    var self = this;

    var publisherKey = Ember.get(ENV, 'shareThis.publisherKey');

    var url = 'http://w.sharethis.com/button/buttons.js';
    if (location.protocol === 'https:') {
      url = 'https://ws.sharethis.com/button/buttons.js';
    }
    
    if (!window.stButtons) {
      $.getScript(url).then(function() {
        if (window.stLight) {
          window.stLight.options({ publisher: publisherKey, doNotHash: false, doNotCopy: false, hashAddressBar: false });
        }
      });
    }
    else {
      self.initializeShareThis();
    }
  },

  initializeShareThis: function() {
    if (window.stButtons) {
      window.stButtons.locateElements();
    }
  }
});