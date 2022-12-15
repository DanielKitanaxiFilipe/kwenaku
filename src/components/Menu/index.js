import React, { useState } from 'react';
import styled from 'styled-components';
import { MenuData } from './MenuData';
import logo from './../../assets/logo.svg'
import SubMenu from './SubMenu';
import { Container,Dropdown } from 'react-bootstrap';
import { HiOutlineChat, HiOutlineUser } from 'react-icons/hi';
import user from './../../assets/phots/userF.png'
const SidebarNav = styled.nav`
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
`;

const Menu = () => {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  return (  
    <SidebarNav className='menu' sidebar={sidebar} >
      <div className="logo mb-4">
        <img src={logo} alt="" />
      </div>
      <Container>
      <div className='mb-3 text-menu'>Meu menu</div>
      {MenuData.map((item, index) => {
       return <SubMenu item={item} key={index}  />;
      })}
      </Container>
      <div className='menuHelp mt-4'>
        <Container>
          <div className='mb-3 text-menu'>Ajuda & Configurações</div>
          <a className='a-link-disabled'>
          <HiOutlineChat className='icon-menu me-1'/> Ajuda & Call Center
          </a>
        </Container>
      </div>
      <div className="main-menu  border-bottom-0">
      <div className='d-flex  align-items-center menu-rodape position-absolute p-4 bottom-0 justify-content-between'>
        <div className='d-flex align-items-center'>
          <div className="avatar">
            {/*<HiOutlineUser/>*/}
            <img src={user} alt="" />
          </div>
          <font className="ms-2">Daniel Filipe</font>
        </div>
        <div>
        <Dropdown>
          <Dropdown.Toggle className='p-0 btn-dropdown' id="dropdown-basic"/>
          <Dropdown.Menu className='shadow dropdown-menu'>
            <Dropdown.Item className='dropdown-item' href="/">Perfil</Dropdown.Item>
            <Dropdown.Item href="/">Sair</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </div>
      </div>
    </div>
    </SidebarNav>
    );
};

export default Menu;