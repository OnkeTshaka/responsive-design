import './Features.css';
import Pin from '../assets/activity.svg'
import Air from '../assets/airplay.svg'
import Alert from '../assets/alert-circle.svg'

const Features = () => {
  return (
    <section className="features">
        <div className="container-flex">

          <div className="feature">
            <img src={Pin} alt="" />
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="feature">
            <img src={Air} alt="" />
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="feature">
            <img src={Alert} alt="" />
            <p>Lorem ipsum dolor sit amet.</p>
          </div>


        </div>
    </section>
  )
}

export default Features