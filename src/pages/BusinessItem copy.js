import React, { useState, useEffect } from 'react';
import { Link, useLocation  } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import exerciseB from '../image/exercise-b.png';

const BusinessItem = React.memo(() => {

  // console.log(useParams());
  const { state } = useLocation();
  console.log(state);
  // const [business, setBusiness] = useState({});
  const [nearbyPlaces, setNearbyPlaces] = useState(state.business.filter((item) => item.address.city === state.item.address.city));
  console.log(nearbyPlaces);

  useEffect(() => {
    if ( state === null ) {
      
    }
  });

  return (
    <div className='container business-item'>

      <img className='exercise-b-pic' src={exerciseB} alt='exercise-b.png' />

      <div className='business-item-info'>

        <div className='address'>
          <p className='title'>Address</p>
          <p className='content'>{state.item.address.number} {state.item.address.street} {state.item.address.city} {state.item.address.country}, {state.item.address.zip}</p>
        </div>

        <div className='contact'>
          <p className='title'>Contact</p>
          <p className='content'>{state.item.phone}<br/>{state.item.email}</p>
        </div>

        <div className='nearby-places'>
          <div className='title'>Nearby Place</div>
          <div className='content'>
          <div className='business-data'>
            {nearbyPlaces.map((item, index) => {
              return ( 
                <Link key={index} className='row' to='#' >
                  <p className='name'>{ item.name }</p>
                  <p className='description'>{ item.description }</p>
                  <div className="clear"></div>
                </Link>
              )
            })}
          </div>
          </div>
        </div>
        <div className="clear"></div>
      </div>

    </div>
  );
});

export default BusinessItem;
