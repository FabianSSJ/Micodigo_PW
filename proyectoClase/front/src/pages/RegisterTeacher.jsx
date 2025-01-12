// Importar React y los componentes de Material-UI
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

import { Services } from '../services/service';

import configs from '../configs/env';


const RegisterTeacher = () => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await Services(
            {
                name: name,
                last_name: lastName,
                email: email
            },
            configs.routes.teacher.create);

        console.log("tenemos respuesta ", response);
    };

    return (
        <Container>
            <Box mt={4}>
                <Typography variant="h4" gutterBottom>
                    Formulario de RegisterTeacher
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Nombre"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        label="Apellido"
                        variant='outlined'
                        fullWidth
                        margin='normal'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <TextField
                        label="Correo Electrónico"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        Enviar
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default RegisterTeacher;