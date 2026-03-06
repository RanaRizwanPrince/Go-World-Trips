import React from 'react'
import TravelTips from "../../Components/TravelTips"
import ContactForm from '../../Components/ContactForm'
const Czech = () => {
  return (
    <>
      <section className="Czech1">
        <div className="container">
          <div className="content">
            <h1>Czech Republic Schengen Tourist Visa</h1>
          </div>
        </div>
        <img src="https://3globaltours.co.uk/wp-content/uploads/2025/08/img8-1.png" className="w-100" />
      </section>
      <section className="France2">
        <div className="container">
          <div className="content">
            <h1>Schengen Tourist Visa</h1>
            <p>Step into a fairy-tale with a Czech Republic Schengen Tourist Visa. From the gothic spires of Prague to the charming spa towns of Bohemia, this country is a masterclass in medieval history and architectural grandeur. This visa is your gateway to wandering through ancient cobblestone streets and exploring world-famous castles while travelling freely across the Schengen Area. </p>
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
                      <p>Completed, printed, and signed by the applicant. Parents or legal guardians must sign on behalf of minors.</p>
                      <h4>Valid Passport</h4>
                      <p>Must be valid 3 months beyond your intended date of departure from the Schengen area; must have been issued within the last 10 years; must contain at least 2 blank pages.</p>
                      <h4>Passport Photos</h4>
                      <p>Two recent (6 months maximum), color photos meeting standard Schengen specifications, taken against a white or light gray background.</p>
                      <h4>Travel Medical Insurance</h4>
                      <p>Valid throughout the entire Schengen area; minimum coverage of €30,000 for medical emergencies, urgent hospital treatment, and repatriation costs.</p>
                      <h4>Proof of Travel (Itinerary)</h4>
                      <p>Confirmed round-trip flight reservations and a detailed travel plan covering all travel and stays within the Czech Republic and other Schengen states.</p>
                      <h4>Proof of Accommodation</h4>
                      <p>Confirmed hotel bookings for the full duration of the stay, or an original official Invitation Letter (Pozvání) from a host in the Czech Republic, verified by the Foreign Police.</p>
                      <h4>Proof of Financial Means</h4>
                      <p>Original bank statements (for the last 3-6 months, stamped by the bank) proving sufficient funds to cover your trip. For stays up to 30 days, the minimum required is 1,565 CZK per person per day. For stays over 30 days, specific lump sum rules apply (e.g., at least 15 times 3,130 CZK).</p>
                      <h4>Proof of Employment / Ties to Home Country</h4>
                      <p>A signed letter from your employer (stating your position, salary, and approved leave dates), business registration documents if self-employed, or a recent letter of enrollment from a school or university if you are a student.</p>
                      <h4>Proof of Legal Residence (If Applicable)</h4>
                      <p>Valid residence permit in your current country of residence (if you are not a national); this permit must be valid 3 months beyond your intended departure from the Schengen area.</p>
                      <h4>Documents for Minors (Under 18)</h4>
                      <p>Original Birth Certificate, a notarized letter of consent signed by both parents or legal guardians (if the child is traveling alone or with only one parent), and copies of both parents’ passports or IDs.</p>
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
                      <h4>Major Cities & Famous Sites</h4>
                      <p>Prague (Prague Castle, Charles Bridge, Old Town Square with the Astronomical Clock, St. Vitus Cathedral, Jewish Quarter, Malá Strana/Lesser Town)</p>
                      <p>Brno (Špilberk Castle, St. Peter and Paul Cathedral, Villa Tugendhat (UNESCO), Cabbage Market/Zelný trh)</p>
                      <p>Karlovy Vary (World-famous spa town, hot springs, elegant colonnades, Moser Glass Museum)</p>
                      <p>Olomouc (Holy Trinity Column (UNESCO), St. Wenceslaus Cathedral, astronomical clock in socialist realism style)</p>
                      <p>České Budějovice (Historic town square, Black Tower, famous for its brewing history (Budweiser Budvar))</p>
                      <h4>Castles, Towns & Historical Regions</h4>
                      <p>Český Krumlov (UNESCO World Heritage Site, well-preserved medieval town, Český Krumlov Castle overlooking the Vltava River)</p>
                      <p>Kutná Hora (UNESCO site, St. Barbara’s Cathedral, Sedlec Ossuary/Bone Church, former silver mining town)</p>
                      <p>Moravia Region (Known for wine production, traditional villages, located in the eastern part of the country)</p>
                      <p>South Bohemia (Region known for its many fishponds, historic towns like Telč (UNESCO) and Jindřichův Hradec)</p>
                      <p>Bohemia Region (The western historical region, home to Prague and the spa triangle)</p>
                      <h4>Specific Must-See Locations</h4>
                      <p>Karlštejn Castle (Magnificent Gothic castle founded by Charles IV, located near Prague, housing imperial crown jewels)</p>
                      <p>Bohemian Switzerland National Park (Dramatic sandstone rock formations, Pravčická Gate (largest natural arch in Europe), beautiful gorges)</p>
                      <p>Terezín Memorial (Former Nazi concentration camp and ghetto, a poignant and historically significant memorial site)</p>
                      <p>Hluboká Castle (Fairytale-like castle with English Gothic Tudor architecture, one of the most beautiful in the country)</p>
                      <p>Lednice-Valtice Cultural Landscape (UNESCO site, vast complex of Baroque and Neo-Gothic palaces, gardens, and lakes in the Moravia region)</p>
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
      </section><h1 className='text-center mt-4'>Fill out Czech Republic Tourist Visa Application Form Online</h1>
      <ContactForm />
    </>
  )
}
export default Czech