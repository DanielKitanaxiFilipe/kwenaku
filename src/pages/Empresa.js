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
import listadeEmpresa from './../util/empresList.json'

function Empresa() {
  const [showEliminar, setShowEliminar] = useState(false);
  const eliminarClose = () => setShowEliminar(false);
  const eliminarShow = () => setShowEliminar(true);

  const [showEnviarSenha, setShowEnviarSenha] = useState(false);
  const enviarSenhaClose = () => setShowEnviarSenha(false);
  const enviarSenhaShow = () => setShowEnviarSenha(true);
  const [empresLists, setempresLists] = useState ([]);

  useEffect(() => {
    
    loadempresList();
    console.log(empresLists)
  })

  async function loadempresList(){
    await setempresLists(listadeEmpresa.empresList);
  }

  return <main className='dashbord d-flex'>
    <Menu/>
    <section className='h-100 w-100'>
      <Container className='p-4'>
        <h5 className='mb-4'><b>Pagina inicial</b></h5>
        <Card className='card-table'>
            <Card.Body>
              <div className='d-flex justify-content-between'>
                <div><h6><b>Empresas</b></h6></div>
                <div>
                <div className="input-group input-group-sm border rounded">
                  <input type="text" className="form-control border-0" placeholder="Pesquisar empresa" />
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
                    <th className='ps-4'>Logo</th>
                    <th>Nome da empresa</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Endereço</th>
                    <th>N de funcionario</th>
                    <th>Estado</th>
                    <th className='pe-4 text-right'>Acção</th>
                  </tr>
                </thead>
                <tbody>
                {
                empresLists?.map(empresList => (
                <tr>
                  <td className='ps-4 p-2'><img src={logoE} className="rounded" width={23} /></td>
                  <td>{empresList.nome}</td>
                  <td>{empresList.email}</td>
                  <td>{empresList.telefone}</td>
                  <td>{empresList.endereco}</td>
                  <td>{empresList.numeroDeFeuncion}</td>
                  <td><span class="badge rounded-pill bg-primary">Activo</span></td>
                  <td className='text-right p-2 pe-4'>
                  <Dropdown>
                      <Dropdown.Toggle className='p-0 btn-dropdown' id="dropdown-basic">
                        <HiOutlineDotsVertical/>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
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
export default Empresa;