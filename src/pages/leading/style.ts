import styled from 'styled-components';

export const MainSection = styled.section`
    display: flex;
    flex-direction: column;
    color: white;
    align-content: center;
    transition: 1s;
    margin: 20px 0px;
    ::-webkit-scrollbar{
        display: none;
      }

    @media(max-width:780px){
        overflow-y: scroll;
        height: 600px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 20px;
`;
export const ContainerText = styled.p`
    font-size: 20px;
    text-align: center;
    inline-size: 850px;
    background-color:rgba(0, 0, 0, 0.692);
    padding: 20px;
    border-radius: 10px;
    font-weight: bold;
`;
export const ContainerImg = styled.img`
    width: 600px;
    height: 500px;
`;

export const DualContainer = styled.section`
    display: flex;
    justify-content: center;
    margin: 100px 0px;
    transition: 2s;
    flex:1;
    background:url(https://uhdwallpapers.org/uploads/converted/18/10/03/antares-the-metropolis-of-the-future-image-1600x900_55864-mm-90.jpg);
    background-size:cover;

    @media(max-width:780px){
        background: none;
        flex-direction: column;

    }
`;

export const CoursesContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 7px;
    
    div{
        padding:10px;
        transition: 1s;
        margin: 10px;
        background-color: rgba(0, 0, 0, 0.692);
        border-radius: 10px;
    }

    @media(max-width:780px){
        background:url(https://uhdwallpapers.org/uploads/converted/18/10/03/antares-the-metropolis-of-the-future-image-1600x900_55864-mm-90.jpg);
        background-size: cover;
    }
`;
export const CoursesFrontContainer = styled.div<{pos?:string}>`
    @media(max-width:780px){
        opacity: ${props=>props.pos};
    }
`;
export const CoursesBackContainer = styled.div<{pos?:string}>`
    @media(max-width:780px){
         opacity: ${props=>props.pos};
    }   
`;
export const CoursesFullContainer = styled.div<{pos?:string}>`
    @media(max-width:780px){
        opacity: ${props=>props.pos};
    }
`;
export const CoursesTopic = styled.h1``;
export const CoursesText = styled.p`
    font-size: 15px;
    inline-size: 660px;

    @media(max-width:780px){
        inline-size: auto;
    }
`;

export const RegisterContainer = styled.div`
    display: flex;
    padding: 20px;
    margin: 50px 0px;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.692);
    border: 5px solid white;
    background-size: cover;
    align-items: center;
    border-radius: 10px;
`;
export const RegisterText = styled.h1`
    inline-size: 450px;

    @media(max-width:780px){
        inline-size: 250px;
    }
`;
export const RegisterInput = styled.input`
    width: 300px;
    height: 30px;
    border: 2px solid white;
    outline: none;
    border-radius: 8px;
    background-color:black;
    color: white;
`;
export const RegisterButton = styled.button`
    width: 250px;
    cursor: pointer;
    height: 50px;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    border: 3px solid white;
    background-color: black;
    outline: none;
    margin: 50px 0px;
`;