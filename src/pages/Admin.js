import React, { useState } from 'react';
import { Container, Table, Button, Tabs, Tab, Row, Col } from 'react-bootstrap'

function ControlledTabs() {
    const [key, setKey] = useState('users');
  
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="users" title="Usuarios">
            <h2>Usuarios</h2>
            <Table>
            <thead>
                <tr>
                <th>#</th>
                <th>Usuario</th>
                <th>Email</th>
                <th>Tipo</th>
                <th>Accion</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Pedrito</td>
                <td>pedrito@bruh.cl</td>
                <td>Usuario</td>
                <td><Button variant="primary">Actualizar</Button></td>
                </tr>
                <tr>
                <td>2</td>
                <td>Smitty</td>
                <td>smitty@bruh.cl</td>
                <td>Usuario</td>
                <td><Button variant="primary">Actualizar</Button></td>
                </tr>
                <tr>
                <td>3</td>
                <td>F.Camiroaga666</td>
                <td>fcamiroaga@tvn.cl</td>
                <td>Usuario</td>
                <td><Button variant="primary">Actualizar</Button></td>
                </tr>
                <tr>
                <td>4</td>
                <td>Colombiano Ese</td>
                <td>acm1pt@bruh.cl</td>
                <td>Usuario</td>
                <td><Button variant="primary">Actualizar</Button></td>
                </tr>
            </tbody>
            </Table>
        </Tab>
        <Tab eventKey="todos" title="Tareas">
            <h2>Tareas</h2><Button variant="primary">Nueva tarea</Button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tarea</th>
                        <th>Estado</th>
                        <th>Usuario Asignado</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Ordenar Habitacion</td>
                        <td>In Progress</td>
                        <td>Pablito</td>
                        <td><Button variant="primary">Actualizar</Button><Button variant="danger">Borrar</Button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Comprar Alimentos para la semana</td>
                        <td>Completed</td>
                        <td>Pablito</td>
                        <td><Button variant="primary">Actualizar</Button><Button variant="danger">Borrar</Button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Recoger automovil del taller</td>
                        <td>Assigned</td>
                        <td>Pablito</td>
                        <td><Button variant="primary">Actualizar</Button><Button variant="danger">Borrar</Button></td>
                    </tr>
                </tbody>
            </Table>
        </Tab>
      </Tabs>
    );
  }

export default function Admim() {
  
  return (
    <div className="Administration">
      <h1>Administration</h1>
      <Container>
        <ControlledTabs />
      </Container>
    </div>
  );
}
