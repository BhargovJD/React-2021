import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
export default function Profile() {
    let navigate = useNavigate();
    let {username} = useParams();
    return (
        <div>
            <div>
                <h2>This is Profile Component</h2>
                <h3>{username}</h3>
                <button onClick={()=>navigate("/")}>Back to home page</button>
            </div>
        </div>
    )
}
