import React, { useState, useEffect } from 'react';
import { Button, Card } from 'antd';
import { useHistory } from 'react-router-dom';
import './styles.css'

import api from '../../services/api'

export default function Home() {
    const [users, setUsers] = useState([])

    const history = useHistory()

    useEffect(() => {
        api.get('read.php')
            .then(res => {
                setUsers(res.data)
            })
    })

    return (
        <div className="content">
            {users.map(user => (
                <Card key={user.id_user}>
                    <strong>Nome</strong>
                    <h2>{user.name}</h2>

                    <strong>Email</strong>
                    <p>{user.email}</p>
                </Card>
            ))}
        </div>
    )
}