import './OrderSummary.css';
import musicFlatline from '../../images/illustration-hero.svg';
import Plan from '../Plan/Plan';

function OrderSummary() {
    return (
      <main className="content">
        <div className="order">
          <img className='order__image' src={musicFlatline} alt='girl dancing' />
          <div className='order__container'>
            <h1 className="order__title">Order Summary</h1>
            <p className="order__subtitle">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
            <Plan />
            <button className='order__button'>Proceed to Payment</button>
            <button className='order__cancel-button'>Cancel Order</button>
          </div>
        </div>
      </main>
    );
  }
  
  export default OrderSummary;