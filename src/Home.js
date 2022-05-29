import { useNavigate } from 'react-router-dom';

export function Home({ service_data, leads_data }) {
    const navigate = useNavigate();


    return (
        <div className="home_parent">
            <div className="home">
                <h2>Welcome, username</h2>
                <h4>Your one stop solution to get services to manage operations</h4>
            </div>
            <div className="dashboard">
                <div className="dashboard_content leads" onClick={() => {
                    navigate('/leads');
                }}>
                    <p className="count">5</p>
                    <p className="h6_custom">Leads</p>
                </div>
                <div className="dashboard_content sales" onClick={() => {
                    navigate('/services');
                }}>
                    <p className="count">6</p>
                    <p className="h6_custom">Services</p>
                </div>

            </div>
        </div>
    );
}
