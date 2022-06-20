
export async function SelectionSort(){
    document.getElementById("new_array")
    let bars = document.querySelectorAll('.bar');
    for(let i = 0; i<bars.length; i++){
        console.log(bars[i].innerHTML);
    }
    var midx = 0;
    for(let i = 0; i< bars.length; i++){
        midx = i;
        bars[i].style.backgroundColor = '#B4FF9F';
        
        for(let j = i+1; j<bars.length; j++){
            bars[j].style.backgroundColor = '#CDF0EA';
            
            await new Promise((resolve)=>{
                    setTimeout(()=>{
                    resolve();
                },300)
            });
            
            let v1 = parseInt(bars[j].innerHTML);
            let v2 = parseInt(bars[midx].innerHTML);
            if(v1<v2){
                if(midx!==i){
                    bars[midx].style.backgroundColor = '#FAD4D4';
                }
                midx = j;
            }else{
                bars[j].style.backgroundColor = '#FAD4D4';
            }
        }

        // bars[i].style.backgroundColor = '#FF8C8C';
        // bars[midx].style.backgroundColor = '#FF8C8C';
        
        var w1 = bars[midx].style.width;
        var t1 = bars[midx].innerHTML;
        
        bars[midx].style.width = bars[i].style.width;
        bars[midx].innerHTML = bars[i].innerHTML;
        
        bars[i].innerHTML = t1;
        bars[i].style.width = w1;
        
        await new Promise((resolve)=>{
            setTimeout(() => {
                resolve(); 
            }, 300);
        });
        
        bars[midx].style.backgroundColor = '#FAD4D4';
        bars[i].style.backgroundColor = '#FF5D5D';
        bars[i].style.color = 'white';
    }
    
    await new Promise((resolve)=>{
        setTimeout(() => {
            resolve(); 
        }, 300);
    });
    
    for(let i = 0; i<bars.length; i++){
        bars[i].style.backgroundColor = '#FAD4D4';
        bars[i].style.color = 'black';
    }
}