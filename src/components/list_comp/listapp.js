import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { globalHistory } from "@reach/router"

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
            list_contents_info: this.getUrlParameter()
        }
    }
    
    //指定したパラメータのデータを取得する関数
    getUrlParameter() {
        // URLのパラメータを取得
        var urlParam = globalHistory.location.search.substring(1);
        
        // 「&」が含まれている場合は「&」で分割
        var param = urlParam.split('&');
        
        // パラメータを格納する用の配列を用意
        var paramArray = [];
        
        // 用意した配列にパラメータを格納
        for (var i = 0; i < param.length; i++) {
          var paramItem = param[i].split('=');
          paramArray[paramItem[0]] = paramItem[1];
        }
        
        // 取り出したパラメータをデコードして返す
        return decodeURIComponent(paramArray.bookname);
    }
    
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
