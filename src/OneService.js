import { useNavigate } from 'react-router-dom';

export function OneService({ service, service_data, setservice_data }) {
    const navigate = useNavigate();
    return (
        <div className="oneLead">
            <p className="h6_custom bold">First Name :</p>
            <p className="h6_custom">{service.fname}</p>
            <p className="h6_custom bold">Last Name :</p>
            <p className="h6_custom">{service.lname}</p>
            <p className="h6_custom bold">Email :</p>
            <p className="h6_custom">{service.email}</p>
            <p className="h6_custom bold">Address :</p>
            <p className="h6_custom">{service.address}</p>
            <p className="h6_custom bold">Contact No :</p>
            <p className="h6_custom">{service.contactNo}</p>
            <p className="h6_custom bold">Intrested In :</p>
            <p className="h6_custom">{service.intrest}</p>
            <p className="h6_custom bold">Service status :</p>
            <p className="h6_custom">{service.status}</p>

            <br />
            <div className="button_div">
                <button type="button" className="save_changes" onClick={() => {
                    navigate(`/services/edit/${service._id}`)
                }}>Edit</button>
                <button type="button" className="save_changes"
                    onClick={() => {
                        let temp = service_data;
                        let result = temp.filter((mv) => mv.id !== service.id);
                        setservice_data(result)
                    }}
                >Delete</button>
            </div>

        </div>
    );
}
