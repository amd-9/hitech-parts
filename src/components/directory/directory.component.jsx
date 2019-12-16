import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'CPU',
                imageUrl: 'https://3dnews.ru/assets/external/illustrations/2019/01/15/981058/asdf1.jpg',
                id: 1,
                linkUrl: 'cpu',
            },
            {
                title: 'Motherboards',
                imageUrl: 'https://www.asus.com/media/global/products/3xoclgdkoiofvaax/P_setting_fff_1_90_end_600.png',
                id: 2,
                linkUrl: 'motherboards',
            },
            {
                title: 'RAM',
                imageUrl: 'https://hardprice.ru/images/g/product/1700/operativnaya-pamyat-16gb-3000mhz-corsair-vengeance-rgb-pro-2x8gb-kit-cl15-ddr4-cmw16gx4m2c3000c15-2.jpg',
                id: 3,
                linkUrl: 'ram',
            },
            {
                title: 'GPU',
                imageUrl: 'https://c1.neweggimages.com/NeweggImage/ProductImage/14-137-338-V19.jpg',
                size: 'large',
                id: 4,
                linkUrl: 'gpu',
            },
            {
                title: 'CASES',
                imageUrl: 'https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/77/37/773e21fb-c35d-401a-b3fc-2399c335a459.jpg',
                size: 'large',
                id: 5,
                linkUrl: 'cases',
            },],
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
        );
    }
}

export default Directory;
