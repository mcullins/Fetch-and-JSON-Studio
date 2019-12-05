window.addEventListener('load', function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            let count = 0;
            const div = document.getElementById("container");
            for(let i = 0; i<json.length; i++){
            div.innerHTML += `
            <div class="astronaut">
                <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li class="active">Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].skills}</li>
                    </ul>
                </div>
                <img class="avatar" src=${json[i].picture}>
            </div>
           `;

           //SORTS ALL EXCEPT DUPLICATES AND OVERWRITES THE FIRST ENTRY
            // json.sort(function(a, b){
            //     return a.hoursInSpace - b.hoursInSpace;
            // })
           
            //TURNS ACTIVE:TRUE GREEN
           let activeJSON = json[i].active;
           const active = document.getElementsByClassName("active");
           if (activeJSON){
               active[i].style.color = "green";
            }
            count += 1;
           }
           //ADDS COUNT TO HEADER
           const header = document.getElementById("header");
           header.innerHTML += ` Count: ${count}`;
        })
    })  
})