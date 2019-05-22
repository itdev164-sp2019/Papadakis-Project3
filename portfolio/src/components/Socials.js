import React from 'react';
import Social from './Social';

const Socials = props => (
  <div>
    <Social sLink={props.socialLink[0]} name={props.name[0]} />
    <Social sLink={props.socialLink[1]} name={props.name[1]} />
  </div>
);

export default Socials;
