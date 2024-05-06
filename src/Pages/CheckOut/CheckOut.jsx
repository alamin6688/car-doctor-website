import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { title } = service;

  return (
    <div>
      <h2>Book Service: {title}</h2>

      <form className="card-body bg-base-100">
        <div className="md:flex gap-6">
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text font-bold">First Name</span>
          </label>
          <input
            type="text"
            name="first-name"
            placeholder="First Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text font-bold">Last Name</span>
          </label>
          <input
            type="text"
            name="last-name"
            placeholder="Last Name"
            className="input input-bordered"
            required
          />
        </div>
        </div>
        <div className="md:flex gap-6">
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text font-bold">Phone</span>
          </label>
          <input
            type="number"
            placeholder="Your Phone Number"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input input-bordered"
            required
          />
        </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Message</span>
          </label>
          <input
            type="text"
            name="message"
            placeholder="Your Message"
            className="input input-bordered h-[200px]"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#FF3811] hover:bg-[#ff2a00] border-none text-white text-[18px]">Order Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
