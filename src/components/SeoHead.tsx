import { useSeo } from '../hooks/useSeo'
import type { SeoOptions } from '../hooks/useSeo'

const SeoHead = (props: SeoOptions) => {
  useSeo(props)
  return null
}

export default SeoHead
