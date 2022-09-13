import * as yup from "yup";

export const MENUBAR_BLOCKS = {
  main: [
    {
      label: "All",
      count: 13,
      active: true,
    },
    {
      label: "Archived",
      count: 13,
      active: false,
    },
    {
      label: "Completed",
      count: 13,
      active: false,
    },
    {
      label: "Phase 2",
      count: 13,
      active: false,
    },
  ],
  segments: [],
  tags: [],
};

export const CONTACT_DETAILS = [
  {
    id: 0,
    name: "Ronald Richards",
    role: "Owner",
    email: "alber@borer.com",
    created_at: "Feb 8, 2021",
  },
  {
    id: 1,
    name: "Jacob Jones",
    role: "Owner",
    email: "alber@borer.com",
    created_at: "Feb 8, 2021",
  },
  {
    id: 2,
    name: "Ronald Richards",
    role: "Owner",
    email: "alber@borer.com",
    created_at: "Feb 8, 2021",
  },
];

export const CONTACTS_FORM_INITIAL_FORM_VALUES = {
  firstname: "",
  secondname: "",
  email: "",
  role: "",
};

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Second name is required"),
  email: yup.string().required("Email is required"),
});

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
