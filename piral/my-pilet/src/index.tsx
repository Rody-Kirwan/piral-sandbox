import * as React from 'react';
import { PiletApi } from 'my-app';
import { Link } from 'react-router-dom';

const MenuItem = ({ children }) => <li className="nav-item">{children}</li>;

// apikey
// 6af19329c1e283960933343caf885fb06535d76418ec65ea3748d1ecae6d8875

const RC = () => {
  return (
    <div>TEST ROUTE</div>
  )
}


export function setup(app: PiletApi) {
  app.registerMenu(() =>
      <MenuItem>
        <Link className="nav-link text-dark" to="/test-one">
          Test Route
        </Link>
      </MenuItem>
    );
  app.registerPage('/test-one', RC)
}
