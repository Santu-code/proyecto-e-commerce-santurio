const productos =[
    {
    precio: 22,
    nombre: "cinturon blanco",
    image: "https://m.media-amazon.com/images/I/6196e96M3sL._AC_SX625_.jpg",
    categoria: "gi",
    descripcion: "descripcion 1",
    id: '01'
    },
    {
    precio: 23,
    nombre: "cinturon azul",
    image: "https://m.media-amazon.com/images/I/71FLaDj-FlL._AC_SY625_.jpg",
    categoria: "gi",
    descripcion: "descripcion 2",
    id: '02'
    },
    {
    precio: 24,
    nombre: "cinturon morado",
    image: "https://m.media-amazon.com/images/I/61WyHk8ymFL._AC_SY625_.jpg",
    categoria: "gi",
    descripcion: "descripcion 3",
    id: '03'
    },
    {
    precio: 25,
    nombre: "cinturon marron",
    image: "https://m.media-amazon.com/images/I/71MEYD8bikL._AC_SY625_.jpg",
    categoria: "gi",
    descripcion: "descripcion 4",
    id: '04'
    },
    {
    precio: 26,
    nombre: "cinturon negro",
    image: "https://m.media-amazon.com/images/I/71PTjCBtHEL._AC_SY625_.jpg",
    categoria: "gi",
    descripcion: "descripcion 5",
    id: '05'
    },
    {
    precio: 85,
    nombre: "gi blanco",
    image: "https://m.media-amazon.com/images/I/71lRzBRMfxL._AC_SX679_.jpg",
    categoria: "gi",
    descripcion: "descripcion 6",
    id: '06'
    },
    {
    precio: 90,
    nombre: "gi negro",
    image: "https://m.media-amazon.com/images/I/71c0iekMdaL._AC_SX679_.jpg",
    categoria: "gi",
    descripcion: "descripcion 7",
    id: '07'
    },
    {
    precio: 87,
    nombre: "gi rosa",
    image: "https://m.media-amazon.com/images/I/61asEAOLvVL._AC_SX679_.jpg",
    categoria: "gi",
    descripcion: "descripcion 8",
    id: '08'
    },
    {
    precio: 25,
    nombre: "rashguard largo",
    image: "https://m.media-amazon.com/images/I/61sDI0DiUJL._AC_SY879_.jpg",
    categoria: "nogi",
    descripcion: "descripcion 9",
    id: '09'
    },
    {
    precio: 20,
    nombre: "rashguard corto",
    image: "https://m.media-amazon.com/images/I/71Sx2fYIJrL._AC_SX679_.jpg",
    categoria: "nogi",
    descripcion: "descripcion 10",
    id: '10'
    },
    {
    precio: 37,
    nombre: "pantalon corto negro",
    image: "https://m.media-amazon.com/images/I/81z0kMgzgkL._AC_SX679_.jpg",
    categoria: "nogi",
    descripcion: "descripcion 11",
    id: '11'
    },
    {
    precio: 42,
    nombre: "pantalon corto rojo",
    image: "https://m.media-amazon.com/images/I/81iV7DR5C6L._AC_SX679_.jpg",
    categoria: "nogi",
    descripcion: "descripcion 12",
    id: '12'
    },
    {
    precio: 34,
    nombre: "mallas compresion",
    image: "https://m.media-amazon.com/images/I/61f58+W0+eL._AC_SX569_.jpg",
    categoria: "nogi",
    descripcion: "descripcion 13",
    id: '13'
    },
    {
    precio: 15,
    nombre: "bucal blanco",
    image: "https://m.media-amazon.com/images/I/61APjuCZmGL._AC_SX425_.jpg",
    categoria: "relacionados",
    descripcion: "descripcion 14",
    id: '14'
    },
    {
    precio: 23,
    nombre: "bucal dorado",
    image: "https://m.media-amazon.com/images/I/716H8A62L8L._AC_SX425_.jpg",
    categoria: "relacionados",
    descripcion: "descripcion 15",
    id: '15'
    },
    {
    precio: 70,
    nombre: "mochila",
    image: "https://m.media-amazon.com/images/I/61RGfY2-aaL._AC_SX679_.jpg",
    categoria: "relacionados",
    descripcion: "descripcion 16",
    id: '16'
    },
    {
    precio: 27,
    nombre: "rodillera",
    image: "https://m.media-amazon.com/images/I/41OKe4jCCjL._SX342_SY445_QL70_ML2_.jpg",
    categoria: "relacionados",
    descripcion: "descripcion 17",
    id: '17'
    },
    {
    precio: 30,
    nombre: "curso basico bjj",
    image: "https://plus.unsplash.com/premium_photo-1712438461890-166b75fea321?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmpqfGVufDB8fDB8fHww",
    categoria: "clases",
    descripcion: "descripcion 18",
    id: '18'
    },
    {
    precio: 120,
    nombre: "curso medio bjj",
    image: "https://plus.unsplash.com/premium_photo-1712438458879-17fa8ae2cab8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmpqfGVufDB8fDB8fHww",
    categoria: "clases",
    descripcion: "descripcion 19",
    id: '19'
    },
    {
    precio: 210,
    nombre: "curso avanzado bjj",
    image: "https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmpqfGVufDB8fDB8fHww",
    categoria: "clases",
    descripcion: "descripcion 20",
    id: '20'
    }
]

let error= false
export const getProductos = ()=>{

    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject("Algo salio mal, intente mas tarde");
            }else{
                resolve(productos)
            }
        },2000)
    })

}

export const getUnProducto = (id)=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject("El producto no existe, intente mas tarde");
            }else{
                let product = productos.find((prod)=> prod.id === id)
                resolve(product)
            }
        },3000)
    })
}