import React from 'react';
import { Redirect } from 'react-router-dom';

import '../css/utils.css';

const pageNotFound = () => (<div className="page-error text-center">{"Sorry but this page doesn't exist."}</div>);

const loading = () => (
    <div className='full-width-anime text-center'>
        <i className="fa fa-spinner fa-spin"/>
    </div>
);

const invalidToken = () => (
  <div className="page-error text-center">
      <p>This link is not valid anymore.</p>
  </div>
);

const redirectToProfile = (props) => {
  return (<Redirect to={`/profile/${props.username}`} />);
};

export default {
    pageNotFound,
    loading,
    invalidToken,
    redirectToProfile
};
