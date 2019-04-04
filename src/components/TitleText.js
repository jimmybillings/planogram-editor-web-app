import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.div`
  text-align: center;
  width: 200px;
  margin: 0 auto;
`

const Text = styled.h1`
  font-weight: bold;
  font-size: 22px;
  -webkit-letter-spacing: .5px;
  -moz-letter-spacing: .5px;
  -ms-letter-spacing: .5px;
  letter-spacing: .5px;
  margin: 0;
  padding: 0;
  line-height: 1.2;
}
`

function TitleText({ text }) {
  return (
    <Title>
      <Text>{text}</Text>
    </Title>
  );
}

TitleText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TitleText;
