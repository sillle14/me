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
                source: 'ute_cloud',
                caption: 'Starting the Ute trail in a cloud.',
            },
            {
                type: 'img',
                alt: 'Bright pink wildflowers poking out of some moss next to some snow.',
                source: 'ute_wildflower',
                caption: '"Wildflowers don\'t care where they grow"',
                vert: true
            },
            {
                type: 'img',
                alt: 'Julia walking on a trail with sparse snow. There are snow capped mountains in the background, tops in the clouds.',
                source: 'ute_j_hiking',
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
                source: 'bear_lake',
                caption: 'Bear Lake with Long\'s Peak in the background.',
            },
            {
                type: 'p',
                text: 'After walking around Bear Lake, we hiked up to Nymph, Dream, and Emerald lakes. There was a lot of snow above Dream Lake, and Emerald Lake was iced over. This section was pretty crowded.'
            },
            {
                type: 'img',
                alt: 'Dream Lake with pines and snow covered mountains in the background.',
                source: 'dream_lake',
                caption: 'Dream Lake',
                vert: true
            },
            {
                type: 'img',
                alt: 'Emerald Lake iced over with cliffs and snow covered mountains in the background.',
                source: 'emerald_lake',
                caption: 'When we were planning this months ago I thought we would be able to swim!.',
            },
            {
                type: 'p',
                text: ' We started up to Lake Haiyaha on a very snowy trail. There were some sketchy sections with a narrow trail above steep snow. It started to rain just after we started, and about 20 minutes in it turned to hail so we paused under some trees for cover. The hail got up to boba size.'
            },
            {
                type: 'img',
                alt: 'A photo through tree branches downhill of Julia turned toward a group of trees in a rain coat. You can see some hail on the ground.',
                source: 'waiting_out_hail',
                caption: 'Huddling under trees attempting to avoid hail. It kinda hurt!',
                vert: true
            },
            {
                type: 'p',
                text: 'It did clear up pretty well after the storm, so we decided to finish the hike up to the lake. Understandably, we saw a lot fewer folks up there. The weather held out for us to make it all the way down.'
            },
            {
                type: 'img',
                alt: 'Julia sitting on a rock with her arms raised in a triumphant position above Lake Haiyaha.',
                source: 'lake_haiyaha',
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
                text: 'Today we hiked Deer Mountain, which was closer to where we were staying and in a region of the park we knew had no snow. Nice to get a break and dry our feet! It was a beautiful sunny morning and all along the trail we had amazing views across the valley to the mountains.'
            },
            {
                type: 'img',
                alt: 'Julia looking out over a range of snow capped mountains.',
                source: 'deer_mountain',
                caption: 'Enjoying the view',
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
                text: 'We returned to the snowy side of the park today where we hiked up to The Loch along Glacier Gorge Trail. It was dry up until The Loch, but turned to pretty messy wet snow when we started hiking around. The Loch was beautiful, probably my favorite lake we hiked to.'
            },
            {
                type: 'img',
                alt: 'Lewis and Julia in front of a mountain lake with snowy mountains in the background.',
                source: 'the_loch',
                caption: 'The Loch.',
            },
            {
                type: 'p',
                text: 'We continued a ways up the trail and turned off on an unmaintained (and certainly unhiked in the past few days) trail. After a little bit of trail finding and only postholing once into a stream, we made it the long-feeling tenth of a mile to Embryo Lake, which we had all to ourselves. We had lunch and again made it back to the car before the rain.'
            },
            {
                type: 'img',
                alt: 'A small lake between boulders and a snowfield.',
                source: 'embryo_lake',
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
                text: 'With both of us nursing some aches and pains from walking through snow, we decided to do a bit of a rest day today. We walked the relatively flat part of Fern Lake Trail up to The Pool which was beautiful, especially in the early morning before it got hot. We saw tons of wildflowers along the trail (the area had been burned a few years ago).'
            },
            {
                type: 'img',
                alt: 'Small blue wildflowers on gravel.',
                source: 'fern_blue',
                caption: '',
                vert: true
            },
            {
                type: 'img',
                alt: 'Closeup of a white wildflower with yellow center.',
                source: 'fern_white',
                caption: '',
                vert: true
            },
            {
                type: 'img',
                alt: 'Small white wildflowers with yellow centers between the trail and a rock.',
                source: 'fern_daisyish',
                caption: '',
                vert: true
            },
            {
                type: 'img',
                alt: 'Close up of very small white wildflowers, some still just buds.',
                source: 'fern_small_white',
                caption: '',
                vert: true
            },
            {
                type: 'img',
                alt: 'Close up of two yellow dandelions.',
                source: 'fern_dandelion',
                caption: '',
            },
            {
                type: 'img',
                alt: 'Close up of many orange wildflowers on one stalk.',
                source: 'fern_orange',
                caption: '',
                vert: true
            },
            {
                type: 'img',
                alt: 'Close up of purple wildflowers with yellow centers, with a river in the background.',
                source: 'fern_purple',
                caption: '',
                vert: true
            },
            {
                type: 'p',
                text: 'After relaxing at camp for a while, we popped over to Rock Cut Brewery in Estes Park for some beers when it started to look like rain.'
            },
        ]
    },
    {
        date: 'June 10th',
        day: 13,
        location: 'Rocky Mountain National Park - Riverton, WY',
        drivingMiles: 344.5,
        content: [
            {
                type: 'p',
                text: 'We left the park today to start making our way toward Yellowstone, but took the route over Trail Ridge Road and on smaller highways rather than the interstate. It was great to drive through the park again, as the first time we drove that road it was pretty clouded in.'
            },
            {
                type: 'img',
                alt: 'Lewis driving on Trail Ridge Road with mountains in the background.',
                source: 'l_trail_ridge_road',
                caption: 'Trail Ridge Road',
            },
            {
                type: 'p',
                text: 'The rest of the driving was also really cool, with a rapidly changing landscape, rainstorms passing through, and lightning bolts in the distance. All in all, we crossed the continental divide four times!'
            },
            {
                type: 'img',
                alt: 'A photo taken out the windshield of a winding road through grassy hills.',
                source: 'northern_colorado',
                caption: 'Driving through northern Colorado',
            },
        ]
    },
    {
        date: 'June 11th',
        day: 14,
        location: 'Riverton, WY - Cody, WY',
        drivingMiles: 144.0,
        content: [
            {
                type: 'p',
                text: 'More nice driving today, with some beautiful scenery and relatively quiet roads. We just had a short journey today up to Cody to be ready to enter Yellowstone tomorrow morning. In Cody, we went for dinner at Pat O\'Hara Brewing, Wyoming\'s first all-women owned and operated brewery. They had a fantastic porter! We also went to the Cody Rodeo, which runs every night June through August.'
            },
            {
                type: 'img',
                alt: 'A photo through the windshield of a winding road through a canyon.',
                source: 'wind_river_canyon',
                caption: 'Driving through the Wind River Canyon',
            },
            {
                type: 'img',
                alt: 'A cowboy on a white bull, almost falling off.',
                source: 'rodeo',
                caption: 'Bull riding!',
            },
        ]
    },
]

export default rmnp
