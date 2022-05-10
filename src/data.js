function Products_data(dataName){
    switch (dataName) {
        case"products":
        const products =[
            {
                name: "Iphone 13 pro max",
                img:"https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong.jpg",
                detail:"DIGITAL PHONE NEW"
            },
            {
                name: "Iphone 13",
                img:"https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong.jpg",
                detail:"DIGITAL PHONE OLD"
            },
            {
                name: "Iphone 12",
                img:"https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong.jpg",
                detail:"DIGITAL CAMERA NEW"
            },
            {
                name: "Iphone 12 pro max",
                img:"https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong.jpg",
                detail:"DIGITAL CAMERA NEW"
            },
            {
                name: "Iphone 11 pro max",
                img:"https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong.jpg",
                detail:"DIGITAL CAMERA NEW"
            },
     
        ]
        return products;
        case"categories":
            const categories = [
                {
                    name: "categories Iphone 13 pro max",
                    img: "https://thuthuatnhanh.com/wp-content/uploads/2019/07/anh-girl-xinh-facebook-tuyet-dep-387x580.jpg",
                    detail: "DIGITAL PHONE NEW"
                },
                {
                    name: "categories Iphone 13",
                    img: "https://thuthuatnhanh.com/wp-content/uploads/2019/07/anh-girl-xinh-facebook-tuyet-dep-387x580.jpg",
                    detail: "DIGITAL PHONE OLD"
                },
                {
                    name: "categories Iphone 12 pro max",
                    img: "https://thuthuatnhanh.com/wp-content/uploads/2019/07/anh-girl-xinh-facebook-tuyet-dep-387x580.jpg",
                    detail: "DIGITAL PHONE NEW"
                },
                {
                    name: "categories Iphone 12",
                    img: "https://thuthuatnhanh.com/wp-content/uploads/2019/07/anh-girl-xinh-facebook-tuyet-dep-387x580.jpg",
                    detail: "DIGITAL PHONE OLD"
                }
            ]
        return categories;
    }
}

export default Products_data;