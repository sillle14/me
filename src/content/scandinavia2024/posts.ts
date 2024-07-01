import { EntryType } from "../../components/pages/entryType";

const posts: Array<EntryType> = [
    {
        date: 'June 29th',
        day: 1,
        location: 'Boston, MA - Copenhagen, DK',
        content: [
            {
                type: 'p',
                text: 'We took a red eye to Copenhagen, and arrived to a beautiful day in the city. We spent some time walking around from our hotel, and got a delicious dinner outside followed by some really good gelato (I got chocolate and olive oil).'
            },
            {
                type: 'img',
                alt: 'Multicolored buildings with tents and outdoor dining from across a canal.',
                source: 'copenhagen',
                caption: 'Nyhavn'
            },
            {
                type: 'img',
                alt: 'Julia sitting at a table with a crepe and salmon.',
                vert: true,
                source: 'salmon',
                caption: 'Dinner outside at a cute cafe.'
            },
            {
                type: 'p',
                text: 'The fire alarm went off in our hotel at around 1am, which wasn\'t so bad for me as I already couldn\'t sleep! It was a false alarm, and we got back to bed fairly quickly.'
            },
            {
                type: 'img',
                alt: 'A firetruck and a crowd of people in front of a hotel.',
                source: 'firealarm',
                caption: ''
            },
        ]
    },
    {
        date: 'June 30th',
        day: 2,
        location: 'Copenhagen, DK - Lund, SE',
        content: [
            {
                type: 'p',
                text: 'It was raining today, and we tried our best to stay dry while walking to breakfast at Seks, which had delicious eggs and rolls from a 120 year old (!) sourdough starter. We later got a cardamom bun and strawberry pastry from Juno the Bakery. Since it was still raining pretty hard, we went to the closest museum, which was the Brumleby museum, in a social housing complex originally built as housing for the poor to avoid unhygienic conditions during the 1853 Copenhagen cholera epidemic. It was fairly random to end up there (and lucky, it\'s only open 4 hours a week!), but cool to see and hear about this small part of the city\'s history.'
            },
            {
                type: 'img',
                alt: 'A building with a yellow first floor and white second floor along a small street.',
                source: 'brumleby',
                caption: 'Brumleby',
                vert: true
            },
            {
                type: 'img',
                alt: 'Old documents on a wooden desk.',
                source: 'desk',
                caption: 'A desk preserved from one of the original shops in Brumleby.'
            },
            {
                type: 'p',
                text: 'After grabbing some smørrebrød for lunch, we caught the train to Lund, Sweden where we met up with Elisabeth and my parents. Elisabeth had just finished her first year of grad school, the last part of which was in Lund.'
            },
            {
                type: 'img',
                alt: 'Lewis, Elisabeth, John, and Barbra around a multicolored Lund sign in a plaza.',
                source: 'lund',
                caption: ''
            },
        ]
    },
]

export default posts