import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../components/navbar/Navbar';

it('<Header /> renders properly as expected', () => {
  const tree = renderer.create(<BrowserRouter><Navbar /></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
