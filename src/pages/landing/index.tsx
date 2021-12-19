import * as S from './style'
import {useState } from 'react';
import { Header } from '../../components/header';
import Footer from '../../components/footer';

import Dev from '../../imgs/developer.png'

const LandingPage = ()=>{

    const [opacity,setopacity] = useState("10%");

    const handleOpacity = (prop:React.UIEvent<HTMLDivElement>)=>{
        const scrollMobile = prop.currentTarget.scrollTop;
        scrollMobile > 1900? setopacity("100%") : setopacity("10%");

    }

    return(
        <>
           <Header/>
           <S.MainSection onScroll={handleOpacity}>
                <S.Container>
                    <S.ContainerImg src = {Dev}/>                
                    <S.ContainerText>
                        A WEB-ACADEMIC é uma plataforma que disponibiliza acesso gratuito à todos. Através do nosso sistema, é possível que pessoas de baixa renda consigam obter acesso à educação tecnológica de uma forma totalmente democrática e eficaz.
                    </S.ContainerText>
                </S.Container>
                <S.MoreContainer>
                    <S.ContainerText>
                        * Como a WEB-ACADEMIC funciona?
                    </S.ContainerText>
                    <S.ContainerText>
                        Ao se cadastrar, você terá acesso gratuito a todos os nossos cursos de forma instântanea. Através do nosso sistema, você não precisará consumir sua internet para acessar nossa plataforma digital.
                    </S.ContainerText>
                    <S.ContainerText>
                        * Há certificado?
                    </S.ContainerText>
                    <S.ContainerText>
                        Sim! ao término de cada etapa você poderá emitir seu certificado para inseri-lo imediatamente ao seu currículo de forma prática e objetiva.
                    </S.ContainerText>
                    <S.ContainerText>
                        * Tudo isso de graça?
                    </S.ContainerText>
                    <S.ContainerText>
                        Sim! o nosso objetivo aqui é tornar o acesso a educação  prioridade. Como enfatizamos acima, você não precisará pagar absolutamente nada. Dada a situação atual do nosso país, visamos tornar o conhecimento uma constante na vida de todos.
                    </S.ContainerText>
                </S.MoreContainer>
                <S.DualContainer>
                    
                <S.CoursesContainer>
                    <S.CoursesText>
                        Nossos cursos:
                    </S.CoursesText>
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
export default LandingPage;