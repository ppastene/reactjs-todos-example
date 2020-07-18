import React, { useContext } from 'react';
import { Container, Table, Button } from 'react-bootstrap'
import { AuthContext } from '../contexts/AuthContext'
import jwt from 'jwt-decode' 
import axios from 'axios';

function getTodosByUserId(userId, accessToken) {
  axios.get('http://localhost:4000/todos/user/'+userId, {
    headers: { Authorization: `Bearer ${accessToken}` }
  })
  .then(res => {
    return res
  })
}

export default function Dashboard() {

  const { cookies } = useContext(AuthContext);
  const res = getTodosByUserId(jwt(cookies.auth.token).id, cookies.auth.token)
  
  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <Container>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Tarea</th>
              <th>Estado</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Ordenar habitacion</td>
              <td>In Progress</td>
              <td><Button variant="primary">Actualizar</Button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Comprar alimentos para la semana</td>
              <td>Completed</td>
              <td><Button variant="primary">Actualizar</Button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Recoger automovil del taller</td>
              <td>Assigned</td>
              <td><Button variant="primary">Actualizar</Button></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Lavar la loza</td>
              <td>Assigned</td>
              <td><Button variant="primary">Actualizar</Button></td>
            </tr>
            <tr>
              <td>5</td>
              <td>Ir a dentista</td>
              <td>Completed</td>
              <td><Button variant="primary" disabled>Actualizar</Button></td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
