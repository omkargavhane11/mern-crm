import { useNavigate } from 'react-router-dom';

export function Home() {
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
                }}>Leads</div>
                <div className="dashboard_content sales" onClick={() => {
                    navigate('/services');
                }}>Services</div>

            </div>
        </div>
    );
}
