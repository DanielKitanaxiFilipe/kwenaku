import React, { useState, useEffect } from 'react';
import { Cards } from '../components/Cards';
import Menu from '../components/Menu';
import BarChart from './../components/BarChart';
import { ChartUser } from '../util/userChart'
import { ChartCompany } from '../util/companyChart'
import logoE from './../assets/default.jpg'
import { 
  HiChevronLeft,
  HiChevronRight,
  HiOutlineDotsVertical,
  HiOutlineSearch,
  HiOutlineDocumentText
} from 'react-icons/hi';
import { 
  Container,
  Row,
  Card,
  Dropdown,
  Button,
  Modal,
  Col
} from 'react-bootstrap';
import listadeUsuarios from './../util/userlist.json'

function Usuario() {
  const [showEmpresa, setShowEmpresa] = useState(false);
  const editarEmpresaClose = () => setShowEmpresa(false);
  const editarEmpresaShow = () => setShowEmpresa(true);

  const [showEliminar, setShowEliminar] = useState(false);
  const eliminarClose = () => setShowEliminar(false);
  const eliminarShow = () => setShowEliminar(true);

  const [showEnviarSenha, setShowEnviarSenha] = useState(false);
  const enviarSenhaClose = () => setShowEnviarSenha(false);
  const enviarSenhaShow = () => setShowEnviarSenha(true);

  const [userlists, setuserlists] = useState ([]);
  useEffect(() => {    
    loaduserlist();
    console.log(userlists)
  })
  async function loaduserlist(){
    await setuserlists(listadeUsuarios.userlist);
  }

  return <main className='dashbord d-flex'>
    <Menu/>
    <section className='h-100 w-100'>
      <Container className='p-4'>
        <h5 className='mb-4'><b>Pagina inicial</b></h5>
        <Card className='card-table'>
            <Card.Body>
              <div className='d-flex justify-content-between'>
                <div><h6><b>Usuarios</b></h6></div>
                <div>
                <div className="input-group input-group-sm border rounded">
                  <input type="text" className="form-control border-0" placeholder="Pesquisar usuarios" />
                  <button className='btn-search'>
                    <HiOutlineSearch/>
                  </button>
                </div>
                </div>
              </div>
            </Card.Body>
             <div className='h-tablet-80'>
              <table className="table" striped bordered hover>
                <thead>
                  <tr>
                    <th className='ps-4'>Avatar</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Empresa</th>
                    <th>Estado</th>
                    <th className='pe-4 text-right'>Acção</th>
                  </tr>
                </thead>
                <tbody>
                {
                userlists?.map(userlist => (
                <tr>
                  <td className='ps-4 p-2'><img src={logoE} className="rounded" width={23} /></td>
                  <td>{userlist.nome}</td>
                  <td>{userlist.email}</td>
                  <td>{userlist.numero}</td>
                  <td>{userlist.empresa}</td>
                  <td><span class="badge rounded-pill bg-primary">Activo</span></td>
                  <td className='text-right p-2 pe-4'>
                  <Dropdown>
                      <Dropdown.Toggle className='p-0 btn-dropdown' id="dropdown-basic">
                        <HiOutlineDotsVertical/>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item className='link-tab-drop' onClick={editarEmpresaShow}>Editar</Dropdown.Item>
                        <Dropdown.Item className='link-tab-drop' onClick={enviarSenhaShow}>Redifinir senha</Dropdown.Item>
                        <Dropdown.Item className='link-tab-drop' onClick={eliminarShow}>Eliminar</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    </td>
                  </tr>
                    ))
                }
                </tbody>
              </table>
             </div>
            <Card.Body className='pt-0'>
              <div className='pagination d-flex justify-content-between'>
                <div><h6><b>3 ate 10</b></h6></div>
                <div className="btn-group" role="group" aria-label="Basic example">
                  <button type="button" className="btn"><HiChevronLeft className='icon-btn-pagination'/></button>
                  <button type="button" className="btn"><HiChevronRight className='icon-btn-pagination'/></button>
                </div>
              </div>
            </Card.Body>
        </Card>
      </Container>
    </section>
    {/*Modal*/}
    <Modal show={showEmpresa} backdrop="static" onHide={editarEmpresaClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar informaçpes da empresa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className='p-0'>
            <Row>
              <Col md={12} className='mb-4'>
              <div className="card-form-modal border">
                <div className='label'><span>Nome da empresa</span></div>
                <input type="text" class="form-control" placeholder='Digite o nome da empresa'/>
              </div>
              </Col>
              <Col md={12} className='mb-4'>
              <div className="card-form-modal border">
                <div className='label'><span>Email</span></div>
                <input type="email" class="form-control" placeholder='Digite o email da empresa'/>
              </div>
              </Col>
              <Col md={6}>
              <div className="card-form-modal border">
                <div className='label'><span>Numero</span></div>
                <input type="number" class="form-control" placeholder='Digite o numero da empresa'/>
              </div>
              </Col>
              <Col md={6}>
              <div className="card-form-modal border">
                <div className='label'><span>Endereço</span></div>
                <input type="text" class="form-control" placeholder='Digite o endereço da empresa'/>
              </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={editarEmpresaClose}>
            <b>Cancelar</b>
          </Button>
          <Button variant="dark" onClick={editarEmpresaClose}>
            Adicionar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEliminar} size="sm" onHide={eliminarClose}>
        <Modal.Body>
          <div className='p-4 text-center pb-2'>
            <b className='font-17'>Tem certeza que deseja elininar  essa informação</b>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={eliminarClose}>
            <b>Não</b>
          </Button>
          <Button variant="dark" onClick={eliminarClose}>
            Sim
          </Button>
        </Modal.Footer>
  </Modal>

  <Modal show={showEnviarSenha} size="sm" onHide={enviarSenhaClose}>
        <Modal.Body>
        <div className='p-4 text-center pb-2'>
            <b className='font-17'>Tem certeza que deseja alterar senha</b>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={enviarSenhaClose}>
            <b>Cancelar</b>
          </Button>
          <Button variant="dark" onClick={enviarSenhaClose}>
            Reviar senha
          </Button>
        </Modal.Footer>
  </Modal>
  </main>
}
export default Usuario;