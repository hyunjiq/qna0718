import React from 'react';
import cafenavi from './json/db.json';

function Gnb() {
    // 상위 메뉴 필터링
    const d1navi = cafenavi.filter((item) => item.prnum === "");

    // 소메뉴 수집
    const submenus = {};  // key prnum

    for (let item of cafenavi) { // object 
        if (item.prnum) { // 소메뉴들이 수집

            if (!submenus[item.prnum]) {
                submenus[item.prnum] = []; // 빈문자열을 넣고
            }
            submenus[item.prnum].push(item);
        }
    }
    //  submenus["1"] --> array
    // const submenus = {
    //     "1" : [ {
    //     "gnbnm" : "미션",
    //     "gnblink" : "misson",
    //     "prnum" : "1",
    //     "cateno" : "1"
    // },       
    // {
    //     "gnbnm" : "소싱철학",
    //     "gnblink" : "sourcing",
    //     "prnum" : "1",
    //     "cateno" : "2"
    // }  ],
    //     "2" : []
    //  }

    return (
        <ul className='d-flex'>
            {
                d1navi.map((v, i) => {
                    return (
                        <li className='px-3' key={`gnbnavi${i}`}>
                            {v.gnbnm}
                            {submenus[v.cateno] &&
                            <ul>
                                {
                                    // 소메뉴 매핑
                                     submenus[v.cateno].map((vv, ii) => (
                                        <li key={`submenu${ii}`}>{vv.gnbnm}</li>
                                    ))
                                }
                            </ul>
                            }
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default Gnb;
