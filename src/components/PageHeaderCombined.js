import React from 'react';
import PropTypes from 'prop-types';

import PageSubHeader from './PageSubHeader';
import PageHeader from './PageHeader';


function PageHeaderCombined({ pageHeader, pageSubHeader }) {
  return (
    <div>
      <PageHeader {...pageHeader} />
      <PageSubHeader {...pageSubHeader} />
    </div>
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
