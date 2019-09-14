import React from 'react';
import App from './App';
import {render} from "jest";
import NavBar from './components/NavBar'

test('App renders withouth crashing', async() => {
  await render (<NavBar/>)
})

test('App renders withouth crashing', async() => {
  await render (<App/>)
})