import React from 'react'
import {useSelector} from 'react-redux'


export default function SettingPage() {
    const user = useSelector((state)=>state.user.value);

    return (
        <div>
            <h2>Settings page</h2>
            <h6>User information</h6>
            <p>Name:{user.name}</p>
            <p>Username:{user.username}</p>

        </div>
    )
}
