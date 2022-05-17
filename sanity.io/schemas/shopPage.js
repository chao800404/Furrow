/** @format */

import { AiFillDatabase } from "react-icons/ai";

export default {
  name: "shop_page_data",
  title: "Shop Page data",
  type: "document",
  icon: AiFillDatabase,
  fields: [
    {
      name: "name",
      title: "Product Name",
      type: "string",
      description: "Please enter product name",
      validation: (Rule) => Rule.required().min(4).max(15),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "bannerImage",
      title: "Banner Image",
      type: "object",
      description: "Please enter banner image 1920 x 950 (px)",
      fields: [
        {
          name: "bannerImage_0",
          title: "bannerImage_0",
          type: "image",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "bannerImage_1",
          title: "bannerImage_1",
          type: "image",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "image",
      title: "Product Shop Page Image ",
      type: "array",
      description: "Please enter prodct 640 x 640 Image, minmax to 5 itmes",
      of: [{ type: "image" }],
      option: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().min(5).max(5),
    },
    {
      type: "object",
      title: "Electrochromic",
      name: "electrochromic",
      description: "Please enter product electrochromic features",
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        {
          title: "title",
          name: "Title",
          type: "string",
          validation: (Rule) => Rule.required().min(4).max(50),
        },
        {
          title: "content",
          name: "Content",
          type: "string",
          validation: (Rule) => Rule.required().min(4).max(150),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      type: "object",
      name: "bettery",
      title: "Bettery",
      description: "Please enter product bettery features",
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        {
          title: "title",
          name: "Title",
          type: "string",
          validation: (Rule) => Rule.required().min(4).max(50),
        },
        {
          title: "content",
          name: "Content",
          type: "string",
          validation: (Rule) => Rule.required().min(4).max(150),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      type: "object",
      name: "feature",
      title: "Feature",
      description: "Please enter product Features",
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        {
          title: "title",
          name: "Title",
          type: "string",
          validation: (Rule) => Rule.required().min(4).max(50),
        },
        {
          title: "content",
          name: "Content",
          type: "string",
          validation: (Rule) => Rule.required().min(4).max(150),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      type: "object",
      name: "product",
      title: "Product",
      description: "Please enter product content",
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        {
          title: "title",
          name: "Title",
          type: "string",
          options: {
            list: [
              {
                title: "Product Specifications",
                value: "Product Specifications",
              },
            ],
          },
          validation: (Rule) => Rule.required().min(4).max(50),
        },
        {
          title: "content",
          name: "Content",
          type: "string",
          description: "Please enter product specifications",
          validation: (Rule) => Rule.required().min(4).max(150),
        },
        {
          name: "product_image",
          title: "product image",
          type: "image",
          validation: (Rule) => Rule.required(),
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
      title: "name",
      subtitle: "releaseDate",
      media: "bannerImage.bannerImage_0",
    },
  },
};
