// 
const counter = document.getElementById('counter');
const timepass = document.getElementById('progress-time');
const imagechange = document.getElementById('bin-center');
const dustbinSize=30;

async function getdata() {
    console.log("called");
    const url = 'https://api.thingspeak.com/channels/1712416/feeds.json?api_key=OPT9P14RHAQBTPMN&results=2';
    try {
        const response = await fetch(url);
        const data = await response.json();

        var checkpoint = data.feeds[0].field1;
        console.log(checkpoint);
        var percentage= dustbinSize-checkpoint;
        var purepercentage=(100-(percentage/dustbinSize)*100).toFixed(2);
        timepass.style.height = `${purepercentage}%`;
        counter.innerText = `${purepercentage}%`;

        if (percentage>=0 && percentage<10) {
            imagechange.src = "./images/dustbin3.png";
            timepass.style.backgroundColor="green";
        }
        else if (percentage>=10  && checkpoint <20) {
            imagechange.src = "./images/dustbin2.png";
            timepass.style.backgroundColor="yellow";
        }
        else {
            imagechange.src = "./images/dustbin1.png";
            timepass.style.backgroundColor="red";
        }

       // setTimeout(getdata,1000);
    } catch (error) {
        //getdata();
        console.log('error');
    }
}



//load funtion
getdata();