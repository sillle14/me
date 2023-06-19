import heading_west from './posts/heading_west'
import rmnp from './posts/rmnp'
import yellow_tetons from './posts/yellow_tetons'

import { EntryType } from './entryType'

const posts: Array<EntryType> = heading_west.concat(rmnp).concat(yellow_tetons)

export default posts
