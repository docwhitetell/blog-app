const styles = theme => ({
  main: {
    height: 'auto',
    overflow: 'hidden',
  },


  banner: {
    height: 600,
    // background: 'rgb(30,36,58)',

    /*  [theme.breakpoints.down('md')]: {
     height:'auto'
     },*/
  },
  bannerBg: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      height: '100%',
    },
    backgroundImage: "url('/assets/blogs/headbg.png')",
    backgroundSize: '100%',
    backgroundPosition: 'left bottom',
    transform: 'rotate(180deg)',
    backgroundRepeat: 'no-repeat',
    // overflow:'hidden',
  },
  '@keyframes rotate': {
    '0%': {
      transform: 'translate(-50%,0) rotate(0deg)',
    },
    '50%': {
      transform: 'translate(-50%,0.5vw) rotate(180deg)',
    },
    '100%': {
      transform: 'translate(-50%,0) rotate(360deg)',
    },
  },
  bannerWrapper: {
    height: '100%',
    position: 'relative',
  },
  bannerTitle: {
    position: 'absolute',
    top: '300px',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    fontSize: 42,
    width: '90%',
    color: 'rgba(0,0,0,0.76)',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      position: 'static',
      fontSize: 36,
      margin: '0 auto',
      transform: 'translate(0,0)',
      paddingTop: 220,
      marginBottom: 80,
      '& h1': {
        fontSize: 36,
      },
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 26,
      paddingTop: 140,
      '& h1': {
        fontSize: 26,
      },
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 24,
      '& h1': {
        fontSize: 24,
      },
    },
  },
  titleWord: {
    fontSize: 42,
    color: 'rgba(0,0,0,0.7)',
    transform: 'translate(0,-90px)',
    [theme.breakpoints.down('md')]: {
      fontSize: 36,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 26,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 24,
    },
  },
  titleDescription: {
    marginTop: -40,
    fontFamily: 'apple',
    fontSize: '16px',
    fontWeight: 600,
    color: 'rgba(0,0,0,0.6)',
    transform: 'translate(0,60px)',
  },
  bannerImg: {
    position: 'absolute',
    bottom: '0',
    height: '400px',
    width: '100%',
  },
  bannerMainImg: {
    height: 400,
    width: 800,
    position: 'absolute',
    left: '50%',
    bottom: 0,
    transform: 'translate(-50%,0)',
    borderTopLeftRadius: '6px',
    borderTopRightRadius: '6px',
    overflow: 'hidden',
    // backgroundImage:"url('/assets/index/banner1.png')",
    backgroundSize: '100%',
    zIndex: 200,
    backgroundRepeat: 'no-repeat',
    boxShadow: '0px 17px 27px rgba(0,0,0,0.07),17px 0px 27px rgba(0,0,0,0.07),0px -10px 27px rgba(0,0,0,0.07),-10px 0px 27px rgba(0,0,0,0.07)',
  },
  leftbg: {
    position: 'absolute',
    width: 800,
    height: 370,
    bottom: 0,
    left: '50%',
    zIndex: 1,
    transform: 'translate(-56%,0)',
    borderTopLeftRadius: '8px',
    overflow: 'hidden',
    // backgroundImage:"url('/assets/index/banner2.png')",
    backgroundSize: '100%',
    opacity: 0.4,
    backgroundRepeat: 'no-repeat',
    boxShadow: '0px 17px 27px rgba(0,0,0,0.07),17px 0px 27px rgba(0,0,0,0.07),0px -10px 27px rgba(0,0,0,0.07),-10px 0px 27px rgba(0,0,0,0.07)',
  },
  rightbg: {
    position: 'absolute',
    width: 800,
    height: 370,
    bottom: 0,
    left: '50%',
    zIndex: 1,
    borderTopRightRadius: '8px',
    overflow: 'hidden',
    transform: 'translate(-44%,0)',
    // backgroundImage:"url('/assets/index/banner2.png')",
    backgroundSize: '100%',
    opacity: 0.4,
    backgroundRepeat: 'no-repeat',
    boxShadow: '0px 17px 27px rgba(0,0,0,0.07),17px 0px 27px rgba(0,0,0,0.07),0px -10px 27px rgba(0,0,0,0.07),-10px 0px 27px rgba(0,0,0,0.07)',
  },
  mainContent: {
    position: 'relative',
    zIndex: 300,
    marginBottom: 0,
  },
  about: {
    width: '90%',
    maxWidth: 1140,
    margin: '-30px auto 0 auto',
    height: 'auto',
    boxShadow: '0px 17px 27px rgba(0,0,0,0.07),17px 0px 27px rgba(0,0,0,0.07),0px -10px 27px rgba(0,0,0,0.07),-10px 0px 27px rgba(0,0,0,0.07)',
    background: '#ffffff',
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    padding: '60px 80px',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '60px 30px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '30px 18px',
    },
  },
  aboutLeft: {
    marginRight: 80,
    [theme.breakpoints.down('md')]: {
      marginRight: 0,
      width: '100%',
    },
  },
  aboutTitle: {
    fontSize: 32,
    whiteSpace: 'nowrap',
    [theme.breakpoints.up('lg')]: {
      fontSize: 32,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 26,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 22,
    },
  },
  gradientDivider: {
    marginTop: 18,
    width: 96,
    height: 4,
    background: 'linear-gradient(127deg, #AF61D1, #717BFE)',
    [theme.breakpoints.down('md')]: {
      marginBottom: 20,
    },
  },
  aboutWord: {
    fontSize: 15,
    fontWeight: 500,
  },
  work: {
    width: '90%',
    maxWidth: 1140,
    margin: '100px auto',
  },
  serviceItem: {
    height: 340,
    width: '100%',
    boxShadow: '0px 17px 27px rgba(0,0,0,0.07),10px 0px 27px rgba(0,0,0,0.07),0px -10px 27px rgba(0,0,0,0.07)',
    borderRadius: 6,
    overflow: 'hidden',
  },
  borderTop: {
    height: 3,
    width: '100%',
    background: 'linear-gradient(127deg, #AF61D1, #717BFE)'
  },
  serviceContent: {
    // display:'flex',
    // flexDirection:'column',
    // alignItems:'center',
    height: '100%',
    // justifyContent:'center'
  },
  blogPoster: {
    // backgroundImage:`url(${item.poster})`,
    width: '100%',
    height: 241,
    top: 0,
    left: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    filter: 'blur(2px)',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      filter: 'blur(0px)',
    },
  },
  serviceName: {
    fontSize: 21,
    margin: '10px 20px',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  serviceDesc: {
    fontSize: 16,
    height: 48,
    margin: '0 20px',
    // textAlign:'center',
    fontWeight: 500,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },

  sectionName: {
    textAlign: 'center', marginBottom: 80, fontWeight: 700, fontSize: 32, color: 'rgba(0,0,0,0.7)',
  },
  mediaWrapper: {
    position: 'relative',
  },
  mediaMask: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    height: '100%',
    transform: 'translate(-50%,-50%)',
  },
  theMedia: {
    objectFit: 'fill',
    height: '100%',
    boxShadow: '0px 17px 27px rgba(0,0,0,0.07),17px 0px 27px rgba(0,0,0,0.07),0px -10px 27px rgba(0,0,0,0.07),-10px 0px 27px rgba(0,0,0,0.07)',
  },
  DialogContent: {
    [theme.breakpoints.down('md')]: {
      padding: 24,
    },
    [theme.breakpoints.down('sm')]: {
      padding: 12,
    },
  },
  mediaPlayButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    transition: 'all 0.2s 0.1s ease-in-out',
    '&:hover': {
      width: 70,
      height: 70,
    },
    '&:hover .playicon': {
      width: 50, height: 50,
    },
  },
  playIcon: {
    transition: 'all 0.2s ease-in-out',
  },
  mediaName: {
    color: '#ffffff', fontWeight: 300, textIndent: '1rem',
  },
  products: {
    boxShadow: '0px 17px 27px rgba(0,0,0,0.07),17px 0px 27px rgba(0,0,0,0.07),0px -10px 27px rgba(0,0,0,0.07),-10px 0px 27px rgba(0,0,0,0.07)',
    borderRadius: 20,
    margin: '160px auto',
    background: 'linear-gradient(127deg, rgb(0,202,198), rgb(0,154,204))',
    height: 600,
    width: '90%',
    maxWidth: 1140,
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      width: '90%',
      height: 'auto',
    },
  },
  productItemWrapper: {
    position: 'relative',
    height: 'auto',
  },
  pBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-2px -2px',
    zIndex: -1,
    overflow: 'hidden',
    borderRadius: 20,
  },
  pMain: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 20,
  },
  pPrice: {
    position: 'absolute',
    left: 40,
    bottom: 60,
    webkitUserSelect: 'none',
    mozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
  },
  pPriceBg: {
    position: 'absolute',
    left: 10,
    bottom: 30,
    color: 'rgba(0,0,0,0.1)',
  },
  pPriceBgBig: {
    fontSize: 90,
    bottom: 40,
  },
  pPriceBgMid: {
    fontSize: 80,
  },
  pMask: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    opacity: 0.2,
    overflow: 'hidden',
    borderRadius: 20,
  },
  pButton: {
    position: 'absolute',
    borderRadius: '50%',
    bottom: 0,
    left: '50%',
    transform: 'translate(-50%,40%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 600,
    minWidth: 0,
    boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)'
  },
  pButtonDenseTop: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    top: -10,
    opacity: 0.2,
    zIndex: -1,
  },
  pButtonDenseLeft: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    top: 0,
    left: -6,
    opacity: 0.2,
    zIndex: -1,
  },
  pButtonDenseRight: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    top: 0,
    right: -6,
    opacity: 0.2,
    zIndex: -1,
  },
  productItemLeft: {
    boxShadow: '0px 17px 27px rgba(0,0,0,0.07),17px 0px 27px rgba(0,0,0,0.07),0px -10px 27px rgba(0,0,0,0.07),-10px 0px 27px rgba(0,0,0,0.07)',
    height: 360,
    width: 280,
    borderRadius: 20,
    position: 'absolute',
    background: '#ffffff',
    top: -30,
    left: '50%',
    transform: 'translate(-140%,0)',
    [theme.breakpoints.down('md')]: {
      width: 280,
      height: 360,
      position: 'static',
      margin: '20px auto',
      transform: 'translate(0,0)',
    },
    [theme.breakpoints.down('xs')]: {
      width: '90%',
      height: 360,
    },
  },
  plMain: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 20,
  },
  plBg: {
    backgroundImage: "url('/assets/index/2.png')",
  },
  plPriceBg: {
    left: -10,
    bottom: 20,
    fontSize: 80,
  },
  plMask: {
    background: 'linear-gradient(127deg, rgb(255,240,253),rgb(254,220,250))',
  },
  plButton: {
    width: 64,
    height: 64,
    background: 'linear-gradient(127deg, rgb(38,162,200),rgb(64,195,198))',
    fontSize: 24,
  },
  plButtonDenseTop: {
    background: 'linear-gradient(127deg, rgb(38,162,200),rgb(64,195,198))',
  },
  plButtonDenseLeft: {
    background: 'linear-gradient(127deg, rgb(38,162,200),rgb(64,195,198))',
  },
  plButtonDenseRight: {
    background: 'linear-gradient(127deg, rgb(38,162,200),rgb(64,195,198))',
  },
  productItemMid: {
    boxShadow: '0px 17px 27px rgba(0,0,0,0.07),17px 0px 27px rgba(0,0,0,0.07),0px -10px 27px rgba(0,0,0,0.07),-10px 0px 27px rgba(0,0,0,0.07)',
    height: 400,
    width: 300,
    borderRadius: 20,
    position: 'absolute',
    background: '#ffffff',
    top: -60,
    left: '50%',
    transform: 'translate(-50%,0)',
    zIndex: 2,
    [theme.breakpoints.down('md')]: {
      width: 280,
      height: 360,
      position: 'static',
      margin: '20px auto',
      transform: 'translate(0,0)',
    },
    [theme.breakpoints.down('xs')]: {
      width: '90%',
      height: 360,
    },

  },
  pmBg: {
    backgroundImage: "url('/assets/index/1.png')",
  },
  pmPrice: {
    position: 'absolute',
    left: 40,
    bottom: 60,
    webkitUserSelect: 'none',
    mozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
  },
  pmPriceBg: {
    position: 'absolute',
    left: 40,
    bottom: 10,
    fontSize: 120,
    color: 'rgba(0,0,0,0.1)',
  },
  pmMask: {
    background: 'linear-gradient(127deg, rgb(255,240,253),rgb(254,220,250))',
  },
  pmButton: {
    width: 72,
    height: 72,
    background: 'linear-gradient(127deg, #AF61D1, #717BFE)',
    fontSize: 24,
  },
  pmButtonDenseTop: {
    background: 'linear-gradient(127deg, #AF61D1, #717BFE)',
  },
  pmButtonDenseLeft: {
    background: 'linear-gradient(127deg, #AF61D1, #717BFE)',
  },
  pmButtonDenseRight: {
    background: 'linear-gradient(127deg, #AF61D1, #717BFE)',
  },
  productItemRight: {
    boxShadow: '0px 17px 27px rgba(0,0,0,0.07),17px 0px 27px rgba(0,0,0,0.07),0px -10px 27px rgba(0,0,0,0.07),-10px 0px 27px rgba(0,0,0,0.07)',
    height: 360,
    width: 280,
    borderRadius: 20,
    background: '#ffffff',
    position: 'absolute',
    top: -30,
    left: '50%',
    transform: 'translate(40%,0)',
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
      width: 280,
      height: 360,
      position: 'static',
      margin: '20px auto',
      transform: 'translate(0,0)',
    },
    [theme.breakpoints.down('xs')]: {
      width: '90%',
      height: 360,
    },
  },
  prBg: {
    backgroundImage: "url('/assets/index/3.png')",
    backgroundPosition: 'right top',
  },
  prPrice: {
    position: 'absolute',
    left: 40,
    bottom: 60,
    webkitUserSelect: 'none',
    mozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
  },
  prPriceBg: {
    position: 'absolute',
    left: 40,
    bottom: 0,
    fontSize: 100,
    color: 'rgba(0,0,0,0.1)',
  },
  prMask: {
    background: 'linear-gradient(127deg, rgb(255,240,253),rgb(254,220,250))',
  },
  prButton: {
    width: 64,
    height: 64,
    background: 'linear-gradient(127deg, rgb(255,106,151),rgb(255,128,118))',
  },
  prButtonDenseTop: {
    background: 'linear-gradient(127deg, rgb(255,106,151),rgb(255,128,118))',
  },
  prButtonDenseLeft: {
    background: 'linear-gradient(127deg, rgb(255,106,151),rgb(255,128,118))',
  },
  prButtonDenseRight: {
    background: 'linear-gradient(127deg, rgb(255,106,151),rgb(255,128,118))',
  },

  slickproduct: {},
  proDetails: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 260,
    display: 'flex',
    padding: '0 100px',
    alignItems: 'center',
    justifyContent: 'start',
    [theme.breakpoints.down('md')]: {
      position: 'static',
      marginTop: 40,
      padding: '0 60px 40px 60px',
      flexDirection: 'column',
      height: 'auto',
    },
  },
  pdLeft: {
    flex: 1,
    paddingRight: 40,
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
  },
  pdRight: {
    flex: 1,
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
  },
  pdDataProgress: {
    display: 'flex',
    justifyContent: 'start',
    marginTop: 30,
    [theme.breakpoints.down('md')]: {
      flexDirection: 'row',
      width: '90%',
    },
  },
  pddpName: {
    lineHeight: '24x',
    width: 100,
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
  },
  moreProducts: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    height: 46,
    width: 160,
    transform: 'translate(-50%,50%)',
    // background:'linear-gradient(127deg, #AF61D1, #717BFE)',
    background: 'linear-gradient(127deg, rgb(0,202,198), rgb(0,154,204))',
    borderRadius: 14,
    color: '#ffffff',
    boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)'
  },

})

export default styles;
