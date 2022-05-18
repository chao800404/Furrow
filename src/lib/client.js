/** @format */

import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "2ger9n9i",
  dataset: "production",
  apiVersion: "2022-05-18",
  token: process.env.REACT_APP_STANITY_TOKEN,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
