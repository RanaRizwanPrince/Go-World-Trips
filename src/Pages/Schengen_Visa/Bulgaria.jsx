import React from 'react'
import TravelTips from "../../Components/TravelTips"
import ContactForm from '../../Components/ContactForm'
const Bulgaria = () => {
  return (
    <>
      <section className="Bulgaria1">
        <div className="container">
          <div className="content">
            <h1>Bulgaria Tourist Visa</h1>
          </div>
        </div>
        <img src="https://3globaltours.co.uk/wp-content/uploads/2025/08/img8-1.png" className="w-100" />
      </section>
      <section className="France2">
        <div className="container">
          <div className="content">
            <h1>Schengen Tourist Visa</h1>
            <p>Explore the hidden gem of the Balkans with a Bulgaria Tourist Visa. From the golden beaches of the Black Sea to the majestic snow-capped peaks of the Balkan Mountains, Bulgaria is a land of rich history and stunning natural beauty. This visa is your gateway to wandering through ancient Roman ruins, visiting the historic Rila Monastery, and enjoying vibrant local traditions. </p>
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
                      <p>The form must be fully completed and signed by the applicant. In the case of a minor, the form must be signed by both parents or the legal guardian(s).</p>
                      <h4>Valid Passport</h4>
                      <p>Your passport must be valid for at least three months beyond your scheduled departure date from the Schengen Area. It must have been issued within the last 10 years and must contain a minimum of two blank visa pages.</p>
                      <h4>Passport Photos</h4>
                      <p>Two recent color photographs (taken within the last six months) are required. Photos must be 35mm x 45mm, Schengen-compliant, and taken against a plain, light-colored background.</p>
                      <h4>Travel Medical Insurance</h4>
                      <p>A valid travel insurance policy is mandatory, covering the entire Schengen Area for your trip duration. The policy must guarantee a minimum medical coverage of €30,000 for emergency care and repatriation.</p>
                      <h4>Proof of Travel (Itinerary)</h4>
                      <p>Confirmed return travel tickets (flights or surface transport bookings) showing entry into and exit from the Schengen Area. A detailed itinerary of your planned tourist visits in Bulgaria is also required.</p>
                      <h4>Proof of Accommodation</h4>
                      <p>Confirmed hotel reservations for the entire stay in Bulgaria and the Schengen Zone. Bookings must be guaranteed and confirmed in the applicant’s name. A prepaid hotel voucher from an accredited travel agency may also be accepted.</p>
                      <h4>Proof of Financial Means</h4>
                      <p>Bank statements covering the last three to six months are required, demonstrating sufficient funds to cover your stay and return. Salary slips (last 3 months) and Income Tax Returns (for the last three years) are often requested to show financial stability.</p>
                      <h4>Proof of Employment / Ties to Home Country</h4>
                      <p>A letter from your employer (on letterhead, signed and stamped) confirming your position, salary, work tenure, and approved leave dates. Self-employed applicants must provide Trade License copies. Students need a letter of enrollment from their university.</p>
                      <h4>Proof of Legal Residence</h4>
                      <p>If applying from a country where you are not a national, a copy of your valid residence permit is required. The permit must remain valid for at least three months after your intended departure from the Schengen Area.</p>
                      <h4>Documents for Minors (Under 18)</h4>
                      <p>A copy of the minor’s Birth Certificate. A notarized Parental Consent Letter from both parents is required if the minor is traveling alone, or from the non-accompanying parent if traveling with one parent.</p>
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
      <h1 className='text-center mt-4'>Fill out Bulgaria Tourist Visa Application Form Online</h1>
      <ContactForm />
    </>
  )
}
export default Bulgaria