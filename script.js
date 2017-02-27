function submit() 
{
    let teamNum = document.getElementById("teamNum").value
    let teamEntryNum = localStorage.getItem(teamNum + "-entryNum")
    if(isNaN(teamEntryNum))
    {
        teamEntryNum = 0
    }
    else
    {
        teamEntryNum ++
    }

    localStorage.setItem(teamNum + "-entryNum", teamEntryNum)

    let teamList = localStorage.getItem("teams")

    if(teamList == null)
    {
        localStorage.setItem("teams",teamNum)
    }
    else
    {
        let teamArray = teamList.split(",")

        if(teamArray.indexOf(teamNum) == -1)
       {
           teamArray.push(teamNum)
       }  
      localStorage.setItem("teams", teamArray.toString())
    }
    let autonShots = document.getElementById("autonShots").value
    localStorage.setItem(teamNum + "-" + teamEntryNum + "-autonShots", autonShots)

    let autonBeacons = document.getElementById("autonBeacons").value
    localStorage.setItem(teamNum + "-" + teamEntryNum + "-autonBeacons", autonBeacons)

    let park = document.getElementById("park").value
    localStorage.setItem(teamNum + "-" + teamEntryNum + "-park", park)

    let teleopShots = document.getElementById("teleopShots").value
    localStorage.setItem(teamNum + "-" + teamEntryNum + "-teleopShots", teleopShots)

    let teleopBeacons = document.getElementById("teleopBeacons").value
    localStorage.setItem(teamNum + "-" + teamEntryNum + "-teleopBeacons", teleopBeacons)

    let cap = document.getElementById("cap").value
    localStorage.setItem(teamNum + "-" + teamEntryNum + "-cap", cap)

    let notes = document.getElementById("notes").value
    localStorage.setItem(teamNum + "-" + teamEntryNum + "-notes", notes)

    location.reload()
}

function search()
{
    let team = document.getElementById("team").value
    let entryNum = localStorage.getItem(team + "-entryNum")
    for(let i = 1; i <= entryNum; i ++)
    {
        let auton_shots = localStorage.getItem(team + "-" + i + "-autonShots")
        let auton_beacons = localStorage.getItem(team + "-" + i + "-autonBeacons")
        let park = localStorage.getItem(team + "-" + i + "-park")
        let teleop_shots = localStorage.getItem(team + "-" + i + "-teleopShots")
        let teleop_beacons = localStorage.getItem(team + "-" + i + "-teleopBeacons")
        let cap_ball = localStorage.getItem(team + "-" + i + "-cap")
        let note = localStorage.getItem(team + "-" + i + "-notes")

        document.getElementById("table").innerHTML += `<tr><td>${i}</td><td>${team}</td><td>${auton_shots}</td><td>${auton_beacons}</td><td>${park}</td><td>${teleop_shots}</td><td>${teleop_beacons}</td><td>${cap_ball}</td><td class="notes">${note}</td></tr>`
    }
}

function showAll()
{
    let array = localStorage.getItem("teams").split(",")
    for(let x in array)
    {
        let team = array[x]
        let entryNum = localStorage.getItem(team + "-entryNum")
        for(let i = 1; i <= entryNum; i ++)
        {
            let auton_shots = localStorage.getItem(team + "-" + i + "-autonShots")
            let auton_beacons = localStorage.getItem(team + "-" + i + "-autonBeacons")
            let park = localStorage.getItem(team + "-" + i + "-park")
            let teleop_shots = localStorage.getItem(team + "-" + i + "-teleopShots")
            let teleop_beacons = localStorage.getItem(team + "-" + i + "-teleopBeacons")
            let cap_ball = localStorage.getItem(team + "-" + i + "-cap")
            let note = localStorage.getItem(team + "-" + i + "-notes")

            document.getElementById("table").innerHTML += `<tr><td>${i}</td><td>${team}</td><td>${auton_shots}</td><td>${auton_beacons}</td><td>${park}</td><td>${teleop_shots}</td><td>${teleop_beacons}</td><td>${cap_ball}</td><td class="notes">${note}</td></tr>`
        }
    }
}