import React from 'react';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

const dataProvider = simpleRestProvider(
  'https://indreed.herokuapp.com/api/jobs/?q=web+developer&limit=50'
);
const Home = () => <Admin dataProvider={dataProvider} />;

export default Home;
