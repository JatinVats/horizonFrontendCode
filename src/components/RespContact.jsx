import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import Logout from "./Logout";

export default function RespContact({ contacts, changeChat }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  useEffect( async() => {
    const data = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    );
    setCurrentUserName(data.username);
    setCurrentUserImage(data.avatarImage);
  }, []);
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
  return (
    <>
    <ResLogout className="resp-logout">
    <Logout/>
    </ResLogout>
      {currentUserImage && currentUserImage && (
        <Container>
         
          <div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <div
                  key={contact._id}
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                  <div className="avatar">
                    <img
                      src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                      alt=""
                    />
                  </div>
                  <div className="username">
                    <h3>{contact.username}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          
        </Container>
      )}
    </>
  );
}

const ResLogout = styled.div`
  position: fixed;
  z-index: 999;
  right: 1rem;
  top: 8rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`




const Container = styled.div`

  display: none;
  
  overflow: hidden;
  background-color: #080420;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 2rem;
    }
    h3 {
      color: white;
      text-transform: uppercase;
    }

   
  }

  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }

    .contact {
      background-color: #ffffff34;
      min-height: 5rem;
      cursor: pointer;
      width: 90%;
      border-radius: 0.2rem;
      padding: 0.4rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: 0.5s ease-in-out;
      .avatar {
        img {
          height: 3rem;
        }
    }
      .username {
        h3 {
          color: white;
        }
      }
    }
    .selected {
      background-color: #738FA7;
    }
  }


  .current-user {
    background-color: #0d0d30;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .avatar {
      img {
        height: 4rem;
        max-inline-size: 100%;
      }
    }
    .username {
      h2 {
        color: white;
      }
    }
  }

  /* @media (max-width: 768px) {
    grid-template-rows: 10% 85%;

    .brand {
      justify-content: space-between;
      padding: 0 1rem;
    }

    .contacts {
      overflow: initial;
      gap: 1rem;

      .contact {
        width: 100%;
      }
    }

    .current-user {
      flex-direction: column;
      gap: 1rem;
    }
  } */

  /* @media (max-width: 450px){
     .current-user{
      
      display: none;

     }

     .brand{
      display: none;
     }
  } */

  @media (max-width: 450px){
    /* display: none; */
    display: grid;
    position: fixed;
    margin-bottom: 20px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    
    top: 0;
    left: 0;
    
    .contacts{
    flex-direction: row;
    height: max-content;
    padding: 0.5rem;
    

    &::-webkit-scrollbar {
      
      width: 0.1rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.05rem;
        border-radius: 1rem;
      }
    }



    .contact{
      padding: 0.5rem;
    }


    }

    .brand{
      display: none;
    }

    .current-user{
      display: none;
    }


  }
`;
