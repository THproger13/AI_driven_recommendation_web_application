
// components/Login.js
import React, { useState } from 'react';

const Login = ({ setLoggedInUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // 로그인 로직 구현 (서버와의 통신 등)
      // 로그인 성공 시 setLoggedInUser 호출하여 상태 변경
    };
  
    return (
      <div>
        <h2>로그인 창</h2>
        {/* 로그인 입력 폼과 버튼 */}
      </div>
    );
  };
  
  export default Login;
  