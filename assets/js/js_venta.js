const propiedades_venta = [
  {
    nombre: "Apartamento con vista al mar",
    src: "assets/img/venta1.jpg",
    descripcion: "Apartamento con impresionante vista al mar.",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 2,
    costo: 200000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse en el centro de la ciudad",
    src: "assets/img/venta2.webp",
    descripcion: "Penthouse ubicado en el corazón de la ciudad.",
    ubicacion: "789 Downtown Blvd, Urban Center, CA 34567",
    habitaciones: 4,
    costo: 500000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Chalet en las montañas",
    src: "assets/img/venta3.avif",
    descripcion: "Chalet encantador con vistas a las montañas.",
    ubicacion: "101 Mountain View Road, Summit Valley, CA 67890",
    habitaciones: 5,
    costo: 400000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa en las afueras de la ciudad",
    src: "assets/img/venta4.webp",
    descripcion:
      "Acogedora cabaña para escaparse de los ruidos de la urbe y desconectarse del mundo.",
    ubicacion: "987 Hill Road, Sunset Valley, TX 87392",
    habitaciones: 4,
    costo: 2100,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Loft con excelente ubicación y moderno",
    src: "assets/img/venta5.jpg",
    descripcion:
      "Espaciosa propiedad ubicada el centro culturas e histórica de la ciudad más famosa de Nebraska",
    ubicacion: "567 Park Street, Nebraska, NB 89736",
    habitaciones: 1,
    costo: 2700,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa en el lago",
    src: "assets/img/venta6.jpg",
    descripcion:
      "Privada y cómoda cabaña en el lago de la ciudad. Cuenta con bote propio.",
    ubicacion: "7236 Saxem park, New Valley, BS 973621",
    habitaciones: 2,
    costo: 1700,
    smoke: false,
    pets: true,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const propiedadesVentaContainer = document.getElementById(
    "propiedadesVentaContainer"
  );

  propiedades_venta.forEach((propiedad) => {
    const propiedadHTML = `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${
              propiedad.src
            }" class="card-img-top" alt="Imagen del departamento">
            <div class="card-body">
              <h5 class="card-title">${propiedad.nombre}</h5>
              <p class="card-text">${propiedad.descripcion}</p>
              <p><i class="fas fa-map-marker-alt"></i> ${
                propiedad.ubicacion
              }</p>
              <p><i class="fas fa-bed"></i> ${
                propiedad.habitaciones
              } Habitaciones</p>
              <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
              ${
                propiedad.smoke
                  ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
                  : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
              }
              ${
                propiedad.pets
                  ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
                  : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'
              }
            </div>
          </div>
        </div>
      `;
    propiedadesVentaContainer.insertAdjacentHTML("beforeend", propiedadHTML);
  });
});
