

export function OneLead({ lead, lead_data, setlead_data }) {
    return (
        <div className="oneLead">
            <p className="h6_custom bold">First Name :</p>
            <p className="h6_custom">{lead.fname}</p>
            <p className="h6_custom bold">Last Name :</p>
            <p className="h6_custom">{lead.lname}</p>
            <p className="h6_custom bold">Email :</p>
            <p className="h6_custom">{lead.email}</p>
            <p className="h6_custom bold">Address :</p>
            <p className="h6_custom">{lead.address}</p>
            <p className="h6_custom bold">Contact No :</p>
            <p className="h6_custom">{lead.contactNo}</p>
            <label className="h6_custom bold">Lead Status :</label>
            <select id="option" className="h6_custom option">
                <option className="option" value="New">New</option>
                <option className="option" value="Lost">Lost</option>
                <option className="option" value="Contacted" >Contacted</option>
                <option className="option" value="Cancelled">Cancelled</option>
                <option className="option" value="Qualified">Qualified</option>
                <option className="option" value="Confirmed">Confirmed</option>
            </select>
            <br />
            <div className="button_div">
                <button
                    type="button"
                    className="save_changes"
                    onClick={() => {

                    }}
                >Save changes</button>
                <button
                    type="button"
                    className="save_changes"
                    onClick={() => {
                        // let optionvalue = document.getElementById("option").value;
                        // let requiredOption = optionvalue.options[optionvalue.selectedIndex].value;
                        let temp = lead_data;
                        let result = temp.filter((mv) => mv.id !== lead.id);
                        setlead_data(result)
                    }}
                >Delete</button>
            </div>

        </div>
    );
}
