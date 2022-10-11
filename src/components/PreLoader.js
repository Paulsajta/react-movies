import React from 'react';

function PreLoader(props) {
    return (
        <>
        <div className="progress">
            <div className="indeterminate"></div>

        </div>
            {props.error !== null ? (<p>{props.error.Error}</p>) : false}
        </>
    );
}

export default PreLoader;