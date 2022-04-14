import React from "react";
import expert1 from "../../../images/rsz_j1.jpg";
import expert2 from "../../../images/rsz_j2.jpg";
import expert3 from "../../../images/rsz_j3.jpg";
import expert4 from "../../../images/rsz_j4.jpg";
import expert5 from "../../../images/rsz_j5.jpg";
import Expert from "../Expert/Expert";
// import expert6 from '../../../images/rsz_j6.jpg';

const experts = [
  { id: 1, name: "will smith", img: expert1 },
  { id: 2, name: "will smith", img: expert2 },
  { id: 3, name: "will smith", img: expert3 },
  { id: 4, name: "will smith", img: expert4 },
  { id: 5, name: "will smith", img: expert5 },
  // {id: 6, name:'will smith', img: expert6}
];

const Experts = () => {
  return (
    <div className="container">
      <h2 className="text-primary text-center mt-5">Our Experts</h2>
      <div className="row">
          {
             experts.map(expert => <Expert
               key = {expert.id} 
               expert = {expert}
             ></Expert>)
          }
      </div>
    </div>
  );
};

export default Experts;
