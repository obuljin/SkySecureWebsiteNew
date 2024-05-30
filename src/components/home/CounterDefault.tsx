import CountUpContent from "@/utils/CountUpContent";
import React from "react";
const CounterDefault = () => {
    const counters = [
        {
            countIcon: 'fas fa-check-square',
            countIconPrefix: 'fas',
            countNum: 1460,
            countTitle: 'Consulting Hours'
        },
        {
            countIcon: 'fas fa-heart',
            countIconPrefix: 'fas',
            countNum: 100,
            countTitle: 'Happy Customers'
        },
        {
            countIcon: 'fas fa-users',
            countIconPrefix: 'fas',
            countNum : 50,
            countTitle: 'Business Members'
        },
        {
            countIcon: 'fas fa-map-marker-alt',
            countIconPrefix: 'fas',
            countNum : 3,
            countTitle: 'Business Locations'
        }

    ];

    return(
        <div className="counter-area pt-130 pb-100" style={{ backgroundColor:'#096bd8' }}>
            <div className="container">
                {counters &&
                <div className="row turon-counter-content ">
                    {counters.map( (item, num) => (
                    <div key={num} className="col-xl-3 col-lg-3 col-md-6">
                        <div className="counter-wrapper mb-30 text-center">
                            <div className="counter-icon">
                                <i className={item.countIcon}></i>
                            </div>
                            <div className="counter-text">
                                <h1 className="counter-title justify-content-center"><span className="counter">
                                <CountUpContent number={item.countNum} text="" />
                                </span>
                                {item.countTitle!='Business Locations'?<span className="plus-icon">+</span>:null}
                                </h1>
                                <p>{item.countTitle}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                }
            </div>
        </div>
    )
}
export default CounterDefault;