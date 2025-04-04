import { useState } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper.tsx";

export function App() {
  const [count, setCount] = useState(0);

  const handleCount = (value: number) => {
    setCount(count + value);
  };
  return (
    <view className="App">
      <Wrapper>
        <view className="counter">
          <text className="Title">Hello, Emin</text>
          <text className="">Lorem, ipsum dolor.</text>
          <view className="content">
            <view className="counterBtn" bindtap={() => handleCount(-1)}>
              <text className="counterBtnText">-</text>
            </view>
            <view className="text">
              <text className="counterValue">{count}</text>
            </view>
            <view className="counterBtn" bindtap={() => handleCount(1)}>
              <text className="counterBtnText">+</text>
            </view>
          </view>
          <view className="content">
            <view className="resetBtn" bindtap={() => setCount(0)}>
              <text className="resetBtnText">Reset</text>
            </view>
          </view>
        </view>
      </Wrapper>
    </view>
  );
}
