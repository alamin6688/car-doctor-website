import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {

    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])

    return (
        <div className="mt-16">
            <div className="text-center space-y-6">
                <h3 className="text-4xl md:text-5xl font-bold">
                Our Service Area
                </h3>
                <p className="w-[95%] md:w-3/4 mx-auto text-[18px]">
                    Explore our comprehensive car website for expert reviews, maintenance guides and valuable buyer&apos;s advice—all tailored to enhance your automotive journey.  
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                {
                    services.map(service => <ServiceCard 
                        key="service._id" 
                        service={service}>
                    </ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;