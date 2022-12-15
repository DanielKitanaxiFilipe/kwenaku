import React from "react";
import * as HiIcon from "react-icons/hi";

export const MenuData = [
  {
    title: 'Painel de Controle',
    path: '/dashbord',
    icon: <HiIcon.HiOutlineViewGrid className="icon-menu me-2"/>
  },
  {
    title: 'Empresas',
    path: '/',
    icon: <HiIcon.HiOutlineOfficeBuilding className="icon-menu me-2"/>
  },
  {
    title: 'Usuarios',
    path: '/',
    icon: <HiIcon.HiOutlineUserGroup className="icon-menu me-2"/>
  }
];