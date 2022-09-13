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
  role: null,
};

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

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Email address is invalid")
    .required("Email address is required"),
  role: yup
    .object()
    .nullable()
    .shape({
      label: yup.string().oneOf(ROLES.map(role => role.label)),
      value: yup.string().oneOf(ROLES.map(role => role.value)),
    })
    .required("Role is required"),
});
