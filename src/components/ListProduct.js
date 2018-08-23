import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import pink from '@material-ui/core/colors/pink';
import deepOrange from '@material-ui/core/colors/deepOrange';
import axios from 'axios'

const CustomTableCell = withStyles(theme => ({
  head: {
    primary: pink,
    secondary: deepOrange,
  },
  palette: {
    primary: pink,
    secondary: pink,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

class CustomizedTable extends React.Component {
    constructor(){
        super()
        this.state = {
            products: [],
        }
    }
    componentDidMount(){
        this.getData()
     }
     getData(){
         axios.get(`${link}`)
         .then((response) => {
             console.log(response);
             this.setState({products: response.data})
         })
         .catch((err) => {
             console.log(err);
         })
     }
render() {
  const { classes } = this.props;
  const products = this.state.products
  const datas = products.map(products => 
  <TableRow className={classes.row} key={products.id}>
    <CustomTableCell component="th" scope="row">
      {products.name}
    </CustomTableCell>
<CustomTableCell>{products.brand}</CustomTableCell>
<CustomTableCell>{products.description}</CustomTableCell>
<CustomTableCell>{products.price}</CustomTableCell>
<CustomTableCell>{products.idcategory}</CustomTableCell>
<CustomTableCell>{products.idseller}</CustomTableCell>
  </TableRow>
  )

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead color='primary'>
          <TableRow>
            <CustomTableCell>Product Name</CustomTableCell>
            <CustomTableCell>Brand</CustomTableCell>
            <CustomTableCell>Description</CustomTableCell>
            <CustomTableCell>Price</CustomTableCell>
            <CustomTableCell>Category</CustomTableCell>
            <CustomTableCell>Seller</CustomTableCell>
          </TableRow>
        </TableHead>
        {datas}
      </Table>
    </Paper>
  );
}
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);