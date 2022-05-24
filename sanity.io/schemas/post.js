/** @format */
import { FaBloggerB } from "react-icons/fa";

export default {
  name: "post",
  title: "Post",
  type: "document",
  icon: FaBloggerB,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 90,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "outline",
      title: "Outline",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(300),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "body",
      type: "bodyPortableText",
      title: "Body",
    },
    {
      title: "Release Date",
      name: "releaseDate",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Has the post been released?",
      name: "isPublic",
      type: "boolean",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "releaseDate",
      media: "image",
    },
  },
};
