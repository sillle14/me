import { EntryType } from '../entryType'

const heading_east: Array<EntryType> = [
    {
        date: 'July 3rd',
        day: 36,
        location: 'Great Falls, MT - Rapid City, SD',
        drivingMiles: 546.7,
        content: [
            {
                type: 'p',
                text: 'We crossed the rest of Montana and a tiny corner of Wyoming on our way to Rapid City today. It was nice driving for the most part, but sad to leave the Rockies behind. We did see our first sign for Wall Drug (still at 200 miles away).'
                
            },
            {
                type: 'img',
                alt: 'A wide two-tiered waterfall below a dam.',
                source: 'great_falls',
                caption: 'The Falls in Great Falls'
            },
        ],
    },
    {
        date: 'July 4th',
        day: 37,
        location: 'Rapid City, SD - Badlands National Park',
        drivingMiles: 178.5,
        content: [
            {
                type: 'p',
                text: 'We spent a fitting Fourth of July morning at Mount Rushmore. When we arrived, the mountain was entirely in a cloud, but luckily cleared up before we left. We also spent some time at the nearby Crazy Horse Memorial, another mountain sculpture which is only partly complete. Both sculptures had interesting visitor centers, where we learned about the building processes and history.'
            },
            {
                type: 'img',
                alt: 'Washington, Jefferson, Teddy Roosevelt, and Lincoln carved into a mountain.',
                source: 'mount_rushmore',
                caption: 'Mount Rushmore'
            },
            {
                type: 'img',
                alt: 'A face and the beginning of a pointing arm carved into a mountain.',
                source: 'crazy_horse',
                caption: 'Crazy Horse Memorial (in progress)'
            },
            {
                type: 'p',
                text: 'After lunch, we finally drove through Wall and stopped at Wall Drug, after seeing about a hundred more billboards on the highway. It was quite a place, with many gift shops, a soda fountain, cafe, museum, of course a drug store, and much more! My favorite part was the traveler\'s chapel, which was completely empty and quiet amidst a hectic place.'
            },
            {
                type: 'img',
                alt: 'A selfie of Lewis and Julia in front of a huge storefront for Wall Drug.',
                source: 'wall_drug',
                caption: 'Wall Drug'
            },
            {
                type: 'img',
                alt: 'A narrow chapel with a wooden ceiling and brick walls.',
                source: 'travelers_chapel',
                caption: 'Traveler\'s Chapel',
                vert: true
            },
            {
                type: 'p',
                text: 'After getting some groceries for dinner, we made it to the Badlands, where we had time for a few short hikes before it got dark.'
            },
            {
                type: 'img',
                alt: 'A few rock formations in light rock in a plain with some sunset colors through the clouds.',
                source: 'badlands_sunset',
                caption: 'The sun starting to set in the Badlands'
            },
        ],
    },
    {
        date: 'July 5th',
        day: 38,
        location: 'Badlands National Park - Sioux Falls, SD',
        drivingMiles: 328.4,
        hikingMiles: 6.6,
        content: [
            {
                type: 'p',
                text: 'After packing up camp, we went on a hike in the morning through some more badlands formations and along the edge of the prairie. The formations were very cool, and we saw a ton of wild flowers in the grasses along the trail.'
            },
            {
                type: 'img',
                alt: 'Rock formations in front of a blue sky with lots of clouds.',
                source: 'castle_trail',
                caption: 'Badlands formations along the Castle Trail'
            },
            {
                type: 'img',
                alt: 'A bright pink flower with many very thin petals.',
                source: 'thistle',
                caption: 'Thistle',
                vert: true
            },
            {
                type: 'img',
                alt: 'A yellow flower growing from a cactus.',
                source: 'prickly_pear',
                caption: 'Prickly Pear Cactus'
            },
            {
                type: 'p',
                text: 'After the hike, we drove the rest of the scenic loop through the Badlands, before heading east to Sioux Falls.'
            },
        ],
    },
    {
        date: 'July 6th',
        day: 39,
        location: 'Sioux Falls, SD - Madison, WI',
        drivingMiles: 438.1,
        content: [
            {
                type: 'p',
                text: 'We made it back across the Mississippi today! It was a pretty uneventful drive, through lots of corn, and we stopped in St. Charles, MN for lunch. In Madison, we had a lovely dinner with my Grandma Eileen (and wished her a belated 95th birthday!).'
                
            },
            {
                type: 'img',
                alt: 'A selfie of Lewis, Julia, and Grandma Eileen.',
                source: 'grandma',
                caption: 'Visiting with Grandma'
            },
        ],
    },
    {
        date: 'July 7th',
        day: 40,
        location: 'Madison, WI',
        content: [
            {
                type: 'p',
                text: 'We spent the morning sharing photos from our trip with Grandma Eileen. Julia and I also went on a walk around Madison, down to Lake Mendota. In the afternoon, Grandma and I went to the Shabbat services in her retirement community which was really nice. And no visit would be complete without a few games of Rummikub in the evening!'
                
            },
            {
                type: 'img',
                alt: 'A flower box with purple, red, and yellow flowers.',
                source: 'madison_flowers',
                caption: 'Flowers in Madison'
            },
        ],
    },
    {
        date: 'July 8th',
        day: 41,
        location: 'Madison, WI - Perrysburg, OH',
        drivingMiles: 393.4,
        content: [
            {
                type: 'p',
                text: 'This morning, we walked through the arts fair around Madison\'s capitol building. While I was sad to miss the farmer\'s market which is usually on Saturdays (and especially the spicy cheese bread!), there was a lot of beautiful art to see.'
                
            },
            {
                type: 'img',
                alt: 'A street crowded with pedestrians lined with white tents with hanging art.',
                source: 'art_fair',
                caption: 'The Art Fair'
            },
            {
                type: 'p',
                text: 'On the drive to Ohio, we stopped in Goshen, IN where Julia\'s paternal grandmother grew up. On the road out of Goshen, we saw a bunch of horse drawn carriages in the road, used by the nearby Amish and Menonnite.'
            },
            {
                type: 'img',
                alt: 'A horse drawn carriage in the oncoming traffic lane taken through the windshield.',
                source: 'horse_drawn',
                caption: 'Horse drawn carriage on the road'
            },
        ],
    },
    {
        date: 'July 9th',
        day: 42,
        location: 'Perrysburg, OH - Niagara Falls, ON',
        drivingKilometers: 497.8,
        content: [
            {
                type: 'p',
                text: 'We drove up through Detroit and then part of Ontario today on our way to Niagara Falls. The town of Niagara Falls was really crowded and full of tourist attractions, included go-karts (with a falls view), a casino (with a falls view), mini-golf (with a falls view) and more! It was pretty overwhelming coming from the mountains just a few days ago. The falls themselves were amazing though!'
                
            },
            {
                type: 'img',
                alt: 'A selfie of Lewis and Julia in front of two huge waterfalls.',
                source: 'niagara_falls',
                caption: 'Niagara Falls'
            },
        ],
    },
]

export default heading_east;
