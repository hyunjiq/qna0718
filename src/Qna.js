import React, { Fragment, useEffect } from 'react';
import qnalist from './json/qna.json';

const { qna } = qnalist;

function Qna(props) {
    useEffect(() => {
        const dts = document.querySelectorAll("#qna dt");

        const dtsclick = (num) => {
            if (dts[num]) {
                dts.forEach((v, i) => {
                    v.classList.remove('on');
                });
                dts[num].classList.add('on');
            }
        };

        // 초기에 첫 번째 항목을 선택하도록 호출
        dtsclick(0);
    }, []);

    const dtsclick = (num) => {
        const dts = document.querySelectorAll("#qna dt");
        if (dts[num]) {
            dts.forEach((v, i) => {
                
                v.classList.remove('on');
            });
            dts[num].classList.add('on');
        }
    };

    //classList -> ui
    
    return (
        <dl className='container my-5' id={props.keynm}>
            {
                qna.map((v, i) => (
                    <Fragment key={`qnalist${i}`}>
                        <dt className={`bg-dark text-white ${i === 0 ? "on" : null}`} onClick={() => dtsclick(i)}>{v.Q}</dt>
                        <dd className='py-5'>{v.A}</dd>
                    </Fragment>
                ))
            }
        </dl>
    );
}

export default Qna;