import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import {
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const ElectronicsShop = () => {
  const [product, setproduct] = useState([]);
  // const [seeAll, setseeAll] = useState(false);

  const handlechangeButton = (e) => {
    const buttonId = e.currentTarget.id;

    const filteration = product.filter((item) => {
      return item.id == buttonId;
    });

    filteration.map((item) => {
      return (item.showMore = !item.showMore);
    });

    const deletingId = product.filter((item) => {
      return item.id != buttonId;
    });

    setproduct(deletingId);

    const pushingId = product.map((obj) => ({
      ...obj,
      filteration,
    }));

    setproduct(pushingId);

    console.log("Filteration", filteration);
    console.log("Deleting", deletingId);
    console.log("Pushing", pushingId);
    console.log("Final", product);

    // setseeAll(filteration);
    // setproduct(filteration)

    // setproduct()
  };

  useEffect(() => {
    // console.log("Axios",axios)
    // axios
    //   .get(`https://dummyjson.com/products/${id}`)
    //   .then((res) => {
    //     setproduct(res.data.products)
    //
    //   })
    //   .catch((error) => {
    //     console.log("Error", error);
    //   });
    getMalldata();


  }, []);


  const getMalldata = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");

      const finalResponse = res.data.products.map((obj) => ({
        ...obj,
        showMore: false,
      }));
      setproduct(finalResponse);
      console.log("Final response", finalResponse);
    } catch (error) {
      console.log(error);
    }
  };
  //  console.log("All",product)
  return (
    <div>
      <h1>Indium Mall</h1>
      {/* eslint-disable-next-line */}
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center", flexDirection: "row" }}
      >
        {product?.map((value, index) => {
          // console.log("Checking showMore",value.showMore)
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={11}
                sx={{
                  width: 400,
                  minHeight: 580,
                }}
              >
                <CardHeader title={value.title} />
                <CardMedia
                  component="img"
                  height="200"
                  width="400"
                  image={value.thumbnail}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography>{value.description}</Typography>
                  <Typography
                    sx={{
                      fontSize: 25,
                      fontWeight: 600,
                      position: "relative",
                      right: 100,
                    }}
                  >
                    {value.price} $
                  </Typography>
                  <Typography
                    sx={{ color: "green", position: "relative", bottom: 32 }}
                  >
                    {value.discountPercentage} % off
                  </Typography>
                  <Typography
                    variant="button"
                    sx={{
                      backgroundColor: "green",
                      color: "white",
                      position: "relative",
                      left: 80,
                      bottom: 54,
                    }}
                  >
                    {value.rating}★
                  </Typography>
                  <Typography
                    sx={{ position: "relative", bottom: 44, color: "green" }}
                  >
                    Available ({value.stock})
                  </Typography>
                  <Typography
                    sx={{ fontWeight: 600, position: "relative", bottom: 32 }}
                  >
                    A product by {value.brand}
                  </Typography>
                  <Typography sx={{ position: "relative", bottom: 14 }}>
                    Category- {value.category}
                  </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: "center" }}>
                  <Button
                    id={value.id}
                    size="small"
                    sx={{
                      backgroundColor: "skyblue",
                      color: "black",
                      position: "relative",
                      bottom: "30px",
                    }}
                    onClick={handlechangeButton}
                  >
                    {value.showMore ? "See Less" : "See more pictures"}
                  </Button>
                </CardActions>

                {value.showMore && (
                  <Grid
                    container
                    spacing={2}
                    sx={{ position: "relative", left: 35, bottom: 20 }}
                  >
                    {value.images.map((image, index) => {
                      return (
                        <Grid item sx={{ border: "2px solid purple" }}>
                          <CardMedia
                            component="img"
                            image={image}
                            alt="Paella dish"
                            sx={{
                              width: 100,
                              height: 100,
                            }}
                            key={index}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                )}
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ElectronicsShop;
