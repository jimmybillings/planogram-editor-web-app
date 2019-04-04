import React from 'react';
import PropTypes from 'prop-types';

import PageSubHeader from './PageSubHeader';
import PageHeader from './PageHeader';


function PageHeaderCombined({ pageHeader, pageSubHeader }) {
  return (
    <header>
      <PageHeader {...pageHeader} />
      <PageSubHeader {...pageSubHeader} />
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
