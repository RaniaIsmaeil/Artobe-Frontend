import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive';


const Container = styled.div`



`;
const Wrapper = styled.div`

    padding: 20px;
    ${mobile({padding: "10px"})}


`;
const Title = styled.h1`

    font-weight: 300;
    text-align: center;

`;
const Top = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

`;
const TopButton = styled.button`

   padding: 10px;
   font-weight: 600;
   cursor: pointer;
   border: ${props=>props.type === "filled" && "none"};
   background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
   color: ${props=>props.type === "filled" && "white"};

`;
const TopTexts = styled.div`

${mobile({display: "none"})}


`;
const TopText = styled.span`

    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;

`;
const Bottom = styled.div`

    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}


`;
const Info = styled.div`

    flex: 3;

`;
const Piece = styled.div`

    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}


`;
const ArtDetail = styled.div`

    flex: 2;
    display: flex;

`;
const Image = styled.img`

    width: 200px;

`;
const Details = styled.div`

    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`;
const ArtName = styled.span`



`;
const ArtId = styled.span`



`;
const ArtColor = styled.div`

    width: 20px;
    height: 20px;
    border-radius: 50%50%;
    background-color: ${props=>props.color};


`;
const ArtSize = styled.span`



`;
const PriceDetail = styled.div`

    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;
const ArtAmountContainer = styled.div`

    display: flex;
    align-items: center;
    margin-bottom: 20px;

`;
const ArtAmount = styled.div`

    font-size: 24px;
    margin: 5px;
    ${mobile({margin: "5px 15px"})}


`;
const ArtPrice= styled.div`

    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom: "20px"})}


`;
const Hr = styled.hr`

    background-color: #eee;
    border: none;
    height: 2px;

`
const Summary = styled.div`

    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;
const SummaryTitle = styled.h1`

    font-weight: 200;

`;
const SummaryItem= styled.div`

    margin: 30px 0px;
    font-weight: 550;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=> props.type === "total" && "bolder" };
    font-size: ${props=> props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span`



`;
const SummaryItemPrice = styled.span`



`;
const Button = styled.button`

    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;

`;

const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE ORDERING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Piece>
                            <ArtDetail>
                            {/* https://cdn.dribbble.com/users/3395116/screenshots/8070298/media/5c33f02933d2c44c37ee521c4807676e.png?compress=1&resize=400x300 */}
                                <Image src="https://i5.walmartimages.com/asr/9a758017-9282-40b7-a238-12775bf65018.9498915fe0ae9de94ddeebe10876ce1d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"/>
                                <Details>
                                    <ArtName><b>Art: </b>PINK CANVA</ArtName>
                                    <ArtId><b>ID: </b>93813718293</ArtId>
                                    <ArtColor color="black"/>
                                    <ArtSize><b>Size: </b>24x20</ArtSize>
                                </Details>
                            </ArtDetail>
                            <PriceDetail>
                                <ArtAmountContainer>
                                    <Add/>
                                    <ArtAmount>2</ArtAmount>
                                    <Remove/>
                                </ArtAmountContainer>
                                <ArtPrice>$ 30</ArtPrice>
                            </PriceDetail>
                        </Piece>
                        <Hr/>
                        <Piece>
                            <ArtDetail>
                            {/* https://cdn.dribbble.com/users/3395116/screenshots/8070298/media/5c33f02933d2c44c37ee521c4807676e.png?compress=1&resize=400x300 */}
                                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUOS1pR5_k6-v73Xp89-z-xpG9veN9YznPNQ&usqp=CAU"/>
                                <Details>
                                    <ArtName><b>Art: </b>AFRO</ArtName>
                                    <ArtId><b>ID: </b>93813718293</ArtId>
                                    <ArtColor color="brown"/>
                                    <ArtSize><b>Size: </b>55x40</ArtSize>
                                </Details>
                            </ArtDetail>
                            <PriceDetail>
                                <ArtAmountContainer>
                                    <Add/>
                                    <ArtAmount>2</ArtAmount>
                                    <Remove/>
                                </ArtAmountContainer>
                                <ArtPrice>$ 30</ArtPrice>
                            </PriceDetail>
                        </Piece>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotla</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart
