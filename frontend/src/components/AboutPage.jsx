// src/components/AboutPage.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function AboutPage() {
  return (
    <Container className="mt-5 text-center">
      <h2 className="fw-bold mb-4 text-primary">About BookBazaar 📚</h2>
      <p className="lead text-muted mb-5">
        BookBazaar is a modern online platform for discovering, buying, and
        sharing your favorite books. Our goal is to make reading easier and more
        enjoyable by bringing all your favorite titles into one digital space.
      </p>

      {/* <Card className="p-4 shadow-lg border-0 rounded-4 mb-5">
        <h4 className="fw-semibold mb-3 text-success">About the Project</h4>
        <p className="text-muted">
          This project was developed as part of a collaborative effort to create
          a user-friendly and efficient e-commerce system for book lovers. The
          platform includes features like personalized recommendations,
          advanced search, and a secure login system for both users and admins.
        </p>
      </Card> */}

      <Card
  className="p-5 shadow-lg border-0 rounded-4 mb-5"
  style={{
    background: "linear-gradient(135deg, #e3f2fd, #fce4ec)",
    borderLeft: "6px solid #007bff",
  }}
>
  <div className="d-flex align-items-center mb-3">
    <span
      role="img"
      aria-label="book"
      style={{ fontSize: "2rem", marginRight: "10px" }}
    >
      💡
    </span>
    <h4 className="fw-semibold text-primary mb-0">About the Project</h4>
  </div>
  <p className="text-dark fs-5">
    BookBazaar was built with the goal of bringing readers and books closer
    through technology. It offers a clean interface, secure login, admin
    dashboard, and AI-powered book suggestions — ensuring a smarter reading
    experience for everyone.
  </p>
</Card>


     {/* <h4 className="fw-semibold text-secondary mb-4">Developed By 👨‍💻</h4>/*}

       {/* Developer Section */}
        <h3 className="fw-semibold text-secondary mb-4">Developed By 👨‍💻</h3>

        <Row className="justify-content-center g-4">
          {[
            { name: "Shubham Chaudhari", role: "Full Stack Developer" },
            { name: "Fameshwari Deshmukh", role: "Full Stack Developer" },
            { name: "Kapil Katte", role: "Full Stack Developer" },
          ].map((dev, index) => (
            <Col key={index} md={3}>
              <Card
                className="p-4 shadow-sm border-0 rounded-4 h-100"
                style={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 18px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 10px rgba(0, 0, 0, 0.05)";
                }}
              >
                <h5 className="fw-bold text-primary">{dev.name}</h5>
                <p className="text-muted mb-0">{dev.role}</p>
              </Card>
            </Col>
          ))}
        </Row>
    </Container>
  );
}

export default AboutPage;


// // src/components/AboutPage.jsx
// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";

// function AboutPage() {
//   return (
//     <div
//       style={{
//         background: "linear-gradient(135deg, #f8f9fa, #e3f2fd)",
//         minHeight: "100vh",
//         paddingTop: "60px",
//         paddingBottom: "60px",
//       }}
//     >
//       <Container className="text-center">
//         <h1
//           className="fw-bold mb-4 text-primary"
//           style={{ fontSize: "2.5rem", letterSpacing: "1px" }}
//         >
//           About <span className="text-dark">BookBazaar 📚</span>
//         </h1>
//         <p className="lead text-muted mb-5 mx-auto" style={{ maxWidth: "750px" }}>
//           BookBazaar is a modern platform for book lovers. Discover, buy, and
//           share books effortlessly while enjoying personalized recommendations
//           powered by technology. Built for simplicity, speed, and satisfaction.
//         </p>

//         {/* About Project Card */}
//         <Card
//           className="p-5 shadow-lg border-0 rounded-4 mb-5 mx-auto"
//           style={{
//             maxWidth: "850px",
//             background: "linear-gradient(135deg, #fce4ec, #e3f2fd)",
//             borderLeft: "6px solid #007bff",
//             transition: "transform 0.3s ease, box-shadow 0.3s ease",
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.transform = "scale(1.03)";
//             e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.transform = "scale(1)";
//             e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
//           }}
//         >
//           <div className="d-flex align-items-center justify-content-center mb-4">
//             <span
//               role="img"
//               aria-label="light"
//               style={{ fontSize: "2.5rem", marginRight: "12px" }}
//             >
//               💡
//             </span>
//             <h3 className="fw-bold text-primary mb-0">About the Project</h3>
//           </div>
//           <p className="text-dark fs-5">
//             BookBazaar is a collaborative e-commerce project crafted to
//             revolutionize book shopping. It combines AI-driven book suggestions,
//             admin control panels, and a secure authentication system — ensuring
//             readers, sellers, and admins all enjoy a seamless experience.
//           </p>
//         </Card>

//         {/* Developer Section */}
//         <h3 className="fw-semibold text-secondary mb-4">Developed By 👨‍💻</h3>

//         <Row className="justify-content-center g-4">
//           {[
//             { name: "Shubham Chaudhari", role: "Full Stack Developer" },
//             { name: "Fameshwari Deshmukh", role: "Full Stack Developer" },
//             { name: "Kapil Katte", role: "Full Stack Developer" },
//           ].map((dev, index) => (
//             <Col key={index} md={3}>
//               <Card
//                 className="p-4 shadow-sm border-0 rounded-4 h-100"
//                 style={{
//                   transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "translateY(-5px)";
//                   e.currentTarget.style.boxShadow =
//                     "0 8px 18px rgba(0, 0, 0, 0.15)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "translateY(0)";
//                   e.currentTarget.style.boxShadow =
//                     "0 4px 10px rgba(0, 0, 0, 0.05)";
//                 }}
//               >
//                 <h5 className="fw-bold text-primary">{dev.name}</h5>
//                 <p className="text-muted mb-0">{dev.role}</p>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default AboutPage;
