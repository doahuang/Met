import React from 'react';

const Errors = ({ errors }) => {
  let errs = errors || [];

  errs = errs.map((err, i) => <li key={i}> { err } </li>);

  return <ul className='red errors'>{ errs }</ul>;
};

export default Errors;
