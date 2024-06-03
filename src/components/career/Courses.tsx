import { courseData } from "@/data/courseData";
import Link from "next/link";
import React from "react";

const Courses = () => {
  // const courseData = [
  //   {
  //     id: 1,
  //     title: "Cloud Security Engineer",
  //     subTitle: "Full Time",
  //     details: "This role involves designing, implementing, and maintaining security protocols and policies to protect against unauthorized access, data breaches, and other cyber threats. And work with cloud services like Azure to ensure robust, secure cloud environments.",
  //     data: [
  //       {
  //         id: 1,
  //         data: [
  //           {
  //             id: 1,
  //             desc: "Introduction With the rise of cybersecurity threats, organizations need a reliable and efficient way to detect and respond to potential security breaches. Microsoft Azure Sentinel is a cloud-native security information and event management (SIEM) system that provides advanced threat protection by collecting and analyzing data from various sources. This white paper will provide an overview.",
  //           }
  //         ]
  //       }
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "Security Operations Engineer IC1",
  //     subTitle: "Full Time",
  //     details: "This role focuses on safeguarding an organization's information systems by monitoring, detecting, investigating, analyzing, and responding to security incidents. The role involves the use of various security tools and practices to maintain the confidentiality, integrit",
  //   },
  //   {
  //     id: 3,
  //     title: "Security Operations Engineer IC2",
  //     subTitle: "Full Time",
  //     details: "A Security Operations Engineer IC2 is responsible for monitoring and maintaining the security infrastructure of an organization. They handle threat detection, incident response, and security tool management. This role requires a blend of technical expertise in cybersecurity, proble.",
  //   },
  //   {
  //     id: 4,
  //     title: "Delivery Manager",
  //     subTitle: "Full Time",
  //     details: "This Role oversees the deployment and management of cloud services, ensuring seamless delivery and operations. They coordinate between clients, technical teams, and stakeholders, managing project timelines, budgets, and resources while adhering to quality and security...",
  //   },
  //   {
  //     id: 5,
  //     title: "Full Stack Developer",
  //     subTitle: "Full Time",
  //     details: "Full Stack Developer is a tech professional skilled in both front-end and back-end aspects of web development. They design user interfaces, develop servers and databases for website functionality, and code for mobile platforms, offering an end-to-end solution to crea...",
  //   },
  //   {
  //     id: 6,
  //     title: "Front-End Developer",
  //     subTitle: "Full Time",
  //     details: "Front-End Developer specializes in building the visual and interactive elements of websites and applications. They ensure user-friendly experiences by implementing web design principles, coding in HTML, CSS, and JavaScript, and collaborating with back-end developers and...",
  //   },
  //   {
  //     id: 7,
  //     title: "Back End Developer",
  //     subTitle: "Full Time",
  //     details: "This Role specializes in server-side logic, database management, and application integration. They design and maintain the core structure of a software application, ensuring its reliability, efficiency, and seamless connectivity with front-end components. Their work enables user-facin...",
  //   },
  //   {
  //     id: 8,
  //     title: "QA Engineer",
  //     subTitle: "Full Time",
  //     details: "This Role ensures the quality and reliability of software products by designing test plans, running tests, identifying bugs, and collaborating with development teams for fixes. Their role bridges user requirements with technical specifications, aiming to deliver flawless products th...",
  //   },
  //   {
  //     id: 9,
  //     title: "DevOps Engineer",
  //     subTitle: "Full Time",
  //     details: "This Role bridges the gap between development and operations, aiming to improve collaboration and productivity by automating infrastructure, workflows, and continuously measuring application performance. They focus on streamlining the software development lifecycle, from codin...",
  //   },
  // ];


  return (
    <>
      <section className="job-list-area grey-bg-2 pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 offset-lg-2 offset-xl-3">
              <div className="section-title text-center ml-50 mr-50 mb-75">
                {/* <span className="border-left-1"></span>
                <span>Job category</span>
                <span className="border-right-1"></span> */}
                <span className="b-sm-left-1"></span>
                <span className="b-sm-left-2"></span>
                <span className="sub-t-left">Job category</span>
                <h1>Our Latest Job Category</h1>
              </div>
            </div>
          </div>
          <div className="row">
            {courseData.map((item) => (
              <div key={item.id} className="col-lg-6 col-md-6">
                <div className="job-list mb-30">
                  <h3> {item.title} </h3>
                  <span> ({item.subTitle})</span>
                  <p>{item.details}</p>
                  <Link className="btn" href={`/career-details/${item.title}`}>
                    <span className="btn-text">
                      Read More <i className="fas fa-long-arrow-alt-right"></i>{" "}
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
