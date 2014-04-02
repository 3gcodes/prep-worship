import com.wbr.pw.Song

class BootStrap {

    def init = { servletContext ->

      for (idx in 1..10) {
        new Song(
            title: "Song ${idx}",
            composers: "Composers ${idx}",
            mediaUrl: "http://mediaUrl${idx}.com",
            fileLocation: "/some/path/to/file/${idx}",
            dateLastUsed: new Date()
        ).save()
      }
    }
    def destroy = {
    }
}
