<template>
  <div class="flex flex-col">
    <PageHeading title="CV" subtitle="The course of my life: experience, skills and qualifications." />

    <div class="container mx-auto py-4 px-4">
      <div class="flex">
        <div class="w-3/4">
          <section class="flex flex-col border-b-2 lg:flex-row lg:border-b-0 mb-3 pb-3">
            <div class="flex w-full lg:w-4/12 mb-2">
              <div class="w-full h-full lg:border-r-2 mr-4">
                <h2 class="font-semibold text-2xl text-gray-700 uppercase">Personalia</h2>
              </div>
            </div>
            <div class="w-full lg:w-6/12">
              <div class="flex flex-wrap">
                <div class="w-1/3">Name:</div>
                <div class="w-2/3">Thijs Schalk</div>

                <div class="w-1/3">City:</div>
                <div class="w-2/3">Leerdam</div>

                <div class="w-1/3">Country:</div>
                <div class="w-2/3">The Netherlands</div>

                <div class="w-1/3">E-mail</div>
                <div class="w-2/3"><a href="mailto:thijs.schalk@gmail.com" class="text-link">thijs.schalk@gmail.com</a></div>
              </div>
            </div>
          </section>

          <section class="flex flex-col border-b-2 lg:flex-row lg:border-b-0 mb-3 pb-3">
            <div class="flex w-full lg:w-4/12 mb-2">
              <div class="w-full h-full lg:border-r-2 mr-4">
                <h2 class="font-semibold text-2xl text-gray-700 uppercase">About me</h2>
              </div>
            </div>
            <div class="w-full lg:w-8/12">
              <p>
                I'm a down to earth, friendly lad that loves software development. I deliver clean code which is maintainable and efficient. With my independent
                and rational thinking there's a solution to every problem. Both as a solo developer and in a team I'm able to realize great projects. The web
                has been a passion of mine and motivates me immensely. Especially using technology to optimize processes and help people be more productive
                motivates me.
              </p>
              <p class="mb-2">My hobby's are:</p>
              <ul class="mb-4">
                <li>Software programming</li>
                <li>Films/Series/YouTube</li>
                <li>
                  Video games (<a href="https://store.steampowered.com/app/252950/Rocket_League/" target="_blank" class="text-link">Rocket League</a>,
                  <a href="https://www.ea.com/games/battlefield" target="_blank" class="text-link">Battlefield</a>)
                </li>
                <li>Fitness (<a href="https://stronglifts.com" target="_blank" class="text-link">Stronglifts</a>)</li>
              </ul>

              <p class="mb-2">My inspirations are:</p>
              <ul>
                <li><a href="https://www.youtube.com/user/caseyneistat" target="_blank" class="text-link">Casey Neistat</a></li>
                <li><a href="https://en.wikipedia.org/wiki/Steve_Jobs" target="_blank" class="text-link">Former Apple CEO Steve Jobs</a></li>
                <li><a href="https://opensource.org/" target="_blank" class="text-link">The concept of Open Source</a></li>
                <li><a href="https://michaelhyatt.com/" target="_blank" class="text-link">Entrepreneur Michael Hyatt</a></li>
                <li>
                  Movies like <a href="https://www.imdb.com/title/tt1285016/" target="_blank">The Social Network</a>,
                  <a href="https://www.imdb.com/title/tt1375666/" target="_blank" class="text-link">Inception</a>,
                  <a href="https://www.imdb.com/title/tt0168122/" target="_blank" class="text-link">Pirates of Silicon Valley</a> and
                  <a href="https://www.imdb.com/title/tt0113243" target="_blank" class="text-link">Hackers</a>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <div class="w-1/4 text-right"><img src="/img/thijs-schalk-body.png" class="inline-block" /></div>
      </div>

      <section class="flex flex-col border-b-2 lg:flex-row lg:border-b-0 mb-3 pb-3">
        <div class="flex w-full lg:w-1/4 mb-2">
          <div class="w-full h-full lg:border-r-2 mr-4">
            <h2 class="font-semibold text-2xl text-gray-700 uppercase">Education</h2>
          </div>
        </div>
        <div class="w-full lg:w-3/4">
          <div class="table-responsive">
            <table class="table">
              <tbody>
                <tr>
                  <td>2002 - 2006</td>
                  <td>
                    VMBO Theoretical<br />
                    <a href="https://www.hetheerenlanden.nl" title="Heerenlanden College in Leerdam" target="_blank" class="text-link">Heerenlanden College</a>
                  </td>
                  <td>Graduated</td>
                </tr>
                <tr>
                  <td>2006 - 2010</td>
                  <td>
                    MBO ICT Manager, Application Development Level 4<br />
                    ICT Academie Utrecht
                  </td>
                  <td>Graduated</td>
                </tr>
                <tr>
                  <td>2010 - 2014</td>
                  <td>
                    HBO Informatica + Minor Web &amp; Multimedia<br />
                    Hogeschool Utrecht
                  </td>
                  <td>Graduated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section class="flex flex-col border-b-2 lg:flex-row lg:border-b-0 mb-3 pb-3">
        <div class="flex w-full lg:w-1/4 mb-2">
          <div class="w-full h-full lg:border-r-2 mr-4">
            <h2 class="font-semibold text-2xl text-gray-700 uppercase">Career</h2>
          </div>
        </div>
        <div class="w-full lg:w-3/4">
          <div class="table-responsive">
            <table class="table">
              <tbody>
                <tr>
                  <td>June 2006 - September 2010</td>
                  <td>Parttime supermarket shell filler/Salesman at the largest supermarket chain in the Netherlands</td>
                </tr>
                <tr>
                  <td>February 2007 - June 2007</td>
                  <td>Internship first line helpdesk employee at a large ground research company</td>
                </tr>
                <tr>
                  <td>September 2008 - January 2009</td>
                  <td>Internship System Administrator at a high school</td>
                </tr>
                <tr>
                  <td>February 2010 - June 2010</td>
                  <td>Internship junior PHP Developer at a website/webshop company</td>
                </tr>
                <tr>
                  <td>August 2010 - January 2014</td>
                  <td>Junior PHP Developer at a website/webshop company</td>
                </tr>
                <tr>
                  <td>February 2014 - October 2016</td>
                  <td>Web Developer at a website/webshop company</td>
                </tr>
                <tr>
                  <td>December 2016 - April 2020</td>
                  <td>Medior Web Developer at a SaaS (test management tool) company</td>
                </tr>
                <tr>
                  <td>May 2020 - October 2021</td>
                  <td>Developer at a SaaS (fully customizable printed products selling platform) company</td>
                </tr>
                <tr>
                  <td>November 2021 - present</td>
                  <td>Developer at a company that creates custom cloud native software</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section class="flex flex-col border-b-2 lg:flex-row lg:border-b-0 mb-3 pb-3">
        <div class="flex w-full lg:w-1/4 mb-2">
          <div class="w-full h-full lg:border-r-2 mr-4">
            <h2 class="font-semibold text-2xl text-gray-700 uppercase">Skills &amp; Knowledge</h2>
          </div>
        </div>
        <div class="w-full lg:w-3/4">
          <h3 class="font-bold text-xl mb-3">Programming languages</h3>
          <div class="table-responsive">
            <table class="table mb-4">
              <thead>
                <tr>
                  <th>Language</th>
                  <th>Tools</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>C#</td>
                  <td>
                    <ul>
                      <li>.NET</li>
                      <li>Entity Framework</li>
                      <li>NuGet Package Manager</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    HTML<br />
                    CSS<br />
                    JavaScript<br />
                    TypeScript
                  </td>
                  <td>
                    <ul>
                      <li>Angular</li>
                      <li>Inertia.js</li>
                      <li>jQuery</li>
                      <li>Materialize CSS</li>
                      <li>Node Package Manager</li>
                      <li>SASS</li>
                      <li>Tailwind CSS</li>
                      <li>Twitter Bootstrap</li>
                      <li>VueJS</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Java</td>
                  <td>
                    <ul>
                      <li>Spring Framework</li>
                      <li>Maven</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>PHP</td>
                  <td>
                    <ul>
                      <li>
                        Content Management Systems
                        <ul>
                          <li>CS-Cart</li>
                          <li>Drupal</li>
                          <li>Wordpress</li>
                        </ul>
                      </li>
                      <li>
                        Frameworks
                        <ul>
                          <li>CodeIgniter</li>
                          <li>Laravel</li>
                          <li>Symfony</li>
                          <li>Zend Framework</li>
                        </ul>
                      </li>
                      <li>
                        Miscellaneous
                        <ul>
                          <li>Composer</li>
                          <li>ORMs: Doctrine, Eloquent</li>
                        </ul>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Python</td>
                  <td>
                    <ul>
                      <li>Django</li>
                      <li>CherryPy</li>
                      <li>SQLAlchemy</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>SQL</td>
                  <td>
                    <ul>
                      <li>MySQL</li>
                      <li>PostgreSQL</li>
                      <li>SQLite</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="flex flex-wrap flex-col lg:flex-row">
            <div class="w-full lg:w-1/3">
              <h3 class="font-bold text-xl mb-2">Methods/Principles</h3>
              <ul class="mb-4">
                <li>Agile</li>
                <li>Clean Architecture</li>
                <li>Clean Code</li>
                <li>Design Patterns</li>
                <li>Domain Driven Design</li>
                <li>Object-Oriented Programming</li>
                <li>Scrum</li>
                <li>Test Driven Development</li>
                <li>UML</li>
              </ul>
            </div>
            <div class="w-full lg:w-1/3">
              <h3 class="font-bold text-xl mb-2">Miscellaneous</h3>
              <ul class="mb-4">
                <li>Adobe Photoshop</li>
                <li>Database design</li>
                <li>Datastructures: CSV, JSON, XML, XSD</li>
                <li>Docker</li>
                <li>Git version control</li>
                <li>JetBrains PhpStorm/PyCharm/Intellij IDEA</li>
                <li>Linux</li>
                <li>Mac OS</li>
                <li>Microsoft Windows</li>
                <li>SEO</li>
                <li>Software architecture</li>
                <li>
                  Soft skills
                  <ul>
                    <li>Create formal documentation</li>
                    <li>Dutch/English</li>
                    <li>Good communicative skills</li>
                    <li>Help junior developers</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-1/3">
              <h3 class="font-bold text-xl mb-2">Webservers</h3>
              <ul class="mb-4">
                <li>Apache</li>
                <li>Nginx</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="flex flex-col lg:flex-row mb-3 pb-3">
        <div class="flex w-full lg:w-1/4 mb-2">
          <div class="w-full h-full lg:border-r-2 mr-4">
            <h2 class="font-semibold text-2xl text-gray-700 uppercase">Realized projects</h2>
          </div>
        </div>
        <div class="w-full lg:w-3/4">
          <p>Here's a selection of projects realized by me over the last couple of years.</p>
          <p>MBO projects: Digital Portfolio, Absence Registration System for schools</p>
          <p>
            A <b>database synchronization module</b> for Interspire Shopping Cart 6. This module synchronizes categories with 10.000 products between 10
            isolated installations.
          </p>
          <p>A <b>payment module</b> for Buckaroo's BetaalGarant for Interspire Shopping Cart 6.</p>
          <p>
            A <b>datafeed module</b> for a CS-Cart 4 multi-store installation with promotional gifts. The module periodically detects whether one of the eleven
            suppliers has updated their data. If so, it validates these CSV and XML files and imports them. This includes descriptions, (custom print)prices and
            stock.
          </p>
          <p>
            A <b>calculation module</b> for a CS-Cart 4 multi-store installation with promotional gifts. This module calculates definitive product price tiers
            by purchase price, discount, margin, print price, startup costs, configuration costs.
          </p>
          <p>
            A <b>shipment export module</b> for CS-Cart 4 which exports details of one or multiple shipments to a single CSV file which can be imported in the
            desktop application of QLS (shipping service provider).
          </p>
          <p>
            A <b>web application</b> built with Laravel 5 to connect people with a handyman to do the job they want done. The visitor enters an address and the
            job they want done. After that I analyze this information and use the Google Geocoding API to match them with the handyman that's located closest to
            them within a radius of X kilometer. Depending on what subscription the handyman has, they'll be matched sooner. Their request is sent automatically
            to the matched handyman.
          </p>
          <p>
            A backend <b>integration module</b> with Atlassian's JIRA in a SaaS product. It allows the user to map fields from the SaaS product to fields in
            JIRA. This way the user can import sprints, user stories and issues into the SaaS product. These are kept in sync, so when a user edit a value in
            the SaaS product it will push this to JIRA and vice versa. This includes comments and attachments. The integration is designed to be so intuitive
            that the user can configure and turn on the integration themselves.
          </p>
          <p>
            A frontend <b>image edit module</b> using Fabric.js. It allows users to edit images in the cloud. This includes adding rectangles, lines, arrows,
            text or draw on the image freely. It also includes anonimizing specific parts of the image and dragging, scaling and deleting objects.
          </p>
          <p>
            If you would like to <b>know more</b> about these or other projects, don't hesitate to
            <NuxtLink to="/contact" class="text-link">contact me</NuxtLink>.
          </p>
        </div>
      </section>
    </div>
  </div>
</template>
