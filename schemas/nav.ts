export default {
    type: "document",
    name: "nav",
    title: "Navigation",
    fields: [
      {
        type: "string",
        name: "name",
        title: "Name",
      },
      {
        type: "string",
        name: "link",
        title: "Link (e.g. 'footer')",
      },
      {
        type: "boolean",
        name: "heading",
        title: "Heading (Top Level)",
        initialValue: false
      },
      {
        type: "boolean",
        name: "subheading_intro",
        title: "Subheading - Introduction",
        initialValue: false
      },
      {
        type: "boolean",
        name: "subheading_vision",
        title: "Subheading - Vision For Rail in Britain",
        initialValue: false
      },
      {
        type: "boolean",
        name: "subheading_experience",
        title: "Subheading - The GBR Experience",
        initialValue: false
      },
      {
        type: "boolean",
        name: "subheading_more",
        title: "Subheading - More",
        initialValue: false
      },
      {
        type: "string",
        name: "order",
        title: "Order (e.g. '2-4' where the first number is top headings and the second is the sub menu)",
      },
    ],
  }