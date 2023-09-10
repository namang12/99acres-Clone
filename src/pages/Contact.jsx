import React from 'react'
import './contacts.css'
import { Navbar } from '../components/HomePage'
import Footer from '../components/ListingPage/Footer'
import GoToTop from "../components/PlanPage/GoToTop"


const Contact = () => {

  return (
    <div>
        <GoToTop/>
      <header className="header">
              <Navbar/>
            </header>
        <center><img src = "https://i.ibb.co/TLNV2kJ/snip.png" style={{

    marginTop: "100px",
    height: "150px", width:"600px"}} alt='aboutus'/> </center>


<div class="box-wrap">
        <div class="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Address</th>
                        <th>Toll Free</th>
                        <th>Email</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ahmedabad</td>
                        <td>106, Iscon Elegance, S.G. Highway, <br>
                        </br>Prahladnagar, Ahmedabad. <br></br>Pin: 380015.</td>
                        <td>91-1800-4199099</td>
                        <td><a href= "www.services@99acres.com">services@99acres.com </a></td>
                        
                    </tr>
                    <tr>
                        <td>Bangalore</td>
                        <td>Info Edge (India) Ltd. N – 503, North <br></br>Block,
                        Manipal Centre, Dickenson <br></br>Road, Bangalore - 560042 </td>
                        <td>1800-41-99099</td>
                        <td><a href= "www.services@99acres.com">services@99acres.com </a></td>
                        
                    </tr>
                    <tr>
                        <td>Chandigarh</td>
                        <td>Info Edge (India) Ltd. SCO 224-225 ,1st<br></br> Floor Sector 40D Chandigarh -160036</td>
                        <td>91-41-99099</td>
                        <td><a href= "www.services@99acres.com">services@99acres.com </a></td>
                        
                    </tr>
                    <tr>
                        <td>Chennai</td>
                        <td>Info Edge (India) Ltd. Samson<br></br> towers 1st floor 403L Pantheon road<br></br> Egmore Chennai 600008</td>
                        <td>1800-41-99099</td>
                        <td><a href= "www.services@99acres.com">services@99acres.com </a></td>
                        
                    </tr>
                    <tr>
                        <td>Hyderabad</td>
                        <td>Info Edge India Ltd., 6-3-1192/1/1,<br></br> Office No:113 To 115, 3rd Block, 1st <br></br>Floor,Begumpet, Hyderabad-500016</td>
                        <td>1800-41-99099</td>
                        <td><a href= "www.services@99acres.com">services@99acres.com </a></td>
                        
                    </tr>
                    <tr>
                        <td>Indore</td>
                        <td>518, 5th floor Shekhar Central<br></br> Palasia Square A.B. Road<br></br> – Indore Madhya Pradesh – 452001</td>
                        <td>1800-41-99099</td>
                        <td><a href= "www.services@99acres.com">services@99acres.com </a></td>
                        
                    </tr>
                    <tr>
                        <td>Jaipur</td>
                        <td>Info Edge (India) Ltd. 605, Crystal <br></br>Palm, 22 Godam Circle, Sardar <br></br>Patel Marg, Jaipur - 302001</td>
                        <td>1800-41-99099</td>
                        <td><a href= "www.services@99acres.com">services@99acres.com </a></td>
                        
                    </tr>
                    <tr>
                        <td>Coimbatore</td>
                       <td>Info Edge (India ) Ltd, 1st Floor,<br></br> Elysium Central, Puliakulam<br></br> Road, Coimbatore - 641045</td>
                        <td>1800-41-99099</td>
                        <td><a href= "www.services@99acres.com">services@99acres.com </a></td>
                     
                    </tr>
                    <tr>
                        <td>Kolkata</td>
                        <td>Space Ergo Brilliant, Office<br></br> No: 505, 5th Floor Plot No: A1-4, <br></br>Block EP & GP Sector<br></br> V, Salt Lake, Kolkata – 700 091</td>
                        <td>1800-41-99099</td>
                        <td><a href= "www.services@99acres.com">services@99acres.com </a></td>
                        
                    </tr>
                  <tr>
                        <td>Mumbai (Andheri)</td>
                        <td>Info Edge (India) Ltd. 127-128,<br></br> B-wing, 1st Floor,  Opp. CineMagic<br></br> Theatre. Andheri-E, Mumbai- 400099 </td>
                        <td>1800-41-99099</td>
                        <td><a href= "www.services@99acres.com">services@99acres.com </a></td>
                        
                    </tr>
                  
                </tbody>
            </table>
        </div>

      
    </div>
    <center><img src = "https://i.ibb.co/gS4KY0d/snipp.png" style={{

    
    height: "250px", width:"800px",
    marginBottom:"100px" ,  padding: "10px",border: "1px solid black"}} alt="awards"/> </center>


            <div className="div-footer-wrapper">
    <Footer/>
</div>
    </div>
  )
}

export default Contact
