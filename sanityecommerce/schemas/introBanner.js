export default {
  name: "introBanner",
  title: "IntroBanner",
  type: "document",
  fields: [
    {
      name: "image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },

    {
      name: "largeText1",
      title: "LargeText1",
      type: "string",
    },
    {
      name: "largeText2",
      title: "LargeText2",
      type: "string",
    },
    {
      name: "largeText3",
      title: "LargeText3",
      type: "string",
    },
    {
      name: "largeText4",
      title: "LargeText4",
      type: "string",
    },
  ],
};
