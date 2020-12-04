import React from 'react';
import loading from "../assets/loading.gif"
import CSSStyle from "./loading.module.css";

function Loading() {
    return (
        <div className={CSSStyle.root}>
           <img src={loading} alt="loading...."/>
        </div>
    )
}

export default Loading
