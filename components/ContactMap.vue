<template>
  <section class="text-gray-600 body-font relative h-full">
    <div class="absolute inset-0 bg-gray-300">
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="map"
        scrolling="no"
        src="https://www.google.com/maps/embed/v1/place
  ?key=AIzaSyCkxzHgbbJaV1BdYuCqt7RLLRbkcLIID9s
  &center=51.891891,5.090390
  &q=Leerdam, the Netherlands
  &zoom=7"
        style="filter: grayscale(1) contrast(1.2) opacity(0.4)"
      ></iframe>
    </div>
    <div class="container px-5 py-24 mx-auto flex">
      <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
        <h2 class="text-gray-900 text-lg mb-4 font-medium title-font">Contact</h2>
        <ContactMapItem class="border-b-2" iconClass="fas fa-user-tie" title="KvK number (Chamber of Commerce)" text="804948700000" url="https://www.kvk.nl/orderstraat/product-kiezen/?kvknummer=804948700000" />
        <ContactMapItem class="border-b-2" iconClass="fas fa-envelope" title="E-mail" text="thijs.schalk@gmail.com" url="mailto:thijs.schalk@gmail.com" />
        <ContactMapItem class="border-b-2" iconClass="fab fa-linkedin" title="LinkedIn" text="thijsschalk" url="https://www.linkedin.com/in/thijsschalk/" />
        <ContactMapItem iconClass="fab fa-instagram" title="Instagram" text="thijs.999" url="https://www.instagram.com/thijs.999/" />
      </div>
    </div>
  </section>
</template>
