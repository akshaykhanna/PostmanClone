import React from 'react';
import PropTypes from 'prop-types';
import { Form, Col, Container, Row, Button } from 'react-bootstrap';

function Search({
  handleSubmit,
  handleUrlChange,
  handleMethod,
  handleJson,
  url,
  json,
}) {
  return (
    <Container style={{ marginTop: 20 }} fluid>
      <Form name="search-form" onSubmit={handleSubmit}>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Col sm={1}>
            <Form.Control
              required
              type="text"
              as="select"
              onChange={handleMethod}
              name="selectedFromBucket"
            >
              <option key={0} value="GET">
                GET
              </option>
              <option key={1} value="POST">
                POST
              </option>
              <option key={2} value="PUT">
                PUT
              </option>
              <option key={3} value="PATCH">
                PATCH
              </option>
              <option key={4} value="DELETE">
                DELETE
              </option>
            </Form.Control>
          </Col>
          <Col sm={10}>
            <Form.Control
              placeholder="https://www.someUrl.com"
              value={url}
              onInput={handleUrlChange}
            />
          </Col>
          <Col sm={1}>
            <Button variant="primary" type="submit">
              Sent
            </Button>
          </Col>
        </Form.Group>
        <Form.Control
          as="textarea"
          placeholder="Raw JSON Request"
          style={{ height: '100px' }}
          value={json}
          aria-label="json-request"
          onInput={handleJson}
        />
      </Form>
    </Container>
  );
}

Search.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleUrlChange: PropTypes.func.isRequired,
  handleMethod: PropTypes.func.isRequired,
  handleJson: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  radioInput: PropTypes.string.isRequired,
  json: PropTypes.string.isRequired,
};

export default Search;
