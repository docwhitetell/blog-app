const styles = theme => ({
  root: {
    position: 'static',
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
  },
  textField: {
    color: '#ffffff',
  },

  formInput: {
    color: '#ffffff',
    fontSize: 18,
    padding: '5px 0 4px',
  },
  formLabel: {
    fontSize: 18,
    color: '#ffffff',
  },
  cardRow: {
    margin: '20px auto',
    width: '96%',
  },
  card: {
    display: 'flex',
    padding: '0 20px',
    cursor: 'pointer',
    '&:hover': {
      cursor: 'hand',
      transition: 'all 0.4s ease-in-out',
      boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.1), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.1)',
      /*  transform:'scale(1.02,1.02)'*/
    },
  },
  icon: {
    textAlign: 'center',
    lineHeight: '120px',
    fontSize: '54px',
  },
  icontext: {
    color: '#616161',
    fontSize: '24px',
  },
  cardLeft: {
    flex: 2,
    height: 120,
  },
  cardRight: {
    flex: 3,
    height: 120,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  crTitle: {
    color: 'inherit',
    fontSize: '16px',
  },
  crNum: {
    color: 'inherit',
    fontSize: '16px',
  },
  chartItem: {
    marginBottom: 10,
  },
  dataCard: {
    padding: '20px 10px',
  },
  dataCardHeader: {},
  dataCardNumber: {
    fontSize: 28, display: 'block', width: '100%',
  },
  dataCardExtra: {
    height: 48, width: '100%', position: 'relative',
  },
  dataCardDivider: {
    border: '1px solid #e8e8e8', width: '100%',
  },
  cardHeaderInfo: {
    float: 'right',
    paddingRight: 10,
  },
  CardTitle: {
    height: 28,
    fontSize: 14,
    color: '#757575',
    fontWeight: 300,
  },
  CardMain: {},
  leftData: {
    fontSize: '14px',
    fontWeight: 400,
    display: 'inline-block',
    width: '50%',
  },
  rightData: {
    fontSize: '14px',
    fontWeight: 400,
    display: 'inline-block',
    width: '50%',
  },
  salesRank: {
    marginTop: 10,
    [theme.breakpoints.down('sm')]: {
      padding: '0 40px',
    },
  },
  salesRankItem: {
    marginTop: 12,
  },
  salesItemLeftTop: {
    display: 'inline-block',
    background: '#263238',
    borderRadius: '50%',
    width: 24,
    height: 24,
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: '24px',
    fontSize: '16px',
  },
  salesItemLeft: {
    display: 'inline-block',
    background: '#B0BEC5',
    borderRadius: '50%',
    width: 24,
    height: 24,
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: '24px',
    fontSize: '16px',
  },
  salesItemMid: {
    margin: '0 20px',
  },
  salesItemRight: {
    float: 'right',
    marginRight: 20,
    lineHeight: '24px',
  },

  cardHeader: {
    height: 56,
    lineHeight: 56,
    padding: '0 20px',
    position: 'relative',
  },


})
export default styles;
