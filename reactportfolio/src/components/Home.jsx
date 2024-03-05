import ForoughPhoto from '../images/Forough.png'

function Home(){
    const styles ={
        
        fontStyle: {
            color: "#0B132B"
        },

        imgStyle: {
           boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px 5px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
           
        },

        figureStyle: {
            
               
                textAlign: "center",
              
        }

    }

      
return (
   <div style={styles.fontStyle}>
<figure style={styles.figureStyle}>
<img className="rounded-circle w-25 " src={ForoughPhoto} alt="Forough photo" style={styles.imgStyle}/>
<figcaption className="fs-2 text-center">Welcome to Forough's Portfolio!</figcaption>
</figure>
<p className="fs-5">
Skilled and dedicated Front-end developer with experience across various programming languages, including Java, C++, Ada, MATLAB, JavaScript, HTML, CSS, JQuery, Bootstrap, React and SQL. <br/>
Adept at technical documentation, with a background in research focusing on wireless/mobile networks, intelligent transportation systems, and connected vehicles.
Demonstrated expertise in mathematical analysis, machine learning, and modeling/simulation using various tools and technologies. 
Proficient in GitHub/GitLab, IntelliJ, VS Code, Maven, JUnit, Asciidoc, Markdown, Sphinx, and Antora static site generator. Strong understanding of telecommunication principles and protocols e.g., OSPF/EIGRP/RIP/BGP, wired/wireless WAN/LAN, TCP/UDP.
</p>

</div> 
    );

}

export default Home;