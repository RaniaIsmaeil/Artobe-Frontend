import styled from "styled-components";
import { popularDrawings } from "../data";
import SingleDrawing from "./SingleDrawing";

const Container = styled.div
`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`;


const Drawings = () => {
    return (
        <Container>
            {popularDrawings.map(item=>(
                <SingleDrawing item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Drawings
