/** @format */
import { FaBloggerB } from "react-icons/fa";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { min } from "lodash";

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
      tile: "Slug",
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
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Post Content",
      name: "postContent",
      description: "Please enter your blog content text",
      type: "array",
      of: [{ type: "block" }, { type: "image" }, { type: "youtube" }],
      validation: (Rule) => Rule.required(),
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
