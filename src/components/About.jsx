function About(){
    const  userName ="noora";
    const major = "Information Technology";
    const skills = "React, JavaScript, HTML & CSS";
    return(
        <>
       <section className="about">
            <p>Hello, I'm {userName}!, a student of {major}.</p>
            <p>I'm a passionate developer  in web technologies, with expertise in {skills}.</p>
        </section>
        </>
        
    );
}
export default About;