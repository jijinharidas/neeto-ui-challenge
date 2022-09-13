import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Pane/Form";

const NewContactPane = ({ showPane, onClose }) => (
  <Pane isOpen={showPane} onClose={onClose}>
    <Pane.Header>
      <Typography style="h2" weight="semibold">
        Create a New Note
      </Typography>
    </Pane.Header>
    <Form onClose={onClose} />
  </Pane>
);

export default NewContactPane;
