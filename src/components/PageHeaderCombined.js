import React from 'react';
import PropTypes from 'prop-types';

import PageSubHeader from './PageSubHeader';
import PageHeader from './PageHeader';

export const newAction = {
  url: 'http:goole.com',
  icon: 'fas fa-edit'
};

export const subHeaderprops = {
  title: 'View Store Map',
  url: 'http://google.com'
};

function PageHeaderCombined({ pageHeader: { title, backUrl, newAction }, pageSubHeader: { titl } }) {
  return (
    <header>
      <PageHeader title='WBA: 200 Stores' backUrl="http://google.com" newAction={newAction} />
      <PageSubHeader {...subHeaderprops} />
    </header>
  );
}

PageSubHeader.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  backUrl: PropTypes.string,
  newAction: PropTypes.shape({
    url: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }),
};

PageHeaderCombined.propTypes = {
  pageHeader: PageHeader.propTypes,
  pageSubHeader: PageSubHeader.propTypes
}

export default PageHeaderCombined;
