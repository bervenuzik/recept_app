import React, { useEffect, useState } from "react";
import styles from "./AboutUsPage.module.css";
import teamData from "../../data/teamData.json";

function AboutUsPage() {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        setTeam(teamData);
    }, []);

    return (
        <div className={styles.aboutUs} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>  
            <h1>Om oss</h1>
            <div className={styles.teamGrid}>
                {team.map((member, index) => (
                    <div key={index} className={styles.profileCard}>
                        <img src={member.image} alt={member.name} className={styles.profileImage} />
                        <h2 className={styles.name}>{member.name}</h2>
                        <h3 className={styles.role}>{member.role}</h3>
                        <a href={`mailto:${member.email}`} className={styles.email}>
                            {member.email}
                        </a>
                        <p className={styles.phone}>{member.phone}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutUsPage;