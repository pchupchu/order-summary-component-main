import './OrderSummary.css';
import musicFlatline from '../../images/illustration-hero.svg';
import musicIcon from '../../images/icon-music.svg'

function OrderSummary() {
    return (
      <main className="content">
        <div className="order">
          <img className='order__image' src={musicFlatline} alt='girl dancing' />
          <div className='container'>
            <h1 className="order__title">Order Summary</h1>
            <p className="order__subtitle">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
            <div className='order__item'>
              <img className='order__icon' src={musicIcon} alt='music icon'/>
              <div>
                <h2 className=''>Annual Plan</h2>
                <p className='order__price'>$59.99/year</p>
              </div>
              <a href=' '>Change</a>
            </div>
            <button>Proceed to Payment</button>
            <button>Cancel Order</button>
          </div>
        </div>
      </main>
    );
  }
  
  export default OrderSummary;