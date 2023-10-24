
const OurTeamCard = ({ourTeamCard}) => {
    const {name, image, mobile, email,post} = ourTeamCard;
    return (
        <div className="">
        <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="h-56 w-56" src={image}alt="Album"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{post}</p>
          <p>{mobile}</p>
          <p>{email} </p>
        </div>
      </div>
    </div>
    );
};

export default OurTeamCard;