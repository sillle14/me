import trout_aquarium from '../../../assets/road-trip/trout_aquarium.jpeg'
import huckleberry_shake from '../../../assets/road-trip/huckleberry_shake.jpeg'

import { EntryType } from '../entryType';

const glacier: Array<EntryType> = [
    {
        date: 'June 26th',
        day: 29,
        location: 'Seattle, WA - Kalispell, MT',
        drivingMiles: 526.2,
        content: [
            {
                type: 'p',
                text: 'We had a long driving day today in order to get pretty close to Glacier. Even though we were mostly on the interstate, it was a nice drive through the mountains. We stopped for a delicious lunch in Coeur d\'Alene, Idaho at a cute Latin American sandwich place (Café Carambola). In Montana, we stopped at a pretty crazy visitor center in St. Regis, with a restaurant, gift shop, casino, trout aquarium, and ice cream shop.'
                
            },
            {
                type: 'img',
                alt: 'An aquarium with trout in front of a large poster of a mountain lake.',
                source: trout_aquarium,
                vert: true,
                caption: 'Trout Aquarium'
            },
            {
                type: 'img',
                alt: 'A selfie of Lewis and Julia drinking a purple shake with two straws.',
                source: huckleberry_shake,
                caption: 'Huckleberry Shake!'
            },
        ],
    }
] 

export default glacier