import React, { useState } from 'react';

const Login = ({ setLoggedInUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');


  const handleLogin = () => {
    // 로그인 로직 구현 (서버와의 통신 등)
    // 로그인 성공 시 setLoggedInUser 호출하여 상태 변경
    const user = { name: 'John Doe', profileImage: '/path-to-profile-pic.jpg' }; // 예시 로그인 유저 정보
    setLoggedInUser(user);
  };

  return (
    <div className="login-form">
      <h2>로그인 창</h2>
      <div className="input-group">
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
};

export default Login;
