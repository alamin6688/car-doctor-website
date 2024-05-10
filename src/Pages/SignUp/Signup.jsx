import { Link, useLocation, useNavigate } from "react-router-dom";
import logoImg from '../../assets/images/login/login.svg'
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";
import 'animate.css';

const Signup = () => {

    const [registerError, setRegisterError] = useState("");
    const [success, setSuccess] = useState("");
    // const [showPassword, setShowPassword] = useState(false);
    const { createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photo,email,password)
    
        // reset Error
        setRegisterError("");

        // reset success
        setSuccess("");

        if (password.length < 6) {
            setRegisterError("Password should be at least 6 characters or longer.");
            return;
          } else if (!/[A-Z]/.test(password)) {
            setRegisterError(
              "Your password should have at least one uppercase characters!"
            );
            return;
          } else if (!/[a-z]/.test(password)) {
            setRegisterError(
              "Your password should have at least one lowercase character!"
            );
            return;
          } else if (!/\d/.test(password)) {
            setRegisterError("Your password should have at least one digit!");
            return;
          }
      
          // create user:
          createUser(email, password)
            .then((result) => {
              console.log(result.user);
              updateProfile(result.user,{ displayName:name, photoURL:photo })
            })
            .then(() => {
              toast.success('User created ! Redirecting to home page....', { autoClose: 2000 });
              setTimeout(() => {
                  // Navigate after a delay of 1900ms (adjust the delay time as needed)
                  // navigate(location?.state ? location.state : '/');
              }, 2100);
          })
            .catch((error) => {
              console.error(error);
              setRegisterError(error.message);
            });
      }

  return (
    <div className="hero min-h-screen bg-base-200 animate__animated animate__zoomIn">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={logoImg} alt="login-img" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-4xl text-center font-bold mb-5">
                Sign up!
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[16px] font-bold">Name</span>
              </label>
              <input
                name="name"
                type="name"
                placeholder="Your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[16px] font-bold">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Your Photo URL"
                className="input input-bordered"
                // required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[16px] font-bold">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[16px] font-bold">
                  Password
                </span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Your password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-xs font-bold"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-[#FF3811] hover:bg-[#ff2a00] text-white border-none text-[18px]"
                type="submit"
                value="Sign Up"
              />
            </div>
            <p className="text-center mt-6 text-xs font-bold">
            Already have an account?
            <Link to="/login" className="text-[#FF3811] ml-1">
              Login Now
            </Link>
          </p>
          </form>
          <div className="text-center mb-7">
              {registerError && (
                <p className="text-[#FF3811] text-sm px-5 mb-2">
                  {registerError}
                </p>
              )}
              {success && (
                <p className="text-green-600 text-sm px-5 mb-2">{success}</p>
              )}
            </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
