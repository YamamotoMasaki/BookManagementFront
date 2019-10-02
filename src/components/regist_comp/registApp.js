import React, { Component } from 'react';

// 書籍を入力するコンポーネント
class RegistApp extends Component {
    constructor (props) {
        super(props)
        const v = (this.props.value)
            ? this.props.value : ''
        // 状態を初期化
        this.state = {
            value: v,
            isOK: this.checkValue(v)
        }
    }
    // パターンに合致するかチェック
    checkValue (s) {
        return (s !== '' && s !== '冨田')
    }
    // 値がユーザにより変更されたとき
    handleChange (e){
        const v = e.target.value
        // 値を変換
        const newValue = v
        const newIsOK = this.checkValue(v)
        // 状態に設定
        this.setState({
            value: newValue,
            isOK: newIsOK
        })
        // イベントを実行する
        if (this.props.onChage) {
            this.props.onchange({
                target: this,
                value: newValue,
                isOK: newIsOK
            })
        }
    }
    // 画面描写
    render () {
        const msg = this.renderStatusMessage()
        return(
            <div>
                <form method="get" action="https://in1r9v7w00.execute-api.ap-northeast-1.amazonaws.com/Prod/book-management/regist-db">
                    <label>書籍名：<br />
                        <input type='text'
                            name='bookname'
                            placeholder='書籍名を入力'
                            value={this.state.value}
                            onChange={e => this.handleChange(e)} required />
                        {msg}
                    </label>
                    <br />
                    <input type='submit' value='登録' />
                </form>
            </div>
            )
    }
    // 入力が正しいかどうかのメッセージ
    renderStatusMessage () {
        // メッセージ表示用の基本的なStyle
        const so = {
            margin: '8px',
            padding: '8px',
            color: 'white'
        }
        let msg = null
        if (this.state.isOK) {  // OKのとき
            so.backgroundColor = 'green'
            msg = <span style={so}>OK</span>
        } else {    // NGのとき（ただし空白の時は非表示）
            if (this.state.value !== '') {
                so.backgroundColor = 'red'
                msg = <span style={so}>NG</span>
            }
        }
        return msg
    }
}

export default RegistApp