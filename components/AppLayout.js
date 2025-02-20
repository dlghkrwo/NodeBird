import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const AppLayout = ({children}) => {
    return(
        <div>
            <div>
            <Link href="/" legacyBehavior>
                <a className="... code">
                </a>
            </Link>
                <Link href="/" legacyBehavior>
                    <a>nodebird</a>
                </Link>
                <Link href="/profile" legacyBehavior>
                    <a>Profile</a>
                </Link>
                <Link href="/signup" legacyBehavior>
                    <a>Sign up</a>
                </Link>
            </div>
            {children}
        </div>
    );
};

AppLayout.prototype = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;