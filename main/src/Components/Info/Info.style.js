import { makeStyles } from '@mui/styles';

import profile from '../../images/profile.png'

const useStyles = makeStyles(({ breakpoints }) => ({
    profile: {
        background: `url(${profile}) no-repeat top right`,
        backgroundSize: 'contain',

        [breakpoints.down('md')]: {
            background: 'none',
        },
    },
}));

export default useStyles;