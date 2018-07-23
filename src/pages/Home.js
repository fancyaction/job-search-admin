import React from 'react';
import { Admin, Resource } from 'react-admin';
import posts from './home/Posts';
import dataProvider from './home/dataProvider';

const Home = () => (
  <Admin title="Your Custom Job Search 💼" dataProvider={dataProvider}>
    <Resource name="posts" {...posts} />
  </Admin>
);

export default Home;
