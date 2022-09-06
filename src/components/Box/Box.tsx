import React from 'react';
import './Box.css';

type Props = {
  icon: React.ReactNode;
};

export const Box: React.FC<Props> = (props) => {
  const { icon } = props;
  return <div className="box-container">{icon}</div>;
};

export default Box;
