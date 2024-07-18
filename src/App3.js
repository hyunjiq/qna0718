import { useState, useEffect } from 'react'
import tabjson from './json/list2.json'


function App3() {
    const [tabnm, setTabnm] = useState('notice');

    useEffect(()=>{
        const buttons = document.querySelectorAll('.tabs button');
        let currentIndex = 0;

        const switchTab = () => {
            buttons[currentIndex].click();
            currentIndex = (currentIndex + 1) % buttons.length;
        };
        const interval = setInterval(switchTab, 3000);

        //이 컴포넌트가 삭제할때 ture를 return
        return () => clearInterval(interval); 
                // 이 컴포넌트가 삭제될때 컴포넌트는 UI+JS 패키지이다.
        // 화면에서 사라진것은 UI일뿐 JS는 살아있으므로 삭제하고 나갈것
        
    }, [])

    // 마운드 ( 화면등장 ) 
    // -> 업데이트(상태변수: 재랜더링으로 컨텐츠변경)
    // -> 언마운트 ( 콘솔 정리하고 삭제 ) 

    
    return (
        <div className="tabwrap d-flex container border">
            <ul className="tabs">
                <li><button onClick={()=>{ setTabnm('notice') }}>{tabjson["notice"]["title"]}</button></li>
                <li><button onClick={()=>{ setTabnm('gallery') }}>{tabjson["gallery"]["title"]}</button></li>
                <li><button onClick={()=>{ setTabnm('qna') }}>{tabjson["qna"]["title"]}</button></li>
            </ul>
            <div className="content col border">
                <ul>
                {
                    tabjson[tabnm]["content"].map((v, i)=>
                            <li key={`list${i}`}>
                                {
                                    v.split("|").map((vv, ii)=>(
                                        
                                        ii === 0 ? <h2>{vv}</h2> : <p>{vv}</p>
                                                                                
                                    ))
                                }
                            </li>
                    )
                }
                </ul>
            </div>
        </div>
    )
}

export default App3
