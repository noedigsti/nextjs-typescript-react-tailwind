// components/SSRComponent.tsx
import React from 'react';

interface SSRComponentProps {
  data: string;
}

const SSRComponent: React.FC<SSRComponentProps> = ({ data }) => {
  return <div className="text-2xl text-green-300">{data}</div>;
};

export default SSRComponent;
