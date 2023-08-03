function skillsMember() {
    var member = document.getElementById("member");
    var memberName = member.options[member.selectedIndex].value;
    if (memberName == "member") {
        document.getElementById("memberSkills").style.display = "none";
    } else {
        document.getElementById("memberSkills").style.display = "block";
    }
}