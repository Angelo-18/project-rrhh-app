import React, { useState } from 'react';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select, Box, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterAreaPage= () => {
  const [empresa, setEmpresa] = useState('');
  const [area, setArea] = useState('');
  const [clave, setClave] = useState('');

  const handleEmpresaChange = (event) => {
    setEmpresa(event.target.value);
  };

  const handleAreaChange = (event) => {
    setArea(event.target.value);
  };

  const handleClaveChange = (event) => {
    setClave(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Manejar el registro aquí
    console.log('Empresa:', empresa);
    console.log('Área:', area);
    console.log('Clave de Acceso:', clave);
  };

  return (
    <AuthLayout>
        <form onSubmit={handleSubmit } >
      <Typography variant="h6">Selección de Empresa y Area</Typography>
      <FormControl fullWidth xs={ 12 } sx={{ mt: 2 }}>
        <InputLabel id="empresa-label">Empresa</InputLabel>
        <Select
          labelId="empresa-label"
          id="empresa"
          value={empresa}
          label="Empresa"
          onChange={handleEmpresaChange}
          
        >
          <MenuItem value="Taxitel">Taxitel</MenuItem>
          <MenuItem value="Megatur">Megatur</MenuItem>
          <MenuItem value="Alo45">Alo45</MenuItem>
          <MenuItem value="Unicar">Unicar</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth xs={ 12 } sx={{ mt: 2 }}>
        <InputLabel id="area-label">Área</InputLabel>
        <Select
          labelId="area-label"
          id="area"
          value={area}
          label="Área"
          onChange={handleAreaChange}
        >
          <MenuItem value="informes">Informes</MenuItem>
          <MenuItem value="Administración">Administración</MenuItem>
          <MenuItem value="Facturación">Facturación</MenuItem>
          <MenuItem value="Caja">Caja</MenuItem>
          <MenuItem value="Sistemas">Sistemas</MenuItem>
          <MenuItem value="Contabilidad">Contabilidad</MenuItem>
        </Select>
      </FormControl >
      <TextField
        fullWidth
        label="Clave de Acceso"
        type="password"
        value={clave}
        onChange={handleClaveChange}
        xs={ 12 } 
        sx={{ mt: 2 }}
      />
      <Button variant="contained" color="primary" type="submit" fullWidth xs={ 12 } 
        sx={{ mt: 2 }}>
        Registrar
      </Button>
      </form>
    
    </AuthLayout>
  );
};
