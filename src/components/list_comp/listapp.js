import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const windowGlobal = typeof window !== 'undefined' && window;

const classes = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

class ListApp extends Component {
    
    constructor (props) {
        super(props)
        this.state = {
            list_contents_info: this.getUrlParameter('bookname')
        }
    }
    
    //指定したパラメータのデータを取得する関数
    getUrlParameter(name) {
        name = name.replace(/[[]/, '[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(windowGlobal.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };
    
    render () {
        if (!this.state.list_contents_info) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <Paper className={classes.root}>
                  <Table className={classes.table}>
                    <TableHead>
                      <TableRow>
                        <TableCell>{"書籍名"}</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                          <TableCell>{this.state.list_contents_info}</TableCell>
                        </TableRow>
                    </TableBody>
                  </Table>
                </Paper>
            </div>
        )
    }
}

export default ListApp
