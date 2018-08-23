import React from 'react';
import axios from 'axios';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import {Button, TableCell} from '@material-ui/core';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import pink from '@material-ui/core/colors/pink';
import deepOrange from '@material-ui/core/colors/deepOrange';

import Sliporder from '../pages/PrintSliporder';
import Invoice from '../pages/PrintInvoice';

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

class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showModule: '',
            products: []
        };
        this.showSliporder = this.showSliporder.bind(this);
        this.showInvoice = this.showInvoice.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    render(){
      const { classes } = this.props;
      const products = this.state.products
      const datas = products.map(products => 
      <TableRow className={classes.row} key={products.id}>
        <CustomTableCell component="th" scope="row">
          {products.date}
        </CustomTableCell>
        <CustomTableCell>{products.seller}</CustomTableCell>
        <CustomTableCell>{products.product}</CustomTableCell>
        <CustomTableCell>{products.status}</CustomTableCell>
        <CustomTableCell>
          <Button variant="contained" color="secondary" onClick={this.showInvoice} >Invoice</Button>
          <Button variant="contained" color="primary" onClick={this.showSliporder}>Slip Order</Button>
        </CustomTableCell>
          </TableRow>
          )

  return (
    // <Paper styles={classes.root}>
    //   <Table className={classes.table}>
    <Paper >
        <Table>
        <TableHead color='primary'>
          <TableRow>
            <CustomTableCell>Tanggal</CustomTableCell>
            <CustomTableCell>Pembeli</CustomTableCell>
            <CustomTableCell>Produk</CustomTableCell>
            <CustomTableCell>Status</CustomTableCell>
            <CustomTableCell>Cetak</CustomTableCell>
          </TableRow>
        </TableHead>
        {datas}
      </Table>
      { (this.state.showModule === 'sliporder') && <Sliporder modal={this.state.modal} closeModal={this.closeModal} /> }
      { (this.state.showModule === 'invoice') && <Invoice modal={this.state.modal} closeModal={this.closeModal} /> }
    </Paper>







            // <div className="sliporderno ">
            //     <Table>
                    
            //         <tr>
            //             <th>Tanggal</th>
            //             <th>Pembeli</th>
            //             <th>Produk</th>
            //             <th>Status</th>
            //             <th>Cetak</th>
            //         </tr>
            //         <tbody>
            //             {
            //                 this.state.data.map(item => {
            //                     return (
            //                         <tr key={item.id}>
            //                             <td>{item.date}</td>
            //                             <td>{item.idusers}</td>
            //                             <td>{item.idorderitem}</td>
            //                             <td>Belum Diproses</td>
                                        // <td><Button onClick={this.showInvoice}>Invoice</Button></td>
                                        // <td><Button onClick={this.showSliporder}>Slip Order</Button></td>
            //                         </tr>
            //                     )
            //                 })
            //             }   
            //         </tbody>                      
            //     </Table>
                // { (this.state.showModule === 'sliporder') && <Sliporder modal={this.state.modal} closeModal={this.closeModal} /> }
                // { (this.state.showModule === 'invoice') && <Invoice modal={this.state.modal} closeModal={this.closeModal} /> }
            // </div>
        );
        
    }

    componentDidMount(){
        // this.getData()
        this.setState({products:[
          {
            id: '12',
            date: '02052018',
            seller: 'dodo',
            product: 'Teh tarik',
            status: 'di proses'

          }
        ]})
     }
     getData(){
         axios.get(`${process.env.REACT_APP_API_URL}/products/`)
         .then((response) => {
             console.log(response);
             this.setState({products: response.data})
         })
         .catch((err) => {
             console.log(err);
         })
     }

    showSliporder(){
        this.setState({
            showModule: 'sliporder',
            modal: true
        });
    }
     showInvoice(){
        this.setState({
            showModule: 'invoice',
            modal: true
        });
    }
     closeModal() {
        this.setState({
            showModule: '',
            modal: false
        });
    }
}

List.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(List);
