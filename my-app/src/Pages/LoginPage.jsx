import React from 'react'
import "./LoginPage.css";
import {useRef,useState,useEffect} from 'react';


const LoginPage = () => {
    const userRef=useRef();
    const errRef=useRef();

    const [user,setuser]=useState("");
    const [pwd,setPwd]=useState("");
    const [errMsg,setErrMsg]=useState("");
    const [success,setSuccess]=useState(false);

    useEffect(()=>{
        userRef.current.focus();
    },[]);

    useEffect(()=>{
        setErrMsg("")
    },[user,pwd])

    const handleSubmit=async (e) =>{
        e.preventDefault();
        setuser(" ");
        setPwd(" ");
        setSuccess(true)
        // try {

            // const response = await axios.post(LOGIN_URL,
            //     JSON.stringify({ user, pwd }),
            //     {
            //         headers: { 'Content-Type': 'application/json' },
            //         withCredentials: true
            //     }
            // );
            // console.log(JSON.stringify(response?.data));
            // //console.log(JSON.stringify(response));
            // const accessToken = response?.data?.accessToken;
            // const roles = response?.data?.roles;
            // setAuth({ user, pwd, roles, accessToken });
            
        // } catch (err) {
        //     if (!err?.response) {
        //         setErrMsg('No Server Response');
        //     } else if (err.response?.status === 400) {
        //         setErrMsg('Missing Username or Password');
        //     } else if (err.response?.status === 401) {
        //         setErrMsg('Unauthorized');
        //     } else {
        //         setErrMsg('Login Failed');
        //     }
        //     errRef.current.focus();
        
        // }
    }
  return (
   
    <div className='logincontainer'>
            <>

            <div className="div3">
                            <div style={{ backgroundColor: "#EEEEEE", color: "black" }}><img className="allLogo" src="https://accounts.hindustantimes.com/images/icgl.svg" alt="googleLogo" />Sign in with Google</div>
                            <div style={{ backgroundColor: "#1877f2" }}><img className="allLogo" src="https://accounts.hindustantimes.com/images/icfb.svg" alt="fbLogo" />Sign in with Facebook</div>
                            <div style={{ backgroundColor: "#000000" }}><img className="allLogo" src="https://images.livemint.com/sso/appleid_iconlogo.png" alt="appleLogo" />Sign in with Apple</div>
                        </div>


    {success ? (
        <section>
            <h1>You are logged in!</h1>
            <br/>
            <p>
                <a >Go to Home</a>
            </p>
        </section>
    ):(

            <section>
           <p ref={errRef} className={errMsg ? "errmsg" :"offscreen"}  aria-live="assertive">{errMsg} </p>
           <h1 className='SignIn'>Sign In</h1>
           <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input 
            type="text" 
            id='username'
            ref={userRef}
            autoComplete="off"
            onChange={(e)=>setuser(e.target.value)}
            value={user}
            required
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input 
            type="password" 
            id='password'
            ref={userRef}
            onChange={(e)=>setPwd(e.target.value)}
            value={pwd}
            required
            />
            <br />
            <button id='sign-in-button'>Sign In</button>
           </form>
           <p>
            Need an Account ?<br/>
            <span className='line'>
                {/* {Router link here} */}
                <a href='#'>Sign Up</a>
            </span>
           </p>
            </section>
    )}
    </>

    </div>
  )
}

export default LoginPage
