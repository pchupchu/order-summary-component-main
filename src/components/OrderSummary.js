import musicFlatline from '../images/illustration-hero.svg';
import musicIcon from '../images/icon-music.svg'

function OrderSummary() {
    return (
      <main className="container">
        <div className="order">
          <img src={musicFlatline} alt='girl dancing' />
          <h1 className="order__title">Order Summary</h1>
          <p className="order__subtitle">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
          <div className='order__item'>
            <img src={musicIcon} alt='music icon'/>
            <div>
              <h2>Annual Plan</h2>
              <p>$59.99/year</p>
            </div>
            <a href=' '>Change</a>
          </div>
          <button>Proceed to Payment</button>
          <button>Cancel Order</button>
        </div>
      </main>
    );
  }
  
  export default OrderSummary;