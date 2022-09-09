import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
});

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
