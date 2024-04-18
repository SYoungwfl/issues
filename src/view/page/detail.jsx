import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { headerTitle, issueList } from "../headers";
import myStore from "../../router/store";
import Styled from "styled-components";

const Detail = () => {
  const { IssueNumber } = useParams();
  const { gitIssue , setGitIssue} = React.useContext(myStore);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  for (let issue of gitIssue) {
    if (issue.number == IssueNumber) {
      return (
        <DetailContainer>
          <ContentWrapper>
            {headerTitle()}
            <HeaderWrapper>
              <AvatarContainer>
                <AvatarImage src={issue.avatar_url} alt={issue.login} />
              </AvatarContainer>
              <MainBlockContainer>{issueList(issue)}</MainBlockContainer>
            </HeaderWrapper>
            <HorizontalLine />
            <ReactMarkdown>{issue.body}</ReactMarkdown>
          </ContentWrapper>
        </DetailContainer>
      );
    }
  }
};

export default Detail;

const DetailContainer = Styled.div`
    display: flex;
    justify-content: center;
`;

const ContentWrapper = Styled.div`
    width: 900px;
`;

const HeaderWrapper = Styled.div`
    display: flex;
    justifyContent: flex-start;
`;

const AvatarContainer = Styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
`;

const AvatarImage = Styled.img`
    width: 125.97px;
    height: 125.97px;
`;

const MainBlockContainer = Styled.div`
    flex: 1 0 auto;
    width: 764.03px;
`;

const HorizontalLine = Styled.hr`
    border: solid;
`;
