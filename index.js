import React from 'react';
import { render } from 'react-dom';
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json';

//ReactDOM.render(que voy a renderizar, donde lo haré);
const app = document.getElementById('app');
render( <Playlist data = {data} />, app);