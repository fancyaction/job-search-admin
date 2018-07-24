import React from 'react';
import { Create, LongTextInput, SimpleForm, TextInput } from 'react-admin';

const PostCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <LongTextInput source="summary" />
      <TextInput source="url" />
    </SimpleForm>
  </Create>
);

export default PostCreate;
