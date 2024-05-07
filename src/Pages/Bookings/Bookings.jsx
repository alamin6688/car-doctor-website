import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);


  const handleDelete = id =>{
    const proceed = confirm('Are you sure you want to delete?')
    if(proceed){
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: 'DELETE',
            // headers: {
            //     'content-type': 'application/json'
            // },
            // body: JSON.stringify(proceed)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
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

  return (
    <div>
      <h2 className="text-5xl text-center">Your bookings</h2>
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
                ></BookingRow>)
            }
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Bookings;
