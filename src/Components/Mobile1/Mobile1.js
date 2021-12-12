import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Dropdown } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton'
import JSONDATA from './data.json';
import "./style1.css"
import { useSelector, useDispatch } from 'react-redux';
import { Availablility, NotAvailablility, Samsung, Oppo, Vivo,R1, R2, R3, GB16, GB32, GB64, GB4, GB8, G4, G5 } from '../../features/FilterSlice';

export default function Mobile1() {
    const dispatch = useDispatch();
    const AvailableC=useSelector((state)=>state.Filter);
    return (
    <div>
      <div className="row" style={{ marginTop: "100px" }}>
        <div className="col-2" id="left">
          <h4 style={{ marginTop: "10px", marginBottom: "10px", marginLeft: "10px",}}>FILTERS</h4>
          <div id="lbox1">
            <h6 style={{ margin: "10px" }}>Availability</h6>
            <div>
              <label htmlFor="availablility" >
                <input type="checkbox"  name="Available" onClick={(e)=>{
                    dispatch(Availablility(e.target.checked))
                }}/>
                Available
              </label>
              <br />
              <label htmlFor="availablility">
                <input type="checkbox"  name="notAvailable" onClick={(e)=>{
                    dispatch(NotAvailablility(e.target.checked))
                }}
                />
                Not Available
              </label>
            </div>
          </div>
          <div id="lbox1">
            <h6 style={{ margin: "10px" }}>Brands</h6>
            <div>
              <label htmlFor="Samsung">
                <input type="checkbox"  name="Samsung" onClick={(e)=>{
                    dispatch(Samsung(e.target.checked))
                }}/>
                Samsung
              </label>
              <br />
              <label htmlFor="Oppo">
                <input type="checkbox"  name="Oppo" onClick={(e)=>{
                    dispatch(Oppo(e.target.checked))
                }}/>
                Oppo
              </label>
              <br />
              <label htmlFor="Vivo">
                <input type="checkbox" name="Vivo" onClick={(e)=>{
                    dispatch(Vivo(e.target.checked))
                }}/>
                Vivo
              </label>
              <br />
            </div>
          </div>
          <div id="lbox1">
            <h6 style={{ margin: "10px" }}>Price</h6>
            <div>
              <label htmlFor="R1">
                <input type="checkbox"  name="Price" onClick={(e)=>{
                    dispatch(R1(e.target.checked))
                }}/>
                 Rs10000 - Rs200000
              </label>
              <br />
              <label htmlFor="R2">
              <input type="checkbox"  name="Price" onClick={(e)=>{
                    dispatch(R2(e.target.checked))
                }}/> 
              Rs20000-300000
              </label>
              <br />
              <label htmlFor="R3">
                <input type="checkbox" name="Price" onClick={(e)=>{
                    dispatch(R3(e.target.checked))
                }}/> Rs30000 and above
              </label>
              <br />
            </div>
          </div>
          <div id="lbox1">
            <h6 style={{ margin: "10px" }}>Internal Memory</h6>
            <div>
              <label htmlFor="16GB">
                <input type="checkbox" name="Memory" onClick={(e)=>{
                    dispatch(GB16(e.target.checked))
                }}/> 16 GB
              </label>
              <br />
              <label htmlFor="32GB">
                <input type="checkbox" name="Memory" onClick={(e)=>{
                    dispatch(GB32(e.target.checked))
                }}/> 32 GB
              </label>
              <br />
              <label htmlFor="64GB">
                <input type="checkbox" name="Memory" onClick={(e)=>{
                    dispatch(GB64(e.target.checked))
                }}/> 64 GB
              </label>
              <br />
            </div>
          </div>
          <div id="lbox1">
            <h6 style={{ margin: "10px" }}>RAM</h6>
            <div>
              <label htmlFor="RAM">
                <input type="checkbox" name="RAM" onClick={(e)=>{
                    dispatch(GB4(e.target.checked))
                }}/> 4GB
              </label>
              <br />
              <label htmlFor="RAM">
                <input type="checkbox" name="RAM" onClick={(e)=>{
                    dispatch(GB8(e.target.checked))
                }}/> 8GB
              </label>
              <br />
            </div>
          </div>
          <div id="lbox2">
            <h6 style={{ margin: "10px" }}>Network Connectivity</h6>
            <div>
              <label htmlFor="4G">
                <input type="checkbox" name="NC" onClick={(e)=>{
                    dispatch(G4(e.target.checked))
                }}/> 4G
              </label>
              <br />
              <label htmlFor="5G">
                <input type="checkbox" name="NC" onClick={(e)=>{
                    dispatch(G5(e.target.checked))
                }}/> 5G
              </label>
              <br />
            </div>
          </div>
        </div>
        
        <div className="col-10" id="right" style={{ marginLeft: '-10px' }}>
        <div style={{ marginBottom: '10px', marginLeft: '900px' }}>
          <DropdownButton id="dropdown-basic-button" title="Sort By the Following">
          <Dropdown.Item href="#/action-1">Recommended</Dropdown.Item>
          <Dropdown.Item href="#/action-2">RAM</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Price</Dropdown.Item>
          </DropdownButton>
        </div>
          <div class="row">
            {
              JSONDATA["Mobile"]
              .filter((item)=>{
                   let a=true;let b=true;let p=true;let i=true;let r=true;let n=true;
                   if((AvailableC.AvailablilityChecker===true)&&(AvailableC.NotAvailablilityChecker===false))
                   {
                     a = (item.Availability===true);
                   }
                   if((AvailableC.AvailablilityChecker===false)&&(AvailableC.NotAvailablilityChecker===true))
                   {
                     a = (item.Availability===false);
                   }
                   if((AvailableC.SamsungChecker===true)&&(AvailableC.OppoChecker===false)&&(AvailableC.VivoChecker===false))
                   {
                     b = (item.Brand==="Samsung");
                   }
                   if((AvailableC.SamsungChecker===false)&&(AvailableC.OppoChecker===true)&&(AvailableC.VivoChecker===false))
                   {
                     b = (item.Brand==="Oppo");
                   }
                   if((AvailableC.SamsungChecker===false)&&(AvailableC.OppoChecker===false)&&(AvailableC.VivoChecker===true))
                   {
                     b = (item.Brand==="Vivo");
                   }
                   if((AvailableC.SamsungChecker===true)&&(AvailableC.OppoChecker===true)&&(AvailableC.VivoChecker===false))
                   {
                     b = ((item.Brand==="Samsung")||(item.Brand==="Oppo"));
                   }
                   if((AvailableC.SamsungChecker===false)&&(AvailableC.OppoChecker===true)&&(AvailableC.VivoChecker===true))
                   {
                     b = ((item.Brand==="Vivo")||(item.Brand==="Oppo"));
                   }
                   if((AvailableC.SamsungChecker===true)&&(AvailableC.OppoChecker===false)&&(AvailableC.VivoChecker===true))
                   {
                     b = ((item.Brand==="Vivo")||(item.Brand==="Samsung"));
                   }
                   if((AvailableC.R1Checker===true)&&(AvailableC.R2Checker===false)&&(AvailableC.R3Checker===false))
                   {
                     p = (item.Priceid==="R1");
                   }
                   if((AvailableC.R1Checker===false)&&(AvailableC.R2Checker===true)&&(AvailableC.R3Checker===false))
                   {
                     p = (item.Priceid==="R2");
                   }
                   if((AvailableC.R1Checker===false)&&(AvailableC.R2Checker===false)&&(AvailableC.R3Checker===true))
                   {
                     p = (item.Priceid==="R3");
                   }
                   if((AvailableC.R1Checker===true)&&(AvailableC.R2Checker===true)&&(AvailableC.R3Checker===false))
                   {
                     p = ((item.Priceid==="R1")||(item.Priceid==="R2"));
                   }
                   if((AvailableC.R1Checker===false)&&(AvailableC.R2Checker===true)&&(AvailableC.R3Checker===true))
                   {
                     p = ((item.Priceid==="R3")||(item.Priceid==="R2"));
                   }
                   if((AvailableC.R1Checker===true)&&(AvailableC.R2Checker===false)&&(AvailableC.R3Checker===true))
                   {
                     p = ((item.Priceid==="R3")||(item.Priceid==="R1"));
                   }
                   if((AvailableC.GB16Checker===true)&&(AvailableC.GB32Checker===false)&&(AvailableC.GB64Checker===false))
                   {
                     i = (item.Memory==="16GB");
                   }
                   if((AvailableC.GB16Checker===false)&&(AvailableC.GB32Checker===true)&&(AvailableC.GB64Checker===false))
                   {
                     i = (item.Memory==="32GB");
                   }
                   if((AvailableC.GB16Checker===false)&&(AvailableC.GB32Checker===false)&&(AvailableC.GB64Checker===true))
                   {
                     i = (item.Memory==="64GB");
                   }
                   if((AvailableC.GB16Checker===true)&&(AvailableC.GB32Checker===true)&&(AvailableC.GB64Checker===false))
                   {
                     i = ((item.Memory==="16GB")||(item.Memory==="GB32"));
                   }
                   if((AvailableC.GB16Checker===false)&&(AvailableC.GB32Checker===true)&&(AvailableC.GB64Checker===true))
                   {
                     i = ((item.Memory==="64GB")||(item.Memory==="32GB"));
                   }
                   if((AvailableC.GB16Checker===true)&&(AvailableC.GB32Checker===false)&&(AvailableC.GB64Checker===true))
                   {
                     i = ((item.Memory==="64GB")||(item.Memory==="16GB"));
                   }
                   if((AvailableC.GB4Checker===true)&&(AvailableC.GB8Checker===false))
                   {
                     r = (item.RAM==="4GB");
                   }
                   if((AvailableC.GB4Checker===false)&&(AvailableC.GB8Checker===true))
                   {
                     r = (item.RAM==="8GB");
                   }
                   if((AvailableC.G4Checker===true)&&(AvailableC.G5Checker===false))
                   {
                     n = (item.NetworkConnectivity==="4G");
                   }
                   if((AvailableC.G4Checker===false)&&(AvailableC.G5Checker===true))
                   {
                     n = (item.NetworkConnectivity==="5G");
                   }
                   return (a&&b&&p&&i&&r&&n);
                  })
              .map((val,key)=>{
                  return(
                    <div class="col-4" style={{marginBottom:'30px'}}>
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">{val.Name}</h5>
                          <p class="card-text">
                            Price : {val.Price} <br/>
                            Memory : {val.Memory}
                          </p>
                          <a href="https://www.youtube.com/" class="btn btn-primary">
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
    )
}
