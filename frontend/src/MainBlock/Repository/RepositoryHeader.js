import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';

import { archiveIconBig } from 'Utils/commonStyles';
import Icon from 'Utils/icons';
import AdminBadge from 'CommonComponents/AdminBadge';
import TypesMenuButton from 'MainBlock/RepositoryType/TypesMenuButton';
import RepositoryTypeLabel from 'MainBlock/RepositoryType/RepositoryTypeLabel';
import ListItemDate from './ListItemDate';

function RepositoryHeader({ repository }) {
    return (
        <ListItem disableGutters>
            <ListItemText primary={(
                <Typography variant="h4">
                    {repository.name}
                    <AdminBadge badgeContent={<TypesMenuButton repository={repository} />}>
                        <RepositoryTypeLabel type={repository.repositoryType} big />
                    </AdminBadge>
                    {repository.archived && (
                        <Tooltip title="This is an archived repository" enterDelay={300}>
                            <span>
                                <Icon iconName="archive" styles={archiveIconBig} />
                            </span>
                        </Tooltip>
                    )}
                </Typography>
            )}
            />
            <ListItemDate created={repository.createdAt} updated={repository.updatedAt} />
        </ListItem>
    );
}

RepositoryHeader.propTypes = {
    repository: PropTypes.object.isRequired,
};

export default RepositoryHeader;
