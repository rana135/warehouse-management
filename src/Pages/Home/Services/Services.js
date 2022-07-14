import useService from '../../../hooks/useService';
import Service from '../Service/Service'
import './Services.css';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';


const Services = () => {
    const [services] = useService()
    const homeServices = services.slice(0, 6)
    return (
        <div className='service-container'>
            <h1 className='text-center text-info mb-2 mt-5'>
                Furniture Store
            </h1>
            <div>
                <div className='container services'>
                    {
                        homeServices.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
                <div className='text-center'>
                    <Link to='/manageInventories'>
                        <button variant="info" className='btn-lg btn-info mt-4 mb-3 fw-bolder'>
                            Manage Inventory
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Services;

