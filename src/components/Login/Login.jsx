import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 추가
import IphoneXBarsStatus from "./IphoneXBarsStatus";
import line1 from "./line-1.svg";
import line2 from "./line-2.svg";
import logo from "./logo.svg";
import "./style.css";

export const Screen = () => {
  const [email, setEmail] = useState("20231415@sungshin.ac.kr");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("login");
  const navigate = useNavigate(); // 추가

  const handleLogin = () => {
    console.log("로그인 시도:", { email, password });
    
    // 간단한 로그인 검증 (실제 환경에서는 서버 API 호출)
    if (email && password) {
      console.log("로그인 성공! 홈화면으로 이동");
      navigate("/"); // 홈화면으로 이동
    } else {
      alert("이메일과 비밀번호를 입력해주세요.");
    }
  };

  const handleSignup = () => {
    console.log("회원가입 시도");
    // 회원가입 로직 후 홈화면으로 이동
    navigate("/");
  };

  return (
    <div className="screen">
      <div className="div">
        <div className="overlap-group">
          <div 
            className={`text-wrapper ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            로그인
          </div>

          <div 
            className={`text-wrapper-2 ${activeTab === 'signup' ? 'active' : ''}`}
            onClick={() => setActiveTab('signup')}
          >
            회원가입
          </div>

          <div className="overlap">
            <div className="text-wrapper-3">
              <br />
              필요한 프롬프트를 <br />더 빠르게.
            </div>

            <img className="logo" alt="Logo" src={logo} />
          </div>

          {/* 상태바 - props 없이 단순화 */}
          <IphoneXBarsStatus />
          
          <div className={`rectangle-2 ${activeTab === 'signup' ? 'move-right' : ''}`} />
        </div>

        {/* 로그인/회원가입 버튼 - 수정됨 */}
        <div 
          className="div-wrapper" 
          onClick={activeTab === 'login' ? handleLogin : handleSignup}
        >
          <div className="text-wrapper-4">
            {activeTab === 'login' ? '로그인' : '회원가입'}
          </div>
        </div>

        <div className="group" style={{ display: activeTab === 'login' ? 'block' : 'none' }}>
          <div className="text-wrapper-5">이메일 주소</div>

          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-wrapper-6 input-field"
            placeholder="이메일을 입력하세요"
          />

          <img className="line" alt="Line" src={line1} />
        </div>

        <div className="group-2" style={{ display: activeTab === 'login' ? 'block' : 'none' }}>
          <div className="text-wrapper-5">비밀번호</div>

          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p input-field"
            placeholder="비밀번호를 입력하세요"
          />

          <img className="line" alt="Line" src={line2} />
        </div>

        {/* 회원가입 폼 */}
        <div className="signup-form" style={{ display: activeTab === 'signup' ? 'block' : 'none' }}>
          <div className="group">
            <div className="text-wrapper-5">이메일 주소</div>
            <input 
              type="email"
              className="text-wrapper-6 input-field"
              placeholder="이메일을 입력하세요"
            />
            <img className="line" alt="Line" src={line1} />
          </div>

          <div className="group-2">
            <div className="text-wrapper-5">비밀번호</div>
            <input 
              type="password"
              className="p input-field"
              placeholder="비밀번호를 입력하세요"
            />
            <img className="line" alt="Line" src={line2} />
          </div>

          <div className="group-2">
            <div className="text-wrapper-5">비밀번호 확인</div>
            <input 
              type="password"
              className="p input-field"
              placeholder="비밀번호를 다시 입력하세요"
            />
            <img className="line" alt="Line" src={line2} />
          </div>
        </div>
      </div>
    </div>
  );
};