import './test.css'

const Test = (props) => {
    return (
    <>
        <div className="product">
        <img src={props.image} width = {500} height = {500} />
            <div className='name'>
                <p>{props.name}</p>
                <p>{props.price}</p>
                <button >Mua ngay</button>
            </div>
        
        </div>        
    </>
        );
    }
    export default Test;
    