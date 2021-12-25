import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import { useState, useRef } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import InputAdornment from "@mui/material/InputAdornment";

function Header() {
  var Username = useRef();
  var UserEmail = useRef();
  var UserPassword = useRef();
  const [helper, setHelper] = useState("Please enter your Username");
  const [error, setError] = useState(false);
  const [focus, setFocus] = useState(false);
  const [helperE, setHelperE] = useState("Please enter your Email");
  const [errorE, setErrorE] = useState(false);
  const [focusE, setFocusE] = useState(false);
  const [helperP, setHelperP] = useState("Please enter your Password");
  const [errorP, setErrorP] = useState(false);
  const [focusP, setFocusP] = useState(false);
  const [password, setPassword] = useState("password");
  const [checkBox, setCheckBox] = useState(false);

  const handlePassword = () => {
    if (password == "password") {
      setPassword("");
    } else setPassword("password");
  };
  const handleFocus = (e) => {
    if (e.target.id == "Email") {
      setHelperE("");
    }
    if (e.target.id == "User") {
      setHelper("");
    }
  };
  const handleBlur = (e) => {
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if (e.target.id == "Email") {
      if (e.target.value == "") {
        setErrorE(true);
        setFocusE(true);
      }
      if (e.target.value.length < 6) {
        setHelperE("Reqiured minimum 6 characters");
        setErrorE(true);
        setFocusE(true);
      } else {
        if(re.test(e.target.value.trim())) {
        setHelperE("");
        setErrorE(false);
        setFocusE(false);
        UserEmail.current = e.target.value;
      }
         else{
          setHelperE("Email not true");
          setErrorE(true);
          setFocusE(true);
         }
    }
    }
    if (e.target.id == "Password") {
      if (e.target.value == "") {
        setHelperP("Reqiured*");
        setErrorP(true);
        setFocusP(true);
      } else {
        setHelperP("");
        setErrorP(false);
        setFocusP(false);
        UserPassword.current = e.target.value;
      }
    }
    if (e.target.id == "User") {
      if (e.target.value == "") {
        setError(true);
        setFocus(true);
      }
      if (e.target.value.length < 6) {
        setHelper("Reqiured minimum 6 characters");
        setError(true);
        setFocus(true);
      } else {
        setHelper("");
        setError(false);
        setFocus(false);
        Username.current = e.target.value;
      }
    }
  };
  const setColor = (e) => {
    if (e.target.value.length <= 5) {
      document.querySelector("#color1").classList.add("bg-[#f10808]");
    }
    if (e.target.value.length > 5 && e.target.value.length < 10) {
      document.querySelector("#color1").classList.add("bg-[#f9630c]");
      document.querySelector("#color2").classList.add("bg-[#f9630c]");
    }
    if (e.target.value.length > 10 && e.target.value.length < 13) {
      document.querySelector("#color1").classList.add("bg-[#f9f10c]");
      document.querySelector("#color2").classList.add("bg-[#f9f10c]");
      document.querySelector("#color3").classList.add("bg-[#f9f10c]");
    }
    if (e.target.value.length > 15) {
      document.querySelector("#color1").classList.add("bg-[#0bf706]");
      document.querySelector("#color2").classList.add("bg-[#0bf706]");
      document.querySelector("#color3").classList.add("bg-[#0bf706]");
      document.querySelector("#color4").classList.add("bg-[#0bf706]");
      setHelperP("Nice");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(checkBox)
    console.log(Username, UserEmail, UserPassword);
    else alert("Checked")
    
  };
  const handleCheckBox= () => {
    if (checkBox) setCheckBox(false)
    else setCheckBox(true)
    };
  return (
    <form  autoComplete="off" onSubmit={handleSubmit}>
      <div className="flex justify-between items-center ">
        <h1 className="text-2xl font-medium">Sign Up</h1>
        <p className="py-1 px-3 border-2  rounded-full  cursor-pointer">x</p>
      </div>
      <div className="text-center py-8 border-b mx-11">
        <Button
          variant="outlined"
          style={{
            color: "#000",
            width: "80%",
            borderRadius: "20px",
          }}
          startIcon={
            <GoogleIcon
              style={{
                fontSize: "25px",
                marginLeft: "-20px",
              }}
            />
          }
          href="https://www.google.com"
        >
          Sign up with Google
        </Button>
      </div>
      <h2 className="mt-3 font-medium text-[20px]">Name</h2>
      <TextField
        id="User"
        variant="outlined"
        label="User name"
        placeholder="Obstuong"
        style={{
          width: "100%",
          marginTop: "20px",
        }}
        error={error}
        required
        focused={focus}
        helperText={helper}
        onFocus={handleFocus}
        onBlur={handleBlur}
      ></TextField>
      <h2 className="mt-3 font-medium text-[20px]">Email</h2>
      <TextField
        id="Email"
        variant="outlined"
        label="Email"
        style={{
          width: "100%",
          marginTop: "20px",
        }}
        error={errorE}
        required
        focused={focusE}
        helperText={helperE}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="example@gmail.com"
      ></TextField>
      <h2 className="mt-3 font-medium text-[20px]">Password</h2>
      <TextField
        id="Password"
        variant="outlined"
        type={password}
        label="Password"
        style={{
          width: "100%",
          marginTop: "20px",
        }}
        error={errorP}
        required
        focused={focusP}
        helperText={helperP}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={setColor}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <VisibilityIcon
                onClick={handlePassword}
                onMouseOver={(e) => {
                  e.target.style.cssText = "cursor:pointer; color:black;";
                }}
                onMouseOut={(e) => {
                  e.target.style.cssText = "";
                }}
              />
            </InputAdornment>
          ),
        }}
      ></TextField>
      <div className="flex  mt-3 justify-between">
        <span
          id="color1"
          className="w-[110px] h-1 bg-[#e7e7e7] rounded-full"
        ></span>
        <span
          id="color2"
          className="w-[110px] h-1 bg-[#e7e7e7] rounded-full"
        ></span>
        <span
          id="color3"
          className="w-[110px] h-1 bg-[#e7e7e7] rounded-full"
        ></span>
        <span
          id="color4"
          className="w-[110px] h-1 bg-[#e7e7e7] rounded-full"
        ></span>
      </div>
      <div className="mt-5  flex gap-3">
        <input type="checkbox" className="w-5 h-5 rounded-3xl" checked={checkBox} onClick={handleCheckBox}/>
        <p className="font-semibold">
          I agree with <span className="text-blue-400">Terms</span> and{" "}
          <span className="text-blue-400">Privacy</span>
        </p>
      </div>
      <div className="w-96 text-center  border-b pb-4">
        <Button
          variant="contained"
          type="submit"
          style={{
            marginTop: "20px",
            width: "320px",
            textAlign: "center",
            borderRadius: "10px",
            background: "#0084ff",
            fontSize: "22px",
          }}
        >
          Sign Up
        </Button>
      </div>
      <span className=""></span>
      <div className="text-center mt-3">
        <p>Already have an account?</p>
        <Button
          variant="outlined"
          style={{
            marginTop: "10px",
            boderRadius: "15px",
          }}
        >
          Login
        </Button>
      </div>
    </form>
  );
}
export default Header;
