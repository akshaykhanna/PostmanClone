import React from 'react';
import PropTypes from 'prop-types';
import { Form, Col, Row, Button } from 'react-bootstrap';

function Search({
  handleSubmit,
  handleUrlChange,
  handleMethod,
  handleJson,
  url,
  radioInput,
  json,
}) {
  return (
    <Form name="search-form" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Request Endpoint Here</Form.Label>
        <Form.Control
          placeholder="https://www.someUrl.com"
          value={url}
          onInput={handleUrlChange}
        />
      </Form.Group>
      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            HTTP verb:
          </Form.Label>
          {/* <Col sm={10}> */}
          <Form.Check
            column
            sm={2}
            type="radio"
            label="GET"
            name="method"
            value="GET"
            checked={radioInput === 'GET'}
            onChange={handleMethod}
            id="formHorizontalRadios1"
          />
          <Form.Check
            column
            sm={2}
            type="radio"
            name="method"
            value="POST"
            label="POST"
            checked={radioInput === 'POST'}
            onChange={handleMethod}
            id="formHorizontalRadios2"
          />
          <Form.Check
            column
            sm={2}
            type="radio"
            name="method"
            value="PUT"
            label="PUT"
            checked={radioInput === 'PUT'}
            onChange={handleMethod}
            id="formHorizontalRadios3"
          />
          <Form.Check
            column
            sm={2}
            type="radio"
            name="method"
            value="PATCH"
            label="PATCH"
            checked={radioInput === 'PATCH'}
            onChange={handleMethod}
            id="formHorizontalRadios4"
          />
          <Form.Check
            column
            sm={2}
            type="radio"
            name="method"
            value="DELETE"
            label="DELETE"
            checked={radioInput === 'DELETE'}
            onChange={handleMethod}
            id="formHorizontalRadios4"
          />
          {/* </Col> */}
        </Form.Group>
      </fieldset>
      <Form.Control
        as="textarea"
        placeholder="Raw JSON Request"
        style={{ height: '100px' }}
        value={json}
        aria-label="json-request"
        onInput={handleJson}
      />
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
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
