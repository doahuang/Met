import React from 'react';

const RenderErrors = ({ errors }) => {
  let errs = errors || [];
  errs = errs.map((err, i) => (
    <li key={i}>{err}</li>
  ));

  return <ul>{ errs }</ul>;
};

export default RenderErrors;
