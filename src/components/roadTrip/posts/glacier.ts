import trout_aquarium from '../../../assets/road-trip/trout_aquarium.jpeg'
import huckleberry_shake from '../../../assets/road-trip/huckleberry_shake.jpeg'
import grinnell_glacier_hike from '../../../assets/road-trip/grinell_glacier_hike.jpeg'
import bear_locale from '../../../assets/road-trip/bear_locale.jpeg'
import bear_grass from '../../../assets/road-trip/bear_grass.jpeg'
import iceberg_lake from '../../../assets/road-trip/iceberg_lake.jpeg'
import siyeh_pass from '../../../assets/road-trip/siyeh_pass.jpeg'
import unknown_lake from '../../../assets/road-trip/unknown_lake.jpeg'
import wild_goose_island from '../../../assets/road-trip/wild_goose_island.jpeg'
import east_logan_pass from '../../../assets/road-trip/east_logan_pass.jpeg'
import avalanche_lake from '../../../assets/road-trip/avalanche_lake.jpeg'
import mountain_goat from '../../../assets/road-trip/mountain_goat.jpeg'
import grinnell_glacier_overlook from '../../../assets/road-trip/grinnell_glacier_overlook.jpeg'
import highline_trail from '../../../assets/road-trip/highline_trail.jpeg'
import mighty_mos from '../../../assets/road-trip/mighty_mos.jpeg'

import { EntryType } from '../entryType';

const glacier: Array<EntryType> = [
    {
        date: 'June 26th',
        day: 29,
        location: 'Seattle, WA - Kalispell, MT',
        drivingMiles: 526.2,
        content: [
            {
                type: 'p',
                text: 'We had a long driving day today in order to get pretty close to Glacier. Even though we were mostly on the interstate, it was a nice drive through the mountains. We stopped for a delicious lunch in Coeur d\'Alene, Idaho at a cute Latin American sandwich place (Café Carambola). In Montana, we stopped at a pretty crazy visitor center in St. Regis, with a restaurant, gift shop, casino, trout aquarium, and ice cream shop.'
                
            },
            {
                type: 'img',
                alt: 'An aquarium with trout in front of a large poster of a mountain lake.',
                source: trout_aquarium,
                vert: true,
                caption: 'Trout Aquarium'
            },
            {
                type: 'img',
                alt: 'A selfie of Lewis and Julia drinking a purple shake with two straws.',
                source: huckleberry_shake,
                caption: 'Huckleberry Shake!'
            },
        ],
    },
    {
        date: 'June 27th',
        day: 30,
        location: 'Kalispell, MT - Glacier National Park',
        hikingMiles: 5,
        content: [
            {
                type: 'p',
                text: 'We arrived at Many Glacier Campground just in time to see a grizzly bear walk through our site, right where the tent would go! We had literally just gotten out of the car and neither of us had our phones on us so no pictures, unfortunately. We decided to go on a short hike before setting up and hiked a ways up the Grinnell Glacier trail, which was closed a few miles in due to unsafe snow bridges. It was a good thing we didn\'t set up as when we arrived back at the campground, it had been closed to all campers except hard sided RVs due to the bear. Luckily, we were able to find a site at another campground about 25 minutes away in Babb, MT.'
                
            },
            {
                type: 'img',
                alt: 'A campsite with an arrow pointed at the tent spot.',
                source: bear_locale,
                vert: true,
                caption: 'Where the bear was (too close for comfort for sure!)'
            },
            {
                type: 'img',
                alt: 'Julia hiking through a meadow with tall mountains in the background.',
                source: grinnell_glacier_hike,
                caption: 'Grinnell Glacier Hike'
            },
        ],
    },
    {
        date: 'June 28th',
        day: 31,
        location: 'Glacier National Park',
        hikingMiles: 9.8,
        content: [
            {
                type: 'p',
                text: 'We hiked up to Iceberg Lake today, a beautiful route mostly in a hillside meadow. The views and wildflowers were spectacular. It was a cloudy day which was nice to stay cool on the mostly exposed trail through the meadows, but it meant it was actually quite chilly at the top so neither of us were brave enough to swim in the lake (which, as expected, had icebergs floating in it and even just putting our feet in was verrrrry cold).'
                
            },
            {
                type: 'img',
                alt: 'A white multi blossomed flower in a cone-like shape in focus in the foreground with mountains out of focus in the background.',
                source: bear_grass,
                caption: 'Bear grass and views from the trail'
            },
            {
                type: 'img',
                alt: 'A calm mountain lake among cliffs with icebergs in it. The lake is very reflective so mirrors the mountains above.',
                source: iceberg_lake,
                caption: 'Iceberg Lake'
            },
            {
                type: 'p',
                text: 'By the time we got back to the car, it had warmed up so we did go for a quick dunk in (the much warmer) Swiftcurrent Lake.'
            }
        ],
    },
    {
        date: 'June 29th',
        day: 32,
        location: 'Glacier National Park',
        hikingMiles: 10,
        content: [
            {
                type: 'p',
                text: 'We started up the Siyeh Pass trail and then headed off on a social trail to climb Mount Siyeh. The class 3 scrambling ended up being even more difficult than we were expecting, so we turned back and headed up to the pass instead. There were breathtaking views in both directions at the pass.'
                
            },
            {
                type: 'img',
                alt: 'Julia hiking up a trail on a scree slope with mountains in the background.',
                source: siyeh_pass,
                caption: 'Hiking up to the pass'
            },
            {
                type: 'p',
                text: 'From the trail up to the pass, we saw a beautiful turquoise lake just a bit off the trail so we stopped by on the way down.'
            },
            {
                type: 'img',
                alt: 'A mountain lake with tall rocky mountains in the background.',
                source: unknown_lake,
                caption: 'Lake below the pass'
            },
        ],
    },
    {
        date: 'June 30th',
        day: 33,
        location: 'Glacier National Park',
        hikingMiles: 5,
        content: [
            {
                type: 'p',
                text: 'Our last two nights in Glacier were at Apgar Campground on the west side of the park, so we packed up camp and spent the morning driving Going to the Sun Road. The views from all parts of the road were amazing, and the architecture of the road itself (especially on the west side) as it wound through the cliffs was very impressive.'
                
            },
            {
                type: 'img',
                alt: 'A blue lake with a tiny green island in front of huge mountains.',
                source: wild_goose_island,
                caption: 'This tiny island has a name: Wild Goose Island'
            },
            {
                type: 'img',
                alt: 'A ridge line of rocky mountains in front of a green valley.',
                source: east_logan_pass,
                caption: 'Views just east of Logan Pass'
            },
            {
                type: 'p',
                text: 'In the afternoon, we stopped to hike to Avalanche Lake, which was surrounded by steep cliffs and multiple huge waterfalls. It was very hot by this point, so we took a quick dip in the lake.'
            },
            {
                type: 'img',
                alt: 'A selfie of Lewis and Julia in bathing suits in front of the lake.',
                source: avalanche_lake,
                caption: 'Avalanche Lake'
            },
        ],
    },
    {
        date: 'July 1st',
        day: 34,
        location: 'Glacier National Park',
        hikingMiles: 15,
        content: [
            {
                type: 'p',
                text: 'For our last big hike in the Rockies, we took the Highline Trail from Logan Pass to the Granite Park Chalet (a very scenic backcountry lodge). The trail had amazing views of the entire west side of Glacier.'
                
            },
            {
                type: 'img',
                alt: 'A white mountain goat sitting on a cliff side.',
                source: mountain_goat,
                caption: 'A mountain goat hanging out right by the trail'
            },
            {
                type: 'img',
                alt: 'Julia in the shade hiking on a trail. In the background, mountains across the valley are in the sun.',
                source: highline_trail,
                caption: 'The sun didn\'t reach us for quite a while on the west facing slope'
            },
            {
                type: 'p',
                text: 'On the way, we headed up a spur trail to the Grinnell Glacier Overlook, which was very steep but the breathtaking views at the top were worth it.'
            },
            {
                type: 'img',
                alt: 'A glacier and glacial lake with mountains in the background seen from a high pass.',
                source: grinnell_glacier_overlook,
                caption: 'Grinnell Glacier Overlook'
            },
            {
                type: 'p',
                text: 'After reaching the chalet, we added another spur trail up to Swiftcurrent Pass before hiking all the way down to Going to the Sun Road, where we took a shuttle back up to our car at Logan Pass.'
            },
        ],
    },
    {
        date: 'July 2nd',
        day: 35,
        location: 'Glacier National Park - Great Falls, MT',
        drivingMiles: 197.9,
        content: [
            {
                type: 'p',
                text: 'We drove over Going to the Sun Road again today as we headed west out of the park. It was a pretty short driving day so we had time to relax a bit when we got to Great Falls, before going to dinner at a brewery.'
                
            },
            {
                type: 'img',
                alt: 'Julia holding a beer.',
                source: mighty_mos,
                vert: true,
                caption: 'Mighty Mo Brew Pub'
            },
        ],
    }
] 

export default glacier