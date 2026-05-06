window.addEventListener("load", ()=> {

    const ocultar = document.getElementById("ocultar");
    const barra = document.querySelector(".sections");
    const fondo = document.querySelector(".cuerpo");
    const activity = document.querySelector(".pagAct");

    ocultar.addEventListener("click", ()=> {
        barra.style.transition = "opacity 2s";
        barra.style.opacity = "0";
    });

    fondo.addEventListener("click", ()=> {
        barra.style.transition = "opacity 2s";
        barra.style.opacity = "1";
    });

    const webs = {
        personal: "https://google.com",
        tecnologias: "https://gemini.google.com",
        inicio: "https://programs-jr.github.io/EST93/",
        contacto: "https://programs-jr.github.io/Login/"
    }

    const Per = document.querySelector(".pagPer");
    const Tec = document.querySelector(".pagTec");
    const Hor = document.querySelector(".pagHor");
    const Ini = document.querySelector(".pagsec");
    const Con = document.querySelector(".pag1");
    
    class direccionar {
        constructor(){}
        dirIni(){
            Ini.addEventListener("click", ()=> {
                alert("Estas a punto de visistar la pagina Principal de la EST 93")
                window.location.href = `${webs.inicio}`
            })
        }
        
        dirPer(){
            Per.addEventListener("click", ()=> {
                alert("Estas visitando la pagina del Personal de la EST 93");
                window.location.href = `${webs.personal}`
            })
        }
    
        dirTec(){
            Tec.addEventListener("click", ()=> {
                alert("Estas visitando la pagina de las Tecnologias de la EST 93");
                window.location.href = `${webs.tecnologias}`
            })
        }
    
        dirHor(){
            Hor.addEventListener("click", ()=> {
                alert("Estas visitando la ppagina de los horarios de la EST 93");
                window.location.href = `${webs.horarios}`
            })
        }
    
        dirCon(){
            Con.addEventListener("click", ()=> {
                window.location.href = `${webs.contacto}`
            })
        }
    }
    
    const direccion = new direccionar();
    
    direccion.dirIni();
    direccion.dirPer();
    direccion.dirTec();
    direccion.dirHor();
    direccion.dirCon();

})