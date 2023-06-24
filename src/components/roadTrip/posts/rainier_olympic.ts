import rampart_ridge_trail from '../../../assets/road-trip/rampart_ridge_trail.jpeg'
import rampart_ridge_view from '../../../assets/road-trip/rampart_ridge_view.jpeg'
import mount_rainer from '../../../assets/road-trip/mount_rainier.jpeg'
import christine_falls from '../../../assets/road-trip/christine_fails.jpeg'
import carter_falls from '../../../assets/road-trip/carter_falls.jpeg'
import theory from '../../../assets/road-trip/theory.jpeg'
import rainier_snow from '../../../assets/road-trip/rainier_snow.jpeg'
import kalaloch_beach from '../../../assets/road-trip/kalaloch_beach.jpeg'
import otw_beach from '../../../assets/road-trip/otw_beach.jpeg'
import ruby_beach from '../../../assets/road-trip/ruby_beach.jpeg'
import mount_storm_king from '../../../assets/road-trip/mount_storm_king.jpeg'
import j_storm_king from '../../../assets/road-trip/j_storm_king.jpeg'
import marymere_falls from '../../../assets/road-trip/marymere_falls.jpeg'
import lake_crescent from '../../../assets/road-trip/lake_crescent.jpeg'

import { EntryType } from '../entryType'

const rainier_olympic: Array<EntryType> = [
    {
        date: 'June 19th',
        day: 22,
        location: 'Yakima, WA - Mount Rainier National Park',
        hikingMiles: 4.8,
        content: [
            {
                type: 'p',
                text: 'We got an early start to make it to Mount Rainier in time to get a campsite at Cougar Rock, but the campground ended up being pretty empty anyway. For just a few seconds on the drive out of Yakima we had a full view of Mount Rainier, which was lucky because everything was totally fogged in when we arrived at the park. After setting up camp and having lunch, we hiked the Rampart Ridge Trail, and even got a bit of a view when the clouds cleared for a moment. It was a beautiful trail through tall trees.'
            },
            {
                type: 'img',
                alt: 'Julia walking up a trail through tall pine trees.',
                source: rampart_ridge_trail,
                caption: 'Beautiful forest, and totally different than everything we\'d seen so far',
                vert: true,
            },
            {
                type: 'img',
                alt: 'A view across a valley of forested mountains with clouds rolling off the peaks.',
                source: rampart_ridge_view,
                caption: 'View from Rampart Ridge',
            },
            {
                type: 'p',
                text: 'When we finished, it looked like it was clearing a little bit so we drove up to try and get a view of the mountain and check out Christine Falls.'
            },
            {
                type: 'img',
                alt: 'A view across of Mount Rainier, a glacier covered peak, mostly obscured by clouds.',
                source: mount_rainer,
                caption: 'The big one! (or at least some of it)',
            },
            {
                type: 'img',
                alt: 'A selfie of Lewis and Julia in front of a waterfall under a bridge.',
                source: christine_falls,
                caption: 'Christine Falls',
            },
        ]
    },
    {
        date: 'June 20th',
        day: 23,
        location: 'Mount Rainier National Park',
        hikingMiles: 4,
        content: [
            {
                type: 'p',
                text: 'It was quite rainy and foggy in the morning so we decided to hold off on going to Paradise until the afternoon, to give the fog some time to clear. We took a nice walk from right near our campsite to Carter Falls.'
            },
            {
                type: 'img',
                alt: 'A waterfall through some trees.',
                source: carter_falls,
                caption: 'Carter Falls',
                vert: true,
            },
            {
                type: 'p',
                text: 'After lunch, we decided to try our luck at the Paradise area but visibility was still really low so we ended up doing a shorter loop and checking out Myrtle Falls.'
            },
            {
                type: 'img',
                alt: 'Julia walking up a snowy ridge with very low visibility.',
                source: rainier_snow,
                caption: 'Hiking near Alta Vista Point',
            },
            {
                type: 'img',
                alt: 'Total white out beyond a few trees.',
                source: theory,
                caption: 'View of Mount Rainier (allegedly)',
            },
        ],
    },
    {
        date: 'June 21th',
        day: 24,
        location: 'Mount Rainier National Park - Olympic National Park',
        drivingMiles: 234.1,
        content: [
            {
                type: 'p',
                text: 'We had a fitting first day of summer today exploring some beaches (and a giant cedar tree) in Olympic National Park. We really felt the changing of the seasons given the snow and rain at Rainier! The beaches at Olympic were totally unlike anything I had ever seen, surrounded by tall evergreens, and we had a beautiful and relaxing afternoon.'
            },
            {
                type: 'img',
                alt: 'The ocean with an evergreen tree in the foreground.',
                source: kalaloch_beach,
                caption: 'Kalaloch Beach',
            },
            {
                type: 'img',
                alt: 'Julia walking down a trail surrounded by ferns, brush, and mossy trees.',
                source: otw_beach,
                caption: 'Trail to the beach',
            },
            {
                type: 'img',
                alt: 'An overlook down on a beach with stone formations in the water.',
                source: ruby_beach,
                caption: 'Ruby Beach',
            },
        ],
    },
    {
        date: 'June 22th',
        day: 25,
        location: 'Olympic National Park',
        hikingMiles: 4.8,
        content: [
            {
                type: 'p',
                text: 'Today we hiked Mount Storm King, a fairly short but very steep trail with panoramic views of Lake Crescent. The trail even had ropes at the top to help with the steep and slippery sections. The views were outstanding, and we were glad to be going down by the time the trail was in the sun and the day had heated up. We also stopped by Marymere Falls, a short hike from the Storm King trail.'
            },
            {
                type: 'img',
                alt: 'Julia scrambling up a rocky ridge.',
                source: j_storm_king,
                caption: 'Almost at the top!',
            },
            {
                type: 'img',
                alt: 'Lewis and Julia on the top of a mountain with an enormous view of Lake Crescent below.',
                source: mount_storm_king,
                caption: 'View from Mount Storm King',
            },
            {
                type: 'img',
                alt: 'A thin waterfall (wider at the bottom) over mossy rocks.',
                source: marymere_falls,
                caption: 'Marymere Falls',
                vert: true
            },
            {
                type: 'p',
                text: 'In the afternoon, we went to Port Angeles for lunch and ice cream, and put our feet in Lake Crescent.'
            },
            {
                type: 'img',
                alt: 'A clear lake with tree covered hills in the background.',
                source: lake_crescent,
                caption: 'Lake Crescent',
                vert: true
            },
        ],
    },
]

export default rainier_olympic;