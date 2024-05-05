import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
  return (
    <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
        <div className='lg:w-1/2 relative'>
        <img src={person} 
            className="w-3/4 rounded-lg shadow-2xl"/>
        <img src={parts} 
            className="w-1/2 absolute top-1/2 right-5 rounded-lg shadow-2xl border-8 border-white "/>
        </div>
        <div className='lg:w-1/2 space-y-5 mt-12'> 
            <h3 className='text-[#FF3811] text-[20px] font-bold'>
                About us
            </h3>
            <h1 className="text-5xl font-bold">
                We are qualified & <br /> of experience <br /> in this field
            </h1>
            <p className="py-6 text-[18px]">
                We offer comprehensive reviews, insightful articles and helpful tips to empower your car journey. From latest releases to maintenance advice, trust us to be your ultimate guide in the world of automobiles. 
            </p>
            <p className="py-6 text-[18px]">
                Discover a world of automotive expertise and passion on our car website with a team of highly qualified professionals boasting years of industry experience. 
            </p>
            <button className="btn bg-[#FF3811] hover:bg-[#ff2a00] text-white">
                Get More Info
            </button>
        </div>
      </div>
    </div>
  );
};

export default About;
