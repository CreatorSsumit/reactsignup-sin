import React,{Fragment} from 'react';
import Header from "./Header/Header"
import CourseSection from "./CourseSection/CourseSection";


function landingpage() {
    return (
       <Fragment>
           <Header />
           <CourseSection />
       </Fragment>
    )
}

export default landingpage
