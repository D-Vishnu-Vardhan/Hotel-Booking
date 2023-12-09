import React from 'react';

const Cover = (props) => {
    const { coverClass, children } = props;
    return (
        <header className={coverClass}>
            {children}
        </header>
    );
};

Cover.defaultProps = {
    coverClass: "defaultHero"
};

export default Cover;
