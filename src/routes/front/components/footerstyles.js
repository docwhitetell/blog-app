const styles = theme => ({
  footer: {
    position: 'relative',
    width: '100%',
    bottom: 0,
    background: 'linear-gradient(127deg, rgb(0,202,198), rgb(0,154,204))',
    height: 300,
    zIndex: 200,
    paddingTop: 40,
    borderTopLeftRadius: '50%',
    borderTopRightRadius: '50%',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      paddingTop: 10,
    },
  },
  registerForm: {
    height: 200,
    width: '96%',
    margin: '0 auto',
    maxWidth: 1140,
    padding: '0 40px',
    top: -100,
    position: 'relative',
    background: 'linear-gradient(127deg, #AF61D1, #717BFE)',
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
  },
  register: {
    background: 'rgba(255,255,255,0.16)',
    height: 44,
    borderRadius: 4,
    fontSize: 16,
    color: '#ffffff',
    padding: '0 24px',
    display: 'inline-block',
    lineHeight: '44px',
    marginRight: 10,
    float: 'right',
    [theme.breakpoints.down('sm')]: {
      height: 32,
      fontSize: 14,
      padding: '0 16px',
      lineHeight: '32px',
    },
    '&:hover': {
      color: '#ffffff',
    },
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      flexDirection: 'column',
    },
  },
  formGroup: {
    [theme.breakpoints.down('md')]: {
      width: 140,
    },
  },
  formIcon: {
    color: '#ffffff',
    fontSize: 18,
    marginRight: 14,
    display: 'inline-block',
    float: 'left',
  },
  formInput: {
    border: 'none',
    display: 'inline-block',
    background: 'transparent',
    outline: 'none',
    color: '#ffffff',
    fontSize: 14,
    '&::-moz-placeholder': {
      color: '#ffffff',
    },
    '&::-webkit-input-placeholder': {
      color: '#ffffff',
      fontSize: 16,
      lineHeight: '22px',
    },
    [theme.breakpoints.down('md')]: {
      width: 108,
    },
    [theme.breakpoints.down('sm')]: {
      '&::-webkit-input-placeholder': {
        textAlign: 'center',
      },
    },
  },
  footerMain: {
    height: 300,
    position: 'relative',
    top: 0,
    padding: '0 40px',
    maxWidth: 1140,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'start',
  },
  footcopyright: {},
  author: {
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
  },
  authorImg: {
    display: 'block', margin: '0 auto',
  },
  footLinks: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
  },
  footLinksTitle: {
    textAlign: 'right',
    color: 'rgba(255,255,255,0.4)',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
  footLinksItem: {
    textAlign: 'right',
    lineHeight: '32px',
    [theme.breakpoints.down('md')]: {
      display: 'inline-block',
      textAlign: 'center',
      padding: '0 20px',
    },
  },
  flink: {
    fontSize: 16,
    color: '#ffffff',
    textDecoration: 'underline',
  },

})
export default styles;
