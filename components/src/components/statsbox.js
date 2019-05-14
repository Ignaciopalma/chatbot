import React from "react";

const StatsBox = (props) => {

    return (
        <div className="StatsBox">
            <div className="StatsBoxTitle">Stats</div>
            <div className="StatsLits">
                <Stats content={1}/>
                <Stats content={2}/>
            </div>
        </div>
    );
};

const Stats = (props) => {
    return (
        <div className="Stat"> Stat {props.content}</div>
    );
};

export default StatsBox;