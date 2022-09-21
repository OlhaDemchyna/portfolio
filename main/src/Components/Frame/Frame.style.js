import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(({ shape, spacing, palette, shadows }) => ({
    frame: {
        margin: spacing(1, 1, 1, 1),
        borderRadius: shape.borderRadius,
        boxShadow: shadows[4],
        backgroundColor: palette.background.default,
        color: palette.text.primary,
    },
    topBar: {
        padding: spacing(0, 2),
        backgroundColor: palette.action.hover,
        borderTopLeftRadius: shape.borderRadius,
        borderTopRightRadius: shape.borderRadius,

        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: palette.action.hover,
    },
}));

export default useStyles;