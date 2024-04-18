import Styled from "styled-components";

const headerTitle = () => {
  return <Title>Angular / Angular-cli</Title>;
};

const issueList = (Issues) => {
  return (
    <Card key={Issues.number}>
      <LeftColumn>
        <IssueInfoRow>
          <IssueNumber>
            #{Issues.number}&nbsp;
          </IssueNumber>
          <h3>{Issues.title}</h3>
        </IssueInfoRow>
        <UserInfoRow>
          <UserInfo>
            작성자: {Issues.login},
          </UserInfo>
          <UserInfo>
            작성일: {Issues.created_at}
          </UserInfo>
        </UserInfoRow>
      </LeftColumn>
      <CommentsContainer>
        <h4>코멘트: {Issues.comments}</h4>
      </CommentsContainer>
    </Card>
  );
};


export { headerTitle, issueList };

const Title = Styled.h1`
  display: flex;
  justify-content: center;
`;

const Card = Styled.div`
  display: flex;
`;

const LeftColumn = Styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
`;

const IssueInfoRow = Styled.div`
  display: flex;
  justify-content: flex-start;
`;

const IssueNumber = Styled.h3`
  color: blueviolet;
`;

const UserInfoRow = Styled.div`
  display: flex;
  justify-content: flex-start;
`;

const UserInfo = Styled.h4`
  margin-right: 5px;
`;

const CommentsContainer = Styled.div`
  display: flex;
  align-items: center;
`;
