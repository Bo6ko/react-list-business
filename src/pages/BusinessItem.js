import React, { useState, useEffect } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import exerciseB from '../image/exercise-b.png';
import axios from 'axios';

const BusinessItem = React.memo(() => {

  // console.log(useParams());
  const businessItemID = useParams().id;
  const { state } = useLocation();
  const [loading, setLoading] = useState(true);
  const [businessItem, setBusinessItem] = useState([]);
  const [nearbyPlaces, setNearbyPlaces] = useState([]);

  useEffect(() => {
    if ( state === null ) {

      const getData = async () => {
        try {
          const url = 'https://feinterviewtask.azurewebsites.net/b/6231abada703bb67492d2b8f';
          const allBusiness = await axios(url);
          const getBusinessDataByID = allBusiness.data.filter((item) => item.id === businessItemID)[0];
          setBusinessItem(getBusinessDataByID);
          setLoading(false);
          setNearbyPlaces(
            allBusiness.data.filter((item) => item.address.city === getBusinessDataByID.address.city)
          );
        } catch (e) {
          console.log(`Error: ${e}`);
        }
      };
      getData();

    } else {
      if ( state.business.length > 0 && state.item ) {        
        setBusinessItem(state.item);
        setLoading(false);
        setNearbyPlaces(
          state.business.filter((item) => item.address.city === state.item.address.city)
        );
      }      
    }
  }, [state, businessItemID]);

  return (
    <div className='container business-item'>

      <img className='exercise-b-pic' src={exerciseB} alt='exercise-b.png' />

      <div className='business-item-info'>

        <div className='address'>
          <p className='title'>Address</p>
          <p className='content'>
            {loading && 'loading...'}
            {!loading && businessItem.address.number}
          </p>
        </div>

        <div className='contact'>
          <p className='title'>Contact</p>
          <p className='content'></p>
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
