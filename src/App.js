import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AuthContextProvider from './contexts/AuthContext';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import Admin from './pages/Admin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie';
import ProtectedRoute from './components/ProtectedRoute';
 
function App() {
  return (
    <CookiesProvider>
      <Router>
        <div className="App">
          <AuthContextProvider>
            <Navigation />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <ProtectedRoute path="/dashboard" component={Dashboard} />
              <ProtectedRoute path="/admin" component={Admin} />
            </Switch>
          </AuthContextProvider>
        </div>
      </Router>
    </CookiesProvider>
  );
}

export default App;
