import { Link } from "react-router-dom";
import logoImg from '../../assets/images/login/login.svg'

const Signup = () => {

    const handleSignUp = event =>{
        event.preventdefault();
    
    
      }

  return (
    <div className="hero min-h-screen bg-base-200">
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
                type="name"
                name="name"
                placeholder="Your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[16px] font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
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
                type="password"
                name="password"
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
          </form>
          <p className="text-center mb-6 text-xs font-bold">
            Already have an account?
            <Link to="/login" className="text-[#FF3811] ml-1">
              Login Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
