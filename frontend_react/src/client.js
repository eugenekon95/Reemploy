import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
export const client = sanityClient({
  projectId: 's49gorni',
  dataset: 'production',
  apiVersion:'2022-05-02',
  useCdn: true,
  token: process.env.SANITY_TOKEN

})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);