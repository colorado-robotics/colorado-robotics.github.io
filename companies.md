---
title: ColoRobots Companies
permalink: /companies
layout: main

# TODO: Add logos, description, location.
companies:
  - name: Gamma 2 Robotics
    url: http://gamma2robotics.com
    location: Lakewood
    logo: gamma2.png

  - name: Occipital
    url: http://occipital.com
    location: Boulder
    logo: occipital.jpg

  - name: Sphero
    url: http://sphero.com
    location: Boulder
    logo: sphero.jpg

  - name: Misty Robotics
    url: http://mistyrobotics.com
    location: Boulder
    logo: misty.svg

  - name: Lefthand Robotics
    url: http://lefthandrobotics.com
    location: Longmont
    logo: lefthand.jpg

  - name: AMP Robotics
    url: https://www.amprobotics.com
    location: Denver
    logo: amp.png

  - name: ThinkTopic
    url: http://thinktopic.com
    location: Boulder
    logo: thinktopic.png

  - name: PickNik Consulting
    url: http://picknik.ai
    location: Boulder
    logo: picknik.jpg

  - name: Canvas Technology
    url: http://canvas.technology
    location: Boulder
    logo: canvas.jpg

  - name: Modular Robotics
    url: http://modrobotics.com
    location: Boulder
    logo: modrobotics.png
    
  - name: Wolf Robotics
    url: http://wolfrobotics.com
    location: Fort Collins
    logo: wolf.jpg

  - name: Robotic Materials
    url: https://roboticmaterials.com/rm/
    location: Boulder
    logo: rm.png

  - name: Tortuga AgTech
    url: http://www.tortugaagtech.com/
    location: Lakewood
    logo: tortuga.jpg
---

# Colorado Robotics and AI Companies

<div class="card-deck w-100">

{% assign companies = page.companies | sort: 'name' %}
{% for co in companies %}
<div class="col-lg-3 col-md-4 col mt-5">
  <div class="card text-center inline-block company-card">
    <div class="card-img-top company-card-logo-container align-middle">
        <img class="mx-auto company-card-logo"
src="images/companies/{{ co.logo }}"
         alt="{{ co.name }} Logo"/>
    </div>

    <div class="card-body">
      <h5>{{ co.name }}</h5>
      <p><a href="{{ co.url }}">{{ co.url }}</a></p>
    </div>

    <div class="card-footer">
      <span>{{ co.location }}, CO</span>
    </div>
  </div>
</div>
{% endfor %}

</div>
