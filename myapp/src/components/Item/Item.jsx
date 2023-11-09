import React from 'react'

export default function Item(props) {
    return (
        <><div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src="https://static.vecteezy.com/system/resources/previews/002/641/213/non_2x/package-icon-vector.jpg" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title"> {props.title}</h5>
                <p className="card-text">
                    Descripción: {props.description}
                </p>
                <p>Precio: ${props.price}</p>
                <p>SKU (Stock Keeping Unit): {props.stock}</p>
                <p>Stock: 12</p>
                <a href="#" className="btn btn-primary">
                    Comprar
                </a>
            </div>
        </div>

        </>

    )
}
