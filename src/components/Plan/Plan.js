import './Plan.css';
import musicIcon from '../../images/icon-music.svg'

function Plan() {
    return (
      <div className='plan'>
        <div className='plan__container'>
          <img className='plan__icon' src={musicIcon} alt='music icon'/>
          <div>
            <h2 className='plan__name'>Annual Plan</h2>
            <p className='plan__price'>$59.99/year</p>
          </div>
        </div>
        <a className='plan__link' href=' '>Change</a>
      </div>
    );
  }
  
  export default Plan;