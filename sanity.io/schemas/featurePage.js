/** @format */
import { BiBlanket } from "react-icons/bi";

export default {
  name: "featurePage",
  title: "Feature Page",
  type: "document",
  icon: BiBlanket,
  fields: [
    { name: "name", title: "title", type: "string" },
    {
      name: "slug",
      tile: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "banner_main",
      title: "Banner Main",
      type: "object",
      fields: [
        {
          name: "image",
          title: "Banner Image",
          type: "object",
          description: "Please add 3 image (274 x 638)*3",
          fields: [
            {
              name: "image_0",
              title: "image_0",
              type: "image",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "image_1",
              title: "image_1",
              type: "image",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "image_2",
              title: "image_2",
              type: "image",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
        {
          name: "title",
          title: "Banner Title",
          type: "string",
          validation: (Rule) => Rule.required().min(4).max(150),
        },
        {
          name: "description",
          title: "Banner Description",
          type: "string",
          validation: (Rule) => Rule.required().min(4),
        },
      ],
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: "function",
      title: "Function",
      type: "object",
      fields: [
        { name: "functionTitle", title: "Function Title", type: "string" },
        {
          name: "functionContent_0",
          title: "Function Content",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "functionContent_1",
          title: "Function Content",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "functionContent_2",
          title: "Function Content",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "functionContent_3",
          title: "Function Content",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "story",
      title: "story",
      type: "object",
      fields: [
        {
          name: "storyTitle",
          title: "Story Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "storyDescription_0",
          title: "Story Description-0",
          type: "object",
          fields: [
            {
              name: "image",
              title: "Story Image",
              type: "image",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              title: "Story description",
              type: "text",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "mark",
              title: "Story Mark",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
        {
          name: "storyDescription_1",
          title: "Story Description-1",
          type: "object",
          fields: [
            {
              name: "image",
              title: "Story Image",
              type: "image",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              title: "Story description",
              type: "text",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "mark",
              title: "Story Mark",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
        {
          name: "storyDescription_2",
          title: "Story Description-2",
          type: "object",
          fields: [
            {
              name: "image",
              title: "Story Image",
              type: "image",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              title: "Story description",
              type: "text",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "mark",
              title: "Story Mark",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
        {
          name: "storyDescription_3",
          title: "Story Description-3",
          type: "object",
          fields: [
            {
              name: "image",
              title: "Story Image",
              type: "image",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              title: "Story description",
              type: "text",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "mark",
              title: "Story Mark",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
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
    },
  },
};
