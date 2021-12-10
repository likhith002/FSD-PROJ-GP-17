import React from "react";
import JSONDATA from './data.json';
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef } from "react";

function Mobile() {
  const[arrayF,setArrayF] = useState(JSONDATA["Mobile"]);
  const AvailableRef=useRef(null);
  const notAvailableRef=useRef(null);
  const SamsungRef=useRef(null);
  const OppoRef=useRef(null);
  const VivoRef=useRef(null);
  const R1Ref=useRef(null);
  const R2Ref=useRef(null);
  const R3Ref=useRef(null);
  const GB16Ref=useRef(null);
  const GB32Ref=useRef(null);
  const GB64Ref=useRef(null);
  const GB4Ref=useRef(null);
  const GB8Ref=useRef(null);
  const G4Ref=useRef(null);
  const G5Ref=useRef(null);
  const getAvailability = (item) =>
  {
    let ans=true;
    if((AvailableRef.current.checked===true)&&(notAvailableRef.current.checked===false))
    {
      ans = (item.Availability);
    }
    if((AvailableRef.current.checked===false)&&(notAvailableRef.current.checked===true))
    {
      ans = (item.Availability===false);
    }
    return ans;
  }
  const getBrand = (item) =>
  {
    let ans=true;
    if((SamsungRef.current.checked===true)&&(OppoRef.current.checked===false)&&(VivoRef.current.checked===false))
    {
      ans = (item.Brand==="Samsung");
    }
    if((SamsungRef.current.checked===false)&&(OppoRef.current.checked===true)&&(VivoRef.current.checked===false))
    {
      ans = (item.Brand==="Oppo");
    }
    if((SamsungRef.current.checked===false)&&(OppoRef.current.checked===false)&&(VivoRef.current.checked===true))
    {
      ans = (item.Brand==="Vivo");
    }
    if((SamsungRef.current.checked===true)&&(OppoRef.current.checked===true)&&(VivoRef.current.checked===false))
    {
      ans = ((item.Brand==="Samsung")||(item.Brand==="Oppo"));
    }
    if((SamsungRef.current.checked===true)&&(OppoRef.current.checked===false)&&(VivoRef.current.checked===true))
    {
      ans = ((item.Brand==="Samsung")||(item.Brand==="Vivo"));
    }
    if((SamsungRef.current.checked===false)&&(OppoRef.current.checked===true)&&(VivoRef.current.checked===true))
    {
      ans = ((item.Brand==="Samsung")||(item.Brand==="Oppo"));
    }
    return ans;
  }
  const getPrice = (item) =>
  {
    let ans=true;
    if((R1Ref.current.checked===true)&&(R2Ref.current.checked===false)&&(R3Ref.current.checked===false))
    {
      ans = (item.Priceid==="R1");
    }
    if((R1Ref.current.checked===false)&&(R2Ref.current.checked===true)&&(R3Ref.current.checked===false))
    {
      ans = (item.Priceid==="R2");
    }
    if((R1Ref.current.checked===false)&&(R2Ref.current.checked===false)&&(R3Ref.current.checked===true))
    {
      ans = (item.Priceid==="R3");
    }
    if((R1Ref.current.checked===true)&&(R2Ref.current.checked===true)&&(R3Ref.current.checked===false))
    {
      ans = ((item.Priceid==="R1")||(item.Priceid==="R2"));
    }
    if((R1Ref.current.checked===true)&&(R2Ref.current.checked===false)&&(R3Ref.current.checked===true))
    {
      ans = ((item.Priceid==="R1")||(item.Priceid==="R3"));
    }
    if((R1Ref.current.checked===false)&&(R2Ref.current.checked===true)&&(R3Ref.current.checked===true))
    {
      ans = ((item.Priceid==="R1")||(item.Priceid==="R2"));
    }
    return ans;
  }
  const getMemory = (item) =>{
    let ans = true;
    if((GB16Ref.current.checked===true)&&(GB32Ref.current.checked===false)&&(GB64Ref.current.checked===false))
    {
      ans = (item.Memory==="16GB");
    }
    if((GB16Ref.current.checked===false)&&(GB32Ref.current.checked===true)&&(GB64Ref.current.checked===false))
    {
      ans = (item.Memory==="32GB");
    }
    if((GB16Ref.current.checked===false)&&(GB32Ref.current.checked===false)&&(GB64Ref.current.checked===true))
    {
      ans = (item.Memory==="64GB");
    }
    if((GB16Ref.current.checked===true)&&(GB32Ref.current.checked===true)&&(GB64Ref.current.checked===false))
    {
      ans = ((item.Memory==="16GB")||(item.Memory==="32GB"));
    }
    if((GB16Ref.current.checked===true)&&(GB32Ref.current.checked===false)&&(GB64Ref.current.checked===true))
    {
      ans = ((item.Memory==="16GB")||(item.Memory==="64GB"));
    }
    if((GB16Ref.current.checked===false)&&(GB32Ref.current.checked===true)&&(GB64Ref.current.checked===true))
    {
      ans = ((item.Memory==="16GB")||(item.Memory==="32GB"));
    }
    return ans;
  }
  const getRAM = (item) =>
  {
    let ans=true;
    if((GB4Ref.current.checked===true)&&(GB8Ref.current.checked===false))
    {
      ans = (item.RAM==="4GB");
    }
    if((GB4Ref.current.checked===false)&&(GB8Ref.current.checked===true))
    {
      ans = (item.RAM==="8GB");
    }
    return ans;
  }
  const getNC = (item) =>
  {
    let ans=true;
    if((G4Ref.current.checked===true)&&(G5Ref.current.checked===false))
    {
      ans = (item.NetworkConnectivity==="4G");
    }
    if((G4Ref.current.checked===false)&&(G5Ref.current.checked===true))
    {
      ans = (item.NetworkConnectivity==="5G");
    }
    return ans;
  }
  const handleDisplay = (e) =>{
    let arrayf=JSONDATA["Mobile"].filter((item)=>
    {
      let availability= getAvailability(item);
      let brand=getBrand(item);
      let price=getPrice(item);
      let memory=getMemory(item);
      let RAM=getRAM(item);
      let NC=getNC(item);
      return ((availability)&&(brand)&&(price)&&(memory)&&(RAM)&&(NC));
    }
    )
    setArrayF(arrayf);
  }
  
  return (
    <div>
      <div className="row" style={{ marginTop: "100px" }}>
        <div className="col-2" id="left">
          <h4 style={{ marginTop: "10px", marginBottom: "10px", marginLeft: "10px",}}>FILTERS</h4>
          <div id="lbox1">
            <h6 style={{ margin: "10px" }}>Availability</h6>
            <div>
              <label htmlFor="availablility" >
                <input type="checkbox" ref={AvailableRef} name="Available" onChange={handleDisplay}/>
                Available
              </label>
              <br />
              <label htmlFor="availablility">
                <input type="checkbox" ref={notAvailableRef} name="notAvailable" onChange={handleDisplay}/>
                Not Available
              </label>
            </div>
          </div>
          <div id="lbox1">
            <h6 style={{ margin: "10px" }}>Brands</h6>
            <div>
              <label htmlFor="Samsung">
                <input type="checkbox" ref={SamsungRef} name="Samsung" onChange={handleDisplay}/>
                Samsung
              </label>
              <br />
              <label htmlFor="Oppo">
                <input type="checkbox" ref={OppoRef} name="Oppo" onChange={handleDisplay}/>
                Oppo
              </label>
              <br />
              <label htmlFor="Vivo">
                <input type="checkbox" ref={VivoRef} name="Vivo" onChange={handleDisplay}/>
                Vivo
              </label>
              <br />
            </div>
          </div>
          <div id="lbox1">
            <h6 style={{ margin: "10px" }}>Price</h6>
            <div>
              <label htmlFor="R1">
                <input type="checkbox" ref={R1Ref} name="Price" onChange={handleDisplay}/>
                 Rs10000 - Rs200000
              </label>
              <br />
              <label htmlFor="R2">
              <input type="checkbox" ref={R2Ref} name="Price" onChange={handleDisplay}/> 
              Rs20000-300000
              </label>
              <br />
              <label htmlFor="R3">
                <input type="checkbox" ref={R3Ref} name="Price" onChange={handleDisplay}/> Rs30000 and above
              </label>
              <br />
            </div>
          </div>
          <div id="lbox1">
            <h6 style={{ margin: "10px" }}>Internal Memory</h6>
            <div>
              <label htmlFor="16GB">
                <input type="checkbox" ref={GB16Ref} name="Memory" onChange={handleDisplay}/> 16 GB
              </label>
              <br />
              <label htmlFor="32GB">
                <input type="checkbox" ref={GB32Ref} name="Memory" onChange={handleDisplay}/> 32 GB
              </label>
              <br />
              <label htmlFor="64GB">
                <input type="checkbox" ref={GB64Ref} name="Memory" onChange={handleDisplay}/> 64 GB
              </label>
              <br />
            </div>
          </div>
          <div id="lbox1">
            <h6 style={{ margin: "10px" }}>RAM</h6>
            <div>
              <label htmlFor="RAM">
                <input type="checkbox" ref={GB4Ref} name="RAM" onChange={handleDisplay}/> 4GB
              </label>
              <br />
              <label htmlFor="RAM">
                <input type="checkbox" ref={GB8Ref} name="RAM" onChange={handleDisplay}/> 8GB
              </label>
              <br />
            </div>
          </div>
          <div id="lbox2">
            <h6 style={{ margin: "10px" }}>Network Connectivity</h6>
            <div>
              <label htmlFor="4G">
                <input type="checkbox" ref={G4Ref} name="NC" onChange={handleDisplay}/> 4G
              </label>
              <br />
              <label htmlFor="5G">
                <input type="checkbox" ref={G5Ref} name="NC" onChange={handleDisplay}/> 5G
              </label>
              <br />
            </div>
          </div>
        </div>
        
        <div className="col-10" id="right" style={{ marginTop: '50px' ,marginLeft: '-10px' }}>
          <div class="row">
            {
              arrayF.map((val,key)=>{
                  return(
                    <div class="col-4" style={{marginBottom:'30px'}}>
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">{val.Name}</h5>
                          <p class="card-text">
                            Price : {val.Price} <br/>
                            Memory : {val.Memory}
                          </p>
                          <a href="#" class="btn btn-primary">
                            Add to wish list
                          </a>
                        </div>
                      </div>
                    </div>
                  );
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
export default Mobile;