import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const BookService = () => {
    const service = useLoaderData();
    const { title, _id, price, img} = service;
    const {user} = useContext(AuthContext);

    const handleBookService = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            img,
            email,
            date,
            service: title,
            service_id: _id,
            price: price
        }

        // console.log(booking);

        fetch('https://cars-doctor-server-psi.vercel.app/bookings', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
          // console.log(data)
          if(data.insertedId){
            alert('service book successfully!')
          }
        })

    }

    return (
        <div>
           <h2 className="text-center text-3xl font-bold">{title}</h2> 

        <form onSubmit={handleBookService}
        className="card-body bg-base-100">
        <div className="md:flex gap-6">
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text font-bold">Name</span>
          </label>
          <input
            type="text"
            name="name"
            defaultValue={user?.displayName}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text font-bold">Date</span>
          </label>
          <input
            type="date"
            name="date"
            placeholder=""
            className="input input-bordered"
            required
          />
        </div>
        </div>
        <div className="md:flex gap-6">
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text font-bold">Due Amount</span>
          </label>
          <input
            type="text"
            defaultValue={'$ '+price}
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
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#FF3811] hover:bg-[#ff2a00] border-none text-white text-[18px]">Order Confirm</button>
        </div>
      </form>
        </div>
    );
};

export default BookService;