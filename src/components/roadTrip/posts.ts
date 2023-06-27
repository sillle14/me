import heading_west from './posts/heading_west'
import rmnp from './posts/rmnp'
import yellow_tetons from './posts/yellow_tetons'
import rainier_olympic from './posts/rainier_olympic'
import glacier from './posts/glacier'

import { EntryType } from './entryType'

const posts: Array<EntryType> = heading_west.concat(rmnp)
                                            .concat(yellow_tetons)
                                            .concat(rainier_olympic)
                                            .concat(glacier)

export default posts
