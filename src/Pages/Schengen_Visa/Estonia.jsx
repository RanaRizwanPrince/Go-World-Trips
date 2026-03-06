import React from 'react'
import TravelTips from "../../Components/TravelTips"
import ContactForm from '../../Components/ContactForm'
const Estonia = () => {
  return (
    <>
      <section className="Estonia1">
        <div className="container">
          <div className="content">
            <h1>Estonia Schengen Tourist Visa</h1>
          </div>
        </div>
        <img src="https://3globaltours.co.uk/wp-content/uploads/2025/08/img8-1.png" className="w-100" />
      </section>
      <section className="France2">
        <div className="container">
          <div className="content">
            <h1>Schengen Tourist Visa</h1>
            <p>Discover the digital heart of Europe with an Estonia Schengen Tourist Visa. From the medieval charm of Tallinn’s Old Town to its pristine northern forests, Estonia is a unique blend of ancient history and modern innovation. This visa is your gateway to exploring Baltic treasures and travelling freely across the Schengen Area.</p>
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
                      <p>Completed, printed, and signed by the applicant. The form must be filled out online on the official portal before printing. Parents or legal guardians must sign on behalf of minors.</p>
                      <h4>Valid Passport</h4>
                      <p>Must be valid 3 months beyond your intended date of departure from the Schengen area; must have been issued within the last 10 years; must contain at least 2 blank pages.</p>
                      <h4>Passport Photos</h4>
                      <p>Two recent (6 months maximum), color photos meeting standard Schengen specifications, against a white or light gray background.</p>
                      <h4>Travel Medical Insurance</h4>
                      <p>Valid throughout the entire Schengen area; minimum coverage of €30,000 for medical emergencies, urgent hospital treatment, and repatriation costs. The insurance must be valid for the entire period of intended stay.</p>
                      <h4>Proof of Travel (Itinerary)</h4>
                      <p>Confirmed round-trip flight reservations and a detailed tourism itinerary covering all travel and stays within Estonia and the broader Schengen area.</p>
                      <h4>Proof of Accommodation</h4>
                      <p>Confirmed hotel bookings for the full duration of the stay. Alternatively, an invitation from a host if staying with friends or family, including the host’s personal data and address.</p>
                      <h4>Proof of Financial Means</h4>
                      <p>Original bank statements (for the last 3-6 months, stamped by the bank) proving sufficient funds to cover the stay. The required minimum is €70.00 per person per day for the duration of the intended stay in Estonia.</p>
                      <h4>Proof of Employment / Ties to Home Country</h4>
                      <p>A signed letter from your employer (on company letterhead, stating position, salary, and approved leave dates), business registration documents if self-employed, or a recent certificate of enrolment from an educational institution.</p>
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
                      <h4>01: Major Cities & Famous Sites</h4>
                      <p>Tallinn (Old Town (UNESCO World Heritage Site), Toompea Hill, Alexander Nevsky Cathedral, Town Hall Square, Kumu Art Museum)</p>
                      <p>Tartu (Intellectual and cultural hub, University of Tartu, Estonian National Museum, Supilinn (Soup Town) neighborhood)</p>
                      <p>Pärnu (Summer Capital of Estonia, long sandy beaches, spa treatments, beautiful coastal promenade)</p>
                      <p>Narva (Narva Castle/Hermann Castle, located directly across the river from Russia’s Ivangorod Fortress, rich border history)</p>
                      <p>Viljandi (Center of Estonian folk music, Viljandi Castle ruins, picturesque lake views)</p>
                      <p>Haapsalu (Charming seaside resort town, Haapsalu Castle, famed for its wooden architecture and therapeutic mud)</p>
                      <h4>02: Coastal & Island Regions</h4>
                      <p>Saaremaa Island (Largest Estonian island, Kuressaare Castle (medieval fortress), unique meteorite crater site in Kaali)</p>
                      <p>Hiiumaa Island (Second largest island, known for its lighthouses, especially the historic Kõpu Lighthouse, and untouched nature)</p>
                      <p>Muhu Island (Connected to Saaremaa, known for its unique culture, traditional villages, and scenic rural landscape)</p>
                      <p>Kihnu Island (UNESCO recognized cultural space, known for its traditional lifestyle, clothing, and customs maintained by the island women)</p>
                      <h4>03: Natural Wonders & Must-See Locations</h4>
                      <p>Lahemaa National Park (Estonia’s largest national park, featuring forests, bogs (marshes), historical manor houses like Palmse, and rugged coastline)</p>
                      <p>Soomaa National Park (Famous for its large bogs and peat-lands, popular for canoeing and hiking, known for its “fifth season” flooding)</p>
                      <p>Viru Bog Trail (One of Estonia’s most famous and accessible boardwalks, offering scenic views across the bog landscape in Lahemaa)</p>
                      <p>Jägala Waterfall (The widest natural waterfall in Estonia, particularly impressive during the spring thaw or cold winter freezes)</p>
                      <p>Otepää Nature Park (Known as the “winter capital” of Estonia, featuring rolling hills, lakes, and popular skiing resorts)</p>
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
      <h1 className='text-center mt-4'>Fill out Estonia Tourist Visa Application Form Online</h1>
      <ContactForm />
    </>
  )
}

export default Estonia
