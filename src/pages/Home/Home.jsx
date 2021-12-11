import React from 'react';
import Navbar from '../../components/Navbar';
import Selfie from '../../assets/portfolioImage.jpg';
import styles from  "./Home.module.css";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    let navigate = useNavigate()
    return ( 
        <React.Fragment>
            <Navbar />
            <div className={styles.home}>
                <h1>JavaScriptmas Edition <span role="img" aria-label="accessible-emoji">🎄</span></h1>
                <h3>React Edition </h3>

                <img src={Selfie} alt="selfie" lazy="true"/>
                <p>Hello there, I'm Yoma and welcome to this awesome react website </p>
                <br />
                <h3>Reasons why i made this</h3>
                <ul>
                    <li>A lot of us are learning react js(myself inclusive) so i thought it would be a nice idea to make this</li>
                    <li>Everything i know as of today, i learnt from developer communities you name any, Youtube dev community, Scrimba, LinkedIn etc, so why not share knowledge too(I ask myself)</li>
                    <li>I really wanted to build something other people can use </li>
                </ul>
                {/* className={styles.button} */}
                <button  onClick={() => {
                    navigate("/days")
                }}>
                        PROCEED
                </button>
            </div>

        </React.Fragment>
     );
}
 
export default Home;