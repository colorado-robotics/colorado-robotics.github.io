---
layout: main
---

<div class="row page-title">
  <div class="col-12">
    <h1>Welcome to the Colorado Robotics Community</h1>
  </div>
</div>

<div class="row pt-5 pb-5">
  <div id="cal-box" class="col text-center border box px-3 pt-3 pb-4 mx-4">
    <h3>Community Event Calendar</h3>
    <div id="community-calendar" class="container-fluid"></div>
  </div>

  <div id="recentEventSlideshow" class="col text-center box pt-3 pb-4 mx-4">
    <h3>Recent Events</h3>
    <div id="recentEventCarousel" class="carousel slide rounded"
         data-ride="carousel">
      <div class="carousel-inner">
        {% include event_carousel_item.html
        caption="Boulder Startup Week Robotics Happy Hour"
        image="bsw-happy-hour.jpg"
        extra_class="active" %}

        {% include event_carousel_item.html
        caption="Boulder Startup Week Robotics Founder Panel"
        image="bsw-founder-panel.jpg" %}

        {% include event_carousel_item.html
        caption="Boulder Is For Robots Social @ AMP Robotics"
        image="amp-social.jpg" %}

        {% include event_carousel_item.html
        caption="Boulder Startup Week Robotics Researcher Panel"
        image="bsw-researcher-panel.jpg" %}
      </div>
      <a class="carousel-control-prev" href="#recentEventCarousel"
         role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#recentEventCarousel"
         role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</div>

<hr/>

<div class="row">
  <div class="col">
    <h2 class="text-center">ColoRobo Sponsors</h2>

    <div class="row">
      <div class="col text-center">
          <h4>We're seeking sponsorship to encourage growth in Colorado Robotics!</h4>
          Get in touch at sponsors@corobo.org
      </div>
    </div>
  </div>
</div>

<script src="/main.js"></script>
<script>
  colorobo.core.init();
</script>
