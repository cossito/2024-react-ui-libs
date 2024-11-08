import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {Main, Box, Form, TextInput, FormField, Button, PageHeader, List} from 'grommet';


const Feed: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
        <Main>
        <PageHeader
                title="Lista de Tarefas"
        />
        <Box>
            <List
                primaryKey="nome"
                secondaryKey="percent"
                data={[
                  { name: 'Alan', percent: 20 },
                  { name: 'Bryan', percent: 30 },
                  { name: 'Chris', percent: 40 },
                  { name: 'Eric', percent: 80 },
                ]}
            />
        </Box>
        </Main>
    </div>
  );
};

export default Feed;