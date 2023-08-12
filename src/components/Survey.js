// components/Survey.js

import React, { useState } from 'react';

const Survey = ({ setSurveyCompleted }) => {
    const [gender, setGender] = useState('');
    const [ageGroup, setAgeGroup] = useState('');
    const [locationPreference, setLocationPreference] = useState('');
    // 기타 설문조사 항목의 상태들
  
    const handleSurveySubmit = () => {
      // 설문조사 결과를 서버로 보내는 로직 구현
      setSurveyCompleted(true);
    };
  
    return (
      <div>
        <h2>회원의 카페 취향을 물어보는 설문조사 창</h2>
        {/* 설문조사 입력 폼과 버튼 */}
      </div>
    );
  };
  
  export default Survey;
  