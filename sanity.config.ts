import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  basePath: '/studio', // <-- important that `basePath` matches the route you're mounting your studio from, it applies to both `/pages` and `/app`

  name: 'Blog-content-Studio',
  title: 'Blog-content-Studio',

projectId,
  dataset,

  plugins: [deskTool(), visionTool(),vercelDeployTool(),],
  schema: {
    types: schemaTypes,
  },
})
