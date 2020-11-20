import React from 'react';
import './Achievements.css';
import happy from '../../../images/icons/happy@2x.png';
import marketing from '../../../images/icons/marketing@2x.png';
import surface from '../../../images/icons/surface1@2x.png';
import transportation from '../../../images/icons/transportation@2x.png';


const Achievements = () => {
    return (
        <div className="achievement">
                <div className="container ">
            <div className="row ">
            <div className="col-md-4 col-sm-12">
                <h2>Our Achievements</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at iaculis eros, sit amet elementum eros. Duis eget efficitur tellus, ultrices hendrerit nulla. Duis ac varius ex, id aliquam nunc. Pellentesque pretium, turpis eget mollis hendrerit, elit mauris efficitur magna, quis fermentum quam turpis eu purus.</p>

            </div>
            <div className="col-md-8">
               <div className="row emoji">
               <div className="achv1">
               <div className="col-md-4 d-flex justify-content-between">
                    <div className="col-md-2">
                        <img src={happy} alt=""/>
                    </div>
                    <div className="col-md-2">
                        <h2 >700+</h2>
                        <p className="on">Happy Faceson</p>
                    </div>
                    </div>
                    
               </div>
               <div className="achv2">
               <div className="col-md-4 d-flex justify-content-between">
                    <div className="col-md-2">
                        <img src={marketing} alt=""/>
                    </div>
                    <div className="col-md-2">
                        <h2>140+</h2>
                        <p className="on">Projects Completed</p>
                    </div>
                    </div>
                    
               </div>
               </div>
               <div className="row emoji">
               <div className="achv3">
               <div className="col-md-4 d-flex justify-content-between">
                    <div className="col-md-2">
                        <img className="prize" src={surface} alt=""/>
                    </div>
                    <div className="col-md-2">
                        <h2>251+</h2>
                        <p className="on">Crazy Mindson</p>
                    </div>
                    </div>
                    
               </div>
               <div className="achv4">
               <div className="col-md-4 d-flex justify-content-between">
                    <div className="col-md-2">
                        <img src={transportation} alt=""/>
                    </div>
                    <div className="col-md-2">
                        <h2>175+</h2>
                        <p className="on">Running Projectson</p>
                    </div>
                    </div>
                    
               </div>
               </div>


                </div>
            </div>
            </div>

        </div>
        
    );
};

export default Achievements;