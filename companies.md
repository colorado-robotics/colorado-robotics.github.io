---
title: ColoRobots Companies
permalink: /companies
layout: main

# TODO: Add logos, description, location.
companies:
  - name: Gamma 2 Robotics
    url: http://gamma2robotics.com

  - name: Occipital
    url: http://occipital.com

  - name: Sphero
    url: http://sphero.com

  - name: Misty Robotics
    url: http://mistyrobotics.com

  - name: Lefthand Robotics
    url: http://lefthandrobotics.com

  - name: AMP Robotics
    url: https://www.amprobotics.com

---

# Colorado Robotics and AI Companies

<div class="row">
<div class="col-10">

<ul>

{% assign companies = page.companies | sort: 'name' %}
{% for co in companies %}

<li>
<span class="h4">{{ co.name }}</span>
<p/>
<a href="{{ co.url }}">{{ co.url }}</a>
</li>

{% endfor %}

</ul>
</div>
</div>

