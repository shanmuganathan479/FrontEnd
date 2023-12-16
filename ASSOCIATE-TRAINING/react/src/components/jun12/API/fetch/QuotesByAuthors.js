import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const QuotesByAuthors = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
        // .then(res=> console.log("hiiiii",res))
        // .then(res=> console.log(res.json()))

      .then((res) => res.json())
      // .then(data => console.log("shan",data))
      .then((data) => setdata(data.quotes))
      .catch((error) => console.log(error));

    // getQuotes();
  }, []);
  // console.log("Quotes component");

  // const getQuotes = async () => {
  //   try {
  //     const res = await fetch("https://dummyjson.com/quotes");
  //     // console.log("Quotes async await",res)

  //     const quotesData = await res.json();
  //     console.log("Quotes async await", quotesData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div>
      <h1>QuotesByAuthors</h1>
      <TableContainer
        component={Paper}
        sx={{ width: 1000, marginLeft: 25 }}
        elevation={10}
      >
        <Table>
          <TableHead sx={{ backgroundColor: "darkorchid" }}>
            <TableRow>
              <TableCell align="left" sx={{ color: "white" }}>
                Q.No
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                QUOTE
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                AUTHOR
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableCell align="left">{item.id}</TableCell>
                  <TableCell align="left">{item.quote}</TableCell>
                  <TableCell align="left">{item.author}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default QuotesByAuthors;
