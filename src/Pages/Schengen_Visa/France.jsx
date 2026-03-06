import React from 'react'
import TravelTips from "../../Components/TravelTips"
import ContactForm from '../../Components/ContactForm'
const France = () => {
    return (
        <>
            <section className="France1">
                <div className="container">
                    <div className="content">
                        <h1>France Tourist Visa</h1>
                    </div>
                </div>
                <img src="https://3globaltours.co.uk/wp-content/uploads/2025/08/img8-1.png" className="w-100" />
            </section>
            <section className="France2">
                <div className="container">
                    <div className="content">
                        <h1>Schengen Tourist Visa</h1>
                        <p>Dreaming of a croissant by the Seine or a stroll through the Louvre? Getting your France Schengen Tourist Visa shouldn’t feel like a marathon. Whether it's the glittering lights of Paris or the sun-drenched shores of the French Riviera, we’ve decoded the paperwork for you. From flawless documentation to expert tips, we ensure your application stands out from the crowd. Let’s turn those 'one day' travel plans into 'today's' boarding pass. Ready to say Bonjour to Europe?</p>
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
                                            <h4>Passport</h4>
                                            <p>Valid for at least 6 months after your intended departure from the Schengen area, and with at least two blank pages.</p>
                                            <h4>Application Forms</h4>
                                            <p>Printed and signed application form, the receipt from the France-Visas website and submitted to France Embassy as well!</p>
                                            <h4>Photos</h4>
                                            <p>Two recent passport-sized photos (3.5 x 4.5 cm), in color, with a plain white background, meeting ISO/IEC standards.</p>
                                            <h4>Travel Medical Insurance</h4>
                                            <p>Valid throughout the entire Schengen Area for the duration of your stay. Minimum coverage of €30,000 for emergency medical care, hospitalization, and repatriation.</p>
                                            <h4>Travel Itinerary</h4>
                                            <p>Confirmed round-trip flight reservations and hotel/accommodation bookings for the entire duration of your stay in the Schengen Area.</p>
                                            <h4>Proof of Accommodation</h4>
                                            <p>Hotel reservations, or an Attestation d’accueil (official invitation/accommodation certificate) if staying with a host.</p>
                                            <h4>Proof of Financial Means</h4>
                                            <p>Bank statements (usually for the last 3-6 months) showing sufficient funds to cover your stay. The minimum required amount per day varies depending on your accommodation status (€32.50 to €120 per day).</p>
                                            <h4>Proof of Employment/Ties to Home Country</h4>
                                            <p>Letter from employer confirming employment, position, salary, and dates of approved leave; or, for students, a letter from the school/university. This demonstrates your intention to return home.</p>
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
                                            <p>Paris (Eiffel Tower, Louvre Museum, Notre-Dame Cathedral, Arc de Triomphe, Montmartre, Palace of Versailles)</p>
                                            <p>Nice (French Riviera / Côte d’Azur, Promenade des Anglais)</p>
                                            <p>Lyon (Gastronomy capital, Vieux Lyon)</p>
                                            <p>Bordeaux (Wine capital, Place de la Bourse)</p>
                                            <p>Marseille (Old Port, Calanques National Park)</p>
                                            <p>Strasbourg (European Capital, La Petite France, Cathedral)</p>
                                            <p>Avignon (Palace of the Popes)</p>
                                            <p>Cannes (Film Festival site)</p>
                                            <h4>02: Historic & Scenic Regions</h4>
                                            <p>Loire Valley (Famous for its Châteaux like Chenonceau and Chambord)</p>
                                            <p>Normandy (Mont Saint-Michel, D-Day Landing Beaches, Étretat Cliffs)</p>
                                            <p>Provence (Lavender fields, historic towns like Aix-en-Provence and Arles, Luberon villages)</p>
                                            <p>French Riviera (Côte d’Azur) (Nice, Cannes, Saint-Tropez)</p>
                                            <p>Alsace (Colmar, Strasbourg, picturesque half-timbered villages)</p>
                                            <p>Dordogne (Medieval villages like Sarlat-la-Canéda, prehistoric caves)</p>
                                            <p>French Alps (Chamonix, Annecy, Grenoble – for mountain scenery and skiing)</p>
                                            <p>Burgundy (Dijon, famous for its wine route)</p>
                                            <h4>03: Specific Must-See Locations</h4>
                                            <p>Mont Saint-Michel (Iconic tidal island abbey in Normandy)</p>
                                            <p>Carcassonne (Walled medieval city in Occitanie)</p>
                                            <p>Giverny (Claude Monet’s famous gardens)</p>
                                            <p>Chamonix (Base for Mont Blanc and Aiguille du Midi)</p>
                                            <p>Annecy (“Venice of the Alps,” with its lake and canals)</p>
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
            <h1 className='text-center mt-4'>Fill out France Tourist Visa Application Form Online</h1>
            <ContactForm />
        </>
    )
}
export default France