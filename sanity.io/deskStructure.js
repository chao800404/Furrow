/** @format */

import S from "@sanity/desk-tool/structure-builder";
import Iframe from "sanity-plugin-iframe-pane";

import {
  resolveAboutPageUrl,
  resolveShopPageUrl,
  resolvePostUrl,
  resolveFeaturePageUrl,
  resolveCollectionPage,
} from "./resolveProductionUrl";

export const getDefaultDocumentNode = ({ schemaType }) => {
  if (schemaType === "orders") {
    return S.document();
  }
  return S.document().views([
    S.view.form(),
    S.view
      .component(Iframe)
      .options({
        url: (doc) => {
          switch (schemaType) {
            case "shop_page_data":
              return resolveShopPageUrl(doc);
            case "aboutPage":
              return resolveAboutPageUrl();
            case "post":
              return resolvePostUrl(doc);
            case "featurePage":
              return resolveFeaturePageUrl();
            case "collection":
              return resolveCollectionPage();
            default:
              return resolveShopPageUrl(doc);
          }
        },
      })
      .title("Preview"),
  ]);
};

export default () =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("post").id("post"),
      S.documentTypeListItem("aboutPage").id("aboutPage"),
      S.documentTypeListItem("shop_page_data").id("shop_page_data"),
      S.documentTypeListItem("featurePage").id("featurePage"),
      S.documentTypeListItem("collection").id("collection"),
      S.documentTypeListItem("orders"),
    ]);
