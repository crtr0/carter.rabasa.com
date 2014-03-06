---
layout: post
title: Which Leaf Should I Buy?
tags: [ev, nissanleaf]
published: true
date: 2014-03-01T13:20:0.0
---
*This is Part 3 of my experience buying a Nissan Leaf. Check-out [Part 1][1] and [Part 2][2].*

![Nissan Leaf SV](/images/2014-03-05-leafsv.png)

Nissan sells the Leaf in three trim levels: S, SV and SL. Generally when you see a super-low lease ($199/month) for a brand-new Leaf, they are talking about a Base S model. I spent quite a bit of time going over all three of the trims. Sometimes I felt like a S would work fine, other times I'd gravitate up to the SL. I also learned a few surpising things and I hope this information helps you figure out what trim level will work for you. Bear in mind, this information pertains to the 2013 Nissan Leaf.

### S ($28,980 MSRP)

This is the base trim and it seems pretty popular. The motor (80 kW) and battery (24 kWh) are **identical** across all trim levels. You can't pay more for a better engine or better battery. This trim level also include:

* Rear-view monitor
* Heated seats and heated steering wheels

I get the impression that people who buy this trim are buying a Leaf as their "second car". 

### SV ($32,000 MSRP)

Here are some of the additional features you get when you move up to this trim level:

* Hybrid heater system
* B-mode (regenerative braking drive mode)
* 7-inch touch screen with Navigation
* CARWINGS remote connection

The hybrid heat system uses a combination of the electric heating element and a heat pump (which is an air conditioner that can run backwards) to produce heat. On models that don't have this feature (all 2011, all 2012 and the 2013 S model) it can take up to 7 minutes to get any heat to come out and it's draining the battery while you're waiting. With this feature it takes a couple seconds to get heat to come out and it uses far less power.

The Carwings remote connection is a pretty awesome feature for hackers. It provides an API to the car which can be accessed via the web. The API is leveraged by official iPhone and Android apps, but there are a bunch of 3rd party apps that people have built as well. I'm currently in the process of building an NPM module ([CarwingsJS][4]) to provide access to this API for Node developers.

### SL ($35,020)

Finally, there is the baller trim level:

* Leather seats
* Spoiler with a solar panel
* 17" wheels
* Cargo cover

### My choice and the options

We decided to go with the SV. I guess after 2.5 years in a beautiful premium vehicle (2011 VW Tiguan), I realized that leather just didn't mix well with kids and car seats. And that's the primary upgrade for the SL trim level: leather seats. The other additional features aren't very meaningful.

At this point, I'm feeling good about the choice of an SV with the QC/LED package ($1,630 MSRP). This package includes:

* A quick charge port
* LED headlights

I felt that in order for the Leaf to be a realistic primary vehicle for our family that we needed to get the quick charge port. You can charge a Leaf to 80% charge at a quick charge station in about 30 minutes. There is a [growing network of quick charge stations][3] lining most of the major highways. I'm hoping that some smart planning can make road trips around the Pacific Northwest (Portland, Vancouver, etc) a viable option.

Just as I'm about to close the deal on a 2013 silver SV w/ QC/LED package, I discover a massive surprise: the 2013 SV and SL **do not include a rear-view monitor!** Yes, the thing that comes standard on their base model is not standard on the SV or SL. This was pretty astonishing. Unfortunately for me, I discovered this while at the dealership trying to close on my purchase. This was a huge error on my part and really put me in a poor negotiating position. The only way you can obtain a rear-view monitor at this trim levels is to add the Premium package ($1,050 MSRP) which includes their Around View Monitor and an upgraded Bose speaker system.

I thought about it for 5 minutes and decided that the rear-view camera was important so I added on the Premium package. Of course the dealership didn't have any of those in stock so they had to reach out to the Nissan dealer network and locate one. That's a story for another post.

**NEXT TIME:** I'll talk about the process I used to contact local dealers and close on the purchase. I'll also dive into some of the numbers behind my lease.


[1]:/2014/02/25/ditching-the-suv-for-a-nissan-leaf/
[2]:/2014/02/27/why-i-bought-a-leaf/
[3]:http://www.westcoastgreenhighway.com/electrichighway.htm
[4]:https://github.com/crabasa/carwingsjs
