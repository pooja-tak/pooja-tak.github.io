(function(){
    var skillList = [
        {
            value:"HTML",
            skillrate: 7
        },
        {
            value:"CSS",
            skillrate: 7
        },
        {
            value:"Node JS",
            skillrate: 5
        },
        {
            value:"Mongo Db",
            skillrate: 6
        },
        {
            value:"Express Js",
            skillrate: 5
        },
        {
            value:"Docker",
            skillrate: 5
        },
        {
            value:"GIT",
            skillrate: 6
        }
    ]
    var str = '';
    for(var i=0; i<skillList.length;i++){
        str += `<li><div class="rating-container">${createSkillRating(skillList[i].skillrate)}</div><div>${skillList[i].value}</div></li>`
    }
    if(str != ""){
        document.getElementsByClassName("skillset")[0].innerHTML = str;
    }
    function createSkillRating(rating){
        var str = "";
        for(var i=10; i>0; i--){
            if(rating <= i){
                str += `<span class="active-bull">&bull;</span>`
            }
            else{
                str += `<spanclass="inactive-bull">&bull;</span>`
            }
        }
        return str;
    }
})()