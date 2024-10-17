// schemaTypes/comment.ts
import {defineField, defineType} from 'sanity'

export const comment = defineType({
  name: 'comment', // Unique name for this schema
  title: 'Comment', // Human-readable title in the CMS
  type: 'document', // This tells Sanity this schema is a document
  fields: [
    defineField({
      name: 'postedBy', // Reference to the user who posted the comment
      title: 'Posted By',
      type: 'reference', // Type reference allows linking to another schema (like user)
      to: [{type: 'user'}], // The type you're referencing
    }),
    defineField({
      name: 'commentText',
      title: 'Comment Text',
      type: 'string', // This will store the text of the comment
    }),
  ],
})
