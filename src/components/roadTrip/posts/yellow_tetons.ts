import { EntryType } from '../entryType'

const yellow_tetons: Array<EntryType> = [
    {
        date: 'June 12th',
        day: 15,
        location: 'Yellowstone National Park',
        content: [
            {
                type: 'p',
                text: 'For our first day in Yellowstone, we saw Yellowstone Lake, the Mud Volcano area, and spent most of our time at the Grand Canyon of the Yellowstone (my second Grand Canyon which is not the Grand Canyon - shout out to the Little Grand Canyon in Utah). The geothermal features, even just along the road, were pretty amazing to see. The Grand Canyon was also spectacular, with great views of the rushing river and falls at the bottom. Yellowstone\'s reputation for wildlife did not disappoint and we saw bison and a black bear as well.'
            },
            {
                type: 'img',
                alt: 'Steam coming out of a spring/pool in the ground.',
                source: 'dragons_mouth',
                caption: 'The Dragon\'s Mouth, which reminded me of the lair of the killer rabbit',
            },
            {
                type: 'img',
                alt: 'A selfie of Lewis and Julia in front of a deep canyon with rushing water.',
                source: 'grand_canyon_yellowstone',
                caption: 'The Grand Canyon of the Yellowstone',
            },
        ]
    },
    {
        date: 'June 13th',
        day: 16,
        location: 'Yellowstone National Park',
        content: [
            {
                type: 'p',
                text: 'We started the day at Old Faithful and waited for an eruption. I unfortunately couldn\'t get a great picture since it was pretty cold, and the steam coming off the water and the water itself all looked like one big cloud. We also saw a bunch of other cool geothermal features around Old Faithful.'
            },
            {
                type: 'img',
                alt: 'Steam and hot water coming out of the ground.',
                source: 'old_faithful',
                caption: 'Old Faithful',
                vert: true
            },
            {
                type: 'img',
                alt: 'A deep, blue hot spring with two steaming geysers in the background.',
                source: 'near_old_faithful',
                caption: 'Some features near Old Faithful',
            },
            {
                type: 'p',
                text: 'We then continued north to the Grand Prismatic Spring, and then up to Mammoth Hot Springs where we walked around the Terraces, really geothermal formations.'
            },
            {
                type: 'img',
                alt: 'A steaming pool with some orange, green, and blue steam near the edges.',
                source: 'grand_prismatic_spring',
                caption: 'Grand Prismatic Spring',
            },
            {
                type: 'img',
                alt: 'A bison walking on the highway.',
                source: 'bison',
                caption: 'On the way, we encountered a bison walking down the road in the opposite direction.'
            },
            {
                type: 'img',
                alt: 'An orange and white formation with small cones on top.',
                source: 'terraces',
                caption: 'Terraces near Mammoth Hot Springs'
            },
            {
                type: 'p',
                text: 'My favorite part of the day was driving through Lamar Valley, where we saw countless more bison (including calves), and even a pair of bears.'
            },
            {
                type: 'img',
                alt: 'Julia looking out over a river and field with tons of bison.',
                source: 'lamar_valley',
                caption: 'Lamar Valley'
            },
        ]
    },
    {
        date: 'June 14th',
        day: 17,
        location: 'Yellowstone National Park - Grand Teton National Park',
        content: [
            {
                type: 'p',
                text: 'We woke up to a rainy morning in Yellowstone, and packed up camp and headed down to the Tetons. We stopped in Jackson for lunch, before going to Jenny Lake to set up. It was a beautiful campground, with views of the mountains just outside our site. We walked down to the lake to put our feet in and take in the mountain views.'
            },
            {
                type: 'img',
                alt: 'The Tetons through some pine trees across Jenny Lake.',
                source: 'jenny_lake',
                caption: 'View from the lake trail close to our campground',
            },
        ]
    },
    {
        date: 'June 15th',
        day: 18,
        location: 'Grand Teton National Park',
        hikingMiles: 14.4,
        content: [
            {
                type: 'p',
                text: 'Today we planned on taking the boat shuttle across Jenny Lake and then hiking the Cascade Canyon Trail up to the fork, but we made great time up to the fork so we decided to continue on up to Lake Solitude. The views from the canyon were spectacular east to Jenny Lake and south to the Grand Teton. The trail for the last mile and a half was completely covered in snow, so it was pretty slow going navigating the steep sections. The lake itself was covered in snow, and a beautiful place to eat lunch. We ended up having to wait almost 45 minutes for the boat shuttle back (and after 14 miles definitely didn\'t want to walk instead), so we treated ourselves to a pizza dinner at Leeks Marina. Delicious and we didn\'t have to do dishes!'
            },
            {
                type: 'img',
                alt: 'A female moose walking across a trail.',
                source: 'cascade_moose',
                caption: 'On the way, we saw a cow moose walking across the trail behind us',
            },
            {
                type: 'img',
                alt: 'The Grand Teton in the background of a trail winding through scrubby bushes and pines.',
                source: 'grand_teton',
                caption: 'The Grand Teton from the north fork of Cascade Canyon',
            },
            {
                type: 'img',
                alt: 'Julia hiking through the snow.',
                source: 'julia_in_snow',
                caption: 'Snow for the last mile and a half',
            },
            {
                type: 'img',
                alt: 'A snow covered lake surrounded by cliffs.',
                source: 'lake_solitude',
                caption: 'Lake Solitude',
            },
        ]
    },
    {
        date: 'June 16th',
        day: 19,
        location: 'Grand Teton National Park',
        hikingMiles: 7.6,
        content: [
            {
                type: 'p',
                text: 'We hiked up to Delta Lake today. The first part of the hike was a beautiful walk with amazing views of the valley and plentiful wildflowers. We also saw a cinnamon black bear cub near the trail (but no sign of any parents!). The last mile of the hike was on an unmaintained social trail, which was pretty steep and crossed a few boulder fields. It started to hail right as we reached the lake so we kept it pretty short to head down before everything got too slippery, but it ended up being just a passing shower. We missed some of the best views up top since the Tetons were in the fog, but it was still beautiful.'
            },
            {
                type: 'img',
                alt: 'Purple lupine in a field of scrub grass.',
                source: 'lupine',
                caption: 'Lupine',
                vert: true
            },
            {
                type: 'img',
                alt: 'A light colored black bear with it\'s face in the ground among greenery.',
                source: 'bear',
                caption: 'The bear was digging for some sort of root',
            },
            {
                type: 'img',
                alt: 'Julia hiking amid many yellow flowers.',
                source: 'j_yellow_flowers',
                caption: 'Beautiful flowers all the way up!',
            },
            {
                type: 'img',
                alt: 'A partially snow covered lake with fogged in mountains around it.',
                source: 'delta_lake',
                caption: 'Delta Lake',
            },
        ]
    },
    {
        date: 'June 17th',
        day: 20,
        location: 'Grand Teton National Park - Boise, ID',
        drivingMiles: 367.9,
        content: [
            {
                type: 'p',
                text: 'We took one last walk admiring the views along Jenny Lake before packing up and heading to Idaho. The driving through Idaho was very cool, with mountains, fields, and other interesting landscapes, especially around Craters of the Moon. We stopped in Idaho Falls for lunch and to see some places from Julia\'s dad\'s childhood there.'
            },
            {
                type: 'img',
                alt: 'A very wide waterfall. The top part is a dam and the bottom through rocks.',
                source: 'idaho_falls',
                caption: 'Idaho Falls',
            },
        ]
    },
    {
        date: 'June 18th',
        day: 21,
        location: 'Boise, ID - Yakima, WA',
        drivingMiles: 379.4,
        content: [
            {
                type: 'p',
                text: 'Today we drove through my father\'s home town of Richland, WA on the way to Yakima. It was another nice day of driving, through some mountains and then down into the farmland of Eastern Washington. We stopped for lunch at a diner in North Powder, OR.'
            },
            {
                type: 'img',
                alt: 'A picture taken through the car windshield of the road winding through some hills.',
                source: 'oregon_road',
                caption: 'On the road in Oregon',
            },
        ]
    },
]

export default yellow_tetons