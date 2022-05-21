

export function OneService({ service, service_data, setservice_data }) {
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
            <label className="h6_custom bold">Service Status :</label>
            <select className="h6_custom option">
                <option className="option" value="Created">Created</option>
                <option className="option" value="Released">Released</option>
                <option className="option" value="Open" selected>Open</option>
                <option className="option" value="Cancelled">Cancelled</option>
                <option className="option" value="In Process">In Process</option>
                <option className="option" value="Completed">Completed</option>
            </select>
            <br />
            <div className="button_div">
                <button type="button" className="save_changes">Save changes</button>
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
