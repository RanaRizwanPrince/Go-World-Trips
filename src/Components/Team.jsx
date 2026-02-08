import React from "react";
const teamData = [
    {
        name: "Mubeen Juttn",
        role: "Tour Guide",
        img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    }, {
        name: "Robert Fox",
        role: "Founder",
        img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    }, {
        name: "Jane Cooper",
        role: "Co-Founder",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    }, {
        name: "Eleanor Pena",
        role: "Tour Guide",
        img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    },
];
const Team = () => {
    return (
        <section className="team-section">
            <h6>Tour Guides</h6>
            <h1>Our Amazing Team Players</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            <div className="team-container">
                {teamData.map((member, index) => (
                    <div className="team-card" key={index}>
                        <div className="img-box">
                            <img src={member.img} alt={member.name} className="img-fluid" />
                            <div className="social">
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-linkedin-in"></i>
                            </div>
                        </div>
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default Team;