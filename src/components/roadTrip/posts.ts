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
]

export default posts
