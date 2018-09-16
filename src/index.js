import ReactDOM from 'react-dom';
import React from 'react';
import MemeHolster from './containers/MemeHolster'

const load = () => {
  ReactDOM.render(
    <div><MemeHolster /></div>,
    document.querySelector('#home'),
  );
};

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load);
} else {
  load();
}
