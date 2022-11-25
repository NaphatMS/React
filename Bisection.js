import { Component, React } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

class Bisection extends Component{
    constructor(){
        super()
    }
    componentDidMount(){
    }
    getValue(){
        var equation = document.getElementById("equation").value;
        console.log(equation);
        var XL = document.getElementById("XL").value;
        var XR = document.getElementById("XR").value;
        do{
            var xm = (Number(XL)+Number(XR))/2
            var x=xm
            var fxm = eval(equation)
            var x=XR
            var fxr = eval(equation)
            if(fxm*fxr<0){
                var error=Math.abs(xm-XL)/xm*100
                XL=xm
            }
            else{
                var error=Math.abs(xm-XR)/xm*100
                XR=xm
            }
        }while(error >= 0.000001 || error <= -0.0000001)
        var ans = xm
        document.getElementById("showans").innerHTML=ans;

    }
    render(){
        return(
            <div>
                <br/>
                <h3>Bisection</h3>
                <br/>
                <Form>
                    <Form.Group className="mb-3">
                        <div>
                            <Form.Control id="equation" type="text" placeholder="Equation" style={{width:"20%",margin: "0 auto"}}></Form.Control>   <br></br>                        
                            <Form.Control id="XL" type="number" placeholder="XL" style={{width:"20%" ,margin: "0 auto"} }></Form.Control>           <br></br>  
                            <Form.Control id="XR" type="number" placeholder="XR" style={{width:"20%" ,margin: "0 auto"} }></Form.Control>
                            
                        </div>
                        <br></br>  
                        <Button onClick={this.getValue} variant="dark ">
                            submit
                        </Button>
                    </Form.Group>
                </Form>
                <br/>
                <br></br>  
                <div id="showans"></div>
            </div>
        );
    }
}
export default Bisection