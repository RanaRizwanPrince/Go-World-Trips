import React from 'react'
import TravelTips from "../../Components/TravelTips"
import ContactForm from '../../Components/ContactForm'
const Denmark = () => {
  return (
    <>
      <section className="Denmark1">
        <div className="container">
          <div className="content">
            <h1>Denmark Schengen Tourist Visa</h1>
          </div>
        </div>
        <img src="https://3globaltours.co.uk/wp-content/uploads/2025/08/img8-1.png" className="w-100" />
      </section>
      <section className="France2">
        <div className="container">
          <div className="content">
            <h1>Schengen Tourist Visa</h1>
            <p>Explore the home of 'Hygge' with a Denmark Schengen Tourist Visa. From Copenhagen’s colourful canals to historic Viking heritage, Denmark offers a unique blend of modern design and ancient charm. This visa is your gateway to the world’s happiest cities and seamless travel across the Schengen Area. </p>
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
                      <p>Completed, printed, and signed by the applicant. All applications must be submitted via the online ApplyVisa portal, and the signed cover letter must be submitted in person. Parents or legal guardians must sign on behalf of minors.</p>
                      <h4>Valid Passport</h4>
                      <p>Must be valid 3 months beyond your intended date of departure from the Schengen area; must have been issued within the last 10 years; must contain at least 2 blank pages.</p>
                      <h4>Passport Photos</h4>
                      <p>Two recent (6 months maximum), color photos meeting standard Schengen specifications, against a white or light gray background.</p>
                      <h4>Travel Medical Insurance</h4>
                      <p>Valid throughout the entire Schengen area; minimum coverage of €30,000 for medical emergencies, urgent hospital treatment, and repatriation costs. The insurance must be valid for the entire period of intended stay.</p>
                      <h4>Proof of Travel (Itinerary)</h4>
                      <p>Confirmed round-trip flight reservations and a detailed travel plan covering all travel and stays within Denmark and the broader Schengen area. Do not purchase non-refundable tickets until the visa is approved.</p>
                      <h4>Proof of Accommodation</h4>
                      <p>Confirmed hotel bookings for the full duration of the stay. Alternatively, a Letter of Guarantee/Invitation (Værtsbrev) from a host in Denmark, covering accommodation and/or financial sponsorship.</p>
                      <h4>Proof of Financial Means</h4>
                      <p>Original bank statements (for the last 3 months, stamped by the bank) showing sufficient funds to cover the stay. The minimum required is generally 500 DKK (approx. €67) per day if staying in a hotel, or 350 DKK (approx. €47) per day if staying with a host who provides board and lodging.</p>
                      <h4>Proof of Employment / Ties to Home Country</h4>
                      <p>A signed letter from your employer (on company letterhead, stating position, salary, and approved leave dates), business registration documents if self-employed, or a recent letter of enrollment from a school or university if you are a student.</p>
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
                      <p>Copenhagen (Tivoli Gardens, Nyhavn Harbor, The Little Mermaid Statue, Christiansborg Palace (Parliament), Amalienborg Palace)</p>
                      <p>Aarhus (ARoS Aarhus Art Museum with “Your Rainbow Panorama,” Den Gamle By (The Old Town) Open Air Museum, Moesgaard Museum)</p>
                      <p>Odense (Birthplace of Hans Christian Andersen, H.C. Andersen Museum, charming cobblestone streets)</p>
                      <p>Roskilde (Roskilde Cathedral (UNESCO, burial site of Danish monarchs), Viking Ship Museum)</p>
                      <p>Helsingør (Kronborg Castle (UNESCO, setting for Shakespeare’s Hamlet), charming seaside architecture)</p>
                      <h4>Family Destinations & Theme Parks</h4>
                      <p>Billund (LEGOLAND Billund Resort, the original LEGOLAND park; Lalandia water park)</p>
                      <p>Tivoli Gardens (Historic amusement park in Copenhagen, featuring beautiful gardens, rides, and concert venues)</p>
                      <p>Bakken (The world’s oldest operating amusement park, located just north of Copenhagen)</p>
                      <p>Givskud Zoo Zootopia (Drive-through safari park located near Billund)</p>
                      <h4>Natural Wonders & Coastal Regions</h4>
                      <p>Møns Klint (Spectacular white chalk cliffs on the island of Møn, offering stunning coastal views and hiking)</p>
                      <p>Skagen (Northernmost town in Denmark, where the two seas (Skagerrak and Kattegat) meet, known for its unique light and art history)</p>
                      <p>Wadden Sea National Park (UNESCO World Heritage Site, coastal area known for its unique ecosystem, mudflats, and “Black Sun” bird migration phenomenon)</p>
                      <p>Bornholm Island (Located in the Baltic Sea, known for its picturesque fishing villages, granite cliffs, and round churches)</p>
                      <p>Funen Archipelago (Island region known for Egeskov Castle, quaint villages, and beautiful sailing routes)</p>
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
      <h1 className='text-center mt-4'>Fill out Denmark Tourist Visa Application Form Online</h1>
      <ContactForm />
    </>
  )
}

export default Denmark
