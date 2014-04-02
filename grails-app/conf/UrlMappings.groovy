class UrlMappings {

  static mappings = {

    "/songs"(resources: "song")

    "/"(view: "/index")
    "500"(view: '/error')
  }
}
