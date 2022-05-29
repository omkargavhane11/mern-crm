import { useNavigate } from 'react-router-dom';
import { API } from "./global.js";

export function OneLead({ lead }) {
    const navigate = useNavigate();
    return (
        <div className="oneLead">
            <div className="content">
                <p className="h6_custom bold">First Name :</p>
                <p className="h6_custom">{lead.fname}</p>
            </div>
            <div className="content">
                <p className="h6_custom bold">Last Name :</p>
                <p className="h6_custom">{lead.lname}</p>
            </div>
            <div className="content">
                <p className="h6_custom bold">Email :</p>
                <p className="h6_custom">{lead.email}</p>
            </div>
            <div className="content">
                <p className="h6_custom bold">Address :</p>
                <p className="h6_custom">{lead.address}</p>
            </div>
            <div className="content">

                <p className="h6_custom bold">Contact No :</p>
                <p className="h6_custom">{lead.contactNo}</p>
            </div>
            <div className="content">
                <p className="h6_custom bold">Intrested In :</p>
                <p className="h6_custom">{lead.intrest}</p>
            </div>
            <div className="content">
                <p className="h6_custom bold">Lead Status :</p>
                <p className="h6_custom">{lead.status}</p>
            </div>

            <br />
            <div className="button_div">
                <button
                    type="button"
                    className="save_changes"
                    onClick={() => {
                        navigate(`/leads/edit/${lead._id}`)
                    }}
                >Edit</button>
                <button
                    type="button"
                    className="save_changes"
                    onClick={() => {
                        fetch(`${API}/leads/edit/${lead._id}`, { method: "DELETE" }).then(() => navigate("/leads"))
                        // console.log(lead._id);
                    }}
                >Delete</button>
            </div>

        </div>
    );
}
