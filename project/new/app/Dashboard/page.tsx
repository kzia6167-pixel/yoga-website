"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";


export default function Dashboard() {


  return (

    <div className="min-vh-100 bg-light">


      {/* Navbar */}

     





      {/* Hero Section */}


      <section className="container py-5">


        <div className="row align-items-center">


          <div className="col-lg-6">


            <motion.h1

              initial={{
                opacity:0,
                x:-50
              }}

              animate={{
                opacity:1,
                x:0
              }}

              transition={{
                duration:0.8
              }}

              className="display-4 fw-bold"

              style={{
                color:"#0b5345"
              }}

            >

              Welcome Back
              <br/>
              Yoga Practitioner 🧘

            </motion.h1>



            <p className="text-muted fs-5">

              Improve your flexibility, balance and
              mindfulness with daily yoga practice.

            </p>



            <Link
              href="/Yogabookingform"
              className="btn btn-warning px-4 py-2"
            >

              Start Yoga Session

            </Link>



          </div>





          <div className="col-lg-6 text-center mt-4 mt-lg-0">


            <motion.img

              initial={{
                opacity:0,
                scale:0.7
              }}

              animate={{
                opacity:1,
                scale:1
              }}

              transition={{
                duration:1
              }}

              src="/yoga.jpg"

              className="img-fluid rounded shadow"

              style={{
                maxHeight:"350px"
              }}

            />


          </div>


        </div>


      </section>







      {/* Yoga Classes */}


      <section className="container py-4">


        <h2
          className="fw-bold mb-4"
          style={{
            color:"#0b5345"
          }}
        >
          Yoga Classes
        </h2>



        <div className="row g-4">


          <div className="col-md-4">

            <motion.div

              whileHover={{
                y:-10
              }}

              className="card shadow border-0 p-4"

            >

              <h4>
                Morning Relax Yoga
              </h4>


              <p>
                ⏰ 8:00 AM
              </p>


              <span className="badge bg-success">
                Beginner
              </span>


              <Link
                href="/Yogabookingform"
                className="btn btn-outline-success mt-3"
              >
                Book Now
              </Link>


            </motion.div>


          </div>






          <div className="col-md-4">

            <motion.div

              whileHover={{
                y:-10
              }}

              className="card shadow border-0 p-4"

            >

              <h4>
                Recovery Yoga
              </h4>


              <p>
                ⏰ 11:00 AM
              </p>


              <span className="badge bg-success">
                Intermediate
              </span>


              <Link
                href="/Yogabookingform"
                className="btn btn-outline-success mt-3"
              >
                Book Now
              </Link>


            </motion.div>


          </div>







          <div className="col-md-4">

            <motion.div

              whileHover={{
                y:-10
              }}

              className="card shadow border-0 p-4"

            >

              <h4>
                Power Yoga
              </h4>


              <p>
                ⏰ 5:00 PM
              </p>


              <span className="badge bg-success">
                Advanced
              </span>


              <Link
                href="/Yogabookingform"
                className="btn btn-outline-success mt-3"
              >
                Book Now
              </Link>


            </motion.div>


          </div>



        </div>


      </section>







      {/* Progress Section */}


      <section className="container py-5">


        <div className="card shadow border-0 p-4">


          <h3
            style={{
              color:"#0b5345"
            }}
          >
            Weekly Progress 🌿
          </h3>



          <div
            className="progress mt-3"
            style={{
              height:"25px"
            }}
          >

            <div

              className="progress-bar bg-success"

              style={{
                width:"75%"
              }}

            >

              75% Completed

            </div>


          </div>


        </div>


      </section>







      {/* Footer */}


      <footer

        className="text-center text-white py-4"

        style={{
          background:"#0b5345"
        }}

      >

        © 2026 YogaLife. All Rights Reserved.

      </footer>



    </div>

  );

}