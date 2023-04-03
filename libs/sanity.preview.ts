
import {definePreview} from 'next-sanity/preview'
import {projectId, dataset} from './sanity.clients'

if(!projectId || !dataset){
  throw new Error(
      `missing dataset and projectid`
  )
}
function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in`)
}
export const usePreview = definePreview({projectId, dataset, onPublicAccessOnly})