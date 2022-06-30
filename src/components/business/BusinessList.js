import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import SingleBusiness from './BusinessItem';

const url = 'https://feinterviewtask.azurewebsites.net/b/6231abada703bb67492d2b8f';

const BusinessList = () => {

  const { loading, data } = useFetch(url);
  // console.log(data);

  return (
    <div className='business-data'>
      <div className='columns'>
        <p className='name'>Name</p>
        <p className='description'>Description</p>
        <div className="clear"></div>
      </div>

      {loading && 'loading...'}

      <SingleBusiness 
        business={data}
      />
    </div>
  );
};

export default BusinessList;
