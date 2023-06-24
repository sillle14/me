import heading_west from './posts/heading_west'
import rmnp from './posts/rmnp'
import yellow_tetons from './posts/yellow_tetons'
import rainier_olympic from './posts/rainier_olympic'

import { EntryType } from './entryType'

const posts: Array<EntryType> = heading_west.concat(rmnp).concat(yellow_tetons).concat(rainier_olympic)

export default posts
