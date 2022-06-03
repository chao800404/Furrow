/** @format */

// export default function resolveProductionUrl(document) {
//   return `https://onesec-informal.netlify.app/${document.slug.current}`;
// }

export function resolveAboutPageUrl() {
  return `https://onesec-informal.netlify.app/about`;
}

export function resolveShopPageUrl(document) {
  return `https://onesec-informal.netlify.app/shop/${document.slug.current}`;
}

export function resolvePostUrl(document) {
  return `https://onesec-informal.netlify.app/news/${document.slug.current}`;
}

export function resolveCollectionPage() {
  return `https://onesec-informal.netlify.app/shop`;
}

export function resolveFeaturePageUrl() {
  return `https://onesec-informal.netlify.app/feature`;
}
