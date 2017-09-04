---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: main
---

  <div class="image-header" id="image-header">
    <div class="container">
      <div class="row">
        <div class="col-sm-10 col-sm-offset-1
                    col-md-10 col-md-offset-1
                    col-lg-10 col-lg-offset-1">
          <a href="{{ post.url | prepend: site.baseurl }}">
            <div class="row voffset8">
            </div>
            <div class="row voffset8">
              <div class="well">
                <div class="col-sm-12">
                  <div id="headline-header" class="top-headline-header">
                    <b>CO Robotics: </b>
                    {{ post.title }}<br>
                  </div>
                </div>
                <div id="headline" class="top-headline">
                  <!-- Preview -->
                  <i class="fa fa-quote-left"></i> 
                  "Doing the thing"
                  <i class="fa fa-quote-right"></i>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <!-- from div the blog as background -->
      <script>
        document.getElementById("image-header").style.backgroundImage = "url(/images/flatirons.png)";
        document.getElementById("image-header").style.backgroundSize = "cover";
        document.getElementById("image-header").style.backgroundPosition = "center";
        document.getElementById("image-header").style.borderBottom = "5px solid #07144b";
      </script>
    </div>
  </div>


"suh"
