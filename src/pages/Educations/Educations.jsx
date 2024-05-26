import styled from "styled-components";
import BasicEducationComponent from "../../components/EducationComponents/BasicEducationComponent.jsx";
import EducationsContainer from "../../components/EducationComponents/EducationsContainer.jsx";

const EducationMainContent = styled.div`
  max-width: 100vw;
  margin: 0 5%;
  padding-top: 100px;
`;

const Educations = () => {
  return (
    <EducationMainContent>
      <BasicEducationComponent />
      <EducationsContainer />
    </EducationMainContent>
  );
};

export default Educations;
