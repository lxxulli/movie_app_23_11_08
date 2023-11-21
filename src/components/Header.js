import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";
import { useEffect, useRef } from "react";

const SHeader = styled.div`
  width: 100%;
  padding: 20px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: white;
  }
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;
const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
`;
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  li {
    margin-left: 60px;
  }
`;

export const Header = () => {
  const headerRef = useRef();
  // 레퍼런스 참조자 = 참조하고자 하는 곳에 ref를 이름을 넣으면 됨

  const scrollHandler = () => {
    // const pageY = window.pageYOffset;
    const pageY = window.scrollY; // 위랑 동일한 효과

    if (pageY > 300) {
      headerRef.current.style.position = "fixed";
      headerRef.current.style.backgroundColor = "rgba(0,0,0,0.5";
      headerRef.current.style.backdropFilter = "blur(3px)";
    } else {
      headerRef.current.style.position = "absolute";
      headerRef.current.style.backgroundColor = "transparent";
      headerRef.current.style.backdropFilter = "blur(0px)";
    }
  };

  useEffect(() => {
    return window.addEventListener("scroll", scrollHandler);
  });
  return (
    <SHeader ref={headerRef}>
      <Logo>
        <Link to={routes.home}>YUL</Link>
      </Logo>

      <Menu>
        <li>
          <Link to={routes.home}>Home</Link>
        </li>
        <li>
          <Link to={routes.search}>Search</Link>
        </li>
      </Menu>
    </SHeader>
  );
};
