import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Accordion, Button, Card, Dropdown, Table } from "react-bootstrap";

import "./styles.css";
import revenues_symbol from "../../assets/images/revenues_symbol.svg";
import { useState } from "react";
import { Menu, X } from "react-feather";

export function MainDashboard() {
  const [isOpen, setIsOpen] = useState(false); // usado para abrir/ fechar sidebar
  const [startDate, setStartDate] = useState(""); // usada no date
  const [endDate, setEndDate] = useState(""); // usado no date
  const [showMenu, setShowMenu] = useState(false);
  const [dropdownText, setDropdownText] = useState("Selecione a data"); //usado para mostrar o date selecionado

  const handleApply = () => {
    // Aqui você pode adicionar a lógica para lidar com a aplicação do intervalo de datas
    console.log("Data inicial:", startDate);
    console.log("Data final:", endDate);
    //setDropdownText(`${startDate} - ${endDate}`);
    setShowMenu(false);
  };

  const data = [
    {
      id: 1,
      data: "01/01/2024",
      entrada: "150,00",
      saida: "0,00",
      historico: "Fulano de tal",
      finalidade: "Dízimos",
      bancoCaixa: "Caixa",
    },
    {
      id: 2,
      data: "02/01/2024",
      entrada: "100,00",
      saida: "50,00",
      historico: "Ciclano",
      finalidade: "Despesas gerais",
      bancoCaixa: "Banco",
    },
    {
      id: 3,
      data: "03/01/2024",
      entrada: "200,00",
      saida: "0,00",
      historico: "Beltrano",
      finalidade: "Investimentos",
      bancoCaixa: "Caixa",
    },
    {
      id: 4,
      data: "04/01/2024",
      entrada: "300,00",
      saida: "100,00",
      historico: "Lorem Ipsum",
      finalidade: "Compras",
      bancoCaixa: "Banco",
    },
    {
      id: 5,
      data: "05/01/2024",
      entrada: "50,00",
      saida: "0,00",
      historico: "Sit Amet",
      finalidade: "Vendas",
      bancoCaixa: "Caixa",
    },
    {
      id: 6,
      data: "06/01/2024",
      entrada: "180,00",
      saida: "20,00",
      historico: "Consectetur",
      finalidade: "Pagamentos",
      bancoCaixa: "Banco",
    },
    {
      id: 7,
      data: "07/01/2024",
      entrada: "250,00",
      saida: "0,00",
      historico: "Adipiscing",
      finalidade: "Recebimentos",
      bancoCaixa: "Caixa",
    },
    {
      id: 8,
      data: "08/01/2024",
      entrada: "90,00",
      saida: "30,00",
      historico: "Elit",
      finalidade: "Doações",
      bancoCaixa: "Banco",
    },
    {
      id: 9,
      data: "09/01/2024",
      entrada: "400,00",
      saida: "200,00",
      historico: "Sed",
      finalidade: "Empréstimos",
      bancoCaixa: "Caixa",
    },
    {
      id: 10,
      data: "10/01/2024",
      entrada: "120,00",
      saida: "0,00",
      historico: "Ametista papapapapapapapapapapapapapapapapapapapap",
      finalidade: "Investimentos",
      bancoCaixa: "Banco",
    },
  ];

  return (
    <div className="grid-container">
      <div className="side-bar-container">
        <aside className={`sidebar ${isOpen ? "open" : ""}`}>
          <div className="inner">
            <header>
              <button
                type="button"
                className="sidebar-burger"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="icon">{isOpen ? <X /> : <Menu />}</span>
              </button>
            </header>
            <nav>
              <span> Botao 1</span>
            </nav>
          </div>
        </aside>
      </div>
      <div className="cards-container">
        <div className="card-revenues">
          <div className="card-header"> Total entradas R$ </div>
          <div className="card-body">
            <h1> 150,00 </h1>
          </div>
          <div className="card-footer">
            <p> Mais informações</p>
          </div>
        </div>
        <div className="card-expenses">
          <div className="card-header"> Total saídas R$ </div>
          <div className="card-body">
            <h1> 0,00 </h1>
          </div>
          <div className="card-footer">
            <p> Mais informações</p>
          </div>
        </div>
        <div className="card-previous-balance">
          <div className="card-header"> Saldo anterior R$ </div>
          <div className="card-body">
            <h1> 150,00 </h1>
          </div>
          <div className="card-footer">
            <p> Mais informações</p>
          </div>
        </div>
        <div className="card-current-balance">
          <div className="card-header"> Saldo atual R$ </div>
          <div className="card-body">
            <h1> 300,00 </h1>
          </div>
          <div className="card-footer">
            <p> Mais informações</p>
          </div>
        </div>
      </div>
      <div className="header-container">
        <div className="text-title">
          <h2> Movimento de caixa</h2>
          <p> 01-jan-2024 - 31-jan-2024</p>
        </div>
        <div className="button-container">
          <Button
            className="btn-add-transaction"
            variant="success"
            onClick={console.log("sucess")}
          >
            {" "}
            + Novo Lançamento{" "}
          </Button>
          <Button className="btn-two" onClick={console.log("sucess")}>
            {" "}
            button 2{" "}
          </Button>
          <Button className="btn-three" onClick={console.log("sucess")}>
            {" "}
            button 3{" "}
          </Button>
        </div>
        <div className="date-selector-and-search-bar">
          <Dropdown  show={showMenu} onToggle={(isOpen) => setShowMenu(isOpen)}>
            <Dropdown.Toggle variant="success" id="dropdown-date">
              {dropdownText}
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu">
              <div className="dropdown-item">
                <p> De: </p>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div className="dropdown-item">
                <p> até :</p>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
              <Button variant="success" className="dropdown-item" onClick={handleApply}>
                Aplicar
              </Button>
            </Dropdown.Menu>
          </Dropdown>
          <input type="text" placeholder="Pesquisar..." />
        </div>
      </div>
      <div className="table-container">
        <Table className="table-main" striped hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Data</th>
              <th>Entrada - R$</th>
              <th>Saída - R$</th>
              <th>Histórico</th>
              <th>Finalidade</th>
              <th>Banco/Caixa</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.data}</td>
                <td>{item.entrada}</td>
                <td>{item.saida}</td>
                <td>{item.historico}</td>
                <td>{item.finalidade}</td>
                <td>{item.bancoCaixa}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
