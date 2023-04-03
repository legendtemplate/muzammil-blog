import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'html',
  title: 'HTML',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'filter',
      title: 'Filter',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'poster',
      title: 'Poster',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],

  preview: {
    select: {
      title: 'title',
      description: 'description',
      media: 'poster',
    },
    prepare(selection) {
      const {description} = selection
      return {...selection, subtitle: description && `by ${description}`}
    },
  },
})
