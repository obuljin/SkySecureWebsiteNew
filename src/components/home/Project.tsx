import React from 'react';
import CourseDefault from './CourseDefault';
const Project = () => {
    return (
        <>
              <div className="project-area pt-25 pb-115  pl-140 pr-140">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
                            <div className="section-title text-center ml-50 mr-50 mb-75">
                                <span className="border-left-1"></span>
                                <span>our project</span>
                                <span className="border-right-1"></span>
                                <h1>Our Latest Case Studies</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12 course-slider p-5">
                            <CourseDefault/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;