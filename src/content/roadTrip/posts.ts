import heading_west from './posts/heading_west'
import rmnp from './posts/rmnp'
import yellow_tetons from './posts/yellow_tetons'
import rainier_olympic from './posts/rainier_olympic'
import glacier from './posts/glacier'
import heading_east from './posts/heading_east'

import { EntryType } from '../../components/pages/entryType'

const posts: Array<EntryType> = heading_west.concat(rmnp)
                                            .concat(yellow_tetons)
                                            .concat(rainier_olympic)
                                            .concat(glacier)
                                            .concat(heading_east)

export default posts
