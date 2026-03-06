import React from 'react'
import TravelTips from "../../Components/TravelTips"
import ContactForm from '../../Components/ContactForm'
const Finland = () => {
  return (
    <>
      <section className="Finland1">
        <div className="container">
          <div className="content">
            <h1>Finland Schengen Tourist Visa</h1>
          </div>
        </div>
        <img src="https://3globaltours.co.uk/wp-content/uploads/2025/08/img8-1.png" className="w-100" />
      </section>
      <section className="France2">
        <div className="container">
          <div className="content">
            <h1>Schengen Tourist Visa</h1>
            <p>Experience the magic of the North with a Finland Schengen Tourist Visa. From the vibrant design of Helsinki to the enchanting Northern Lights of Lapland, Finland is the world’s happiest destination. This visa is your gateway to pristine lakes, snowy forests, and seamless travel across the Schengen Area.</p>
          </div>
        </div>
      </section>
      <section className="collapsbox">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#1" aria-expanded="true" aria-controls="1">
                      Requirements
                    </button>
                  </h2>
                  <div id="1" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <h4>Schengen Application Form</h4>
                      <p>Completed, printed, and signed by the applicant. Parents/guardians must sign for minors.</p>
                      <h4>Valid Passport</h4>
                      <p>Valid 3 months beyond Schengen departure; issued last 10 years; 2 blank pages.</p>
                      <h4>Passport Photos</h4>
                      <p>Two recent (6 months maximum), 35mm x 45mm, Schengen compliant, white background.</p>
                      <h4>Travel Medical Insurance</h4>
                      <p>Valid in all Schengen states; minimum €30,000 coverage for medical and repatriation.</p>
                      <h4>Proof of Travel (Itinerary)</h4>
                      <p>Confirmed round-trip flight reservations and a detailed travel program outlining visits within Spain.</p>
                      <h4>Proof of Accommodation</h4>
                      <p>Confirmed hotel bookings for the entire stay (or official Carta de Invitación from a Spanish resident host).</p>
                      <h4>Proof of Financial Means</h4>
                      <p>Bank statements (last 3-6 months, stamped) proving sufficient funds. Minimum required funds: €118 per person per day, with a total minimum threshold of €1,065 regardless of the trip length.</p>
                      <h4>Proof of Employment / Ties to Home Country</h4>
                      <p>Employer letter (position, salary, approved leave), business documents, or school enrollment proof.</p>
                      <h4>Proof of Legal Residence</h4>
                      <p>Valid residence permit (if non-national); valid 3 months beyond Schengen departure.</p>
                      <h4>Documents for Minors (Under 18)</h4>
                      <p>Birth Certificate, notarized parental consent (if traveling alone/with one parent), and copies of parents’ passports.</p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#2" aria-expanded="false" aria-controls="2">
                      Locations
                    </button>
                  </h2>
                  <div id="2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <h4>01: Major Cities & Cultural Sites</h4>
                      <p>Helsinki (Helsinki Cathedral, Suomenlinna Sea Fortress (UNESCO), Market Square, Temppeliaukio Church (Rock Church), Esplanadi Park)</p>
                      <p>Turku (Finland’s oldest city, Turku Castle, Turku Cathedral, Forum Marinum Maritime Museum, located on the southwest coast)</p>
                      <p>Tampere (Known as the “Manchester of Finland,” Tampere Cathedral, Moomin Museum, Pyynikki Observation Tower and its famous doughnuts)</p>
                      <p>Porvoo (Second oldest city, famous for its picturesque riverside red wooden houses and medieval Old Town)</p>
                      <p>Rovaniemi (Official capital of Lapland, Arktikum museum, Ounasvaara Ski Resort)</p>
                      <h4>02: Arctic & Winter Destinations (Lapland)</h4>
                      <p>Rovaniemi (Santa Claus Village, the official home of Santa Claus where you can cross the Arctic Circle, husky and reindeer safaris)</p>
                      <p>Northern Lights (Aurora Borealis) (Best viewing locations are in Lapland (e.g., Rovaniemi, Levi, Inari, or Kilpisjärvi), especially during dark winter months)</p>
                      <p>Levi & Ylläs (Premier ski resorts, offering downhill skiing, snowboarding, and ice fishing in a stunning Arctic landscape)</p>
                      <p>Inari/Lake Inari (Center of Sámi culture, the Sajos Sámi Cultural Centre, and ideal for Aurora viewing over the frozen lake)</p>
                      <p>Kemi (Home to the unique SnowCastle (rebuilt every winter) and the Sampo Icebreaker tours on the frozen Bothnian Bay)</p>
                      <h4>Natural Wonders & Regions</h4>
                      <p>Finnish Lakeland (Region with over 188,000 lakes, perfect for boating, canoeing, fishing, and relaxing cottage stays, featuring Lake Saimaa)</p>
                      <p>Suomenlinna Sea Fortress (UNESCO site, a historic island fortress easily accessible via ferry from Helsinki Market Square)</p>
                      <p>Nuuksio National Park (Located near Helsinki, offering accessible hiking trails, clear lakes, and deep forests for a quick escape into nature)</p>
                      <p>Archipelago Sea (The largest archipelago in the world by the number of islands, ideal for island hopping, cycling, and sailing tours)</p>
                      <p>Koli National Park (Known for its famous vantage points offering panoramic views over Lake Pielinen, a celebrated landscape in Finnish national art)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <TravelTips />
            </div>
          </div>
        </div>
      </section>
      <h1 className='text-center mt-4'>Fill out Finland Tourist Visa Application Form Online</h1>
      <ContactForm />
    </>
  )
}
export default Finland