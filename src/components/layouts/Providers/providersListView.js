import React from 'react';

const ProvidersView = props => {
  const { providers } = props;
  const providerList = () => {
    return (
      Object.keys(providers).forEach(key => {
        <div key={key}>
          <div>name: {providers[key]}</div>
        </div>
      })
    );
  };

  return (
    <div>
      {providerList()}
    </div>
  );
}

export default ProvidersView;