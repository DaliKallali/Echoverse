// schemaTypes/save.ts
import {defineType, defineField} from 'sanity'

export const save = defineType({
  name: 'save',
  title: 'Save',
  type: 'document',
  fields: [
    defineField({
      name: 'postedBy',
      title: 'Posted By',
      type: 'reference', // Reference to the 'user' schema
      to: [{type: 'user'}], // Referencing the 'user' schema
    }),
    defineField({
      name: 'userId',
      title: 'User ID',
      type: 'string', // The ID of the user who saved the pin
    }),
  ],
})
