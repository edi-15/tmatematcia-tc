let ubicacionprincipal = window.pageYOffset;
window.onscroll = function() {
    let desplazamiento_actual = window.pageYOffset;
    if(ubicacionprincipal >= desplazamiento_actual){
        document.getElementById('watermark').style.top = '70px';
    }
    else {
        document.getElementById('watermark').style.top = '-300px';
        document.getElementById('watermark').style.transition = 'all 0.5s';
    }
    ubicacionprincipal = desplazamiento_actual;
}



const btn = document.getElementById('btnmenu');
const menu = document.querySelector('.menu');

btn.addEventListener('click', ()=> {
    menu.classList.toggle('mostrar')
});

//UNIDAD 1
const btnunidad1 = document.getElementById('btn-open1');
const lista1 = document.querySelector('.lista-1unidad');

btnunidad1.addEventListener('click', ()=> {
    lista1.classList.toggle('open')
});

//UNIDAD 2
const btnunidad2 = document.getElementById('btn-open2');
const lista2 = document.querySelector('.lista-2unidad');

btnunidad2.addEventListener('click', ()=> {
    lista2.classList.toggle('open')
});



// //IMAGEN OPEN



// const btnimg = document.getElementById('opnminmap');
// const img = document.querySelector('.imgmindmap');

// btnimg.addEventListener('click', ()=> {
//     img.classList.toggle('abririmg')
// });

// const closeimg = document.getElementById('closeimg');
// const img = document.querySelector('.imgmindmap');

// closeimg.addEventListener('click', ()=> {
//     img.classList.toggle('cerrarimg')
// });

// if(img = classList.toggle('abririmg')  ) {
//     closeimg.addEventListener('click', ()=> {
//         img.classList.toggle('cerrarimg')
//     });
// }



// const imgs = document.querySelector('.imgmindmap');

// closeimg.addEventListener('click', ()=> {
//     imgs.classList.toggle('cerrarimg')
// });





//MENU
var btnimg = document.getElementById('opnminmap');
var img = document.querySelector('.imgmindmap');
var closeimg = document.getElementById('closeimg');

btnimg.addEventListener('click', function(){
    img.classList.toggle('abririmg');
})

closeimg.addEventListener('click', function(){
    img.classList.toggle('abririmg');
})



// if (codigo = "x") {
//     console.log("Accedido");
// } else {
//     alert("Codigo inválido");
// }