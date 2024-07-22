import React, { Fragment } from 'react'
import godonavi from './json/db2.json'


function Gnb3() {

    const d1info = godonavi.filter((item) => item["prnum"].split("|").length === 1 )
    // const submenus = {};

    // for (let item of godonavi) { 
        
    //     if (item.prnum.split('|')[1]) { // 소메뉴들 만 대상

    //         if (!submenus[item.prnum.split('|')[0]]) {
    //             submenus[item.prnum.split('|')[0]] = []; // 초기값선언 빈문자열을 넣고
    //         }
    //         submenus[item.prnum.split('|')[0]].push(item);
    //     }
    // }
    // 스피드 차이때문에 먼저 json을 다시 만들어서 쓰는걸 선호함

   

    return (
        <ul>
            {/*  console.log(submenus) */}
            {

                
              d1info  &&   d1info.map((v, i)=>{
                const submenus = godonavi.filter((item) => item["prnum"].split("|")[1] && item["prnum"].split("|")[0] === v.prnum[0])
                    return(
                       <li key={`gnbli${i}`} > {v.gnbnm} 
                       {
                       submenus.length > 0 && (
                        <ul>
                            <li>
                                {
                                    godonavi.filter((item) => 
                                        item["prnum"].split("|").length > 1 && item["prnum"].split("|")[0] === v.prnum )
                                     .map((vv, ii)=> {
                                             return(
                                                 <li key={`gnbli${ii}`}>{vv.gnbnm}</li>
                
                                             )      
                                     })        
                                }
                            </li>
                       </ul>
                    
                       )
                       //양이 많을때는 이쪽이 더 느림
                    }
                       
                           {
                    // godonavi.filter((item) => 
                    //    item["prnum"].split("|").length > 1 && item["prnum"].split("|")[0] === v.prnum )
                    // .map((vv, ii)=> {
                    //         return(
                    //             <li key={`gnbli${ii}`}>{vv.gnbnm}</li>

                    //         )      
                    // })                
                    
                           }
                                               
                       </li>
                    )
                })
            }
        </ul>
    )
}


export default Gnb3
