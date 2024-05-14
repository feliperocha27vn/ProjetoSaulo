import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../styles.css";
import { Grid, Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {
  faBoxesStacked,
  faCity,
  faDolly,
  faHandHoldingDollar,
  faList,
  faPeopleGroup,
  faPhone,
  faPrint,
  faStore,
  faTruck,
  faTruckRampBox,
} from "@fortawesome/free-solid-svg-icons";

const icones = [
  { icone: faStore, rota: '/CadastroFornecedor', rotulo: 'Cadastro de Fornecedores' },
  { icone: faTruck, rota: '/CadastroVendedores', rotulo: 'Cadastro de Vendedores' },
  { icone: faPeopleGroup, rota: '/CadastroClientes', rotulo: 'Cadastro de Clientes' },
  { icone: faBoxesStacked, rota: '/CadastroVendas', rotulo: 'Cadastro de Vendas' },
  { icone: faCity, rota: '/CadastroCidades', rotulo: 'Cadastro de Cidades' },
  { icone: faDolly, rota: '/CadastroProdutos', rotulo: 'Cadastro de Produtos' },
  { icone: faList, rota: '/CadastroCategorias', rotulo: 'Cadastro de Categorias' },
  { icone: faPhone, rota: '/CadastroTelefones', rotulo: 'Cadastro de Telefones' },
  { icone: faHandHoldingDollar, rota: '/CadastroContas', rotulo: 'Cadastro de Contas' },
  { icone: faTruckRampBox, rota: '/CadastroMovimentacao', rotulo: 'Cadastro de Movimentação' },
  { icone: faPrint, rota: '/Relatorios', rotulo: 'Relatórios' },
];

const Slider = () => {
  return (
    <Swiper
      navigation={true}
      loop={true}
      slidesPerView={4}
      grid={{
        rows: 1,
      }}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Grid, Pagination, Navigation]}
      className="mySwiper h-28"
    >
      {icones.map((item, index) => (
        <SwiperSlide key={index} className="bg-emerald-700">
          <Link to={item.rota} className="flex flex-col gap-0.5">
            <FontAwesomeIcon icon={item.icone} className="h-20" />
            <label className="text-white font-bold">{item.rotulo}</label>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
