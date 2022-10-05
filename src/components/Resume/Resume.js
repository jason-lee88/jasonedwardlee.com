import ResumePDF from "../../resume.pdf";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <object type="application/pdf" data={ResumePDF}>
        PDF
      </object>
    </div>
  );
};

export default Resume;
