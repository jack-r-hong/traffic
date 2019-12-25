import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button , Form, Alert, Navbar, Nav, FormControl } from 'react-bootstrap';


export default function AppBar () {
    const [navAction, setNavAction] = useState('home')
    


    return(

        <div>  
            
              
                <Navbar bg="dark" variant="dark" expand="md"  fixed='top'>
                    <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />  
                    <Navbar.Brand href="/" className='ml-auto mr-auto'>車流紀錄系統</Navbar.Brand>                
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto" variant="pills" activeKey={location.pathname} >
                            <Nav.Link href="/read-data" eventKey="/read-data">查詢路口</Nav.Link>
                            <Nav.Link href="/add-data" eventKey="/add-data">新增流量資料</Nav.Link>
                            <Nav.Link href="/add-new-location-data" eventKey="/add-new-location-data">新增地點</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>   
                    </Container> 

                </Navbar>
            
                                 
            
      


        </div>
    );
}