

export function SearchComponent() {
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                    type="text"
                    placeholder="Search for products, brands, and more"
                    style={{
                        padding: '8px',
                        paddingLeft: '30px',
                        width: '280px',
                        height: '25px',
                        // marginLeft: '200px',
                        border: 'none',
                        background: '#f2f2f2',
                        color: 'gray',
                        outline: 'none',
                        borderRadius: '4px',
                    }}
                />
                <img
                    src='https://cdn-icons-png.flaticon.com/128/54/54481.png'
                    alt=''
                    style={{
                        position: 'absolute',
                        // left: '190px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '10px',
                        height: '15px',
                        marginLeft: '10px',
                    }}
                />
            </div>
        </div>
    );
}

export function ImageWithName({ img, name }) {
    return (
        <div className='flex-column' style={{ alignItems: 'center', cursor: 'pointer' }}>
            <img src={img} width='15px' alt='' />
            <h5 style={{ margin: '0', marginTop: '7px' }}>{name}</h5>
        </div>
    )
}

export function CheckboxWithName({ title }) {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div style={{ marginLeft: '15px' }}>
            <h3>{title}</h3>
            {list.map((model) => <label className="checkbox-option" style={{ margin: '5px 0', display: 'flex', alignItems: 'center' }}>
                <input type="checkbox" name="category" value="tshirts" />{`Checkbox ${model}`}
                <span style={{ marginLeft: '10px', color: '#888', margin: '2px' }}>(230244)</span>
            </label>)}
            <hr></hr>
        </div>
    )
}

export function Brandbox({ title }) {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div style={{ marginLeft: '15px', margin: '5px' }}>
            <h3>{title}</h3>
            {list.map((model) => <label className="checkbox-option" style={{ margin: '5px 0', display: 'flex', alignItems: 'center' }}>
                <input type="checkbox" name="category" value="tshirts" />{`Checkbox ${model}`}
                <span style={{ marginLeft: '10px', color: '#888', margin: '2px' }}>(230244)</span>
            </label>)}
            <hr></hr>
        </div>
    )
}

export function Pricebox({ title }) {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div style={{ marginLeft: '15px', margin: '5px' }}>
            <h3>{title}</h3>
            {list.map((model) => <label className="checkbox-option" style={{ margin: '5px 0', display: 'flex', alignItems: 'center' }}>
                <input type="checkbox" name="category" value="tshirts" />{`Checkbox ${model}`}
                <span style={{ marginLeft: '10px', color: '#888', margin: '2px' }}>(230244)</span>
            </label>)}
            <hr></hr>
        </div>
    )
}

export function Discountbox({ title }) {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div style={{ marginLeft: '15px', margin: '5px' }}>
            <h3>{title}</h3>
            {list.map((model) => <label className="checkbox-option" style={{ margin: '5px 0', display: 'flex', alignItems: 'center' }}>
                <input type="checkbox" name="category" value="tshirts" />{`Checkbox ${model}`}
                <span style={{ marginLeft: '10px', color: '#888', margin: '2px' }}>(230244)</span>
            </label>)}
            <hr style={{ width: '217px', marginLeft: '1px', marginTop: '1px', color: '#rgb(183, 199, 183)' }}></hr>

        </div>
    )
}

export function ProductsImg({ img, brand, name, price, cprice, discount }) {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    return (
        <>
            {list.map((model) =>
                <div className="flex-column">
                    <div class="vertical-line"></div>

                    <img src={img} width='200px' alt='' />
                    <h3>{brand}</h3>
                    <span style={{ color: '#888' }}>{name}</span>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h4>{price}</h4>
                        <del style={{ color: '#888', marginLeft: '5px' }}>{cprice}</del>
                        <span style={{ color: 'red', fontSize: '10px', marginLeft: '5px' }}>{discount}</span>
                    </div>
                </div>
            )}
        </>
    )
}