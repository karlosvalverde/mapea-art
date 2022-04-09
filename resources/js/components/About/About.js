import React from "react";

export default function About() {
    return (
        <>
            {/* Button trigger modal */}
            <h4 className="fixed-bottom m-5 pb-3">
                <a className="is-header is-sticker has-pointer syne-b" data-bs-toggle="modal" data-bs-target="#aboutModal">
                    Sobre o projeto
                </a>
            </h4>


            {/* Modal */}
            <div className="modal fade" id="aboutModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content bg-secondary">
                        <div className="modal-header border-0">
                            <h5 className="modal-title syne-b" id="exampleModalLongTitle">SOBRE O PROJETO</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>
                                O Mapeamento de pesquisadores em Artes é uma proposta vinculada ao projeto <a className="text-dark syne-md" href="https://www.circulaconhecimento.com/" target="_blank">Circulação de conhecimento em Artes</a>, desenvolvido pela pesquisadora Carolina Bonfim (Université Libre de Bruxelles/Centre de recherche CiASp) e conta com o apoio da Coordenação de Aperfeiçoamento de Pessoal de Nível Superior (CAPES/Proposta de Novação).
                            </p>
                            <h5 className="syne-b p-5">Qual é o objetivo do mapeamento?</h5>
                            <p>
                                O Mapeamento de pesquisadores em Artes é um projeto que, em linhas gerais, tem como propósito favorecer a conexão entre pessoas, fomentar possíveis parcerias e possibilitar intercâmbios de conhecimentos práticos, artísticos e teóricos. Para tal, criamos uma base de dados online onde é possível encontrar docentes, discentes e pesquisadores em Artes de todas as regiões do Brasil.
                            </p>
                            <p>
                                O mapeamento teve uma primeira chamada no segundo semestre de 2021 e o lançamento do site ocorreu em fevereiro de 2022. Em 2022 haverá uma nova chamada (data a definir) e a sua divulgação será enviada diretamente aos programas de pós-graduação.                            </p>
                            <p className="is-sticker m-5">
                                Qualquer dúvida ou necessitando de mais informações, estamos à disposição através do e-mail: <span className="syne-md">circula.conhecimento@gmail.com</span>
                            </p>
                        </div>
                        <div className="modal-footer border-0">
                            <p className="w-100 syne-b">Com o apoio de:</p>
                            <div className="row w-100 align-items-center">
                                <div className="col-4">
                                    <img src="https://circulaconhecimento.com/wp-content/uploads/2021/05/1_capes.svg" alt="CAPES"/>
                                </div>
                                <div className="col-4">
                                    <img src="https://circulaconhecimento.com/wp-content/uploads/2021/05/3_ciasp-1.svg" alt="CIASP"/>
                                </div>
                                <div className="col-4">
                                    <img src="https://circulaconhecimento.com/wp-content/uploads/2022/04/2_ulb.svg" alt="ULB"/>
                                </div>
                            </div>
                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
