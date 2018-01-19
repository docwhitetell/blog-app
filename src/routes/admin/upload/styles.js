const styles = theme => ({
    pageHeader: {
        backgroundColor: theme.palette.primary[800],
        height: 100
    },
    pageTitle: {
        color: theme.palette.common.white,
        height: 80,
        lineHeight: '100px',
        fontSize: 20,
        textIndent: 20
    },
    gridList: {
        height: 'auto',
    },
    subheader: {
        width: '100%',
    },
    tabsroot: {
        /*  backgroundColor: theme.palette.background.paper,*/
        marginBottom: 6
    },
    gridItem: {
        position: 'relative',
    },
    mask: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.5)',
        top: 0,
        left: 0,
        opacity: 0,
        zIndex: 1,
        transition: 'all 0.3s ease-in-out',
        '&:hover':{
                zIndex: 1,
                opacity: 1
        }
    },
    icon: {
        color: '#ffffff',
        cursor: 'pointer',
        '&:hover': {
            color: '#2196F3'
        }
    },
    DeleteIcon: {
        color: '#B71C1C',
        cursor: 'pointer',
        fontSize: '20px'
    },
    PlayIcon: {
        color: '#ffffff',
        cursor: 'pointer',
        fontSize: '48px',
    },

    videoMask: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.5)',
        top: 0,
        left: 0,
    },
    videoTitle: {
        textIndent: '1rem',
        fontWeight: 300,
        color: '#ffffff',
        fontFamily: "Songti SC",
    },
    delete: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-100%,-50%)',
        fontSize: '40px',
    },
    more: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(0%,-50%)',
        fontSize: '40px',
    },
    Delete: {
        position: 'absolute',
        top: '10px',
        right: '10px',
    },
    Play: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-40%)',
    },
})
export default styles