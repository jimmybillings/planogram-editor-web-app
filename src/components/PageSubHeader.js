import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SubHeader = styled.div`
  width: 100%;
  height: 35px;
  background-color: #F5F5F5;
  text-align: center;
  color: #3C3C3C;
  border-top: 1px solid #EAEAEA;
  border-bottom: 1px solid #EAEAEA;
`

const Title = styled.h2`
  line-height: 26px;
  a {
    font-size: 14px;
    color: #3C3C3C;
    &:hover {
      color:black;
    }
  }
`

function PageSubHeader({ title, url }) {
  return (
    <SubHeader>
      <Title>
        <a href={url}>{title}</a>
      </Title>
    </SubHeader>
  );
}

PageSubHeader.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default PageSubHeader;
