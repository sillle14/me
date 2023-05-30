import nay_aug_falls from '../../assets/road-trip/nay_aug_falls.jpeg'
import julia_paper_tower from '../../assets/road-trip/julia_paper_tower.jpeg'
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
    }
]

export default posts
