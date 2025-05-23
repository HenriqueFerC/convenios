import React, { useEffect } from "react";
import "./styles/work.css";

const Work = () => {
  useEffect(() => {
    document.getElementById("sulamericabotao").addEventListener("click", () => {
      window.open("https://saude.sulamericaseguros.com.br/prestador/login/?accessError=2");
    });

    document.getElementById("bradescobotao").addEventListener("click", () => {
      window.open("https://wwws.bradescosaude.com.br/PCBS-GerenciadorPortal/td/loginReferenciado.do");
    });

    document.getElementById("amilbotao").addEventListener("click", () => {
      window.open("https://credenciado.amil.com.br/login?action=session");
    });

    document.getElementById("unimedbotao").addEventListener("click", () => {
      window.open("https://saw.trixti.com.br/saw/Logar.do?method=abrirSAW");
    });

    document.getElementById("portoSaudebotao").addEventListener("click", () => {
      window.open("https://prestadores.portosaude.com.br/portal-prestador/");
    });

    document.getElementById("saviatendimentobotao").addEventListener("click", () => {
      window.open("https://saviatendimento.com.br/");
    });

    document.getElementById("segurosUnimedbotao").addEventListener("click", () => {
      window.open("https://topsaude.segurosunimed.com.br/TSNMVC/Account/Login?returnUrl=/TSNMVC/TSNMVC/Home/AreaLogada");
    });

    document.getElementById("postalSaudebotao").addEventListener("click", () => {
      window.open("https://autorizador.postalsaudeservicos.com.br/autorizadorpro/custom/CustomLogin.aspx");
    });

    document.getElementById("bluebotao").addEventListener("click", () => {
      window.open("https://planoonline.com.br/autorizadorweb_v2/blue");
    });

    document.getElementById("labetbotao").addEventListener("click", () => {
      window.open("https://rede.labest.com.br/auth");
    });

    document.getElementById("geapbotao").addEventListener("click", () => {
      window.open("https://login.geap.com.br/account/signin?p=%2Fconnect%2Fauthorize%2Fcallback");
    });

    document.getElementById("gamabotao").addEventListener("click", () => {
      window.open("https://wwwt.connectmed.com.br/saudeweb/seguranca/login");
    });
  }, []);

  return (
    <main>
      <div className="itemUm">
        <div className="sitesObrigatorios">
          <p>Sites Obrigatórios Para Estarem Abertos!</p>
        </div>
        <ul className="listaObrigatoria">
          <li id="sistemaFluxo">Sistema Fluxo</li>
          <li id="gliese">Gliese</li>
          <li id="gliesePiloto">Gliese Piloto</li>
          <li id="oraculo">Oráculo</li>
          <li id="teams">Microsoft Teams</li>
          <li id="sqDasa">SQ Dasa</li>
          <li id="canalDoConsultor">Canal do Consultor</li>
          <li id="orizon">Orizon</li>
        </ul>
      </div>

      <div className="itemDois">
        <div className="sitesDosConvênios">
          <p>Site dos Convênios para Autorização!</p>
        </div>
        <ul className="listaConvenios">
          <li id="sulamerica">
            <img src="/images/sulamerica.png" id="sulamericabotao" alt="Sulamérica" />
            <p>CNPJ: 614866500019</p>
            <p>Login: b036</p>
            <p>Senha: dasa@lv1</p>
          </li>
          <li id="bradesco">
            <img src="/images/bradesco.jpg" id="bradescobotao" alt="Bradesco" />
            <p>CPF: 54915362884</p>
            <p>Login: 61.486.650/0064-67</p>
            <p>Senha: H(s0i-S1</p>
          </li>
          <li id="amil">
            <img src="/images/amil.png" id="amilbotao" alt="Amil" />
            <p>Login: 11018739w248</p>
            <p>Senha: Dasa@@2024</p>
          </li>
          <li id="unimed">
            <img src="/images/unimed.jpg" id="unimedbotao" alt="Unimed" />
            <p>Login: cnu.patricia.de.oliv</p>
            <p>Senha: Dasa#20266</p>
          </li>
          <li id="portoSaude">
            <img src="/images/portosaude.png" id="portoSaudebotao" alt="Porto Saúde" />
            <p>Login: 54915362884</p>
            <p>Senha: Dasa@@2025</p>
          </li>
          <li id="saviatendimento">
            <img src="/images/notredame.png" id="saviatendimentobotao" alt="Sávi Atendimento" />
            <p>Login: 54915362884</p>
            <p>Senha: Dasa@@2025</p>
          </li>
          <li id="segurosUnimed">
            <img src="/images/segurosunimed.jpg" id="segurosUnimedbotao" alt="Seguros Unimed" />
            <p>Login: LAV46</p>
            <p>Senha: DASA123</p>
          </li>
          <li id="postalSaude">
            <img src="/images/postalsaude.webp" id="postalSaudebotao" alt="Postal Saúde" />
            <p>Login: 61486650002399</p>
            <p>Senha: Dasa@100</p>
          </li>
          <li id="blue">
            <img src="/images/blue.png" id="bluebotao" alt="Blue Saúde" />
            <p>Login: 004020</p>
            <p>Senha: LV4020</p>
          </li>
          <li id="labet">
            <img src="/images/labest.png" id="labetbotao" alt="Labest" />
            <p>Login: 61.486.650/0214-23</p>
            <p>Senha: 123@Trocar</p>
          </li>
          <li id="geap">
            <img src="/images/geapsaude.png" id="geapbotao" alt="GEAP Saúde" />
            <p>Login: 8022941</p>
            <p>Senha: dasa</p>
          </li>
          <li id="gama">
            <img src="/images/gamasaude.png" id="gamabotao" alt="Gama Saúde" />
            <p>Login: atalaia1</p>
            <p>Senha: 123456</p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Work;
