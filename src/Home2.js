import React, {useState, useRef} from 'react'
import styled from 'styled-components';
import './Font.css';
import './App.css';

function Home2() {
    const [modal, setModal] = useState(false);
    const [projectModal, setProjectModal] = useState(false);
    const [bookmark, setBookmark] = useState(false);
    const [supportModal, setSupportModal] = useState(false);
    const aboutRef = useRef();
    const discoverRef = useRef();
    const getStartedRef = useRef();
    return (
      <>
        <Nav>
          <>
            <img src="/images/logo.svg" alt="" />
            <span>
              <img
                src="/images/icon-hamburger.svg"
                alt="uihkul"
                onClick={() => setModal(true)}
              />
              <span>About</span>
              <span>Discover</span>
              <span>Get Started</span>
            </span>
          </>
        </Nav>
        <HeroSection>
          <BookMarkContainer>
            <img src="/images/logo-mastercraft.svg" alt="" />
            <h1 ref={getStartedRef}>Mastercraft Bamboo Monitor Riser</h1>
            <p>
              A beautifully handcrafted monitor stand to reduce neck and eye
              strain.
            </p>
            <div>
              <button onClick={() => setProjectModal(true)}>
                Back this project
              </button>
              <section>
                <img
                  src="/images/icon-bookmark.svg"
                  alt=""
                  className={`${bookmark && "bookmark"}`}
                  onClick={() => setBookmark(!bookmark)}
                />
                <span>Bookmark</span>
              </section>
            </div>
          </BookMarkContainer>
          <Stats>
            <div>
              <h1>
                $89,914
                <br />
                <span>of $100,000 backed</span>
              </h1>
            </div>
            <Underline />
            <div>
              <h1>
                5007
                <br />
                <span>total backers</span>
              </h1>
            </div>
            <Underline />
            <div>
              <h1>
                56
                <br />
                <span>days left</span>
              </h1>
            </div>
            <div>
              <button></button>
              <div></div>
            </div>
          </Stats>
        </HeroSection>
      </>
    );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-left: 6.5rem;
  padding-right: 6.5rem;
  background-image: url("/images/image-hero-desktop.jpg");
  background-repeat: no-repeat;
  background-size: 2000px;
  min-width: 100%;
  height: 500px;
  z-index: -1;
  padding-top: 2rem;
  
  img:first-child{
      min-width: 4%;
      height: 4%;
  }
  span img {
    visibility: hidden;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  span{
      color: white;
      padding-left: 1.5rem;
  }
`;
 const HeroSection = styled.div`
     max-width: 820px;
     margin: 0 auto;
     height: 1000px;
 `;

 const BookMarkContainer = styled.div`
   display: flex;
   width: 820px;
   height: 250px;
   position: relative;
   background-color: white;
   margin: 0 auto;
   align-items: center;
   flex-direction: column;
   z-index: 50;
   bottom: 4rem;
   left: 0rem;
   border-radius: 0.6rem;
   box-shadow: 0.1px 0.1px 0.1px 1px rgba(0, 0, 0, 0.1);

   img:nth-child(2) {
     cursor: pointer;
   }

   img {
     position: relative;
     bottom: 1.55rem;
   }
   h1 {
     font-size: 20px;
     text-align: center;
     padding-left: 2rem;
     padding-right: 2rem;
     font-weight: 700;
     color: black;
     letter-spacing: 1px;
     margin-bottom: 1.5rem;
   }
   p {
     font-size: 13px;
     text-align: center;
     opacity: 0.4;
     color: black;
     font-weight: 100;
     padding-left: 1rem;
     padding-right: 1rem;
     letter-spacing: 1px;
     margin-bottom: 2.5rem;
   }
   div {
     display: flex;
     align-items: center;
     justify-content: center;
     text-align: center;
     width: 100%;
     
     button {
       margin-right: 25rem;
       width: 200px;
       height: 56px;
       border: none;
       background: hsl(176, 50%, 47%);
       border-radius: 1.5rem;
       color: white;
       font-weight: 700;
       font-size: 14px;
       cursor: pointer;
     }
     img {
       bottom: 0rem;
     }
   }
   section{
       display: flex;
       align-items: center;
       background: lightgray;
       border-radius: 1.5rem;
       height: 56px;
       padding-right: 1rem;
       width: auto;
   }
   section span{
       padding-left: 0.4rem;
       text-align: center;
       color: grey;
   }
 `;

 const Stats = styled.div`
   display: flex;
   margin: 0 auto;
   width: auto;
   height: 240px;
   background: white;
   align-items: center;
   justify-content: space-between;
   box-shadow: 0.1px 0.1px 0.1px 1px rgba(0, 0, 0, 0.1);
   border-radius: 0.8rem;

   div {
     /* display: flex; */
     /* width: 273px; */
     /* text-align: center;
      align-items: center;
      justify-content: center; */
   }

   div:first-child {
     padding-left: 3rem;
     margin-top: 1.3rem;
     width: auto;
   }

   div:nth-child(3) {
     padding-right: 5rem;
     margin-top: 1rem;
     width: auto;
   }

   div:nth-child(5) {
     margin-top: 1.1rem;
     margin-right: 1rem;
     width: 50.97px;
   }

   h1 {
     font-size: 30px;
     line-height: 1.3rem;
   }
   span {
     font-size: 13px;
     text-transform: lowercase;
     opacity: 0.4;
     color: black;
     letter-spacing: 0;
   }
   div:nth-child(2) {
     width: 0px;
     span {
       letter-spacing: 0;
     }
   }
   div:last-child {
     width: 570px;
     height: 13px;
     background: hsl(176, 50%, 47%);
     padding: 0;
     margin-top: -0.8rem;
     border-radius: 1.5rem;
     margin-right: 3rem;
     transform: translateY(75px) ;
   }
   button {
     width: 740px;
     height: 13px;
     background: grey;
     opacity: 0.15;
     border-radius: 1.5rem;
     border: none;
     flex-wrap: wrap;
     transform: translateY(80px) !important;
   }
   div:nth-child(6) {
     width: 0;
     transform: translateX(-740px);
   }
 `;
 const Underline = styled.div`
   width: 70px !important;
   transform: rotate(90deg);
   height: 1px;
   padding: 0 !important;
   background: rgba(0, 0, 0, 0.2);
 `;


export default Home2
