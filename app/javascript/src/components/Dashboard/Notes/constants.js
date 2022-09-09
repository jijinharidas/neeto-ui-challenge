import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
});

export const TAGS = [
  {
    label: "Getting Started",
    value: 1,
  },
  {
    label: "Onboarding",
    value: 2,
  },
  {
    label: "User Flow",
    value: 3,
  },
  {
    label: "UX",
    value: 4,
  },
  {
    label: "Bugs",
    value: 5,
  },
  {
    label: "v2",
    value: 6,
  },
];

export const ROLES = [
  {
    label: "Admin",
    value: "admin",
  },
  {
    label: "Non-Admin",
    value: "non_admin",
  },
];

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];

export const MENUBAR_BLOCKS = {
  main: [
    {
      label: "All",
      count: 13,
      active: true,
    },
    {
      label: "Users",
      count: 13,
      active: false,
    },
    {
      label: "Leads",
      count: 13,
      active: false,
    },
    {
      label: "Visitors",
      count: 13,
      active: false,
    },
  ],
  segments: [
    {
      label: "Europe",
      count: 13,
    },
    {
      label: "Middle East",
      count: 13,
    },
    {
      label: "Asia",
      count: 13,
    },
  ],
  tags: [
    {
      label: "Sales",
      count: 13,
    },
    {
      label: "Finance",
      count: 13,
    },
    {
      label: "User Experience",
      count: 13,
    },
  ],
};
