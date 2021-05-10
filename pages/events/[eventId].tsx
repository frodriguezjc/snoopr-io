import { Button } from '@paljs/ui/Button';
import { Card, CardBody, CardHeader } from '@paljs/ui/Card';
import Col from '@paljs/ui/Col';
import { InputGroup } from '@paljs/ui/Input';
import Row from '@paljs/ui/Row';
import Layout from 'Layouts';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

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

const EventView = () => {
  const router = useRouter();
  let { eventId, name, date } = router.query;
  const [events, setEvents] = useState(null);

  return (
    <Layout title="EventDetail">
      <BorderedRow></BorderedRow>

      <Row>
        <ErrorStyle>
          <Col breakPoint={{ xs: 12, sm: 12 }}>
            <Card>
              <CardHeader>
                <h3>{name}</h3>
              </CardHeader>
              <CardBody>
              <Row> 
                <Col breakPoint={{ xs: 12, sm: 10 }}>
                  <div>
                    <p>ID: {eventId}</p>
                    <p>📖 Date: {date}</p>
                  </div>
                </Col>
                <Col breakPoint={{ xs: 12, sm: 2 }}>
                  <Button status="Primary" shape="SemiRound"> Enrich </Button>
                  <Button status="Info" shape="SemiRound"> Send Email </Button>
                  <Button status="Control" shape="SemiRound" onClick={() => router.push('/')}> Go Back </Button>
                </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </ErrorStyle>
      </Row>
    </Layout>
  );
};
export default EventView;
