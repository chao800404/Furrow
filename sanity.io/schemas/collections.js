/** @format */
import { FaProductHunt } from "react-icons/fa";

export default {
  name: "collection",
  title: "Collection",
  type: "document",
  icon: FaProductHunt,
  fields: [
    {
      name: "productName",
      title: "Product Name",
      type: "string",
      description: "Please enter product name",
      validation: (Rule) => Rule.required().min(4).max(30),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "productName",
        maxLength: 90,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      description: "Please enter product description",
      validation: (Rule) => Rule.required().min(4).max(150),
    },
    {
      name: "colorType",
      type: "array",
      title: "ColorType",
      description: "Add all glasses color type (RGB)",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      validation: (Rule) => Rule.required().min(1).max(10),
    },
    {
      title: "Has the virtual model?",
      name: "virtual",
      type: "boolean",
      description: "If haven't virtaul model will be replaced with an image.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "product",
      title: "Product",
      type: "array",
      direction: "Add your glasses product item",
      validation: (Rule) => Rule.required().min(1).max(10),
      of: [
        {
          title: "Item",
          name: "item",
          type: "object",
          fields: [
            {
              name: "color",
              title: "Color",
              type: "string",
              validation: (Rule) => Rule.required().min(1).max(30),
            },
            {
              name: "price",
              title: "Price",
              type: "string",
              validation: (Rule) => Rule.required().min(1).max(10),
            },
            {
              name: "rgb",
              title: "RGB",
              type: "string",
              validation: (Rule) => Rule.required().min(5).max(10),
            },
            {
              name: "image",
              title: "Image",
              type: "object",
              fields: [
                {
                  name: "dark",
                  title: "Dark",
                  type: "image",
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "light",
                  title: "Light",
                  type: "image",
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
          ],
          preview: {
            select: {
              title: "color",
              media: "image.light",
            },
          },
        },
      ],
    },
    {
      title: "Release Date",
      name: "releaseDate",
      type: "date",
    },
  ],
  preview: {
    select: {
      title: "productName",
      subtitle: "releaseDate",
    },
  },
};
