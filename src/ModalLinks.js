import React from "react";
import styled from "styled-components";

function ModalLinks({ setModal }) {
  return (
    <ModalContainer>
        <div>
          <img src="/images/logo.svg" alt="" />
          <img src="/images/icon-close-menu.svg" onClick={() => setModal(false)} />
        </div>
      <ModalLink>
        <div>
          <section>
            <span>about</span>
            <Outline></Outline>
          </section>
          <section>
            <span>discover</span>
            <Outline></Outline>
          </section>
          <section>
            <span>get started</span>
          </section>
        </div>
      </ModalLink>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  position: fixed;
  bottom: 15rem;
  top: 0rem;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: grid;
  z-index: 999;
  place-items: center;
  div:first-child{
      max-width: 100%;
  }
  img{
      margin-top: 2rem;
  }
 img:first-child{
     padding-right: 12rem;
 }
 img:nth-child(2){
     cursor: pointer;
 }
`;

const ModalLink = styled.div`
  width: 320px;
  height: 270px;
  background: white;
  margin-bottom: 36rem;
  border-radius: 0.7rem;

  div {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    justify-content: space-between;
    text-transform: capitalize;
    font-size: 20px;
    font-weight: 600;
    color: black;
    line-height: 3.5rem;
  }

  section {
    height: 33%;
    padding-top: 1rem;
  }
  section:nth-child(3) {
   height: 73px;
   padding-top: 1rem;
  }

  span {
    padding-left: 1.5rem;
  }

  @media (min-width: 768px) {
    visibility: hidden;
  }
`;

const Outline = styled.div`
  margin-top: 1rem;
  width: 325px;
  height: 1px;
  padding: 0 !important;
  background: rgba(0, 0, 0, 0.1);
`;

export default ModalLinks;
