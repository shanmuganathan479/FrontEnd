const details = [
  {
    name: "ferrari",
    model: "f85835",
    colors: {
      c1: "red",
      c2: "black",
    },
  },
  {
    name: "ford",
    model: "f1111",
    colors: {
      c1: "red",
      c2: "black",
    },
  },
];

const hesha=async()=>{

  await  details.find((v)=>{
    console.log(v)
  })

}
hesha();