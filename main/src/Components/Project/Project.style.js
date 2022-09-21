import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(({ breakpoints }) => ({
    project: {
        '& + $project:nth-child(even) > div': {
            [breakpoints.up('sm')]: {
                flexDirection: 'row-reverse',
            },
        },
    },
}));

export default useStyles;