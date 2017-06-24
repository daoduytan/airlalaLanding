import styled from 'styled-components';

export const Section = styled.div`  
    padding: 80px 0;

    @media (max-width: 767px) {
        padding: 50px 0;
    }
`
export const Heading = styled.div`  
   
    h2 {
        position: relative;
        font-size: 45px;
        font-weight: 700;
        line-height: 60px;
        display: block;
    }

    @media (max-width: 1199px) {
        h2 {
            font-size: 35px;
            line-height: 50px;
        }
	}

    @media (max-width: 991px) {
        h2 {
            font-size: 30px;
            line-height: 40px;
        }
	}
`

export const H4 = styled.h4`  
    font-size: 30px;
    font-weight: 700;
`

export const Img = styled.div`
    box-shadow: ${props => props.shadow ? '0 50px 80px 0 rgba(0,0,0,.2)' : ''};

    img {
        display: block;
        width: 100%;
    }
`

export const TextBuyer = styled.div`
    padding-left: 60px;
    margin-top: 50px;

    ul {
        list-style: none;
        padding: 0 ;
        margin: 30px 0;
        font-size: 18px;
        line-height: 30px;

        li {
            padding-left: 30px;
            margin-bottom: 15px;
            position: relative;

            &:before {
                content: "";
                display: block;
                height: 10px; width: 10px;
                border-radius: 50%;
                background: #11c6c8;
                position: absolute;
                top: 12px; left: 0;
            }
        }
    }

    @media (max-width: 991px) {
        padding: 0 30px;
        margin: 50px 0 0;
    }
    
`

export const TextArtisan = styled.div`
    padding-right: 60px;
    margin-top: 130px;

    ul {
        list-style: none;
        padding: 0 ;
        margin: 30px 0;
        font-size: 18px;
        line-height: 30px;

        li {
            padding-left: 30px;
            margin-bottom: 15px;
            position: relative;

            &:before {
                content: "";
                display: block;
                height: 10px; width: 10px;
                border-radius: 50%;
                background: #11c6c8;
                position: absolute;
                top: 12px; left: 0;
            }
        }
    }

    @media (max-width: 991px) {
        padding: 0 30px;
        margin: 50px 0 0;
    }
    
`

export const Button  = styled.button`
    display: inline-block;
    margin: 50px 0;
    height: 50px;
    color: #fff;
    padding: 0 30px;
    font-size: 16px;
    font-weight: 700;
    background: #fd6f1a;
    border: none;
    border-radius: 3px;
`

