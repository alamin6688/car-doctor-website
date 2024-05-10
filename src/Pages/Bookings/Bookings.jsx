import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure();

  // const url = `https://cars-doctor-server-psi.vercel.app/bookings?email=${user?.email}`;
  const url = `/bookings?email=${user?.email}`;

  useEffect(() => {

    axiosSecure.get(url)
    .then(res => setBookings(res.data))
  }, [url, axiosSecure]);


  const handleDelete = id =>{
    const proceed = confirm('Are you sure you want to delete?')
    if(proceed){
        fetch(`https://cars-doctor-server-psi.vercel.app/bookings/${id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if(data.deletedCount > 0){
                toast.success('Deleted successfully!')
                const remaining = bookings.filter(booking => booking._id !== id);
                setBookings(remaining);
            }
        })
        .catch(error => {
            console.error('Error deleting booking:', error);
        });
    }
  }

  const handleBookingConfirm = id =>{
    fetch(`https://cars-doctor-server-psi.vercel.app/bookings/${id}`,{
      method: 'PATCH',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify({status:'confirm'})
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      if(data.modifiedCount > 0){
        toast.success('Confirmed successfully!')
        // Update State
        const remaining = bookings.filter(booking => booking._id !== id);
        const updated = bookings.find(booking => booking._id === id);
        updated.status = 'confirm';
        const newBookings = [updated, ...remaining];
        setBookings(newBookings);
      }
    })
  }
  
  return (
    <div>
      <h2 className="text-5xl font-bold text-center mb-10">Your Bookings</h2>
      <div className="overflow-x-auto bg-base-100 w-[80%] md:w-full mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-gray-200">
              <th>Checkbox</th>
              <th>Profile</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
                bookings.map(booking => <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
                ></BookingRow>)
            }
          </tbody>
        </table>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Bookings;
