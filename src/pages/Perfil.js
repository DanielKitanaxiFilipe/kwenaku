import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu';
import user from './../assets/phots/userF.png'
import { 
  Container,
  Row,
  Card,
  Dropdown,
  Button,
  Modal,
  Col
} from 'react-bootstrap';

function Perfil() {
  return <main className='perfil d-flex'>
    <Menu/>
    <section className='h-100 w-100'>
      <Container className='p-4'>
        <h5 className='mb-4'><b>Perfil</b></h5>
        <div className="card-perfil"/>
        <div>
          <div className="avatarp">
            <img src={user} alt="" />
          </div>
        </div>
        <Row>
          <Col md={6} className="mb-4">
          <Card>
          <Modal.Header closeButton>
            <Modal.Title>Informação do usuario</Modal.Title>
          </Modal.Header>
            <card className="card-body p-0">
            <Container className='p-4'>
            <Row>
              <Col md={12} className='mb-4'>
              <div className="card-form-modal border">
                <div className='label'><span>Nome</span></div>
                <input type="text" class="form-control" placeholder='Digite o seu nome' value={"Daniel Kitanaxi Filipe"}/>
              </div>
              </Col>
              <Col md={12} className='mb-4'>
              <div className="card-form-modal border">
                <div className='label'><span>Email</span></div>
                <input type="email" class="form-control" placeholder='Digite seu email' value={"danielfili@12.gmail"}/>
              </div>
              </Col>
              <Col md={6} className="mb-4">
              <div className="card-form-modal border">
                <div className='label'><span>Numero</span></div>
                <input type="number" class="form-control" placeholder='Digite seu numero' value={924660115}/>
              </div>
              </Col>
              <Col md={6} className="mb-4">
              <div className="card-form-modal border">
                <div className='label'><span>Endereço</span></div>
                <input type="text" class="form-control" placeholder='Digite seu endereço' value={"Luanda/Cazenga"}/>
              </div>
              </Col>
              <Col md={6}>
              <div className="card-form-modal border">
                <div className='label'><span>Empresa</span></div>
                <input type="text" class="form-control" placeholder='Digite a empresa afiliada' value={"Meta"}/>
              </div>
              </Col>
              <Col md={6}>
              <div className="card-form-modal border">
                <div className='label'><span>Cargo</span></div>
                <input type="text" class="form-control" placeholder='Digite seu endereço' value={"Programador"}/>
              </div>
              </Col>
            </Row>
          </Container>
            </card>
            <Modal.Footer>
              <Button variant="dark">
                Salva alteração
              </Button>
            </Modal.Footer>
          </Card>
          </Col>
          <Col md={6} className="mb-4">
          <Card>
          <Modal.Header closeButton>
            <Modal.Title>Alterar senha</Modal.Title>
          </Modal.Header>
            <card className="card-body p-0">
            <Container className='p-4'>
            <Row>
              <Col md={12} className='mb-4'>
              <div className="card-form-modal border">
                <div className='label'><span>Senha</span></div>
                <input type="password" class="form-control" placeholder='Nova senha'/>
              </div>
              </Col>
              <Col md={12} className='mb-4'>
              <div className="card-form-modal border">
                <div className='label'><span>Confirma senha</span></div>
                <input type="password" class="form-control" placeholder='Confirma senha'/>
              </div>
              </Col>
            </Row>
          </Container>
            </card>
            <Modal.Footer>
              <Button variant="dark">
                Alterar senha
              </Button>
            </Modal.Footer>
          </Card>
          </Col>
        </Row>
      </Container>
    </section>
  </main>
}
export default Perfil;