//= require jquery
//=require bootstrap
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require ./prep_worship

// for more details see: http://emberjs.com/guides/application/
App = Ember.Application.create({
  ready: function() {
    console.log("Application Launched!");
  }
});