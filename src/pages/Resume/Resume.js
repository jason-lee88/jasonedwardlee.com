import ResumePDF from "../../resume.pdf";
import "./Resume.css";
import PageTransitionWrapper from "../../components/PageTransitionWrapper/PageTransitionWrapper";

const Resume = () => {
  return (
    <PageTransitionWrapper pageId="resume">
      <div className="resume-container">
        <object type="application/pdf" data={ResumePDF}>
          PDF
        </object>
      </div>
    </PageTransitionWrapper>
  );
};

export default Resume;
