/* // ******************************************************************************** // */
/* // INICIO MENU DAS SECTIONS // */
const menuSection1 = document.querySelector('.menu_section1');
const menuSection2 = document.querySelector('.menu_section2');
const menuSection3 = document.querySelector('.menu_section3');
const menuSection4 = document.querySelector('.menu_section4');
const lista1 = document.querySelector('.its_section1');
const lista2 = document.querySelector('.its_section2');
const lista3 = document.querySelector('.its_section3');
const lista4 = document.querySelector('.its_section4');
const buttonMostrar = document.querySelector('.mostrar');
const buttonOcultar = document.querySelector('.ocultar');
let refMS = 0;
let refMP = 0;
const mostrarMenu = () => {
    if(refMP === 1) {
        ocultarMP();
    }
    refMS = 1;
    menuSection1.style.animation = 'mostrar_bg .5s';
    menuSection2.style.animation = 'mostrar_bg .5s';
    menuSection3.style.animation = 'mostrar_bg .5s';
    menuSection4.style.animation = 'mostrar_bg .5s';
    lista1.style.animation = 'mostrar_lista .5s';
    lista2.style.animation = 'mostrar_lista .5s';
    lista3.style.animation = 'mostrar_lista .5s';
    lista4.style.animation = 'mostrar_lista .5s';
    menuSection1.style.transform = 'rotatey(0)';
    menuSection2.style.transform = 'rotatey(0)';
    menuSection3.style.transform = 'rotatey(0)';
    menuSection4.style.transform = 'rotatey(0)';
    lista1.style.left = '15px';
    lista2.style.left = '15px';
    lista3.style.left = '15px';
    lista4.style.left = '15px';
    buttonMostrar.style.display = 'none';
    buttonOcultar.style.display = 'flex';
}
const ocultarMenu = () => {
    refMS = 0;
    menuSection1.style.animation = 'ocultar_bg .5s';
    menuSection2.style.animation = 'ocultar_bg .5s';
    menuSection3.style.animation = 'ocultar_bg .5s';
    menuSection4.style.animation = 'ocultar_bg .5s';
    lista1.style.animation = 'ocultar_lista .5s';
    lista2.style.animation = 'ocultar_lista .5s';
    lista3.style.animation = 'ocultar_lista .5s';
    lista4.style.animation = 'ocultar_lista .5s';
    menuSection1.style.transform = 'rotatey(90deg)';
    menuSection2.style.transform = 'rotatey(90deg)';
    menuSection3.style.transform = 'rotatey(90deg)';
    menuSection4.style.transform = 'rotatey(90deg)';
    lista1.style.left = '-100%';
    lista2.style.left = '-100%';
    lista3.style.left = '-100%';
    lista4.style.left = '-100%';
    buttonOcultar.style.display = 'none';
    buttonMostrar.style.display = 'flex';
}
/* // FINAL MENU DAS SECTIONS // */
/* // ******************************************************************************** // */
/* // INICIO ANIMAÇÕES E POSIÇÕES DOS PROJETOS // */
const projeto1 = document.querySelector('.projeto1');
const projeto2 = document.querySelector('.projeto2');
const projeto3 = document.querySelector('.projeto3');
const projeto4 = document.querySelector('.projeto4');
const projeto5 = document.querySelector('.projeto5');
const projeto6 = document.querySelector('.projeto6');
const indicador = document.querySelector('.indicador');
const anterior = document.querySelector('.L');
const proximo = document.querySelector('.R');
let projetoAtual = 1;
function avancar() {
    if(refMS === 1) {
        ocultarMenu();
    }
    if(refMP === 1) {
        ocultarMP();
    }
    if (projetoAtual < 6) {
        projetoAtual += 1;
    }
    indicador.textContent = projetoAtual;
    if (projetoAtual === 2) {
        projeto2.style.animation = 'pjOn 1s';
        projeto1.style.animation = 'pjOff- 1s';
        projeto1.style.left = '-100%';
        projeto2.style.left = '0';
        setTimeout(() => {
            anterior.style.display = 'flex'
        }, 500);
    }
    if (projetoAtual === 3) {
        projeto3.style.animation = 'pjOn 1s';
        projeto2.style.animation = 'pjOff- 1s';
        projeto2.style.left = '-100%';
        projeto3.style.left = '0';
    }
    if (projetoAtual === 4) {
        projeto4.style.animation = 'pjOn 1s';
        projeto3.style.animation = 'pjOff- 1s';
        projeto3.style.left = '-100%';
        projeto4.style.left = '0';
    }
    if (projetoAtual === 5) {
        projeto5.style.animation = 'pjOn 1s';
        projeto4.style.animation = 'pjOff- 1s';
        projeto4.style.left = '-100%';
        projeto5.style.left = '0';
    }
    if (projetoAtual === 6) {
        projeto6.style.animation = 'pjOn 1s';
        projeto5.style.animation = 'pjOff- 1s';
        projeto5.style.left = '-100%';
        projeto6.style.left = '0';
        setTimeout(() => {
            proximo.style.display = 'none'
        }, 500);
    }
}
function voltar() {
    if(refMS === 1) {
        ocultarMenu();
    }
    if(refMP === 1) {
        ocultarMP();
    }
    if (projetoAtual > 1) {
        projetoAtual -= 1;
    }
    indicador.textContent = projetoAtual;
    
    if (projetoAtual === 1) {
        projeto1.style.animation = 'pjOn- 1s';
        projeto2.style.animation = 'pjOff 1s';
        projeto2.style.left = '-100%';
        projeto1.style.left = '0';
        setTimeout(() => {
            anterior.style.display = 'none';
        }, 500);
    }
    
    if (projetoAtual === 2) {
        projeto2.style.animation = 'pjOn- 1s';
        projeto3.style.animation = 'pjOff 1s';
        projeto3.style.left = '-100%';
        projeto2.style.left = '0';
    }

    if (projetoAtual === 3) {
        projeto3.style.animation = 'pjOn- 1s';
        projeto4.style.animation = 'pjOff 1s';
        projeto4.style.left = '-100%';
        projeto3.style.left = '0';
    }

    if (projetoAtual === 4) {
        projeto4.style.animation = 'pjOn- 1s';
        projeto5.style.animation = 'pjOff 1s';
        projeto5.style.left = '-100%';
        projeto4.style.left = '0';
    }
    if (projetoAtual === 5) {
        projeto5.style.animation = 'pjOn- 1s';
        projeto6.style.animation = 'pjOff 1s';
        projeto6.style.left = '-100%';
        projeto5.style.left = '0';
        setTimeout(() => {
            proximo.style.display = 'flex';
        }, 500);
    }
}
/* // FINAL ANIMAÇÕES E POSIÇÕES DOS PROJETOS // */
/* // ******************************************************************************** // */
/* // INICIO ANIMAÇÕES E POSIÇÕES DOS MENUS DOS PROJETOS // */
const mostrarDeploy = document.querySelector('.mostrar_deploy');
const ocultarDeploy = document.querySelector('.ocultar_deploy');
const menuProjeto1 = document.querySelector('.menu_projeto1');
const menuProjeto2 = document.querySelector('.menu_projeto2');
const menuProjeto3 = document.querySelector('.menu_projeto3');
const menuProjeto4 = document.querySelector('.menu_projeto4');
const menuProjeto5 = document.querySelector('.menu_projeto5');
const menuProjeto6 = document.querySelector('.menu_projeto6');
const mostrarMP =()=> {
    if(refMS === 1) {
        ocultarMenu();
    }
    refMP = 1;
    menuProjeto1.style.animation='mostrar_bg .5s';
    menuProjeto1.style.transform='rotateY(0)';
    menuProjeto2.style.animation='mostrar_bg .5s';
    menuProjeto2.style.transform='rotateY(0)';
    menuProjeto3.style.animation='mostrar_bg .5s';
    menuProjeto3.style.transform='rotateY(0)';
    menuProjeto4.style.animation='mostrar_bg .5s';
    menuProjeto4.style.transform='rotateY(0)';
    menuProjeto5.style.animation='mostrar_bg .5s';
    menuProjeto5.style.transform='rotateY(0)';
    menuProjeto6.style.animation='mostrar_bg .5s';
    menuProjeto6.style.transform='rotateY(0)';
    mostrarDeploy.style.display='none';
    ocultarDeploy.style.display='flex';
}
const ocultarMP =()=> {
    refMP = 0;
    menuProjeto1.style.animation='ocultar_bg .25s';
    menuProjeto1.style.transform='rotateY(90deg)';
    menuProjeto2.style.animation='ocultar_bg .25s';
    menuProjeto2.style.transform='rotateY(90deg)';
    menuProjeto3.style.animation='ocultar_bg .25s';
    menuProjeto3.style.transform='rotateY(90deg)';
    menuProjeto4.style.animation='ocultar_bg .25s';
    menuProjeto4.style.transform='rotateY(90deg)';
    menuProjeto5.style.animation='ocultar_bg .25s';
    menuProjeto5.style.transform='rotateY(90deg)';
    menuProjeto6.style.animation='ocultar_bg .25s';
    menuProjeto6.style.transform='rotateY(90deg)';
    mostrarDeploy.style.display='flex';
    ocultarDeploy.style.display='none';
}
/* // FINAL ANIMAÇÕES E POSIÇÕES DOS MENUS DOS PROJETOS // */
/* // ******************************************************************************** // */
/* // INICIO ANIMAÇÕES E POSIÇÕES DAS SECTIONS E ANIMAÇÕES DOS CONTEUDOS // */

const section1 = document.getElementById('section_1');
const section2 = document.getElementById('section_2');
const section3 = document.getElementById('section_3');
const section4 = document.getElementById('section_4');
const conteudos1 = document.querySelector('.conteudos_1');
const conteudos2 = document.querySelector('.conteudos_2');
const conteudos3 = document.querySelector('.conteudos_3');
const conteudos4 = document.querySelector('.conteudos_4');

function d1P2 () {
    if(refMS === 1) {
        ocultarMenu();
    }
    if(refMP === 1) {
        ocultarMP();
    }
    conteudos2.style.animation='entrando 2s ';
    conteudos1.style.animation='saindo 1s ';
    section1.style.animation=' a 1.6s';
    section2.style.animation=' b 1.6s';
    section2.style.top='0';
    section1.style.top='-100%';
}
function d1P3 () {
    if(refMS === 1) {
        ocultarMenu();
    }
    if(refMP === 1) {
        ocultarMP();
    }
    conteudos3.style.animation='entrando 2s ';
    conteudos1.style.animation='saindo 1s ';
    section1.style.animation=' a 1.6s';
    section3.style.animation=' b 1.6s';
    section3.style.top='0';
    section1.style.top='-100%';
}
function d1P4 () {
    if(refMS === 1) {
        ocultarMenu();
    }
    if(refMP === 1) {
        ocultarMP();
    }
    conteudos4.style.animation='entrando 2s ';
    conteudos1.style.animation='saindo 1s ';
    section1.style.animation=' a 1.6s';
    section4.style.animation=' b 1.6s';
    section4.style.top='0';
    section1.style.top='-100%';
}


function d2P1 () {
    if(refMS === 1) {
        ocultarMenu();
    }
    if(refMP === 1) {
        ocultarMP();
    }
    conteudos1.style.animation='entrando 2s ';
    conteudos2.style.animation='saindo 1s ';
    section2.style.animation=' bb 1.6s';
    section1.style.animation=' aa 1.6s';
    section1.style.top='0';
    section2.style.top='-100%';
}
function d3P1 () {
    if(refMS === 1) {
        ocultarMenu();
    }
    if(refMP === 1) {
        ocultarMP();
    }
    conteudos1.style.animation='entrando 2s ';
    conteudos3.style.animation='saindo 1s ';
    section3.style.animation=' bb 1.6s';
    section1.style.animation=' aa 1.6s';
    section1.style.top='0';
    section3.style.top='-100%';
}
function d4P1 () {
    if(refMS === 1) {
        ocultarMenu();
    }
    if(refMP === 1) {
        ocultarMP();
    }
    conteudos1.style.animation='entrando 2s ';
    conteudos4.style.animation='saindo 1s ';
    section4.style.animation=' bb 1.6s';
    section1.style.animation=' aa 1.6s';
    section1.style.top='0';
    section4.style.top='-100%';
}
function d2P3 () {
    if(refMS === 1) {
        ocultarMenu();
    }
    if(refMP === 1) {
        ocultarMP();
    }
    conteudos3.style.animation='entrando 2s ';
    conteudos2.style.animation='saindo 1s ';
    section2.style.animation=' a 1.6s';
    section3.style.animation=' b 1.6s';
    section3.style.top='0';
    section2.style.top='-100%';
}
function d3P2 () {
    if(refMS === 1) {
        ocultarMenu();
    }
    if(refMP === 1) {
        ocultarMP();
    }
    conteudos2.style.animation='entrando 2s ';
    conteudos3.style.animation='saindo 1s ';
    section3.style.animation=' bb 1.6s';
    section2.style.animation=' aa 1.6s';
    section2.style.top='0';
    section3.style.top='-100%';
}
function d3P4 () {
    if(refMS === 1) {
        ocultarMenu();
    }
    if(refMP === 1) {
        ocultarMP();
    }
    conteudos4.style.animation='entrando 2s ';
    conteudos3.style.animation='saindo 1s ';
    section3.style.animation=' a 1.6s';
    section4.style.animation=' b 1.6s';
    section4.style.top='0';
    section3.style.top='-100%'
}
function d2P4 () {
    if(refMS === 1) {
        ocultarMenu();
    }
    if(refMP === 1) {
        ocultarMP();
    }
    conteudos4.style.animation='entrando 2s ';
    conteudos2.style.animation='saindo 1s ';
    section2.style.animation=' a 1.6s';
    section4.style.animation=' b 1.6s';
    section4.style.top='0';
    section2.style.top='-100%';
}
function d4P3 () {
    if(refMS === 1) {
        ocultarMenu();
    }
    if(refMP === 1) {
        ocultarMP();
    }
    conteudos3.style.animation='entrando 2s ';
    conteudos4.style.animation='saindo 1s ';
    section4.style.animation=' bb 1.6s';
    section3.style.animation=' aa 1.6s';
    section3.style.top='0';
    section4.style.top='-100%';
}
function d4P2 () {
    if(refMS === 1) {
        ocultarMenu();
    }
    if(refMP === 1) {
        ocultarMP();
    }
    conteudos2.style.animation='entrando 2s ';
    conteudos4.style.animation='saindo 1s ';
    section4.style.animation=' bb 1.6s';
    section2.style.animation=' aa 1.6s';
    section2.style.top='0';
    section4.style.top='-100%';
}
/* // FINAL ANIMAÇÕES E POSIÇÕES DAS SECTIONS E ANIMAÇÕES DOS CONTEUDOS // */
 /* // ******************************************************************************** // */