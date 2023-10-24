import { useEffect, useState } from "react";
import OurTeamCard from "./OurTeamCard";

const OurTeam = () => {

  const [ourTeamCard, setOurTeamCard] = useState([])  
  useEffect(()=>{
    fetch('/ourTeamData.json')
    .then(res=> res.json())
    .then(data=> setOurTeamCard(data))
  },[])  
  return (
        <div className="my-24" > 
          <h1 className="text-center font-bold text-5xl lg:text-6xl text-black">Meet Our Team</h1>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">             
            {
                ourTeamCard.map(ourTeamCard => <OurTeamCard key={ourTeamCard.id} ourTeamCard={ourTeamCard}></OurTeamCard> )
            }
          </div>
        </div>
  );
};

export default OurTeam;
