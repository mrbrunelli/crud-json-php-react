import React, { useState, useEffect } from 'react';
import { Button, Card } from 'antd';
import { useHistory } from 'react-router-dom';
import './styles.css'
import axios from 'axios'

import api from '../../services/api'

export default function Home() {
    const [users, setUsers] = useState([])

    const history = useHistory()

    useEffect(() => {
        api.get('read.php')
            .then(res => {
                setUsers(res.data)
            })

        // fetch("http://localhost/MatheusRicardoBrunelli/crud-react/backend/read.php", {
        //     "method": "GET",
        //     "mode":"no-cors"
        // })
        //     .then(response => {
        //         console.log(response);
        //     })
    })

    return (
        <div className="content">
            {users.map(user => (
                <Card key={user.id_user} className="card">
                    <strong>Nome</strong>
                    <h2>{user.name}</h2>

                    <strong>Email</strong>
                    <p>{user.email}</p>
                </Card>
            ))}
        </div>
    )
}