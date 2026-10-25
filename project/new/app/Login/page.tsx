"use client";

import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Login() {


 


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
 const router = useRouter();


  const login = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();


    try {


      setLoading(true);



      const res = await axios.post(

        "http://localhost:5000/login",

        {
          email,
          password
        }

      );



      alert(res.data.message);
         router.push("/Dashboard");


      if(res.data.success && res.data.token){


        localStorage.setItem(
          "token",
          res.data.token
        );


        localStorage.setItem(
          "user",
          JSON.stringify(res.data.user)
        );


        setEmail("");
        setPassword("");



        // redirect after login
        router.push("/Dashboard");


      }



    } catch(error:any){


      console.log(error);



      if(error.response){

        alert(
          error.response.data.message
        );

      }
      else{

        alert(
          "Backend server is not running"
        );

      }



    }
    finally{

      setLoading(false);

    }


  };




  return (

    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-5">


          <motion.div


            initial={{
              opacity:0,
              rotateX:90,
              y:50
            }}


            animate={{
              opacity:1,
              rotateX:0,
              y:0
            }}


            transition={{
              duration:0.8
            }}


            whileHover={{
              y:-8,
              boxShadow:
              "0 20px 40px rgba(0,0,0,0.2)"
            }}


            className="card p-4 shadow border-0"



          >


            <h3 className="text-center mb-4 fw-bold">
              Login
            </h3>




            <form onSubmit={login}>


              <input

                className="form-control mb-3"

                type="email"

                placeholder="Enter email"

                value={email}

                onChange={
                  (e)=>setEmail(e.target.value)
                }

                required

              />





              <input

                className="form-control mb-3"

                type="password"

                placeholder="Enter password"

                value={password}

                onChange={
                  (e)=>setPassword(e.target.value)
                }

                required

              />





              <motion.button


                type="submit"


                disabled={loading}


                whileHover={{
                  scale:1.05
                }}


                whileTap={{
                  scale:0.95
                }}


                className="btn btn-primary w-100"



              >


                {
                  loading 
                  ? "Logging in..."
                  : "Login"
                }


              </motion.button>



            </form>





            <p className="text-center mt-3">

              Don't have an account?{" "}


              <Link

                href="/Signup"

                className="text-decoration-none fw-bold"

              >

                Signup

              </Link>


            </p>



          </motion.div>



        </div>

      </div>

    </div>

  );

}