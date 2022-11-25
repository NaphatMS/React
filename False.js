import { Component, React } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

class False extends Component{
    constructor(){
        super()
    }
    componentDidMount(){ 
    }
    
    getValue(){
        var equation = document.getElementById("equation").value;
        var XL = document.getElementById("XL").value;
        var XR = document.getElementById("XR").value;
        var xold,XR,XL,x,xm=0  ; 
        var fxr,fxl,fxm ;
        var error ; 
        
        do{ 
            x=XR
            fxr = eval(equation)
            x=XL
            fxl = eval(equation)
            xold =xm
            xm = (XL*fxr-XR*fxl)/(fxr-fxl)
            x = xm
            fxm = eval(equation)

            if(fxm*fxr>0)
            {
                XR=xm
            }
            else
                XL=xm
            
            error = Math.abs(xm-xold)/xm*100         
            
        }while(error >= 0.000001)
        var ans = xm
        document.getElementById("showans").innerHTML=ans;
    }

    render(){
        return (
            <div>
            <br/>
            <h3>False-Position</h3>
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
                        summit
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
export default False