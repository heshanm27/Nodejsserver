import { Paper } from "@material-ui/core";
import React from "react";
import "../css/style.css";
export default function Pdftemplate({ props }) {
  return (
    <div className="main-tamplate">
      <div className="B-name">
        <div className="main-title">
          GALLAGE MOTORS (PVT) LTD.DAMBULLA{" "}
          <span className="hilight-text">0112405235</span> <br />
        </div>
        <div className="sub-title1">
          <span className="hilight-text">Bill No-:</span>{" "}
          <span className="hilight-text">{props.BillNo}</span>
        </div>
        <div className="sub-title">
          <span className="hilight-text">WARRANTY CERTIFICATE</span> for
          repaired Common Rail Injector
        </div>
      </div>
      <form>
        <table className="main-table">
          <tbody>
            <tr>
              <td className="table-data">
                Name :
                <input type="text" defaultValue={props.CustomerName} readOnly />
              </td>
              <td className="table-data left">
                Date of Repair :
                <input defaultValue={props.DateOfRepair} readOnly />
                <br />
              </td>
            </tr>
            <tr>
              <td className="table-data">
                Contact No. :{" "}
                <input defaultValue={props.ContactNo} readOnly type="text" />
              </td>
              <td className="table-data left">
                Warranty Till :{" "}
                <input defaultValue={props.WarrentyTill} readOnly type="text" />
                <br />
              </td>
            </tr>
            <tr>
              <td className="table-data">
                Address :{" "}
                <input defaultValue={props.Address} readOnly type="text" />
              </td>
              <td className="table-data left">
                Technician :{" "}
                <input defaultValue={props.Technician} readOnly type="text" />
                <br />
              </td>
            </tr>
            <tr>
              <td className="table-data">
                Vehicle :{" "}
                <input defaultValue={props.VehicalBrand} readOnly type="text" />
              </td>
              <td className="table-data left">
                Contact No :{" "}
                <input
                  defaultValue={props.TechnicianContactNo}
                  readOnly
                  type="text"
                />
                <br />
              </td>
            </tr>
            <tr>
              <td className="table-data">
                Registration No :{" "}
                <input
                  defaultValue={props.RegistartionNo}
                  readOnly
                  type="text"
                />
              </td>{" "}
              <td className="table-data"></td>
            </tr>
          </tbody>
        </table>
      </form>

      <div className="midle-area">
        <form>
          Engine Code :{" "}
          <input defaultValue={props.EngineCode} readOnly type="text" />
          <br />
          Injector Make :{" "}
          <input defaultValue={props.InjectorMake} readOnly type="text" />
          <br />
          Injector No :{" "}
          <input defaultValue={props.InjectorNo} readOnly type="text" /> <br />
          Injector Code :{" "}
          <input defaultValue={props.InjectorCode} readOnly type="text" />
          <br />
        </form>
      </div>

      <p>New Parts Used:</p>
      <form className="forms">
        <div className="textbox1">
          <div>
            <p>{props.newPartsDetails}</p>
          </div>
        </div>
        <div className="textbox2">
          {" "}
          <img
            className="img"
            src={props.PartImage}
            width="200px"
            height="100px"
            alt=""
            style={{ margin: "20px" }}
          />
        </div>
      </form>
      <br />
      <div className="midle">
        <p>
          The Injector stated above is repaired with new parts mentioned in the
          box no.2 and calibrated to meet Manufactur`s specifications. After the
          repair work, we habe elecrronically tested it to confirm that is in
          perfect condition.
        </p>
        <p>
          {" "}
          We will cover this injector withs{" "}
          <span className="bold-text">3 MONTHS WARRANTY</span> for all{" "}
          <span className="bold-text">our new parts</span> and our rapair work.{" "}
        </p>
        <p>
          {" "}
          <span className="bold-text">Warranty void if,</span>
        </p>
        <table>
          <tr>
            <td>* Dismantle the injector</td>
            <td>* Electrical fault</td>
            <td>* Used of bad Disel</td>
          </tr>
          <tr>
            <td>* Wrong installation</td>
          </tr>
        </table>
      </div>

      <div className="bottomArea">
        <p>
          ඉහත සඳහන් අංක 2 කොටුවෙහි සඳහන් නව කොටස් යොදා අළුත්වැඩියා කර නිෂ්පාදනයේ
          පිරිවිතරයන් <br />
          සපුරාලීමට ක්‍රමාංකනය කර ඇත. අළුත්වැඩියා කිරීමෙන් පසුව, එය උසස්
          තත්ත්වයේ පවතින බව තහවුරු කිරීම සඳහා එය <br />
          ඉලෙක්ට්‍රොනිකව පරීක්ෂා කර ඇත්තෙමු.{" "}
        </p>
        <p>
          අපගේ සියලු nනව කොටස් අළුත්වැඩියා කටයුතු/සේවාව සඳහා මාස 3ක වගකීමක් මේ
          සමහ ලබා දෙන්නෙමු.
        </p>
        <p>
          <span className="bold-text">වගකීම අහෝසි වන අවස්තා:-</span> ඉන්ජෙක්ටර්
          ගැලවීම, ඉලෙක්ට්‍රිකල් දෝෂ, අපිරිසිදු ඩීසල් භාවිතය, වැරදි ලෙස සවි
          කිරීම.
        </p>
      </div>
      <br />
      <p>Signature of Technician:- </p>
    </div>
  );
}
