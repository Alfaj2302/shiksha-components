import React, { useState } from "react";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import StudentStatsCard from "../components/StudentStatsCard";
import Header from "../components/Header";
import CustomSelect from "../components/CustomSelect";
import EastIcon from "@mui/icons-material/East";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const StudentDetails = () => {
  const theme = useTheme();

  const [studentData, setStudentData] = useState([
    {
      id: 1,
      dob_title: "Date of Birth",
      dob: "22/12/1998",
      latest_education: "Latest Education",
      grade: "9th Grade",
    },
  ]);

  const renderStatsCard = (label1, value1) => (
    <StudentStatsCard
      label1={label1}
      value1={value1}
      label2={false}
      value2="5"
    />
  );

  return (
    <>
      <Header label1="hi" label2={false} value1="1" value2="2" />
      <Box mt={3} display={"flex"} gap={2} alignItems={"flex-start"}>
        <Link to={"/"}>
          <ArrowBackIcon
            sx={{ color: theme.palette.warning["A200"], fontSize: "large" }}
          />
        </Link>
        <Stack>
          <Typography fontSize={"22px"} variant="h3" fontFamily={"Poppins"}>
            Class A
          </Typography>
        </Stack>
      </Box>
      <Box padding={"10px"}>
        {" "}
        <Card
          sx={{
            bgcolor: theme.palette.secondary.light,
            borderRadius: theme.spacing(3),
            boxShadow: "none",
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  color: theme.palette.warning["A200"],
                  fontSize: "16px",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                }}
                variant="h6"
                gutterBottom
              >
                Attendance Report
              </Typography>
              <Link to={"/history"}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      color: theme.palette.secondary.main,
                      fontSize: "16px",
                      marginRight: "4px",
                    }}
                    variant="h6"
                    gutterBottom
                  >
                    History
                  </Typography>
                  <EastIcon
                    fontSize="inherit"
                    sx={{
                      color: theme.palette.secondary.main,
                      marginBottom: "5px",
                    }}
                  />
                </Box>
              </Link>
            </Box>
            <Typography
              sx={{
                color: theme.palette.text.secondary,
                fontSize: "14px",
                fontWeight: 500,
              }}
              variant="h6"
              gutterBottom
            >
              As of 24 May
            </Typography>
            <Box
              gap={1}
              sx={{
                bgcolor: "transparent",
                justifyContent: "center",
                display: "flex",
                marginTop: 2,
              }}
            >
              {renderStatsCard("Attendance", "78%")}
              {renderStatsCard("Classes Missed", "2")}
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box padding={"10px"}>
        <Card
          sx={{
            bgcolor: theme.palette.secondary.light,
            borderRadius: theme.spacing(3),
            boxShadow: "none",
          }}
        >
          <CardContent>
            <Typography
              sx={{
                color: theme.palette.warning["A200"],
                fontSize: "16px",
                fontWeight: 500,
              }}
              variant="h6"
              gutterBottom
            >
              Test Report
            </Typography>
            <CustomSelect />
            <Box
              sx={{ bgcolor: "transparent", justifyContent: "center" }}
              display="flex"
              gap={1}
              alignItems="center"
            >
              {renderStatsCard("Status", "Passed")}
              {renderStatsCard("Score", "82%")}
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Card
        sx={{
          bgcolor: theme.palette.warning[800],
          height: "600px",
          boxShadow: "none",
          marginTop: "10px",
        }}
      >
        <CardContent>
          <Typography
            sx={{
              color: theme.palette.warning["A200"],
              fontSize: "16px",
              fontWeight: 500,
            }}
            variant="h6"
            gutterBottom
          >
            Basic Details
          </Typography>
        </CardContent>
        <Card
          sx={{
            marginTop: theme.spacing(4),
            height: "688px",
            width: "340px",
            margin: "auto",
            borderRadius: theme.spacing(2),
            boxShadow: "none",
          }}
        >
          {studentData.map((item) => (
            <Box key={item.id} sx={{ padding: "16px" }}>
              <Typography
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                {item.dob_title}
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.text.primary,
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                {item.dob}
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                {item.latest_education}
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.text.primary,
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                {item.grade}
              </Typography>
            </Box>
          ))}
        </Card>
      </Card>
    </>
  );
};

export default StudentDetails;