import React from "react";

const StatsBox = (props) => {

    return (
        <div className="statsBox">
            <div className="titleBox">Stats</div>
            <div className="statContainer">
                <Stats content={1}/>
                <Stats content={2}/>
            </div>
        </div>
    );
};

const Stats = (props) => {
    return (
        <div className="statItem"> Stat {props.content}</div>
    );
};

export default StatsBox;