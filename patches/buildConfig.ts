// Copyright (c) 2015-2016 Yuya Ochiai
// Copyright (c) 2016-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import type {BuildConfig} from 'types/config';

import {DEFAULT_ACADEMY_LINK, DEFAULT_HELP_LINK, DEFAULT_UPGRADE_LINK} from '../../common/constants';

const buildConfig: BuildConfig = {
    defaultServers: [
        {
            name: 'AdviceBrands - PH',
            url: 'https://advicebrands-ph.website',
        },
    ],
    helpLink: DEFAULT_HELP_LINK,
    academyLink: DEFAULT_ACADEMY_LINK,
    upgradeLink: DEFAULT_UPGRADE_LINK,
    enableServerManagement: false,
    enableUpdateNotifications: true,
    updateNotificationURL: 'https://releases.mattermost.com/desktop',
    macAppStoreUpdateURL: 'macappstore://apps.apple.com/us/app/mattermost-desktop/id1614666244',
    windowsStoreUpdateURL: 'ms-windows-store://pdp/?productid=XP8BR8MH3LPKLT',
    linuxUpdateURL: 'https://docs.mattermost.com/deployment-guide/desktop/linux-desktop-install.html',
    linuxGitHubReleaseURL: 'https://github.com/mattermost/desktop/releases/tag',
    managedResources: ['trusted'],
    allowedProtocols: [
        'mattermost',
        'ftp',
        'mailto',
        'tel',
    ],
    trustedEmbeddedMediaOrigins: [],
};

export default buildConfig;
