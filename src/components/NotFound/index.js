import React from 'react';
import Loader from 'react-loaders';

import './index.scss';

const NotFound = () => {
  // const mousemove =(event)=> {
  //   (document.getElementByClass('torch')).css({
  //     top: event.pageY,
  //     left: event.pageX
  //   });
  // };
  // mousemove();
    return (
      <div className='main-container'>
      <div className="text">
  <h1>404</h1>
	<h2>Uh, Ohh</h2>
  <h3>Sorry we cant find what you are looking for 'cuz its so dark in here</h3>
</div>
<div className="torch"></div>
<Loader type="pacman" />
</div>
    )
}

export default NotFound

