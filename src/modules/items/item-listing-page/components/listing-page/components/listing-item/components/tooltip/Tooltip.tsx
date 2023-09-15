import { Item } from 'modules/items/domain/Item';
import { FC, useMemo, useState } from 'react';
import classNames from 'classnames';

import css from './Tooltip.module.scss';

type ToolTipProps = {
    item: Item;
    className?: string;
};

const ToolTip: FC<ToolTipProps> = ({ item, className }) => {
    const [isOpen, setIsOpen] = useState(false);

    const tooltipIconSrc = useMemo(
        () =>
            !isOpen
                ? '/assets/tooltip-static.svg'
                : '/assets/tooltip-hover.svg',
        [isOpen]
    );

    return (
        <div
            className={classNames(css['tooltip'], className)}
            onMouseOver={() => setIsOpen(true)}
            onMouseOut={() => setIsOpen(false)}
        >
            <img src={tooltipIconSrc} alt="tooltip" />
            {isOpen && (
                <div className={css['overlay']}>
                    <div className={css['image']}>
                        <img src={item.imageSrc} alt="item image" />
                    </div>
                    <div className={css['details']}>
                        <p className={css['title']}>Description</p>
                        <p className={css['description']}>{item.description}</p>
                        <p className={css['title']}>Key features</p>
                        <div className={css['key-features']}>
                            <p>Lines</p>
                            <p>{item.lines} Lines</p>
                            <p>Display</p>
                            <p>{item.display}</p>
                            <p>Bluetooth</p>
                            <p>{item.bluetooth}</p>
                            <p>Connection</p>
                            <p>{item.connection}</p>
                            <p>USB</p>
                            <p>{item.usb}</p>
                            <p>PoE</p>
                            <p>{item.poE ? 'Yes' : 'No'}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ToolTip;
