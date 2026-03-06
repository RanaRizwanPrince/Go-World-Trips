import React from 'react'
import TravelTips from "../../Components/TravelTips"
import ContactForm from '../../Components/ContactForm'
const Croatia = () => {
  return (
    <>
      <section className="Croatia1">
        <div className="container">
          <div className="content">
            <h1>Croatia Schengen Tourist Visa</h1>
          </div>
        </div>
        <img src="https://3globaltours.co.uk/wp-content/uploads/2025/08/img8-1.png" className="w-100" />
      </section>
      <section className="France2">
        <div className="container">
          <div className="content">
            <h1>Schengen Tourist Visa</h1>
            <p>Discover the pearl of the Adriatic with a Croatia Schengen Tourist Visa. From the stunning ancient walls of Dubrovnik to the turquoise waters of Plitvice Lakes, Croatia is a breathtaking blend of Mediterranean charm and historic grandeur. This visa is your gateway to exploring sunsoaked islands and vibrant coastal cities while travelling freely across the Schengen Area. </p>
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
                      <p>Two recent (6 months maximum), color photos meeting standard Schengen specifications, taken against a white background.</p>
                      <h4>Travel Medical Insurance</h4>
                      <p>Valid throughout the entire Schengen area; minimum coverage of €30,000 for medical emergencies, urgent hospital treatment, and repatriation costs.</p>
                      <h4>Proof of Travel (Itinerary)</h4>
                      <p>Confirmed round-trip flight reservations and a detailed travel program outlining the intended visits and stops within Croatia and the broader Schengen area.</p>
                      <h4>Proof of Accommodation</h4>
                      <p>Confirmed hotel bookings for the full duration of the stay, or an official, notarized Letter of Guarantee/Invitation from a registered host in Croatia.</p>
                      <h4>Proof of Financial Means</h4>
                      <p>Original bank statements (for the last 3-6 months, stamped by the bank) proving sufficient funds to cover the stay. Minimum required funds are generally €70.00 per person per day (if accommodation is paid) or €100.00 per person per day (if accommodation is not prepaid).</p>
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
                      <h4>Sofia (Capital City)</h4>
                      <p>Alexander Nevsky Cathedral</p>
                      <p>Saint George Rotunda Church</p>
                      <p>Vitosha Boulevard (Shopping and Dining)</p>
                      <p>Serdika Archaeological Complex</p>
                      <h4>Plovdiv</h4>
                      <p>Ancient Roman Theatre</p>
                      <p>Old Town (Architectural Reserve)</p>
                      <p>Kapana Art District</p>
                      <h4>Varna (Black Sea Coast)</h4>
                      <p>Varna Necropolis (Oldest processed gold in the world)</p>
                      <p>Sea Garden (Morska Gradina)</p>
                      <p>Golden Sands (Beach Resort)</p>
                      <h4>Veliko Tarnovo</h4>
                      <p>Tsarevets Fortress (Medieval Citadel)</p>
                      <p>Asen’s Monument</p>
                      <p>Samovodska Charshiya (Crafts Street)</p>
                      <h4>Nessebar (Black Sea Coast)</h4>
                      <p>Ancient City of Nessebar (UNESCO World Heritage Site)</p>
                      <h4>Rila Mountains (Region)</h4>
                      <p>Rila Monastery (Largest and most famous Eastern Orthodox monastery – UNESCO)</p>
                      <p>The Seven Rila Lakes (Glacial lakes)</p>
                      <h4>Bansko</h4>
                      <p>Bulgaria’s most famous ski and winter sports resort (Pirin Mountains)</p>
                      <h4>Kazanlak</h4>
                      <p>Thracian Tomb of Kazanlak (UNESCO)</p>
                      <p>The Rose Valley (Rose oil production region)</p>
                      <h4>Belogradchik</h4>
                      <p>Belogradchik Rocks and Fortress</p>
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
      <h1 className='text-center mt-4'>Fill out Croatia Tourist Visa Application Form Online</h1>
      <ContactForm />
    </>
  )
}
export default Croatia