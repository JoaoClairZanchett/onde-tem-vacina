import React from 'react';
import Chart from "react-google-charts";
import Modal from 'react-modal';
import DetalhesModal from '../DetalhesModal';
import TemVacinaModal from '../TemVacinaModal';
import { Container, Header, Body, DetailsBody, DetailsContainer, Button, NomeVacina, Circulo, Footer, ChartColumn, VacinesInfo, Badge } from './styles';

const { useState } = React;

const PostoCard : React.FC = () => { 
   
    const [selectChart, setSelectChart] = useState([
        ["Element", "Vacinados", { role: "style" }],
        ["Janeiro", 8.94, "color: #B4D4EE"], // RGB value
        ["Fevereiro", 10.49, "color: #B4D4EE"], // English color name
        ["Março", 19.3, "color: #B4D4EE"],
        ["Abril", 21.45, "color: #B4D4EE"] // CSS-style declaration
      ]
    );

    const [openedCard, setOpenedCard] = useState(false);
    const [temVacinaModalIsOpen,setTemVacinaIsOpen] = useState(false);
    const [detalhesModalIsOpen,setDetalhesIsOpen] = useState(false);

    function toggleState() {
        setOpenedCard(!openedCard);
    }

    function openTemVacinaModal() {
        setTemVacinaIsOpen(true);
    }

    function closeTemVacinaModal(){
        setTemVacinaIsOpen(false);
    }

    function openDetalhesModal() {
        setDetalhesIsOpen(true);
    }

    function closeDetalhesModal(){
        setDetalhesIsOpen(false);
    }

    function temVacina(){
        closeTemVacinaModal();
        openDetalhesModal();
    }
    
    return (
    <Container >
        <Header onClick={() => {
            toggleState();
        }}>
            <span>
                CMS Heitor Beltrão
            </span>
            <VacinesInfo>
                <span>
                    50 pessoas confirmaram que o posto possui vacina
                </span>
                <Badge>
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.90348 4.88875L7.53515 6.44912C7.62596 6.5358 7.62596 6.67842 7.53515 6.76511L7.20413 7.0811C7.11332 7.16778 6.96392 7.16778 6.87311 7.0811L5.24143 5.52072L3.91441 6.78748L5.54902 8.34785C5.63983 8.43454 5.63983 8.57715 5.54902 8.66384L5.218 8.97983C5.12718 9.06651 4.97779 9.06651 4.88697 8.97983L3.25237 7.41666L2.47901 8.1549C1.97222 8.63867 1.72908 9.3042 1.80524 9.98372L2.01323 11.7622L0.0681086 13.619C-0.0227029 13.7057 -0.0227029 13.8483 0.0681086 13.935C0.15892 14.0217 0.308319 14.0217 0.399131 13.935L2.67235 12.397L4.53545 12.5955C5.23557 12.6682 5.93863 12.4445 6.45127 11.9524L11.7799 6.86578L7.80466 3.07111L5.90348 4.88875ZM14.9319 2.27974L12.6118 0.0650155C12.521 -0.0216718 12.3716 -0.0216718 12.2808 0.0650155L11.9498 0.381005C11.8589 0.467692 11.8589 0.610307 11.9498 0.696994L12.7788 1.48837L11.4518 2.75512L9.79372 1.17238L9.29572 0.696994C9.20491 0.610307 9.05551 0.610307 8.9647 0.696994L7.97163 1.64496C7.88082 1.73165 7.88082 1.87426 7.97163 1.96095L8.46963 2.43633L12.4448 6.23659L12.9428 6.71198C13.0336 6.79866 13.183 6.79866 13.2739 6.71198L14.2669 5.76121C14.3577 5.67452 14.3577 5.53191 14.2669 5.44522L12.1138 3.38989L13.4408 2.12314L14.2698 2.91451C14.3607 3.0012 14.5101 3.0012 14.6009 2.91451L14.9319 2.59852C15.0227 2.50904 15.0227 2.36922 14.9319 2.27974Z" fill="white"/>
                </svg>
                </Badge>
            </VacinesInfo>
        </Header>
        {!openedCard ? 
            <Body>
                <span>Rua Anita Garibaldi - Bairro Petropoles</span> <br/>
                <span>Rio de Janeiro - RJ - 56321-258</span>
            </Body> : 
            <DetailsContainer>
                <DetailsBody>
                    <Body>
                    <span>Rua Anita Garibaldi - Bairro Petropoles</span> <br/>
                    <span>Rio de Janeiro - RJ - 56321-258</span>

                    <NomeVacina>
                        <Circulo color='#85B7BD'>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.72278 4.09786L6.02812 5.4058C6.10077 5.47846 6.10077 5.59801 6.02812 5.67067L5.7633 5.93554C5.69066 6.0082 5.57114 6.0082 5.49849 5.93554L4.19315 4.6276L3.13153 5.68942L4.43921 6.99736C4.51186 7.07003 4.51186 7.18957 4.43921 7.26223L4.1744 7.5271C4.10175 7.59977 3.98223 7.59977 3.90958 7.5271L2.60189 6.21682L1.9832 6.83563C1.57778 7.24114 1.38326 7.799 1.4442 8.36859L1.61058 9.85936L0.0544869 11.4158C-0.0181623 11.4884 -0.0181623 11.608 0.0544869 11.6806L0.319305 11.9455C0.391954 12.0182 0.511473 12.0182 0.584123 11.9455L2.13788 10.3914L3.62836 10.5579C4.18846 10.6188 4.7509 10.4313 5.16102 10.0188L9.42389 5.75505L6.24373 2.57428L4.72278 4.09786ZM11.9455 1.91093L10.0894 0.0544975C10.0168 -0.0181658 9.89728 -0.0181658 9.82463 0.0544975L9.55981 0.319367C9.48716 0.39203 9.48716 0.511573 9.55981 0.584237L10.223 1.24758L9.16141 2.30941L7.83498 0.982713L7.43658 0.584237C7.36393 0.511573 7.24441 0.511573 7.17176 0.584237L6.37731 1.37885C6.30466 1.45151 6.30466 1.57105 6.37731 1.64372L6.77571 2.04219L9.95586 5.22766L10.3543 5.62614C10.4269 5.6988 10.5464 5.6988 10.6191 5.62614L11.4135 4.82918C11.4862 4.75652 11.4862 4.63698 11.4135 4.56431L9.69105 2.84149L10.7527 1.77967L11.4159 2.44301C11.4885 2.51568 11.608 2.51568 11.6807 2.44301L11.9455 2.17814C12.0182 2.10314 12.0182 1.98594 11.9455 1.91093Z" fill="white"/>
                            </svg>
                        </Circulo>

                        <span>
                            CORONAVAC - Butantan
                        </span>
                    </NomeVacina>
            
                    </Body>
                    <ChartColumn>

                        <span>
                            2.500 pessoas vacinadas nesse local
                        </span>
                        <Chart
                            chartType="ColumnChart"
                            width="630px"
                            height="250px"
                            data={selectChart}
                        />
                    </ChartColumn>

                </DetailsBody>

            
                <Footer>
                    <Button onClick={openTemVacinaModal}>
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.14279 4.09391L5.28783 5.241C5.35155 5.30473 5.35155 5.40957 5.28783 5.4733L5.05553 5.7056C4.9918 5.76933 4.88696 5.76933 4.82323 5.7056L3.6782 4.55851L2.74696 5.48975L3.89405 6.63684C3.95778 6.70057 3.95778 6.80541 3.89405 6.86913L3.66175 7.10143C3.59802 7.16516 3.49318 7.16516 3.42946 7.10143L2.28236 5.95228L1.73965 6.49499C1.38401 6.85063 1.21339 7.3399 1.26684 7.83944L1.41279 9.14687L0.0477955 10.5119C-0.0159318 10.5756 -0.0159318 10.6804 0.0477955 10.7442C0.111523 10.8079 0.216365 10.8079 0.280092 10.7442L1.87533 9.61352L3.18277 9.75948C3.67409 9.81293 4.16746 9.64847 4.52721 9.28666L8.26657 5.54731L5.47695 2.75769L4.14279 4.09391ZM10.4785 2.17593L8.85039 0.547795C8.78666 0.484068 8.68182 0.484068 8.6181 0.547795L8.3858 0.780092C8.32207 0.843819 8.32207 0.948661 8.3858 1.01239L8.96757 1.59416L8.03633 2.5254L6.87279 1.36186L6.52331 1.01239C6.45959 0.948661 6.35475 0.948661 6.29102 1.01239L5.59413 1.70928C5.5304 1.773 5.5304 1.87785 5.59413 1.94157L5.9436 2.29105L8.73321 5.08477L9.08269 5.43424C9.14641 5.49797 9.25126 5.49797 9.31498 5.43424L10.0119 4.7353C10.0756 4.67157 10.0756 4.56673 10.0119 4.503L8.50092 2.99205L9.43216 2.06081L10.0139 2.64257C10.0777 2.7063 10.1825 2.7063 10.2462 2.64257L10.4785 2.41028C10.5422 2.3445 10.5422 2.24171 10.4785 2.17593Z" fill="white"/>
                        </svg>

                        Tem Vacina ?
                    </Button>
                </Footer>
            </DetailsContainer>
        }

        <Modal
            isOpen={temVacinaModalIsOpen}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.25)'
                },
                content: {
                    top: '30%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '10px',
                }
            }}
            onRequestClose={closeTemVacinaModal}
            contentLabel="Example Modal"
            >

            <TemVacinaModal temVacina={() => temVacina()} naoTemVacina={() => closeTemVacinaModal()}/>
        </Modal>

        <Modal
            isOpen={detalhesModalIsOpen}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.25)'
                },
                content: {
                    top: '30%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '10px',
                }
            }}
            onRequestClose={closeDetalhesModal}
            >

            <DetalhesModal temVacina={() => temVacina()} naoTemVacina={() => closeTemVacinaModal()} />

        </Modal>
        
    </Container>
    );

}

export default PostoCard;