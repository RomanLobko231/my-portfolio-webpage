import cl from './About.module.css'

const About = () => {
    return (
        <div className={cl.container}>
            <div className={cl.photo__container}>
                <img className={cl.photo} src="/pers_photo1.jpg" alt="myself" />
            </div>
            <div className={cl.text__container}>
                <h2 style={{ textAlign: 'center', color: '#2f234f' }}>Nice to meet you!<br /></h2>
                <p className={cl.text}>I'm a young and ambitious Java developer with a lifelong fascination for technology and programming comming from Ukraine. My journey began at a young age when I first joined a club where we made robots and programmed them. We participated in a few competitions with our projects and even were invited at my country's National Talent Show with our robot-courier. This is what ignited a spark inside of me, making programming my main interest for the whole life.<br /><br />When it comes to my personal traits, I would say for sure that 'patient' is what people first think of me. Some may also call me hardworking, but I prefer to think of myself as endlessly curious and consistent in my work. When captivated by a new concept, I can spend days exploring and mastering it. Important to say that collaboration fuels my drive: while working within a team, I really appreciate the chance to both learn from my colleagues and help them as well.<br /><br />My more or less proffessional journey as a programmer begun two years ago, when i joined a Java Core course at my university, where we learned both simple and complex topics. The highlight and my main project there was an E-commerce shop built for Telegram on Java. Although, i had to leave my home country soon after finishing this course, I did not give up and continued learning what i love - computer science. For a period of time i was fascinated by mobile development and became familiar with among others Kotlin, Jetpack Compose and Firebase database, that were used mainly for my own projects. A while ago i decided to concentrate only on Java backend development and learned myself a Spring framework with its main components: Spring Boot, Data JPA, Web. Currently I am improving my skills and learning Spring Security in addition.<br /><br />My biggest dream? To carve my path in the IT industry, seeking real-world experiences and the chance to contribute to something meaningful.<br />I'm open to opportunities and eager to connect.<br /><br />Let's create something incredible together!</p>
            </div>
        </div>
    );
};

export default About;
