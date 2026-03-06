import React from 'react'
import ContactForm from "../../Components/ContactForm"
import TravelTips from '../../Components/TravelTips'
const Spain = () => {
  return (
    <>
      <section className="Spain1">
        <div className="container">
          <div className="content">
            <h1>Spain Schengen Tourist Visa</h1>
          </div>
        </div>
        <img src="https://3globaltours.co.uk/wp-content/uploads/2025/08/img8-1.png" className="w-100" />
      </section>
      <section className="France2">
        <div className="container">
          <div className="content">
            <h1>Schengen Tourist Visa</h1>
            <p>Experience the vibrant soul of the Mediterranean with a Spain Schengen Tourist Visa. From the sun-drenched beaches of the Costa del Sol to the architectural wonders of Barcelona and Madrid’s world-class museums, Spain is a masterpiece of culture and passion. This visa is your gateway to exploring historic plazas and enjoying authentic tapas while travelling freely across the Schengen Area.</p>
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
                      <h4>Barcelona (Catalonia)</h4>
                      <p>La Sagrada Familia (Gaudí’s masterpiece)</p>
                      <p>Park Güell</p>
                      <p>Gothic Quarter (Barri Gòtic)</p>
                      <p>La Rambla</p>
                      <h4>Madrid (Capital)</h4>
                      <p>Prado Museum (Museo Nacional del Prado)</p>
                      <p>Royal Palace of Madrid (Palacio Real)</p>
                      <p>Plaza Mayor</p>
                      <p>El Retiro Park</p>
                      <h4>Seville (Sevilla) (Andalusia)</h4>
                      <p>Real Alcázar de Sevilla (Royal Palace)</p>
                      <p>Plaza de España</p>
                      <p>Seville Cathedral & Giralda</p>
                      <p>Flamenco shows (in Triana district)</p>
                      <h4>Granada (Andalusia)</h4>
                      <p>Alhambra Palace and Generalife Gardens (Moorish fortress)</p>
                      <p>Albaicín (Historic quarter)</p>
                      <h4>Valencia</h4>
                      <p>City of Arts and Sciences (Ciudad de las Artes y las Ciencias)</p>
                      <p>Central Market (Mercado Central)</p>
                      <p>Beaches (Malvarrosa Beach)</p>
                      <h4>San Sebastián (Donostia) (Basque Country)</h4>
                      <p>La Concha Beach</p>
                      <p>Old Town (Parte Vieja) for pintxos (Basque tapas)</p>
                      <p>Mount Igueldo</p>
                      <h4>Balearic Islands (Offshore)</h4>
                      <p>Mallorca (Majorca)</p>
                      <p>Ibiza</p>
                      <p>Menorca</p>
                      <h4>Day Trips/Other Famous Spots</h4>
                      <p>Toledo (Medieval City)</p>
                      <p>Córdoba (Mezquita-Cathedral)</p>
                      <p>Ronda (El Tajo Gorge)</p>
                      <p>Canary Islands (Tenerife, Gran Canaria)</p>
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
      <h1 className='text-center mt-4'>Fill out Spain Tourist Visa Application Form Online</h1>
      <ContactForm />
    </>
  )
}
export default Spain