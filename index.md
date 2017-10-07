---
layout: main
---

<div class="row pt-5">
  <div class="col-12">
    <h1>Welcome to the Colorado Robotics Community</h1>
  </div>
</div>

<div class="row pt-5 pb-5">
  <div id="cal-box" class="col text-center border rounded px-3 pt-3 pb-4 mx-4">
    <h3>Community Event Calendar</h3>
    <div id="community-calendar" class="container-fluid"></div>
  </div>

  <div class="col text-center">
    <h3>Recent Events</h3>
    <div>
      <img src="images/colorado-flag-robot-head.png"
           style="height: 10rem;"/>
    </div>
    <span class="block">Coloradans having fun with robots</span>
  </div>
</div>

<hr class="pt-5"/>

<div class="row">
  <div class="col">
    <h3 class="text-center">ColoRobo Sponsors</h3>

    <div class="row">
      <div class="col text-center">

        <div class="row mt-2">
          <div class="col text-center">
            <span class="h4">Boulder Is For Robots</span>
          </div>
        </div>

        <div class="row mt-2 justify-content-center">
          {% include sponsor_card.html
          sponsor_name="Brad Feld"
          sponsor_type="Platinum Sponsor"
          sponsor_image="bfeld.jpg" %}

          {% include sponsor_card.html
          sponsor_name="Upslope Brewing"
          sponsor_type="Beer & Happy Hour Sponsor"
          sponsor_image="upslope.jpg" %}

          {% include sponsor_card.html
          sponsor_name="Galvanize"
          sponsor_type="Event Space Sponsor"
          sponsor_image="galvanize.png" %}
        </div>
      </div>
    </div>
  </div>
</div>

<div class="pb-5"></div>
