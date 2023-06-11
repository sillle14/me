import ute_cloud from '../../../assets/road-trip/ute_cloud.jpeg'
import ute_wildflower from '../../../assets/road-trip/ute_wildflower.jpeg'
import ute_j_hiking from '../../../assets/road-trip/ute_j_hiking.jpeg'
import bear_lake from '../../../assets/road-trip/bear_lake.jpeg'
import dream_lake from '../../../assets/road-trip/dream_lake.jpeg'
import emerald_lake from '../../../assets/road-trip/emerald_lake.jpeg'
import waiting_out_hail from '../../../assets/road-trip/waiting_out_hail.jpeg'
import lake_haiyaha from '../../../assets/road-trip/haiyaha_lake.jpeg'
import deer_mountain from '../../../assets/road-trip/deer_mountain.jpeg'
import the_loch from '../../../assets/road-trip/the_loch.jpeg'
import embryo_lake from '../../../assets/road-trip/embryo_lake.jpeg'
import fern_blue from '../../../assets/road-trip/fern_blue.jpeg'
import fern_white from '../../../assets/road-trip/fern_white.jpeg'
import fern_daisyish from '../../../assets/road-trip/fern_daisyish.jpeg'
import fern_small_white from '../../../assets/road-trip/fern_small_white.jpeg'
import fern_dandelion from '../../../assets/road-trip/fern_dandelion.jpeg'
import fern_orange from '../../../assets/road-trip/fern_orange.jpeg'
import fern_purple from '../../../assets/road-trip/fern_purple.jpeg'

import { EntryType } from '../entryType'

const rmnp: Array<EntryType> = [
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
    {
        date: 'June 7th',
        day: 10,
        location: 'Rocky Mountain National Park',
        hikingMiles: 6,
        content: [
            {
                type: 'p',
                text: 'Today we hiked Deer Mountain, which we closer to where we were staying and in a region of the park we knew had no snow. Nice to get a break and dry our feet! It was a beautiful sunny morning and all along the trail we had amazing views across the valley to the mountains.'
            },
            {
                type: 'img',
                alt: 'Julia looking out over a range of snow capped mountains.',
                source: deer_mountain,
                caption: 'Enjoying the view.',
            },
        ]
    },
    {
        date: 'June 8th',
        day: 11,
        location: 'Rocky Mountain National Park',
        hikingMiles: 7.6,
        content: [
            {
                type: 'p',
                text: 'We returned to the snowy side of the park today where we hiked up to The Loch along Glacier Gorge Trail. It was dry up until The Loch, but turned to pretty messy wet snow when we started hiking around.'
            },
            {
                type: 'img',
                alt: 'Lewis and Julia in front of a mountain lake with snowy mountains in the background.',
                source: the_loch,
                caption: 'The Loch.',
            },
            {
                type: 'p',
                text: 'We continued a ways up the trail and turned off on a unmaintained (and certainly unhiked in the past few days) trail. After a little bit of trail finding and only postholing once into a stream, we made it the long feeling tenth of a mile to Embryo Lake, which we had all to ourselves. We had lunch and again made it back to the car before the rain.'
            },
            {
                type: 'img',
                alt: 'A small lake between boulders and a snowfield.',
                source: embryo_lake,
                caption: 'Aptly named Embryo Lake.',
            },
        ]
    },
    {
        date: 'June 9th',
        day: 12,
        location: 'Rocky Mountain National Park',
        hikingMiles: 3.3,
        content: [
            {
                type: 'p',
                text: 'With both of us nursing some aches and pains from walking through snow, we decided to do a bit of a rest day today. We walked the relatively flat park of Fern Lake Trail up to The Pool which was beautiful, especially in the early morning before it got hot. We saw tons of wildflowers along the trail (the area had been burned a few years ago).'
            },
            {
                type: 'img',
                alt: 'Small blue wildflowers on gravel.',
                source: fern_blue,
                caption: '',
                vert: true
            },
            {
                type: 'img',
                alt: 'Closeup of a white wildflower with yellow center.',
                source: fern_white,
                caption: '',
                vert: true
            },
            {
                type: 'img',
                alt: 'Small white wildflowers with yellow centers between the trail and a rock.',
                source: fern_daisyish,
                caption: '',
                vert: true
            },
            {
                type: 'img',
                alt: 'Close up of very small white wildflowers, some still just buds.',
                source: fern_small_white,
                caption: '',
                vert: true
            },
            {
                type: 'img',
                alt: 'Close up of two yellow dandelions.',
                source: fern_dandelion,
                caption: '',
            },
            {
                type: 'img',
                alt: 'Close up of many orange wildflowers on one stalk.',
                source: fern_orange,
                caption: '',
                vert: true
            },
            {
                type: 'img',
                alt: 'Close up of purple wildflowers with yellow centers, with a river in the background.',
                source: fern_purple,
                caption: '',
                vert: true
            },
            {
                type: 'p',
                text: 'After relaxing at camp for a while, we popped over to Rock Cut Brewery in Estes Park for some beers when it started to look like rain.'
            },
        ]
    },
]

export default rmnp
