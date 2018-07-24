import React from 'react';
import { List, Datagrid, TextField, EditButton } from 'react-admin';

const PostList = props => (
  <List title="Recent Listings" {...props}>
    <Datagrid>
      <TextField source="title" />
      <TextField source="summary" />
      <TextField source="url" />
      <EditButton />
    </Datagrid>
  </List>
);

export default PostList;
