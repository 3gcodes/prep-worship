// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  this.resource('songs', function() {
    this.route('index', {path: '/'});
    this.route('new');
  });
  this.route('about');
  this.resource('services', function() {
    this.resource('service', {path: ':service_id'});
  });
});


App.SongsIndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll("song");
  }
});

App.ServicesRoute = Ember.Route.extend({
  model: function() {
    return services;
  }
});

services = [{
  id: '1',
  createdBy: 'Chris Shuman',
  dateCreated: '01-28-2014'
},
  {
    id: '2',
    createdBy: 'Chris Shuman',
    dateCreated: '01-21-2014'
  },
  {
    id: '3',
    createdBy: 'Chris Shuman',
    dateCreated: '01-14-2014'
  },
  {
    id: '4',
    createdBy: 'Gregg Bolinger',
    dateCreated: '01-07-2014'
  },
  {
    id: '5',
    createdBy: 'Chris Shuman',
    dateCreated: '01-01-2014'
  }
]