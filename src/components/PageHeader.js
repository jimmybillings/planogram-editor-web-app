import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  height: 48px;
  background-color: white;
  text-align: center;
`

const Title = styled.h1`
  color: black;
  display: inline;
  font-size: 20px;
  font-weight: 600;
`
const BackButton = styled.div`
  float: left;
  width: 50px;
  height: 50px;
  padding:14px;
  a {
      color: #aaa;
      font-size: 20px;
  }
`
const NewAction = styled.div`
    float: right;
    width: 50px;
    height: 50px;
    padding:14px;
    a {
        color: #aaa;
        font-size: 20px;
    }
`

function PageHeader({ newAction, title, backUrl }) {
  return (
    <Header>
      <BackButton>
        {!!backUrl && <a href={backUrl}><i className="fas fa-arrow-left"></i></a>}
      </BackButton>

      <Title>{title}</Title>

      <NewAction>
        {!!newAction && <a href={newAction.url}><i className={newAction.icon}></i></a>}
      </NewAction>
    </Header>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  backUrl: PropTypes.string,
  newAction: PropTypes.shape({
    url: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }),
};

export default PageHeader;
