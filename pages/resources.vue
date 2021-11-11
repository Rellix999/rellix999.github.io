<template>
  <div class="flex flex-col">
    <PageHeading title="Resources" subtitle="Read about what I use and why I use it." />
    <section>
      <div class="container mx-auto">
        <div class="grid grid-cols-1 xl:grid-cols-2 px-4 py-4 gap-4">
          <div v-for="resource in resources" :key="resource.title">
            <div class="shadow-lg rounded flex h-full">
              <div class="flex items-center justify-center flex-shrink-0 flex-grow-0 w-1/4 p-4">
                <div class="block w-full text-center"><img :src="resource.imageUrl" class="inline-block" /></div>
              </div>
              <div class="flex-shrink flex-grow m-4">
                <h2 class="text-gray-900 text-lg mb-4 font-medium title-font">{{ resource.title }}</h2>
                {{ resource.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Resource from "../models/resource";
import Vue from "vue";
export default Vue.extend({
  computed: {
    resources: function () {
      return [
        new Resource(
          "/img/angular-logo.svg",
          "Angular",
          "After a thorough investigation of the major frontend frameworks (Angular, React and Vue) I started working with Angular. I love backend, but I also care about frontend. I want my code to be neat and structured. A frontend framework like Angular makes this possible."
        ),
        new Resource(
          "/img/composer-logo.png",
          "Composer",
          "Managing (PHP) dependencies is important. It takes more than just running `composer update` as told at a talk at Dutch PHP Conference in 2017 I attended. Not only for functionality reasons, but also for security reasons. When a product owner asks me to build some new functionality I check to see if it's already been created as a library. You don't want to reinvent the wheel, right?"
        ),
        new Resource(
          "/img/csharp-logo.svg",
          "C#",
          "During my bachelor in Software Engineering we got introduced to the C# language. I created a few projects in C# from a console application to web services and desktop applications using the .NET framework."
        ),
        new Resource(
          "/img/docker-logo.png",
          "Docker",
          "Every developer needs a development environment. I used to install everything on my host machine and configure all tools/packages on there. For example, XAMPP used to function as my web development environment. After coming in contact with Docker, those days are gone! I love having the ability to install Docker on any machine, run one command and be up and running towards my goal."
        ),
        new Resource(
          "/img/django-logo.png",
          "Django",
          "After building a console and desktop application with Python to automate my monthly kilometer declaration, I thought I'd give Django a try and built my personal website with it. You might have guessed it... I like Django. It feels like such a mature and professional framework. A nice breeze of fresh air. Love it!"
        ),
        new Resource(
          "/img/gimp-logo.jpg",
          "GIMP",
          "It's not a secret that I love open source software. One of the most popular applications is GIMP (Gnu Image Manipulation Program). A great alternative to Photoshop since it allows you to create and edit images in a similar way using brushes, layers and filters. Being a full stack developer, I use the GIMP quite often."
        ),
        new Resource(
          "/img/drupal-logo.png",
          "Drupal",
          "Drupal is one of my favourite content management systems. I stepped into the Drupal scene when version 7 was the latest version. After Drupal 8 came out, I did some projects with that too. Both backend and frontend is a breeze once you're over the steep learning curve. I love the flexibility and the fact that they're now using components of Symfony."
        ),
        new Resource(
          "/img/html-css-javascript-logo.png",
          "HTML, CSS, JavaScript",
          "This is where it all started. The web development basics: I've built a lot of websites, webshops and web applications. From backend to frontend. Web development (excluding API's and other web services) is nowhere without these technologies. Nowadays these technologies cover more than just the web like the user interface of desktop and smartphone applications."
        ),
        new Resource(
          "/img/git-logo.png",
          "Git",
          "Ah version control... So very important. I can't believe I used to program without any version control. Using git repositories, branches, tags, cherry-picking, bisecting and continuous integration/deployment is one of the most amazing experiences. Also great for code reviews."
        ),
        new Resource(
          "/img/laravel-logo.png",
          "Laravel",
          "After being introduced to my first web framework (CodeIgniter) Laravel popped its head up. It was gaining traction in the software developer community. That's when it caught my eye. The code was so natural and elegant. My hands were itching to build something with it. I started developing a Laravel-based CRM-like application for a company and after that a couple more."
        ),
        new Resource(
          "/img/java-logo.png",
          "Java",
          'The Java language is an odd one in my story. The first year of my college system administrator study, we got a Java course to introduce programming to us. Honestly it took a while for it to "click", but after a building several projects I got the hang of it and started looking at other languages.'
        ),
        new Resource(
          "/img/materialize-css-logo.png",
          "MaterializeCSS",
          "I'm a full stack developer. This means I work on the frontend and backend. Designing (web) applications is a different job. Luckily there are frontend frameworks like MaterializeCSS which make applications I write look and feel great. MaterializeCSS, Twitter Bootstrap and Zurb's Foundation are the frontend frameworks with which I have the most experience. I can adapt to a different, more advanced frontend framework like Angular or Vue."
        ),
        new Resource(
          "/img/linux-logo.svg",
          "Linux",
          "When I was in my teens you could still fill in a form on the Ubuntu website and order a physical CD for free. Growing up with Microsoft Windows, this was an entire new world. I always had an old PC laying around and loved (re)installing an OS on there. A couple of distro's I'm familiar with are Ubuntu, OpenSUSE, Debian, Red Hat, Fedora, Linux Mint. Currently my work laptop has Ubuntu 18.10 and I'm loving it."
        ),
        new Resource(
          "/img/php-logo.png",
          "PHP",
          "If a programmer has a primary language, mine's PHP. From an early age I started tinkering with technologies to make a website. HTML, CSS and PHP are languages with which I played at the age of 11. PHP was the language that made me feel like a magician and lead me to starting my study in computer science!"
        ),
        new Resource(
          "/img/npm-logo.png",
          "NPM",
          "Frontend library management is important. I use Node Package Manager (NPM) for managing these. NPM makes frontend dependency installation, updates and maintenance a breeze."
        ),
        new Resource(
          "/img/pycharm-logo.png",
          "PyCharm",
          "After having worked with JetBrains' PhpStorm, I felt obligated (and blessed to be able) to check out their IDE that was focused on Python development. After trying Visual Studio Code, I stuck with the community edition of PyCharm. A out-of-the-box working experience was what I was looking for and that's exactly what I got. And the fact that all of their IDE's are cross-platform is amazing."
        ),
        new Resource(
          "/img/phpstorm-logo.png",
          "PhpStorm",
          "The search for the ultimate IDE has ended! I've tried every single (web focused) text editor and IDE out there, but none of them met my requirements. Usually it was missing one or more of these: syntax highlighting, automatic refactoring, IntelliSense, git/SVN suppport, linting, cross-platform or snippets. Although PhpStorm is a paid product, it's worth the cash since it saves so much time."
        ),
        new Resource(
          "/img/sass-logo.png",
          "SASS",
          "CSS is evolving, but not fast enough in my opinion. It could be more structured and needs more functionality. Enter SASS. SASS is making changes to the frontend less of a headache. Using variables (overriding frontend library variables), mixins, hierarchy and inheritance in .scss files is making me like frontend development a bit more. I don't only clean code in the backend ;-)."
        ),
        new Resource(
          "/img/python-logo.svg",
          "Python",
          "Python has intrigued me the last couple of years. Since it's a solid language with a huge community and gaining popularity (especially the last couple of years) I started a couple of side projects with it. Elegant code has always been a goal of mine and when I heard of Pythonic code, I was hooked."
        ),
        new Resource(
          "/img/typescript-logo.svg",
          "TypeScript",
          "With my preferred choice of frontend framework comes TypeScript. That's the reason I started learning it. Adding typing to JavaScript has made frontend a lot more fun for me, because it makes it feel a bit more like backend work. It makes sure there are less bugs and the code is more clear. Static type checking for the win!"
        ),
        new Resource(
          "/img/symfony-logo.png",
          "Symfony",
          "After having tried Laravel, working with Drupal 8 (which uses some Symfony components) and using some Symfony components in various other projects, I was curious to see the actual Symfony framework. This was around the time that Symfony 4 came out (November 2017). I popped the first side project off my list and started creating it with Symfony. Great documentation and a lot of fun to work with."
        ),
      ];
    },
  },
});
</script>
