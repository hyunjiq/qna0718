import React from 'react';
import cafenavi from './json/db.json';

function Gnb() {
    // 상위 메뉴 필터링
    const d1navi = cafenavi.filter((item) => item.prnum === "");

    return (
        <ul className='d-flex'>
            {d1navi.map((v, i) => {
                // 하위 메뉴 필터링
                const subMenuItems = cafenavi.filter(item => item.prnum === v.cateno);
                return (
                    <li className='px-3' key={`gnbnavi${i}`}>
                        {v.gnbnm}
                        {subMenuItems.length > 0 && (
                            <ul>
                                {subMenuItems.map((vv, ii) => (
                                    <li key={`submenu${ii}`}>{vv.gnbnm}</li>
                                ))}
                            </ul>
                        )}
                    </li>
                );
            })}
        </ul>
    );
}

export default Gnb;
