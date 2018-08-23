import React from 'react';
import axios from 'axios';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import {Button, TableCell, Modal} from '@material-ui/core';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import pink from '@material-ui/core/colors/pink';
import deepOrange from '@material-ui/core/colors/deepOrange';

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

class PrintInvoice extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showModule: '',
            orders: []
        };
        this.showSliporder = this.showSliporder.bind(this);
        this.showInvoice = this.showInvoice.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    render(){
        
      const { classes } = this.props;
      const orders = this.state.orders
      const datas = orders.map(orders => 
        <TableRow className={classes.row} key={orders.id}>
        <CustomTableCell component="th" scope="row">
          {orders.no}
        </CustomTableCell>
    <CustomTableCell>{orders.product}</CustomTableCell>
    <CustomTableCell>{orders.item}</CustomTableCell>
    <CustomTableCell>{orders.price}</CustomTableCell>
    <CustomTableCell>
        <Button  onClick={ () => { window.print();
                                    }
                                    }>Cetak</Button> 
        <Button type="button" onClick={this.close}>Batal</Button>
    </CustomTableCell>
      </TableRow>
          )

  return (
    // <Paper styles={classes.root}>
    //   <Table className={classes.table}>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead color='primary'>
          <TableRow>
            <CustomTableCell>No</CustomTableCell>
            <CustomTableCell>Produk</CustomTableCell>
            <CustomTableCell>jumlah</CustomTableCell>
            <CustomTableCell>Harga</CustomTableCell>
            <CustomTableCell>Cetak</CustomTableCell>
          </TableRow>
        </TableHead>
        {datas}
      </Table>
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
        this.setState({orders:[
            {
                id: '12',
                no: '1',
                product: 'Teh tarik',
                item: '3',
                price: '10000'
    
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

PrintInvoice.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(PrintInvoice);
