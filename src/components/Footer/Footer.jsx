import { assets } from '../../assets/assets'
import './Footer.css'

function Footer() {
    return(
        <>
        <div className="footer" id='footer'>
            <div className="footer-content">

            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate explicabo eius rem nesciunt id neque officiis. Nostrum dolore aut aspernatur optio quas voluptas nisi. Debitis laborum esse similique neque quisquam rerum est asperiores iusto dignissimos ut nam aperiam natus velit modi ex mollitia a nemo voluptatem, facere incidunt odio itaque.</p>

                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
            </div>

            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-222-567-8765</li>
                    <li>contact@tomato.com </li>
                </ul>
            </div>

            </div>
            <hr />
            <p className='footer-copyright'>Copyright 2004 c Tomato.com - All Right Reserved.</p>
        </div>
        </>
    )
}

export default Footer