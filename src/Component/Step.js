import React from "react";

const Step = (props) => {
    return (
        <div className="margin-step">
            <div className="w-step">
                <div className="hero-step">{props.title}</div>
                <p>{props.desc}</p>
            </div>
            <div className="w-step">
                <img className="w-step-img"  src={props.gambar} alt="" />
            </div>
        </div>
    )
}

export default Step;