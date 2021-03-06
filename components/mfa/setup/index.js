// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {getConfig} from 'mattermost-redux/selectors/entities/general';
import {getCurrentUser} from 'mattermost-redux/selectors/entities/users';

import Setup from './setup.jsx';

function mapStateToProps(state) {
    const config = getConfig(state);

    const siteName = config.SiteName;
    const enforceMultifactorAuthentication = config.EnforceMultifactorAuthentication === 'true';

    return {
        currentUser: getCurrentUser(state),
        siteName,
        enforceMultifactorAuthentication,
    };
}

export default connect(mapStateToProps)(Setup);
