import {defineType} from 'sanity'

export const postedBy = defineType({
  name: 'postedBy',
  title: 'PostedBy',
  type: 'reference',
  to: [{type: 'user'}],
})
