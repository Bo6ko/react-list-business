import React from 'react';
import { Link } from 'react-router-dom';

const BusinessItem = React.memo(({ business }) => {
  return (
    <div className='rows'>
      {business.map((item, index) => {
        return ( 
          <Link key={index} className='row' to={`/business/${item.id}`} state={{business, item}} >
              <p className='name'>{item.name}</p>
              <p className='description'>{item.description}</p>
              <div className="clear"></div>
          </Link>
        )
      })}
    </div>
  );
});

export default BusinessItem;
