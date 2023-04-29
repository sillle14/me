import odometer from '../../assets/road-trip/odometer.jpeg'

const posts = [
    {
        date: 'May 29th',
        day: 1,
        location: 'Boston, MA - Akron, OH',
        drivingMiles: 100,
        hikingMiles: 10,
        content: [
            {
                type: 'p' as 'p',
                text: 'This is the first paragraph. On this first day of driving, we did a bunch of things. Also, francesca is the best cat ever and we miss her already. Also, there are some more things to say. And we also want to keep going with this blog and yaddy yaddy yah and etc etc. Is this enough to break the line?'
            },
            {
                type: 'img' as 'img',
                alt: 'cat',
                source: odometer,
                caption: 'This is Francesca'
            },
            {
                type: 'p' as 'p',
                text: 'This is the next paragraph'
            },
        ]
    },
    {
        date: 'May 29th',
        day: 2,
        location: 'Boston, MA - Akron, OH',
        drivingMiles: 100,
        hikingMiles: 10,
        content: [
            {
                type: 'p' as 'p',
                text: 'This is the first paragraph. On this first day of driving, we did a bunch of things. Also, francesca is the ' +
                'best cat ever and we miss her already. Also, there are some more things to say. And we also want to keep going with this ' +
                'blog and yaddy yaddy yah and etc etc. Is this enough to break the line?'
            },
            {
                type: 'img' as 'img',
                alt: 'cat',
                source: odometer,
                caption: 'This is Francesca'
            },
            {
                type: 'p' as 'p',
                text: 'This is the next paragraph'
            },
        ]
    },
    {
        date: 'May 29th',
        day: 3,
        location: 'Boston, MA - Akron, OH',
        drivingMiles: 100,
        hikingMiles: 10,
        content: [
            {
                type: 'p' as 'p',
                text: 'Testing cache busting'
            },
            {
                type: 'img' as 'img',
                alt: 'cat',
                source: odometer,
                caption: 'This is Francesca'
            },
            {
                type: 'p' as 'p',
                text: 'This is the next paragraph'
            },
        ]
    }
]

export default posts
