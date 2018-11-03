import React from 'react';
import Navigation from '../Navigation/Navigation.container';

export default({children}) => (
  <div>
    <Navigation>
      {children}
    </Navigation>
  </div>
);