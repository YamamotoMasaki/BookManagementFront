import React from "react"

export default () => (
    <div style={{ color: `black`, fontSize: 25 }}>
        <h1>lambdaのテスト</h1>
        <form method="get" action="https://essweh0gh6.execute-api.ap-northeast-1.amazonaws.com/Prod">
            <p><input type="submit" value="get" /></p>
        </form>
        
        <form method="get" action="https://essweh0gh6.execute-api.ap-northeast-1.amazonaws.com/Prod">
            <p>アカウント名：<input type="text" name="name" /></p>
            <p>メールアドレス：<input type="text" name="email" /></p>
            <p><input type="submit" value="post" /></p>
        </form>
    </div>
)