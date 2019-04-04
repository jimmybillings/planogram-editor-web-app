import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SubHeader = styled.header`
  width: 100%;
  height: 35px;
  background-color: #F5F5F5;
  color: #3C3C3C;
  border-top: 1px solid #EAEAEA;
  border-bottom: 1px solid #EAEAEA;
  text-align: center;
`

const Title = styled.h2`
  text-align: center;
  line-height: 26px;
  display: inline;
  a {
    font-size: 14px;
    color: #3C3C3C;
    &:hover {
      color:black;
    }
  }
`

const LeftAction = styled.div`
  float: left;
  width: 150px;
  height: 35px;
  text-align: left;
  padding: 6px 0px 6px 15px;
`

const RightAction = styled.div`
  float: right;
  width: 150px;
  height: 35px;
  padding: 6px 15px 6px 0px;
  text-align: right;
`

function PageSubHeader({ title, url, leftAction, rightAction }) {
  return (
    <SubHeader>
      <LeftAction>
        {!!leftAction ? <p>{leftAction}</p> : <p></p>}
      </LeftAction>

      <Title>
        <a url={url}>{title}</a>
      </Title>

      <RightAction>
        {!!rightAction ? <i className={rightAction}></i> : <p></p>}
      </RightAction>
    </SubHeader>
  );
}

PageSubHeader.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  leftAction: PropTypes.string,
  rightAction: PropTypes.string
};

export default PageSubHeader;
