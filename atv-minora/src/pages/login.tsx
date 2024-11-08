import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {Main, Box, Form, TextInput, FormField, Button, PageHeader} from 'grommet';


const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
        <Main fill="vertical" background="url(src/assets/rena.jpg)">
            <PageHeader
                title="Login"
                margin={{vertical: "0", horizontal: "auto"}}
            />
            <Box    
                pad='medium'
                background='white'
                border={{ color: 'brand', size: 'medium' }}
                align='center'
                alignSelf='center'
                width='medium'
                margin={{bottom: "xlarge"}}
            >
                <Form>
                    <FormField name="name" htmlFor="text-input-id" label="Nome">
                        <TextInput id="text-input-id" name="name" />
                    </FormField>
                    <FormField name="senha" htmlFor="senha" label="Senha">
                        <TextInput id="senha" name="senha" />
                    </FormField>
                    <Box direction="row" gap="medium">
                        <Button type="submit" primary label="Fazer login" />
                        <Button type="reset" label="Cancelar" />
                    </Box>
                </Form>
            </Box>
        </Main>
    </div>
  );
};

export default Login;