import * as S from './style'
import {useState } from 'react';
import { Header } from '../../components/header';
import Footer from '../../components/footer';

const LeadingPage = ()=>{

    const [opacity,setopacity] = useState("20%");

    const handleOpacity = (prop:React.UIEvent<HTMLDivElement>)=>{
        const scrollMobile = prop.currentTarget.scrollTop;
        scrollMobile > 250? setopacity("100%") : setopacity("20%");

    }

    return(
        <>
           <Header/>
           <S.MainSection onScroll={handleOpacity}>
                <S.Container>
                    <S.ContainerText>
                        A WEB-ACADEMIC é uma plataforma que disponibiliza acesso gratuito à todos. Através do nosso sistema é possível que pessoas de baixa renda consigam obter acesso à educação de uma forma totalmente democrática e eficaz.
                    </S.ContainerText>
                </S.Container>

                <S.DualContainer>
                <S.CoursesContainer>
                    
                    <S.CoursesFrontContainer pos = {opacity}>
                        <S.CoursesTopic>
                            Desenvolvedor Front-End:
                            <S.CoursesText>
                                O desenvolvedor Front-End desempenha o papel de implementar visibilidade e interação para o usuário durante o processo de desenvolvimento do sistema. Ele irá lidar com diversas ferramentas que irão possibilitar a realização deste feito.
                            </S.CoursesText>
                        </S.CoursesTopic>
                    </S.CoursesFrontContainer>

                    <S.CoursesBackContainer pos = {opacity}>
                        <S.CoursesTopic>
                            Desenvovedor Back-End:
                            <S.CoursesText>
                                O desenvolvedor Back-End desempenha o papel de implementar o planejamento, a construção, a implementação e a manutenção da estrutura tecnológica que constituem a base de um sistema.
                            </S.CoursesText>
                        </S.CoursesTopic>
                    </S.CoursesBackContainer>

                    <S.CoursesFullContainer pos = {opacity}> 
                        <S.CoursesTopic>
                            Desenvolvedor FullStack:
                            <S.CoursesText>
                                  O desenvolvedor FullStack desempenha ambos os papeis. Ele é capaz de realizar as mais variadas tarefas durante o desenvolvimento do sistema. Atualmente, este é o perfil mais requisitado pelas empresas.
                            </S.CoursesText>
                        </S.CoursesTopic>
                    </S.CoursesFullContainer>

                </S.CoursesContainer>

                <S.RegisterContainer>
                    <S.RegisterText>
                        Registre-se agora e tenha acesso ao nosso conteúdo totalmente de graça.
                    </S.RegisterText>
                    <h1>Nome</h1>
                    <S.RegisterInput/>
                    <h1>Email</h1>
                    <S.RegisterInput/>
                    <S.RegisterButton>Cadastrar</S.RegisterButton>
                </S.RegisterContainer>
                </S.DualContainer>
           </S.MainSection>
           <Footer/>
        </>
    )
}
export default LeadingPage;