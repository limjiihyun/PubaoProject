import styled from '@emotion/styled';

const ListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  border: 0;
  gap: 20px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  max-width: 1450px;
  margin: 0 auto !important;
  @media (max-width: 756px) {
    width: 90%;
  }
`;

const ListItem = styled.div`
  width: 330px;
  min-height: 400px;
  background: #ffffff;
  border: 1px solid black;
  margin-top: 5vh;
  padding: 20px;
  margin: 0 auto;
  position: relative;
  top: 55px;
  border-radius: 15px;
  /* box-shadow: 0px 15px 38px rgba(0, 0, 0, 0.3), 0px 15px 12px rgba(0, 0, 0, 0.1); */
  /* flex: 0 0 25%; */
  a {
    color: black;
    text-decoration: none;
    .title {
      font-weight: bold;
    }
  }
`;

export { ListDiv, ListItem };
