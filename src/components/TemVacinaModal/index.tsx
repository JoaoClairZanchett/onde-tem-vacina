import React from 'react';
import { ModalCard, ModalHeader, ModalTitle, ModalContent, ModalFooter, Buttons, OutlineButton } from './styles';

interface Props {
    temVacina: () => void;
    naoTemVacina: () => void;
  }

const TemVacinaModal : React.FC<Props> = ({temVacina, naoTemVacina}) => { 

    return (
        <ModalCard>
            <ModalHeader>
                <ModalTitle>
                    <span>
                        CMS Heitor Beltrão
                    </span>
                </ModalTitle>
                    <span>
                        x
                    </span>
            </ModalHeader>
            <ModalContent>
                <span>
                    Rua [nome da rua] - Bairro [nome do bairro] | Rio de Janeiro - RJ - 00000-000
                </span>
            </ModalContent>
            <ModalFooter>
                <span>
                    Tem vacina nete pornto hoje ?
                </span>
                <Buttons>
                <OutlineButton color='#FF6363' onClick={() => {naoTemVacina();}}>
                    <span>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.9319 2.3882L12.6118 0.0681086C12.521 -0.0227029 12.3716 -0.0227029 12.2808 0.0681086L11.9498 0.399131C11.8589 0.489942 11.8589 0.639342 11.9498 0.730153L12.7788 1.55917L11.4518 2.88619L9.29572 0.730153C9.20491 0.639342 9.05551 0.639342 8.9647 0.730153L7.97163 1.72322C7.88082 1.81403 7.88082 1.96343 7.97163 2.05424L12.9428 7.0313C13.0336 7.12211 13.183 7.12211 13.2738 7.0313L14.2669 6.0353C14.3577 5.94449 14.3577 5.79509 14.2669 5.70428L12.1138 3.55117L13.4408 2.22415L14.2698 3.05317C14.3607 3.14398 14.5101 3.14398 14.6009 3.05317L14.9319 2.72215C15.0227 2.62841 15.0227 2.48194 14.9319 2.3882ZM9.85238 9.11988L11.7799 7.19241L7.80466 3.21722L5.97436 5.05033C4.86171 3.88271 3.65167 2.61285 2.10294 0.987477C1.96039 0.837209 1.72289 0.830581 1.57262 0.973127L1.02819 1.48913C0.877952 1.63144 0.87136 1.86871 1.01387 2.01921L13.0369 14.6362C13.1794 14.7867 13.4167 14.7931 13.5672 14.6506L14.1116 14.1346C14.2616 13.9922 14.2682 13.755 14.1257 13.6045C12.381 11.7735 11.0301 10.3558 9.85238 9.11988ZM4.14219 6.88262L3.91441 7.11039L5.54902 8.745C5.63983 8.83581 5.63983 8.98521 5.54902 9.07602L5.218 9.40704C5.12718 9.49785 4.97778 9.49785 4.88697 9.40704L3.25237 7.76951L2.47901 8.54287C1.97222 9.04965 1.72908 9.74685 1.80524 10.4587L2.01323 12.3218L0.0681086 14.2669C-0.0227029 14.3577 -0.0227029 14.5071 0.0681086 14.5979C0.15892 14.6888 0.30832 14.6888 0.399131 14.5979L2.67235 12.9868L4.53545 13.1948C5.23557 13.2709 5.93863 13.0366 6.45127 12.521L8.02012 10.9521L4.14219 6.88262Z" fill="#FF6363"/>
                        </svg>
                        Não tem vacina
                    </span>
                </OutlineButton>
                <OutlineButton color='#34A866' onClick={() => {temVacina();}}>
                    <span>
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.90348 4.88875L7.53515 6.44912C7.62596 6.5358 7.62596 6.67842 7.53515 6.76511L7.20413 7.0811C7.11332 7.16778 6.96392 7.16778 6.87311 7.0811L5.24143 5.52072L3.91441 6.78748L5.54902 8.34785C5.63983 8.43454 5.63983 8.57715 5.54902 8.66384L5.218 8.97983C5.12718 9.06651 4.97779 9.06651 4.88697 8.97983L3.25237 7.41666L2.47901 8.1549C1.97222 8.63867 1.72908 9.3042 1.80524 9.98372L2.01323 11.7622L0.0681086 13.619C-0.0227029 13.7057 -0.0227029 13.8483 0.0681086 13.935C0.15892 14.0217 0.308319 14.0217 0.399131 13.935L2.67235 12.397L4.53545 12.5955C5.23557 12.6682 5.93863 12.4445 6.45127 11.9524L11.7799 6.86578L7.80466 3.07111L5.90348 4.88875ZM14.9319 2.27974L12.6118 0.0650155C12.521 -0.0216718 12.3716 -0.0216718 12.2808 0.0650155L11.9498 0.381005C11.8589 0.467692 11.8589 0.610307 11.9498 0.696994L12.7788 1.48837L11.4518 2.75512L9.79372 1.17238L9.29572 0.696994C9.20491 0.610307 9.05551 0.610307 8.9647 0.696994L7.97163 1.64496C7.88082 1.73165 7.88082 1.87426 7.97163 1.96095L8.46963 2.43633L12.4448 6.23659L12.9428 6.71198C13.0336 6.79866 13.183 6.79866 13.2739 6.71198L14.2669 5.76121C14.3577 5.67452 14.3577 5.53191 14.2669 5.44522L12.1138 3.38989L13.4408 2.12314L14.2698 2.91451C14.3607 3.0012 14.5101 3.0012 14.6009 2.91451L14.9319 2.59852C15.0227 2.50904 15.0227 2.36922 14.9319 2.27974Z" fill="#34A866"/>
                    </svg>
                        Tem vacina
                    </span>
                </OutlineButton>
                </Buttons>
            </ModalFooter>
        </ModalCard>
    );
}

export default TemVacinaModal;