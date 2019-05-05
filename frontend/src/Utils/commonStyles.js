export const archivedRepositoryColor = '#6c6c6c';
const mainThemeColor = '#c30019';
export const secondaryItemColor = '#646464';

export const secondaryItem = {
    fontWeight: 300,
    color: secondaryItemColor,
};

export const dateListItem = {
    ...secondaryItem,
    fontSize: 12,
    margin: '3px 0',
    display: 'block',
};

export const dateFullItem = {
    ...secondaryItem,
    fontSize: 12,
    margin: '5px 0',
    textAlign: 'right',
};

export const descriptionListItem = {
    ...secondaryItem,
    fontSize: 18,
    margin: '5px 0',
};

export const repositoryItemTitle = {
    fontSize: 18,
    fontWeight: 600,
    margin: '3px 0',
    color: mainThemeColor,
    '&:hover': {
        textDecoration: 'underline',
    },
};

export const archiveColored = {
    color: archivedRepositoryColor,
};

export const archiveIcon = {
    fill: archivedRepositoryColor,
    width: '19px',
    height: '19px',
    margin: '-1px 3px',
};

export const archiveIconBig = {
    width: '30px',
    height: '30px',
    margin: '-2px 7px',
};

export const relationsHeader = {
    display: 'flex',
    height: '36px',
    paddingTop: '20px',
};

export const relationsTitle = {
    flexGrow: 1,
    lineHeight: '1.6',
};

export const buttonLink = {
    textDecoration: 'none',
    color: 'inherit',
};

export const genericLink = {
    ...buttonLink,
    '&:hover': {
        textDecoration: 'underline',
    },
};

export const priorityMark = {
    marginRight: '10px',
    height: '22px',
    color: '#fff',
    fontSize: 11,
};

export const nestedBlock = {
    paddingLeft: 27,
    marginLeft: 27,
    borderLeft: '1px solid #D0D0D0',
};

export const errorText = {
    color: '#ff0000',
};

export const selectComponentsStyles = theme => ({
    input: {
        display: 'flex',
        padding: 0,
    },
    valueContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        alignItems: 'center',
        overflow: 'hidden',
    },
    noOptionsMessage: {
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    placeholder: {
        position: 'absolute',
        left: 2,
        fontSize: 16,
    },
    divider: {
        height: theme.spacing.unit * 2,
    },
    errorText,
});

export const formButton = {
    color: mainThemeColor,
};

export const addRelationIcon = {
    margin: '0px 13px',
    color: '#fff',
    width: '36px',
    maxHeight: '36px',
    backgroundColor: secondaryItemColor,
    '&:hover': {
        backgroundColor: mainThemeColor,
    },
};

export const relationControlIcon = {
    margin: '0px 3px',
    color: secondaryItemColor,
    '&:hover': {
        color: mainThemeColor,
    },
};

export const relationFormPaper = {
    minHeight: '540px',
    maxWidth: '450px',
};

export const repoLinkIconWrapper = size => ({
    width: `${size}px`,
    height: `${size}px`,
    padding: '0px',
    fontSize: 'unset',
});

export const repoLinkIcon = size => ({
    width: `${0.8 * size}px`,
    height: `${0.8 * size}px`,
    verticalAlign: 'middle',
});

export const relatedRepositoryIcon = {
    fill: secondaryItemColor,
    marginTop: '7px',
    marginRight: '12px',
};

export const repoIconsContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
};
