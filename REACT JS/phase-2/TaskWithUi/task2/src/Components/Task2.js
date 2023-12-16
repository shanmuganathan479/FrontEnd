import React from 'react'
import Media from './MediaData'
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";



export default function Task2() {
  return (
    <div className='entire'>
     <h1>SOCIAL MEDIA DATA'S</h1>

     <Box> 
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            paddingLeft:5,
            paddingRight:5,    
          }
        }}  
      >
        <Paper elevation={24}
        sx={{
         backgroundColor:"#edd2f3"
        }
        }
        
        > 
        <h2>Youtube</h2>
        <ul>
        <li><strong>kind : </strong>{Media.Youtube.kind}</li>
        <li><strong>etag : </strong>{Media.Youtube.etag}</li>
        <li><strong>nextPageToken : </strong>{Media.Youtube.nextPageToken}</li>
        <li><strong>regionCode : </strong>{Media.Youtube.regionCode}</li>     
        <ul>   <h4>PageInfo:</h4>

        <Paper elevation={24}
         sx={{
             width:300,
             height:60 ,   
             backgroundColor:"#c9ccd5"      
            }
          }
        >
        <ul>
            <ul className='sub'>
        <li><strong>totalResults : </strong>{Media.Youtube.pageInfo.totalResults}</li>
        <li><strong>resultsPerPage : </strong>{Media.Youtube.pageInfo.resultsPerPage}</li> 
        </ul>
        </ul>
        <br/>
        </Paper>
        </ul>
        </ul>
        <br/>

        <Paper elevation={24}
        sx={{
            "& > :not(style)": {
                
                paddingLeft:5,
                paddingRight:5,
                paddingTop:2,
                paddingBottom:5,
                backgroundColor:"#edd2f3"
                          
              }           
           }   
         }
        >  
        {           
        Media.Youtube.items.map((v)=>{
            console.log(v)
            return(
               <div>
             <h3>items</h3>
                <ul>
                <li><strong>kind : </strong>{v.kind}</li>
                <li><strong>etag : </strong>{v.etag}</li>          
                <ul><h4>Id:</h4>
                <Paper elevation={24}       
                sx={{
                    width:350, 
                    height:60 ,
                    backgroundColor:"#c9ccd5"         
                   }
                 }             
                >
                <ul>                       
                <li><strong>kind : </strong>{v.id.kind}</li>              
                <li><strong>videoId : </strong>{v.id.videoId}</li> 
                </ul>      
                </Paper>
                </ul>
                </ul>  
                <hr/>
               </div>
            )
        })
     }         
          </Paper>
        </Paper>



          <Paper elevation={24}
           sx={{
            backgroundColor:"#d9d7f1"
           }
           }
          >          
{
Media.Product.map((v)=>{
  console.log(v)
  return(
      <div>

             <h2>Product</h2>        
           <ul>   
         <ul>
          <h4>Id</h4>
          <Paper elevation={12} 
           
           sx={{
            width:300, 
            height:30 ,
            backgroundColor:"#b6c9f0"
           }
         }        
          >
          <ul>
          <li><strong>_id : </strong>{v._id.$oid}</li> 
          </ul>
          </Paper>
          </ul>
          <br/>
          <li><strong>product_name : </strong>{v.product_name}</li>
          <li><strong>supplier : </strong>{v.supplier}</li>
          <li><strong>quantity : </strong>{v.quantity}</li>
          <li><strong>unit_cost : </strong>{v.unit_cost}</li>
          </ul>
          <hr/>
      </div>
  )
 
})
}
</Paper>      
      </Box>
    </Box>
    </div>
  )
}
