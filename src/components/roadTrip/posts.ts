// Heading West
import nay_aug_falls from '../../assets/road-trip/nay_aug_falls.jpeg'
import julia_paper_tower from '../../assets/road-trip/julia_paper_tower.jpeg'
import rebert from '../../assets/road-trip/rebert.jpeg'
import dianthus_barbatus from '../../assets/road-trip/dianthus_barbatus.jpeg'
import rock_garden from '../../assets/road-trip/rock_garden.jpeg'
import st_louis_arch from '../../assets/road-trip/st_louis_arch.jpeg'
import pitchfork from '../../assets/road-trip/pitchfork.jpeg'
import st_louis_sculpture from '../../assets/road-trip/st_louis_sculpture.jpeg'
import fulton_lunch from '../../assets/road-trip/fulton_lunch.jpeg'
import buckeye_butterfly from '../../assets/road-trip/buckeye_butterfly.jpg'
import kc_skyline from '../../assets/road-trip/kc_skyline.jpeg'
import ks_driving from '../../assets/road-trip/ks_driving.jpeg'
import denver_duck from '../../assets/road-trip/denver_duck.jpeg'
import ira_denver from '../../assets/road-trip/ira_denver.jpeg'
import hanna from '../../assets/road-trip/hanna.jpeg'
import rainy_drive from '../../assets/road-trip/rainy_drive.jpeg'

// RMNP
import ute_cloud from '../../assets/road-trip/ute_cloud.jpeg'
import ute_wildflower from '../../assets/road-trip/ute_wildflower.jpeg'
import ute_j_hiking from '../../assets/road-trip/ute_j_hiking.jpeg'
import bear_lake from '../../assets/road-trip/bear_lake.jpeg'
import dream_lake from '../../assets/road-trip/dream_lake.jpeg'
import emerald_lake from '../../assets/road-trip/emerald_lake.jpeg'
import waiting_out_hail from '../../assets/road-trip/waiting_out_hail.jpeg'
import lake_haiyaha from '../../assets/road-trip/haiyaha_lake.jpeg'

import { EntryType } from './entryType'

const posts: Array<EntryType> = [
    {
        date: 'May 29th',
        day: 1,
        location: 'Boston, MA - Akron, OH',
        drivingMiles: 648.9,
        content: [
            {
                type: 'p',
                text: 'We started our six week trip today! From Boston, we drove out to Scranton, PA where we had lunch in Nay Aug park and checked out the paper tower from The Office. Then we drove through the rest of PA (over the highest point on Route 80 east of the Mississippi) and stopped for the night in Akron, OH.'
            },
            {
                type: 'img',
                alt: 'A waterfall in Nay Aug Park.',
                source: nay_aug_falls,
                caption: 'Waterfall in Nay Aug Park'
            },
            {
                type: 'img',
                alt: 'Julia in front of the Penn paper tower from The Office credits.',
                source: julia_paper_tower,
                caption: 'Queue the theme from The Office...'
            },
        ]
    },
    {
        date: 'May 30th',
        day: 2,
        location: 'Akron, OH - St. Louis, MO',
        drivingMiles: 547.8,
        content: [
            {
                type: 'p',
                text: 'We\'ve made it across the Mississippi! Another fairly long day of driving, but we drove by/stopped at a number of interesting sites, including the Hartman Rock Garden, the world\'s largest pitchfork, the world\'s largest token coin (actually this was just a round sign for a bank), a cafe advertising foot high pies (unfortunately right after we\'d already stopped for dinner), and the Paul Simon Freeway (not that Paul Simon). In between it all, we had another great lunch stop at Rebert Pike Nature Park in Springfield, OH. We made it to St. Louis in time to get some ice cream, and the Gooey Butter Cake flavor did not disappoint.'
            },
            {
                type: 'img',
                alt: 'Lewis walking on a boardwalk in Rebert Pike Nature Park.',
                source: rebert,
                caption: 'Walking around Rebert Pike Nature Park',
                vert: true
            },
            {
                type: 'img',
                alt: 'Dianthus Barbatus flowers in Rebert Pike Nature Park.',
                source: dianthus_barbatus,
                caption: 'Beautiful flowers at the park',
                vert: true
            },
            {
                type: 'img',
                alt: 'The Hartman Rock Garden.',
                source: rock_garden,
                caption: 'Hartman Rock Garden',
            },
            {
                type: 'img',
                alt: 'The world\'s largest pitchfork.',
                source: pitchfork,
                caption: 'The world\'s largest pitchfork',
            },
            {
                type: 'img',
                alt: 'The St. Louis Arch in a photo taken from a car while driving into the city.',
                source: st_louis_arch,
                caption: 'Just across the Mississippi driving into St. Louis'
            }
        ]
    },
    {
        date: 'May 31st',
        day: 3,
        location: 'St. Louis, MO - Mission, KS',
        drivingMiles: 259.6,
        content: [
            {
                type: 'p',
                text: 'With slightly less driving on our plate today, we spent a couple of hours walking around Forest Park in St. Louis before heading out. Unfortunately we were leaving too early to check out the art museum but still got to see some sculptures and flowers. We drove across Missouri, stopping in Fulton, MO for lunch and then arrived in Kansas City where we spent the evening with Julia\'s extended family, Ruth, David, and Nancy.'
            },
            {
                type: 'img',
                alt: 'A sculpture in Forest Park, St. Louis.',
                source: st_louis_sculpture,
                caption: 'Sculpture garden in Forest Park'
            },
            {
                type: 'img',
                alt: 'Julia sitting at a picnic table in Fulton, MO with cherries, bread, and hummus.',
                source: fulton_lunch,
                caption: 'Lunch in Fulton'
            },
        ]
    },
    {
        date: 'June 1st',
        day: 4,
        location: 'Kansas City, MO',
        content: [
            {
                type: 'p',
                text: 'We spent the day seeing the sights and visiting with Julia\'s family in Kansas City. We saw a bunch of beautiful flowers and plants (as well as the resident cat) in Kauffman Memorial Garden, more flowers at the rose garden in Loose Park, and paintings by Thomas Hart Benton (among other artists) at the Nelson-Atkins Museum of Art. We also rode through downtown on the street car, and walked around Union Station, which was one of the best Union Stations I\'ve seen!'
            },
            {
                type: 'img',
                alt: 'A closeup of a buckeye butterfly on a small plant.',
                source: buckeye_butterfly,
                caption: 'Buckeye butterfly in Kauffman Memorial Garden',
                vert: true
            },
            {
                type: 'img',
                alt: 'The Kansas City skyline from the World War I memorial.',
                source: kc_skyline,
                caption: 'The Kansas City skyline'
            },
        ]
    },
    {
        date: 'June 2nd',
        day: 5,
        location: 'Mission, KS - Denver, CO',
        drivingMiles: 610.3,
        content: [
            {
                type: 'p',
                text: 'Another long driving day today, through all of Kansas and a bit of Colorado. This was the most different from driving back east, with hundreds of miles of grassland and wheat fields. The wide open expanses and enormous sky were spectacular, especially with thunderstorms rolling through. Near Denver, Julia spotted the sign for the "scenic route" along Route 86 which was a nice change from the interstate and very beautiful. And of course no driving day would be complete without a lunch in a park: today we ate in the rain in a park shelter in Hays, KS.'
            },
            {
                type: 'img',
                alt: 'A selfie taken by Lewis of him and Julia in the car. Julia is driving.',
                source: ks_driving,
                caption: 'On the road in West Kansas',
            },
        ]
    },
    {
        date: 'June 3rd',
        day: 6,
        location: 'Denver, CO',
        content: [
            {
                type: 'p',
                text: 'A pretty rainy but nonetheless lovely day in Denver. We checked out a farmers\' market, and walked around a bit downtown (another Union Station!) before meeting up with our friend Ira. He took us to a great lunch spot (I got a beet reuben which was fantastic), the Denver Botanic Gardens, and a brewery.'
            },
            {
                type: 'img',
                alt: 'A fountain in a pool in the Denver Botanic Gardens. There is a male mallard in the water flapping his wings in the foreground.',
                source: denver_duck,
                caption: 'Denver Botanic Gardens',
            },
            {
                type: 'img',
                alt: 'A selfie of Lewis, Ira, and Julia in the Denver Botanic Gardens.',
                source: ira_denver,
                caption: 'There was an adorable duckling in the pond behind us but I couldn\'t get a good picture.',
            },
        ]
    },
    {
        date: 'June 4th',
        day: 7,
        location: 'Denver, CO - Estes Park, CO',
        drivingMiles: 80.5,
        content: [
            {
                type: 'p',
                text: 'Another rainy day for our drive up to Estes Park. We tried to take a slightly more scenic route but couldn\'t even really see the mountains due to the rain. We met up with my cousin Hanna for lunch in Boulder. In Estes Park, we got dinner at the "You Need Pie" diner where we did in fact need pie, which was tasty. By the time we were done with dinner, the rain had cleared and we got our first real view of the Rockies! Very excited to get into the park tomorrow.'
            },
            {
                type: 'img',
                alt: 'A selfie of Lewis, Julia, and Hanna.',
                source: hanna,
                caption: 'Rainy in Boulder',
            },
            {
                type: 'img',
                alt: 'A view out the front windshield of a car. It\'s quite rainy.',
                source: rainy_drive,
                caption: 'On the road to Estes Park',
            },
        ]
    },
    {
        date: 'June 5th',
        day: 8,
        location: 'Rocky Mountain National Park',
        hikingMiles: 4,
        content: [
            {
                type: 'p',
                text: 'Today was our first day in Rocky Mountain National Park. There was blue sky in the morning but when we stopped for a short hike on the Ute trail, we were completely enveloped in a cloud. It cleared by the end though, and we got some fantastic views.'
            },
            {
                type: 'img',
                alt: 'A rocky and snow covered trail with a low cloud obscuring any views.',
                source: ute_cloud,
                caption: 'Starting the Ute trail in a cloud.',
            },
            {
                type: 'img',
                alt: 'Bright pink wildflowers poking out of some moss next to some snow.',
                source: ute_wildflower,
                caption: '"Wildflowers don\'t care where they grow"',
                vert: true
            },
            {
                type: 'img',
                alt: 'Julia walking on a trail with sparse snow. There are snow capped mountains in the background, tops in the clouds.',
                source: ute_j_hiking,
                caption: 'The clouds lifted and we could see some mountain views by the end.',
            },
            {
                type: 'p',
                text: 'We drove up to the Alpine Visitor Center (highest visitor center in all the national parks at 11,796\'), and then over to the continental divide. I was definitely feeling the altitude a bit, but nothing too serious. We arrived at our campground in the afternoon, where we had to wait out a heavy thunderstorm in the car before setting up camp.'
            },
        ]
    },
    {
        date: 'June 6th',
        day: 9,
        location: 'Rocky Mountain National Park',
        hikingMiles: 6.4,
        content: [
            {
                type: 'p',
                text: 'We hiked to five lakes today, all very beautiful. The Bear Lake parking lot apparently filled up at ~5:30am (!!!) so we took the shuttle from the larger lot down the road. Bear Lake was incredibly picturesque (the magnet we bought has a photo taken there).'
            },
            {
                type: 'img',
                alt: 'A selfie of Lewis and Julia in front of Bear Lake with snow capped Long\'s Peak in the background.',
                source: bear_lake,
                caption: 'Bear Lake with Long\'s Peak in the background.',
            },
            {
                type: 'p',
                text: 'After walking around Bear Lake, we hiked up to Nymph, Dream, and Emerald lakes. There was a lot of snow above Dream Lake, and Emerald Lake was iced over. This section was pretty crowded.'
            },
            {
                type: 'img',
                alt: 'Dream Lake with pines and snow covered mountains in the background.',
                source: dream_lake,
                caption: 'Dream Lake',
                vert: true
            },
            {
                type: 'img',
                alt: 'Emerald Lake iced over with cliffs and snow covered mountains in the background.',
                source: emerald_lake,
                caption: 'When we were planning this months ago I thought we would be able to swim!.',
            },
            {
                type: 'p',
                text: ' We started up to Lake Haiyaha on a very snowy trail. There were some quite sketchy sections with a very narrow trail above really steep snow. It started to rain just after we started, snd about 20 minutes in it turned to hail so we paused under some trees for cover. The hail got up to boba size.'
            },
            {
                type: 'img',
                alt: 'A photo through tree branches downhill of Julia turned toward a group of trees in a rain coat. You can see some hail on the ground.',
                source: waiting_out_hail,
                caption: 'Huddling under trees attempting to avoid hail. It kinda hurt!',
                vert: true
            },
            {
                type: 'p',
                text: 'It did clear up pretty well after so we decided to finish the hike up to the lake. Understandably, we saw a lot less folks up there. The weather held out for us to make it all the way down.'
            },
            {
                type: 'img',
                alt: 'Julia sitting on a rock with her arms raised in a triumphant position above Lake Haiyaha.',
                source: lake_haiyaha,
                caption: 'We made it!',
            },
        ]
    },
]

export default posts
