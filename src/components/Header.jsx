import logo from '../assets/img/Logo.png'
import vec from '../assets/img/Vector.png'
import gugl from '../assets/img/Group 1432.png'
import fac from '../assets/img/Group 1431.png'

const Header = () => {
    return (

        <div className="home">
            <div className="left">
                <img src={logo} alt="" />
            </div>

            <div className="right">
                <h1 className="text1">SIGN IN</h1>
                <p className='text2'>Sign in with email address</p>
                <div className="idv_im1" >
                    <img src={vec} alt="" className='img_div' />
                    <input type="text" placeholder='Yourname@gmail.com' className='INP1' />
                </div>
                <button className='btn'>Sign up</button>
                <div className='border'></div>
                <p className='or'>Or continue with</p>
                <div className='button'>
                    <div className="btn1_img">
                        <img src={gugl} alt="" className='gugl_img' />
                        <button className='gugl'>Google</button>
                    </div>
                    <div className="div_fac">
                        <img src={fac} alt="" className='fac_img' />
                        <button className='fac'> Facebook </button>
                    </div>
                </div>
                <div className="text_or">
                    <p className='text_p'>By registering you with ourp <span className='text_p1'> Terms and Conditions</span></p>
                </div>
            </div>
        </div>
    )
}
export default Header