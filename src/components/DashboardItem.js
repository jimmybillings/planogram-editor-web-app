import React from 'react';
import PropTypes from 'prop-types';

function DashboardItem({ item: { id, title, icon }, onSelectItem }) {
    return (
        <div>{title}</div>
        // <div className={`list-item ${stat    be}`}>
        //     <label className="checkbox">
        //         <input
        //             type="checkbox"
        //             defaultChecked={state === 'TASK_ARCHIVED'}
        //             disabled={true}
        //             name="checked"
        //         />
        //         <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
        //     </label>
        //     <div className="title">
        //         <input type="text" value={title} readOnly={true} placeholder="Input title" />
        //     </div>

        //     <div className="actions" onClick={event => event.stopPropagation()}>
        //         {state !== 'TASK_ARCHIVED' && (
        //             <a onClick={() => onPinTask(id)}>
        //                 <span className={`icon-star`} />
        //             </a>
        //         )}
        //     </div>
        // </div>
    );
}

DashboardItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    }),
    onSelectItem: PropTypes.func
};
export default DashboardItem;