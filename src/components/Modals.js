import React,  { useState, useEffect } from 'react';
import { Modal, 
        Button,
        Col,
        Container,
        Row
} from 'react-bootstrap';

export function Modals() {
  const [showEnviarSenha, setShowEnviarSenha] = useState(false);
  const enviarSenhaClose = () => setShowEnviarSenha(false);
  const enviarSenhaShow = () => setShowEnviarSenha(true);
  return (<>
  <div><Button variant="primary" onClick={enviarSenhaShow}>
    Launch demo modal
  </Button></div>
  <Modal show={showEnviarSenha} size="sm" onHide={enviarSenhaClose}>
        <Modal.Body>
        <div className='p-4 text-center pb-2'>
            <b className='font-17'>Tem certeza que deseja alterar senha</b>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={enviarSenhaClose}>
            <b>Não</b>
          </Button>
          <Button variant="dark" onClick={enviarSenhaClose}>
            Sim
          </Button>
        </Modal.Footer>
  </Modal>
  </>);
}