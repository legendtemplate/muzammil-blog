import {defineField, defineType} from 'sanity'
import { LinkIcon } from '@sanity/icons'
import blockContent from './blockContent'

export default defineType({
  name: 'posts',
  title: 'Posts',
  type: 'document',
  fields: [
    defineField({
      name: 'filter',
      title: 'Filter',
      type: 'string', 
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'poster',
      title: 'Poster',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'tag',
      title: ' Tag',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tag'}}],
    }),
    {
      name: 'someName',
       title: 'Some title',
     type: 'blockContent'
     },
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'},
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
    }),
   
  
    defineField({
      name: 'recent',
      title: 'Recent',
      type: 'array',
      of: [{type: 'reference', to: {type: 'posts'}}],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'poster',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
