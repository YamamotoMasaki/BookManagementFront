import React from 'react';
import Layout from '../components/layout';
import ListApp from '../components/list_comp/listapp'

export default () => (
    <div>
        <Layout />
        <div>書籍を一覧表示するページ</div>
        <div>
            <form method="get" action="https://in1r9v7w00.execute-api.ap-northeast-1.amazonaws.com/Prod/book-management/scan-db">
                <input type='submit' value='一覧取得' />
            </form>
        </div>
        <ListApp />
    </div>
)