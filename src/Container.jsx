import React from "react";


const Container = () => {
    
    return (
        <React.Fragment>
            <div className="container">
                <div className="box1">
                    <div className="card_image">
                    </div>
                        <div className="circle">
                        </div>
                    <div className="content">
                        <h2>Token 1</h2>
                        <label>
                         Name :
                        </label><br/>
                        <input type="text" placeholder="Enter your name"/><br/>
                        <label>
                        Email :
                        </label><br/>
                        <input type="email" placeholder="Enter your email" /><br />
                        
                        <button>Mint</button>
                    </div>   
                </div>
                <div className="box2">
                <div className="card_image">
                </div>
                <div className="circle">
                    </div>
                  <div className="content">
                    <h2>Token 2</h2><br/>
                        <label>
                         Name :
                        </label><br/>
                        <input type="text" placeholder="Enter your name"/><br/>
                        <label>
                        Email :
                        </label><br/>
                        <input type="email" placeholder="Enter your email" /><br />
                        
                        <button>Mint</button>
                    </div>
            
                </div>
            </div>
            
        </React.Fragment>
    );
};
export default Container;