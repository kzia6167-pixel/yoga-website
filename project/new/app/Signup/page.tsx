"use client";

import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Signup() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const router = useRouter();


  const signup = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();


    try {


      const res = await axios.post(

        "http://localhost:5000/signup",

        {
          email,
          password
        }

      );



      alert(res.data.message);
  router.push("/Login");


      if(res.data.success){

        setEmail("");
        setPassword("");

      }



    } catch(error:any) {


      console.log(error);


      if(error.response){

        alert(error.response.data.message);

      }
      else{

        alert("Backend server is not connected");

      }


    }


  };




  return (

    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-5">


          <motion.div

            initial={{
              opacity:0,
              y:80
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:0.8
            }}

            whileHover={{
              y:-5
            }}

            className="card p-4 shadow"

          >


            <h3 className="text-center mb-4">
              Create Account
            </h3>




            <form onSubmit={signup}>


              <input

                className="form-control mb-3"

                type="email"

                placeholder="Email"

                value={email}

                onChange={
                  (e)=>setEmail(e.target.value)
                }

                required

              />




              <input

                className="form-control mb-3"

                type="password"

                placeholder="Password"

                value={password}

                onChange={
                  (e)=>setPassword(e.target.value)
                }

                required

              />





              <motion.button

                type="submit"

                whileHover={{
                  scale:1.05
                }}

                whileTap={{
                  scale:0.95
                }}

                className="btn btn-primary w-100"

              >

                Signup

              </motion.button>



            </form>




            <p className="text-center mt-3">

              Already have an account?{" "}

              <Link
                href="/Login"
                className="text-decoration-none"
              >
                Login
              </Link>

            </p>



          </motion.div>


        </div>

      </div>

    </div>

  );

}