// schemaTypes/pin.ts
import {defineType, defineField} from 'sanity'

export const pin = defineType({
  name: 'pin',
  title: 'Pin',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'string',
    }),
    defineField({
      name: 'destination',
      title: 'Destination',
      type: 'url',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Allows selecting a focal point on the image
      },
    }),
    defineField({
      name: 'userId',
      title: 'UserId',
      type: 'string',
    }),
    defineField({
      name: 'postedBy',
      title: 'PostedBy',
      type: 'reference',
      to: [{type: 'user'}], // References the user schema
    }),
    defineField({
      name: 'save',
      title: 'Save',
      type: 'array',
      of: [{type: 'save'}], // References the 'save' schema for saves
    }),
    defineField({
      name: 'comments',
      title: 'Comments',
      type: 'array',
      of: [{type: 'comment'}], // Array of references to the 'comment' schema
    }),
  ],
})
