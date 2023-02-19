import { useState } from "react";
import MyImg from "../Images/me.jpg"
import MonthPickerInput from 'react-month-picker-input';
require('react-month-picker-input/dist/react-month-picker-input.css');

function Head() {



    return (
        <div className="head-start">
            <div className="text-center row first-intro w-100 h-100">
                <div className="col-md-6 col-12 m-auto">
                    <h1 className="intro-head col-md-6 col-10 mx-auto text-wrap">
                        Hi, I am Abhinav, a Web developer
                    </h1>
                    <a className="btn myButton btn-lg mt-3 mt-md-5 rounded-5" href="/">Contact</a>
                </div>
                <div className="col-md-6 col-12 my-4">
                    <img src={MyImg} className="rounded-5 my-auto mw-100" alt="Abhinav Agrawal" />
                </div>
            </div>

        </div>
    );
}

export default Head;
