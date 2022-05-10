import React, { Component } from "react";
<<<<<<< HEAD
// import Products_data from "../../../../data";



const thongbao=(name)=>{
  alert(
    "bạn đã mua thành công " + name
    );
}
=======
const affterClick = (name) => {
            alert("Order Succesfull " + name)           
  }
>>>>>>> 4ef201e3684176d93fcbfc74be8056d5be185666

class Item extends Component {

    render() {
        return (


            <div className="product">
                <div className="text">
                  <div className="chose">
                    <a href="item.html">{this.props.tenSP}</a></div>
                </div>
                <div className="img-product">
                  <img src={this.props.anh} alt="" />
                </div>
                <div className="infomation">
                  <div className="infomation-detail">{this.props.chitiet}</div>
                  <div className="please">please Call</div>
<<<<<<< HEAD
                  <div className="submit" >
                  <button onClick={() => thongbao(this.props.tenSP)} type="submit" name="ADD" defaultValue="ADD">mua</button>
                    </div>
=======
>>>>>>> 4ef201e3684176d93fcbfc74be8056d5be185666
                </div>
               
               
               
               
                    <div className="sub"><button type="button" onClick={() => affterClick(this.props.tenSP)} defaultValue="ADD" >add</button>  </div>
              </div>

        
        );
    }
}
export default Item;