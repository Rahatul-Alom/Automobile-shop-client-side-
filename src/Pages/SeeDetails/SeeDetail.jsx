import { useLoaderData, useParams } from "react-router-dom";
import ShowSeeDetails from "./ShowSeeDetails";
import { useEffect, useState } from "react";

const SeeDetail = () => {
    const [details, setDetails] = useState([]);
    const {_id} = useParams()
  
    const seeDetails = useLoaderData()
    
    useEffect(() => {
      const cars = seeDetails.find((detail) => detail._id === _id);
      setDetails(cars);
    }, [_id, seeDetails]);

    return (
        <div>
            {
                <ShowSeeDetails details={details} ></ShowSeeDetails>
            }
        </div>
    );
};

export default SeeDetail;