import styled from "styled-components";

const PaperWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 30px auto;
  width: ${props => props.width && props.width};
  padding: 20px;
  background-color: ${props => props.background && props.background};
`;

export default PaperWrapper;
