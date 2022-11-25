import React from "react";
import { Navbar,Container,Nav,Dropdown, NavDropdown, Tab } from "react-bootstrap";


export const NavBar = ()=>{
    return(
    <Navbar bg="light" sticky="left"expand="md" variant="light">

        <Container fluid>
        
            <Navbar.Collapse >
                <Nav className="me-auto">

                    <NavDropdown title="" id="navbarScrollingDropdown">                  
                    <NavDropdown title="Root of Equation" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/Bisection">Bisection</NavDropdown.Item>
                        <NavDropdown.Item href="/False-Position">False-Position</NavDropdown.Item>
                        <NavDropdown.Item href="/One-Point">One-Point</NavDropdown.Item>
                        <NavDropdown.Item href="/Newton">Newton-Raphson</NavDropdown.Item>
                        <NavDropdown.Item href="/Secant">Secant</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Linear Algebra" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/Carmer">Carmer</NavDropdown.Item>
                        <NavDropdown.Item href="/newpage">newpage</NavDropdown.Item>
                        <NavDropdown.Item href="/GaussJordan">Gauss Jordan</NavDropdown.Item>
                        <NavDropdown.Item href="/MatrixInversion">Matrix Inversion</NavDropdown.Item>
                        <NavDropdown.Item href="/LU">LU</NavDropdown.Item>
                        <NavDropdown.Item href="/Cholesky">Cholesky</NavDropdown.Item>
                        <NavDropdown.Item href="/Jacobi">Jacobi</NavDropdown.Item>
                        <NavDropdown.Item href="/GaussSeidel">Gauss Seidel</NavDropdown.Item>
                        <NavDropdown.Item href="/Conjugate">Conjugate</NavDropdown.Item>
                    </NavDropdown>
                                        
                    <NavDropdown title="Interpolation and Extrapolation" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/Newton">Newton</NavDropdown.Item>
                        <NavDropdown.Item href="/Lagrange">Lagrange</NavDropdown.Item>
                        <NavDropdown.Item href="/Spline">Spline</NavDropdown.Item>
                    </NavDropdown>
                    </NavDropdown>  
                    
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}
// * <NavDropdown title="Root of Equation" id="navbarScrollingDropdown">
// *    <NavDropdown.Item href="/Bisection">Bisection</NavDropdown.Item>
// * </NavDropdown>