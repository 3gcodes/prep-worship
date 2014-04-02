App.Song = DS.Model.extend({
  id: null,
  title: DS.attr('string'),
  composers: DS.attr('string')
});