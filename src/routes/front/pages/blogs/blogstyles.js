const styles=theme=>({
    main:{
        height:'auto',
        overflow:'hidden',
        //backgroundColor:'rgb(30,36,58)'
        //background:'rgba(0,0,0,0.06)'
    },
    content:{
        minHeight:'100vh',
    },
    headerbg:{
        position:'absolute',top:0,height:'100%',width:'100%',zIndex:1
    },
    bgimg:{
        position:'absolute',
        height:'100%',width:'100%',
        backgroundImage:"url('/assets/blogs/headbg.png')",
        backgroundSize:"100%",
        backgroundPosition:'left bottom',
        transform:'rotate(180deg)',
        backgroundRepeat:"no-repeat",
        zIndex:1
    },
    bgcolor:{
        height:"100%",
        /*backgroundColor:'rgb(30,36,58)'*/
    },
    blogsListcontent:{
        minHeight:'100%',
        paddingTop:160,
        zIndex:200,
        position:'relative',
        marginBottom:40
    },
    author:{
        width:'100%',
        padding:"0 100px",
        height:260,
        zIndex:200,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        [theme.breakpoints.down('md')]: {
            height:200
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection:'column',
            padding:"0 40px",
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection:'column',
            padding:"0 40px",
        },
    },
    authorimg:{
        paddingRight:80,
        [theme.breakpoints.down('md')]: {
            paddingRight:40,
        },
        [theme.breakpoints.down('sm')]: {
            paddingRight:0
        },
    },
    authorInfo:{

    },
    authorAvatar:{
        width:120,height:120,borderRadius:'50%',
        [theme.breakpoints.down('sm')]: {
            width:80,height:80,
        },
    },
    authorName:{
        color:'rgba(0,0,0,0.7)',
        fontSize:42,
        marginBottom:30,
        [theme.breakpoints.down('md')]: {
            fontSize:28,
            marginBottom:10,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize:24, marginBottom:0,
        },
    },
    authorPersonalInfo:{
        fontSize:16,
        marginBottom:10,
        //color:'#ffffff',
        [theme.breakpoints.down('md')]: {
            fontSize:12,
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom:0,
        },
    },
    authordesc:{
        //color:'rgba(255,255,255,0.6)',
        marginBottom:10,
        [theme.breakpoints.down('md')]: {
            fontSize:12,
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom:0,
        },
    },
    sourceCode:{
        //color:"#ffffff"
    },
    listsWrapper:{
        maxWidth:1000,
        width:'90%',
        margin:'0 auto 60px auto'
    },
    lists:{
        marginTop:80,
        height:'auto',
        borderRadius:10,
        /* boxShadow:'0px 6px 17px rgba(255,255,255,0.6),4px 0px 17px rgba(255,255,255,0.6)',*/

    },
    itemWrapper:{
        height:160,
        marginBottom:20,
        [theme.breakpoints.down('sm')]: {
            height:'auto',
        },
    },

    blogsClass:{
        textAlign:'right',
        //color:'#ffffff',
        [theme.breakpoints.down('md')]: {
            textAlign:'center',
            marginTop:40,
            fontSize:22

        },
    },
    blogsDesc:{
        textAlign:'right',
        //color:'rgba(255,255,255,0.6)',
        [theme.breakpoints.down('md')]: {
            textAlign:'center',
            width:'80%',margin:'0 auto',
        },
        [theme.breakpoints.down('sm')]: {
            textAlign:'left',
        },
    },

    blogsWrapper:{
        width:'90%',maxWidth:1140,
        margin:'0 auto 100px auto',height:'auto',
        backgroundColor:'rgba(0,0,0,0.06)',
        zIndex:100,borderRadius:10,boxShadow:'4px 4px 4px rgba(0,0,0,0.1),-4px 4px 4px rgba(0,0,0,0.1)',
        [theme.breakpoints.down('md')]: {
            //height:1050,
        },

    },

    blogsListContent:{
        //width:'100%',height:"100%",
        //position:'absolute',zIndex:200,
        borderRadius:10,
        background:'rgb(239,239,248)',paddingBottom:20,
        '&:hover .headShadow1':{
            top:-10,
            //opacity:0.8
        },
        '&:hover .headShadow2':{
            top:-18,//opacity:0.6,
            height:8
        }


    },
    listsHead:{
        height:60,background:'#ffffff',
        display:'flex',alignItems:'center',
        padding:'0 40px', borderTopLeftRadius:10,borderTopRightRadius:10,position:'relative',
        [theme.breakpoints.down('sm')]: {
            padding:'0 20px',
        },
    },
    listsHeadShadow1:{
        position:'absolute',width:'96%',
        height:14,top:-14,left:'2%',
        background:'rgba(0,0,0,0.1)',zIndex:-100,borderTopLeftRadius:14,borderTopRightRadius:14,opacity:6,
        transition:'all 0.3s ease-in-out'
    },
    listsHeadShadow2:{
        position:'absolute',width:'92%',
        height:12,top:-26,left:'4%',
        background:'rgba(0,0,0,0.1)',zIndex:-100,borderTopLeftRadius:20,borderTopRightRadius:20,opacity:0.5,
        transition:'all 0.3s ease-in-out',
    },
    menuLists:{
        marginLeft:40,
        [theme.breakpoints.down('sm')]: {
            marginLeft:20,
        },
    },
    menuButton:{
        minWidth:0,marginLeft:20,
        [theme.breakpoints.down('sm')]: {
            marginLeft:10,
            padding:8
        },
    },
    menuActive:{
        fontSize:24,fontWeight:900,color:'#2196F3'
    },
    menuIcon:{
        fontSize:20,
    },
    blogsList:{
        width:"90%",maxWidth:1000,margin:'0 auto',height:'100%'
    },
    blogsCount:{
        margin:'32px 0'
    },

    cardHeader:{
        padding:'24px 30px'
    },
    cardTitle:{
        color:'rgba(0,0,0,0.5)',fontSize:20
    },
    articleData:{
        display:'flex',alignItems:'center',height:130,justifyContent:'center',padding:'0 40px',
        [theme.breakpoints.down('md')]: {
            flexWrap:'wrap'
        },
        [theme.breakpoints.down('sm')]: {
            height:200,
            padding:'0 10px',
        },
        [theme.breakpoints.down('xs')]: {
            padding:'0 10px',
        },
    },
    dataItem:{
        display:'flex',alignItems:"center",width:"33.33%",justifyContent:'center',
        [theme.breakpoints.down('sm')]: {
            //width:"100%",
            justifyContent:'start',
            flexDirection:'column',
            textAlign:'center'
        },
    },
    dataNum:{
        [theme.breakpoints.down('xs')]: {
            fontSize:16
        },
    },
    dataName:{
        [theme.breakpoints.down('xs')]: {
            fontSize:12,transform:'scale(0.8,0.8)'
        },
    },
    dataItemSmall:{
        width:"16%",
        [theme.breakpoints.down('md')]: {
            width:"50%",
        },
    },
    dataIcon:{
        display:'inline-block',
    },
    dataIconImg:{
        transition:'all 0.6s ease-in-out',
        '&:hover':
            {
              transform:'rotate(360deg)'
              //animation:'rotate360 2s'
            },
        width:80,
        [theme.breakpoints.down('sm')]: {
            width:60,
        },
        [theme.breakpoints.down('xs')]: {
            width:40,
        },

    },
    '@keyframes rotate360':{
      '0%':{
        transform:'rotate(0deg)'
      },
      '100%':{
        transform:'rotate(360deg)'
      }
    },
    dataInfo:{
        display:'inline-block',
        marginLeft:10
    },
    articleTitle:{
        color:'rgba(0,0,0,0.7)',fontSize:20,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'
    },
    articleDesc:{
        height: 200,
        padding: '0 40px',
        position: 'relative'
    },
    articleDescWord:{
        position: 'absolute',
        bottom: 0,
        zIndex: 200,
        color: '#ffffff',
        fontSize: 16,
        width: '100%',
        left:0,
        padding:10,
        backgroundColor:'rgba(0,0,0,0.3)',
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    description:{
        textOverflow:'ellipsis',
        overflow:'hidden',
        height:48,
        display:'-webkit-box',
        '-webkit-box-orient':'vertical',
        '-webkit-line-clamp':2,
    },
    blogBg:{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        filter: 'blur(2px)',
        backgroundPosition: 'left bottom',
        transition:'all 0.3s ease-in-out',
        '&:hover':{
            filter:'blur(0px)'
        }
    }

})

export default styles
