import React from 'react';
import { 
  HiChevronLeft,
  HiChevronRight,
  HiOutlineEye
} from 'react-icons/hi';
import { 
  Container,
  Card,
  Button
} from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
export function Bibilioteca() {
  return <main className='painel h-100 w-100'>
  <section className='container-painel'>
    <Container className='p-4'>
      <div className="d-flex justify-content-between">
       <div><h5 className='mb-4'><b>Bibilioteca</b></h5></div>
       <div className='ms-2'>
        <Button variant="primary" className='rounded-10'>Fazer pedido</Button>
       </div>
      </div>
      <div className="btn-group">
        <NavLink to='/' className="btn btn-tab-navLink border-0 ps-4 pe-4 btn-primary btnRbl">Bibilioteca</NavLink>
        <NavLink to='/' className="btn btn-tab-navLink border-0 ps-4 pe-4 btn-primary">Livros</NavLink>
        <NavLink to='/' className="btn btn-tab-navLink border-0 ps-4 pe-4 btn-primary">Reservas</NavLink>
        <NavLink to='/' className="btn btn-tab-navLink border-0 ps-4 pe-4 btn-primary">Ultimas requisiçoes</NavLink>
        <NavLink to='/' className="btn btn-tab-navLink border-0 ps-4 pe-4 btn-primary btnRbr">Entregues</NavLink>
      </div>
      <Card className='card-table border-top-l'>
          <Card.Body>
          </Card.Body>
           <div className='Table_dados'>
            <table className="table" striped bordered hover>
              <thead>
                <tr>
                  <th className='ps-4'>Nome</th>
                  <th>Telefone</th>
                  <th>Email</th>
                  <th>Livro</th>
                  <th>Codigo do livro</th>
                  <th>Data de pedido</th>
                  <th>Estado</th>
                  <th className='pe-4 text-right'>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='ps-4'>???</td>
                  <td>???</td>
                  <td>???</td>
                  <td>???</td>
                  <td>???</td>
                  <td>???</td>
                  <td>???</td>
                  <td className='pe-4 text-right'>
                    <div className='icon-marg'><Link to='/chat' className='hiOutlineEye-tab-link'><HiOutlineEye/></Link></div>
                  </td>
                </tr>
              </tbody>
            </table>
           </div>
          <Card.Body>
            <div className='pagination d-flex justify-content-between'>
              <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn"><HiChevronLeft className='icon-btn-pagination'/></button>
                <button type="button" className="btn"><HiChevronRight className='icon-btn-pagination'/></button>
              </div>
              <div><h6><b>3 ate 10</b></h6></div>
            </div>
          </Card.Body>
      </Card>
    </Container>
  </section>
</main>
}