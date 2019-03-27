import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';

import Repositories from './Repositories/Repositories';
import Repository from './Repository/Repository';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: theme.spacing.unit * 2,
    },
});

export const routing = [
    {
        path: '/Feed',
        label: 'Feed',
        // component: Feed
    },
    {
        path: '/Search',
        label: 'Search',
        // component: Search
    },
    {
        path: '/Repositories',
        label: 'Repositories',
        component: Repositories,
        inner: [
            {
                path: '/Repositories/:repositoryId',
                component: Repository,
            },
        ],
    },
    {
        path: '/Ratings',
        label: 'Ratings',
        // component: Ratings
    },
    {
        path: '/Users',
        label: 'Users',
        // component: Users
    },
    {
        path: '/Troubles',
        label: 'Troubles',
        // component: Troubles
    },
    {
        path: '/About',
        label: 'About',
        // component: About
    },
];

const processRouting = (routingArray, componentsArray = []) => {
    routingArray.map((item) => {
        componentsArray.push(
            <Route exact path={item.path} component={item.component} key={item.path} />,
        );
        return item.inner && processRouting(item.inner, componentsArray);
    });
    return componentsArray;
};

function MainBlock(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Switch>
                <Route exact path="/" component={Repositories} />
                {processRouting(routing)}
            </Switch>
        </div>
    );
}

MainBlock.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainBlock);
