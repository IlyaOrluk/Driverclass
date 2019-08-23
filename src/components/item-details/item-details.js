import React from 'react';
import './item-details.css';



const ItemDetails = ({ item, ...props }) => {
    const { name, img, base_exp } = item;
    const frontImage = img.front ? <img src={img.front} alt={name} /> : <img src='https://pokemon-visualguide.com/assets/img/pokeball.png' alt={name} />;
    const backImage = img.back ? <img src={img.back} alt={name} /> : null;
    return (
        <React.Fragment>
            <h4>{name}</h4>
            <div className='preview-item'>
                <div className='item-details-images'>
                    {frontImage}
                    {backImage}
                    <span className='base-exp'>{base_exp}xp</span>
                </div>
                <div className='item-details'>
                    {
                        React.Children.map(props.children, (child) => {
                            return React.cloneElement(child, { item });
                        })
                    }
                </div>
            </div>
            <div className='item-details-stats'>
            <h5>Base stats:</h5>
                {
                    item.stats.map((item, id) => {
                        const progresStyle = {
                            width: `${item.stat / 10}vh`,
                            background: `rgba(${item.stat}, 150, 50, 1)`
                        };
                        return (
                            <React.Fragment key={id}>
                                <span >{item.name}: {item.stat}</span>
                                <div className='stats-bar'>
                                    <div className='stats-bar-progress' style={progresStyle}></div>
                                </div>
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </React.Fragment>
    );
}

export default ItemDetails;