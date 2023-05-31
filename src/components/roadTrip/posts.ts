import nay_aug_falls from '../../assets/road-trip/nay_aug_falls.jpeg'
import julia_paper_tower from '../../assets/road-trip/julia_paper_tower.jpeg'
import rebert from '../../assets/road-trip/rebert.jpeg'
import dianthus_barbatus from '../../assets/road-trip/dianthus_barbatus.jpeg'
import rock_garden from '../../assets/road-trip/rock_garden.jpeg'
import st_louis_arch from '../../assets/road-trip/st_louis_arch.jpeg'
import pitchfork from '../../assets/road-trip/pitchfork.jpeg'
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
    }
]

export default posts
