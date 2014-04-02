package com.wbr.pw

/**
 * Created by gdboling on 3/16/14.
 */
class SongController {

  def index() {
    println "Listing songs"
    def songs = Song.list()
    songs = songs.collect { [id: it.id, title: it.title, composers: it.composers] }
    render(contentType: 'application/json') {
      [song: songs]
    }
  }

}
