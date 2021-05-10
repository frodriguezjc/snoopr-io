import React, { useState } from 'react';
import Layout from 'Layouts';
import { InputGroup } from '@paljs/ui/Input';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import { Button } from '@paljs/ui/Button';
import axios from 'axios';

const fetch = require('node-fetch');
const cheerio = require('cheerio');

import styled from 'styled-components';
import { Card, CardBody, CardHeader } from '@paljs/ui/Card';

const Input = styled(InputGroup)`
  margin-bottom: 10px;
`;

const BorderedRow = styled(Row)`
  border-bottom: 2px solid lightgray;
  margin-bottom: 2em;
`;

const ErrorStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  small {
    margin-bottom: 3rem;
  }
  h1 {
    margin-bottom: 0.5rem;
  }
  a {
    max-width: 20rem;
  }
`;

const Snoop = () => {
  const [events, setEvents] = useState(null);

  const fetchData = async () => {
    const response = await axios.get('https://www.anapioficeandfire.com/api/books?pageSize=30');

    setEvents(response.data);
  };

  const fetchEvents = async () => {
    const response = await axios('/api/eventbrite');
    
    debugger;
    setEvents(response.data.events);
  };

  return (
    <Layout title="Snoop">
      <BorderedRow>
        <Col breakPoint={{ xs: 12, sm: 5 }}>
          <Input fullWidth>
            <input type="text" placeholder="What: Gala" />
          </Input>
        </Col>
        <Col breakPoint={{ xs: 12, sm: 5 }}>
          <Input fullWidth>
            <input type="text" placeholder="Where: San Francisco" />
          </Input>
        </Col>
        <Col breakPoint={{ xs: 12, sm: 2 }}>
          <Button shape="SemiRound" onClick={fetchEvents}>
            {' '}
            Snoop
          </Button>
        </Col>
      </BorderedRow>

      <Row>
        {!events && (
          <ErrorStyle>
            <h3>Lets find some events</h3>
          </ErrorStyle>
        )}
      </Row>
      <Row>
        {events &&
          events.map((event, index: number) => {
            return (
              <Col breakPoint={{ xs: 12, sm: 6 }}>
                <Card>
                  <CardHeader>
                  <h1>{event.name}</h1>
                  </CardHeader>
                  <CardBody>
                    <div>
                      <p>👨: {event.id}</p>
                      <p>📖: {event.link}</p>
                      <p>🏘️: {event.location}</p>
                      <p>⏰: {event.date}</p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
      </Row>
    </Layout>
  );
};
export default Snoop;
