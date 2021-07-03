import React, { useState } from 'react';
import Search from '../components/controls/Search';
import Results from '../components/display/Results';
import { Request } from '../services/request-utils';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function PostPage() {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [req, setReq] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const results = await Request(method, url, req);
    setResults(results);
  };
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };
  const handleMethod = (e) => {
    setMethod(e.target.value);
  };
  const handleJson = (e) => {
    setReq(e.target.value);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home"> Postman Clone</Navbar.Brand>
      </Navbar>
      <Container fluid>
        <Search
          handleSubmit={handleSubmit}
          handleUrlChange={handleUrlChange}
          handleMethod={handleMethod}
          handleJson={handleJson}
          url={url}
          radioInput={method}
          json={req}
        />
        <Results results={results} />
      </Container>
    </>
  );
}

export default PostPage;
