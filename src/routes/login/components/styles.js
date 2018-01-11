import pink from 'material-ui/colors/pink'
const style = theme => ({
    loginWrapper: {
        position: 'absolute',
        width: 300,
        borderRadius: 20,
        paddingBottom: 40,
        paddingTop: 20,
        top: '60%', left: '50%',
        paddingLeft: 40,
        paddingRight: 40,
        opacity: 1,
        background: 'rgba(0,0,0,0.4)',
        transform: 'translate(-50%,-50%)',
    },
    formfield: {
        marginBottom: 20,
        color: '#ffffff'
    },
    textfield: {
        color: '#ffffff',
        marginBottom: 20,
    },
    textfieldLabel: {
        fontSize: '14px',
        fontWeight: 100,
        color:'#ffffff'
    },
    textfieldInput: {
        color: '#ffffff',
        '&:before': {
            background: '#F06292'
        },
        '&:after': {
            background: '#ffffff'
        }
    },
    submitButton: {
        display: 'block',
        margin: '0 auto',
        backgroundImage: "url('/assets/buttonbg1.png')",
        backgroundSize: '100% 100%',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        color: '#ffffff',
        borderRadius: 14,
        fontWeight: 300,
    },
    remember: {
        display: 'inline-block',
        height: 48,
        lineHeight: '48px',
        verticalAlign: 'top',
        color: '#ffffff'
    },
    checked:{
        color: pink[300],
    }

})

export default style