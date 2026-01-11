import "../styles/Resume.css";

export default function Resume() {
  const buttonPDF = () => {
    fetch("images/Ryan-Soto-Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.click();
      });
    });
  };

  return (
      <div className="inner-body-container">
        <div className="page-title">
          <h1 className="vectro vectro-body">
            Resume
          </h1>
        </div>
        <div className="resume-header">
          <h1 className="vectro vectro-body"> Software Developer</h1>
          <button onClick={buttonPDF} className="vectro vectro-body">PDF</button>
        </div>
        <div className="resume-body">
          <h2 className="vectro vectro-body"> Goals</h2>
          <p className="vectro vectro-body">
            After being locked in a server room of a manufacturing environment,
            navigating my way through databases using SQL and Python Pandas for
            the past two years, I find myself yearning for a new challenge. I'm a
            mostly self taught coder hoping to find a team to collaborate with, learn
            from, and grow with.
          </p>
          <h2 className="vectro vectro-body"> Experience</h2>
          <h3 className="vectro vectro-body"> Paradigm Manufacturing</h3>
          <p className="vectro vectro-body">
            Responsible for dozens and dozens of data pulls using MS SQL, APIs,
            OCR(Tesseract), and webscraping; Manipulating data with Python,
            JavaScript, and C#; Serving data in CSVs, Excel, our manufacturing ERP
            software, and our in house apps. I help manage the databases, virtual
            machines, servers, workstations, and other devices.
            I created several in-house applications to facilitate the manufacturing
            process by accelerating the data pipeline, part scheduling, data
            visualization, and providing work center management tools.
            Any and all software development is through me. That includes initial
            communication to understand the clients needs, analyzation of data,
            design, development, testing, implementation, operation, and
            maintenance. It all starts with highly regarded soft skills that makes the
            client feel heard and understood before a project is started.
          </p>
          <h3 className="vectro vectro-body"> Personal Projects</h3>
          <p className="vectro vectro-body">
            Developing a delivery game as a hobby using OOP with vanilla
            JavaScript and HTML/CSS. I assembled
            the art using Tiled for the maps and Aesprite for the characters/objects.
            Check out "PokeDasher" on my website and inspect the code in my
            GitHub
          </p>
          <h3 className="vectro vectro-body"> Freelance Web Developer</h3>
          <p className="vectro vectro-body">
            Web development from the top to the bottom. Front-end and back-end
            implementation of PHP to construct websites and drive data through
            MySQL databases. Designed and built from scratch databases to be
            used managing user data, facilitate book keeping, construct forms and
            receipts, or collect and store feedback.
          </p>
        </div>
      </div>
  );
}
