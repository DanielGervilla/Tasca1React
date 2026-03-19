import { Component } from "react";
import coco from "../tasca3/coco.jpg";
function compontnets() {
    return (
        <>
            <Tasca3 imatge = {coco} titol = {"Cocodrile"} text = {"El cocodril és un rèptil semi-aquàtic que es troba en regions tropicals d'Àfrica, Àsia, Amèrica i Austràlia. "} botoshare = {"Share"} botolearnmore = {"Learn More"} />
        </>
       
    )}
function Tasca3({imatge, titol, text, botoshare, botolearnmore}) {
    return (
        <div style={{display:"flex", flexDirection: "column", width: "345px", gap: "10px ", backgroundColor: "#2f2c2c", borderRadius: "5px", paddingBottom: "10px", overflow: "hidden"}}>
                <img src={imatge} style={{width: "100%", height: "200px", objectFit: "cover"}}/>
            <div style={{display: "flex", flexDirection: "column"}}>
                <p style={{fontSize: "20px", fontWeight:"bold", margin: "0", textAlign:"left"}}>{titol}</p>
                <p style={{margin: "0", textAlign:"left"}}>{text}</p>
            </div>
            <div style={{display: "flex", gap: "10px"}}>
                <button style={{backgroundColor: "#3f3d3d", borderRadius: "5px"}}>{botoshare}</button>
                <button style={{backgroundColor: "#3f3d3d", borderRadius: "5px"}}>{botolearnmore}</button>
            </div>
        </div>
        
    )
}
export default compontnets;
