"use client";

import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
const Front = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
 
  const [message, setMessage] = useState("");
  const [countryCode,setCountryCode] = useState("+92");
const [contact,setContact] = useState("");

  // call api using axios
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/contactpage", {
        name,
        email,
        contact,
        message,
      });

      console.log(response.data);
      if (response.data.success) {
        alert(response.data.message);
        setName("");
        setEmail("");
        setContact("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* Keyframe Styles for Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }

        /* Hero Header Animation */
        .animated-hero {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Yoga Card & General Card Animation */
        .animated-card {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .animated-card:hover {
          transform: translateY(-5px);
        }

        /* Image Hover Zoom */
        .zoom-image-wrapper {
          overflow: hidden;
          border-radius: 8px;
        }

        .zoom-image-wrapper img {
          transition: transform 0.5s ease;
        }

        .zoom-image-wrapper:hover img {
          transform: scale(1.05);
        }

        /* Text Block Hover Effect */
        .animated-text-block {
          padding: 15px;
          border-radius: 8px;
          transition: transform 0.3s ease, background-color 0.3s ease;
        }

        .animated-text-block:hover {
          transform: translateX(8px);
          background-color: rgba(255, 255, 255, 0.05);
        }

        /* Class Block Animations */
        .animated-class-block {
          padding: 20px;
          border-radius: 8px;
          transition: all 0.3s ease;
          border-left: 3px solid transparent;
        }

        .animated-class-block:hover {
          border-left-color: #7fa985;
          background-color: rgba(127, 169, 133, 0.1);
          transform: translateY(-4px);
        }

        /* Form Inputs Focus Animations */
        .animated-input {
          transition: all 0.25s ease !important;
        }

        .animated-input:focus {
          transform: scale(1.01);
          border-color: #0b5345 !important;
          box-shadow: 0 0 8px rgba(11, 83, 69, 0.25) !important;
        }

        /* Interactive Buttons */
        .animated-btn {
          transition: all 0.3s ease !important;
        }

        .animated-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
          filter: brightness(1.08);
        }

        .animated-btn:active {
          transform: translateY(0);
        }

        /* Floating Accent Text */
        .floating-badge {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Header */}
      <div className="container text-center animated-hero" style={{ marginTop: "50px" }}>
        <div className="row">
          <h3 style={{ color: "#99fa99", fontWeight: "bold", fontSize: "50px" }}>
            Belle & Carrie
          </h3>
          <p style={{ textAlign: "center", color: "white", fontSize: "25px" }}>
            REHABILITATION YOGA
          </p>
        </div>
      </div>

      {/* Hero Yoga Card */}
      <div className="yoga-card-container animated-card">
        <div className="yoga-card">
          <div className="yoga-content" id="home">
            <h1 className="yoga-title">YOGA</h1>
            <div className="yoga-accent-line"></div>
            <p className="yoga-subtitle">For Better Health & Flexibility</p>
          </div>

          <div className="yoga-image-wrapper zoom-image-wrapper">
            <Image
              src="/hh.jpg"
              alt="Yoga"
              width={400}
              height={400}
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <main className="container" style={{ marginTop: "200px" }} id="about">
        <section className="content-side">
          <h1 className="page-title">About</h1>

          <div className="text-block animated-text-block">
            <h2 style={{ color: "#7fa985 " }}>We Have Free Templates for Everyone</h2>
            <p style={{ color: "white" }}>
              Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What's more, they're absolutely free! You can do a lot with them. You can modify them. You can use them to design websites for clients, so long as you agree with the Terms of Use. You can even remove all our links if you want to.
            </p>
          </div>

          <div className="text-block animated-text-block">
            <h2 style={{ color: "#7fa985 " }}>We Have More Templates for You</h2>
            <p style={{ color: "white" }}>
              Looking for more templates? Just browse through all our Free Website Templates and find what you're looking for. But if you don't find any website template you can use, you can try our Free Web Design service and tell us all about it. Maybe you're looking for something different, something special. And we love the challenge of doing something different and something special.
            </p>
          </div>

          <div className="text-block animated-text-block">
            <h2 style={{ color: "#7fa985" }}>Be Part of Our Community</h2>
            <p style={{ color: "white" }}>
              If you're experiencing issues and concerns about this website template, join the discussion on our forum and meet other people in the community who share the same interests with you.
            </p>
          </div>
        </section>

        <div className="image-side"></div>
      </main>

      {/* Classes Section */}
      <div className="container">
        <div className="row">
          <main className="classes-layout" style={{ marginTop: "200px" }} id="classes">
            <section className="classNamees-list">
              <h1 className="page-heading" style={{ color: "#7fa985 " }}>
                classNames
              </h1>

              <div className="className-block animated-class-block">
                <h2 className="className-level" style={{ color: "#7fa985 " }}>
                  Beginners
                </h2>
                <p className="className-description" style={{ color: "white" }}>
                  You can remove any link to our website from this website template, you're free to use this website template without linking back to us.
                </p>
                <div className="className-schedule">
                  <span className="schedule-days" style={{ color: "white" }}>
                    MWF : <span className="schedule-time">8AM to 9AM</span>
                  </span>
                  <span className="schedule-days" style={{ color: "white" }}>
                    TTHS : <span className="schedule-time">10AM-11AM</span>
                  </span>
                </div>
              </div>

              <div className="className-block animated-class-block">
                <h2 className="className-level" style={{ color: "#7fa985 " }}>
                  Intermediate
                </h2>
                <p className="className-description" style={{ color: "white" }}>
                  You can remove any link to our website from this website template, you're free to use this website template without linking back to us.
                </p>
                <div className="className-schedule">
                  <span className="schedule-days" style={{ color: "white" }}>
                    MWF : <span className="schedule-time">10AM-11AM</span>
                  </span>
                  <span className="schedule-days" style={{ color: "white" }}>
                    TTHS : <span className="schedule-time">1PM-2PM</span>
                  </span>
                </div>
              </div>

              <div className="className-block animated-class-block">
                <h2 className="className-level" style={{ color: "#7fa985 " }}>
                  Advanced
                </h2>
                <p className="className-description" style={{ color: "white" }}>
                  You can remove any link to our website from this website template, you're free to use this website template without linking back to us.
                </p>
                <div className="className-schedule">
                  <span className="schedule-days" style={{ color: "white" }}>
                    MWF : <span className="schedule-time">1PM-2PM</span>
                  </span>
                  <span className="schedule-days" style={{ color: "white" }}>
                    TTHS : <span className="schedule-time">8AM to 9AM</span>
                  </span>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Callout Section */}
      <section
        style={{
          backgroundColor: "#0b5345",
          color: "#ffffff",
          padding: "80px 20px",
          fontFamily: "sans-serif",
          textAlign: "center",
          marginTop: "200px",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }} id="blog">
          <p
            className="floating-badge"
            style={{
              color: "#f1c40f",
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontSize: "14px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Rehabilitation Yoga
          </p>
          <h1
            style={{
              fontSize: "48px",
              margin: "0 0 20px 0",
              fontWeight: "bold",
              lineHeight: "1.2",
            }}
          >
            Yoga for Better Health & Flexibility
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#e8f8f5",
              marginBottom: "30px",
            }}
          >
            Specially designed classes to restore balance, recover mobility, and cultivate mindfulness. Start your healing journey with us today.
          </p>
          <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
            
            <Link href="/Login">
            <button
              className="animated-btn"
              style={{
                backgroundColor: "#f1c40f",
                color: "#0b5345",
                border: "none",
                padding: "12px 24px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              Explore Classes
            </button>

</Link>


 
            <Link href="/Login">
            <button
              className="animated-btn"
              style={{
                backgroundColor: "transparent",
                color: "#ffffff",
                border: "2px solid #ffffff",
                padding: "12px 24px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              Learn More
            </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div style={{ backgroundColor: "#f4f9f4", fontFamily: "sans-serif", color: "#333333" }}>
        {/* Header Banner */}
        <section
          style={{
            backgroundColor: "#0b5345",
            color: "#ffffff",
            padding: "60px 20px",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "40px", margin: "0 0 10px 0", color: "#ffffff" }}>Contact Us</h1>
          <p style={{ fontSize: "18px", color: "#e8f8f5", margin: 0 }}>
            Have questions about our rehabilitation programs? We are here to help.
          </p>
        </section>

        {/* Main Content: Form & Info Column */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "60px 20px",
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          {/* Contact Form Block */}
          <div
            className="animated-card"
            style={{
              flex: "1.5",
              minWidth: "320px",
              backgroundColor: "#ffffff",
              padding: "40px",
              borderRadius: "8px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
            }}
            id="contact"
          >
            <h2 style={{ color: "#0b5345", marginTop: 0, marginBottom: "20px" }}>
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: "200px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "bold",
                      marginBottom: "5px",
                      color: "#0b5345",
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control animated-input"
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    required
                    style={{
                      width: "100%",
                      padding: "12px",
                      borderRadius: "4px",
                      border: "1px solid #cccccc",
                      fontSize: "14px",
                      boxSizing: "border-box",
                    }}
                    placeholder="Jane Doe"
                  />
                </div>
                <div style={{ flex: 1, minWidth: "200px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "bold",
                      marginBottom: "5px",
                      color: "#0b5345",
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control animated-input"
                    required
                    style={{
                      width: "100%",
                      padding: "12px",
                      borderRadius: "4px",
                      border: "1px solid #cccccc",
                      fontSize: "14px",
                      boxSizing: "border-box",
                    }}
                    placeholder="jane@example.com"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  />
                </div>
              </div>

             <div>
  <label
    style={{
      display: "block",
      fontSize: "14px",
      fontWeight: "bold",
      marginBottom: "5px",
      color: "#0b5345",
    }}
  >
    Contact No
  </label>

  <div className="d-flex gap-2">

    {/* Country Code */}
    <select
      name="countryCode"
      className="form-control"
      value={countryCode}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        setCountryCode(e.target.value)
      }
      required
      style={{
        width: "120px",
        padding: "12px",
        borderRadius: "4px",
        border: "1px solid #cccccc",
        fontSize: "14px",
        backgroundColor: "#ffffff",
      }}
    >

      <option value="+92">
        🇵🇰 +92
      </option>

      <option value="+91">
        🇮🇳 +91
      </option>

      <option value="+1">
        🇺🇸 +1
      </option>

      <option value="+44">
        🇬🇧 +44
      </option>

      <option value="+971">
        🇦🇪 +971
      </option>

      <option value="+61">
        🇦🇺 +61
      </option>

      <option value="+81">
        🇯🇵 +81
      </option>

    </select>



    {/* Phone Number */}
    <input
      type="tel"
      name="contact"
      className="form-control animated-input"
      value={contact}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setContact(e.target.value)
      }
      required
      placeholder="Enter phone number"
      pattern="[0-9]{10}"
      style={{
        flex: 1,
        padding: "12px",
        borderRadius: "4px",
        border: "1px solid #cccccc",
        fontSize: "14px",
        boxSizing: "border-box",
        backgroundColor: "#ffffff",
      }}
    />

  </div>

</div>




              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "bold",
                    marginBottom: "5px",
                    color: "#0b5345",
                  }}
                >
                  How can we help you?
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="form-control animated-input"
                  value={message}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "4px",
                    border: "1px solid #cccccc",
                    fontSize: "14px",
                    boxSizing: "border-box",
                    resize: "vertical",
                  }}
                  placeholder="Tell us about any physical goals or recovery challenges you are working through..."
                />
              </div>

              <button
                type="submit"
                className="animated-btn"
                style={{
                  backgroundColor: "#f1c40f",
                  color: "#0b5345",
                  border: "none",
                  padding: "14px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Submit Message
              </button>
            </form>
          </div>

          {/* Sidebar Info Column */}
          <div style={{ flex: "1", minWidth: "280px", display: "flex", flexDirection: "column", gap: "30px" }}>
            {/* Studio Details Card */}
            <div
              className="animated-card"
              style={{
                backgroundColor: "#ffffff",
                padding: "30px",
                borderRadius: "8px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                borderTop: "4px solid #16a085",
              }}
            >
              <h3 style={{ color: "#0b5345", marginTop: 0, marginBottom: "15px" }}>Our Studio</h3>
              <p style={{ fontSize: "14px", lineHeight: "1.6", margin: "0 0 10px 0" }}>
                <strong>Address:</strong><br />
                123 Healing Path Way, Suite 100<br />
                Mindfulness City, MC 94043
              </p>
              <p style={{ fontSize: "14px", lineHeight: "1.6", margin: "0 0 10px 0" }}>
                <strong>Email:</strong><br />
                hello@belleandcarrie.com
              </p>
              <p style={{ fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
                <strong>Phone:</strong><br />
                (555) 123-4567
              </p>
            </div>

            {/* Quick FAQ Card */}
            <div
              className="animated-card"
              style={{
                backgroundColor: "#e8f8f5",
                padding: "30px",
                borderRadius: "8px",
                borderLeft: "4px solid #16a085",
              }}
            >
              <h4 style={{ color: "#0b5345", marginTop: 0, marginBottom: "10px" }}>First Time?</h4>
              <p style={{ fontSize: "13px", lineHeight: "1.6", color: "#114a3e", margin: 0 }}>
                If you are undergoing active physical therapy or recovering from recent surgery, please consult your healthcare physician before attending class. We can customize poses specifically to your physician's recovery directives.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#0b5345",
          color: "#ffffff",
          padding: "40px 20px",
          fontFamily: "sans-serif",
          marginTop: "300px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "30px",
          }}
        >
          {/* Column 1: Brand & About */}
          <div style={{ flex: 1, minWidth: "250px" }}>
            <h3 style={{ color: "#f1c40f", marginBottom: "15px" }}>Belle & Carrie</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#e8f8f5" }}>
              Rehabilitation Yoga designed for better health, mindfulness, and flexibility. Join our classes to restore balance to your body and mind.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div style={{ flex: 1, minWidth: "150px" }}>
            <h4 style={{ marginBottom: "15px", borderBottom: "2px solid #16a085", paddingBottom: "5px" }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", padding: 0, fontSize: "14px", lineHeight: 2 }}>
              <li><a href="#" style={{ color: "#e8f8f5", textDecoration: "none" }}>About Us</a></li>
              <li><a href="#" style={{ color: "#e8f8f5", textDecoration: "none" }}>Classes</a></li>
              <li><a href="#" style={{ color: "#e8f8f5", textDecoration: "none" }}>Community Forum</a></li>
              <li><a href="#" style={{ color: "#e8f8f5", textDecoration: "none" }}>Terms of Use</a></li>
            </ul>
          </div>

          {/* Column 3: Schedule */}
          <div style={{ flex: 1, minWidth: "250px" }}>
            <h4 style={{ marginBottom: "15px", borderBottom: "2px solid #16a085", paddingBottom: "5px" }}>
              Class Hours
            </h4>
            <ul style={{ listStyle: "none", padding: 0, fontSize: "13px", lineHeight: 1.8, color: "#e8f8f5" }}>
              <li><strong>Beginners:</strong> MWF 8AM-9AM | TTHS 10AM-11AM</li>
              <li><strong>Intermediate:</strong> MWF 10AM-11AM | TTHS 1PM-2PM</li>
              <li><strong>Advanced:</strong> MWF 1PM-2PM | TTHS 8AM-9AM</li>
            </ul>
          </div>
        </div>

        <hr style={{ border: 0, borderTop: "1px solid #16a085", margin: "30px 0" }} />

        {/* Bottom Bar */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            fontSize: "12px",
            color: "#a3e4d7",
          }}
        >
          <p>&copy; 2026 Belle & Carrie Rehabilitation Yoga. All rights reserved.</p>
          <p>Template customized from YogaMaster.</p>
        </div>
      </footer>
    </div>
  );
};

export default Front;