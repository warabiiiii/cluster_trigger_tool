import { Container } from "@mui/material";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/system";
import EditForm from "./editForm";
import Header from "./Header";

const Wrapper = styled("div")`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${grey["50"]};
`;

const TriggerTool = (): JSX.Element => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <EditForm />
      </Container>
    </Wrapper>
  );
};

export default TriggerTool;
