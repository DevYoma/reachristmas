import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const NotAvailable = () => {
    const navigate = useNavigate();
    useEffect(() => {
        alert("No content")
        navigate("/days")
    }, [navigate])
    // alert("no content")
    
    return null;
}
 
export default NotAvailable;