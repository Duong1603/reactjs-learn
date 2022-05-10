import React, {Component} from "react";
import Item from "./item/Item";
import Products_data from "../../../data/data";




class Right extends Component {
    render() {
        var dis_products = Products_data("products");
        var dis_categoris = Products_data("categories");
        var items = [];
        for (var i = 0; i < dis_products.length; i++) {
            rows[i] =
                <Item
                    tenSP={dis_products[i].name}
                    anh={dis_products[i].img}
                    chitiet={dis_products[i].detail}>    
                </Item>// truyền dât vô
            ;
        }
        return (
           <div id="conten-right">
                <h2>Product : </h2>
                <div id="products">
                {items}
                <div style={{clear:"both"}} />
                </div>
                <div style={{clear:"both"}} />
          </div>
        )
    }
}
export default Right;