import React from 'react';
import { 
  Col,
  Card 
} from 'react-bootstrap';
import { 
  HiOutlineOfficeBuilding,
  HiOutlineUsers,
  HiOutlineViewGrid,
  HiOutlineHome
 } from "react-icons/hi";

export function Cards() {
  return (
    <>
    <Col md={3} className='mb-4'>
            <Card>
              <Card.Body className='d-flex justify-content-between align-items-center'>
                <div>
                  <h6><b>Empresas</b></h6>
                 <b>00</b>
                </div>
                <HiOutlineOfficeBuilding className='icon-card text-primary'/>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className='mb-4'> 
            <Card>
              <Card.Body className='d-flex justify-content-between align-items-center'>
                <div>
                  <h6><b>Usuario</b></h6>
                 <b>00</b>
                </div>
                <HiOutlineUsers className='icon-card text-success'/>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className='mb-4'>
            <Card>
              <Card.Body className='d-flex justify-content-between align-items-center'>
                <div>
                  <h6><b>Quadras</b></h6>
                 <b>00</b>
                </div>
                <HiOutlineViewGrid className='icon-card text-danger'/>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className='mb-4'>
            <Card>
              <Card.Body className='d-flex justify-content-between align-items-center'>
                <div>
                  <h6><b>Lotes</b></h6>
                 <b>00</b>
                </div>
                <HiOutlineHome className='icon-card text-secondary'/>
              </Card.Body>
            </Card>
          </Col>
          
    </>
  );
}