import React from 'react';
import { Cards } from '../components/Cards';
import Menu from '../components/Menu';
import { 
  HiChevronLeft,
  HiChevronRight 
} from 'react-icons/hi';
import { 
  Container,
  Row,
  Card,
  Table
} from 'react-bootstrap';

function Dashbord() {
  return <main className='dashbord d-flex'>
    <Menu/>
    <section className='h-100 w-100'>
      <Container className='p-4'>
        <h5 className='mb-4'><b>Pagina inicial</b></h5>
        <Row>
          <Cards/>
        </Row>
        <Card className='card-table'>
            <Card.Body>
              <div>
                <div><h6><b>Empresas</b></h6></div>
              </div>
            </Card.Body>
             <div className='h-tablet'>
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
                  <tr>
                    <td className='ps-4'>Logo</td>
                    <td>Nome da empresa</td>
                    <td>Email</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Email</td>
                    <td>Otto</td>
                    <td className='pe-4 text-right'>@mdo</td>
                  </tr>
                </tbody>
              </table>
             </div>
            <Card.Body>
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
  </main>
}
export default Dashbord;