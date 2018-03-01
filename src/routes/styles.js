const drawerWidth = 250;
const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    marginTop: 0,
    zIndex: 1,
    fontFamily: 'Microsoft YaHei',
    color: '#37474F',
    position: 'relative',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    minHeight: '100%',
  },
  appBar: {
    marginLeft: drawerWidth,
    paddingRight: '0 !important',
    backgroundImage: "url('/assets/leftmenu.png')",
    backgroundPosition: '-250px 0',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  footer: {
    position: 'absolute',
    paddingRight: '0 !important',
    width: '100%',
    backgroundColor: theme.palette.primary[500],
    [theme.breakpoints.up('md')]: {
      paddingLeft: `${drawerWidth}px`,
    },
  },
  toolbar: {
    position: 'relative',
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerHeader: theme.mixins.toolbar,
  drawerPaper: {
    width: 250,
    backgroundImage: "url('/assets/leftmenu.png')",
    backgroundPosition: 'left top',
    overflow: 'visible',
  },
  secondMenuItem: {
    paddingLeft: 40,
  },

  content: {
    backgroundImage: "url('/assets/leftmenu.png')",
    backgroundRepeat: 'no-repeat',
    /* backgroundPosition:'-250px 0',*/
    backgroundAttachment: 'fixed',
    width: '100%',
    paddingTop: 0,
    minHeight: 'calc(100vh - 56px)',
    overflow: 'hidden',
    marginTop: 56,
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      minHeight: 'calc(100vh - 64px - 64px)',
      marginTop: 64,
    },
  },
  menuIcon: {
    color: '#37474F',
    fontSize: '16px',
  },
  menuText: {
    color: '#37474F', fontSize: 16, fontWeight: 500,
  },
  secondMenuText: {
    color: '#37474F', fontSize: 12, fontWeight: 400,
  },
  fixedBottom: {
    position: 'absolute',
    bottom: 20,
    width: '90%',
    left: '50%',
    transform: 'translate(-50%,0)',
  },
  themeSelectBox: {
    width: 160,
    margin: '0 auto',
    display: 'block',
  },

  themeLable: {
    width: '100%',
  },
  themeSelect: {
    width: '100%',
  },
  themeExample: {
    position: 'absolute',
    right: 20,
    top: '50%',
    marginTop: -10,
    width: 20,
    height: 20,
  },
});

export default styles;
