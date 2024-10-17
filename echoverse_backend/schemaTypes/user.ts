// schemaTypes/user.ts
import {defineType, defineField} from 'sanity'

export const user = defineType({
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    defineField({
      name: 'userName',
      title: 'User Name',
      type: 'string', // String field for the user's name
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'string', // String field for storing the image URL or path
    }),
  ],
})
