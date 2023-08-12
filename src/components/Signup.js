// components/Signup.js
import React, { useState } from 'react';

const Signup = ({ setLoggedInUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const handleSignup = () => {
    // 회원가입 로직 구현 (서버와의 통신 등)
    // 회원가입 성공 시 setLoggedInUser 호출하여 상태 변경
  };

  return (
    <div>
      <h2>회원가입 창</h2>
      {/* 회원가입 입력 폼과 버튼 */}
    </div>
  );
};

export default Signup;