import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { ProductList } from "./styles";

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&"
          alt="Tennis baum"
          width="100%"
        />
        <strong>Tênis Pampa</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&"
          alt="Tennis baum"
          width="100%"
        />
        <strong>Tênis Pampa com titulo bem grandao que vai quebrar</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&"
          alt="Tennis baum"
          width="100%"
        />
        <strong>Tênis Pampa</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&"
          alt="Tennis baum"
          width="100%"
        />
        <strong>Tênis Pampa</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&"
          alt="Tennis baum"
          width="100%"
        />
        <strong>Tênis Pampa</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
