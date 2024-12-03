import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export const Header = () => {
  const user = localStorage.user ? JSON.parse(localStorage.user) : undefined;

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      className="justify-content-center mb-3 bg-body-tertiary"
    >
      <Nav>
        {user?.rol == "administrator" && (
          <>
            <Nav.Item>
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/list-users">Lista de usuarios</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/list-q">Lista de cuestionarios</Nav.Link>
            </Nav.Item>
          </>
        )}
        {user?.rol == "client" && (
          <Nav.Item>
            <Nav.Link href="/list-q">Home</Nav.Link>
          </Nav.Item>
        )}
        <Nav.Item>
          <Nav.Link onClick={() => logout()}>Cerrar sesión</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};
