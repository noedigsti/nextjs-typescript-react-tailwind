// components/CSRComponent.tsx
import React, { useState, useEffect } from 'react';

const CSRComponent: React.FC = () => {
  const [data, setData] = useState<string>('Loading...');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
      setData('CSR Component: Data Loaded');
    }, 2000);
  }, []);

  return (
    <div
      className={`text-2xl ${
        isLoaded ? 'text-green-300 hover:text-orange-400' : 'text-blue-300'
      }`}
    >
      {data}
    </div>
  );
};

export default CSRComponent;
