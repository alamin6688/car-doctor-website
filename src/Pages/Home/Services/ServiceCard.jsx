import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {

    const {_id,title, img , price} = service;

  return (
    <div className="card w-[90%] mx-auto md:w-full bg-base-100 shadow-2xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="car.img"
          className="rounded-xl w-full h-[220px] object-cover"
        />
      </figure>
      <div className="card-body items-start">
        <h2 className="card-title text-start text-2xl font-bold">{title}</h2>
        <p className="text-[18px]">
            Price: ${price}
        </p>
        <div className="card-actions">
          <Link to={`/checkout/${_id}`}>
            <button className="btn bg-[#FF3811] hover:bg-[#ff2a00] text-white text-[16px]">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
