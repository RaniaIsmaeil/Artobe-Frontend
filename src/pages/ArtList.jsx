import styled from "styled-components";
import Announcement from "../components/Announcement";
import Drawings from "../components/Drawings";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import { mobile } from "../responsive";

const Container = styled.div
`


`;

const Title = styled.h1
`
    margin: 20px;

`;

const FilterContainer = styled.div
`
    display: flex;
    justify-content: space-between;

`;

const Filter = styled.div
`
    margin: 20px;
    ${mobile({width:"0px 20px", display: "flex", flexDirection: "column"})}


`;

const FilterText = styled.span
`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight:"0px"})}

    

`;

const Select = styled.select
`
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin:"10px 0px"})}


`;

const Option = styled.option
`


`;

const ArtList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>Portraits</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Arts:</FilterText>
                    <Select>
                        <Option disabled selected>
                            Type
                        </Option>
                        <Option>Portraits</Option>
                        <Option>Posters</Option>
                        <Option>Logos</Option>
                        <Option>Canvas</Option>
                        {/* <Option>Yellow</Option>
                        <Option>Green</Option> */}
                    </Select>

                    <Select>
                        <Option disabled selected>
                            Color
                        </Option>
                        <Option>Colorful</Option>
                        <Option>Black and white</Option>
                        {/* <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option> */}
                    </Select>
                </Filter>
                
                <Filter>
                    <FilterText>Sort Arts:</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Drawings/>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}

export default ArtList
