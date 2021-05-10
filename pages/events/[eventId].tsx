import { Button } from '@paljs/ui/Button';
import { Card, CardBody, CardHeader } from '@paljs/ui/Card';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import Layout from '../../Layouts';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import axios from 'axios';
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

  const [companyURL, setURL] = useState(undefined);

  const findURL = async () => {
    var token = 'CUBPQOLX4G3S43G3ZPDZ';
    var url = `https://www.eventbriteapi.com/v3/events/${eventId}/?token=${token}`;
    const response = await axios(url);
   
    setURL(response.data.description.text);
  };

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
                  <Col breakPoint={{ xs: 12, sm: 3 }}>
                    <img height="200" src="https://picsum.photos/200/300" />
                  </Col>
                  <Col breakPoint={{ xs: 12, sm: 6 }}>
                    <div>
                      <p>ID: {eventId}</p>
                      <p>📖 Date: {date}</p>
                    </div>

                    {!companyURL && <div> No URL's yet</div>}

                    {companyURL && <div> URL: {companyURL}</div>}
                  </Col>
                  <Col breakPoint={{ xs: 12, sm: 2 }}>
                    <Button status="Control" onClick={findURL}>Company URL</Button>
                    <Button status="Control">Enrich</Button>
                    <Button status="Control">Send Email</Button>
                    <Button status="Control" onClick={() => router.push('/dashboard')}>
                      Go Back
                    </Button>
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
