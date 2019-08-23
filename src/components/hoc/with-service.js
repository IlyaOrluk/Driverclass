import React from 'react';
import { ServiceConsumer } from '../service-context';

const withService = () => (Wrapped) => {

  return (props) => {
    return (
      <ServiceConsumer>
        {
          (service) => {
            return (<Wrapped {...props}
              storeService={service} />);
          }
        }
      </ServiceConsumer>
    );
  }
};

export default withService;
