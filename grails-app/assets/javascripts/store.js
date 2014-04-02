App.Store = DS.Store.extend({

});


App.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:8080/prep-worship'
});
