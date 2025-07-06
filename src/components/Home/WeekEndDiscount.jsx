import imgDiscount1 from '../../assets/images/bacola-banner-05.jpg.png'
import imgDiscount2 from '../../assets/images/bacola-banner-06.jpg.png'
import imgDiscount3 from '../../assets/images/bacola-banner-10.jpg.png'
export default function WeekEndDiscount() {
  return (
    <div className='box-container mx-auto py-3'>
        
        <div className='row'>

            <div className='col-12 py-1 col-lg-4 col-md-6'>
                <div className='position-relative'>
                <img src={imgDiscount1} className='rounded-4 w-100 object-fit-cover' alt="imgDiscount1" />
                <div className='position-absolute position-lay end-0 bottom-0'>
                    <h6 className='text-uppercase fs-sm-h6 fs-md-h6 color-count'>Weekend Discount 40%</h6>
                    <h2 className='color-head fs-sm-h3 fs-md-h3'>Natural Eggs</h2>
                    <p className='color-sub py-1'>Eat one every day</p>
                    <span className='text-white py-2 px-3 rounded-5 back-shop pointer-count'>Shop Now</span>
                </div>
            </div>
            </div>
        

            <div className='col-12 py-1  col-lg-4 col-md-6'>
                <div className='position-relative'>
                <img src={imgDiscount2} className='rounded-4 w-100 object-fit-cover' alt="imgDiscount2" />
                <div className='position-absolute position-lay end-0 bottom-0'>
                    <h6 className='text-uppercase fs-sm-h6 fs-md-h6 color-count'>Weekend Discount 40%</h6>
                    <h2 className='color-head fs-sm-h3 fs-md-h3'>Taste the Best</h2>
                    <p className='color-sub py-1'>Shine the morning</p>
                    <span className='text-white py-2 px-3 rounded-5 back-shop pointer-count'>Shop Now</span>
                </div>
            </div>
            </div>
        

            <div className='col-12 py-1  col-lg-4 col-md-6'>
                <div className='position-relative'>
                <img src={imgDiscount3} className='rounded-4 w-100 object-fit-cover' alt="imgDiscount1" />
                <div className='position-absolute position-lay end-0 bottom-0'>
                    <h6 className='text-uppercase fs-sm-h6 fs-md-h6 color-count'>Weekend Discount 40%</h6>
                    <h2 className='color-head fs-sm-h3 fs-md-h3'>Ditch the Junk</h2>
                    <p className='color-sub py-1'>Breakfast made better</p>
                    <span className='text-white py-2 px-3 rounded-5 back-shop pointer-count'>Shop Now</span>
                </div>
            </div>
            </div>
        

        </div> 
             
    </div>
  )
}
