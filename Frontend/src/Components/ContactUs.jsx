import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Card, CardContent } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
import axios from "axios";
import { BASE_URL } from "../Api";

const ContactUs = () => {
  //Showing error using react-toastify
  const notifyError = (error) =>
    toast.error(error, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  //Getting data using react-hook-form
  const { register, handleSubmit } = useForm();
  const onSubmitHandler = async (Message) => {
    console.log("Message", Message);
    if (!Message) {
      notifyError("🦄 Fill all the fields!");
    }
    try {
      const response = await axios.post(`${BASE_URL}/message`, Message);
      console.log(response.data);
    } catch (error) {
      notifyError(error.message);
    }
  };

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          backgroundImage: `url('https://img.freepik.com/free-vector/geometric-gradient-futuristic-background_23-2149116406.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727740800&semt=ais_hybrid')`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Card
          style={{
            width: "100%",
            maxWidth: "500px",
            margin: "0 auto",
            padding: "10px 20px 0px 20px",
            border: "1px solid white",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(10px)",
            borderRadius: "50px",
            boxSizing: "border-box",
          }}
        >
          <CardContent>
            <h1
              className="d-flex justify-content-center text-white mb-3 jacques-francois-shadow-regular"
              style={{
                fontSize: "50px",
                wordSpacing: "5px",
              }}
            >
              Contact Us
            </h1>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <Grid container spacing={1.5}>
                {/* First Name */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    label="First Name"
                    {...register("firstName")}
                    placeholder="First Name"
                    variant="outlined"
                    fullWidth
                    type="String"
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "20px",
                        "& fieldset": {
                          borderColor: "white",
                        },
                        "&:hover fieldset": {
                          borderColor: "white",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "white",
                        },
                      },
                      input: { color: "white" },
                    }}
                  />
                </Grid>
                {/* Last Name */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    label="Last Name"
                    {...register("lastName")}
                    placeholder="Last Name"
                    variant="outlined"
                    fullWidth
                    type="String"
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "20px",
                        "& fieldset": {
                          borderColor: "white",
                        },
                        "&:hover fieldset": {
                          borderColor: "white",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "white",
                        },
                      },
                      input: { color: "white" },
                    }}
                  />
                </Grid>
                {/* phone Number */}
                <Grid item xs={12}>
                  <TextField
                    required
                    label="Phone Number"
                    {...register("phoneNumber")}
                    placeholder="Phone No."
                    variant="outlined"
                    fullWidth
                    type="number"
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "20px",
                        "& fieldset": {
                          borderColor: "white",
                        },
                        "&:hover fieldset": {
                          borderColor: "white",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "white",
                        },
                      },
                      input: { color: "white" },
                    }}
                  />
                </Grid>
                {/* Email */}
                <Grid item xs={12}>
                  <TextField
                    required
                    label="Email"
                    {...register("email")}
                    placeholder="Email"
                    variant="outlined"
                    fullWidth
                    type="email"
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "20px",
                        "& fieldset": {
                          borderColor: "white",
                        },
                        "&:hover fieldset": {
                          borderColor: "white",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "white",
                        },
                      },
                      input: { color: "white" },
                    }}
                  />
                </Grid>
                {/* City */}
                <Grid item xs={6}>
                  <TextField
                    required
                    label="City"
                    {...register("City")}
                    placeholder="city"
                    variant="outlined"
                    fullWidth
                    type="String"
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "20px",
                        "& fieldset": {
                          borderColor: "white",
                        },
                        "&:hover fieldset": {
                          borderColor: "white",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "white",
                        },
                      },
                      input: { color: "white" },
                    }}
                  />
                </Grid>
                {/* Province */}
                <Grid item xs={6}>
                  <TextField
                    required
                    label="State/Province"
                    {...register("province")}
                    placeholder="province"
                    variant="outlined"
                    fullWidth
                    type="String"
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "20px",
                        "& fieldset": {
                          borderColor: "white",
                        },
                        "&:hover fieldset": {
                          borderColor: "white",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "white",
                        },
                      },
                      input: { color: "white" },
                    }}
                  />
                </Grid>
                {/* Message */}
                <Grid item xs={12}>
                  <TextField
                    required
                    label="Message"
                    {...register("message")}
                    placeholder="Write your message here..."
                    multiline
                    rows={3}
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{
                      style: { color: "white" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "20px",
                        "& fieldset": {
                          borderColor: "white",
                        },
                        "&:hover fieldset": {
                          borderColor: "white",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "white",
                        },
                      },
                      input: { color: "white" },
                    }}
                  />
                </Grid>
                {/* ContactUs Button */}
                <Grid
                  item
                  xs={12}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <button className="button px-5" type="submit">
                    <span className="jacques-francois-shadow-regular">
                      Submit
                    </span>{" "}
                    <SendIcon className="fs-3" />
                  </button>
                </Grid>
              </Grid>

              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ContactUs;
