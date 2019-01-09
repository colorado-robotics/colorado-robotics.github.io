---
title: ColoRobots Companies
permalink: /companies
layout: main

# TODO: Add logos, description, location.
companies:
  - name: Gamma 2 Robotics
    url: gamma2robotics.com
    location: Lakewood
    logo: gamma2.png

  - name: Occipital
    url: occipital.com
    location: Boulder
    logo: occipital.jpg

  - name: Sphero
    url: sphero.com
    location: Boulder
    logo: sphero.jpg

  - name: Misty Robotics
    url: mistyrobotics.com
    location: Boulder
    logo: misty.svg

  - name: Lefthand Robotics
    url: lefthandrobotics.com
    location: Longmont
    logo: lefthand.jpg

  - name: AMP Robotics
    url: amprobotics.com
    location: Denver
    logo: amp.png

  - name: ThinkTopic
    url: thinktopic.com
    location: Boulder
    logo: thinktopic.png

  - name: PickNik Consulting
    url: picknik.ai
    location: Boulder
    logo: picknik.jpg

  - name: Canvas Technology
    url: canvas.technology
    location: Boulder
    logo: canvas.jpg

  - name: Modular Robotics
    url: modrobotics.com
    location: Boulder
    logo: modrobotics.png
    
  - name: Wolf Robotics
    url: wolfrobotics.com
    location: Fort Collins
    logo: wolf.jpg

  - name: Robotic Materials
    url: roboticmaterials.com/rm
    location: Boulder
    logo: rm.png

  - name: Tortuga AgTech
    url: tortugaagtech.com
    location: Lakewood
    logo: tortuga.jpg

  - name: Road Narrows Robotics
    url: roadnarrows.com
    location: Loveland
    logo: roadnarrows.png

  - name: Bleum Robotics
    url: bleum.com/warehouse-robotics
    location: Englewood
    logo: bleum.png

  - name: Scythe Robotics
    url: scytherobotics.com
    location: Boulder
    logo: scythe-robotics.png
---

<h1 class="page-title">Colorado Robotics and AI Companies</h1>

<div class="card-deck w-100">

{% assign companies = page.companies | sort: 'name' %}
<div class="row">
{% for co in companies %}
<div class="col-lg-3 col-md-4 col-12 mt-5">
  <div class="card text-center inline-block company-card">
    <div class="card-img-top company-card-logo-container align-middle">
        <img class="mx-auto company-card-logo"
src="images/companies/{{ co.logo }}"
         alt="{{ co.name }} Logo"/>
    </div>

    <div class="card-body">
      <h5>{{ co.name }}</h5>
      <p><a href="http://{{ co.url }}">{{ co.url }}</a></p>
    </div>

    <div class="card-footer">
      <span>{{ co.location }}, CO</span>
    </div>
  </div>
</div>
{% endfor %}
</div>

</div>
