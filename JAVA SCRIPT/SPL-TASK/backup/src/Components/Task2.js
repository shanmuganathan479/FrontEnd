import React from 'react'
import Media from './MediaData'

export default function Task2() {
  return (
    <div>
     <h1>SOCIAL MEDIA DATA'S</h1>

     <h2>YOUTUBE</h2>
     <h2>PRODUCT</h2>



{/* -----------------------------------------------       */}
{/*   Youtube    */}

{/*     
        <p>{Media.Youtube.kind}</p>
        <p>{Media.Youtube.etag}</p>
        <p>{Media.Youtube.nextPageToken}</p>
        <p>{Media.Youtube.regionCode}</p>
        <p>{Media.Youtube.pageInfo.totalResults}</p>
        <p>{Media.Youtube.pageInfo.resultsPerPage}</p>  */}

    
     
{/* -----------------------------------------------       */}
{/* Youtube---->items */}

     {/* {
        Media.Youtube.items.map((v)=>{
            console.log(v)

            return(
               <div>
                <p>{v.kind}</p>
                <p>{v.etag}</p>
                <p>{v.id.kind}</p>
                <p>{v.id.channelId}</p>
                <p>{v.id.videoId}</p>              
               </div>


            )
        })
     } */}
    
{/* -----------------------------------------------       */}




{/* -----------------------------------------------       */}
{/* product Data */}

    {/* {
        Media.Product.map((v)=>{
            console.log(v)
            
            return(
                <div>
                    <p>{v._id.$oid}</p>
                    <p>{v.product_name}</p>
                    <p>{v.quantity}</p>
                    <p>{v.supplier}</p>
                    <p>{v.unit_cost}</p>

                </div>
            )
           
        })
    } */}


 {/* -----------------------------------------------       */}















    </div>
  )
}
