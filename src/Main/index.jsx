import React, {Component} from "react";
import "./style.scss"

class Main extends Component {
    state = {
      odorosla: 0,
      dzieci: 0,
      mlodziez: 0,
      auto: 0,
      bus: 0,
      energia: 0,
      przyczepa: 0,
      camper: 0,
      namiot2: 0,
      namiot4: 0,
      namiot6: 0,
      motor: 0,
      pies: 0,
      altana: 0,
        numbDays: 0,
        odoroslaPrice: 17,
        dzieciPrice: 10,
        mlodziezPrice: 14,
        autoPrice: 15,
        busPrice: 35,
        energiaPrice: 16,
        przyczepaPrice: 35,
        camperPrice: 40,
        namiot2Price: 14,
        namiot4Price: 18,
        namiot6Price: 30,
        motorPrice: 10,
        piesPrice: 8,
        altanaPrice: 15,
        taxa: 2
    };
    onButtonClickPlus = (e)=> {
         e.preventDefault();
        const Plus = Number(e.target.value) + 1;
        this.setState( {
            [ e.target.name]: Plus
        })
    };
    onButtonClickMinus = (e)=> {
        e.preventDefault();
        let Minus = Number(e.target.value) - 1;
        Minus < 0 ? (this.setState({
            [ e.target.name]: 0
        })) : (this.setState({
            [ e.target.name]: Minus
        }));
    };
    render() {
        const {odorosla, dzieci, mlodziez, auto, bus, energia, przyczepa, camper, namiot2, namiot4, namiot6,motor, pies, altana ,taxa, numbDays} = this.state;
        const {odoroslaPrice, dzieciPrice, mlodziezPrice, autoPrice, busPrice, energiaPrice, przyczepaPrice, camperPrice, namiot2Price, namiot4Price, namiot6Price,motorPrice, piesPrice, altanaPrice}=this.state;
        const dayPrice = odorosla*odoroslaPrice + dzieci*dzieciPrice + mlodziez*mlodziezPrice + auto*autoPrice + bus*busPrice + energia*energiaPrice + przyczepa*przyczepaPrice + camper*camperPrice + namiot2*namiot2Price + namiot4*namiot4Price + namiot6*namiot6Price +motor*motorPrice+ pies*piesPrice+ altana*altanaPrice+((odorosla+dzieci+mlodziez)*taxa);
        const allPrice= dayPrice*numbDays;
        return (
            <div className="borderBox">
            <div style={{fontSize:'xx-large', margin : '50px 0 0 0', textAlign: 'center', paddingTop: '20px', color: 'white'}}>Kalkulator pobytu 2019</div>
            <div> </div>
            <section className="container">
            <div>
            <table className="zui-table">
                <tbody>
                <tr>
                    <td>{' osoba dorosła'.toUpperCase()}</td>
                    <td ><strong>{odoroslaPrice} zł</strong></td>
                    <td > <button onClick={this.onButtonClickMinus.bind(this)} name="odorosla" value={odorosla}> - </button> </td>
                    <td> {odorosla}</td>
                    <td > <button onClick={this.onButtonClickPlus.bind(this)} name="odorosla" value={odorosla}> + </button> </td>
                </tr>
                <tr>
                    <td> {'dziecko do lat 10'.toUpperCase()}</td>
                    <td ><strong>{dzieciPrice} zł </strong></td>
                    <td>  <button onClick={this.onButtonClickMinus.bind(this)} name="dzieci" value={dzieci}> - </button> </td>
                    <td>{dzieci} </td>
                    <td> <button onClick={this.onButtonClickPlus.bind(this)} name="dzieci" value={dzieci}> + </button> </td>
                </tr>
                <tr>
                    <td>MŁODZIEŹ / STUDENT</td>
                    <td ><strong> {mlodziezPrice} zł</strong></td>
                    <td>  <button onClick={this.onButtonClickMinus.bind(this)} name="mlodziez" value={mlodziez}> - </button> </td>
                    <td>{mlodziez} </td>
                    <td> <button onClick={this.onButtonClickPlus.bind(this)} name="mlodziez" value={mlodziez}> + </button> </td>
                </tr>
                <tr>
                    <td> SAMOCHÓD</td>
                    <td ><strong>{autoPrice} zł </strong></td>
                    <td>  <button onClick={this.onButtonClickMinus.bind(this)} name="auto" value={auto}> - </button> </td>
                    <td>{auto} </td>
                    <td> <button onClick={this.onButtonClickPlus.bind(this)} name="auto" value={auto}> + </button> </td>
                </tr>
                <tr>
                    <td>BUS /VAN SYPIALNY</td>
                    <td ><strong>{busPrice} zł </strong></td>
                    <td>  <button onClick={this.onButtonClickMinus.bind(this)} name="bus" value={bus}> - </button> </td>
                    <td>{bus} </td>
                    <td> <button onClick={this.onButtonClickPlus.bind(this)} name="bus" value={bus}> + </button> </td>
                </tr>
                <tr>
                    <td>ENERGIA</td>
                    <td ><strong>{energiaPrice} zł</strong></td>
                    <td>  <button onClick={this.onButtonClickMinus.bind(this)} name="energia" value={energia}> - </button> </td>
                    <td>{energia} </td>
                    <td> <button onClick={this.onButtonClickPlus.bind(this)} name="energia" value={energia}> + </button> </td>
                </tr>
                <tr>
                    <td> PRZYCZEPA Z PRZEDSIONKIEM</td>
                    <td ><strong> {przyczepaPrice} zł</strong></td>
                    <td>  <button onClick={this.onButtonClickMinus.bind(this)} name="przyczepa" value={przyczepa}> - </button> </td>
                    <td>{przyczepa} </td>
                    <td> <button onClick={this.onButtonClickPlus.bind(this)} name="przyczepa" value={przyczepa}> + </button> </td>
                </tr>
                <tr>
                    <td> CAMPER</td>
                    <td ><strong>{camperPrice} zł </strong></td>
                    <td>  <button onClick={this.onButtonClickMinus.bind(this)} name="camper" value={camper}> - </button> </td>
                    <td>{camper} </td>
                    <td> <button onClick={this.onButtonClickPlus.bind(this)} name="camper" value={camper}> + </button> </td>
                </tr>
                <tr>
                    <td>NAMIOT 2 OSOBOWY</td>
                    <td ><strong>{namiot2Price} zł </strong></td>
                    <td>  <button onClick={this.onButtonClickMinus.bind(this)} name="namiot2" value={namiot2}> - </button> </td>
                    <td>{namiot2} </td>
                    <td> <button onClick={this.onButtonClickPlus.bind(this)} name="namiot2" value={namiot2}> + </button> </td>
                </tr>
                <tr>
                    <td>NAMIOT 4 OSOBOWY</td>
                    <td ><strong>{namiot4Price} zł </strong></td>
                    <td>  <button onClick={this.onButtonClickMinus.bind(this)} name="namiot4" value={namiot4}> - </button> </td>
                    <td>{namiot4} </td>
                    <td> <button onClick={this.onButtonClickPlus.bind(this)} name="namiot4" value={namiot4}> + </button> </td>
                </tr>
                <tr>
                    <td>NAMIOT 5/6 OSOBOWY</td>
                    <td ><strong>{namiot6Price} zł </strong></td>
                    <td>  <button onClick={this.onButtonClickMinus.bind(this)} name="namiot6" value={namiot6}> - </button> </td>
                    <td>{namiot6} </td>
                    <td> <button onClick={this.onButtonClickPlus.bind(this)} name="namiot6" value={namiot6}> + </button> </td>
                </tr>
                <tr>
                    <td>MOTOCYKL</td>
                    <td ><strong>{motorPrice} zł</strong></td>
                    <td>  <button onClick={this.onButtonClickMinus.bind(this)} name="motor" value={motor}> - </button> </td>
                    <td>{motor} </td>
                    <td> <button onClick={this.onButtonClickPlus.bind(this)} name="motor" value={motor}> + </button> </td>
                </tr>
                <tr>
                    <td> PIES </td>
                    <td ><strong>{piesPrice} zł </strong></td>
                    <td>  <button onClick={this.onButtonClickMinus.bind(this)} name="pies" value={pies}> - </button> </td>
                    <td>{pies} </td>
                    <td> <button onClick={this.onButtonClickPlus.bind(this)} name="pies" value={pies}> + </button> </td>
                </tr>
                <tr>
                    <td>ALTANKA/PAWILON OGRODOWY</td>
                    <td ><strong>{altanaPrice} zł</strong></td>
                    <td>  <button onClick={this.onButtonClickMinus.bind(this)} name="altana" value={altana}> - </button> </td>
                    <td>{altana} </td>
                    <td> <button onClick={this.onButtonClickPlus.bind(this)} name="altana" value={altana}> + </button> </td>
                </tr>
                <tr>
                    <td>ILOŚĆ DNI POBYTU ?</td>
                    <td > </td>
                    <td>  <button onClick={this.onButtonClickMinus.bind(this)} name="numbDays" value={numbDays}> - </button> </td>
                    <td>{numbDays} </td>
                    <td> <button onClick={this.onButtonClickPlus.bind(this)} name="numbDays" value={numbDays}> + </button> </td>
                </tr>
                <tr>
                    <td><em>Opłata miejscowa za osobę </em></td>
                    <td colSpan={4}><strong>&nbsp;  {taxa} zł </strong></td>
                </tr>
                <tr>
                    <td>CENA ZA DOBĘ</td>
                    <td colSpan={4}> {dayPrice}</td>
                </tr>
                <tr>
                    <td>CENA ZA CAŁY POBYT</td>
                    <td colSpan={4}> {allPrice}</td>
                </tr>
                </tbody>
            </table>
            </div>
            </section>
            </div>
        )
    }
}

export default Main
