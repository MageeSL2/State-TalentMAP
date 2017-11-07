import React from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';

const BorderedList = ({ contentArray }) => {
  const mappedContent = contentArray.slice().map(content => (
    <li key={shortId.generate()}>
      <div className="bordered-list-content">
        {content}
      </div>
    </li>
    ));
  return (
    <div className="usa-grid-full bordered-list">
      <ul>
        {mappedContent}
      </ul>
    </div>
  );
};

BorderedList.propTypes = {
  contentArray: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default BorderedList;