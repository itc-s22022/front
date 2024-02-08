import { useState } from 'react';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async () => {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                console.log('ログイン成功');
                // ログイン成功時の処理を追加
            } else {
                console.error('ログイン失敗');
                // ログイン失敗時の処理を追加
            }
        } catch (error) {
            console.error('エラー:', error);
        }
    };

    return (
        <div>
            <h1>ログイン</h1>
            <input type="text" placeholder="ユーザ名" value={username} onChange={handleUsernameChange} />
            <input type="password" placeholder="パスワード" value={password} onChange={handlePasswordChange} />
            <button onClick={handleLogin}>ログイン</button>
        </div>
    );
}
