// components/SignupAndSurvey.js
import React, { useState } from 'react';

const SignupAndSurvey = ({ setSignupAndSurveyCompleted }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [gender, setGender] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [locationPreference, setLocationPreference] = useState('');
  const [interiorPreferences, setInteriorPreferences] = useState([]);
  const [menuPreference, setMenuPreference] = useState('');
  const [visitPurpose, setVisitPurpose] = useState('');

  const handleInteriorPreference = (preference) => {
    // 인테리어 선호도 처리 로직을 구현합니다.
  };


  const handleSignupAndSurveySubmit = () => {
    // 회원가입및 설문조사 로직 구현 (서버와의 통신 등)

    // 설문조사 결과를 서버로 보내는 로직 구현

    // 회원가입 성공 시 setLoggedInUser 호출하여 상태 변경
    setSignupAndSurveyCompleted(true);
  };

  return (
    <div>
      <h2>회원 가입 정보 및 카페 취향 설문조사</h2>
      <div>
        <label>이메일:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>비밀번호:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <label>이름:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      {/* 나머지 회원가입 정보 입력 항목(선택) */}
      
      <div>  {/* 성별과 나이대는 굳이 안물어봐도 될수도 있다. 다소 민감한 정보일수도 있고
       다른 항목들에서 충분히 취향을 파악 할수 있을것 같다. */}
        <label>성별:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">선택</option>
          <option value="남성">남성</option>
          <option value="여성">여성</option>
        </select>
      </div>

      <div>  
        <label>나이대:</label>
        <select value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)}>
          <option value="">선택</option>
          <option value="10대">10대</option>
          <option value="20대">20대</option>
          <option value="30대">30대</option>
        
        </select>
      </div>

      <div>
        <label>카페 위치 선호도:</label>
        <input type="text" value={locationPreference} onChange={(e) => setLocationPreference(e.target.value)} />
      </div>
      
      <div>
  <label>카페 인테리어 이미지와 분위기 선호도:</label>
  <div>
    <input type="checkbox" id="interior1" value="interior1" 
        onChange={() => handleInteriorPreference("interior1")}/>
    <label htmlFor="interior1">인테리어 이미지 1</label>
    <label htmlFor="interior2">인테리어 이미지 2</label>
    <label htmlFor="interior3">인테리어 이미지 3</label>
    <label htmlFor="interior4">인테리어 이미지 4</label>
    <label htmlFor="interior5">인테리어 이미지 5</label>
    <label htmlFor="interior6">인테리어 이미지 6</label>
    {/* 추가적인 인테리어 이미지 체크박스 및 레이블 */}
  </div>
  {/* 기타 분위기 선호도 입력 항목 */}
</div>

<div>
  <label>카페 메뉴 선호도:</label>
  <div>
    <input type="radio" id="menuCoffee" name="menuPreference" value="coffee" onChange={(e) => setMenuPreference(e.target.value)} />
    <label htmlFor="menuCoffee">커피</label>
    <input type="radio" id="menuNonCoffee" name="menuPreference" value="non-coffee" onChange={(e) => setMenuPreference(e.target.value)} />
    <label htmlFor="menuNonCoffee">논커피</label>
  </div>
</div>

<div>
  <label>방문 목적:</label>
  <select value={visitPurpose} onChange={(e) => setVisitPurpose(e.target.value)}>
    <option value="">선택</option>
    <option value="데이트">데이트</option>
    <option value="공부 및 업무">공부 및 업무</option>
    <option value="친목">친목</option>
    {/* 기타 방문 목적 옵션 */}
  </select>
</div>
      <button onClick={handleSignupAndSurveySubmit}>나만의 카페 추천받기!</button>
</div>
  );
};

export default SignupAndSurvey;
