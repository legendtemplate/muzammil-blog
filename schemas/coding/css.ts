import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'css',
  title: 'CSS',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'},
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
    }),
    defineField({
      name: 'filter',
      title: 'Filter',
      type: 'string',
    }),
   
    defineField({
      name: 'poster',
      title: 'Poster',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    ({
      title: 'body', 
      name: 'body',
      type: 'array', 
      marks: {
        annotations: [
          {name: 'color', title: 'Color', type: 'color'}
        ]
      },
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'tag',
      title: ' Tag',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tag'}}],
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
