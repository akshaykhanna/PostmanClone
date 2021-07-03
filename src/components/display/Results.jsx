import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import { Container } from 'react-bootstrap';

function Results({ results }) {
  return (
    <Container style={{ marginTop: 20 }} fluid>
      <h5>Response:</h5>
      {results && <ReactJson src={results} />}
    </Container>
  );
}

Results.propTypes = {
  results: PropTypes.any.isRequired,
};

export default Results;
