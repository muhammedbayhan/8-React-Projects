import React, { useEffect, useState } from 'react'

const RussianRoulette = () => {
    const [rotate, setRotate] = useState(0);
    const [step, setStep] = useState(1);
    const [random, setRandom] = useState(0);
    const [player, setPlayer] = useState("Player-1");
    const [playerColor, setPlayerColor] = useState("green");
    const [winner, setWinner] = useState(null);
    const [ammo, setAmmo] = useState([6,5,4,3,2,1]);
useEffect(() => {
const randomGenerate=()=>{
    let randomNumber=Math.floor(Math.random() * (6 - 1 + 1) + 1);
    setRandom(randomNumber);

};
randomGenerate();
console.log(`generated random =${random}`);
}, [])


    

const shot=()=>{
    ammo.pop();
    console.log(winner);
if (step==random) {
    if (step%2==0) {
        setWinner("Player-1");
    }
    else{
        setWinner("Player-2");
    }
    console.log("gameover...");
    return;
}


    console.log(`steprandom =${random}`);
    setStep(step+1);
 
if (rotate>=90) {
    setRotate(0);
}
else{
    setRotate(rotate+90)
}
if (step>=6) {
   
    console.log("GameOver");
    return;
}
if (step%2==0) {
    setPlayer("Player-1");
    setPlayerColor("green")
}
else{
    setPlayer("Player-2") 
    setPlayerColor("red")
}
console.log(step);
};
    return (
        <div className= {`flex flex-col h-screen justify-center items-center bg-${playerColor}-500`} >
            <img className={`z-0 transform rotate-${rotate}`}
                src="https://usefulicons.com/uploads/icons/201906/1330/013d3666b055.png" alt="" />

            <button onClick={shot} className='cursor-pointer w-24 p-2 text-sm font-medium text-center text-white bg-black  hover:bg-slate-800 focus:ring-4'>{player}</button>
            {winner==null?<div></div>:<div><div className='text-white text-9xl'>Winner:{winner}</div>
            <button onClick={()=>{location.reload();} } className='cursor-pointer w-full p-2 text-sm font-medium text-center text-white bg-green-950 hover:bg-green-300 focus:ring-4'>Restart</button>
            </div>}
            <div className='flex pt-24'>
            {ammo.map(()=>(
                 <img className='w-24' src="https://cdn2.iconfinder.com/data/icons/shooting-sport/500/vab731_6_shooting_bullet_isometric_cartoon_silhouette_ammunition_weapon-512.png" alt="" />
            ))}
            </div>
        </div>
    )
}

export default RussianRoulette