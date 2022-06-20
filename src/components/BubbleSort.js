
export async function BubbleSort(){
    
    document.getElementById("new_array")
    
    let bars = document.querySelectorAll('.bar');
    for(let i = 0; i<bars.length; i++){
        console.log(bars[i].innerHTML);
    }

    for(let i = 0; i< bars.length; i++){
        
        for(let j = 0; j<bars.length-i-1; j++){
            bars[j].style.backgroundColor = '#B4FF9F';
            bars[j+1].style.backgroundColor = '#B4FF9F';
            
            await new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve();
                },300)
            });
            
            let v1 = parseInt(bars[j].innerHTML);
            let v2 = parseInt(bars[j+1].innerHTML);
            if(v1>v2){

                bars[j].style.backgroundColor = '#FF8C8C';
                bars[j+1].style.backgroundColor = '#FF8C8C';
                
                var w1 = bars[j+1].style.width;
                var t1 = bars[j+1].innerHTML;
                
                bars[j+1].style.width = bars[j].style.width;
                bars[j+1].innerHTML = bars[j].innerHTML;
                
                bars[j].innerHTML = t1;
                bars[j].style.width = w1;
                
                await new Promise((resolve)=>{
                    setTimeout(() => {
                        resolve(); 
                    }, 300);
                });
                
                bars[j+1].style.backgroundColor = '#FAD4D4';
                bars[j].style.backgroundColor = '#FAD4D4';
                
            }else{
                bars[j].style.backgroundColor = '#FAD4D4';
                bars[j+1].style.backgroundColor = '#FAD4D4';
            }
        }
        bars[bars.length-1-i].style.backgroundColor='#FF5D5D';
        bars[bars.length-1-i].style.color = 'white';
    }
    
    for(let i = 0; i<bars.length; i++){
        bars[i].style.backgroundColor = '#FAD4D4';
        bars[i].style.color = 'black';
    }
}