/** @format */
import { GoBook } from "react-icons/go";

export default {
  name: "aboutPage",
  title: "About Page",
  type: "document",
  icon: GoBook,
  fields: [
    {
      name: "name",
      title: "tilte",
      type: "string",
    },
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
      description: "Please add 2 image (274 x 638)*3",
      fields: [
        {
          name: "image_0",
          title: "Image_0",
          type: "image",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "image_1",
          title: "Image_1",
          type: "image",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "description",
          title: "Description",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "aboutStory",
      title: "About Story",
      description: "Please add your story",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "description",
          title: "Description",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "joint",
      title: "Joint",
      type: "object",
      fields: [
        {
          name: "joint_0",
          title: "joint_0",
          type: "object",
          fields: [
            {
              name: "title",
              title: "title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              title: "Description",
              type: "object",
              fields: [
                {
                  name: "description_0",
                  title: "Description_0",
                  type: "text",
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "description_1",
                  title: "Description_1",
                  type: "text",
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
            {
              name: "image",
              title: "image",
              type: "image",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
        {
          name: "joint_1",
          title: "joint_1",
          type: "object",
          fields: [
            {
              name: "title",
              title: "title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              title: "Description",
              type: "object",
              fields: [
                {
                  name: "description_0",
                  title: "Description_0",
                  type: "text",
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "description_1",
                  title: "Description_1",
                  type: "text",
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
            {
              name: "image",
              title: "image",
              type: "image",
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
