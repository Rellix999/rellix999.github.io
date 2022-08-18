<template>
  <section class="text-gray-600 body-font relative h-full">
    <div class="absolute z-10 inset-0 bg-gray-300">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d746403.2579981065!2d4.590241997193606!3d52.08429323123031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c689f964ab4f1d%3A0x31b100b98afcca3f!2sLeerdam!5e0!3m2!1sen!2snl!4v1660826310258!5m2!1sen!2snl"
        width="100%" 
        height="100%" 
        frameborder="0"
        style="border:0;filter: grayscale(1) contrast(1.2) opacity(0.4)"
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div class="relative z-20 h-full">
      <div class="container px-5 py-24 mx-auto flex">
        <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 shadow-md">
          <h2 class="text-gray-900 text-lg mb-4 font-medium title-font">Contact</h2>
          <ContactMapItem class="border-b-2" iconClass="fas fa-user-tie" title="KvK number (Chamber of Commerce)" text="804948700000" url="https://www.kvk.nl/orderstraat/product-kiezen/?kvknummer=804948700000" />
          <ContactMapItem class="border-b-2" iconClass="fas fa-envelope" title="E-mail" text="thijs.schalk@gmail.com" url="mailto:thijs.schalk@gmail.com" />
          <ContactMapItem class="border-b-2" iconClass="fab fa-linkedin" title="LinkedIn" text="thijsschalk" url="https://www.linkedin.com/in/thijsschalk/" />
          <ContactMapItem iconClass="fab fa-instagram" title="Instagram" text="thijs.999" url="https://www.instagram.com/thijs.999/" />
        </div>
      </div>
    </div>
  </section>
</template>
