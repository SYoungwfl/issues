import axios from "axios";
import React from "react";
import Cat from "./ad_cat.jpg";
import { useNavigate } from "react-router-dom";
import { headerTitle, issueList } from "../headers";
import myStore from "../../router/store";
import Styled from "styled-components";

const ListPage = () => {
  const { gitIssue, setGitIssue } = React.useContext(myStore);
  let navigate = useNavigate();

  React.useEffect(() => {    
    try {
      
      axios.get(
        "https://api.github.com/repos/angular/angular-cli/issues",
        {
          params: {
            state: 'open',
            sort: 'comments',
            direction: 'desc'
          },
          headers: {
            Authorization: "token " + process.env.REACT_APP_API_KEY,
            "Content-Type": "application/json",
          },
        }
      ).then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          if (i === 4) {
            let AD = {};
            AD.id = "ad";
            setGitIssue((res) => [...res, AD]);
          }

          let newData = {
            id: i,
            number: response.data[i].number,
            title: response.data[i].title,
            login: response.data[i].user.login,
            comments: response.data[i].comments,
            created_at: response.data[i].created_at.substr(0, 10),
            avatar_url: response.data[i].user.avatar_url,
            body: response.data[i].body,
          };

          setGitIssue((res) => [...res, newData]);
        }
      });
    } catch (error) {
      console.error(error);
    }
  }, [setGitIssue]);

  function handleClick(number) {
    navigate("/detail/" + number);
  }

  return (
    <Container>
      <IssueContainer>
        {headerTitle()}
        {gitIssue.map((gitIssue) => {
          if (gitIssue.id === "ad") {
            return (
              <div key={gitIssue.id +"ad"}>
                <Image href="https://www.wanted.co.kr/">
                  <img src={Cat} alt="ad_cat"/>
                </Image>
              </div>
            );
          } else {
            return (
              <div key={gitIssue.id + "issue"}>
                <IssueButton onClick={() => handleClick(gitIssue.number)}>
                  {issueList(gitIssue)}
                </IssueButton>
              </div>
            );
          }
        })}
      </IssueContainer>
    </Container>
  );
};

export default ListPage;

const Container = Styled.div`
    display: flex;
    justify-content: center;
`;

const IssueContainer = Styled.div`
    width: 900px;
`;

const Image = Styled.a`
    img {
        width: 900px;
        margin: 2px;
    }
`;

const IssueButton = Styled.button`
    width: 900px;
    background-color: #e8eaea;
    margin: 2px;
`;
