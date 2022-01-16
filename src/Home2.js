import React, {useState, useRef} from 'react'
import styled from 'styled-components';
import './Font.css';
import ProjectModal2 from './ProjectModal2';
import Thankyou2 from "./Thankyou2";
import ModalLinks from "./ModalLinks";

function Home2() {
    const [modal, setModal] = useState(false);
    const [projectModal, setProjectModal] = useState(false);
    const [bookmark, setBookmark] = useState(false);
    const [supportModal, setSupportModal] = useState(false);
    const aboutRef = useRef();
    const discoverRef = useRef();
    const getStartedRef = useRef();
    
    const scrollToAbout = () => {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
      setModal(false);
    };

    const scrollToDiscover = () => {
      discoverRef.current.scrollIntoView({ behavior: "smooth" });
      setModal(false);
    };

    const scrollToStart = () => {
      getStartedRef.current.scrollIntoView({ behavior: "smooth" });
      setModal(false);
    };

     const selectReward = () => {
       setProjectModal(true);
     };
    return (
      <>
        <Nav>
          {modal === false && 
           <>
           <img src="/images/logo.svg" alt="" />
            <span>
              <img
                src="/images/icon-hamburger.svg"
                alt=""
                onClick={() => setModal(true)}
              />
              <span onClick={() => scrollToAbout()}>About</span>
              <span onClick={() => scrollToDiscover()}>Discover</span>
              <span onClick={() => scrollToStart()}>Get Started</span>
            </span>
            </>
          }
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
              <section onClick={() => setBookmark(!bookmark)}>
                <img
                  src="/images/icon-bookmark.svg"
                  alt=""
                  className={`${bookmark && "bookmark"}`}
                  onClick={() => setBookmark(!bookmark)}
                />
                {bookmark ? (
                  <span id="bookmarked">Bookmarked</span>
                ) : (
                  <span>Bookmark</span>
                )}
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
          <ProjectDescription>
            <div>
              <h1 ref={aboutRef}>About this project</h1>
              <span>
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
                platform that elevates your screen to a more comfortable viewing
                height. Placing your monitor at eye level has the potential to
                improve your posture and make you more comfortable while at
                work, helping you stay focused on the task at hand.
              </span>
              <br />
              <br />
              <span>
                Featuring artisan craftsmanship, the simplicity of design
                creates extra desk space below your computer to allow notepads,
                pens, and USB sticks to be stored under the stand.
              </span>
            </div>
            <Rewards>
              <h1 ref={discoverRef}>Bamboo Stand</h1>
              <span>Pledge $25 or more</span>
              <br />
              <br />
              <p>
                You get an ergonomic stand made of natural bamboo. You've helped
                us launch our promotional campaign, and you’ll be added to a
                special Backer member list.
              </p>
              <div>
                <h1>
                  101 <span>left</span>
                </h1>
              </div>
              <div>
                <button onClick={selectReward}>Select Reward</button>
              </div>
            </Rewards>
            <Rewards>
              <h1>Black Edition Stand</h1>
              <span>Pledge $75 or more</span>
              <br />
              <br />
              <p>
                You get a Black Special Edition computer stand and a personal
                thank you. You’ll be added to our Backer member list. Shipping
                is included.
              </p>
              <div>
                <h1>
                  64 <span>left</span>
                </h1>
              </div>
              <div>
                <button onClick={selectReward}>Select Reward</button>
              </div>
            </Rewards>
            <LastReward>
              <h1>Mahogany Special Edition</h1>
              <span>Pledge $200 or more</span>
              <br />
              <br />
              <p>
                You get two Special Edition Mahogany stands, a Backer T-Shirt,
                and a personal thank you. You’ll be added to our Backer member
                list. Shipping is included.
              </p>
              <div>
                <h1>
                  0 <span>left</span>
                </h1>
              </div>
              <div>
                <button>Out of Stock</button>
              </div>
            </LastReward>
          </ProjectDescription>
        </HeroSection>
        {modal && (
        <ModalLinks
          modal={modal}
          setModal={setModal}
          aboutRef={aboutRef}
          discoverRef={discoverRef}
          getStartedRef={getStartedRef}
        />
      )}
        {projectModal && (
          <ProjectModal2
            setProjectModal={setProjectModal}
            setSupportModal={setSupportModal}
          />
        )}
        {supportModal && (
          <Thankyou2
            setSupportModal={setSupportModal}
            setProjectModal={setProjectModal}
          />
        )}
      </>
    );
}

const Nav = styled.nav`
  @media (min-width: 768px) {
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

    img:first-child {
      min-width: 4%;
      height: 4%;
    }
    span img {
      visibility: hidden;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
    span {
      color: white;
      padding-left: 1.5rem;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    background-image: url("/images/image-hero-mobile.jpg");
    min-width: 375px;
    height: 600px;
    z-index: -1;
    padding-top: 1rem;
    span:first-child {
      font-weight: 700;
      font-size: 30px;
      color: white;
      padding-top: 1.2rem;
    }
   span > span{
    display: none;
   }
   & > img{
     max-width: 40%;
     height: 7%;
     padding-top: 1rem;
   }
    span > img {
      width: 20px;
      height: 20px;
      cursor: pointer;
      margin-top: 1.25rem;
    }
  }
`;
 const HeroSection = styled.div`
   @media (min-width: 768px) {
     max-width: 820px;
     margin: 0 auto;
     height: 1000px;
   }

   @media (max-width: 768px) {
     max-width: 320px;
     margin: 0 auto;
   }
 `;

 const BookMarkContainer = styled.div`
   @media (min-width: 768px) {
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
         &:hover {
           background: hsl(176, 72%, 28%);
         }
       }
       img {
         bottom: 0rem;
       }
     }
     section {
       display: flex;
       align-items: center;
       background: rgba(0, 0, 0, 0.1);
       border-radius: 1.5rem;
       height: 56px;
       padding-right: 1rem;
       width: auto;
       cursor: pointer;
     }
     section span {
       padding-left: 0.4rem;
       text-align: center;
       color: grey;
     }
   }

   @media (max-width: 768px) {
     display: flex;
     width: 320px;
     height: 300px;
     position: relative;
     background-color: white;
     margin: 0 auto;
     align-items: center;
     flex-direction: column;
     z-index: 50;
     bottom: 4rem;
     left: 0rem;
     border-radius: 0.8rem;
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
       margin-bottom: 1.5rem;
     }
     div {
       display: flex;
       align-items: center;
       justify-content: center;
       text-align: center;
       width: 100%;

       button {
         margin-right: 1rem;
         width: 200px;
         height: 56px;
         border: none;
         background: hsl(176, 50%, 47%);
         border-radius: 1.5rem;
         color: white;
         font-weight: 700;
         font-size: 14px;
         cursor: pointer;
         &:hover {
           background: hsl(176, 72%, 28%);
         }
       }
       img {
         bottom: 0rem;
         cursor:pointer;
       }
     }
     section span {
       display: none;
     }
   }
 `;

 const Stats = styled.div`
   @media (min-width: 768px) {
     display: flex;
     margin: 0 auto;
     width: auto;
     height: 240px;
     background: white;
     align-items: center;
     justify-content: space-between;
     box-shadow: 0.1px 0.1px 0.1px 1px rgba(0, 0, 0, 0.1);
     border-radius: 0.8rem;

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
       width: 70px;
       height: 1px;
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
       transform: translateY(75px);
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
   }

   @media (max-width: 768px) {
     display: flex;
     flex-direction: column;
     align-items: center;
     margin: 0 auto;
     width: 320px;
     height: 430px;
     background: white;
     text-align: center;
     box-shadow: 0.1px 0.1px 0.1px 1px rgba(0, 0, 0, 0.1);
     border-radius: 0.8rem;
     padding-top: 1rem;

     div {
       display: flex;
       width: 80px;
       padding-top: 2rem;
       padding-bottom: 1rem;
       text-align: center;
       align-items: center;
       justify-content: center;
     }

     div:first-child {
       width: 100%;
     }

     h1 {
       font-size: 30px;
       line-height: 1.7rem;
     }
     span {
       font-size: 13px;
       text-transform: lowercase;
       opacity: 0.4;
       color: black;
       letter-spacing: 0;
     }
     div:nth-child(2) {
       padding-top: 0;
       span {
         letter-spacing: 0;
       }
     }

     button {
       width: 205px;
       height: 13px;
       background: hsl(176, 50%, 47%);
       padding: 0;
       border-radius: 1.5rem;
       border: none;
       cursor: pointer;
       margin-right: 3rem;
     }
     div:last-child {
       width: 220px;
       height: 13px;
       background: rgba(0,0,0,0.1);
       padding: 0;
       border-radius: 1.8rem;
     }
     div:nth-child(6){
       background: grey;
     }
     div div{
       display: none;
     }
   }
   
 `;
 const Underline = styled.div`
   @media (min-width: 768px) {
     width: 70px ;
     transform: rotate(90deg);
     height: 1px;
     padding: 0 !important;
     background: rgba(0, 0, 0, 0.2);
   }

   @media (max-width: 768px) {
     width: 80px;
     height: 1px;
     padding: 0 !important;
     background: rgba(0, 0, 0, 0.2);
   }
 `;

 const ProjectDescription = styled.div`
   @media (min-width: 768px) {
     width: 820px;
     height: 1030px;
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     padding-left: 1.7rem;
     padding-right: 1.5rem;
     background: white;
     padding-top: 2.5rem;
     margin-top: 1.5rem;
     box-shadow: 0.1px 0.1px 0.1px 1px rgba(0, 0, 0, 0.1);
     border-radius: 0.8rem;
     border-bottom: solid rgba(0, 0, 0, 0.2);
     h1 {
       font-size: 20px;
       letter-spacing: 0;
       word-spacing: 0;
       text-transform: none;
       padding-bottom: 1.1rem;
     }

     span {
       font-size: 12.9px;
       word-spacing: 0.2rem;
       opacity: 0.4;
       color: black;
     }
   }
   @media (max-width: 768px) {
     width: 320px;
     height: 1540px;
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     padding-left: 1.7rem;
     padding-right: 1.5rem;
     background: white;
     padding-top: 2.5rem;
     margin-top: 1.5rem;
     box-shadow: 0.1px 0.1px 0.1px 1px rgba(0, 0, 0, 0.1);
     border-radius: 0.8rem;
     border-bottom: solid rgba(0, 0, 0, 0.2);
     h1 {
       font-size: 20px;
       letter-spacing: 0;
       word-spacing: 0;
       text-transform: none;
       padding-bottom: 1.1rem;
     }

     span {
       font-size: 12.9px;
       word-spacing: 0.2rem;
       opacity: 0.4;
       color: black;
     }
   }
 `;

 const Rewards = styled.div`
   @media (min-width: 768px) {
     width: 100%;
     height: 230px;
     background: white;
     margin-top: 1.5rem;
     box-shadow: 0.1px 0.1px 0.1px 1px rgba(0, 0, 0, 0.1);
     border-radius: 0.8rem;
     padding-left: 1.7rem;
     padding-top: 1rem;
     padding-right: 1.5rem;

     h1 {
       font-size: 15px;
       margin-bottom: 0;
       padding-bottom: 0.5rem;
       transform: translateY(25px);
     }

     span {
       display: flex;
       justify-content: flex-end;
       color: rgb(67, 179, 174);
       opacity: 1;
       font-weight: 400;
       width: auto;
     }

     p {
       font-size: 13px;
       opacity: 0.4;
       color: black;
       transform: translateY(-20px);
     }

     div {
       display: flex;
       align-items: center;
     }
     div h1 {
       font-size: 30px;
       transform: translateY(-5px);
     }

     div span {
       color: black;
       opacity: 0.4;
       margin-left: 3.5rem;
       transform: translateY(-18px);
     }

     div button {
       margin-right: 1.5rem;
       margin-top: 0.5rem;
       margin-left: 560px;
     }

     button {
       width: 160px;
       height: 56px;
       border: none;
       background: hsl(176, 50%, 47%);
       border-radius: 2.5rem;
       color: white;
       font-weight: 700;
       font-size: 14px;
       cursor: pointer;
       transform: translateY(-80px);
       &:hover {
         background: hsl(176, 72%, 28%);
       }
     }
   }

   @media (max-width: 768px) {
     width: 100%;
     height: 345px;
     background: white;
     margin-top: 1.5rem;
     box-shadow: 0.1px 0.1px 0.1px 1px rgba(0, 0, 0, 0.1);
     border-radius: 0.8rem;
     padding-left: 1.7rem;
     padding-top: 1.5rem;
     padding-right: 1.5rem;

     h1 {
       font-size: 15px;
       margin-bottom: 0;
       padding-bottom: 0.5rem;
     }

     span {
       color: rgb(67, 179, 174);
       opacity: 1;
       font-weight: 400;
     }

     p {
       font-size: 13px;
       opacity: 0.4;
       color: black;
     }

     div {
       display: flex;
       align-items: center;
     }
     div h1 {
       font-size: 30px;
     }

     div span {
       color: black;
       opacity: 0.4;
     }

     div button {
       margin-right: 1.5rem;
       margin-top: 0.5rem;
     }

     button {
       width: 160px;
       height: 56px;
       border: none;
       background: hsl(176, 50%, 47%);
       border-radius: 2.5rem;
       color: white;
       font-weight: 700;
       font-size: 14px;
       cursor: pointer;
       &:hover {
           background: hsl(176, 72%, 28%);
         }
     }
   }
 `;

 const LastReward = styled(Rewards)`
   opacity: 0.3;
   button {
     background: black;
     &:hover {
       background: black;
     }
   }
 `;


export default Home2
