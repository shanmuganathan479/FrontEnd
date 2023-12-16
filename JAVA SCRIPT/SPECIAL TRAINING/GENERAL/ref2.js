const hospital = {
        "medications":[{
            "a":[{
                "name":"1",
                "firstname":"kiran",
                "lastname":"kumar"
            }],
            "b":[{
                "name":"2",
                "firstname":"naveed",
                "lastname":"shaik"
            }],
            "c":[{
                "name":"3",
                "firstname":"teja",
                "lastname":"jeju"
            }],
            "d":[{
                "name":"4",
                "firstname":"thilok",
                "lastname":"chand"
            }],
        }]
    }
    
    
    hospital.medications.map((e)=>{
        const arr = Object.values(e);
        arr.map(e=>{
            e.map(({firstname,lastname}) =>{
                console.log(firstname,lastname);
            } )
        })
    })