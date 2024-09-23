// Información detallada de cada ginebra
const ginebras = [
    {
        nombre: "Hendrick's Gin",
        descripcion: "Una ginebra escocesa conocida por su infusión de pepino y pétalos de rosa, dándole un toque suave y floral. Ideal para un gin-tonic refrescante.",
        notas: "Floral, pepino, rosa, enebro sutil",
        pais: "Escocia",
        grados: "41,4º"
    },
    {
        nombre: "Bombay Sapphire",
        descripcion: "Destilada con 10 botánicos exóticos, esta ginebra tiene un sabor equilibrado, suave y limpio. Su botella azul es icónica y se asocia a cócteles elegantes.",
        notas: "Cítricos, enebro, especias suaves",
        pais: "Reino Unido",
        grados: "43º"
    },
    {
        nombre: "Tanqueray London Dry",
        descripcion: "Una de las ginebras más clásicas y apreciadas del mundo. Con un fuerte sabor a enebro y un final seco, es la favorita para cócteles tradicionales.",
        notas: "Enebro intenso, pimienta, cilantro",
        pais: "Reino Unido",
        grados: "41,4º",
    },
    {
        nombre: "Monkey 47",
        descripcion: "Proveniente de la Selva Negra alemana, esta ginebra utiliza 47 botánicos, creando una ginebra rica, compleja y aromática.",
        notas: "Frutas cítricas, especias, notas herbales",
        pais: "Alemania",
        grados: "41,4º",
    },
    {
        nombre: "Beefeater London Dry",
        descripcion: "Una ginebra robusta con un claro perfil de enebro y cítricos. Clásica y tradicional, es la opción ideal para cócteles con historia.",
        notas: "Enebro, limón, naranja amarga",
        pais: "Reino Unido",
        grados: "41,4º",
    },
    {
        nombre: "The Botanist",
        descripcion: "Destilada en la isla escocesa de Islay, utiliza 22 hierbas locales que le dan un carácter único. Es una ginebra artesanal y muy fresca.",
        notas: "Herbal, mentolado, botánicos frescos",
        pais: "Escocia",
        grados: "41,4º"
    }
];

// Función para mostrar la ginebra en el modal
function mostrarGinebra(index) {
    const ginebra = ginebras[index];
    document.getElementById('ginebraNombre').innerText = ginebra.nombre;
    document.getElementById('ginebraDescripcion').innerText = ginebra.descripcion;
    document.getElementById('ginebraNotas').innerText = ginebra.notas;
    document.getElementById('ginebraPais').innerText = ginebra.pais;
    document.getElementById('ginebraGrados').innerText = ginebra.grados;

    // Mostrar el modal
    document.getElementById('ginebraModal').style.display = 'block';
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById('ginebraModal').style.display = 'none';
}
