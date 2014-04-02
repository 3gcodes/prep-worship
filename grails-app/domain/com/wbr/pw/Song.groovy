package com.wbr.pw

/**
 * Created by gdboling on 3/16/14.
 */
class Song {

  String title
  String composers
  String mediaUrl
  String fileLocation

  Date dateLastUsed
  Date dateCreated
  Date lastUpdated

  static constraints = {
    title()
    composers()
    mediaUrl nullable: true, blank: false, url: true
    fileLocation nullable: true, blank: false
    dateLastUsed nullable: true
    dateCreated nullable: true
    lastUpdated nullable: true
  }

}
