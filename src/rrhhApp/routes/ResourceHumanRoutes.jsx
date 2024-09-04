import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo from '../../assets/logo.png'

export const ResourceHumanRoutes = () => {
  const [anchorElAsistencias, setAnchorElAsistencias] = useState(null);
  const [anchorElDocumentos, setAnchorElDocumentos] = useState(null);
  const [optionsAnchorEl, setOptionsAnchorEl] = useState(null);

  const handleMenuOpen = (event, menuSetter) => {
    menuSetter(event.currentTarget);
  };

  const handleMenuClose = (menuSetter) => {
    menuSetter(null);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="logo">
          <img src={logo} alt="Logo" style={{ width: 40, height: 40 }} />
        </IconButton>
        <Box sx={{ flexGrow: 1 }}>
          <Button
            color="inherit"
            onClick={(event) => handleMenuOpen(event, setAnchorElAsistencias)}
          >
            Asistencias
            {/* <IconButton color="inherit" onClick={(event) =>handleMenuOpen(event, setAnchorElAsistencias)}>
              <ExpandMoreIcon />
            </IconButton> */}
          </Button>
          
          <Menu
            anchorEl={anchorElAsistencias}
            open={Boolean(anchorElAsistencias)}
            onClose={() => handleMenuClose(setAnchorElAsistencias)}
          >
            <MenuItem onClick={() => handleMenuClose(setAnchorElAsistencias)}>Control Asistencia</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElAsistencias)}>Permisos</MenuItem>
          </Menu>
          <Button
            color="inherit"
            onClick={(event) => handleMenuOpen(event, setAnchorElDocumentos)}
          >
            Documentos
          </Button>
          <Menu
            anchorEl={anchorElDocumentos}
            open={Boolean(anchorElDocumentos)}
            onClose={() => handleMenuClose(setAnchorElDocumentos)}
          >
            <MenuItem onClick={() => handleMenuClose(setAnchorElDocumentos)}>Pagos</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElDocumentos)}>Contratos</MenuItem>
          </Menu>
          <Button color="inherit">Evaluaciones</Button>
          <Button color="inherit">Perfiles</Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ textAlign: 'right', mr: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>ANGELO WILLIAMS CALSINA MORALES</Typography>
            <Typography variant="body2" color="inherit">Sistemas</Typography>
          </Box>
          <Avatar alt="Profile Picture" src="profile.jpg" />
          <IconButton color="inherit" onClick={(event) => handleMenuOpen(event, setOptionsAnchorEl)}>
            <ExpandMoreIcon />
          </IconButton>
          <Menu
            anchorEl={optionsAnchorEl}
            open={Boolean(optionsAnchorEl)}
            onClose={() => handleMenuClose(setOptionsAnchorEl)}
          >
            <MenuItem onClick={() => handleMenuClose(setOptionsAnchorEl)}>Configuración</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setOptionsAnchorEl)}>Cerrar Sesión</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
