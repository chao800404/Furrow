/** @format */

export default {
  name: "bodyPortableText",
  type: "array",
  title: "Post body",
  of: [
    {
      type: "block",
      title: "Block",
      marks: {
        annotations: [
          {
            name: "internalLink",
            type: "object",
            title: "Internal link",
            fields: [
              {
                name: "reference",
                type: "reference",
                title: "Reference",
                to: [{ type: "post" }],
              },
            ],
          },
        ],
      },
    },
    { type: "image" },
    { type: "youtube" },
  ],
  validation: (Rule) => Rule.required(),
};
