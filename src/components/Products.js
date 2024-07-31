 //load images inside react
import perfume1 from '../assets/images/pfm1.jpg'
import perfume2 from '../assets/images/pfm2.jpg'
import perfume3 from '../assets/images/pfm3.jpg'
 
 
 //Products Components
 function Products(){
    return(
      <div className='products'>
        <div className='box'>
          <img src={perfume2} alt="" />
          <h3>Selvacia</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='box'>
          <img src={perfume1} alt="" />
          <h3>Rose blossem</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='box'>
          <img src={perfume3} alt="" />
          <h3>Fresh Lime</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    )
   }

   export default Products