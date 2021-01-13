import React from 'react';
import "./HeroPane.css";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

function HeroPane() {
    return (
        <div className="heropane">
            <LeftPane />
            <RightPane />

        </div>
    );
}

export default HeroPane;
