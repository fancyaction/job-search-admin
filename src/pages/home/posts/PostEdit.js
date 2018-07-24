import React from 'react';
import { Edit, LongTextInput, SimpleForm, TextInput } from 'react-admin';

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

const PostEdit = props => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <LongTextInput source="summary" />
    </SimpleForm>
  </Edit>
);

export default PostEdit;
